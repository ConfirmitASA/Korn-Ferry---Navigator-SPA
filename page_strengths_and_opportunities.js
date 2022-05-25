// StrengthsAndOpportunities

function StrengthsAndOpportunities_Page() {
    return {

        Label: meta.Labels["StrengthsAndOpportunities"].Title,

        LeftPane: meta.Labels["StrengthsAndOpportunities"].Label,

        RightPane: `
        ${Component_TestDataIndicator(data.Report.IsTestData)}
		<div id="strengths-and-opportunities-data-container" class="dropshadow"></div>
		<div class="strengths-and-opportunities-card-details-container"></div>
		`,

        ClassName: 'strengths-and-opportunities-container',
        Style: null,
        ShowFilterSummary: true
    };
}

function StrengthsAndOpportunities_Render() {

    //hide detail card if open when page is reloaded
    $('.strengths-and-opportunities-card-details-container').css({opacity: 0, top: '800px', left: '-2000px'});

    var o = [];

    var preSelectedCardId = State_Get('StrengthAndOpportunitiesSelectedCard');

    if(!!preSelectedCardId) {
        StrengthsAndOpportunities_fillDetailsCard(preSelectedCardId);
    }

    o.push('<div id="strengthsAndOpportunitiesCardRow" class="card-row">')

    let noData = `<div class="strengths-and-opportunities-top-3-nodata">${'No data to display*' /*'meta.Labels.NoDataToDisplay.Label'*/}</div>`;
  
    //add strengths card - top 3 items
    let strengths = StrengthsAndOpportunities_getTopNItems(3, 'Strengths');
    o.push(`
			<div id="Strengths_card" class="strength flip-card static-card">
					<div id="Strengths_front" class="flip-card-front">
					    <div class="card-label">${meta.Labels['labels.Strengths'].Label}</div>
					    <div class="card-top3-items">${StrengthsAndOpportunities_getTopNItems(3, 'Strengths')}</div>
					    <div id="Strengths_more" class="details-link">${meta.Labels['buttons.More'].Label}</div>
					</div>
			</div>
		`);

    //add opportunities card - top 3 items
    let oppts = StrengthsAndOpportunities_getTopNItems(3, 'Opportunities');
    o.push(`
			<div id="Opportunities_card" class="opportunity flip-card static-card">
					<div id="Opportunities_front" class="flip-card-front">
					    <div class="card-label">${meta.Labels['labels.Opportunities'].Label}</div>
					    <div class="card-top3-items">${StrengthsAndOpportunities_getTopNItems(3, 'Opportunities')}</div>
					    <div id="Opportunities_more" class="details-link">${meta.Labels['buttons.More'].Label}</div>
					</div>
			</div>
		`);

    o.push('</div>');

    $('#strengths-and-opportunities-data-container').html(o.join(''));

    // Animation
    $('#Strengths_card, #Opportunities_card').css('opacity', 0);

    $('#Strengths_card').velocity(
        {opacity: 1, transform: "scale(1)"},
        {duration: 500, delay: 500}
    );

    $('#Opportunities_card').velocity(
        {opacity: 1, transform: "scale(1)"},
        {duration: 500, delay: 1000}
    );

    StrengthsAndOpportunities_handleActionButtonClick();

    $('.details-link').click(function (event) {
        event.stopPropagation();
        event.preventDefault();

        let filterSummaryContainer = $('.strengths-and-opportunities-container').find('.filtersummary');
        let marginForFilterSummary = 0;

        if($(filterSummaryContainer).css('display') !== 'none') {
            marginForFilterSummary = $(filterSummaryContainer).outerHeight();
        }

        let selectedCardId = $(this).attr('id').split('_more')[0];

        State_Set('StrengthAndOpportunitiesSelectedCard', selectedCardId);

        $('.static-card').css('position', 'relative');

        // Animate / Fade Out the cards not clicked
        $('.static-card').velocity({
            top: "200px",
            opacity: 0
        }, {
            duration: 1000
        });

        // Animate selected card
        let card = $('#' + selectedCardId + '_card');

        // Animate / Fade in Details Section
        let width = card.width();
        let container = $('.strengths-and-opportunities-card-details-container');

        let first_card = $('.static-card').first();

        container.velocity({
            left: 62 + 'px',
            top: (52 + marginForFilterSummary) + 'px', //0, //60, //offset.top + "px",
        }, {
            delay: 0,
            duration: 0
        });

        container.velocity({
            opacity: 1
        }, {
            duration: 1000,
            delay: 1000
        });

        StrengthsAndOpportunities_fillDetailsCard(selectedCardId);
    });
}

