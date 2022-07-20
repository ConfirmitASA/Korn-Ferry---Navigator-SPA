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
    let dt = ActionFocusAreas_RenderAddActionTable();

    let addNewFocusAreaHTML = `
        <div id="AddActionWindow_Button" class="add-focus-areas-buttons-container">
            <div class="add-focus-areas-icon ap_add-items-plus-circle"></div>
            <div class="add-focus-areas-text">${meta.Labels['labels.Add'].Label}</div>
        </div>
        <div id="AddActionWindow" class="focus-area-card_addaction" style="display:none;">
            <div class="addaction_content">
                <div class="addaction_table">${dt.Html}</div>
                <div id="AddActionWindow_CloseButton" class="close_addaction_button">X</div>
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
            let isItemAddedAsFocusArea = FocusAreas_IsItemSelected(itemId);
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

    if ( FocusAreas_GetFocusAreas().length == 0 )  FocusAreas_SetValues();

    ActionFocusAreas_RenderFocusAreaList();

    $(document).ready(function() {
        maxLength();
    });
}

function ActionFocusAreas_RenderFocusAreaList() {
    $('#FocusAreasList').html('');

    let index = 0;

    for(let focusArea of FocusAreas_GetOwnFocusAreas()) {
        ActionFocusAreas_RenderFocusArea(focusArea, index);
        index++;
    }
}

function ActionFocusAreas_RenderFocusArea(focusArea, index) {
    let o = [];

    const focusAreaId = focusArea.itemId;
    const focusAreaOrderId = focusArea.itemOrderId;
    const cardId = focusAreaId + '-' + focusAreaOrderId;

    let focusAreaLabel = '';
    let favScore = '';
    let recommendedActions = [];
    let diff = '';

    if (focusArea.isDimension) {

        // Dimension handler

        focusAreaLabel = Main_GetDimensionText(focusAreaId);

        recommendedActions = ActionFocusAreas_GetRecommendedActions(focusAreaId);
    } else {

        // Item handler

        focusAreaLabel = Main_GetQuestionText(focusAreaId);

        recommendedActions = ActionFocusAreas_GetRecommendedActions(focusAreaId);

        if (recommendedActions.length == 0) {
            let dimensionIdForCurrentItem = Main_GetDimensionIdByItemId(focusAreaId);

            recommendedActions = ActionFocusAreas_GetRecommendedActions(dimensionIdForCurrentItem);
        }

    }

    favScore = focusArea.favScore;
    diff = focusArea.diffVsCompany;

    State_Set('actionPlanStatus_' + cardId, focusArea.planStatus);
    State_Set(`actionPlanShared_${cardId}`, focusArea.planIsShared ? 'On' : 'Off');

    let actionPlan_dropdown = Component_Dropdown(
        'actionPlanStatus_' + cardId,
        meta.Labels['labels.Status'].Label,
        cardId + '_status-dropdown',
        '',
        ParamValues_ActionPlannerStatusSelector()
    );

    let sharePlanSwitch = Component_TwoOptionSwitch(
        `actionPlanShared_${cardId}`,
        '',
        `${cardId}_share-switch`,
        ParamValues_OnOff()
    );


    o.push(`
            <div id="focusArea-${cardId}" class="focus-area-card" data-focus-area-id="${focusAreaId}" data-focus-area-order-id="${focusAreaOrderId}">
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
                        <div class="focus-area-info_comparator">${ (isNaN(favScore.replace('%', '')) ? '-' : (diff>0 ? '+' + diff : diff))} ${meta.Labels['labels.vsCompany'].Label}</div>                      
                    </div>
                    <div class="focus-area-info_controls">
                        <div class="focus-area-info_tags">
                            <div class="ap-tag ${focusArea.importance ? 'ap-tag__active' : 'ap-tag__inactive'} ap-tag__importance"></div>
                            <div class="ap-tag ${focusArea.involvement ? 'ap-tag__active' : 'ap-tag__inactive'} ap-tag__involvement"></div>
                            <div class="ap-tag ${focusArea.cost ? 'ap-tag__active' : 'ap-tag__inactive'} ap-tag__cost"></div>
                        </div>
                        <div class="focus-area-info_area">${meta.Labels['labels.Area'].Label} ${meta.Hierarchy.Map[focusArea.planNode].Label}</div>
                        <div class="focus-area-info_work-button">${meta.Labels['buttons.WorkOnThis'].Label}</div> 
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
                                        <div class="add-to-plan selected-actions_add">${meta.Labels['buttons.AddOwnAction'].Label}</div> 
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
                                            <label for="plan-name-${cardId}" class="personal-plan_label">${meta.Labels['labels.Name'].Label}</label>
                                            <input id="plan-name-${cardId}" type="text" class="plan-name__input" value="${focusArea.planName}" maxlength="100">
                                        </div>
                                        <div class="personal-plan_notes">
                                            <label for="plan-notes-${cardId}" class="personal-plan_label">${meta.Labels['labels.Notes'].Label}</label>
                                            <textarea id="plan-notes-${cardId}" class="plan-notes__input" maxlength="2000">${focusArea.planNotes}</textarea>
                                        </div>
                                        <div class="personal-plan_details">
                                            <div class="plan-setting plan_status">
                                                ${actionPlan_dropdown}
                                            </div>
                                            <div class="plan-setting plan_due-date">
                                                <label class="plan-setting_label">${meta.Labels['labels.DueDate'].Label}</label>
                                                <input type="text" id="${cardId}_datepicker">
                                            </div>
                                            <div class="plan-setting plan_owner">
                                                <label class="plan-setting_label">${meta.Labels['labels.PlanOwner'].Label}</label>
                                                <div id="${cardId}_owner" class="plan-setting_owner">${focusArea.planOwner}</div>
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
                <div id="${cardId}_remove-confirmation" class="focus-area-card_confirmation confirmation__hidden">
                    <div class="confirmation_content">
                        <div class="confirmation_text">${meta.Labels['labels.DeletePlanConfirmation'].Label}</div>
                        <div class="confirmation_controls">
                            <div class="confirmation-button confirmation-button__agree">${meta.Labels['buttons.Yes'].Label}</div>
                            <div class="confirmation-button confirmation-button__close">${meta.Labels['buttons.No'].Label}</div>
                        </div>
                    </div>
                </div>
                <div id="${cardId}_limit-confirmation" class="focus-area-card_confirmation confirmation__hidden">
                    <div class="confirmation_content">
                        <div class="confirmation_text">${meta.Labels['labels.ActionsLimitReached'].Label}</div>
                        <div class="confirmation_controls">
                            <div class="confirmation-button confirmation-button__close">${meta.Labels['buttons.Cancel'].Label}</div>
                        </div>
                    </div>
                </div>
            </div>
        `);

    $('#FocusAreasList').append(o.join(''));

    const planKey = FocusAreas_CreateFocusAreaKey(focusAreaId, focusAreaOrderId, focusArea.ownerId);

    $(`#plan-name-${cardId}`).on('input', function (event) {
        let newPlanName = $(this).val();
        newPlanName = stripHTML(newPlanName);
        FocusAreas_UpdateFocusArea(planKey, 'planName', newPlanName)
    });

    $(`#plan-notes-${cardId}`).on('input', function (event) {
        let newPlanNotes = $(this).val();
        newPlanNotes = stripHTML(newPlanNotes);
        FocusAreas_UpdateFocusArea(planKey, 'planNotes', newPlanNotes);
    });

    $(`#${cardId}_datepicker`).datepicker({
        onSelect: function (date) {
            if (!!date) {
                let newDate = new Date(date);
                FocusAreas_UpdateFocusArea(planKey, 'planDueDate', newDate.toDateString());
                FocusAreas_SaveChanges(planKey);
            }
        },
        dateFormat: config.ActionPlannerDateFormat
    });
    $(`#${cardId}_datepicker`).datepicker('setDate', new Date(focusArea.planDueDate));

    $(`#${cardId}_status-dropdown`).change(function (event) {
        let selectedOption = $(this).val();
        State_Set('actionPlanStatus_' + cardId, selectedOption);

        FocusAreas_UpdateFocusArea(planKey, 'planStatus', selectedOption);
    });

    /*$(`#${cardId}_owner`).on('input', function (event) {
        let newOwnerName = $(this).val();

        FocusAreas_UpdateFocusArea(planKey, 'owner', newOwnerName);
    });*/

    ActionFocusAreas_RenderSelectedActions(planKey);
    ActionsFocusAreas_HandleTagClick($(`#focusArea-${cardId} .ap-tag`));
    ActionsFocusAreas_HandleRemovingFocusArea(cardId);
    ActionFocusAreas_HandleWorkOnThisButtonClick($(`#focusArea-${cardId} .focus-area-info_work-button`));
    ActionFocusAreas_HandleActionTitleClick($(`#focusArea-${cardId} .recommended-action_title`));
    ActionFocusAreas_HandleSubmitButtonClick(planKey, $(`#focusArea-${cardId} .action-plan_submit`))
    ActionFocusAreas_HandleCloseButtonClick($(`#focusArea-${cardId} .action-plan_close`));
    ActionFocusAreas_HandleAddToActionPlanButtonClick($(`#focusArea-${cardId} .recommended-action_add-to-plan`));
    ActionFocusAreas_HandleAddOwnActionButtonClick($(`#focusArea-${cardId} .selected-actions_add`));
    ActionFocusAreas_HandleProgressBar($(`#focusArea-${cardId} .plan-column`));
    ActionFocusAreas_HandleShareSwitchClick(`#${cardId}_share-switch-actionPlanShared_${cardId}`, planKey);
    ActionFocusAreas_HandleCancelButtonOnLimitActionsConfirmation(cardId);
    ActionFocusAreas_SubscribeFocusAreaToSaveChanges(planKey);
}

