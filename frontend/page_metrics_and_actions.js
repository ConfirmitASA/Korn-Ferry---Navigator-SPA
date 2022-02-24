// KeyMetrics

function KeyMetrics_Page() {
    return {
        Label: meta.Labels.pages.KeyMetrics.Title,

        // Left Pane
        LeftPane: meta.Labels.pages.KeyMetrics.Label,

        // Right Pane
        RightPane: `
		<div class="outer-card-container">
			<div id="card-container-1" class="card-container"></div>
			<div class="card-details-container"></div>
		</div>
		`,

        ClassName: 'flip-card-container',
        Style: null,
        ShowFilterSummary: true
    }
};

function KeyMetrics_Render() {

    // Flip Cards
    var o = [];

    o.push(Component_TestDataIndicator(data.Report.IsTestData));

    var comparators = State_Get('comparators');

    if(!!comparators) {
        if(comparators.indexOf('Internal.trend2020') < 0) {
            comparators.push('Internal.trend2020');
        }
        if(comparators.indexOf('External.IndustryBenchmark') < 0) {
            comparators.push('External.IndustryBenchmark');
        }
        if(comparators.indexOf('External.HighPerformers') < 0) {
            comparators.push('External.HighPerformers');
        }

        State_Set('comparators', comparators);
        TestData_fillComparatorsData();
    } else {
        State_Set('comparators', ['Internal.trend2020', 'External.IndustryBenchmark', 'External.HighPerformers']);
        TestData_fillComparatorsData();
    }

    var metrics = data.MetricsNew;

    for(var i = 0; i < metrics.length; i++) {

        var metric = metrics[i];
        var scoreType, scoreLabel, scoreValue;

        if(metric.KeyMetric.indexOf('Distribution') >= 0) {
            scoreType = metric.KeyMetric.split('.')[1];

            switch (scoreType) {
                case 'Fav' :
                    scoreLabel = meta.Labels.labels.Favorable.Label;
                    scoreValue = data.Dimensions[metric.DimensionId].Distribution.Fav + '%';
                    break;
                case 'Neu' :
                    scoreLabel = meta.Labels.labels.Neutral.Label;
                    scoreValue = data.Dimensions[metric.DimensionId].Distribution.Neu + '%';
                    break;
                case 'Unfav' :
                    scoreLabel = meta.Labels.labels.Unfavorable.Label;
                    scoreValue = data.Dimensions[metric.DimensionId].Distribution.Unfav + '%';
                    break;
                default :
                    scoreLabel = meta.Labels.labels.Favorable.Label;
                    scoreValue = data.Dimensions[metric.DimensionId].Distribution.Fav + '%';
                    break;
            }
        } else {
            scoreType = metric.KeyMetric;
            scoreLabel = meta.Labels.labels.Score;
            scoreValue = data.Dimensions[metric.DimensionId].Score;
        }

        var arrowClass = '';
        var vsTrendValue = parseInt(data.Dimensions[metric.DimensionId].Comparators[metric.ArrowComparator].Value);

        if(vsTrendValue > 0) {
            arrowClass = 'green-arrow';
        } else {
            if(vsTrendValue < 0) {
                arrowClass = 'red-arrow';
            } else {
                arrowClass = 'gray-arrow';
            }
        }

        o.push(`
				<div id=${metric.DimensionId}_card class="flip-card">
					<div class="flip-card-inner">

						<!-- Front -->
						<div style="background-color:${metric.BgColor}" id=${metric.DimensionId}_front class="flip-card-front">

							<!-- Flip Icon -->
							<div style="position: absolute; width: 64px; bottom: 0px; right: 0px;">
								<img src="https://cdn.dribbble.com/users/4155/screenshots/255603/flip.png" class=flipicon>
							</div>

							<!-- Traffic Light Dot -->
							<div class="dot ${arrowClass}" style="position: absolute; top: 30px; left: 20px;"></div>

							<div style="zoom: 0.7" class="myicon ${metric.Class} large">
								${metric.Icon}
							</div>

							<!-- Score -->
							<div class=scorelabel>
								${scoreLabel}
							</div>

							<div class=score>
								${scoreValue}
							</div>
							
							<!-- Comparison Scores -->
							<div class=vs>
								<div>
			`);

        for (var k = 0; k < metric.Comparators.length; k++) {
            var c = metric.Comparators[k];
            o.push(`
					<div class="vs_label">
						${meta.Labels.Comparators[c].Label}
					</div>

					<div class="vs_score">
						${data.Dimensions[metric.DimensionId].Comparators[c].Value}
					</div>
				`);
        }


        o.push(`
								</div>
							</div>
							<!-- End Comparison Scores -->

							<!-- Metric Label -->
							<div class=metriclabel>
								${meta.Labels.Dimensions[metric.DimensionId].Label}
							</div>
							
						</div>
						<!-- End Front -->

						<!-- Back -->
						<div id=${metric.DimensionId}_back class="flip-card-back">
							<div class="myicon ${metric.Class} small">
								${metric.Icon}
							</div>
							
							<div id=${metric.DimensionId}_more class="detailslink">
								${'More'}
							</div>

							<div class="metriclabel_back">
								${meta.Labels.Dimensions[metric.DimensionId].KeyMetric_BackCardText}
							</div>

							<div style="position: absolute; top: 140px; left: 8%; width: 85%;">
								${KeyMetrics_MetricDrivers(metric, scoreType)}
							</div>

						</div>
						<!-- End Back -->
						
					</div>
					<!-- End Flip Card Inner -->
				</div>
				<!-- End Flip Card -->
			`);
    }

    // Update Main Container
    $('#card-container-1').html(`
			<div style="margin-top: 0px; display:flex; flex-direction: row; flex-wrap: wrap">
				${o.join('')}
			</div>
		`);


    // Hover Handlers --------------------------------------

    // Hover: Flip Card - Front - Hover
    $('.flip-card-front').mouseenter(function () {
        $(this).parent().addClass('flip-card-inner-hover');
        $(this).find('.flipicon').addClass('flipicon_hover');
    });

    $('.flip-card-front').mouseleave(function () {
        $(this).parent().removeClass('flip-card-inner-hover');
        $(this).find('.flipicon').removeClass('flipicon_hover');
    });


    // Click Handlers ---------------------------------------


    // Click: Flip Card - Front
    $('.flip-card-front').click(function () {
        KeyMetrics_FlipFrontToBack($(this));
    });

    // Click: Flip Card - Back
    $('.flip-card-back').click(function () {
        KeyMetrics_FlipBackToFront($(this));
    });

    // Click: Button - Show Front of Cards
    $('#flipall').click(function () {
        $('.flip-card-inner').addClass('flip-card-inner-click');
    });

    // Click: Button - Show Back of Cards
    $('#restoreall').click(function () {
        $('.flip-card-inner').removeClass('flip-card-inner-click');
    });

    // Click: Show Details ("More" button)
    $('.detailslink').click(function (event) {

        // Hide "More" link until restore
        $(this).hide();

        event.stopPropagation();
        event.preventDefault();

        var metric_id = $(this).attr('id').split('_more')[0];
        var selected_card_id = '#' + $(this).attr('id').split('_more').join('_card');

        $('.flip-card').css('position', 'relative');

        // Animate / Fade Out the cards not clicked
        $('.flip-card').not(selected_card_id).velocity({
            top: "200px",
            opacity: 0
        }, {
            duration: 1000
        });

        // Animate selected card
        var card = $(selected_card_id);
        var offset = card.offset();

        var distance = offset.left - $('.flip-card').first().offset().left

        card.velocity({
            left: ((-distance) + 'px')
        }, {
            duration: 700,
            delay: 0
        });
        card.velocity({
            height: "500px"
        }, {
            duration: 500,
            delay: 0
        });

        KeyMetrics_FlipBackToFront($('#' + metric_id + '_back'));


        // Animate / Fade in Details Section
        var offset = card.offset();
        var width = card.width();
        var container = $('.card-details-container');

        var first_card = $('.flip-card').first();

        container.velocity({
            left: (first_card.width() + 40 + 50) + 'px',
            top: 38 + 'px', //0, //60, //offset.top + "px",
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
        tmp.push(`

				<!-- Metric Label -->
				<div style="font-size: 20px; font-weight: bold; margin-bottom: 20px">
					${meta.Labels.Dimensions[metric_id].Label}
				</div>

				<!--Metric Description -->
				${meta.Labels.Dimensions[metric_id].KeyMetrics_MoreCardText}

				<!-- Details -->
				${KeyMetrics_CardDetailsMain(metric_id)}
			`);


        $('.card-details-container').html(`

				<!-- Exit button -->
				<div id=exitdetails_${metric_id} style="
					width:32px; 
					height: 32px; 
					background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/1200px-Flat_cross_icon.svg.png); background-size:32px 32px; cursor: pointer;  position: absolute;   top: 20px; right: 20px;
				" class=exitdetails>
				</div>

				<!-- Main Content-->
				<div class="card-details-main">
					${tmp.join('')}
				</div>
			`);

        // Click - Exit (X) button in Details view
        $('.exitdetails').off('click');
        $('.exitdetails').click(
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
                    left: "0px",
                    height: "420px"
                }, {
                    duration: 500,
                    delay: 0
                });

                $('.detailslink').show();

                // Animate / Fade in the cards not clicked
                $('.flip-card').not(selected_card_id).velocity({
                    top: "0px",
                    opacity: 1
                }, {
                    duration: 500
                });
            }
        );


    });

    // Click: "Take Action To Improve"
    $('.action-button').click(function (event) {

        // Hide "More" link until restore
        //$(this).hide();

        event.stopPropagation();
        event.preventDefault();

        var button_id = $(this).attr('id').split('-');
        var cardActionObj = {
            page: 'KeyMetrics',
            cardDimensionId: button_id[0],
            keyDriverDimensionId: button_id[1],
            keyDriverItemId: button_id[2],
        };

        State_Set('actionInfo', cardActionObj);

        $('#submenuitem-Actions-ActionsCreatePlan').click();
    });

    $('.action-button').click(function (e) {
        e.stopPropagation();
    });
}

