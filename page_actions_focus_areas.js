// Actions > Create Plan

function ActionsFocusAreas_Page() {
    return {
        Label: meta.Labels["ActionsFocusAreas"].Title,

        // Left Pane
        LeftPane: meta.Labels["ActionsFocusAreas"].Label,

        // Right Pane
        RightPane: `
            ${Component_TestDataIndicator(data.Report.IsTestData)}
            <div class="focus-areas-container">
            <div id="AddNewFocusArea">
            </div>
            <div id="FocusAreasList">
            </div>
            </div>
            `,

        ClassName: 'Focus-Areas-page-container',
        Style: null,
        ShowFilterSummary: false
    }
};


function ActionsFocusAreas_Render() {

    var dt = ActionFocusAreas_RenderAddActionTable();

    let addNewFocusAreaHTML = `
        <div id="AddActionWindow_Button" class="add-focus-areas-buttons-container">
            <div class="add-focus-areas-icon ap_add-items-plus-circle"></div>
            <div class="add-focus-areas-text">${meta.Labels['labels.Add'].Label}</div>
        </div>
        <div id="AddActionWindow" class="focus-area-card_addaction" style="display:none;">
            <div class="addaction_content">
                <div class="addaction_table">${dt.Html}</div>
                <button id="AddActionWindow_CloseButton" class="close_addaction_button">X</button>
            </div>
        </div>
    `;

    $('#AddNewFocusArea').html(addNewFocusAreaHTML);

    if (dt.ScriptCode != null) eval(dt.ScriptCode);

    FocusAreas__handleTableActionIconClick('#items-table-addaction');

    $('#AddActionWindow_Button').click(function() {
        document.getElementById("AddActionWindow").style.display = "";
        $('.addaction_table .action-icon').each(function() {
            let itemId = $(this).attr('id').split('-')[1];
            let isItemAddedAsFocusArea = FocusAreas_IsItemAlreadyAdded(itemId);
            if (isItemAddedAsFocusArea) {
                $(this).removeClass('add-action table_add-item-plus-circle__thin');
                $(this).addClass('remove-action table_remove-item-minus-circle');
            }
            else {
                $(this).removeClass('remove-action table_remove-item-minus-circle');
                $(this).addClass('add-action table_add-item-plus-circle__thin');
            }
        });
    });
    $('#AddActionWindow_CloseButton').click(function() {
        document.getElementById("AddActionWindow").style.display = "none";
        ActionFocusAreas_RenderFocusAreaList();
    });

    ActionFocusAreas_RenderFocusAreaList();

}

function ActionFocusAreas_RenderFocusAreaList() {
    $('#FocusAreasList').html('');

    let addedFocusAreas = FocusAreas_GetFocusAreas();

    let itemsData = Main_CurrentItemsData_WithFilter();
    let dimensionsData = Main_CurrentDimensionsData_WithFilter();

    let index = 0;

    for(let focusArea in addedFocusAreas) {
        ActionFocusAreas_RenderFocusArea(focusArea, addedFocusAreas[focusArea], index, itemsData, dimensionsData);
        index++;
    }
}