function ActionFocusAreas_CalculateFavScore(focusAreaObj) {
    let favScore = '';

    let itemsData = Main_CurrentItemsData_WithFilter();
    let dimensionsData = Main_CurrentDimensionsData_WithFilter();

    if (focusAreaObj.isDimension) {
        let favScoreRaw = dimensionsData[focusAreaObj.itemId].Dist.Fav;
        favScore = Utils_FormatPctOutput(favScoreRaw);
    } else {
        let pct_distribution = Utils_CountsToPercents(itemsData[focusAreaObj.itemId].Dist);
        let favScoreRaw = pct_distribution.Fav;

        favScore = Utils_FormatPctOutput(favScoreRaw);
    }

    return favScore;
}

function ActionFocusAreas_CalculateDiffVsCompany(focusAreaObj) {
    let diff = '';

    let itemsData = Main_CurrentItemsData_WithFilter();
    let dimensionsData = Main_CurrentDimensionsData_WithFilter();

    let company_overall_items_key = Main_GetKeyWithFilter(
        'ITEMS',
        config.CurrentWave,
        meta.Hierarchy.TopNode.Id
    );

    let company_overall_items_data = data[ company_overall_items_key ];

    let company_overall_dimensions_key = Main_GetKeyWithFilter(
        'DIMS',
        config.CurrentWave,
        meta.Hierarchy.TopNode.Id
    );

    let company_overall_dimensions_data = data[ company_overall_dimensions_key ];
    let focusAreaId = focusAreaObj.itemId;
    if (focusAreaObj.isDimension) {
        let favScoreRaw = dimensionsData[focusAreaId].Dist.Fav;

        let favScoreOverallRaw = company_overall_dimensions_data[focusAreaId].Dist.Fav;
        diff = (favScoreRaw - favScoreOverallRaw);
    } else {
        let pct_distribution = Utils_CountsToPercents(itemsData[focusAreaId].Dist);
        let favScoreRaw = pct_distribution.Fav;

        let company_overall_pct_distribution = Utils_CountsToPercents(company_overall_items_data[focusAreaId].Dist);
        let favScoreOverallRaw = company_overall_pct_distribution.Fav;

        diff = (favScoreRaw - favScoreOverallRaw);
    }

    return diff;
}

