var RolledUpPlans = [];

function RolledUpPlans_GetRolledUpPlans() {
    if(Object.keys(RolledUpPlans).length === 0) {
        RolledUpPlans_SetValues();
    }
    RolledUpPlans_UpdateFromFocusAreas();
    return RolledUpPlans;
}

function RolledUpPlans_SetValues() {
    if (actions.Rollup === null) return;

    let dataObj = actions.Rollup;

    let rollup_actions = {};
    for (let i = 0; i < dataObj.length; i++) {
        let dataObjItem = dataObj[i];
        if (dataObjItem['active_flag'].toString() === '1') {
            let itemId = dataObjItem['item_id'];
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

                planObj.planActions = {};
                RolledUpPlans_AddPlan(planObj);
            } else {
                let actionObj = {};
                actionObj['actionTitle'] = dataObjItem['action_title'];
                actionObj['actionText'] = dataObjItem['action_text'];
                actionObj['actionStatus'] = dataObjItem['action_status'];
                actionObj['actionDueDate'] = dataObjItem['action_due_date'];
                actionObj['actionOwner'] = dataObjItem['action_owner'];

                rollup_actions[itemId] = {
                    actionObj: actionObj,
                    planId: dataObjItem['focus_area_id'],
                    planOwner: dataObjItem['owner_id']
                }
            }
        }
    }

    //now, after all saved plans were added, add actions
    for (let actionId in rollup_actions) {
        let actionItem = rollup_actions[actionId];
        RolledUpPlans_AddActionsToActionPlan(actionItem.planId, actionItem.planOwner, actionId, actionItem.actionObj);
    }
}

function RolledUpPlans_AddActionsToActionPlan(itemId, ownerId, actionId, newActionObj) {
    if(RolledUpPlans_IsItemAlreadyAdded(itemId, ownerId)) {
        let plan = RolledUpPlans_GetPlan(itemId, ownerId);
        plan.planActions[actionId] = newActionObj;
    } else {
        throw new Error(`Item ${itemId} you're trying to update an action plan for does not exist in the Rolled Up Plans list`);
    }
}

function RolledUpPlans_IsItemAlreadyAdded(itemId, ownerId) {
    return RolledUpPlans_GetPlan(itemId, ownerId) !== null;
}

function RolledUpPlans_GetPlan(itemId, ownerId) {
    for (let i = 0; i < RolledUpPlans.length; i++) {
        let plan = RolledUpPlans[i];
        if(plan.itemId === itemId &&
            plan.ownerId === ownerId) {
            return plan;
        }
    }
    return null;
}

function RolledUpPlans_GetPlanIndex(itemId, ownerId) {
    for (let i = 0; i < RolledUpPlans.length; i++) {
        let plan = RolledUpPlans[i];
        if(plan.itemId === itemId &&
            plan.ownerId === ownerId) {
            return i;
        }
    }
    return -1;
}

function RolledUpPlans_AddPlan(planObj) {
    let addedPlanIndex = RolledUpPlans_GetPlanIndex(planObj.itemId, planObj.ownerId);
    if(addedPlanIndex !== -1) {
        RolledUpPlans[addedPlanIndex] = planObj;
    } else {
        RolledUpPlans.push(planObj);
    }
}

function RolledUpPlans_AddPlans(plans) {
    plans.forEach(plan => {
        RolledUpPlans_AddPlan(plan);
    })
}

function RolledUpPlans_UpdateFromFocusAreas() {
    let plans = Object.values(FocusAreas_GetFocusAreas());
    RolledUpPlans_AddPlans(plans);
}

