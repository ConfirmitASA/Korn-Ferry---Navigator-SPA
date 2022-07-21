var FocusAreas = [];

/*let focusAreaItem = itemId: ('id') {
    isDimension: false,
    pageSourceId: '',
    favScore: '',
    diffVsCompany: '',
    importance: false,
    involvement: false,
    cost: false
    planName: '',
    planNotes: '',
    planActions: {},
    planStatus: '',
    planDueDate: '',
    planCreatedDate: '',
    planLastUpdatedDate: '',
    planOwner: '',
    planNode: ''
    planIsSubmitted: false,
    planIsShared: false,

    itemId: '',
    itemOrderId: '',
    ownerId: ''
}*/

function FocusAreas_CreateFocusAreaKey(planId, planOrderId, ownerId) {
    return {
        'itemId': planId,
        'itemOrderId': planOrderId,
        'ownerId': ownerId
    }
}

function FocusAreas_GetFocusAreas() {
    // if(Object.keys(FocusAreas).length === 0) {
    //     FocusAreas_SetValues();
    // }
    return FocusAreas;
}

function FocusAreas_GetNextItemOrderId() {
    const itemOrderIds = FocusAreas_GetOwnFocusAreas().map(plan => parseInt(plan.itemOrderId));
    if(itemOrderIds.length === 0) {
        return '1';
    }

    const currentMax = itemOrderIds.reduce(function(a, b) {
        return Math.max(a, b);
    });

    return (currentMax + 1).toString();
}

function FocusAreas_AddFocusArea(newPlanObj, saveChanges = true) {
    const itemId = newPlanObj.itemId;
    const ownerId = newPlanObj.ownerId;
    const itemOrderId = newPlanObj.hasOwnProperty('itemOrderId') ?
        newPlanObj.itemOrderId : FocusAreas_GetNextItemOrderId();

    const planKey = FocusAreas_CreateFocusAreaKey(itemId, itemOrderId, ownerId);

    if(!FocusAreas_IsFocusAreaAlreadyAdded(planKey)) {
        let newPlan = newPlanObj;

        newPlan.itemId = itemId;
        newPlan.itemOrderId = itemOrderId;
        newPlan.ownerId = ownerId;

        newPlan.favScore = newPlanObj.favScore ?? ActionFocusAreas_CalculateFavScore(newPlan);
        newPlan.diffVsCompany = newPlanObj.diffVsCompany ?? ActionFocusAreas_CalculateDiffVsCompany(newPlan);

        newPlan.importance = newPlanObj.importance ?? false;
        newPlan.involvement = newPlanObj.involvement ?? false;
        newPlan.cost = newPlanObj.cost ?? false;

        let dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 14);

        newPlan.planName = newPlanObj.planName ?? '';
        newPlan.planNotes = newPlanObj.planNotes ?? '';
        newPlan.planActions = newPlanObj.hasOwnProperty('planActions') ? newPlanObj.planActions : {}; //{actionId, actionTitle, actionText, actionStatus, actionDueDate, actionOwner, isFromRecommended}
        newPlan.planStatus = newPlanObj.planStatus ?? 'NotStarted';
        newPlan.planDueDate = newPlanObj.planDueDate ?? dueDate.toDateString();
        newPlan.planCreatedDate = newPlanObj.planCreatedDate ?? (new Date()).toDateString();
        newPlan.planLastUpdatedDate = newPlanObj.planLastUpdatedDate ?? (new Date()).toDateString();
        newPlan.planOwner = newPlanObj.planOwner ?? data.User.FirstName + ' ' + data.User.LastName;
        newPlan.planNode = newPlanObj.planNode ?? data.User.PersonalizedReportBase;
        newPlan.planIsSubmitted = newPlanObj.planIsSubmitted ?? false;
        newPlan.planIsShared = newPlanObj.planIsShared ?? false;
        newPlan.isRolledUp = newPlan.isRolledUp ?? true;

        FocusAreas.push(newPlan);
    }
    if(saveChanges) {
        let addedFocusArea = FocusAreas_GetFocusArea(planKey);
        FocusAreas_SaveChanges(addedFocusArea);
        for (const actionId in FocusAreas_GetActionsInFocusArea(planKey)) {
            FocusAreas_SaveChanges(addedFocusArea, FocusAreas_GetAction(planKey, actionId));
        }
    }
}

function FocusAreas_IsFocusAreaAlreadyAdded(planKey) {
    if(FocusAreas_GetFocusArea(planKey)) {
        return true;
    }
    return  false;
}