function ActionFocusAreas_RenderFocusArea(focusAreaId, focusArea, index, itemsData, dimensionsData) {
    let o = [];

    let focusAreaLabel = '';
    let favScore = '';
    let recommendedActions = [];

    if (focusArea.isDimension) {
        focusAreaLabel = Main_GetDimensionText(focusAreaId);
        favScore = Utils_FormatPctOutput(dimensionsData[focusAreaId].Dist.Fav);

        recommendedActions = ActionFocusAreas_GetRecommendedActions(focusAreaId);
    } else {
        focusAreaLabel = Main_GetQuestionText(focusAreaId);

        let pct_distribution = Utils_CountsToPercents(itemsData[focusAreaId].Dist);
        favScore = Utils_FormatPctOutput(pct_distribution.Fav);

        recommendedActions = ActionFocusAreas_GetRecommendedActions(focusAreaId);

        if (recommendedActions.length == 0) {
            let dimensionIdForCurrentItem = Main_GetDimensionIdByItemId(focusAreaId);

            recommendedActions = ActionFocusAreas_GetRecommendedActions(dimensionIdForCurrentItem);
        }

    }

    let actionPlan_dropdown = Component_Dropdown(
        'actionPlanStatus_' + focusAreaId,
        meta.Labels['labels.Status'].Label,
        focusAreaId + '_status-dropdown',
        '',
        ParamValues_ActionPlannerStatusSelector()
    );

    let sharePlanSwitch = Component_TwoOptionSwitch(
        `actionPlanShared_${focusAreaId}`,
        '',
        `${focusAreaId}_share-switch`,
        ParamValues_OnOff()
    );


    o.push(`
            <div id="focusArea-${focusAreaId}" class="focus-area-card">
                <div class="focus-area-card_header">
                    <div class="fa-card-header_text">${meta.Labels['labels.FocusOn'].Label}</div>
                    <div class="fa-card-header_remove"></div>
                </div>
                <div class="focus-area-card_content">
                    <div class="focus-area-info_main">
                        <div class="focus-area-info_text">${focusAreaLabel}</div>
                        <div class="focus-area-info_fav">${favScore}</div>
                    </div>
                    <div class="focus-area-info_additional">
                        <div class="focus-area-info_rec-number">
                            ${recommendedActions.length == 0 ? meta.Labels['labels.NoRecommendationsAvailable'].Label : recommendedActions.length + ' ' + meta.Labels['labels.RecommendationsAvailable'].Label}
                        </div>
                        <div class="focus-area-info_comparator">${'-13 vs. Company'}</div>                      
                    </div>
                    <div class="focus-area-info_controls">
                        <div class="focus-area-info_tags">
                            <div class="ap-tag ${focusArea.importance ? 'ap-tag__active' : 'ap-tag__inactive'} ap-tag__importance"></div>
                            <div class="ap-tag ${focusArea.involvement ? 'ap-tag__active' : 'ap-tag__inactive'} ap-tag__involvement"></div>
                            <div class="ap-tag ${focusArea.cost ? 'ap-tag__active' : 'ap-tag__inactive'} ap-tag__cost"></div>
                        </div>
                        <div class="focus-area-info_work-button">${meta.Buttons.WorkOnThis.Label}</div> 
                    </div>
                    <div class="action-plan action-plan__collapsed">
                        <div class="action-plan_container">
                            <div class="plan-column">
                                ${ActionFocusAreas_RenderRecommendedActions(focusAreaId, recommendedActions, index)}                        
                                <div id="innerblock2${index}" class="action-plan_selected-actions">
                                    <div class="selected-progress">
                                        <div class="line"></div>
                                        <div class="selected-progress-sign">&#9830;</div>
                                        <div class="line"></div>
                                    </div>
                                    <div class="selected-wrapper">
                                        <div class="selected-actions_title">${meta.Labels['labels.ActionPlan'].Label}</div>
                                        <div class="selected-actions_container selected-actions_container__hidden"></div>
                                        <div class="add-to-plan selected-actions_add">${meta.Buttons.AddOwnAction.Label}</div>
                                    </div>
                                </div>
                                <div id="innerblock3${index}" class="action-plan_personal">
                                    <div class="selected-progress">
                                        <div class="line"></div>
                                        <div class="selected-progress-sign">&#9830;</div>
                                        <div class="line"></div>
                                    </div>
                                    <div class="selected-wrapper">
                                        <div class="personal-plan_title">${meta.Labels['labels.PersonalizeActionPlan'].Label}</div>
                                        <div class="personal-plan_name">
                                            <label for="plan-name-${focusAreaId}" class="personal-plan_label">${meta.Labels['labels.Name'].Label}</label>
                                            <input id="plan-name-${focusAreaId}" type="text" class="plan-name__input" value="${focusArea.planName}">
                                        </div>
                                        <div class="personal-plan_notes">
                                            <label for="plan-notes-${focusAreaId}" class="personal-plan_label">${meta.Labels['labels.Notes'].Label}</label>
                                            <textarea id="plan-notes-${focusAreaId}" class="plan-notes__input">${focusArea.planNotes}</textarea>
                                        </div>
                                        <div class="personal-plan_details">
                                            <div class="plan-setting plan_status">
                                                ${actionPlan_dropdown}
                                            </div>
                                            <div class="plan-setting plan_due-date">
                                                <label class="plan-setting_label">${meta.Labels['labels.DueDate'].Label}</label>
                                                <input type="text" id="${focusAreaId}_datepicker">
                                            </div>
                                            <div class="plan-setting plan_owner">
                                                <label class="plan-setting_label">${meta.Labels['labels.PlanOwner'].Label}</label>
                                                <div id="${focusAreaId}_owner" class="plan-setting_owner">${focusArea.planOwner}</div>
                                            </div>
                                            <div class="plan-setting plan_share">
                                                <label class="plan-setting_label">${meta.Labels['labels.SharePlan'].Label}</label>
                                                ${sharePlanSwitch}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="action-plan_controls">
                            <div class="action-plan_submit">${meta.Labels['buttons.Submit'].Label}</div>
                            <div class="action-plan_close">${meta.Labels['buttons.Close'].Label}</div>
                        </div>
                    </div>                   
                </div>
                <div class="focus-area-card_confirmation confirmation__hidden">
                    <div class="confirmation_content">
                        <div class="confirmation_text">${meta.Labels['labels.DeletePlanConfirmation'].Label}</div>
                        <div class="confirmation_controls">
                            <div class="confirmation-button confirmation-button__agree">${meta.Labels['buttons.Yes'].Label}</div>
                            <div class="confirmation-button confirmation-button__close">${meta.Labels['buttons.No'].Label}</div>
                        </div>
                    </div>
                </div>
            </div>
        `);

    $('#FocusAreasList').append(o.join(''));

    $(`#plan-name-${focusAreaId}`).on('input', function (event) {
        let newPlanName = $(this).val();

        FocusAreas_UpdateActionPlan(focusAreaId, 'planName', newPlanName);
    });

    $(`#plan-notes-${focusAreaId}`).on('input', function (event) {
        let newPlanNotes = $(this).val();

        FocusAreas_UpdateActionPlan(focusAreaId, 'planNotes', newPlanNotes);
    });

    $(`#${focusAreaId}_datepicker`).datepicker({
        onSelect: function (date) {
            if (!!date) {
                let newDate = new Date(date);
                FocusAreas_UpdateActionPlan(focusAreaId, 'planDueDate', newDate.toDateString());
            }
        },
        dateFormat: config.ActionPlannerDateFormat
    });
    $(`#${focusAreaId}_datepicker`).datepicker('setDate', new Date(focusArea.planDueDate));

    $(`#${focusAreaId}_status-dropdown`).change(function (event) {
        let selectedOption = $(this).val();
        State_Set('actionPlanStatus_' + focusAreaId, selectedOption);

        FocusAreas_UpdateActionPlan(focusAreaId, 'planStatus', selectedOption);
    });

    /*$(`#${focusAreaId}_owner`).on('input', function (event) {
        let newOwnerName = $(this).val();

        FocusAreas_UpdateActionPlan(focusAreaId, 'owner', newOwnerName);
    });*/

    ActionFocusAreas_RenderSelectedActions(focusAreaId);
    ActionsFocusAreas_HandleTagClick($(`#focusArea-${focusAreaId} .ap-tag`));
    ActionsFocusAreas_HandleRemovingFocusArea($(`#focusArea-${focusAreaId} .fa-card-header_remove`), $(`#focusArea-${focusAreaId} .confirmation-button__agree`), $(`#focusArea-${focusAreaId} .confirmation-button__close`));
    ActionFocusAreas_HandleWorkOnThisButtonClick($(`#focusArea-${focusAreaId} .focus-area-info_work-button`));
    ActionFocusAreas_HandleActionTitleClick($(`#focusArea-${focusAreaId} .recommended-action_title`));
    ActionFocusAreas_HandleSubmitButtonClick(focusAreaId, $(`#focusArea-${focusAreaId} .action-plan_submit`))
    ActionFocusAreas_HandleCloseButtonClick($(`#focusArea-${focusAreaId} .action-plan_close`));
    ActionFocusAreas_HandleAddToActionPlanButtonClick($(`#focusArea-${focusAreaId} .recommended-action_add-to-plan`));
    ActionFocusAreas_HandleAddOwnActionButtonClick($(`#focusArea-${focusAreaId} .selected-actions_add`));
    ActionFocusAreas_HandleProgressBar($(`#focusArea-${focusAreaId} .plan-column`));
    ActionFocusAreas_HandleShareSwitchClick(`#${focusAreaId}_share-switch-actionPlanShared_${focusAreaId}`, focusAreaId);

}

