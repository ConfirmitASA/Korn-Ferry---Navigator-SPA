function ActionsPlans_Page() {
	return 	{
		Label: meta.Labels['ActionsPlans'].Title,

		LeftPane: meta.Labels['ActionsPlans'].Label,

		RightPane: `
		<div id="actionsplans-table-container"></div>
		`,

		ClassName: 'actionsplans-container',
		Style: null,
		ShowFilterSummary: true
	};

}

function ActionsPlans_Render() {
	var o = [];

	o.push ( Component_TestDataIndicator(data.isTestData) );

	var ItemGroups_dropdown = Component_Dropdown (
		'itemgroup',
		meta.Labels["labels.show"].Label,
		'actionsplans-itemgroups-highlighter-dropdown',
		'',
		ParamValues_ItemGroups()
	);
	var ShowActions_Switch = Component_TwoOptionSwitch(
		'showactions',
		meta.Labels['labels.ShowActions'].Label,
		'actionsplans',
		ParamValues_ActionsPlans_ShowActions()
	);
	o.push ( `
        <div class="selector-group">
        	${ItemGroups_dropdown}
			${ShowActions_Switch}
        </div>
    `);

	var dt = ActionsPlans_GetItemsTable();
	o.push ( dt.Html );

	$("#actionsplans-table-container").html( o.join('') );
	if ( dt.ScriptCode != null ) eval ( dt.ScriptCode );

	$('#actionsplans-itemgroups-highlighter-dropdown').change( function() {

		// Save Selection
		var SelectedOption = $(this).val();
		State_Set ( 'itemgroup', SelectedOption );

		// The data should already be in the page, so let's redraw the page
		Main_RefreshCurrentPage();
	});

	ActionsPlans_AddTabSelectors();

	$('#actionsplans-showactions-left').click(function () {
		var switchElementValue = $(this).val();
		var selectorObj = {
			selectorElementValue: switchElementValue,
			parameterName: 'showactions',
			parameterElementId: 'actionsplans-showactions-left'
		}

		ActionsPlans_HandleSwitchClick(selectorObj);
	});

	$('#actionsplans-showactions-right').click(function () {
		var switchElementValue = $(this).val();
		var selectorObj = {
			selectorElementValue: switchElementValue,
			parameterName: 'showactions',
			parameterElementId: 'actionsplans-showactions-right'
		}

		ActionsPlans_HandleSwitchClick(selectorObj);
	});
}

