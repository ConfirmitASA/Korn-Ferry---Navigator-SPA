// StrengthsAndOpportunities

function StrengthsAndOpportunities_Page() {
    return {

        Label: 'Strengths and Opportunities',

        LeftPane: `
		<p>To the right is a list of items where your score was either very good (relative to your industry and other comparisons), or very low (where you clearly have work to do).</p>
		<p>Click on an item for tips and guidance on how to improve or maintain.</p>
		`,

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

    //o.push ( Component_TestDataIndicator ( data.Report.IsTestData ) );

    for (var i = 0; i < data.Strengths.Items.length && i < 5; ++i) {
        var strength_qno = data.Strengths.Items[i];
        var item = data.ItemsNew[strength_qno];//Main_ItemMap()[strength_qno];

        o.push(`
			<div id="Strength_${strength_qno}_card" class="strength flip-card" style="transform: scale(0.1); transition: transform 0.5s">
				<div class="flip-card-inner">
					<div id="Strength_${strength_qno}_front" class="flip-card-front">
						<div style="margin-bottom:20px; font-size: 14px">
							${(i + 1)} 
						</div>
						${meta.Labels.Items[strength_qno].Label} 
						<!-- Flip Icon -->
						<div style="position: absolute; width: 50px; bottom: 0px; right: 0px;">
							<img src="https://cdn.dribbble.com/users/4155/screenshots/255603/flip.png" class=flipicon>
						</div>
					</div>
					<div id="Strength_${strength_qno}_back" class="flip-card-back">
						Score: ${data.ItemsNew[strength_qno].Distribution.Fav}
						<div style="width: 100%; text-align: center; margin-top: 10px;">
							<div class="action-button" id="Strength-${strength_qno}-button">
								${meta.Labels.buttons.TakeAction.Label}
							</div>
						</div>
						<!-- Flip Icon -->
						<div style="position: absolute; width: 50px; bottom: 0px; right: 0px;">
							<img src="https://cdn.dribbble.com/users/4155/screenshots/255603/flip.png" class=flipicon>
						</div>
					</div>
				</div>
			</div>
		`);
    }

    tmp.push(`
		<h2 style="font-weight:normal;">
			${meta.Pages.StrengthsAndOpportunities.Strengths.Title}
		</h2>
		${meta.Pages.StrengthsAndOpportunities.Strengths.Text}
		<div style="max-width: 90vw; margin-top: 0px; display:flex; flex-direction: row; flex-wrap: wrap">
			${o.join('')}
		</div>
	`);

    var o = [];
    for (var i = 0; i < data.Opportunities.Items.length && i < 5; ++i) {
        var qno = data.Opportunities.Items[i];
        var item = data.ItemsNew[qno];//Main_ItemMap()[qno];

        o.push(`
			<div id="Opportunity_${qno}_card" class="opportunity flip-card" style="transform: scale(0.1); transition: transform 0.5s">
				<div class="flip-card-inner">
					<div id="Opportunity_${qno}_front" class="flip-card-front">
						<div style="margin-bottom:20px; font-size: 14px">
							${(i + 1)} 
						</div>
						${meta.Labels.Items[qno].Label} 
						<!-- Flip Icon -->
						<div style="position: absolute; width: 50px; bottom: 0px; right: 0px;">
							<img src="https://cdn.dribbble.com/users/4155/screenshots/255603/flip.png" class=flipicon>
						</div>
					</div>
					<div id="Opportunity_${qno}_back" class="flip-card-back">
						Score: ${data.ItemsNew[qno].Distribution.Fav}
						<div style="width: 100%; text-align: center; margin-top: 10px;">
							<div class="action-button" id="Opportunity-${qno}-button">
								${meta.Labels.buttons.TakeAction.Label}
							</div>
						</div>
						<!-- Flip Icon -->
						<div style="position: absolute; width: 50px; bottom: 0px; right: 0px;">
							<img src="https://cdn.dribbble.com/users/4155/screenshots/255603/flip.png" class=flipicon>
						</div>
					</div>
				</div>
			</div>
		`);
    }

    tmp.push(`
		<h2 style="font-weight:normal; margin-top: 30px">
			${meta.Pages.StrengthsAndOpportunities.Opportunities.Title}
		</h2>
		${meta.Pages.StrengthsAndOpportunities.Opportunities.Text}
		<div style="max-width: 90vw; margin-top: 0px; display:flex; flex-direction: row; flex-wrap: wrap">
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