function ActionFocusAreas_HandleShareSwitchClick(switchId, focusAreaId) {
    let setSwitchValueAfterClick =(selectorObj)=> {
        let currentSwitchVal = State_Get(selectorObj.parameterName);

        if (currentSwitchVal != selectorObj.selectorElementValue) {
            let labelsForInput = $(`${selectorObj.parameterElementId}`).parent().find('label');

            if (labelsForInput.length > 0) {
                State_Set(selectorObj.parameterName, selectorObj.selectorElementValue);

                for (let i = 0; i < labelsForInput.length; i++) {
                    $(labelsForInput[i]).toggleClass('label-checked');
                }

                FocusAreas_UpdateActionPlan(focusAreaId, 'planIsShared', selectorObj.selectorElementValue === 'On');
            }
        }

    }

    $(`${switchId}-left`).click(function () {
        let switchElementValue = $(this).val();
        let selectorObj = {
            selectorElementValue: switchElementValue,
            parameterName: `actionPlanShared_${focusAreaId}`,
            parameterElementId: `${switchId}-left`
        }

        setSwitchValueAfterClick(selectorObj);
    });

    $(`${switchId}-right`).click(function () {
        let switchElementValue = $(this).val();
        let selectorObj = {
            selectorElementValue: switchElementValue,
            parameterName: `actionPlanShared_${focusAreaId}`,
            parameterElementId: `${switchId}-right`
        }

        setSwitchValueAfterClick(selectorObj);
    });
}