function StrengthsAndOpportunities_fillDetailsCard(selectedCardId) {
    let dt = StrengthsAndOpportunities_GetItemsTable(selectedCardId);

    $('.strengths-and-opportunities-card-details-container').html(`

				<!-- Exit button -->
				<div id=exitdetails_${selectedCardId} class="details-exit">
				</div>
				
				<div class="card-label">${meta.Labels['labels.' + selectedCardId].Label}</div>

				<!-- Main Content-->
				<div class="card-details-main">
					${dt.Html}
				</div>
			`);

    if (dt.ScriptCode != null) eval(dt.ScriptCode);

    FocusAreas__handleTableActionIconClick('.strengths-and-opportunities-card-details-container');

    // Click - Exit (X) button in Details view
    $('.details-exit').off('click');
    $('.details-exit').click(
        function () {
            // Fade Out Details
            $('.strengths-and-opportunities-card-details-container')
                .velocity({
                    opacity: 0,
                    top: "800px"
                }, {
                    duration: 500,
                    delay: 0
                })
                .velocity({
                    left: "-2000px"
                }, {
                    duration: 0
                });

            let allActionButtonsOnCards = Array.prototype.slice.call($('.static-card').find('.action-button'));
            allActionButtonsOnCards.forEach((actionButton) => {
                let button_id = $(actionButton).attr('id').split('-');

                if($(actionButton).hasClass('add-action') && FocusAreas_IsItemAlreadyAdded(button_id[1])) {
                    Utils_SetActionButtonToREMOVE(actionButton, meta.Labels['labels.Selected'].Label);
                } else {
                    if($(actionButton).hasClass('remove-action') && !FocusAreas_IsItemAlreadyAdded(button_id[1])) {
                        let newActionButtonText = '';

                        if(button_id[0] === 'Strengths') {
                            newActionButtonText = meta.Buttons.Maintain.Label;
                        }

                        if(button_id[0] === 'Opportunities') {
                            newActionButtonText = meta.Buttons.Improve.Label;
                        }

                        Utils_SetActionButtonToADD(actionButton, newActionButtonText);
                    }
                }
            })
            // Animate / Fade in the cards not clicked
            $('.static-card').css('position', 'relative');
            $('.static-card').css('top', "200px");

            $('.static-card').velocity({
                top: "0px",
                opacity: 1
            }, {
                duration: 500
            });
        }
    );
}

function StrengthsAndOpportunities_handleActionButtonClick() {

    $('#strengths-and-opportunities-data-container').find('.action-button').click(function (event) {

        // Hide "More" link until restore
        //$(this).hide();

        event.stopPropagation();
        event.preventDefault();

        let button_id = $(this).attr('id').split('-');

        if($(this).hasClass('add-action')) {
            Utils_SetActionButtonToREMOVE(this, meta.Labels['labels.Selected'].Label);

            let newFocusArea = {
                itemId: button_id[1],
                isDimension: false,
                pageSourceId: 'StrengthsAndOpportunities'
            }

            FocusAreas_AddItem(newFocusArea);
        } else {
            if ($(this).hasClass('remove-action')) {
                let newActionButtonText = '';

                if(button_id[0] === 'Strengths') {
                    newActionButtonText = meta.Labels['buttons.Maintain'].Label; //meta.Buttons.Maintain.Label;
                }

                if(button_id[0] === 'Opportunities') {
                    newActionButtonText = meta.Labels['buttons.Improve'].Label;
                }

                Utils_SetActionButtonToADD(this, newActionButtonText);

                FocusAreas_RemoveItem(button_id[1]);
            }
        }

        FocusAreas_UpdateFocusAreasCounterSpan();
	});

}

