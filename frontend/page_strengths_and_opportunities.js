// StrengthsAndOpportunities

function StrengthsAndOpportunities_Page() {
    return {

        Label: meta.Labels.pages.StrengthsAndOpportunities.Title,

        LeftPane: meta.Labels.pages.StrengthsAndOpportunities.Label,

        RightPane: `
		<div id="strengths-and-opportunities-data-container"></div>
		<div class="strengths-and-opportunities-card-details-container"></div>
		`,

        ClassName: 'strengths-and-opportunities-container',
        Style: null,
        ShowFilterSummary: true
    };
}

function StrengthsAndOpportunities_Render() {

    var o = [];

    o.push(Component_TestDataIndicator(data.Report.IsTestData));

    o.push('<div id="strengthsAndOpportunitiesCardRow" class="card-row">')

    //add strengths card - top 3 items
    o.push(`
			<div id="Strengths_card" class="strength flip-card static-card">
					<div id="Strengths_front" class="flip-card-front">
					    <div class="card-label">${meta.Labels.rst_drop_down.Strengths.Label}</div>
					    <div class="card-top3-items">${StrengthsAndOpportunities_getTopNItems(3, 'Strengths')}</div>
					    <div id="Strengths_more" class="details-link">${meta.Labels.buttons.More.Label}</div>
					</div>
			</div>
		`);

    //add opportunities card - top 3 items
    o.push(`
			<div id="Opportunities_card" class="opportunity flip-card static-card">
					<div id="Opportunities_front" class="flip-card-front">
					    <div class="card-label">${meta.Labels.rst_drop_down.Opportunities.Label}</div>
					    <div class="card-top3-items">${StrengthsAndOpportunities_getTopNItems(3, 'Opportunities')}</div>
					    <div id="Opportunities_more" class="details-link">${meta.Labels.buttons.More.Label}</div>
					</div>
			</div>
		`);

    o.push('</div>');

    $('#strengths-and-opportunities-data-container').html(o.join(''));

    // Animation
    $('.strength, .opportunity').css('opacity', 0);
    var delay = 0;
    $('.strength').each(function () {
        $(this).velocity({opacity: 1, transform: "scale(1)"}, {duration: 500, delay: 500 + delay});
        delay += 200;
    })

    delay += 500;
    $('.opportunity').each(function () {
        $(this).velocity({opacity: 1, transform: "scale(1)"}, {duration: 500, delay: 500 + delay});
        delay += 200;
    });

    StrengthsAndOpportunities_handleActionButtonClick()

    $('.details-link').click(function (event) {
        event.stopPropagation();
        event.preventDefault();

        var selectedCardId = $(this).attr('id').split('_more')[0];

        $('.static-card').css('position', 'relative');

        // Animate / Fade Out the cards not clicked
        $('.static-card').velocity({
            top: "200px",
            opacity: 0
        }, {
            duration: 1000
        });

        // Animate selected card
        var card = $('#' + selectedCardId + '_card');

        // Animate / Fade in Details Section
        var width = card.width();
        var container = $('.strengths-and-opportunities-card-details-container');

        var first_card = $('.static-card').first();

        container.velocity({
            left: 62 + 'px',
            top: 65 + 'px', //0, //60, //offset.top + "px",
            height: "600px",
            width: "80%"
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


        // Card Details - Main Content
        //var metric = map[metric_id];

        var dt = StrengthsAndOpportunities_GetItemsTable(selectedCardId);


        $('.strengths-and-opportunities-card-details-container').html(`

				<!-- Exit button -->
				<div id=exitdetails_${selectedCardId} class="details-exit">
				</div>
				
				<div class="card-label">${meta.Labels.rst_drop_down[selectedCardId].Label}</div>

				<!-- Main Content-->
				<div class="card-details-main">
					${dt.Html}
				</div>
			`);

        if (dt.ScriptCode != null) eval(dt.ScriptCode);

        StrengthsAndOpportunities_handleActionButtonClick();

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

                // Animate / Fade in the cards not clicked
                $('.static-card').velocity({
                    top: "0px",
                    opacity: 1
                }, {
                    duration: 500
                });
            }
        );
    });
}

function StrengthsAndOpportunities_handleActionButtonClick() {

    $('.action-button').click(function (event) {

        // Hide "More" link until restore
        //$(this).hide();

        event.stopPropagation();
        event.preventDefault();

        var button_id = $(this).attr('id').split('-');
        var cardActionObj = {
            page: 'StrengthsAndOpportunities',
            cardType: button_id[0],
            itemId: button_id[1]
        };

        State_Set('actionInfo', cardActionObj);

        $('#submenuitem-Actions-ActionsCreatePlan').click();
    });

}