function ActionFocusAreas_HandleProgressBar(planColumnForProgressBar) {
    planColumnForProgressBar.click(function (e) {
        var elem = e.target;
        while (elem.id.indexOf('innerblock') == -1) {
            elem = elem.parentElement;
        }
        //$(".selected-progress-sign").css('color', '#c0c0c0');
        $('#' + elem.id + " .selected-progress-sign").css('color', '#77bc1f');
    });
}

function ActionFocusAreas_GetRecommendedActions(s) {
    // s is a string that can be either a dimension reference ("DIM_N51"), or an item reference ("TR04")

    var o = {}; // recommended actions

    // Extract matching elements
    for (var key in meta.Labels) {

        // example keys: "RecommendedActions_DIM_N51.text_0", "RecommendedActions_TR04.text_0"

        var parts = key.split('_');
        if (parts[0] == 'Actions') {

            switch (parts[1]) {

                case 'DIM':
                    // this is a dimension
                    // example: "Actions_DIM_N51.text_0"
                    var tmp = key.split('.'); // example: ["Actions_DIM_N51", "text_0"]
                    if (tmp.length == 2) {
                        var dimension_id = tmp[0].slice(8); // example: "DIM_N51"
                        if (dimension_id == s) {
                            // We found a matching entry

                            var tmp2 = tmp[1].split('_'); // example: ["text", "0"]
                            var property = tmp2[0].charAt(0).toUpperCase() + tmp2[0].slice(1); // example: "Text"
                            var index = tmp2[1]; // example: "0"

                            if (o[index] == null) {
                                o[index] = {};
                            }

                            o[index]['Id'] = tmp[0] + '_' + index;
                            o[index][property] = meta.Labels[key].Label;
                        }
                    }
                    break;

                default:
                    // this is an item
                    // example: "Actions_TR04.text_0"
                    var tmp = key.split('.'); // example: ["Actions_TR04", "text_0"]
                    if (tmp.length == 2) {
                        var item_id = tmp[0].slice(8); // example: "TR04"
                        if (item_id == s) {
                            // We found a matching entry

                            var tmp2 = tmp[1].split('_'); // example: ["text", "0"]
                            var property = tmp2[0].charAt(0).toUpperCase() + tmp2[0].slice(1); // example: "Text"
                            var index = tmp2[1]; // example: "0"

                            if (o[index] == null) {
                                o[index] = {};
                            }

                            o[index]['Id'] = tmp[0] + '_' + index;
                            o[index][property] = meta.Labels[key].Label;
                        }
                    }
                    break;
            }
        }
    }

    // Turn into array
    var actions = [];
    for (var key in o) {
        actions.push(o[key]);
    }

    return actions;
}

function ActionFocusAreas_RenderRecommendedActions(itemId, recommendedActions, index) {
    let recommendedActionsHTML = [];

    if (recommendedActions.length > 0) {
        recommendedActionsHTML.push(`<div id="innerblock1${index}" class="action-plan_recommended-actions">
                                        <div class="selected-progress">
                                            <div class="line"></div>
                                            <div class="selected-progress-sign">&#9830;</div>
                                            <div class="line"></div>
                                        </div>
                                        <div class="selected-wrapper">
                                            <div class="recommended-actions_title">${meta.Labels['labels.RecommendedActions'].Label}</div>
                                            <div class="recommended-actions_container">`
        );

        recommendedActions.forEach((recAction, index) => {
            let recActionHTML = `<div id="${recAction.Id}" class="recommended-action ${index == 0 ? 'action__uncollapsed' : 'action__collapsed'}">
                                    <div class="action-title recommended-action_title ${index == 0 ? 'action-title__uncollapsed' : 'action-title__collapsed'}"><div class="action-title_text">${recAction.Title}</div><div class="action-chevron ${index == 0 ? 'action-chevron__uncollapsed' : 'action-chevron__collapsed'}"></div></div>
                                    <div class="action-body recommended-action_body ${index == 0 ? 'action-body__uncollapsed' : 'action-body__collapsed'}">
                                        <div class="action-text recommended-action_text">${recAction.Text}</div>
                                        <div class="add-to-plan recommended-action_add-to-plan">${meta.Buttons.AddToActionPlan.Label}</div>
                                    </div>
                                </div>`;

            recommendedActionsHTML.push(recActionHTML);
        })
        recommendedActionsHTML.push(`</div></div></div>`);
    }

    return recommendedActionsHTML.join('');

}