function KeyMetrics_CardDetailsMain(metric_id) {
    // This info appears when you click the [MORE] button on the back of the flip card


    var html = `
		<div class=itemrow style="border-top: 0px; margin-top: 30px">
			<div class=metriclabel_back style="position: absolute; top: unset; left: unset;">${meta.Labels.Dimensions[metric_id].Label}</div>
			<div class=score_back style="position: absolute; top: unset; right: 50px; font-size: 18px">${data.Dimensions[metric_id].Distribution.Fav}%</div>
		</div>
		`;


    html += '<div style="margin-top: 60px">' + KeyMetrics_MetricItems(metric_id) + '</div>';

    return html;
}

function KeyMetrics_MetricItems(metric_id) {
    var tmp = [];
    tmp.push('<div class=items>');

    if (!!data.Dimensions[metric_id].Items) {
        for (var j = 0; j < data.Dimensions[metric_id].Items.length; j++) {
            var item = data.Dimensions[metric_id].Items[j];

            var distribution_chart = Component_DistributionChart(
                data.ItemsNew[item].Distribution
            );

            tmp.push(`
				<div class=itemrow>
					<div class=itemlabel_details>${meta.Labels.Items[item].Label}</div>
					<div class=item_barchart_container>${distribution_chart}</div>
					<div class=itemscore_details>${data.ItemsNew[item].Distribution.Fav}%</div>
				</div>
			`);
        }
    }
    tmp.push('</div>');
    return tmp.join('');
}

