function ItemDetails_Page() {
	return {
		Label: meta.Labels.pages['ItemDetails'].Title,

		LeftPane: meta.Labels.pages['ItemDetails'].Label,

		RightPane: `
		<div id="itemdetails-table-container"></div>
		`,

		ClassName: 'itemdetails-container',
		Style: null,
		ShowFilterSummary: true
	};

}

function ItemDetails_Render() {

	var o = [];

	var Items_dropdown = Component_Dropdown(
		'item',
		meta.Labels.labels["show"].Label,
		'itemdetails-items-highlighter-dropdown',
		'',
		ParamValues_Items()
	);

	var BreakBy_dropdown = Component_Dropdown(
		'breakby',
		meta.Labels.labels["BreakBy"].Label,
		'itemdetails-breakby-highlighter-dropdown',
		'',
		ParamValues_BreakBy()
	);

	o.push(`
        <div class="selector-group">
            ${Items_dropdown}
            ${BreakBy_dropdown}
        </div>
    `);

	o.push(Component_TestDataIndicator(data.isTestData));

	var dt = ItemDetails_ItemsTable();
	o.push(dt.Html);

	$("#itemdetails-table-container").html(o.join(''));
	if (dt.ScriptCode != null) eval(dt.ScriptCode);

	$('#itemdetails-items-highlighter-dropdown').change(function () {

		// Save Selection
		var SelectedOption = $(this).val();
		State_Set('item', SelectedOption);

		var query = {
			page: 'ItemDetails',
			parameter: 'item'
		};
		Main_SubmitQuery(query);

	});

	$('#itemdetails-breakby-highlighter-dropdown').change(function () {

		// Save Selection
		var SelectedOption = $(this).val();
		State_Set('breakby', SelectedOption);

		var query = {
			page: 'ItemsDetails',
			parameter: 'breakby'
		};
		Main_SubmitQuery(query);

	});

}