function ActionFocusAreas_HandleActionTitleClick(titleElements) {
    titleElements.click(function (event) {

        let chevronElement = $(this).find('.action-chevron');
        let actionElement = $(this).parent();
        let actionBodyElement = actionElement.find('.action-body');

        if ($(this).hasClass('action-title__uncollapsed')) {
            $(this).removeClass('action-title__uncollapsed');
            $(this).addClass('action-title__collapsed');

            if (chevronElement.length > 0) {
                chevronElement.removeClass('action-chevron__uncollapsed');
                chevronElement.addClass('action-chevron__collapsed');
            }

            if (actionBodyElement.length > 0) {
                actionBodyElement.removeClass('action-body__uncollapsed');
                actionBodyElement.addClass('action-body__collapsed');
            }

            if (actionElement.length > 0) {
                actionElement.removeClass('action__uncollapsed');
                actionElement.addClass('action__collapsed');
            }
        } else {
            if ($(this).hasClass('action-title__collapsed')) {
                $(this).removeClass('action-title__collapsed');
                $(this).addClass('action-title__uncollapsed');

                if (chevronElement.length > 0) {
                    chevronElement.removeClass('action-chevron__collapsed');
                    chevronElement.addClass('action-chevron__uncollapsed');
                }

                if (actionBodyElement.length > 0) {
                    actionBodyElement.removeClass('action-body__collapsed');
                    actionBodyElement.addClass('action-body__uncollapsed');
                }
                if (actionElement.length > 0) {
                    actionElement.removeClass('action__collapsed');
                    actionElement.addClass('action__uncollapsed');
                }
            }
        }
    });
}

function ActionFocusAreas_HandleWorkOnThisButtonClick(buttons) {
    buttons.click(function (event) {

        let cardContent = $(this).parent().parent();
        let actionPlanContainer = $(cardContent).find('.action-plan');
        let focusAreaCard = $(actionPlanContainer).parent();

        $(this).hide();
        $(actionPlanContainer).removeClass('action-plan__collapsed');
    });
}

function ActionFocusAreas_HandleSubmitButtonClick(focusAreaId, buttons) {
    buttons.click(function () {
        FocusAreas_UpdateActionPlan(focusAreaId, 'planIsSubmitted', true);

        let actionPlanContainer = $(this).parent().parent();
        let focusAreaCard = $(actionPlanContainer).parent();

        $(actionPlanContainer).addClass('action-plan__collapsed');
        $(focusAreaCard).find('.focus-area-info_work-button').first().show();
    });
}
function ActionFocusAreas_HandleCloseButtonClick(buttons) {
    buttons.click(function (event) {
        let actionPlanContainer = $(this).parent().parent();
        let focusAreaCard = $(actionPlanContainer).parent();

        $(actionPlanContainer).addClass('action-plan__collapsed');
        $(focusAreaCard).find('.focus-area-info_work-button').first().show();
    });
}

function ActionsFocusAreas_HandleTagClick(tagElements) {
    tagElements.click(function (event) {
        let tagName = '';
        let tagValue = false;

        if ($(this).hasClass('ap-tag__inactive')) {
            $(this).removeClass('ap-tag__inactive');
            $(this).addClass('ap-tag__active');

            tagValue = true;
        } else {
            if ($(this).hasClass('ap-tag__active')) {
                $(this).removeClass('ap-tag__active');
                $(this).addClass('ap-tag__inactive');

                tagValue = false;
            }
        }

        if ($(this).hasClass('ap-tag__importance')) {
            tagName = 'importance';
        }

        if ($(this).hasClass('ap-tag__involvement')) {
            tagName = 'involvement';
        }

        if ($(this).hasClass('ap-tag__cost')) {
            tagName = 'cost';
        }

        //update global focus areas obj with tags
        let parentCard = $(this).parents('.focus-area-card')[0];

        if (!!parentCard) {
            let itemId = $(parentCard).attr('id').split('-')[1];

            FocusAreas_UpdateTagOnFocusArea(itemId, tagName, tagValue);
        }
    });
}

function ActionsFocusAreas_HandleRemovingFocusArea(trashCanElements, yesButton, noButton) {
    trashCanElements.click(function (event) {
        let cardToRemove = $(this).parent().parent();

        let confirmationBox = $(cardToRemove).find('.focus-area-card_confirmation').first();
        if (!!confirmationBox) {
            if ($(confirmationBox).hasClass('confirmation__hidden')) {
                $(confirmationBox).removeClass('confirmation__hidden');
            }
        }
    });

    yesButton.click(function (event) {
        let confirmationBox = $(this).parents('.focus-area-card_confirmation').first();
        if (!!confirmationBox) {
            $(confirmationBox).addClass('confirmation__hidden');

            let cardToRemove = $(this).parents('.focus-area-card').first();

            if (!!cardToRemove) {
                let cardToRemoveID = cardToRemove.attr('id').split('-');

                FocusAreas_RemoveItem(cardToRemoveID[1]);
                FocusAreas_UpdateFocusAreasCounterSpan();

                $(cardToRemove).remove();
            }
        }
    });

    noButton.click(function (event) {
        let confirmationBox = $(this).parents('.focus-area-card_confirmation').first();
        if (!!confirmationBox) {
            $(confirmationBox).addClass('confirmation__hidden');
        }
    });
}

