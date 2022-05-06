// Actions > Create Plan

function ActionsFocusAreas_Page() {
    return {
        Label: meta.Pages["ActionsFocusAreas"].Title,

        // Left Pane
        LeftPane: meta.Pages["ActionsFocusAreas"].Label,

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
            <div class="add-focus-areas-text">${meta.Labels.Add.Label}</div>
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
            recommendedActions = meta.Dimensions[focusArea.itemId].RecommendedActions;
        } else {
            focusAreaLabel = Main_GetQuestionText(focusArea.itemId);

            let pct_distribution =  Utils_CountsToPercents (itemsData[focusArea.itemId].Dist);
            favScore = Utils_FormatPctOutput(pct_distribution.Fav);
            recommendedActions = meta.Items[focusArea.itemId].RecommendedActions;

            if(!!recommendedActions) {
                let dimensionIdForCurrentItem = Main_GetDimensionIdByItemId(focusArea.itemId);
                recommendedActions = meta.Dimensions[dimensionIdForCurrentItem].RecommendedActions;
            }

        }

        o.push(`
            <div id="focusArea-${focusArea.itemId}" class="focus-area-card">
                <div class="focus-area-card_header">
                    <div class="fa-card-header_text">${meta.Labels.FocusOn.Label}</div>
                    <div class="fa-card-header_remove"></div>
                </div>
                <div class="focus-area-card_content">
                    <div class="focus-area-info_main">
                        <div class="focus-area-info_text">${focusAreaLabel}</div>
                        <div class="focus-area-info_fav">${favScore}</div>
                    </div>
                    <div class="focus-area-info_additional">
                        <div class="focus-area-info_rec-number">
                            ${recommendedActions.length == 0 ? meta.Labels.NoRecommendationsAvailable.Label : recommendedActions.length + ' ' + meta.Labels.RecommendationsAvailable.Label}
                        </div>
                        <div class="focus-area-info_comparator">${'-13 vs. Company'}</div>                      
                    </div>
                    <div class="focus-area-info_controls">
                        <div class="focus-area-info_tags">
                            <div class="ap-tag ap-tag__inactive ap-tag__exclamation-point ap-tag__exclamation-point--unselected"></div>
                            <div class="ap-tag ap-tag__inactive ap-tag__people-group ap-tag__people-group--unselected"></div>
                            <div class="ap-tag ap-tag__inactive ap-tag__money ap-tag__money--unselected"></div>
                        </div>
                        <div class="focus-area-info_work-button">${meta.Labels.WorkOnThis.Label}</div> 
                    </div>                   
                </div>
            </div>
        `)
    })

    $('#FocusAreasList').html(
        o.join('')
    );

    //add click to tags
    ActionsFocusAreas_HandleTagClick($('.ap-tag'));
    ActionsFocusAreas_HandleCardsTrashCanClick($('.fa-card-header_remove'));
}

function ActionsFocusAreas_HandleTagClick(tagElements) {
    tagElements.click(function (event) {
        event.stopPropagation();
        event.preventDefault();

        if($(this).hasClass('ap-tag__inactive')) {
            $(this).removeClass('ap-tag__inactive');
            $(this).addClass('ap-tag__active');
        } else {
            if($(this).hasClass('ap-tag__active')) {
                $(this).removeClass('ap-tag__active');
                $(this).addClass('ap-tag__inactive');
            }
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