function StrengthsAndOpportunities_getTopNItems(topNItems, cardType) {
    let tmp = [];

    let totalItems = [];
    let buttonText = '';

    let so_key = Main_GetKeyWithFilter('SO', config.CurrentWave, data.User.PersonalizedReportBase);
    let so = data[so_key];

    switch ( cardType ) {

        case 'Strengths':
            totalItems = so.S;
            buttonText =  meta.Labels['buttons.Maintain'].Label;
            break;

        case 'Opportunities':
            totalItems = so.O;
            buttonText =  meta.Labels['buttons.Improve'].Label;
            break;
    
    }

    let formatter = Utils_FormatPctOutput;
    tmp.push ( '<table class="strengths-and-opportunities-top-3" border=0>')
    let items_data = Main_CurrentItemsData_WithFilter();


    // Make sure we have enough items
    let topN = Math.min ( topNItems, totalItems.length );

    for (let i = 0; i < topN; i++) {
        let pct_distribution =  Utils_CountsToPercents (items_data[totalItems[i]].Dist);

        //check if item has been added to Focus Areas
        //set action button as 'selected' if so
        let isItemAddedAsFocusArea = FocusAreas_IsItemAlreadyAdded(totalItems[i]);
        let actionButtonClass = isItemAddedAsFocusArea 
            ? 'remove-action action-button__selected' 
            : 'add-action';
        
        let actionButtonText = isItemAddedAsFocusArea 
            ? `<div class="remove-action_icon">-</div> ${meta.Labels['labels.Selected'].Label}` 
            : buttonText;

        tmp.push(`
				<tr class="item-row">
				    <td class="item-number item-row_section">
						${i + 1}
					</td>
					<td class="item-label item-row_section">
						${Main_GetQuestionText(totalItems[i])}
                        <div class="item-button item-row_section">
                            <div class="action-button ${actionButtonClass}" id="${cardType}-${totalItems[i]}-button">
                                ${actionButtonText}
                            </div>
                        </div>
					</td>
					<td class="items-core item-row_section">
						${formatter(pct_distribution.Fav)}
					</td>
				</tr>
			`);
    }
    tmp.push ( '</table>');

    return ( topN>0 ? tmp.join('') : null );
}