function ActionFocusAreas_HandleAddToActionPlanButtonClick(addActionButtons) {
    addActionButtons.click(function (event) {

        //get item id for focus area
        let focusAreaCard = $(this).parents('.focus-area-card').first();
        let focusAreaCardID = focusAreaCard.attr('id').split('-')[1];
        //get action id
        let action = $(this).parents('.recommended-action').first();
        let actionId = action.attr('id');

        let dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 14);

        let focusAreaActions = FocusAreas_GetActionsInActionPlan(focusAreaCardID);

        let metaActionId = actionId.split('_').slice(0, 2).join('_');
        let metaActionOrderNumber = actionId.split('_')[2];
        let newActionTitle = meta.Labels[metaActionId + '.title_' + metaActionOrderNumber].Label;
        let newActionText = meta.Labels[metaActionId + '.text_' + metaActionOrderNumber].Label;

        let newActionId = actionId + '_' +(!!focusAreaActions ? Object.keys(focusAreaActions).length : 0);
        //let newOrderId = actionId + '_selected_' + (!!focusAreaActions ? Object.keys(focusAreaActions).length : 0);
        let newActionObj = {
            /*orderId: actionId + '_selected_' + Object.keys(focusAreaActions).length,*/
            actionTitle: newActionTitle,
            actionText: newActionText,
            actionStatus: 'NotStarted',
            actionDueDate: dueDate.toDateString(),
            actionOwner: data.User.FirstName,
            isFromRecommended: true
        }

        FocusAreas_AddActionsToActionPlan(focusAreaCardID, newActionId, newActionObj);
        ActionFocusAreas_AddActionToActionPlanSection(focusAreaCard, newActionId, newActionObj, newActionId);
    });
}

function ActionFocusAreas_HandleAddOwnActionButtonClick(addActionButtons) {
    addActionButtons.click(function (event) {
        /*event.stopPropagation();
        event.preventDefault();*/

        //get item id for focus area
        let focusAreaCard = $(this).parents('.focus-area-card').first();
        let focusAreaCardID = focusAreaCard.attr('id').split('-')[1];

        let dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 14);

        let focusAreaActions = FocusAreas_GetActionsInActionPlan(focusAreaCardID);

        let newOrderId = 'OwnAction_' + focusAreaCardID + '_' + (!!focusAreaActions ? Object.keys(focusAreaActions).length : 0);
        let newActionObj = {
            actionTitle: 'newActionTitle',
            actionText: 'newActionText',
            actionStatus: 'NotStarted',
            actionDueDate: dueDate.toDateString(),
            actionOwner: data.User.FirstName,
            isFromRecommended: false
        }

        FocusAreas_AddActionsToActionPlan(focusAreaCardID, newOrderId, newActionObj);
        ActionFocusAreas_AddActionToActionPlanSection(focusAreaCard, newOrderId, newActionObj, newOrderId);
    });
}

