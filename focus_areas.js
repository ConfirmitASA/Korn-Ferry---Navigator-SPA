var FocusAreas = [];

/*let focusAreaItem = {
    itemId: 'id',
    isDimension: false,
    pageSourceId: '',
    tags: {
        importance: false,
        involvement: false,
        cost: false
    },
    actionPlan: {
        name: '',
        notes: '',
        actions: [],
        status: '',
        dueDate: '',
        createdDate: '',
        owner: '',
        node: ''
    }
}*/

function FocusAreas_UpdateTagOnFocusArea(itemId, tagName, tagValue) {
    if(FocusAreas_IsItemAlreadyAdded(itemId)) {
        let index = FocusAreas_GetIndexOfAddedFocusAreaByItemId(itemId);

        FocusAreas[index]['tags'][tagName] = tagValue;
    } else {
        throw new Error(`Item ${itemId} you're trying to update a tag on does not exist in the Focus Areas list`);
    }
}

function FocusAreas_GetIndexOfAddedFocusAreaByItemId(itemId) {
    let foundIndex = FocusAreas.findIndex((element) => {
        return element.itemId === itemId;
    });

    return foundIndex;
}

function FocusAreas_IsItemAlreadyAdded(itemId) {
    let indexIfAlreadyAdded = FocusAreas_GetIndexOfAddedFocusAreaByItemId(itemId);

    return indexIfAlreadyAdded >= 0;
}

function FocusAreas_AddItem(newItemObj) {
    if(!FocusAreas_IsItemAlreadyAdded(newItemObj.itemId)) {
        let newFocusArea = newItemObj;
        newFocusArea['tags'] = {
            importance: false,
            involvement: false,
            cost: false
        };

        let dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 14);

        newFocusArea['actionPlan'] = {
            name: '',
            notes: '',
            actions: [], //{actionId, orderId, actionTitle, actionText, actionStatus, actionDueDate, actionOwner, isFromRecommended}
            status: 'NotStarted',
            dueDate: dueDate.toDateString(),
            createdDate: (new Date()).toDateString(),
            owner: data.User.FirstName,
            node: data.User.PersonalizedReportBase,
            isSubmitted: false
        };

        FocusAreas.push(newFocusArea);
    }
}

function FocusAreas_UpdateActionPlan(itemId, actionPlanSetting, actionPlanValue) {
    if(FocusAreas_IsItemAlreadyAdded(itemId)) {
        let index = FocusAreas_GetIndexOfAddedFocusAreaByItemId(itemId);

        FocusAreas[index].actionPlan[actionPlanSetting] = actionPlanValue;
    } else {
        throw new Error(`Item ${itemId} you're trying to update an action plan for does not exist in the Focus Areas list`);
    }
}

function FocusAreas_AddActionsToActionPlan(itemId, newActionObj) {
    if(FocusAreas_IsItemAlreadyAdded(itemId)) {
        let index = FocusAreas_GetIndexOfAddedFocusAreaByItemId(itemId);

        FocusAreas[index].actionPlan.actions.push(newActionObj);

    } else {
        throw new Error(`Item ${itemId} you're trying to update an action plan for does not exist in the Focus Areas list`);
    }
}

function FocusAreas_UpdateActionInActionPlan(itemId, actionOrderId, actionSetting, actionValue) {
    if(FocusAreas_IsItemAlreadyAdded(itemId)) {
        let index = FocusAreas_GetIndexOfAddedFocusAreaByItemId(itemId);

        let actions = FocusAreas[index].actionPlan.actions;
        let foundIndex = actions.findIndex((element) => {
            return element.orderId === actionOrderId;
        });

        if(foundIndex >= 0) {
            FocusAreas[index].actionPlan.actions[foundIndex][actionSetting] = actionValue;
        } else {
            throw new Error(`Action ${actionOrderId} you're trying to update does not exist in this action plan for ${itemId}`);
        }

    } else {
        throw new Error(`Item ${itemId} you're trying to update an action plan for does not exist in the Focus Areas list`);
    }
}

function FocusAreas_GetActionsInActionPlan(itemId) {
    if(FocusAreas_IsItemAlreadyAdded(itemId)) {
        let index = FocusAreas_GetIndexOfAddedFocusAreaByItemId(itemId);

        return FocusAreas[index].actionPlan.actions;

    } else {
        throw new Error(`Item ${itemId} you're trying to actions for for does not exist in the Focus Areas list`);
    }

}

function FocusAreas_RemoveItem(idToRemove) {
    if(FocusAreas_IsItemAlreadyAdded(idToRemove)) {
        let indexOfItemToRemove = FocusAreas_GetIndexOfAddedFocusAreaByItemId(idToRemove);

        FocusAreas.splice(indexOfItemToRemove, 1);
    } else {
        throw new Error(`Item ${idToRemove} you requested to delete does not exist in the Focus Areas list`);
    }
}

function FocusAreas_RemoveActionFromActionPlan(itemId, actionOrderId) {
    if (FocusAreas_IsItemAlreadyAdded(itemId)) {
        let itemIndex = FocusAreas_GetIndexOfAddedFocusAreaByItemId(itemId);
        let actions = FocusAreas[itemIndex].actionPlan.actions;

        let actionIndex = actions.findIndex((element) => {
            return element.orderId === actionOrderId;
        });

        if(actionIndex >= 0) {
            FocusAreas[itemIndex].actionPlan.actions.splice(actionIndex, 1);
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
    if(FocusAreas.length > 0) {
        $('#focusAreasCounter').html(FocusAreas.length);
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
				itemId: button_id[1],
				isDimension: button_id[0] === 'dimension',
                pageSourceId: pageId[2]
			}

			FocusAreas_AddItem(newFocusArea);
		} else {
			if ($(this).hasClass('remove-action')) {
				Utils_SetActionIconToADD(this);
				FocusAreas_RemoveItem(button_id[1]);
			}
		}

		FocusAreas_UpdateFocusAreasCounterSpan();
	});

}
