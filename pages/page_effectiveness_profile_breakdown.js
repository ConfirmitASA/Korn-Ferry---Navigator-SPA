// EffecivenessProfileBreakdown

function EffectivenessProfileBreakdown_Page() {
	return {
		Label: meta.Labels.EffectivenessProfileBreakdown.Title,

		LeftPane: meta.Labels.EffectivenessProfileBreakdown.Label,

		RightPane: `
		<div class="effectiveness-breakdown-container"></div>
		`,

		ClassName: 'effectiveness-container',
		Style: null,
		ShowFilterSummary: true
	};
}

function EffectivenessProfileBreakdown_PageId() {
	return "submenuitem-GroupHeadlines-EffectivenessProfileBreakdown";
}

function EffectivenessProfileBreakdown_Render() {
	var demographic_dropdown = Component_Dropdown(
		'breakby',
		meta.Labels['labels.BreakBy'].Label,
		'effectiveness-breakdown-dropdown',
		'',
		ParamValues_BreakBy()
	);

	var dt = EffectivenessProfileBreakdown_ItemsTable();

	var o = [
		Component_TestDataIndicator ( data.isTestData ),
		demographic_dropdown,
		dt.Html
	];

	$(".effectiveness-breakdown-container").html( o.join('') );

	if ( dt.ScriptCode != null ) eval ( dt.ScriptCode );

	// Change Handler: Demographic Dropdown Selection
	$('#effectiveness-breakdown-dropdown').change( function() {
		var breakbyElementValue = $(this).val();
		State_Set ('breakby', breakbyElementValue);

		var selectorObj = {
			selectorElementValue: breakbyElementValue,
			parameterName: 'breakby'
		}

		EffectivenessProfileBreakdown_HandleSelectorChange(selectorObj);
	});
}

function EffectivenessProfileBreakdown_HandleSelectorChange(selectorObj) {
	// Save Selection
	State_Set(selectorObj.parameterName, selectorObj.selectorElementValue);

	Main_RefreshCurrentPage();
}

function EffectivenessProfileBreakdown_VariableId() {
	return $('#effectiveness-breakdown-dropdown').val();
}

function EffectivenessProfileBreakdown_Key() {
	return Main_GetKeyWithFilter( 'EPX', config.CurrentWave, data.User.PersonalizedReportBase, State_Get ('breakby') );
}

function EffectivenessProfileBreakdown_Data() {
	var key = EffectivenessProfileBreakdown_Key();
	var segments = data[key];

	return segments;
}

function EffectivenessProfileBreakdown_MissingData() {
	// return true if rendering cannot happen due to missing data

	var is_missing_data = (EffectivenessProfileBreakdown_Data() == null);

	return is_missing_data;
}


function EffectivenessProfileBreakdown_ItemsTable() {

	if ( EffectivenessProfileBreakdown_MissingData() ) {
		return {
			Html: Main_Loader(),
			ScriptCode: "if ( EffectivenessProfileBreakdown_PageId() == State_GetCurrentPageId()) Main_SubmitQuery ( {Requester: 'EffectivenessProfileBreakdown_ItemsTable', ShowWaitMessage: false, DataRequest:[{ Type: 'EffectivenessProfile.Breakdown', Breakdown:'" + EffectivenessProfileBreakdown_VariableId() + "'}]} );"
		};
	}

	var o = [];

	var breakdown_variable_label = $('#effectiveness-breakdown-dropdown option:selected').text();

	var headers = [[
		{Label: breakdown_variable_label, ClassName: 'text-cell', colspan: 1, rowspan: 1},
		{Label: meta.Labels['labels.ValidN'].Label, ClassName: 'numeric-cell', colspan: 1, rowspan: 1},
		{Label: meta.Labels['labels.MostEffective'].Label, ClassName: 'numeric-cell distribution-cell', colspan: 1, rowspan: 1},
		{Label: meta.Labels['labels.Frustrated'].Label, ClassName: 'numeric-cell distribution-cell', colspan: 1, rowspan: 1},
		{Label: meta.Labels['labels.Detached'].Label, ClassName: 'numeric-cell distribution-cell', colspan: 1, rowspan: 1},
		{Label: meta.Labels['labels.LeastEffective'].Label, ClassName: 'numeric-cell distribution-cell', colspan: 1, rowspan: 1},
		{Label: meta.Labels['labels.Distribution'].Label, ClassName: 'numeric-cell barchart-cell', colspan: 1, rowspan: 1}
	]];

	var table_data = [];
	let formatter = Utils_FormatOutput;
	var breakdown_variable_id = EffectivenessProfileBreakdown_VariableId();
	var segments = EffectivenessProfileBreakdown_Data();

	if ( segments != null ) {


		for (var segment_code in segments) {  // example: segment_code = "410" (for Gender>Male)
			var segment_data = segments[segment_code];

			var dist = Utils_CountsToPercents ( segment_data.Dist );

			var option;

			switch (breakdown_variable_id.toUpperCase() ) {

				case 'ORGCODE':
					option = meta.Hierarchy.Map[segment_code];
					break;

				default:
					option = meta.Demographics[breakdown_variable_id].Answers[segment_code];
			}

			var label = (option == null)
				? NOT_AVAILABLE
				: option.Label;

			if (!segment_data.hasOwnProperty('N'))
				segment_data.N = Utils_Count ( segment_data.Dist );

			var percent_distribution = dist;

			var distribution_chart_html = Component_DistributionChartStacked(
				percent_distribution,
				"DistributionChart_EffectivenessProfile"
			);

			var row_data = [
				{ Label: label, ClassName: 'text-cell' },
				{ Label: formatter(segment_data.N), ClassName: 'numeric-cell' },
				{ Label: formatter(percent_distribution.MostEffective), ClassName: 'numeric-cell distribution-cell' },
				{ Label: formatter(percent_distribution.Frustrated), ClassName: 'numeric-cell distribution-cell' },
				{ Label: formatter(percent_distribution.Detached), ClassName: 'numeric-cell distribution-cell' },
				{ Label: formatter(percent_distribution.LeastEffective), ClassName: 'numeric-cell distribution-cell' },
				{ Label: distribution_chart_html, datasort: percent_distribution[0], ClassName: 'text-cell' }
			];

			table_data.push ( row_data );
		}
	}

	var columnSettings = `
			'order': [],
			'columnDefs': [
				{ 'targets': [0], type: 'natural' },
				{ 'targets': [1,2,3,4,5,6], type: 'numsort' },
				{ targets: '_all', orderable: true }
			],
		`;

	var view_name = [
		Main_GetPageLabel ('#submenuitem-GroupHeadlines-EffectivenessProfileBreakdown'),  // Page Name
		$('#effectiveness-breakdown-dropdown option:selected').text() // Selected breakdown variable label
	].join(' - ');

	var exportColumns = [0,1,2,3,4,5];
	var buttonSettings = DataTable_ButtonSettings(exportColumns, view_name);

	var dt = Component_DataTable (
		'items-table-epbreakdown',
		'items-table',
		headers,
		table_data,
		true,
		false,
		columnSettings,
		true,
		buttonSettings
	);

	return dt;
}