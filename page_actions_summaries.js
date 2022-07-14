const PLAN_FILTER = {
	'own': 'ownplans',
	'area': 'areaplans',
	'shared': 'sharedplans'
}

function ActionsSummaries_Page() {
	return 	{
		Label: meta.Labels['ActionsSummaries'].Title,

		LeftPane: meta.Labels['ActionsSummaries'].Label,

		RightPane: `
		<div id="actionsplans-table-container"></div>
		`,

		ClassName: 'actionsplans-container',
		Style: null,
		ShowFilterSummary: true
	};

}

function ActionsSummaries_Render() {
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
		ParamValues_OnOff()
	);
	o.push ( `
        <div class="selector-group">
        	${ItemGroups_dropdown}
			${ShowActions_Switch}
        </div>
    `);

	State_Set ( 'actionplans', PLAN_FILTER.own );

	let dt = ActionsSummaries_GetItemsTable();
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

	ActionsSummaries_AddTabSelectors();
	ActionsSummaries_RenderClaimOwnershipConfirmationBox();
	ActionsSummaries_HandleClaimOwnershipButtonClick();

	$('#actionsplans-showactions-left').click(function () {
		let switchElementValue = $(this).val();
		let selectorObj = {
			selectorElementValue: switchElementValue,
			parameterName: 'showactions',
			parameterElementId: 'actionsplans-showactions-left'
		}

		ActionsSummaries_HandleSwitchClick(selectorObj);
	});

	$('#actionsplans-showactions-right').click(function () {
		let switchElementValue = $(this).val();
		let selectorObj = {
			selectorElementValue: switchElementValue,
			parameterName: 'showactions',
			parameterElementId: 'actionsplans-showactions-right'
		}

		ActionsSummaries_HandleSwitchClick(selectorObj);
	});
}