function ActionFocusAreas_HandleShareSwitchClick(switchId, planKey) {
    let setSwitchValueAfterClick =(selectorObj)=> {
        let currentSwitchVal = State_Get(selectorObj.parameterName);

        if (currentSwitchVal != selectorObj.selectorElementValue) {
            let labelsForInput = $(`${selectorObj.parameterElementId}`).parent().find('label');

            if (labelsForInput.length > 0) {
                State_Set(selectorObj.parameterName, selectorObj.selectorElementValue);

                for (let i = 0; i < labelsForInput.length; i++) {
                    $(labelsForInput[i]).toggleClass('label-checked');
                }

                FocusAreas_UpdateFocusArea(planKey, 'planIsShared', selectorObj.selectorElementValue === 'On');
                FocusAreas_UpdateFocusArea(planKey, 'planLastUpdatedDate', (new Date()).toDateString());
            }
        }

    }

    $(`${switchId}-left`).click(function () {
        let switchElementValue = $(this).val();
        let selectorObj = {
            selectorElementValue: switchElementValue,
            parameterName: `actionPlanShared_${ActionFocusAreas_GetFocusAreaCardId(planKey)}`,
            parameterElementId: `${switchId}-left`
        }

        setSwitchValueAfterClick(selectorObj);
    });

    $(`${switchId}-right`).click(function () {
        let switchElementValue = $(this).val();
        let selectorObj = {
            selectorElementValue: switchElementValue,
            parameterName: `actionPlanShared_${ActionFocusAreas_GetFocusAreaCardId(planKey)}`,
            parameterElementId: `${switchId}-right`
        }

        setSwitchValueAfterClick(selectorObj);
    });
}