function ActionFocusAreas_AddActionToActionPlanSection(focusAreaCard, actionId, newActionObj, orderId) {
    let actionPlanContainer = $(focusAreaCard).find('.selected-actions_container').first();

    if (!!actionPlanContainer) {
        if ($(actionPlanContainer).hasClass('selected-actions_container__hidden')) {
            $(actionPlanContainer).removeClass('selected-actions_container__hidden');
        }

        let numberOfActionsInActionPlan = $(actionPlanContainer).find('.selected-action').length;

        let actionStatus_dropdown = Component_Dropdown(
            'actionStatus_' + orderId,
            meta.Labels['labels.Status'].Label,
            orderId + '_status-dropdown',
            '',
            ParamValues_ActionPlannerStatusSelector()
        );

        let newActionHTML = `<div id="${orderId}" class="selected-action ${numberOfActionsInActionPlan == 0 ? 'action__uncollapsed' : 'action__collapsed'}">
                                    <div class="action-title selected-action_title ${numberOfActionsInActionPlan == 0 ? 'action-title__uncollapsed' : 'action-title__collapsed'}">
                                        <div class="action-title_text">
                                            <div class="action-title_text__editable" contenteditable="true" tabindex="-1">${newActionObj.actionTitle}</div>
                                            <div class="edit-icon"></div>
                                        </div>
                                        <div class="action-chevron ${numberOfActionsInActionPlan == 0 ? 'action-chevron__uncollapsed' : 'action-chevron__collapsed'}"></div>
                                    </div>
                                    <div class="action-body selected-action_body ${numberOfActionsInActionPlan == 0 ? 'action-body__uncollapsed' : 'action-body__collapsed'}">
                                        <div class="action-text selected-action_text">
                                            <div class="selected-action_text__editable" contenteditable="true" tabindex="-1">${newActionObj.actionText}</div>
                                            <div class="edit-icon"></div>
                                        </div>
                                        <div class="selected-action_settings">
                                            <div class="action-setting selected-action_status">
                                                ${actionStatus_dropdown}
                                            </div>
                                            <div class="action-setting selected-action_due-date">
                                                <label class="action-setting_label">${meta.Labels['labels.DueDate'].Label}</label>
                                                <input type="text" id="${orderId}_datepicker">
                                            </div>
                                            <div class="action-setting selected-action_owner">
                                                <label class="action-setting_label">${meta.Labels['labels.ActionOwner'].Label}</label>
                                                <input type="text" id="${orderId}_owner" value="${newActionObj.actionOwner}">
                                            </div>
                                            <div class="selected-action_remove">
                                                <div class="action_remove-icon"></div>
                                            </div>
                                        </div>                                        
                                    </div>
                                    <div class="action_confirmation confirmation__hidden">
                                        <div class="confirmation_content">
                                            <div class="confirmation_text">${meta.Labels['labels.DeleteActionConfirmation'].Label}</div>
                                            <div class="confirmation_controls">
                                                <div class="confirmation-button confirmation-button__agree">${meta.Labels['buttons.Yes'].Label}</div>
                                                <div class="confirmation-button confirmation-button__close">${meta.Labels['buttons.No'].Label}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;

        $(actionPlanContainer).append(newActionHTML);

        let focusAreaCardID = $(focusAreaCard).attr('id').split('-')[1];

        //handle calendar click
        $(`#${orderId}_datepicker`).datepicker({
            onSelect: function (date) {
                if (!!date) {
                    let newDate = new Date(date);
                    FocusAreas_UpdateActionInActionPlan(focusAreaCardID, orderId, 'actionDueDate', newDate.toDateString());
                }
            },
            dateFormat: config.ActionPlannerDateFormat
        });
        $(`#${orderId}_datepicker`).datepicker('setDate', new Date(newActionObj.actionDueDate));

        ActionFocusAreas_HandleActionTitleClick($(`#${orderId}`).find('.action-title'));

        //handle status dropdown change
        $(`#${orderId}_status-dropdown`).change(function (event) {
            let selectedOption = $(this).val();
            State_Set('actionStatus_' + orderId, selectedOption);

            FocusAreas_UpdateActionInActionPlan(focusAreaCardID, orderId, 'actionStatus', selectedOption);
        });

        //handle owner input change
        $(`#${orderId}_owner`).on('input', function (event) {
            let newOwnerName = $(this).val();

            FocusAreas_UpdateActionInActionPlan(focusAreaCardID, orderId, 'actionOwner', newOwnerName);
        });

        //handle click on action title/text + pen icon to enable immediate editing (using contenteditable)
        $(`#${orderId} .action-title_text__editable, #${orderId} .selected-action_text__editable, #${orderId} .edit-icon`).click(function (event) {
            event.stopPropagation();

            if ($(this).hasClass('edit-icon')) {
                let actionTitle = $(this).parent().find('.action-title_text__editable');

                if (actionTitle.length > 0) {
                    $(actionTitle).focus();
                }

                let actionText = $(this).parent().find('.selected-action_text__editable');

                if (actionText.length > 0) {
                    $(actionText).focus();
                }
            }
        });

        //handle actionTitle text change
        $(`#${orderId} .action-title_text__editable`).on('input', function (event) {
            let newTitle = this.textContent;

            FocusAreas_UpdateActionInActionPlan(focusAreaCardID, orderId, 'actionTitle', newTitle);
        });

        //handle actionText text change
        $(`#${orderId} .selected-action_text__editable`).on('input', function (event) {
            let newText = this.textContent;

            FocusAreas_UpdateActionInActionPlan(focusAreaCardID, orderId, 'actionText', newText);
        });

        ActionFocusAreas_HandleRemovingAction(focusAreaCardID, orderId, $(`#${orderId} .action_remove-icon`), $(`#${orderId} .confirmation-button__agree`), $(`#${orderId} .confirmation-button__close`))

    }

}

function ActionFocusAreas_HandleRemovingAction(focusAreaId, actionId, trashCanElement, yesButton, noButton) {
    //handle trash can click on action
    trashCanElement.click(function (event) {
        event.stopPropagation();
        event.preventDefault();

        let actionToRemove = $(this).parents('.selected-action').first();

        let confirmationBox = $(actionToRemove).find('.action_confirmation').first();
        if (!!confirmationBox) {
            if ($(confirmationBox).hasClass('confirmation__hidden')) {
                $(confirmationBox).removeClass('confirmation__hidden');
            }
        }
    });

    yesButton.click(function (event) {
        event.stopPropagation();

        let confirmationBox = $(this).parents('.action_confirmation').first();

        if (!!confirmationBox) {
            $(confirmationBox).addClass('confirmation__hidden');

            FocusAreas_RemoveActionFromActionPlan(focusAreaId, actionId);

            $(`#${actionId}`).remove();

            let actions = FocusAreas_GetActionsInActionPlan(focusAreaId);

            if (actions.length == 0) {
                $(`#focusArea-${focusAreaId} .selected-actions_container`).addClass('selected-actions_container__hidden');
            }
        }
    });

    noButton.click(function (event) {
        event.stopPropagation();

        let confirmationBox = $(this).parents('.action_confirmation').first();
        if (!!confirmationBox) {
            $(confirmationBox).addClass('confirmation__hidden');
        }
    });

}