function ItemDetails_ItemsTable() {
	// Return Value: {Html: <string>, [ScriptCode: <string>]}

	var item = State_Get('item');
	var dimensionId = item.indexOf('dimensions.') == 0 ? item.split('.')[1] : '';
	var itemId = item.indexOf('items.') == 0 ? item.split('.')[1] : '';

	var comparators = State_Get('comparators');
	var NofComparators = comparators ? comparators.length : 0;
	var NofHeaderRows = (NofComparators > 0) ? 2 : 1;
	var sigClassname = '';

	var headers = [
		[
			{ Label: "", ClassName: 'id-cell', rowspan: NofHeaderRows },
			{ Label: "", ClassName: 'text-cell', rowspan: NofHeaderRows },
			{ Label: meta.Labels.labels["ValidN"].Label, ClassName: 'numeric-cell', rowspan: NofHeaderRows },
			{ Label: meta.Labels.labels["PercentFav"].Label, ClassName: 'numeric-cell distribution-cell', rowspan: NofHeaderRows },
			{ Label: meta.Labels.labels["PercentNeu"].Label, ClassName: 'numeric-cell distribution-cell', rowspan: NofHeaderRows },
			{ Label: meta.Labels.labels["PercentUnfav"].Label, ClassName: 'numeric-cell distribution-cell', rowspan: NofHeaderRows },
			{ Label: meta.Labels.labels["Distribution"].Label, ClassName: 'numeric-cell', rowspan: NofHeaderRows }
		]
	];

	if (NofComparators > 0) {
		headers[0].push({ Label: meta.Labels.labels["FavvsComparator"].Label, ClassName: 'numeric-cell', colspan: NofComparators });
		var subheaders = [];
		for (var i = 0; i < NofComparators; i++) {
			subheaders.push({ Label: meta.Labels.Comparators[comparators[i]].Label, ClassName: 'numeric-cell' });
		}
		headers.push(subheaders);
	}

	var table_data = [];
	var rowdata = [];
	var item = {};

	if (itemId) item = data.ItemsNew[itemId];
	else if (dimensionId) item = data.Dimensions[dimensionId];

	if ('N' in item) {
		rowdata = [
			{ Label: '0', ClassName: 'id-cell' },
			{ Label: meta.Labels.BreakBy["Hierarchy"].Title, ClassName: 'text-cell' },
			{ Label: item.N, ClassName: 'numeric-cell' },
			{ Label: item.Distribution.Fav, ClassName: 'numeric-cell distribution-cell' },
			{ Label: item.Distribution.Neu, ClassName: 'numeric-cell distribution-cell' },
			{ Label: item.Distribution.Unfav, ClassName: 'numeric-cell distribution-cell' },
			{ Label: Component_DistributionChartStacked(item.Distribution), datasort: item.Distribution.Fav, ClassName: 'text-cell' }
		];
		for (var i = 0; i < NofComparators; i++) {
			var value = item.Comparators[comparators[i]].Value;
			sigClassname = (value.indexOf('*')>0) ? (value.indexOf('-')==0 ? 'cell-red' : 'cell-green') : '';
			rowdata.push({ Label: value, datasort: value.replace(/\*/g,''), ClassName: 'numeric-cell '+sigClassname });
		}
		table_data.push(rowdata);
		for (var j in item.BreakBy.Options) {
			var option = item.BreakBy.Options[j];
			rowdata = [
				{ Label: '0_', ClassName: 'id-cell' },
				{ Label: meta.Labels.BreakBy[item.BreakBy.Variable].Options[j].Label, ClassName: 'text-cell' },
				{ Label: option.N, ClassName: 'numeric-cell' },
				{ Label: option.Distribution.Fav, ClassName: 'numeric-cell distribution-cell' },
				{ Label: option.Distribution.Neu, ClassName: 'numeric-cell distribution-cell' },
				{ Label: option.Distribution.Unfav, ClassName: 'numeric-cell distribution-cell' },
				{ Label: Component_DistributionChartStacked(option.Distribution), datasort: option.Distribution.Fav, ClassName: 'text-cell' }
			];
			for (var i = 0; i < NofComparators; i++) {
				var value = option.Comparators[comparators[i]].Value;
				sigClassname = (value.indexOf('*')>0) ? (value.indexOf('-')==0 ? 'cell-red' : 'cell-green') : '';
				rowdata.push({ Label: value, datasort: value.replace(/\*/g,''), ClassName: 'numeric-cell '+sigClassname });
			}
			table_data.push(rowdata);
		}
	}

	var hideColumns = [0];
	if (NofComparators>3) hideColumns.push(6);

	var columnSettings = `
		'orderFixed': [ 0, 'asc' ],
		'order': [],
		'columnDefs': [
			{ 'targets': [ ${hideColumns.join(',')} ], 'visible': false },
			{ 'targets': '_all', type: 'natural' }
		],
	`;

	var exportColumns = [];
	for (var k = 1; k < 6; k++) exportColumns.push(k);
	for (var k = 7; k < 7+NofComparators; k++) exportColumns.push(k);

	var buttonSettings = `
        [
            {
                extend: 'copyHtml5',
				title: 'Data export',
                exportOptions: { columns: [ ${exportColumns.join(',')} ] }
            }, 
            {
                extend: 'excelHtml5',
				title: 'Data export',
                exportOptions: { columns: [ ${exportColumns.join(',')} ] }
            }, 
            {
                extend: 'csvHtml5',
				title: 'Data export',
                exportOptions: { columns: [ ${exportColumns.join(',')} ] }
            }, 
            {
                extend: 'pdfHtml5',
				title: 'Data export',
                exportOptions: { columns: [ ${exportColumns.join(',')} ] }
            }, 
        ],
    `;

	var dt = Component_DataTable(
		"items-table-itemdetails",
		"items-table",
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