function ActionFocusAreas_HandleProgressBar(planColumnForProgressBar) {
    planColumnForProgressBar.click(function (e) {
        let elem = e.target;
        while (elem.id.indexOf('innerblock') == -1) {
            elem = elem.parentElement;
        }
        //$(".selected-progress-sign").css('color', '#c0c0c0');
        $('#' + elem.id + " .selected-progress-sign").css('color', '#00634f');
    });
}

function ActionFocusAreas_GetRecommendedActions(focusAreaId) {
    // focusAreaId is a string that can be either a dimension reference ("DIM_N51"), or an item reference ("TR04")
    let recommendedActionId = focusAreaId;

    const recommendedActionsObj = meta.Labels.Actions[recommendedActionId];
    let recommendedActions = [];
    for (const key in recommendedActionsObj) {
        const action = recommendedActionsObj[key];
        recommendedActions.push({
            'Id': recommendedActionId + '_' + key,
            'Title': action.Title,
            'Text': action.Label
        });
    }
    return recommendedActions;
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
                                        <div class="add-to-plan recommended-action_add-to-plan">${meta.Labels['buttons.AddToActionPlan'].Label}</div> 
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

function ActionFocusAreas_HandleSubmitButtonClick(planKey, buttons) {
    buttons.click(function () {
        FocusAreas_UpdateFocusArea(planKey, 'planIsSubmitted', true);
        FocusAreas_UpdateFocusArea(planKey, 'planLastUpdatedDate', (new Date()).toDateString());

        let actionPlanContainer = $(this).parent().parent();
        let focusAreaCard = $(actionPlanContainer).parent();

        $(actionPlanContainer).addClass('action-plan__collapsed');
        $(focusAreaCard).find('.focus-area-info_work-button').first().show();

        FocusAreas_SaveChanges(FocusAreas_GetFocusArea(planKey));
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
            let focusAreaCardId = $(parentCard).attr('id');
            const planKey = ActionFocusAreas_GetFocusAreaKeyFromCard(parentCard);

            FocusAreas_UpdateTagOnFocusArea(planKey, tagName, tagValue);
            FocusAreas_UpdateFocusArea(planKey, 'planLastUpdatedDate', (new Date()).toDateString());
        }
    });
}

function ActionsFocusAreas_HandleRemovingFocusArea(cardId) {
    $(`#focusArea-${cardId} .fa-card-header_remove`).click(function (event) {
        let cardToRemove = $(this).parent().parent();

        let confirmationBox = $(cardToRemove).find(`#${cardId}_remove-confirmation`).first();
        if (!!confirmationBox) {
            if ($(confirmationBox).hasClass('confirmation__hidden')) {
                $(confirmationBox).removeClass('confirmation__hidden');
            }
        }
    });

    $(`#${cardId}_remove-confirmation .confirmation-button__agree`).click(function (event) {
        let confirmationBox = $(this).parents(`#${cardId}_remove-confirmation`).first();
        if (!!confirmationBox) {
            $(confirmationBox).addClass('confirmation__hidden');

            let cardToRemove = $(this).parents('.focus-area-card').first();

            if (!!cardToRemove) {
                const planKey = ActionFocusAreas_GetFocusAreaKeyFromCard(cardToRemove);
                FocusAreas_DeleteFocusArea(planKey);
                FocusAreas_UpdateFocusAreasCounterSpan();

                $(cardToRemove).remove();
            }
        }
    });

    $(`#${cardId}_remove-confirmation .confirmation-button__close`).click(function (event) {
        let confirmationBox = $(this).parents(`#${cardId}_remove-confirmation`).first();
        if (!!confirmationBox) {
            $(confirmationBox).addClass('confirmation__hidden');
        }
    });
}

function ActionFocusAreas_GetNextActionId(focusAreaCard) {
    let alreadyAddedActions = Array.prototype.slice.call($(focusAreaCard).find('.selected-action'));
    let idOfLastAddedActionInTheList = alreadyAddedActions.length > 0 ? $(alreadyAddedActions[alreadyAddedActions.length - 1]).attr('id').split('_') : null;
    let nextAddedActionId = !!idOfLastAddedActionInTheList ? parseInt(idOfLastAddedActionInTheList[idOfLastAddedActionInTheList.length - 1]) + 1 : 0;

    return nextAddedActionId;
}

