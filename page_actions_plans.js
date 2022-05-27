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
	let o = [];

	o.push ( Component_TestDataIndicator(data.isTestData) );

	let ItemGroups_dropdown = Component_Dropdown (
		'item4actions',
		meta.Labels["labels.show"].Label,
		'actionsplans-itemgroups-highlighter-dropdown',
		meta.Labels['labels.all'].Label,
		ParamValues_Items()
	);
	let ShowActions_Switch = Component_TwoOptionSwitch(
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

	let dt = ActionsPlans_GetItemsTable();
	o.push ( dt.Html );

	$("#actionsplans-table-container").html( o.join('') );
	if ( dt.ScriptCode != null ) eval ( dt.ScriptCode );

	$('#actionsplans-itemgroups-highlighter-dropdown').change( function() {

		// Save Selection
		let SelectedOption = $(this).val();
		State_Set ( 'item4actions', SelectedOption );

		// The data should already be in the page, so let's redraw the page
		Main_RefreshCurrentPage();
	});

	ActionsPlans_AddTabSelectors();

	$('#actionsplans-showactions-left').click(function () {
		let switchElementValue = $(this).val();
		let selectorObj = {
			selectorElementValue: switchElementValue,
			parameterName: 'showactions',
			parameterElementId: 'actionsplans-showactions-left'
		}

		ActionsPlans_HandleSwitchClick(selectorObj);
	});

	$('#actionsplans-showactions-right').click(function () {
		let switchElementValue = $(this).val();
		let selectorObj = {
			selectorElementValue: switchElementValue,
			parameterName: 'showactions',
			parameterElementId: 'actionsplans-showactions-right'
		}

		ActionsPlans_HandleSwitchClick(selectorObj);
	});
}

function ActionsPlans_GetItemsTable() {

	// Return Value: {Html: <string>, [ScriptCode: <string>]}

	let NofHeaderRows = 1;

	let headers = [
		[
			{ Label: meta.Labels["labels.NameHeader"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
			{ Label: meta.Labels["labels.NotesHeader"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
			{ Label: meta.Labels["labels.StatusHeader"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
			{ Label: meta.Labels["labels.DueDateHeader"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
			{ Label: meta.Labels["labels.PlanOwnerHeader"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
			{ Label: meta.Labels["labels.NOfActions"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows }
		]
	];

	let table_data = [];
	let showActionsOn = State_Get('showactions') === meta.Labels["labels.On"].Label;

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

	let columnSettings = `
        'order': [],
        'searchHighlight': true,
    `;

	let exportColumns = [ 0, 1, 2, 3, 4, 5 ];

	let view_name = Main_GetPageLabel ('#submenuitem-GroupExplore-ActionsPlans'); /* +
    ' - ' +
    $("#actionsplans-ActionsPlans-highlighter-dropdown option:selected").text();
    */

	let buttonSettings = DataTable_ButtonSettings(exportColumns, view_name);

	let dt = Component_DataTable(
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
	let item = State_Get('item4actions');
	let itemId = (!item || item == -1) ? '' : item.split('.')[1];

	let tableData = [];
	let rowdata = [];

	console.log('itemId');
	console.log(itemId);

	let focusAreas = FocusAreas_GetFocusAreas();

	for(let area in focusAreas) {

		console.log('area');
		console.log(area);

		if (itemId !== '' && area !== itemId) {
			continue;
		}

		console.log('itemid after if');
		console.log(itemId);

		let actionPlan = focusAreas[area];

		console.log('actionPlan after if');
		console.log(actionPlan);

		if(actionPlan.planIsSubmitted) {
			rowdata = [
				{Label: actionPlan.planName, ClassName: 'text-cell'},
				{Label: actionPlan.planNotes, ClassName: 'text-cell'},
				{Label: actionPlan.planStatus, ClassName: 'text-cell'},
				{Label: actionPlan.planDueDate, ClassName: 'text-cell'},
				{Label: actionPlan.planOwner, ClassName: 'text-cell'},
				{
					Label: !!actionPlan.planActions ? Object.keys(actionPlan.planActions).length : 0,
					ClassName: 'text-cell'
				},
			];
			tableData.push(rowdata);
		}
	}

	return tableData;
}

function ActionsPlans_GetActionsTableData() {
	let item = State_Get('item4actions');
	let itemId = (!item || item == -1) ? '' : item.split('.')[1];

	let tableData = [];
	let focusAreas = FocusAreas_GetFocusAreas();

	for(let area in focusAreas) {
		if (itemId != '' && area!=itemId) continue;

		if(focusAreas[area].planIsSubmitted) {
			let actions = focusAreas[area].planActions;
			let rowdata = [];

			for (let action in actions) {
				rowdata = [
					{Label: focusAreas[area].planName, ClassName: 'text-cell'},
					{Label: actions[action].actionTitle, ClassName: 'text-cell'},
					{Label: actions[action].actionText, ClassName: 'text-cell'},
					{Label: actions[action].actionStatus, ClassName: 'text-cell'},
					{Label: actions[action].actionDueDate, ClassName: 'text-cell'},
					{Label: actions[action].actionOwner, ClassName: 'text-cell'}
				];
				tableData.push(rowdata);
			}
		}
	}

	return tableData;
}

function ActionsPlans_AddTabSelectors() {
	let dataTable = $('#items-table-actionsplans');

	dataTable.before('<div class="tab"></div>');

	ActionsPlans_CreateTabLink('actionplans-own', meta.Labels["labels.OwnPlans"].Label, true, ActionsPlans_OwnPlans_OnClick).appendTo('.tab');
	ActionsPlans_CreateTabLink('actionplans-area', meta.Labels["labels.AreaPlans"].Label, false, ActionsPlans_AreaPlans_OnClick).appendTo('.tab');
	ActionsPlans_CreateTabLink('actionplans-shared', meta.Labels["labels.SharedPlans"].Label, false, ActionsPlans_SharedPlans_OnClick).appendTo('.tab');
}

function ActionsPlans_CreateTabLink(id, text, isSelected, onClick) {
	let selectedClass = isSelected ? 'tablink--selected' : '';
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
	let currentSwitchVal = State_Get(selectorObj.parameterName);

	if (currentSwitchVal != selectorObj.selectorElementValue) {
		let labelsForInput = $('#' + selectorObj.parameterElementId).parent().find('label');
		if (labelsForInput.length > 0) {
			State_Set(selectorObj.parameterName, selectorObj.selectorElementValue);

			for (let i = 0; i < labelsForInput.length; i++) {
				$(labelsForInput[i]).toggleClass('label-checked');
			}

			ActionsPlans_UpdateItemsTable();
		}
	}
}

function ActionsPlans_UpdateItemsTable() {
	let dt = ActionsPlans_GetItemsTable();

	$('#items-table-actionsplans_wrapper').html(dt.Html);

	if (!!dt.ScriptCode) {
		eval(dt.ScriptCode);
	}

	ActionsPlans_AddTabSelectors();
}


