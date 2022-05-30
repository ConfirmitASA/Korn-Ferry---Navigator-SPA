var FocusAreas = {};

/*let focusAreaItem = itemId: ('id') {
    isDimension: false,
    pageSourceId: '',
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
    planIsShared: false
}*/

function FocusAreas_UpdateTagOnFocusArea(itemId, tagName, tagValue) {
    if(FocusAreas_IsItemAlreadyAdded(itemId)) {
        FocusAreas[itemId][tagName] = tagValue;
    } else {
        throw new Error(`Item ${itemId} you're trying to update a tag on does not exist in the Focus Areas list`);
    }
}

/*function FocusAreas_GetIndexOfAddedFocusAreaByItemId(itemId) {
    let foundIndex = FocusAreas.findIndex((element) => {
        return element.itemId === itemId;
    });

    return foundIndex;
}*/

function FocusAreas_IsItemAlreadyAdded(itemId) {
    return FocusAreas.hasOwnProperty(itemId);
}

function FocusAreas_AddItem(itemId, newItemObj) {
    if(!FocusAreas_IsItemAlreadyAdded(itemId)) {
        let newFocusArea = newItemObj;

        newFocusArea.importance = false;
        newFocusArea.involvement = false;
        newFocusArea.cost = false;

        let dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 14);

        newFocusArea.planName = '';
        newFocusArea.planNotes = '';
        newFocusArea.planActions = {}; //{actionId, orderId, actionTitle, actionText, actionStatus, actionDueDate, actionOwner, isFromRecommended}
        newFocusArea.planStatus = 'NotStarted';
        newFocusArea.planDueDate = dueDate.toDateString();
        newFocusArea.planCreatedDate = (new Date()).toDateString();
        newFocusArea.planLastUpdatedDate = (new Date()).toDateString();
        newFocusArea.planOwner = data.User.FirstName;
        newFocusArea.planNode = data.User.PersonalizedReportBase;
        newFocusArea.planIsSubmitted = false;
        newFocusArea.planIsShared = false;

        FocusAreas[itemId] = newFocusArea;
    }
}

function FocusAreas_UpdateActionPlan(itemId, actionPlanSetting, actionPlanValue) {
    if(FocusAreas_IsItemAlreadyAdded(itemId)) {
        FocusAreas[itemId][actionPlanSetting] = actionPlanValue;
    } else {
        throw new Error(`Item ${itemId} you're trying to update an action plan for does not exist in the Focus Areas list`);
    }
}

function FocusAreas_AddActionsToActionPlan(itemId, actionId, newActionObj) {
    if(FocusAreas_IsItemAlreadyAdded(itemId)) {
        FocusAreas[itemId].planActions[actionId] = newActionObj;
    } else {
        throw new Error(`Item ${itemId} you're trying to update an action plan for does not exist in the Focus Areas list`);
    }
}

function FocusAreas_UpdateActionInActionPlan(itemId, actionId, actionSetting, actionValue) {
    if(FocusAreas_IsItemAlreadyAdded(itemId)) {
        if(FocusAreas[itemId].planActions.hasOwnProperty(actionId)) {
            FocusAreas[itemId].planActions[actionId][actionSetting] = actionValue;
        } else {
            throw new Error(`Action ${actionOrderId} you're trying to update does not exist in this action plan for ${itemId}`);
        }
    } else {
        throw new Error(`Item ${itemId} you're trying to update an action plan for does not exist in the Focus Areas list`);
    }
}

function FocusAreas_GetActionsInActionPlan(itemId) {
    if(FocusAreas_IsItemAlreadyAdded(itemId)) {
        return FocusAreas[itemId].planActions;
    } else {
        throw new Error(`Item ${itemId} you're trying to actions for for does not exist in the Focus Areas list`);
    }

}

function FocusAreas_RemoveItem(idToRemove) {
    if(FocusAreas_IsItemAlreadyAdded(idToRemove)) {
        delete FocusAreas[idToRemove];
    } else {
        throw new Error(`Item ${idToRemove} you requested to delete does not exist in the Focus Areas list`);
    }
}

function FocusAreas_RemoveActionFromActionPlan(itemId, actionOrderId) {
    if (FocusAreas_IsItemAlreadyAdded(itemId)) {
        if(FocusAreas[itemId].planActions.hasOwnProperty(actionOrderId)) {
            delete FocusAreas[itemId].planActions[actionOrderId];
        } else {
            throw new Error(`Action ${actionOrderId} you're trying to update does not exist in this action plan for ${itemId}`);
        }
    } else {
        throw new Error(`Item ${itemId} you're trying to update an action plan for does not exist in the Focus Areas list`);
    }
}

function FocusAreas_GetFocusAreas() {
    return FocusAreas;
}

function FocusAreas_UpdateFocusAreasCounterSpan() {
    let numberOfFocusAreas = Object.keys(FocusAreas).length;

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

		if($(this).hasClass('add-action')) {
			Utils_SetActionIconToREMOVE(this);

			let newFocusArea = {
				isDimension: button_id[0] === 'dimension',
                pageSourceId: pageId[2]
			}

			FocusAreas_AddItem(button_id[1], newFocusArea);
		} else {
			if ($(this).hasClass('remove-action')) {
				Utils_SetActionIconToADD(this);
				FocusAreas_RemoveItem(button_id[1]);
			}
		}

		FocusAreas_UpdateFocusAreasCounterSpan();
	});

}