function FocusAreas_GetSelectedItem(focusAreaId) {
    let ownPlans = FocusAreas_GetOwnFocusAreas();
    let selectedItems = ownPlans.filter(plan => plan.itemId === focusAreaId && !plan.planIsSubmitted); //we expect it to have exactly one item
    if(selectedItems.length !== 0) {
        return selectedItems[0];
    } else {
        return null;
    }
}

function FocusAreas_IsItemSelected(focusAreaId) {
    let ownPlans = FocusAreas_GetOwnFocusAreas();
    return ownPlans.filter(plan => plan.itemId === focusAreaId && !plan.planIsSubmitted).length > 0;
}

function FocusAreas_DeleteFocusArea(planKey) {
    let planToDelete = FocusAreas_GetFocusArea(planKey);
    if(!!planToDelete) {
        const actions = planToDelete.planActions;
        for (let actionId in actions) {
            FocusAreas_DeleteAction(planKey, actionId);
        }
        FocusAreas.splice(FocusAreas_GetFocusAreaIndex(planKey), 1);

        FocusAreas_SaveChanges(planToDelete);
    } else {
        throw new Error(`Item ${planKey.planId} you requested to delete does not exist in the Focus Areas list`);
    }
}

function FocusAreas_RemoveSelectedFocusArea(focusAreaId) {
    const ownerId = data.User.UserId;
    const selectedItem = FocusAreas_GetSelectedItem(focusAreaId);
    if(selectedItem !== null) {
        const planKey = FocusAreas_CreateFocusAreaKey(focusAreaId, selectedItem.itemOrderId, ownerId);
        FocusAreas_DeleteFocusArea(planKey);
    } else {
        throw new Error(`Item ${focusAreaId} you requested to delete does not exist in the Focus Areas list`);
    }
}

function FocusAreas_GetFocusArea(planKey) {
    for (let i = 0; i < FocusAreas.length; i++) {
        let plan = FocusAreas[i];
        if(plan.itemId === planKey.itemId &&
            plan.ownerId === planKey.ownerId &&
            plan.itemOrderId === planKey.itemOrderId
        )
        {
            return plan;
        }
    }
    return null;
}

function FocusAreas_GetFocusAreaIndex(planKey) {
    for (let i = 0; i < FocusAreas.length; i++) {
        let plan = FocusAreas[i];
        if(plan.itemId === planKey.itemId &&
            plan.ownerId === planKey.ownerId &&
            plan.itemOrderId === planKey.itemOrderId
        )
        {
            return i;
        }
    }
    return -1;
}

function FocusAreas_UpdateTagOnFocusArea(planKey, tagName, tagValue) {
    let plan = FocusAreas_GetFocusArea(planKey);
    if(!!plan) {
        plan[tagName] = tagValue;
    } else {
        throw new Error(`Item ${planKey.itemId} you're trying to update a tag on does not exist in the Focus Areas list`);
    }
}

function FocusAreas_UpdateFocusArea(planKey, actionPlanSetting, actionPlanValue) {
    let plan = FocusAreas_GetFocusArea(planKey);
    if(!!plan) {
        plan[actionPlanSetting] = actionPlanValue;
    } else {
        throw new Error(`Item ${planKey.itemId} you're trying to update an action plan for does not exist in the Focus Areas list`);
    }
}

function FocusAreas_IsOwnFocusArea(plan) {
    return plan.ownerId === data.User.UserId;
}

function FocusAreas_GetOwnFocusAreas() {
    return FocusAreas_GetFocusAreas().filter(plan => FocusAreas_IsOwnFocusArea(plan));
}

function FocusAreas_GetRolledUpFocusAreas() {
    return FocusAreas_GetFocusAreas().filter(plan => plan.isRolledUp);
}

function FocusAreas_GetAction(planKey, actionId) {
    let plan = FocusAreas_GetFocusArea(planKey);
    if(!!plan) {
        if(plan.planActions.hasOwnProperty(actionId)) {
            return plan.planActions[actionId];
        } else {
            return null;
        }
    }
    else {
        throw new Error(`Item ${planKey.itemId} does not exist in the FocusAreas list`);
    }
}

function FocusAreas_GetActionsInFocusArea(planKey) {
    let plan = FocusAreas_GetFocusArea(planKey);
    if(!!plan) {
        return plan.planActions;
    } else {
        throw new Error(`Item ${planKey.itemId} you're trying to actions for for does not exist in the Focus Areas list`);
    }

}