function StrengthsAndOpportunities_getTopNItems(topN, cardType) {
    var tmp = [];

    var totalItems = [];
    var buttonText = '';

    if (cardType === 'Strengths') {
        totalItems = data.Strengths.Items;
        buttonText = meta.Labels.buttons.Maintain.Label;
    } else {
        totalItems = data.Opportunities.Items;
        buttonText = meta.Labels.buttons.Improve.Label;
    }

    for (var i = 0; i < topN; i++) {
        tmp.push(`
				<div class="item-row">
				    <div class="item-number item-row_section">
						${i + 1}
					</div>
					<div class="item-label item-row_section">
						${meta.Labels.Items[totalItems[i]].Label}
					</div>
					<div class="items-core item-row_section">
						${data.ItemsNew[totalItems[i]].Distribution.Fav}%
					</div>
					<div class="item-button item-row_section">
						<div class="action-button" id="${cardType}-${totalItems[i]}-button">
							${buttonText}
						</div>
					</div>
				</div>
			`);
    }

    return tmp.join('');
}

function StrengthsAndOpportunities_GetItemsTable(cardType) {
    //top 5 items table

    var comparators = State_Get('comparators');
    var NofComparators = comparators ? comparators.length : 0;
    var NofHeaderRows = (NofComparators > 0) ? 2 : 1;

    var buttonText = '';

    if (cardType === 'Strengths') {
        buttonText = meta.Labels.buttons.Maintain.Label;
    } else {
        buttonText = meta.Labels.buttons.Improve.Label;
    }

    var headers = [
        [
            {Label: "#", ClassName: 'numeric-cell', colspan: 1, rowspan: NofHeaderRows},
            {Label: meta.Labels.labels["Question"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows},
            {Label: meta.Labels.labels["ValidN"].Label, ClassName: 'numeric-cell', rowspan: NofHeaderRows},
            {
                Label: meta.Labels.labels["PercentFav"].Label,
                ClassName: 'numeric-cell distribution-cell',
                rowspan: NofHeaderRows
            },
            {
                Label: meta.Labels.labels["PercentNeu"].Label,
                ClassName: 'numeric-cell distribution-cell',
                rowspan: NofHeaderRows
            },
            {
                Label: meta.Labels.labels["PercentUnfav"].Label,
                ClassName: 'numeric-cell distribution-cell',
                rowspan: NofHeaderRows
            },
            {Label: meta.Labels.labels["Distribution"].Label, ClassName: 'numeric-cell', rowspan: NofHeaderRows}
        ]
    ];

    if (NofComparators > 0) {
        headers[0].push({
            Label: meta.Labels.labels["FavvsComparator"].Label,
            ClassName: 'numeric-cell',
            colspan: NofComparators
        });
        var subheaders = [];
        for (var i = 0; i < NofComparators; i++) {
            subheaders.push({Label: meta.Labels.Comparators[comparators[i]].Label, ClassName: 'numeric-cell'});
        }
        headers.push(subheaders);
    }

    //add action button column
    headers[0].push( {Label: meta.Labels.labels.Action.Label, ClassName: 'numeric-cell', rowspan: NofHeaderRows} )

    var items = data[cardType].Items;
    var table_data = [];
    var rowdata = [];

    for (var i = 0; i < items.length && i < 5; i++) {
        var item = data.ItemsNew[items[i]];

        rowdata = [
            {Label: i + 1, ClassName: 'id-cell'},
            {Label: meta.Labels.Items[items[i]].Label, ClassName: 'text-cell'},
            {Label: item.N, ClassName: 'numeric-cell'},
            {Label: item.Distribution.Fav, ClassName: 'numeric-cell distribution-cell'},
            {Label: item.Distribution.Neu, ClassName: 'numeric-cell distribution-cell'},
            {Label: item.Distribution.Unfav, ClassName: 'numeric-cell distribution-cell'},
            {
                Label: Component_DistributionChartStacked(item.Distribution),
                datasort: item.Distribution.Fav,
                ClassName: 'text-cell'
            }
        ];

        for (var k = 0; k < NofComparators && k < 3; k++) {
            var value = item.Comparators[comparators[k]].Value;
            sigClassname = (value.indexOf('*') > 0) ? (value.indexOf('-') == 0 ? 'cell-red' : 'cell-green') : '';
            rowdata.push({Label: value, datasort: value.replace(/\*/g, ''), ClassName: 'numeric-cell ' + sigClassname});
        }

        var actionButton = '<div class="action-button action-button__' + cardType + '" id = "' + cardType + '-' + items[i] + '-button" >' + buttonText + '</div>';
        rowdata.push({Label: actionButton, ClassName: 'numeric-cell'});

        table_data.push(rowdata);
    }

    var hideColumns = [];
    if (NofComparators > 3) {
        hideColumns.push(3, 4, 5);
    }

    var columnSettings = `
		'order': [ 0, 'asc' ],
		'columnDefs': [
		    { 'targets': [ ${hideColumns.join(',')} ], 'visible': false },
			{ 'targets': '_all', type: 'natural' }
		],
	`;

    var dt = Component_DataTable(
        "strengthsAndOpportunitiesItemTable",
        "items-table",
        headers,
        table_data,
        false,
        false,
        columnSettings,
        false
    );

    return dt;

}