function ActionFocusAreas_HandleAddToActionPlanButtonClick(addActionButtons) {
    addActionButtons.click(function (event) {

        //get item id for focus area
        let focusAreaCard = $(this).parents('.focus-area-card').first();
        let focusAreaKey = ActionFocusAreas_GetFocusAreaKeyFromCard(focusAreaCard);
        //get action id
        let action = $(this).parents('.recommended-action').first();
        let actionId = action.attr('id');

        let focusAreaActions = FocusAreas_GetActionsInFocusArea(focusAreaKey);
        let numberOfActions = !!focusAreaActions ? Object.keys(focusAreaActions).length : 0;
        let nextAddedActionId = ActionFocusAreas_GetNextActionId(focusAreaCard);

        if(numberOfActions < 10) {
            let dueDate = new Date();
            dueDate.setDate(dueDate.getDate() + 14);

            let metaActionId = actionId.split('_').slice(0, 2).join('_');
            let metaActionOrderNumber = actionId.split('_')[2];
            let newActionTitle = meta.Labels.Actions[metaActionId][metaActionOrderNumber].Title;
            let newActionText = meta.Labels.Actions[metaActionId][metaActionOrderNumber].Label;

            let newActionId = actionId + '_' + nextAddedActionId;
            //let newOrderId = actionId + '_selected_' + (!!focusAreaActions ? Object.keys(focusAreaActions).length : 0);
            let newActionObj = {
                /*orderId: actionId + '_selected_' + Object.keys(focusAreaActions).length,*/
                itemId: newActionId,
                actionTitle: newActionTitle,
                actionText: newActionText,
                actionStatus: 'NotStarted',
                actionDueDate: dueDate.toDateString(),
                actionOwner: data.User.FirstName,
                isFromRecommended: true
            }

            FocusAreas_AddActionToFocusArea(focusAreaKey, newActionObj);
            FocusAreas_SaveChanges(FocusAreas_GetFocusArea(focusAreaKey), FocusAreas_GetAction(focusAreaKey, newActionObj.itemId));
            FocusAreas_UpdateFocusArea(focusAreaKey, 'planLastUpdatedDate', (new Date()).toDateString());
            FocusAreas_SaveChanges(FocusAreas_GetFocusArea(focusAreaKey));

            ActionFocusAreas_AddActionToActionPlanSection(focusAreaCard, focusAreaKey, newActionObj);
        } else {
            let confirmationBox = $(focusAreaCard).find(`#${focusAreaKey.itemId}_limit-confirmation`).first();
            if (!!confirmationBox) {
                if ($(confirmationBox).hasClass('confirmation__hidden')) {
                    $(confirmationBox).removeClass('confirmation__hidden');
                }
            }
        }
    });
}

function ActionFocusAreas_HandleAddOwnActionButtonClick(addActionButtons) {
    addActionButtons.click(function (event) {
        /*event.stopPropagation();
        event.preventDefault();*/

        //get item id for focus area
        let focusAreaCard = $(this).parents('.focus-area-card').first();
        let focusAreaKey = ActionFocusAreas_GetFocusAreaKeyFromCard(focusAreaCard);

        let focusAreaActions = FocusAreas_GetActionsInFocusArea(focusAreaKey);
        let numberOfActions = !!focusAreaActions ? Object.keys(focusAreaActions).length : 0;
        let nextAddedActionId = ActionFocusAreas_GetNextActionId(focusAreaCard);

        if(numberOfActions < 10) {
            let dueDate = new Date();
            dueDate.setDate(dueDate.getDate() + 14);

            let newOrderId = 'OwnAction_' + focusAreaKey.itemId + '_' + nextAddedActionId;
            let newActionObj = {
                itemId: newOrderId,
                actionTitle: 'newActionTitle',
                actionText: 'newActionText',
                actionStatus: 'NotStarted',
                actionDueDate: dueDate.toDateString(),
                actionOwner: data.User.FirstName,
                isFromRecommended: false
            }

            FocusAreas_AddActionToFocusArea(focusAreaKey, newActionObj);
            FocusAreas_SaveChanges(FocusAreas_GetFocusArea(focusAreaKey), FocusAreas_GetAction(focusAreaKey, newActionObj.itemId));
            FocusAreas_UpdateFocusArea(focusAreaKey, 'planLastUpdatedDate', (new Date()).toDateString());
            FocusAreas_SaveChanges(FocusAreas_GetFocusArea(focusAreaKey));

            ActionFocusAreas_AddActionToActionPlanSection(focusAreaCard, focusAreaKey, newActionObj);
        } else {
            let confirmationBox = $(focusAreaCard).find(`#${focusAreaKey.itemId}_limit-confirmation`).first();
            if (!!confirmationBox) {
                if ($(confirmationBox).hasClass('confirmation__hidden')) {
                    $(confirmationBox).removeClass('confirmation__hidden');
                }
            }
        }
        maxLength();
    });
}

