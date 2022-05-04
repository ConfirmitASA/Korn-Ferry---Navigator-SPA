// State Handler

var state = {
    Parameters: {},
    CurrentPageId: null
};

function State_Get( name ){
    return state.Parameters[name];
}

function State_Set ( name, value ) {
    state.Parameters[name] = value;
}

function State_SetCurrentPageId ( page_id ) {

    // We don't want to update the current page ID if we're clicking on a parent of the currently active page
    var map = {};
    var last_page_id;

    $('.active-item').each( function() {
        var id = $(this).attr('id');
        last_page_id = id;
        map[id] = 1;    
    });

    if ( map[page_id] == 1 && page_id != last_page_id ) {
        // No need to refresh
        //console.log ('No need to update current page id');
        return;
    }

    state.CurrentPageId = page_id;
}

function State_GetCurrentPageId () {
    return state.CurrentPageId;
}

function State_ClickCurrentPage() {
    $('#' + state.CurrentPageId).click();
}