function StrengthsAndOpportunities_GetItemsTable(cardType) {
    //top 5 items table 

    let comparators = Main_CompactComparatorSet();
    let NofComparators = comparators ? comparators.length : 0;
    let NofHeaderRows = (NofComparators > 0) ? 2 : 1;
    let items_data = Main_CurrentItemsData_WithFilter();


    let headers = [
        [
            {Label: "#", ClassName: 'numeric-cell', colspan: 1, rowspan: NofHeaderRows},
            {Label: meta.Labels["labels.Question"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows},
            {Label: meta.Labels["labels.ValidN"].Label, ClassName: 'numeric-cell', rowspan: NofHeaderRows},
            {
                Label: meta.Labels["labels.PercentFav"].Label,
                ClassName: 'numeric-cell distribution-cell',
                rowspan: NofHeaderRows
            },
            {
                Label: meta.Labels["labels.PercentNeu"].Label,
                ClassName: 'numeric-cell distribution-cell',
                rowspan: NofHeaderRows
            },
            {
                Label: meta.Labels["labels.PercentUnfav"].Label,
                ClassName: 'numeric-cell distribution-cell',
                rowspan: NofHeaderRows
            },
            {Label: meta.Labels["labels.Distribution"].Label, ClassName: 'numeric-cell', rowspan: NofHeaderRows}
        ]
    ];

    if (NofComparators > 0) {
        headers[0].push({
            Label: meta.Labels["labels.FavvsComparator"].Label,
            ClassName: 'numeric-cell',
            colspan: NofComparators
        });
        let subheaders = [];
        for (let i = 0; i < NofComparators; i++) {
            subheaders.push({Label: meta.Comparators[comparators[i]].Label, ClassName: 'numeric-cell'});
        }
        headers.push(subheaders);
    }

    //add action button column
    headers[0].push( {Label: meta.Labels['labels.Action'].Label, ClassName: 'numeric-cell', rowspan: NofHeaderRows} )

    let so_key = Main_GetKeyWithFilter('SO', config.CurrentWave, data.User.PersonalizedReportBase);
    let so = data[so_key];

    let items;
    switch ( cardType ) {

        case 'Strengths':
            items = so.S;
            break;

        case 'Opportunities':
            items = so.O;
            break;

    }

    let table_data = [];
    let rowdata = [];
    let formatter = Utils_FormatOutput;

    let comparators_data = Main_ComparatorsData_WithFilter();

    for (let i = 0; i < items.length && i < 5; i++) {
        let item = items_data[items[i]];
        let pct_distribution = Utils_CountsToPercents ( item.Dist );

        rowdata = [
            {Label: i + 1, ClassName: 'id-cell'},
            {Label: Main_GetQuestionText(items[i]), ClassName: 'text-cell'},
            {Label: formatter(item.N), ClassName: 'numeric-cell'},
            {Label: formatter(pct_distribution.Fav), ClassName: 'numeric-cell distribution-cell'},
            {Label: formatter(pct_distribution.Neu), ClassName: 'numeric-cell distribution-cell'},
            {Label: formatter(pct_distribution.Unfav), ClassName: 'numeric-cell distribution-cell'},
            {
                Label: Component_DistributionChartStacked(pct_distribution),
                datasort: pct_distribution.Fav,
                ClassName: 'text-cell'
            }
        ];

        let qid = items[i];
        for (let k = 0; k < NofComparators; k++) {
            let comparator_id = comparators[k];
            let comparator_data = comparators_data[comparator_id];

            let value;
            let sigClassname;

				 
            if ( 
                comparator_data == null
                ||
                comparator_data.Items == null
                ||
                comparator_data.Items[qid] == null 
            ) {
                value = NOT_AVAILABLE;
                sigClassname = '';
            }
            else {
                let sig_test = Utils_SigTest ( item, comparator_data.Items[qid], 'Fav' );
                sigClassname = sig_test.IsSignificant
                    ? ( sig_test.Diff > 0 ? 'cell-green' : 'cell-red')
                    : '';

                value = (sig_test.Diff == null)
                    ? NOT_AVAILABLE
                    : (sig_test.Diff>0 ? '+' : '') + sig_test.Diff + (sig_test.IsSignificant ? ' *' : '');

            }
            rowdata.push({ Label: value, datasort: parseFloat(value), ClassName: 'numeric-cell ' + sigClassname });
        }

        //check if item has been added to Focus Areas
        //set action icon to remove icon if so
        let isItemAddedAsFocusArea = FocusAreas_IsItemAlreadyAdded(items[i]);
        let actionButtonClass = isItemAddedAsFocusArea ? 'remove-action table_remove-item-minus-circle' : 'add-action table_add-item-plus-circle__thin';

        let actionButton = `<div class="action-cell"><div class="action-icon ${actionButtonClass}" id = "${cardType}-${items[i]}-button" ></div></div>`;
        rowdata.push({Label: actionButton, ClassName: 'numeric-cell'});

        table_data.push(rowdata);
    }

    let hideColumns = [];
    if (NofComparators > 3) {
        hideColumns.push(6);
    }

    let numsortColumns = [];
	let LastColIndex = 6 + NofComparators;
	for (let k = 2; k <= LastColIndex; k++) {
        numsortColumns.push(k);
    }

    let columnSettings = `
		'order': [ 0, 'asc' ],
		'columnDefs': [
		    { 'targets': [ ${hideColumns.join(',')} ], 'visible': false },
			{ 'targets': '_all', 'orderable': true },            
			{ 'targets': [0,1,${LastColIndex+1}], type: 'natural' },
			{ 'targets': [ ${numsortColumns.join(',')} ], type: 'numsort' }
		],
	`;

    let dt = Component_DataTable(
        "strengthsAndOpportunitiesItemTable",
        "items-table",
        headers,
        table_data,
        true,
        false,
        columnSettings,
        false
    );

    return dt;

}