function ActionFocusAreas_HandleCancelButtonOnLimitActionsConfirmation(focusAreaId) {
    $(`#${focusAreaId}_limit-confirmation .confirmation-button__close`).click(function (event) {
        let confirmationBox = $(this).parents(`#${focusAreaId}_limit-confirmation`).first();

        if (!!confirmationBox) {
            $(confirmationBox).addClass('confirmation__hidden');
        }

    });
}

function ActionFocusAreas_AddActionToActionPlanSection(focusAreaCard, planKey, newActionObj) {
    let actionPlanContainer = $(focusAreaCard).find('.selected-actions_container').first();
    let actionCardId = ActionFocusAreas_GetActionCardId(planKey, newActionObj.itemId);

    if (!!actionPlanContainer) {
        if ($(actionPlanContainer).hasClass('selected-actions_container__hidden')) {
            $(actionPlanContainer).removeClass('selected-actions_container__hidden');
        }

        let numberOfActionsInActionPlan = $(actionPlanContainer).find('.selected-action').length;

        State_Set('actionStatus_' + actionCardId, newActionObj.actionStatus);

        let actionStatus_dropdown = Component_Dropdown(
            'actionStatus_' + actionCardId,
            meta.Labels['labels.Status'].Label,
            actionCardId + '_status-dropdown',
            '',
            ParamValues_ActionPlannerStatusSelector()
        );

        let newActionHTML = `<div id="${actionCardId}" class="selected-action ${numberOfActionsInActionPlan == 0 ? 'action__uncollapsed' : 'action__collapsed'}">
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
                                                <input type="text" id="${actionCardId}_datepicker">
                                            </div>
                                            <div class="action-setting selected-action_owner">
                                                <label class="action-setting_label">${meta.Labels['labels.ActionOwner'].Label}</label>
                                                <input type="text" id="${actionCardId}_owner" value="${newActionObj.actionOwner}" maxlength="50">
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

        //handle calendar click
        $(`#${actionCardId}_datepicker`).datepicker({
            onSelect: function (date) {
                if (!!date) {
                    let newDate = new Date(date);
                    FocusAreas_UpdateActionInFocusArea(planKey, newActionObj.itemId, 'actionDueDate', newDate.toDateString());
                    FocusAreas_SaveChanges(FocusAreas_GetFocusArea(planKey), FocusAreas_GetAction(planKey, newActionObj.itemId));
                }
            },
            dateFormat: config.ActionPlannerDateFormat
        });
        $(`#${actionCardId}_datepicker`).datepicker('setDate', new Date(newActionObj.actionDueDate));

        ActionFocusAreas_HandleActionTitleClick($(`#${actionCardId}`).find('.action-title'));

        //handle status dropdown change
        $(`#${actionCardId}_status-dropdown`).change(function (event) {
            let selectedOption = $(this).val();
            State_Set('actionStatus_' + actionCardId, selectedOption);

            FocusAreas_UpdateActionInFocusArea(planKey, newActionObj.itemId, 'actionStatus', selectedOption);
        });

        //handle owner input change
        $(`#${actionCardId}_owner`).on('input', function (event) {
            let newOwnerName = $(this).val();

            FocusAreas_UpdateActionInFocusArea(planKey, newActionObj.itemId, 'actionOwner', newOwnerName);
        });

        //handle click on action title/text + pen icon to enable immediate editing (using contenteditable)
        $(`#${actionCardId} .action-title_text__editable, #${actionCardId} .selected-action_text__editable, #${actionCardId} .edit-icon`).click(function (event) {
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
        $(`#${actionCardId} .action-title_text__editable`).on('input', function (event) {
            let newTitle = stripHTML(this.textContent);

            FocusAreas_UpdateActionInFocusArea(planKey, newActionObj.itemId, 'actionTitle', newTitle);
        });

        //handle actionText text change
        $(`#${actionCardId} .selected-action_text__editable`).on('input', function (event) {
            let newText = stripHTML(this.textContent);

            FocusAreas_UpdateActionInFocusArea(planKey, newActionObj.itemId, 'actionText', newText);
        });

        ActionFocusAreas_HandleRemovingAction(planKey, newActionObj.itemId, $(`#${actionCardId} .action_remove-icon`), $(`#${actionCardId} .confirmation-button__agree`), $(`#${actionCardId} .confirmation-button__close`))
        ActionFocusAreas_SubscribeActionToSaveChanges(planKey, newActionObj.itemId);
    }

}