function ActionFocusAreas_RenderSelectedActions(itemId) {
    let focusAreaActions = FocusAreas_GetActionsInActionPlan(itemId);

    if (!!focusAreaActions && Object.keys(focusAreaActions).length > 0) {
        /*focusAreaActions.forEach((action) => {
            ActionFocusAreas_AddActionToActionPlanSection($('#focusArea-' + itemId).first(), action);
        });*/

        for(let action in focusAreaActions) {
            ActionFocusAreas_AddActionToActionPlanSection($('#focusArea-' + itemId).first(), action, focusAreaActions[action], action);
        }
    }
}

function ActionFocusAreas_RenderAddActionTable() {
    var current_items = Main_CurrentItemsData_WithFilter();
    var current_dimensions = Main_CurrentDimensionsData_WithFilter();

    // temp code until the Source property is removed
    if (current_items.hasOwnProperty("Source"))
        delete current_items.Source;

    var headers = [[
        { Label: "", ClassName: 'text-cell', rowspan: 1 },
        { Label: "# ", ClassName: 'id-cell', rowspan: 1 },
        { Label: meta.Labels["labels.Question"].Label, ClassName: 'text-cell', rowspan: 1 },
        { Label: meta.Labels["labels.PercentFav"].Label, ClassName: 'numeric-cell distribution-cell', rowspan: 1 },
        { Label: meta.Labels['labels.Action'].Label, ClassName: 'numeric-cell', rowspan: 1 }
    ]];
    var table_data = [];

    // Some type of Dimension View
    var counter = 0;
    for (var i in current_dimensions) {
        var sort_dId = counter < 10 ? '0' + counter : counter;
        var sort_qId = sort_dId + '_';
        table_data.push(ActionFocusAreas_AddItemToTable(i, true, sort_dId));
        // Add Questions from this Dimension
        var dimItems = meta.Dimensions[i].Items;
        for (var j = 0; j < dimItems.length; j++) {
            // Check if question exists in data (this is only a temp problem with test data, in real life we shouldn't have to do this test)
            if (current_items[dimItems[j]] != null) {
                table_data.push(ActionFocusAreas_AddItemToTable(dimItems[j], false, sort_qId));
            }
        }
        counter++;
    }

    var columnSettings = `
		'orderFixed': [ 0, 'asc' ],
		'order': [ 1, 'asc' ],
		'columnDefs': [
			{ 'targets': [ 0 ], 'visible': false },
			{ 'targets': [0,1,2], type: 'natural' },
			{ 'targets': [ 3 ], type: 'numsort' }
		],
        'searchHighlight': true,
	`;

    var dt = Component_DataTable(
        "items-table-addaction",
        "",
        headers,
        table_data,
        true,
        true,
        columnSettings,
        false
    );

    return dt;
}

function ActionFocusAreas_AddItemToTable(itemId, isDimension, sortId) {
    var formatter = Utils_FormatOutput;

    var current_data = isDimension
        ? Main_CurrentDimensionsData_WithFilter()
        : Main_CurrentItemsData_WithFilter();

    var obj = current_data[itemId]; // Either Item or Dimension

    var label = isDimension
        ? '<b>' + meta.Dimensions[itemId].Label + '</b>'
        : meta.Items[itemId].Label;

    var id = isDimension
        ? '&#9674;' // diamond symbol
        : obj.QNo;

    var pct_dist = isDimension
        ? obj.Dist // dimensions already store rounded percentages in the distribution
        : Utils_CountsToPercents(obj.Dist);

    var rowdata = [];
    rowdata.push(
        { Label: sortId, ClassName: 'id-cell' },
        { Label: id, ClassName: 'id-cell' },
        { Label: label, ClassName: 'text-cell' },
        { Label: formatter(pct_dist.Fav), ClassName: 'numeric-cell distribution-cell' }
    );

    //check if item has been added to Focus Areas
    //set action icon to remove icon if so
    let isItemAddedAsFocusArea = FocusAreas_IsItemAlreadyAdded(itemId);
    let actionButtonClass = isItemAddedAsFocusArea ? 'remove-action table_remove-item-minus-circle' : 'add-action table_add-item-plus-circle__thin';
    let actionIdDimensionOrQuestion = isDimension ? 'dimension' : 'question';
    let actionButton = `<div class="action-cell"><div class="action-icon ${actionButtonClass}" id = "${actionIdDimensionOrQuestion}-${itemId}-button" ></div></div>`;
    rowdata.push({ Label: actionButton, ClassName: 'numeric-cell' });

    return rowdata;
}