function ActionsSummaries_GetItemsTable() {

	// Return Value: {Html: <string>, [ScriptCode: <string>]}

	let headers = [
		[]
	];
	let NofHeaderRows = 1;

	let table_data = [];
	let showActionsOn = State_Get('showactions') === 'On';
	let claimOwnershipOn = !showActionsOn && ActionsSummaries_IsClaimOwnershipOn();

	if(showActionsOn) {
		headers = [
			[
				{ Label: "FocusAreaId", ClassName: 'text-cell', rowspan: NofHeaderRows },
				{ Label: "ItemOrderId", ClassName: 'text-cell', rowspan: NofHeaderRows },
				{ Label: "OwnerId", ClassName: 'text-cell', rowspan: NofHeaderRows },

				{ Label: meta.Labels["labels.Question"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },

				{ Label: meta.Labels["labels.PlanTitle"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
				{ Label: meta.Labels["labels.ActionTitle"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
				{ Label: meta.Labels["labels.ActionText"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
				{ Label: meta.Labels["labels.StatusHeader"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
				{ Label: meta.Labels["labels.DueDateHeader"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
				{ Label: meta.Labels["labels.ActionOwnerHeader"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows }
			]
		];
		table_data = ActionsSummaries_GetActionsTableData();
	} else {
		headers = [
			[
				{ Label: "FocusAreaId", ClassName: 'text-cell', rowspan: NofHeaderRows },
				{ Label: "ItemOrderId", ClassName: 'text-cell', rowspan: NofHeaderRows },
				{ Label: "OwnerId", ClassName: 'text-cell', rowspan: NofHeaderRows },

				{ Label: meta.Labels["labels.Question"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },

				{ Label: meta.Labels["labels.NameHeader"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
				{ Label: meta.Labels["labels.AreaHeader"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
				{ Label: meta.Labels["labels.NotesHeader"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
				{ Label: meta.Labels["labels.StatusHeader"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
				{ Label: meta.Labels["labels.DueDateHeader"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
				{ Label: meta.Labels["labels.LastUpdatedDateHeader"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
				{ Label: meta.Labels["labels.PlanOwnerHeader"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
				{ Label: meta.Labels["labels.NOfActions"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows }
			]
		];

		if(claimOwnershipOn) {
			headers[0].push(
				{ Label: meta.Labels['labels.Action'].Label, ClassName: 'numeric-cell', rowspan: NofHeaderRows }
			)
		}

		table_data = ActionsSummaries_GetPlansTableData();
	}

	var hideColumns = [0, 1, 2, 3];
	let disableOrderingColumns = [];
	if(claimOwnershipOn) {
		disableOrderingColumns.push(headers[0].length - 1);
	}
	let columnSettings = `
        'order': [[ 5, 'asc' ]],
        'searchHighlight': true,
		'columnDefs': [
			{ 'targets': [ ${hideColumns.join(',')} ], 'visible': false },
			{ 'targets': [ ${disableOrderingColumns.join(',')} ], 'orderable': false }
		],
    `;

	let exportColumns = [];
	for (var k = 3; k < headers[0].length; k++) exportColumns.push(k);

	//do not export claim ownership button
	if(claimOwnershipOn) {
		exportColumns.pop();
	}

	let view_name = Main_GetPageLabel ('#submenuitem-GroupExplore-ActionsSummaries'); /* +
    ' - ' +
    $("#actionsplans-ActionsSummaries-highlighter-dropdown option:selected").text();
    */

	let buttonSettings = DataTable_ButtonSettings(exportColumns, view_name, {copy: true, excel: true, csv: true, pdf: false});

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

function ActionsSummaries_GetPlansTableData() {
	let item = State_Get('item4actions');
	let itemId = (!item || item == -1) ? '' : item.split('.')[1];

	let tableData = [];
	let rowdata = [];

	let focusAreas = FocusAreas_GetFocusAreas();

	for(let area of focusAreas) {
		let focusAreaId = area.itemId;
		if (itemId !== '' && focusAreaId !== itemId) {
			continue;
		}

		if (ActionsSummaries_IsPlanToShow(area)) {
			let label = area.isDimension ? meta.Dimensions[focusAreaId].Label : meta.Items[focusAreaId].Label;
			rowdata = [
				{Label: area.itemId, ClassName: 'text-cell'},
				{Label: area.itemOrderId, ClassName: 'text-cell'},
				{Label: area.ownerId, ClassName: 'text-cell'},

				{Label: label, ClassName: 'text-cell'},

				{Label: area.planName, ClassName: 'text-cell nontruncate'},
				{Label: meta.Hierarchy.Map[area.planNode].Label, ClassName: 'text-cell'},
				{Label: area.planNotes, ClassName: area.planNotes.length > 30 ? 'text-cell truncate' : 'text-cell', get longstring() {
						if (area.planNotes.length <= 30) delete this.longstring;
						return area.planNotes;
					}},
				{Label: meta.Labels['labels.' + area.planStatus].Label, ClassName: 'text-cell'},
				{Label: area.planDueDate, datasort: dateToMillis(area.planDueDate), ClassName: 'text-cell'},
				{Label: area.planLastUpdatedDate, datasort: dateToMillis(area.planLastUpdatedDate), ClassName: 'text-cell'},
				{Label: area.planOwner, ClassName: 'text-cell nontruncate'},
				{
					Label: !!area.planActions ? Object.keys(area.planActions).length : 0,
					ClassName: 'text-cell'
				},
			];
			if(ActionsSummaries_IsClaimOwnershipOn()) {
				let actionButton = `<div class="action-cell">
									<div class="action-cell-content"></div>
								</div>`;
				if(!FocusAreas_IsOwnFocusArea(area)) {
					actionButton = `<div class="action-cell">
									<div class="action-cell-content claim-ownership-icon"></div>
								</div>`;
				}

				rowdata.push({ Label: actionButton, ClassName: 'numeric-cell claim-ownership-cell' });
			}
			tableData.push(rowdata);
		}
	}

	return tableData;
}

function ActionsSummaries_GetActionsTableData() {
	let item = State_Get('item4actions');
	let itemId = (!item || item == -1) ? '' : item.split('.')[1];

	let tableData = [];
	let focusAreas = FocusAreas_GetFocusAreas();

	for(let area of focusAreas) {
		let focusAreaId = area.itemId;
		if (itemId != '' && focusAreaId!=itemId) continue;

		if (ActionsSummaries_IsPlanToShow(area)) {
			let actions = area.planActions;
			let label = area.isDimension ? meta.Dimensions[focusAreaId].Label : meta.Items[focusAreaId].Label;
			let rowdata = [];

			for (let action in actions) {
				rowdata = [
					{Label: area.itemId, ClassName: 'text-cell'},
					{Label: area.itemOrderId, ClassName: 'text-cell'},
					{Label: area.ownerId, ClassName: 'text-cell'},

					{Label: label, ClassName: 'text-cell'},

					{Label: area.planName, ClassName: 'text-cell nontruncate'},
					{Label: actions[action].actionTitle, ClassName: 'text-cell nontruncate'},
					{Label: actions[action].actionText, ClassName: actions[action].actionText.length > 30 ? 'text-cell truncate' : 'text-cell', get longstring() {
							if (actions[action].actionText.length <= 30) delete this.longstring;
							return actions[action].actionText;
						}},
					{Label: meta.Labels['labels.' + actions[action].actionStatus].Label, ClassName: 'text-cell'},
					{Label: actions[action].actionDueDate, datasort: dateToMillis(actions[action].actionDueDate), ClassName: 'text-cell'},
					{Label: actions[action].actionOwner, ClassName: 'text-cell nontruncate'}
				];
				tableData.push(rowdata);
			}
		}
	}

	return tableData;
}

function ActionsSummaries_IsPlanToShow(actionPlan) {
	var plansFilter = State_Get('actionplans');

	return actionPlan.planIsSubmitted &&
		(
			(plansFilter === PLAN_FILTER.own && actionPlan.ownerId === data.User.UserId) ||
			(plansFilter === PLAN_FILTER.area && true) ||
			(plansFilter === PLAN_FILTER.shared && actionPlan.planIsShared)
		);
}

function ActionsSummaries_AddTabSelectors() {
	let dataTable = $('#items-table-actionsplans');

	dataTable.before('<div class="tab"></div>');

	ActionsSummaries_CreateTabLink('ownplans-link', meta.Labels["labels.OwnPlans"].Label, ActionsSummaries_OwnPlans_OnClick).appendTo('.tab');
	ActionsSummaries_CreateTabLink('areaplans-link', meta.Labels["labels.AreaPlans"].Label, ActionsSummaries_AreaPlans_OnClick).appendTo('.tab');
	ActionsSummaries_CreateTabLink('sharedplans-link', meta.Labels["labels.SharedPlans"].Label, ActionsSummaries_SharedPlans_OnClick).appendTo('.tab');

}

function ActionsSummaries_CreateTabLink(id, text, onClick) {
	let tabId = id.split('-')[0];
	var plansFilter = State_Get('actionplans');
	let selectedClass = (tabId == plansFilter) ? 'tablink--selected' : '';
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

function ActionsSummaries_OwnPlans_OnClick() {
	State_Set ( 'actionplans', PLAN_FILTER.own );
	ActionsSummaries_UpdateItemsTable();
}

function ActionsSummaries_AreaPlans_OnClick() {
	State_Set ( 'actionplans', PLAN_FILTER.area );
	ActionsSummaries_UpdateItemsTable();
}

function ActionsSummaries_SharedPlans_OnClick() {
	State_Set ( 'actionplans', PLAN_FILTER.shared );
	ActionsSummaries_UpdateItemsTable();
}

function ActionsSummaries_HandleSwitchClick(selectorObj) {
	let currentSwitchVal = State_Get(selectorObj.parameterName);

	if (currentSwitchVal != selectorObj.selectorElementValue) {
		let labelsForInput = $('#' + selectorObj.parameterElementId).parent().find('label');
		if (labelsForInput.length > 0) {
			State_Set(selectorObj.parameterName, selectorObj.selectorElementValue);

			for (let i = 0; i < labelsForInput.length; i++) {
				$(labelsForInput[i]).toggleClass('label-checked');
			}

			ActionsSummaries_UpdateItemsTable();
		}
	}
}

function ActionsSummaries_UpdateItemsTable() {
	let dt = ActionsSummaries_GetItemsTable();

	$('#items-table-actionsplans_wrapper').html(dt.Html);

	if (!!dt.ScriptCode) {
		eval(dt.ScriptCode);
	}

	ActionsSummaries_AddTabSelectors();
	ActionsSummaries_HandleClaimOwnershipButtonClick();
}


function dateToMillis(date) {
	moment.defaultFormat = "ddd MMM DD YYYY";
	return moment(date, moment.defaultFormat).toDate().getTime()
}

function ActionsSummaries_RenderClaimOwnershipConfirmationBox() {
	const confirmationBoxHTML =
		`<div class="confirmation_content">
			<div class="confirmation_text">${meta.Labels['labels.ClaimOwnershipConfirmation'].Label}</div>
			<div class="confirmation_controls">
				<div class="confirmation-button confirmation-button__agree">${meta.Labels['buttons.Yes'].Label}</div>
				<div class="confirmation-button confirmation-button__close">${meta.Labels['buttons.No'].Label}</div>
			</div>
		</div>`;
	$('#claim-ownership-confirmation-container').html(confirmationBoxHTML);
}

function ActionsSummaries_IsClaimOwnershipOn() {
	let plansFilter = State_Get('actionplans');
	if(plansFilter === PLAN_FILTER.area) {
		return true;
	}

	return false;
}

function ActionsSummaries_HandleClaimOwnershipButtonClick() {
	const table = $('#items-table-actionsplans').DataTable();
	table.on('click', 'td.claim-ownership-cell', function (e) {
		const correspondingRow = $(this).closest('tr');
		const rowData = table.row(correspondingRow).data();

		const focusAreaId = rowData['0'];
		const itemOrderId = rowData['1'];
		const ownerId = rowData['2'];
		const planKey = FocusAreas_CreateFocusAreaKey(focusAreaId, itemOrderId, ownerId);

		const onClaimOwnership = () => {
			let planToClaimCopy = $.extend({}, FocusAreas_GetFocusArea(planKey));
			planToClaimCopy.planActions = $.extend({}, FocusAreas_GetActionsInFocusArea(planKey));
			//Add new plan with updated ownerId
			planToClaimCopy['ownerId'] = data.User.UserId;
			//Update the fields with relevant values
			planToClaimCopy['itemOrderId'] = FocusAreas_GetNextItemOrderId();
			planToClaimCopy['planOwner'] = data.User.FirstName + ' ' + data.User.LastName;
			planToClaimCopy['planLastUpdatedDate'] = (new Date()).toDateString();
			FocusAreas_AddFocusArea(planToClaimCopy, true);

			//Delete old plan - use initial plan key
			FocusAreas_DeleteFocusArea(planKey);

			//Update Summaries table
			ActionsSummaries_UpdateItemsTable();
			FocusAreas_UpdateFocusAreasCounterSpan();
		}

		ActionsSummaries_HandleClaimOwnershipConfirmationButtonClick(onClaimOwnership);
	});
}

function ActionsSummaries_HandleClaimOwnershipConfirmationButtonClick(onClaimOwnership) {
	const confirmationBoxId = `claim-ownership-confirmation-container`;
	const confirmationBox = $(`#${confirmationBoxId}`);
	confirmationBox.removeClass('confirmation__hidden');

	$(`#${confirmationBoxId} .confirmation-button__agree`).off('click').on('click', function (event) {
		if (!!confirmationBox) {
			$(confirmationBox).addClass('confirmation__hidden');
			onClaimOwnership();
		}
	});

	$(`#${confirmationBoxId}  .confirmation-button__close`).off('click').on('click', function (event) {
		if (!!confirmationBox) {
			$(confirmationBox).addClass('confirmation__hidden');
		}
	});
}