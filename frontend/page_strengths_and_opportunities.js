// StrengthsAndOpportunities

function StrengthsAndOpportunities_Page() {
    return {

        Label: meta.Labels.pages.StrengthsAndOpportunities.Title,

        LeftPane: meta.Labels.pages.StrengthsAndOpportunities.Label,

        RightPane: `
		<div id="strengths-and-opportunities-data-container"></div>
		<div class="card-details-container"></div>
		`,

        ClassName: 'strengths-and-opportunities-container',
        Style: null,
        ShowFilterSummary: true
    };
}

function StrengthsAndOpportunities_Render() {
    var o = [];

    o.push ( Component_TestDataIndicator ( data.Report.IsTestData ) );

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

    $('#strengths-and-opportunities-data-container').html( o.join('') );

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

    // Click: "Take Action To Improve"
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

    $('.action-button').click(function (e) {
        e.stopPropagation();
    });

    $('.details-link').click(function (event) {

        // Hide "More" link until restore
        //$(this).hide();

        event.stopPropagation();
        event.preventDefault();

        var selectedCardId = $(this).attr('id').split('_more')[0];

        $('.static-card').css('position', 'relative');

        // Animate / Fade Out the cards not clicked
        $('.static-card').not('#' + selectedCardId + '_card').velocity({
            top: "200px",
            opacity: 0
        }, {
            duration: 1000
        });

        // Animate selected card
        var card = $('#' + selectedCardId + '_card');
        var offset = card.offset();

        var distance = offset.left - $('.static-card').first().offset().left

        card.velocity({
            left: ((-distance) + 'px')
        }, {
            duration: 700,
            delay: 0
        });
        /*card.velocity({
            width: "400px"
        }, {
            duration: 500,
            delay: 0
        });*/


        // Animate / Fade in Details Section
        var offset = card.offset();
        var width = card.width();
        var container = $('.card-details-container');

        var first_card = $('.static-card').first();

        container.velocity({
            left: (first_card.width() + 250) + 'px',
            top: 65 + 'px', //0, //60, //offset.top + "px",
            height: "500px",
            width: "780px"
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

        var tmp = [];
        /*tmp.push(`

				<!-- Metric Label -->
				<div style="font-size: 20px; font-weight: bold; margin-bottom: 20px">
					${meta.Labels.Dimensions[metric_id].Label}
				</div>

				<!--Metric Description -->
				${meta.Labels.Dimensions[metric_id].KeyMetrics_MoreCardText}

				<!-- Details -->
				${KeyMetrics_CardDetailsMain(metric_id)}
			`);*/


        $('.card-details-container').html(`

				<!-- Exit button -->
				<div id=exitdetails_${selectedCardId} class="details-exit">
				</div>

				<!-- Main Content-->
				<div class="card-details-main">
					${tmp.join('')}
				</div>
			`);

        // Click - Exit (X) button in Details view
        $('.details-exit').off('click');
        $('.details-exit').click(
            function () {

                // Fade Out Details
                $('.card-details-container')
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

                // Restore clicked card`
                card.velocity({
                    left: "0px"
                }, {
                    duration: 500,
                    delay: 0
                });

                //$('.details-link').show();

                // Animate / Fade in the cards not clicked
                $('.static-card').not('#' + selectedCardId + '_card').velocity({
                    top: "0px",
                    opacity: 1
                }, {
                    duration: 500
                });
            }
        );
    });
}

function StrengthsAndOpportunities_getTopNItems(topN, cardType) {
    var tmp = [];

    var totalItems = [];
    var buttonText = '';

    if(cardType === 'Strengths') {
        totalItems = data.Strengths.Items;
        buttonText = meta.Labels.buttons.Maintain.Label;
    } else {
        totalItems = data.Opportunities.Items;
        buttonText = meta.Labels.buttons.Improve.Label;
    }

    for(var i = 0; i < topN; i++) {
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

function StrengthsAndOpportunities_FillDetailsCard() {
    //top 5 items table

}