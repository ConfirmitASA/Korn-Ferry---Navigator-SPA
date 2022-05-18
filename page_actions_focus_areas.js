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

    let o = [];

    let addedFocusAreas = FocusAreas_GetFocusAreas();

    let itemsData = Main_CurrentItemsData_WithFilter();
    let dimensionsData = Main_CurrentDimensionsData_WithFilter();


    addedFocusAreas.forEach((focusArea) => {
        let focusAreaLabel = '';
        let favScore = '';
        let recommendedActions = [];

        

        if(focusArea.isDimension) {
            focusAreaLabel = Main_GetDimensionText(focusArea.itemId);
            favScore = Utils_FormatPctOutput(dimensionsData[focusArea.itemId].Dist.Fav);

            recommendedActions = ActionFocusAreas_GetRecommendedActions ( focusArea.itemId );
        } else {
            focusAreaLabel = Main_GetQuestionText(focusArea.itemId);

            let pct_distribution =  Utils_CountsToPercents (itemsData[focusArea.itemId].Dist);
            favScore = Utils_FormatPctOutput(pct_distribution.Fav);

            recommendedActions = ActionFocusAreas_GetRecommendedActions (focusArea.itemId);

            if(recommendedActions.length == 0) {
                let dimensionIdForCurrentItem = Main_GetDimensionIdByItemId(focusArea.itemId);

                recommendedActions = ActionFocusAreas_GetRecommendedActions ( dimensionIdForCurrentItem );
            }

        }

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
                            ${recommendedActions.length == 0 
                                ? meta.Labels['labels.NoRecommendationsAvailable'].Label
                                : recommendedActions.length + ' ' + meta.Labels['labels.RecommendationsAvailable'].Label}
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
                            <div class="progress-column"></div>
                            <div class="plan-column">
                                ${ActionFocusAreas_RenderRecommendedActions(focusArea.itemId, recommendedActions)}                        
                                <div class="action-plan_selected-actions">
                                    <div class="selected-actions_title">${meta.Labels['labels.ActionPlan'].Label}</div>
                                    <div class="selected-actions_container selected-actions_container__hidden"></div>
                                    <div class="add-to-plan selected-actions_add">${meta.Buttons.AddOwnAction.Label}</div>
                                </div>
                                <div class="action-plan_personal">
                                    <div class="personal-plan_title">${meta.Labels['labels.PersonalizeActionPlan'].Label}</div>
                                    <div class="personal-plan_name">
                                        <label for="plan-name-${focusArea.itemId}" class="personal-plan_label">${meta.Labels['labels.Name'].Label}</label>
                                        <input id="plan-name-${focusArea.itemId}" type="text" class="plan-name__input" >
                                    </div>
                                    <div class="personal-plan_notes">
                                        <label for="plan-notes-${focusArea.itemId}" class="personal-plan_label">${meta.Labels['labels.Notes'].Label}</label>
                                        <textarea id="plan-notes-${focusArea.itemId}" class="plan-notes__input"></textarea>
                                    </div>
                                    <div class="personal-plan_details"></div>
                                </div>
                            </div>
                        </div>
                        <div class="action-plan_controls"><div class="action-plan_submit">${meta.Labels['buttons.Submit'].Label}</div><div class="action-plan_close">${meta.Labels['buttons.Close'].Label}</div></div>
                    </div>                   
                </div>
            </div>
        `)
    })

    $('#FocusAreasList').html(
        o.join('')
    );

    //add clicks to things
    ActionsFocusAreas_HandleTagClick($('.ap-tag'));
    ActionsFocusAreas_HandleCardsTrashCanClick($('.fa-card-header_remove'));
    ActionFocusAreas_HandleWorkOnThisButtonClick($('.focus-area-info_work-button'));
    ActionFocusAreas_HandleActionTitleClick($('.action-title'));
    ActionFocusAreas_HandleCloseButtonClick($('.action-plan_close'));
    ActionFocusAreas_HandleAddToActionPlanButtonClick($('.recommended-action_add-to-plan'));
    ActionFocusAreas_HandleAddOwnActionButtonClick($('.selected-actions_add'));
}

function ActionFocusAreas_GetRecommendedActions ( s ) {
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

                            if ( o[index] == null) {
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

                            if ( o[index] == null) {
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
        actions.push ( o[key] );
    }

    return actions;
}

function ActionFocusAreas_RenderRecommendedActions(itemId, recommendedActions) {
    let recommendedActionsHTML = [];

    if(recommendedActions.length > 0) {
        recommendedActionsHTML.push(`<div class="action-plan_recommended-actions"><div class="recommended-actions_title">${meta.Labels['labels.RecommendedActions'].Label}</div><div class="recommended-actions_container">`);

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
        recommendedActionsHTML.push(`</div></div>`);
    }

    return recommendedActionsHTML.join('');

}

function ActionFocusAreas_HandleActionTitleClick(titleElements) {
    titleElements.click(function (event) {
        event.stopPropagation();
        event.preventDefault();

        let chevronElement = $(this).find('.action-chevron');
        let actionElement = $(this).parent();
        let actionBodyElement = actionElement.find('.action-body');

        if($(this).hasClass('action-title__uncollapsed')) {
            $(this).removeClass('action-title__uncollapsed');
            $(this).addClass('action-title__collapsed');

            if(chevronElement.length > 0) {
                chevronElement.removeClass('action-chevron__uncollapsed');
                chevronElement.addClass('action-chevron__collapsed');
            }

            if(actionBodyElement.length > 0) {
                actionBodyElement.removeClass('action-body__uncollapsed');
                actionBodyElement.addClass('action-body__collapsed');
            }

            if(actionElement.length > 0) {
                actionElement.removeClass('action__uncollapsed');
                actionElement.addClass('action__collapsed');
            }
        } else {
            if($(this).hasClass('action-title__collapsed')) {
                $(this).removeClass('action-title__collapsed');
                $(this).addClass('action-title__uncollapsed');

                if(chevronElement.length > 0) {
                    chevronElement.removeClass('action-chevron__collapsed');
                    chevronElement.addClass('action-chevron__uncollapsed');
                }

                if(actionBodyElement.length > 0) {
                    actionBodyElement.removeClass('action-body__collapsed');
                    actionBodyElement.addClass('action-body__uncollapsed');
                }
                if(actionElement.length > 0) {
                    actionElement.removeClass('action__collapsed');
                    actionElement.addClass('action__uncollapsed');
                }
            }
        }
    });
}

function ActionFocusAreas_HandleWorkOnThisButtonClick(buttons) {
    buttons.click(function (event) {
        event.stopPropagation();
        event.preventDefault();

        let cardContent = $(this).parent().parent();
        let actionPlanContainer = $(cardContent).find('.action-plan');
        let focusAreaCard = $(actionPlanContainer).parent();

        $(this).hide();
        $(actionPlanContainer).removeClass('action-plan__collapsed');
    });
}

function ActionFocusAreas_HandleCloseButtonClick(buttons) {
    buttons.click(function (event) {
        event.stopPropagation();
        event.preventDefault();

        let actionPlanContainer = $(this).parent().parent();
        let focusAreaCard = $(actionPlanContainer).parent();

        $(actionPlanContainer).addClass('action-plan__collapsed');
        $(focusAreaCard).find('.focus-area-info_work-button').first().show();
    });
}

function ActionsFocusAreas_HandleTagClick(tagElements) {
    tagElements.click(function (event) {
        event.stopPropagation();
        event.preventDefault();

        let tagName = '';
        let tagValue = false;

        if($(this).hasClass('ap-tag__inactive')) {
            $(this).removeClass('ap-tag__inactive');
            $(this).addClass('ap-tag__active');

            tagValue = true;
        } else {
            if($(this).hasClass('ap-tag__active')) {
                $(this).removeClass('ap-tag__active');
                $(this).addClass('ap-tag__inactive');

                tagValue = false;
            }
        }

        if($(this).hasClass('ap-tag__importance')) {
            tagName = 'importance';
        }

        if($(this).hasClass('ap-tag__involvement')) {
            tagName = 'involvement';
        }

        if($(this).hasClass('ap-tag__cost')) {
            tagName = 'cost';
        }

        //update global focus areas obj with tags
        let parentCard = $(this).parents('.focus-area-card')[0];

        if(!!parentCard) {
            let itemId = $(parentCard).attr('id').split('-')[1];

            FocusAreas_UpdateTagOnFocusArea(itemId, tagName, tagValue);
        }
    });
}

function ActionsFocusAreas_HandleCardsTrashCanClick(trashCanElements) {
    trashCanElements.click(function (event) {
        event.stopPropagation();
        event.preventDefault();

        let cardToRemove = $(this).parent().parent();
        let cardToRemoveID = cardToRemove.attr('id').split('-');

        FocusAreas_RemoveItem(cardToRemoveID[1]);
        FocusAreas_UpdateFocusAreasCounterSpan();

        $(cardToRemove).remove();
    });
}

function ActionFocusAreas_HandleAddToActionPlanButtonClick(addActionButtons) {
    addActionButtons.click(function (event) {
        event.stopPropagation();
        event.preventDefault();

        //get item id for focus area
        let focusAreaCard = $(this).parents('.focus-area-card').first();
        let focusAreaCardID = focusAreaCard.attr('id').split('-')[1];
        //get action id
        let action = $(this).parents('.recommended-action').first();
        let actionId = action.attr('id');

        let dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 14);

        let focusAreaActions = FocusAreas_GetActionsInActionPlan(focusAreaCardID);

        let metaActionId = actionId.split('_').slice(0,2).join('_');
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
        event.stopPropagation();
        event.preventDefault();

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
        if($(actionPlanContainer).hasClass('selected-actions_container__hidden')) {
            $(actionPlanContainer).removeClass('selected-actions_container__hidden');
        }

        let numberOfActionsInActionPlan = $(actionPlanContainer).find('.selected-action').length;

        let actionStatus_dropdown = Component_Dropdown (
            'actionStatus_' + newActionObj.orderId,
            meta.Labels['labels.Status'].Label,
            newActionObj.orderId + '_dropdown',
            '',
            ParamValues_ActionPlannerStatusSelector()
        );

        let newActionHTML = `<div id="${newActionObj.orderId}" class="selected-action ${numberOfActionsInActionPlan == 0 ? 'action__uncollapsed' : 'action__collapsed'}">
                                    <div class="action-title selected-action_title ${numberOfActionsInActionPlan == 0 ? 'action-title__uncollapsed' : 'action-title__collapsed'}"><div class="action-title_text" contenteditable="true">${newActionObj.actionTitle}</div><div class="action-chevron ${numberOfActionsInActionPlan == 0 ? 'action-chevron__uncollapsed' : 'action-chevron__collapsed'}"></div></div>
                                    <div class="action-body selected-action_body ${numberOfActionsInActionPlan == 0 ? 'action-body__uncollapsed' : 'action-body__collapsed'}">
                                        <div class="action-text selected-action_text" contenteditable="true">${newActionObj.actionText}</div>
                                        <div class="selected-action_settings">
                                            <div class="action-setting selected-action_status">
                                                ${actionStatus_dropdown}
                                            </div>
                                            <div class="action-setting selected-action_due-date">
                                                <label class="action-setting_label">${meta.Labels['labels.DueDate'].Label}</label>
                                                <input type="text" id="${newActionObj.orderId}_datepicker">
                                            </div>
                                            <div class="action-setting selected-action_owner">
                                                <label class="action-setting_label">${meta.Labels['labels.Owner'].Label}</label>
                                                <input type="text" id="${newActionObj.orderId}_owner" value="${newActionObj.actionOwner}">
                                            </div>
                                        </div>                                        
                                    </div>
                                </div>`;

        $(actionPlanContainer).append(newActionHTML);

        $(`#${newActionObj.orderId}_datepicker`).datepicker();
        $(`#${newActionObj.orderId}_datepicker`).datepicker('setDate', new Date(newActionObj.actionDueDate));

        ActionFocusAreas_HandleActionTitleClick($(`#${newActionObj.orderId}`).find('.action-title'));
    }

}
