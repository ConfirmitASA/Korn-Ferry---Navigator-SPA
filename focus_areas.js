var FocusAreas = [];

/*let focusAreaItem = {
    itemId: 'id',
    isDimension: false
}*/

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
        FocusAreas.push(newItemObj);
    }
}

function FocusAreas_RemoveItem(idToRemove) {
    if(FocusAreas_IsItemAlreadyAdded(idToRemove)) {
        let indexOfItemToRemove = FocusAreas_GetIndexOfAddedFocusAreaByItemId(idToRemove);

        FocusAreas.splice(indexOfItemToRemove, 1);
    }
}

function FocusAreas_GetFocusAreas() {
    return FocusAreas;
}