function FocusAreas_AddActionToFocusArea(planKey, newActionObj) {
    let plan = FocusAreas_GetFocusArea(planKey);
    if(!!plan) {
        plan.planActions[newActionObj.itemId] = newActionObj;
    } else {
        throw new Error(`Item ${planKey.itemId} you're trying to update an action plan for does not exist in the Focus Areas list`);
    }
}

function FocusAreas_DeleteAction(planKey, actionOrderId) {
    let plan = FocusAreas_GetFocusArea(planKey);
    if(!!plan) {
        if(plan.planActions.hasOwnProperty(actionOrderId)) {
            let planToDeleteCopy = $.extend({}, plan.planActions[actionOrderId]);
            delete plan.planActions[actionOrderId];
            FocusAreas_SaveChanges(plan, planToDeleteCopy);
        } else {
            throw new Error(`Action ${actionOrderId} you're trying to update does not exist in this action plan for ${planKey.itemId}`);
        }
    } else {
        throw new Error(`Item ${planKey.itemId} you're trying to update an action plan for does not exist in the Focus Areas list`);
    }
}

function FocusAreas_UpdateActionInFocusArea(planKey, actionId, actionSetting, actionValue) {
    let plan = FocusAreas_GetFocusArea(planKey);
    if(!!plan) {
        if(plan.planActions.hasOwnProperty(actionId)) {
            plan.planActions[actionId][actionSetting] = actionValue;
        } else {
            throw new Error(`Action ${actionId} you're trying to update does not exist in this action plan for ${planKey.itemId}`);
        }
    } else {
        throw new Error(`Item ${planKey.itemId} you're trying to update an action plan for does not exist in the Focus Areas list`);
    }
}

function FocusAreas_UpdateFocusAreasCounterSpan() {
    let numberOfFocusAreas = FocusAreas_GetOwnFocusAreas().length;

    if(numberOfFocusAreas > 0) {
        $('#focusAreasCounter').html(numberOfFocusAreas);
        $('#focusAreasCounter').addClass('focus-areas-counter-visible');
    } else {
        $('#focusAreasCounter').html('');
        $('#focusAreasCounter').removeClass('focus-areas-counter-visible');
    }
}

function FocusAreas__handleTableActionIconClick(containerId) {

    $(containerId).find('.action-icon').click(function (event) {

        event.stopPropagation();
        event.preventDefault();

        let button_id = $(this).attr('id').split('-');
        let pageId = $(this).parents('.section').first().attr('id').split('-');
        const focusAreaId = button_id[1];
        const ownerId = data.User.UserId;

        if ($(this).hasClass('add-action')) {
            Utils_SetActionIconToREMOVE(this);

            let newFocusArea = {
                isDimension: button_id[0] === 'dimension',
                pageSourceId: pageId[2],
                itemId: focusAreaId,
                ownerId: ownerId
            }

            FocusAreas_AddFocusArea(newFocusArea);
        } else {
            if ($(this).hasClass('remove-action')) {
                Utils_SetActionIconToADD(this);
                FocusAreas_RemoveSelectedFocusArea(focusAreaId);
            }
        }

        FocusAreas_UpdateFocusAreasCounterSpan();
    });
}

