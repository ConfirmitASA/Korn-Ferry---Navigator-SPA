// StrengthsAndOpportunities

function StrengthsAndOpportunities_Page() {
    return {

        Label: meta.Labels.pages.StrengthsAndOpportunities.Title,

        LeftPane: meta.Labels.pages.StrengthsAndOpportunities.Label,

        RightPane: `
		<div id="strengths-and-opportunities-data-container"></div>
		`,

        ClassName: 'strengths-and-opportunities-container',
        Style: null,
        ShowFilterSummary: true
    };
}

function StrengthsAndOpportunities_Render() {
    var tmp = [];

    var o = [];

    o.push ( Component_TestDataIndicator ( data.Report.IsTestData ) );

    var stateComparators = State_Get('comparators');

    if(!!stateComparators) {
        if(stateComparators.indexOf('Internal.trend2020') < 0) {
            stateComparators.push('Internal.trend2020');

            State_Set('comparators', stateComparators);
            TestData_fillComparatorsData();
        }
    } else {
        State_Set('comparators', ['Internal.trend2020', 'External.IndustryBenchmark', 'External.HighPerformers']);
        TestData_fillComparatorsData();
    }

    for (var i = 0; i < data.Strengths.Items.length && i < 5; ++i) {
        var strength_qno = data.Strengths.Items[i];
        var item = data.ItemsNew[strength_qno];//Main_ItemMap()[strength_qno];

        var comparators = [];
        var itemComparatorIds = Object.keys(item.Comparators);

        if(!!item.Comparators) {
            for(var j = 0; j < 3 && j < itemComparatorIds.length; j++) {
                comparators.push(`
                    <div class="flip-card-back_row">
                        ${meta.Labels.Comparators[itemComparatorIds[j]].Label}:
                        ${data.ItemsNew[strength_qno].Comparators[itemComparatorIds[j]].Value}          
                    </div>
                `);
            }
        }

        o.push(`
			<div id="Strength_${strength_qno}_card" class="strength flip-card" style="transform: scale(0.1);">
				<div class="flip-card-inner">
					<div id="Strength_${strength_qno}_front" class="flip-card-front">
						<div class="flip-card-front_question-number">
							${(i + 1)} 
						</div>
						<div class="flip-card-front_question-text">
                            ${meta.Labels.Items[strength_qno].Label} 
                        </div>
						<!-- Flip Icon -->
						<div class="flipicon_wrapper">
							<img src="https://cdn.dribbble.com/users/4155/screenshots/255603/flip.png" class=flipicon>
						</div>
					</div>
					<div id="Strength_${strength_qno}_back" class="flip-card-back">
						<div class="flip-card-back_row"> 
                            ${meta.Labels.labels.Favorable.Label}: ${data.ItemsNew[strength_qno].Distribution.Fav}%
                        </div>
						${comparators.join('')}
						<div class="action-button_wrapper">
							<div class="action-button" id="Strength-${strength_qno}-button">
								${meta.Labels.buttons.TakeAction.Label}
							</div>
						</div>
						<!-- Flip Icon -->
						<div class="flipicon_wrapper">
							<img src="https://cdn.dribbble.com/users/4155/screenshots/255603/flip.png" class=flipicon>
						</div>
					</div>
				</div>
			</div>
		`);
    }

    tmp.push(`
		<h2 class="card-row_header card-row_header__strength">
			${meta.Pages.StrengthsAndOpportunities.Strengths.Title}
		</h2>
		<span>${meta.Pages.StrengthsAndOpportunities.Strengths.Text}</span>
		<div class="card-row">
			${o.join('')}
		</div>
	`);

    var o = [];
    for (var i = 0; i < data.Opportunities.Items.length && i < 5; ++i) {
        var qno = data.Opportunities.Items[i];
        var item = data.ItemsNew[qno];//Main_ItemMap()[qno];

        var comparators = [];
        var itemComparatorIds = Object.keys(item.Comparators);

        if(!!item.Comparators) {
            for(var j = 0; j < 3 && j < itemComparatorIds.length; j++) {
                comparators.push(`
                    <div class="flip-card-back_row">
                        ${meta.Labels.Comparators[itemComparatorIds[j]].Label}:
                        ${data.ItemsNew[strength_qno].Comparators[itemComparatorIds[j]].Value}          
                    </div>
                `);
            }
        }

        o.push(`
			<div id="Opportunity_${qno}_card" class="opportunity flip-card" style="transform: scale(0.1);">
				<div class="flip-card-inner">
					<div id="Opportunity_${qno}_front" class="flip-card-front">
						<div class="flip-card-front_question-number">
							${(i + 1)} 
						</div>
						<div class="flip-card-front_question-text">
						    ${meta.Labels.Items[qno].Label}
						</div>
						<!-- Flip Icon -->
						<div class="flipicon_wrapper">
							<img src="https://cdn.dribbble.com/users/4155/screenshots/255603/flip.png" class=flipicon>
						</div>
					</div>
					<div id="Opportunity_${qno}_back" class="flip-card-back">
						<div class="flip-card-back_row">
                            ${meta.Labels.labels.Favorable.Label}: ${data.ItemsNew[qno].Distribution.Fav}%
                        </div>
                        ${comparators.join('')}
						<div class="action-button_wrapper">
							<div class="action-button" id="Opportunity-${qno}-button">
								${meta.Labels.buttons.TakeAction.Label}
							</div>
						</div>
						<!-- Flip Icon -->
						<div class="flipicon_wrapper">
							<img src="https://cdn.dribbble.com/users/4155/screenshots/255603/flip.png" class=flipicon>
						</div>
					</div>
				</div>
			</div>
		`);
    }

    tmp.push(`
		<h2 class="card-row_header card-row_header__opportunity">
			${meta.Pages.StrengthsAndOpportunities.Opportunities.Title}
		</h2>
		<span>${meta.Pages.StrengthsAndOpportunities.Opportunities.Text}</span>
		<div class="card-row">
			${o.join('')}
		</div>
	`);


    $('#strengths-and-opportunities-data-container').html(
        tmp.join('')
    );

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

    // Click: Flip Card - Front
    $('.flip-card-front').click(function () {
        StrengthsAndOpportunities_FlipFrontToBack($(this));
    });

    // Click: Flip Card - Back
    $('.flip-card-back').click(function () {
        StrengthsAndOpportunities_FlipBackToFront($(this));
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

}

function StrengthsAndOpportunities_FlipFrontToBack(x) {
    x.parent().removeClass('flip-card-inner-hover');
    x.parent().addClass('flip-card-inner-click');
}

// Card Flip
function StrengthsAndOpportunities_FlipBackToFront(x) {
    var id = x.attr('id');
    var front_id = '#' + id.split('_back').join('_front');

    x.parent().removeClass('flip-card-inner-click');
    $(front_id).velocity('fadeIn', {
        delay: 0,
        duration: 200
    });
}