function ActionFocusAreas_HandleRemovingAction(planKey, actionId, trashCanElement, yesButton, noButton) {
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

            FocusAreas_DeleteAction(planKey, actionId);
            FocusAreas_UpdateFocusArea(planKey, 'planLastUpdatedDate', (new Date()).toDateString());

            let actionCardId = ActionFocusAreas_GetActionCardId(planKey, actionId);
            $(`#${actionCardId}`).remove();

            let actions = FocusAreas_GetActionsInFocusArea(planKey);

            if (Object.keys(actions).length === 0) {
                $(`#focusArea-${ActionFocusAreas_GetFocusAreaCardId(planKey)} .selected-actions_container`).addClass('selected-actions_container__hidden');
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

function ActionFocusAreas_RenderSelectedActions(planKey) {
    let focusAreaActions = FocusAreas_GetActionsInFocusArea(planKey);

    if (!!focusAreaActions && Object.keys(focusAreaActions).length > 0) {
        /*focusAreaActions.forEach((action) => {
            ActionFocusAreas_AddActionToActionPlanSection($('#focusArea-' + itemId).first(), action);
        });*/

        for(let action in focusAreaActions) {
            ActionFocusAreas_AddActionToActionPlanSection($(`#focusArea-${ActionFocusAreas_GetFocusAreaCardId(planKey)}`).first(), planKey, focusAreaActions[action]);
        }
    }
}

function ActionFocusAreas_RenderAddActionTable() {
    let current_items = Main_CurrentItemsData_WithFilter();
    let current_dimensions = Main_CurrentDimensionsData_WithFilter();

    // temp code until the Source property is removed
    if (current_items.hasOwnProperty("Source"))
        delete current_items.Source;

    let headers = [[
        { Label: "", ClassName: 'text-cell', rowspan: 1 },
        { Label: "# ", ClassName: 'id-cell', rowspan: 1 },
        { Label: meta.Labels["labels.Question"].Label, ClassName: 'text-cell', rowspan: 1 },
        { Label: meta.Labels["labels.PercentFav"].Label, ClassName: 'numeric-cell distribution-cell', rowspan: 1 },
        { Label: meta.Labels['labels.Action'].Label, ClassName: 'numeric-cell', rowspan: 1 }
    ]];
    let table_data = [];

    // Some type of Dimension View
    let counter = 0;
    for (let i in current_dimensions) {
        let sort_dId = counter < 10 ? '0' + counter : counter;
        let sort_qId = sort_dId + '_';
        table_data.push(ActionFocusAreas_AddItemToTable(i, true, sort_dId));
        // Add Questions from this Dimension
        let dimItems = meta.Dimensions[i].Items;
        for (let j = 0; j < dimItems.length; j++) {
            // Check if question exists in data (this is only a temp problem with test data, in real life we shouldn't have to do this test)
            if (current_items[dimItems[j]] != null) {
                table_data.push(ActionFocusAreas_AddItemToTable(dimItems[j], false, sort_qId));
            }
        }
        counter++;
    }

    let columnSettings = `
		'orderFixed': [ 0, 'asc' ],
		'order': [ 1, 'asc' ],
		'columnDefs': [
			{ 'targets': [ 0 ], 'visible': false },
			{ 'targets': [0,1,2], type: 'natural' },
			{ 'targets': [ 3 ], type: 'numsort' }
		],
        'searchHighlight': true,
	`;

    let dt = Component_DataTable(
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
    let formatter = Utils_FormatOutput;

    let current_data = isDimension
        ? Main_CurrentDimensionsData_WithFilter()
        : Main_CurrentItemsData_WithFilter();

    let obj = current_data[itemId]; // Either Item or Dimension

    let label = isDimension
        ? '<b>' + meta.Dimensions[itemId].Label + '</b>'
        : meta.Items[itemId].Label;

    let id = isDimension
        ? '&#9674;' // diamond symbol
        : obj.QNo;

    let pct_dist = isDimension
        ? obj.Dist // dimensions already store rounded percentages in the distribution
        : Utils_CountsToPercents(obj.Dist);

    let rowdata = [];
    rowdata.push(
        { Label: sortId, ClassName: 'id-cell' },
        { Label: id, ClassName: 'id-cell' },
        { Label: label, ClassName: 'text-cell' },
        { Label: formatter(pct_dist.Fav), ClassName: 'numeric-cell distribution-cell' }
    );

    //check if item has been added to Focus Areas
    //set action icon to remove icon if so
    let isItemAddedAsFocusArea = FocusAreas_IsItemSelected(itemId);
    let actionButtonClass = isItemAddedAsFocusArea ? 'remove-action table_remove-item-minus-circle' : 'add-action table_add-item-plus-circle__thin';
    let actionIdDimensionOrQuestion = isDimension ? 'dimension' : 'question';
    let actionButton = `<div class="action-cell"><div class="action-icon ${actionButtonClass}" id = "${actionIdDimensionOrQuestion}-${itemId}-button" ></div></div>`;
    rowdata.push({ Label: actionButton, ClassName: 'numeric-cell' });

    return rowdata;
}

function ActionFocusAreas_SubscribeFocusAreaToSaveChanges(planKey) {
    const cardId = ActionFocusAreas_GetFocusAreaCardId(planKey);
    const focusArea = FocusAreas_GetFocusArea(planKey);

    $(`#focusArea-${cardId} .ap-tag`).on('click', function (event) {
        FocusAreas_SaveChanges(focusArea);
    });
    $(`#plan-name-${cardId}`).on('focusout', function (event) {
        FocusAreas_SaveChanges(focusArea);
    });
    $(`#plan-notes-${cardId}`).on('focusout', function (event) {
        FocusAreas_SaveChanges(focusArea);
    });
    $(`#${cardId}_status-dropdown`).change(function (event) {
        FocusAreas_SaveChanges(focusArea);
    });
    $(`#${cardId}_share-switch-actionPlanShared_${cardId}-left`).on('click', function (event) {
        FocusAreas_SaveChanges(focusArea);
    });
    $(`#${cardId}_share-switch-actionPlanShared_${cardId}-right`).on('click', function (event) {
        FocusAreas_SaveChanges(focusArea);
    });
    // due date input is subscribed within datepicker's onSelect
}

function ActionFocusAreas_SubscribeActionToSaveChanges(planKey, actionId) {
    const actionCardId = ActionFocusAreas_GetActionCardId(planKey, actionId);
    const focusArea = FocusAreas_GetFocusArea(planKey);
    const action = FocusAreas_GetAction(planKey, actionId);

    $(`#${actionCardId} .action-title_text__editable`).on('focusout', function (event) {
        FocusAreas_SaveChanges(focusArea, action);
    });
    $(`#${actionCardId} .selected-action_text__editable`).on('focusout', function (event) {
        FocusAreas_SaveChanges(focusArea, action);
    });
    $(`#${actionCardId}_owner`).on('focusout', function (event) {
        FocusAreas_SaveChanges(focusArea, action);
    });
    $(`#${actionCardId}_status-dropdown`).change(function (event) {
        FocusAreas_SaveChanges(focusArea, action);
    });
    // due date input is subscribed within datepicker's onSelect
}

function ActionFocusAreas_GetFocusAreaKeyFromCard(card) {
    const itemId = $(card).attr('data-focus-area-id');
    const itemOrderId = $(card).attr('data-focus-area-order-id');
    const ownerId = data.User.UserId;

    return FocusAreas_CreateFocusAreaKey(itemId, itemOrderId, ownerId);
}

function ActionFocusAreas_GetFocusAreaCardId(focusAreaKey) {
    return `${focusAreaKey.itemId}-${focusAreaKey.itemOrderId}`;
}

function ActionFocusAreas_GetActionCardId(focusAreaKey, actionId) {
    return actionId.replace(focusAreaKey.itemId, focusAreaKey.itemId + '-' + focusAreaKey.itemOrderId);
}

function maxLength() {
    var contentEditables = document.querySelectorAll('[contenteditable]');
    contentEditables.forEach(function(item) {
        ['keydown','paste'].forEach( function(event) {
            item.addEventListener(event, function(e) {
                var limit = 2000;
                if (item.className.indexOf('title') !== -1) limit = 100;
                var allowedKeys = false;

                if (e.type === 'keydown') {
                    allowedKeys = (
                        e.which === 8 ||  /* BACKSPACE */
                        e.which === 35 || /* END */
                        e.which === 36 || /* HOME */
                        e.which === 37 || /* LEFT */
                        e.which === 38 || /* UP */
                        e.which === 39 || /* RIGHT*/
                        e.which === 40 || /* DOWN */
                        e.which === 46 || /* DEL*/
                        e.ctrlKey === true && e.which === 65 || /* CTRL + A */
                        e.ctrlKey === true && e.which === 88 || /* CTRL + X */
                        e.ctrlKey === true && e.which === 67 || /* CTRL + C */
                        e.ctrlKey === true && e.which === 86 || /* CTRL + V */
                        e.ctrlKey === true && e.which === 90    /* CTRL + Z */
                    )
                }
                if (e.type === 'paste') {
                    setTimeout(function () {
                        e.target.innerText = e.target.innerText.slice(0, limit);
                    });
                }
                if (!allowedKeys && e.target.innerText.length >= limit) {
                    e.preventDefault();
                }
            }, false);
        });
    })
}
function stripHTML(html) {
    const parseHTML = new DOMParser().parseFromString(html, 'text/html');
    return parseHTML.body.textContent || '';
}