function FocusAreas_SetValues() {
    //actions.Own contains own plans and shared plans (both are not affected by hierarchy filter)
    //actions.Rollup contains filtered by hierarchy plans

    if (actions.Own === null || actions.Rollup === null) return;
    let dataObj = actions.Rollup.concat(actions.Own);

    let allActions = [];
    for (let i = 0; i < dataObj.length; i++) {
        let dataObjItem = dataObj[i];
        if (dataObjItem['active_flag'].toString() === '1') {
            if (dataObjItem['is_action'].toString() === '0') {
                let planObj = {};
                planObj['isDimension'] = dataObjItem['is_dimension'] !== "0";
                planObj['pageSourceId'] = dataObjItem['page_source_id'];
                planObj['favScore'] = dataObjItem['fav_score'];
                planObj['diffVsCompany'] = dataObjItem['diff_vs_company'];
                planObj['importance'] = dataObjItem['importance'] !== "0";
                planObj['involvement'] = dataObjItem['involvement'] !== "0";
                planObj['cost'] = dataObjItem['cost'] !== "0";
                planObj['planName'] = dataObjItem['plan_name'];
                planObj['planNotes'] = dataObjItem['plan_notes'];
                planObj['planStatus'] = dataObjItem['plan_status'];
                planObj['planDueDate'] = dataObjItem['plan_due_date'];
                planObj['planCreatedDate'] = dataObjItem['plan_created_date'];
                planObj['planLastUpdatedDate'] = dataObjItem['plan_last_updated_date'];
                planObj['planOwner'] = dataObjItem['plan_owner'];
                planObj['planNode'] = dataObjItem['plan_node'];
                planObj['planIsSubmitted'] = dataObjItem['plan_is_submitted'] !== "0";
                planObj['planIsShared'] = dataObjItem['plan_is_shared'] !== "0";

                planObj['itemId'] = dataObjItem['item_id'];
                planObj['ownerId'] = dataObjItem['owner_id'];
                planObj['itemOrderId'] = dataObjItem['item_order_id'];

                planObj['isRolledUp'] = actions.Rollup.filter(plan => plan === dataObjItem).length > 0;

                planObj.planActions = {};
                const planKey = FocusAreas_CreateFocusAreaKey(planObj.itemId, planObj.itemOrderId, planObj.ownerId);
                if(!FocusAreas_IsFocusAreaAlreadyAdded(planKey)) {
                    FocusAreas.push(planObj);
                }
                FocusAreas_UpdateFocusAreasCounterSpan();
            } else {
                let actionObj = {};
                actionObj['actionTitle'] = dataObjItem['action_title'];
                actionObj['actionText'] = dataObjItem['action_text'];
                actionObj['actionStatus'] = dataObjItem['action_status'];
                actionObj['actionDueDate'] = dataObjItem['action_due_date'];
                actionObj['actionOwner'] = dataObjItem['action_owner'];

                actionObj['itemId'] = dataObjItem['item_id'];

                allActions.push({
                    actionObj: actionObj,
                    planKey: FocusAreas_CreateFocusAreaKey(dataObjItem['focus_area_id'], dataObjItem['item_order_id'], dataObjItem['owner_id'])
                });
            }
        }
    }

    //now, after all saved plans were added, add actions
    for (let actionItem of allActions) {
        FocusAreas_AddActionToFocusArea(actionItem.planKey, actionItem.actionObj);
    }
}

function FocusAreas_SaveChanges(planObj, actionObj) {
    let survey_url = config.ActionPlannerUrl;
    let form_data = {};

    const planKey = FocusAreas_CreateFocusAreaKey(planObj.itemId, planObj.itemOrderId, planObj.ownerId);
    let activeFlag;

    if(!actionObj) {
        activeFlag = FocusAreas_GetFocusArea(planKey) !== null ? '1' : '0';
        form_data = {
            owner_id: planKey.ownerId,
            item_id: planKey.itemId,
            item_order_id: planKey.itemOrderId.toString(),

            active_flag: activeFlag,

            is_dimension: planObj.isDimension ? '1' : '0',
            page_source_id: planObj.pageSourceId,
            fav_score: planObj.favScore,
            diff_vs_company: planObj.diffVsCompany,
            importance: planObj.importance ? '1' : '0',
            involvement: planObj.involvement ? '1' : '0',
            cost: planObj.cost ? '1' : '0',
            plan_name: planObj.planName,
            plan_notes: planObj.planNotes,
            plan_status: planObj.planStatus,
            plan_due_date: planObj.planDueDate,
            plan_created_date: planObj.planCreatedDate,
            plan_last_updated_date: planObj.planLastUpdatedDate,
            plan_owner: planObj.planOwner,
            plan_node: planObj.planNode,
            plan_is_submitted: planObj.planIsSubmitted ? '1' : '0',
            plan_is_shared: planObj.planIsShared ? '1' : '0',

            is_action: '0',
            focus_area_id: planKey.itemId
        };
    } else {
        activeFlag = FocusAreas_GetAction(planKey, actionObj.itemId) !== null ? '1' : '0';
        form_data = {
            owner_id: planKey.ownerId,
            item_id: actionObj.itemId,
            item_order_id: planKey.itemOrderId.toString(),

            active_flag: activeFlag,

            action_title: actionObj.actionTitle,
            action_text: actionObj.actionText,
            action_status: actionObj.actionStatus,
            action_due_date: actionObj.actionDueDate,
            action_owner: actionObj.actionOwner,
            is_action: '1',

            focus_area_id: planKey.itemId,
            plan_node: planObj.planNode
        };
    }

    let start_date = new Date();

    $.ajax({
        url : survey_url,
        type: "POST",
        data : form_data,
        success: function(data, textStatus, jqXHR)
        {
            console.log('From server: ' + data);
            console.log('Time [ms] = ' + (new Date() - start_date ));
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            console.log( 'ERROR: ' + errorThrown );
        }
    });
}