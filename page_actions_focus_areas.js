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
        ShowFilterSummary: true
    }
};


function ActionsFocusAreas_Render() {
    let addNewFocusAreaHTML = `
        <div class="add-focus-areas-buttons-container">
            <div class="add-focus-areas-icon ap_add-items-plus-circle"></div>
            <div class="add-focus-areas-text">${meta.Labels['labels.Add'].Label}</div>
        </div>
    `;

    $('#AddNewFocusArea').html(addNewFocusAreaHTML);

    $('#FocusAreasList').html('');

    let addedFocusAreas = FocusAreas_GetFocusAreas();

    let itemsData = Main_CurrentItemsData_WithFilter();
    let dimensionsData = Main_CurrentDimensionsData_WithFilter();


    addedFocusAreas.forEach((focusArea, index) => {
        ActionFocusAreas_RenderFocusArea(focusArea, index, itemsData, dimensionsData);
    });
}

function ActionFocusAreas_RenderFocusArea(focusArea, index, itemsData, dimensionsData) {
    let o = [];

    let focusAreaLabel = '';
    let favScore = '';
    let recommendedActions = [];

    if (focusArea.isDimension) {
        focusAreaLabel = Main_GetDimensionText(focusArea.itemId);
        favScore = Utils_FormatPctOutput(dimensionsData[focusArea.itemId].Dist.Fav);

        recommendedActions = ActionFocusAreas_GetRecommendedActions(focusArea.itemId);
    } else {
        focusAreaLabel = Main_GetQuestionText(focusArea.itemId);

        let pct_distribution = Utils_CountsToPercents(itemsData[focusArea.itemId].Dist);
        favScore = Utils_FormatPctOutput(pct_distribution.Fav);

        recommendedActions = ActionFocusAreas_GetRecommendedActions(focusArea.itemId);

        if (recommendedActions.length == 0) {
            let dimensionIdForCurrentItem = Main_GetDimensionIdByItemId(focusArea.itemId);

            recommendedActions = ActionFocusAreas_GetRecommendedActions(dimensionIdForCurrentItem);
        }

    }

    let actionPlan_dropdown = Component_Dropdown(
        'actionPlanStatus_' + focusArea.itemId,
        meta.Labels['labels.Status'].Label,
        focusArea.itemId + '_status-dropdown',
        '',
        ParamValues_ActionPlannerStatusSelector()
    );

    o.push(`
            <div id="focusArea-${focusArea.itemId}" class="focus-area-card">
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
                            <div class="ap-tag ${focusArea.tags.importance ? 'ap-tag__active' : 'ap-tag__inactive'} ap-tag__importance"></div>
                            <div class="ap-tag ${focusArea.tags.involvement ? 'ap-tag__active' : 'ap-tag__inactive'} ap-tag__involvement"></div>
                            <div class="ap-tag ${focusArea.tags.cost ? 'ap-tag__active' : 'ap-tag__inactive'} ap-tag__cost"></div>
                        </div>
                        <div class="focus-area-info_work-button">${meta.Buttons.WorkOnThis.Label}</div> 
                    </div>
                    <div class="action-plan action-plan__collapsed">
                        <div class="action-plan_container">
                            <div class="plan-column">
                                ${ActionFocusAreas_RenderRecommendedActions(focusArea.itemId, recommendedActions, index)}                        
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
                                            <label for="plan-name-${focusArea.itemId}" class="personal-plan_label">${meta.Labels['labels.Name'].Label}</label>
                                            <input id="plan-name-${focusArea.itemId}" type="text" class="plan-name__input" value="${focusArea.actionPlan.name}">
                                        </div>
                                        <div class="personal-plan_notes">
                                            <label for="plan-notes-${focusArea.itemId}" class="personal-plan_label">${meta.Labels['labels.Notes'].Label}</label>
                                            <textarea id="plan-notes-${focusArea.itemId}" class="plan-notes__input">${focusArea.actionPlan.notes}</textarea>
                                        </div>
                                        <div class="personal-plan_details">
                                            <div class="plan-setting plan_status">
                                                ${actionPlan_dropdown}
                                            </div>
                                            <div class="plan-setting plan_due-date">
                                                <label class="plan-setting_label">${meta.Labels['labels.DueDate'].Label}</label>
                                                <input type="text" id="${focusArea.itemId}_datepicker">
                                            </div>
                                            <div class="plan-setting plan_owner">
                                                <label class="plan-setting_label">${meta.Labels['labels.PlanOwner'].Label}</label>
                                                <div id="${focusArea.itemId}_owner" class="plan-setting_owner">${focusArea.actionPlan.owner}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="action-plan_controls"><div class="action-plan_submit">${meta.Labels['buttons.Submit'].Label}</div><div class="action-plan_close">${meta.Labels['buttons.Close'].Label}</div></div>
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

    $(`#plan-name-${focusArea.itemId}`).on('input', function (event) {
        let newPlanName = $(this).val();

        FocusAreas_UpdateActionPlan(focusArea.itemId, 'name', newPlanName);
    });

    $(`#plan-notes-${focusArea.itemId}`).on('input', function (event) {
        let newPlanNotes = $(this).val();

        FocusAreas_UpdateActionPlan(focusArea.itemId, 'notes', newPlanNotes);
    });

    $(`#${focusArea.itemId}_datepicker`).datepicker({
        onSelect: function (date) {
            if (!!date) {
                let newDate = new Date(date);
                FocusAreas_UpdateActionPlan(focusArea.itemId, 'dueDate', newDate.toDateString());
            }
        },
        dateFormat: config.ActionPlannerDateFormat
    });
    $(`#${focusArea.itemId}_datepicker`).datepicker('setDate', new Date(focusArea.actionPlan.dueDate));

    $(`#${focusArea.itemId}_status-dropdown`).change(function (event) {
        let selectedOption = $(this).val();
        State_Set('actionPlanStatus_' + focusArea.itemId, selectedOption);

        FocusAreas_UpdateActionPlan(focusArea.itemId, 'status', selectedOption);
    });

    /*$(`#${focusArea.itemId}_owner`).on('input', function (event) {
        let newOwnerName = $(this).val();

        FocusAreas_UpdateActionPlan(focusArea.itemId, 'owner', newOwnerName);
    });*/

    //handle removing focus area card
    $(`#focusArea-${focusArea.itemId} .confirmation-button__agree`).click(function (event) {
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

    $(`#focusArea-${focusArea.itemId} .confirmation-button__close`).click(function (event) {
        let confirmationBox = $(this).parents('.focus-area-card_confirmation').first();
        if (!!confirmationBox) {
            $(confirmationBox).addClass('confirmation__hidden');
        }
    });

    ActionFocusAreas_RenderSelectedActions(focusArea.itemId);
    ActionsFocusAreas_HandleTagClick($(`#focusArea-${focusArea.itemId} .ap-tag`));
    ActionsFocusAreas_HandleFocusAreaTrashCanClick($(`#focusArea-${focusArea.itemId} .fa-card-header_remove`));
    ActionFocusAreas_HandleWorkOnThisButtonClick($(`#focusArea-${focusArea.itemId} .focus-area-info_work-button`));
    ActionFocusAreas_HandleActionTitleClick($(`#focusArea-${focusArea.itemId} .recommended-action_title`));
    ActionFocusAreas_HandleCloseButtonClick($(`#focusArea-${focusArea.itemId} .action-plan_close`));
    ActionFocusAreas_HandleAddToActionPlanButtonClick($(`#focusArea-${focusArea.itemId} .recommended-action_add-to-plan`));
    ActionFocusAreas_HandleAddOwnActionButtonClick($(`#focusArea-${focusArea.itemId} .selected-actions_add`));

    $(`#focusArea-${focusArea.itemId} .plan-column`).click(function(e) {
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
        /*event.stopPropagation();
        event.preventDefault();*/

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
        /*event.stopPropagation();
        event.preventDefault();*/

        let cardContent = $(this).parent().parent();
        let actionPlanContainer = $(cardContent).find('.action-plan');
        let focusAreaCard = $(actionPlanContainer).parent();

        $(this).hide();
        $(actionPlanContainer).removeClass('action-plan__collapsed');
    });
}

function ActionFocusAreas_HandleCloseButtonClick(buttons) {
    buttons.click(function (event) {
       /* event.stopPropagation();
        event.preventDefault();*/

        let actionPlanContainer = $(this).parent().parent();
        let focusAreaCard = $(actionPlanContainer).parent();

        $(actionPlanContainer).addClass('action-plan__collapsed');
        $(focusAreaCard).find('.focus-area-info_work-button').first().show();
    });
}

function ActionsFocusAreas_HandleTagClick(tagElements) {
    tagElements.click(function (event) {
        /*event.stopPropagation();
        event.preventDefault();*/

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

function ActionsFocusAreas_HandleFocusAreaTrashCanClick(trashCanElements) {
    trashCanElements.click(function (event) {
        /*event.stopPropagation();
        event.preventDefault();*/

        let cardToRemove = $(this).parent().parent();
        /*let cardToRemoveID = cardToRemove.attr('id').split('-');

        FocusAreas_RemoveItem(cardToRemoveID[1]);
        FocusAreas_UpdateFocusAreasCounterSpan();

        $(cardToRemove).remove();*/

        let confirmationBox = $(cardToRemove).find('.focus-area-card_confirmation').first();
        if (!!confirmationBox) {
            if($(confirmationBox).hasClass('confirmation__hidden')) {
                $(confirmationBox).removeClass('confirmation__hidden');
            }
        }
    });
}

function ActionFocusAreas_HandleAddToActionPlanButtonClick(addActionButtons) {
    addActionButtons.click(function (event) {
        /*event.stopPropagation();
        event.preventDefault();*/

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

        let newActionObj = {
            actionId: actionId,
            orderId: actionId + '_selected_' + focusAreaActions.length,
            actionTitle: newActionTitle,
            actionText: newActionText,
            actionStatus: 'NotStarted',
            actionDueDate: dueDate.toDateString(),
            actionOwner: data.User.FirstName
        }

        FocusAreas_AddActionsToActionPlan(focusAreaCardID, newActionObj);
        ActionFocusAreas_AddActionToActionPlanSection(focusAreaCard, newActionObj);
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

        let newActionObj = {
            actionId: 'OwnAction_selected_' + focusAreaActions.length,
            orderId: 'OwnAction_selected_' + focusAreaActions.length,
            actionTitle: 'newActionTitle',
            actionText: 'newActionText',
            actionStatus: 'NotStarted',
            actionDueDate: dueDate.toDateString(),
            actionOwner: data.User.FirstName
        }

        FocusAreas_AddActionsToActionPlan(focusAreaCardID, newActionObj);
        ActionFocusAreas_AddActionToActionPlanSection(focusAreaCard, newActionObj);
    });
}

function ActionFocusAreas_AddActionToActionPlanSection(focusAreaCard, newActionObj) {
    let actionPlanContainer = $(focusAreaCard).find('.selected-actions_container').first();

    if (!!actionPlanContainer) {
        if ($(actionPlanContainer).hasClass('selected-actions_container__hidden')) {
            $(actionPlanContainer).removeClass('selected-actions_container__hidden');
        }

        let numberOfActionsInActionPlan = $(actionPlanContainer).find('.selected-action').length;

        let actionStatus_dropdown = Component_Dropdown(
            'actionStatus_' + newActionObj.orderId,
            meta.Labels['labels.Status'].Label,
            newActionObj.orderId + '_status-dropdown',
            '',
            ParamValues_ActionPlannerStatusSelector()
        );

        let newActionHTML = `<div id="${newActionObj.orderId}" class="selected-action ${numberOfActionsInActionPlan == 0 ? 'action__uncollapsed' : 'action__collapsed'}">
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
                                                <input type="text" id="${newActionObj.orderId}_datepicker">
                                            </div>
                                            <div class="action-setting selected-action_owner">
                                                <label class="action-setting_label">${meta.Labels['labels.ActionOwner'].Label}</label>
                                                <input type="text" id="${newActionObj.orderId}_owner" value="${newActionObj.actionOwner}">
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
        $(`#${newActionObj.orderId}_datepicker`).datepicker({
            onSelect: function (date) {
                if (!!date) {
                    let newDate = new Date(date);
                    FocusAreas_UpdateActionInActionPlan(focusAreaCardID, newActionObj.orderId, 'actionDueDate', newDate.toDateString());
                }
            },
            dateFormat: config.ActionPlannerDateFormat
        });
        $(`#${newActionObj.orderId}_datepicker`).datepicker('setDate', new Date(newActionObj.actionDueDate));

        ActionFocusAreas_HandleActionTitleClick($(`#${newActionObj.orderId}`).find('.action-title'));

        //handle status dropdown change
        $(`#${newActionObj.orderId}_status-dropdown`).change(function (event) {
            let selectedOption = $(this).val();
            State_Set('actionStatus_' + newActionObj.orderId, selectedOption);

            FocusAreas_UpdateActionInActionPlan(focusAreaCardID, newActionObj.orderId, 'actionStatus', selectedOption);
        });

        //handle owner input change
        $(`#${newActionObj.orderId}_owner`).on('input', function (event) {
            let newOwnerName = $(this).val();

            FocusAreas_UpdateActionInActionPlan(focusAreaCardID, newActionObj.orderId, 'actionOwner', newOwnerName);
        });

        //handle click on action title/text + pen icon to enable immediate editing (using contenteditable)
        $(`#${newActionObj.orderId} .action-title_text__editable, #${newActionObj.orderId} .selected-action_text__editable, #${newActionObj.orderId} .edit-icon`).click(function (event) {
            event.stopPropagation();

            if($(this).hasClass('edit-icon')) {
                let actionTitle = $(this).parent().find('.action-title_text__editable');

                if(actionTitle.length > 0) {
                    $(actionTitle).focus();
                }

                let actionText = $(this).parent().find('.selected-action_text__editable');

                if(actionText.length > 0) {
                    $(actionText).focus();
                }
            }
        });

        //handle actionTitle text change
        $(`#${newActionObj.orderId} .action-title_text__editable`).on('input', function (event) {
            let newTitle = this.textContent;

            FocusAreas_UpdateActionInActionPlan(focusAreaCardID, newActionObj.orderId, 'actionTitle', newTitle);
        });

        //handle actionText text change
        $(`#${newActionObj.orderId} .selected-action_text__editable`).on('input', function (event) {
            let newText = this.textContent;

            FocusAreas_UpdateActionInActionPlan(focusAreaCardID, newActionObj.orderId, 'actionText', newText);
        })
    }

}

function ActionFocusAreas_RenderSelectedActions(itemId) {
    let focusAreaActions = FocusAreas_GetActionsInActionPlan(itemId);

    if (focusAreaActions.length > 0) {
        focusAreaActions.forEach((action) => {
            ActionFocusAreas_AddActionToActionPlanSection($('#focusArea-' + itemId).first(), action);
        });
    }
}