function KeyMetrics_MetricDrivers(metric, scoreType) {
    var tmp = [];

    tmp.push('<div class=items>');

    if (!!data.Dimensions[metric.DimensionId].Items) {
        for (var j = 0; j < metric.Drivers.length; j++) {
            var item = metric.Drivers[j];

            var scoreValue;

            switch (scoreType) {
                case 'Fav' :
                    scoreValue = data.ItemsNew[item.ItemId].Distribution.Fav + '%';
                    break;
                case 'Neu' :
                    scoreValue = data.ItemsNew[item.ItemId].Distribution.Neu + '%';
                    break;
                case 'Unfav' :
                    scoreValue = data.ItemsNew[item.ItemId].Distribution.Unfav + '%';
                    break;
                default :
                    scoreValue = data.ItemsNew[item.ItemId].Score;
                    break;
            }

            tmp.push(`
				<div class=itemrow>
					<div style="font-size: 10px; padding-top: 10px; padding-bottom: 8px; color: #666; text-transform: uppercase">
						${meta.Labels.Dimensions[item.DimensionId].Label}
					</div>
					<div class=itemlabel>
						${meta.Labels.Items[item.ItemId].Label}
					</div>
					<div class=itemscore>
						${scoreValue}
					</div>
					<div style="width: 100%; text-align: left">
						<div class="action-button" id="${metric.DimensionId}-${item.DimensionId}-${item.ItemId}-button">
							${meta.Labels.buttons.TakeAction.Label}
						</div>
					</div>
				</div>
			`);
        }
    }
    tmp.push('</div>');
    return tmp.join('');

}

function KeyMetrics_FlipFrontToBack(x) {
    x.parent().removeClass('flip-card-inner-hover');
    x.parent().addClass('flip-card-inner-click');
}

// Card Flip
function KeyMetrics_FlipBackToFront(x) {
    var id = x.attr('id');
    var front_id = '#' + id.split('_back').join('_front');

    x.parent().removeClass('flip-card-inner-click');
    $(front_id).velocity('fadeIn', {
        delay: 0,
        duration: 200
    });
}