function ActionsPlans_GetItemsTable() {

	// Return Value: {Html: <string>, [ScriptCode: <string>]}

	var NofHeaderRows = 1;

	var headers = [
		[
			{ Label: meta.Labels["labels.NameHeader"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
			{ Label: meta.Labels["labels.NotesHeader"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
			{ Label: meta.Labels["labels.StatusHeader"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
			{ Label: meta.Labels["labels.DueDateHeader"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
			{ Label: meta.Labels["labels.PlanOwnerHeader"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
			{ Label: meta.Labels["labels.NOfActions"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows }
		]
	];

	var table_data = [];
	var showActionsOn = State_Get('showactions') === meta.Labels["labels.On"].Label;

	if(showActionsOn) {
		table_data = ActionsPlans_GetActionsTableData();
		headers = [
			[
				{ Label: meta.Labels["labels.PlanTitle"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
				{ Label: meta.Labels["labels.ActionTitle"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
				{ Label: meta.Labels["labels.ActionText"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
				{ Label: meta.Labels["labels.StatusHeader"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
				{ Label: meta.Labels["labels.DueDateHeader"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
				{ Label: meta.Labels["labels.PlanOwnerHeader"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows }
			]
		];
	} else {
		table_data = ActionsPlans_GetPlansTableData();
	}

	var columnSettings = `
        'order': [],
        'searchHighlight': true,
    `;

	var exportColumns = [ 0, 1, 2, 3, 4, 5 ];

	var view_name = Main_GetPageLabel ('#submenuitem-GroupExplore-ActionsPlans'); /* +
    ' - ' +
    $("#actionsplans-ActionsPlans-highlighter-dropdown option:selected").text();
    */

	var buttonSettings = DataTable_ButtonSettings(exportColumns, view_name);

	var dt = Component_DataTable(
		"items-table-actionsplans",
		"items-table",
		headers,
		table_data,
		true,
		true,
		columnSettings,
		true,
		buttonSettings
	);

	// dt.ScriptCode = dt.ScriptCode.replace(`'paging': false,`, `'paging': true,`);

	return dt;
}

function ActionsPlans_GetPlansTableData() {
	var tableData = [];
	var rowdata = [];
	for (var i = 0; i < FocusAreas.length; i++) {
		var actionPlan = FocusAreas[i].actionPlan;
		rowdata = [
			{Label: actionPlan.name, ClassName: 'text-cell'},
			{Label: actionPlan.notes, ClassName: 'text-cell'},
			{Label: actionPlan.status, ClassName: 'text-cell'},
			{Label: actionPlan.dueDate, ClassName: 'text-cell'},
			{Label: actionPlan.owner, ClassName: 'text-cell'},
			{Label: actionPlan.actions.length, ClassName: 'text-cell'},
		];
		tableData.push(rowdata);
	}

	return tableData;
}

function ActionsPlans_GetActionsTableData() {
	var tableData = [];
	for (var i = 0; i < FocusAreas.length; i++) {
		var actions = FocusAreas[i].actionPlan.actions;
		var rowdata = [];
		for (var j = 0; j < actions.length; j++) {
			rowdata = [
				{ Label: FocusAreas[i].actionPlan.name, ClassName: 'text-cell' },
				{ Label: actions[j].actionTitle, ClassName: 'text-cell' },
				{ Label: actions[j].actionText, ClassName: 'text-cell' },
				{ Label: actions[j].actionStatus, ClassName: 'text-cell' },
				{ Label: actions[j].actionDueDate, ClassName: 'text-cell' },
				{ Label: actions[j].actionOwner, ClassName: 'text-cell' }
			];
			tableData.push(rowdata);
		}
	}

	return tableData;
}

function ActionsPlans_AddTabSelectors() {
	var dataTable = $('#items-table-actionsplans');

	dataTable.before('<div class="tab"></div>');

	ActionsPlans_CreateTabLink('actionplans-own', meta.Labels["labels.OwnPlans"].Label, true, ActionsPlans_OwnPlans_OnClick).appendTo('.tab');
	ActionsPlans_CreateTabLink('actionplans-area', meta.Labels["labels.AreaPlans"].Label, false, ActionsPlans_AreaPlans_OnClick).appendTo('.tab');
	ActionsPlans_CreateTabLink('actionplans-shared', meta.Labels["labels.SharedPlans"].Label, false, ActionsPlans_SharedPlans_OnClick).appendTo('.tab');
}

function ActionsPlans_CreateTabLink(id, text, isSelected, onClick) {
	var selectedClass = isSelected ? 'tablink--selected' : '';
	return $('<button>')
		.addClass(`tablink ${selectedClass}`)
		.attr('id', id)
		.html(text)
		.click(function() {
			$('.tablink').removeClass('tablink--selected');
			$(this).addClass('tablink--selected');
		})
		.click(onClick);
}

function ActionsPlans_OwnPlans_OnClick() {
	console.log('Own Plans - clicked!');
}

function ActionsPlans_AreaPlans_OnClick() {
	console.log('Area Plans - clicked!');
}

function ActionsPlans_SharedPlans_OnClick() {
	console.log('Shared Plans - clicked!');
}

function ActionsPlans_HandleSwitchClick(selectorObj) {
	var currentSwitchVal = State_Get(selectorObj.parameterName);

	if (currentSwitchVal != selectorObj.selectorElementValue) {
		var labelsForInput = $('#' + selectorObj.parameterElementId).parent().find('label');
		if (labelsForInput.length > 0) {
			State_Set(selectorObj.parameterName, selectorObj.selectorElementValue);

			for (var i = 0; i < labelsForInput.length; i++) {
				$(labelsForInput[i]).toggleClass('label-checked');
			}

			ActionsPlans_UpdateItemsTable();
		}
	}
}

function ActionsPlans_UpdateItemsTable() {
	var dt = ActionsPlans_GetItemsTable();

	$('#items-table-actionsplans_wrapper').html(dt.Html);

	if (!!dt.ScriptCode) {
		eval(dt.ScriptCode);
	}

	ActionsPlans_AddTabSelectors();
}


