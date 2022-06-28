// KeyMetrics

function KeyMetrics_Page() {
    return {
        Label:  meta.Labels.KeyMetrics.Title,

        // Left Pane
        LeftPane: meta.Labels.KeyMetrics.Label,

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

    //hide detail card if open when page is reloaded
    $('.card-details-container').css({opacity: 0, top: '800px', left: '-2000px'});

    var current_items_key = Main_GetKeyWithFilter('ITEMS', config.CurrentWave, data.User.PersonalizedReportBase);
    var current_items = data[current_items_key];

    var current_dimensions_key = Main_GetKeyWithFilter('DIMS', config.CurrentWave, data.User.PersonalizedReportBase);
    var current_dimensions = data[current_dimensions_key];


    // Flip Cards
    var o = [];

    o.push(Component_TestDataIndicator(data.Report.IsTestData));

    var comparators = Main_CompactComparatorSet();
    var comparators_data = Main_ComparatorsData_WithFilter();

    var metrics = data.Metrics;

    for(var i = 0; i < metrics.length; i++) {

        var scoreType, scoreLabel, scoreValue;

        var dimension_id = metrics[i];
        var pct_distribution = current_dimensions[ dimension_id ].Dist;

        var current_score;
        var comparator_score;

        var comparator_dimensions = Main_PreviousDimensionsData_WithFilter();
        var comparator_pct_distribution = comparator_dimensions[ dimension_id ].Dist;

        var key_metric = 'Distribution.Fav';

        if(key_metric.indexOf('Distribution') >= 0) {
            scoreType = key_metric.split('.')[1];

            switch (scoreType) {
                case 'Fav' :
                    current_score = pct_distribution.Fav;
                    comparator_score = comparator_pct_distribution.Fav;
                    scoreLabel = meta.Labels['labels.Favorable'].Label;
                    scoreValue = Utils_FormatPctOutput(current_score);
                    break;

                case 'Neu' :
                    current_score = pct_distribution.Neu
                    comparator_score = comparator_pct_distribution.Neu;
                    scoreLabel = meta.Labels.Neutral.Label;
                    scoreValue =  Utils_FormatPctOutput(current_score);
                    break;

                case 'Unfav' :
                    current_score = pct_distribution.Unfav;
                    comparator_score = comparator_pct_distribution.Unfav;
                    scoreLabel = meta.Labels.Unfavorable.Label;
                    scoreValue = Utils_FormatPctOutput(current_score);
                    break;

                default :
                    current_score = distribution.Fav;
                    comparator_score = comparator_pct_distribution.Fav;
                    scoreLabel = meta.Labels['labels.Favorable'].Label;
                    scoreValue = Utils_FormatPctOutput(current_score);
                    break;
            }
        } else {
            scoreType = 'Distribution.Fav';
            scoreLabel = meta.Labels['labels.Favorable'].Label;
            scoreValue = -1; // score not currently available
        }


        var arrowClass = '';
        var vsTrendValue = Utils_Diff( current_score, comparator_score );

        var has_trend = !( current_score == null || comparator_score == null);

        if(vsTrendValue > 0) {
            arrowClass = 'green-arrow';
        } else {
            if(vsTrendValue < 0) {
                arrowClass = 'red-arrow';
            } else {
                arrowClass = 'amber-arrow';
            }
        }

        o.push(`
				<div id=${dimension_id}_card class="flip-card">
					<div class="flip-card-inner">

						<!-- Front -->
						<div style="background-color:#FFF" id=${dimension_id}_front class="flip-card-front">

						 
							<div class="flip-icon">
								<img src="https://cdn.dribbble.com/users/4155/screenshots/255603/flip.png" class=flipicon>
							</div>						

							<div class="myicon large">
								<img src="${Resources_GetIconUrlByDimensionId(dimension_id)}"/>
							</div>

							<!-- Score -->
							<div class="scorelabel">
								${scoreLabel}
							</div>

							<div class=score>
								${scoreValue}
							</div>
							
							<!-- Comparison Scores -->
							<div class=vs>
								<table>
			`);


        for (var k = 0; k < comparators.length; k++) {
            var c = comparators[k];
            var type = c.split('.')[0]; // "Internal" or "External"

            if ( type == "External") {

                var comparator_data = comparators_data[c];

                // Check if external norm exists for this dimension
                var comparator_fav = (
                    comparator_data == null
                    ||
                    comparator_data.Dimensions == null
                    ||
                    comparator_data.Dimensions[ dimension_id ] == null
                )
                    ? ''
                    : Utils_FormatPctOutput(comparator_data.Dimensions[ dimension_id ].Dist.Fav);

                o.push(`
                        <tr>
                            <td class="vs_label">
                                ${meta.Comparators[c].Label}
                            </td>

                            <td class="vs_score">
                                ${comparator_fav}
                            </td>
                        </tr>
                    `);
            }
        }

        //var trend_indicator_description = meta.Labels["TrendIndicator"].Label + ' (vs. ' + meta.Comparators['Internal.Wave:' + config.PreviousWave].Label + ')'; 
        var trend_indicator_description = 'vs. ' + meta.Comparators['Internal.Wave:' + config.PreviousWave].Label;

        var more_button_text = meta.Labels['buttons.More'].Label;

        o.push(`
								</table>
							</div>
							<!-- End Comparison Scores -->

							<!-- Metric Label -->
							<div class="metriclabel">
                                <div class="trend-indicator" style="display:${has_trend ? 'unset' : 'none'}">
                                    <div class="dot ${arrowClass}"></div>
                                    <div style="
                                        font-size: 12px;
                                        text-align: start;
                                        color: #c0c0c0;
                                        padding-top: 4px;
                                        padding-left: 2px;
                                        direction: ltr;
                                    ">${vsTrendValue>0 ? ('+' + vsTrendValue) : (vsTrendValue<0 ? vsTrendValue : '')}</div>
                                </div>
                                <div class="trend-indicator-description">
                                    <div style="
                                        position: absolute;
                                        font-size: 12px;
                                        top: -45px;
                                        width: 100px;
                                        ">${trend_indicator_description}</div>
                                    <div style="
                                        position: absolute;
                                        top: -27px;
                                        height: 28px;
                                        border-left: 1px solid black;
                                    "></div>
                                </div>

                                <div class="metric-heading">${meta.Dimensions[dimension_id].Label}</div>
							</div>
							
						</div>
						<!-- End Front -->

						<!-- Back -->
						<div id=${dimension_id}_back class="flip-card-back">
							<div class="myicon small">
								<img src="${Resources_GetIconUrlByDimensionId(dimension_id)}"/>
							</div>
							
							<div id=${dimension_id}_more class="detailslink">
								${more_button_text}
							</div>

							<div class="metriclabel_back">
								${meta.Dimensions[dimension_id].KeyMetric_BackCardText}
							</div>
                            
							<div style="position: absolute; top: 140px; left: 8%; width: 85%;">
								${dimension_id == 'DIM_N65' ? meta.Labels['KeyMetric_MoreCardText.DIM_N65'].Label : KeyMetrics_MetricDrivers(dimension_id, scoreType)}
							</div>

						</div>
						<!-- End Back -->
						
					</div>
					<!-- End Flip Card Inner -->
				</div>
				<!-- End Flip Card -->
			`);

        o.push (
            `
            <script>
                $('.trend-indicator').mouseover ( function() { $(this).next().css('opacity', '1'); } );
                $('.trend-indicator').mouseout ( function() { $(this).next().css('opacity', '0'); } );
            </script>
            `

        );
    }

    // Update Main Container
    $('#card-container-1').html(`
			<div style="margin-top: 20px; display:flex; flex-direction: row; flex-wrap: wrap">
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

        // third card
        let DIM = event.target.id;
        let DIM_ID = DIM.split('_more')[0];

        if (DIM_ID !== config.EngagementDimensionId && DIM_ID !== config.EnablementDimensionId) {
            State_Set ( 'itemgroup', `dimensions.${DIM_ID}`);

            var menuitem = document.getElementById('menuitem-GroupExplore');
            menuitem.click();

            return;
        }

        // Hide "More" link until restore
        $(this).hide();

        event.stopPropagation();
        event.preventDefault();

        var metric_id = $(this).attr('id').split('_more')[0];
        var selected_card_id = '#' + $(this).attr('id').split('_more').join('_card');

        $('.flip-card').css('position', 'relative');

        // Animate / Fade Out the cards not clicked
        $('.flip-card').not(selected_card_id).velocity({
            top: "2000px",
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
            top: 0 + 'px', //0, //60, //offset.top + "px",
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
					${meta.Dimensions[metric_id].Label}
				</div>

				
				${meta.Dimensions[metric_id].KeyMetric_MoreCardText}
                

				<!-- Details -->
				${KeyMetrics_CardDetailsMain(metric_id)}
			`);


        $('.card-details-container').html(`

				<!-- Exit button -->
				<div id=exitdetails_${metric_id} class="details-exit">
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

        if($(this).hasClass('add-action')) {
            Utils_SetActionButtonToREMOVE(this, meta.Labels['buttons.Selected'].Label);

            let newFocusArea = {
                isDimension: false,
                pageSourceId: 'KeyMetrics',
                ownerId: data.User.UserId
            }

            FocusAreas_AddItem(button_id[2], newFocusArea);
        } else {
            if ($(this).hasClass('remove-action')) {
                Utils_SetActionButtonToADD(this, meta.Labels['buttons.TakeAction'].Label);
                FocusAreas_RemoveItem(button_id[2]);
            }
        }

        FocusAreas_UpdateFocusAreasCounterSpan();
    });
}


function KeyMetrics_CardDetailsMain(metric_id) {
    // This info appears when you click the [MORE] button on the back of the flip card

    var dimensions = Main_CurrentDimensionsData_WithFilter();
    var pct_distribution = Utils_CountsToPercents ( dimensions[metric_id].Dist );

    var html = `
		<div class="itemrow-header">
			<div class="metricback_label">${meta.Dimensions[metric_id].Label}</div>
			<div class="scoreback_label">${Utils_FormatPctOutput(pct_distribution.Fav)}</div>
		</div>
		`;


    html += '<div style="margin-top: 30px">' + KeyMetrics_MetricItems(metric_id) + '</div>';

    return html;
}

function KeyMetrics_MetricItems(metric_id) {
    var tmp = [];
    tmp.push('<table style="width: 100%" class=items>');
    var data = Main_CurrentItemsData_WithFilter();

    var item_ids = meta.Dimensions[metric_id].Items;

    if (!!item_ids) {

        // Loop over items in this dimension
        for (var j = 0; j < item_ids.length; j++) {
            var item_id = item_ids[j];

            var item = data[item_id];

            if ( item != null ) {

                var pct_distribution = Utils_CountsToPercents ( item.Dist );
                var distribution_chart = Component_DistributionChartStacked(
                    pct_distribution
                );

                tmp.push(`
                    <tr class=itemrow>
                        <td class=itemlabel_details>${Main_GetQuestionText(item_id)}</td>
                        <td class=item_barchart_container>${distribution_chart}</td>
                        <td class=itemscore_details>${Utils_FormatPctOutput(pct_distribution.Fav)}</td>
                    </tr>
                `);
            }
        }
    }
    tmp.push('</table>');
    return tmp.join('');
}

function KeyMetrics_MetricDrivers(dimension_id, scoreType) {
    var tmp = [];

    var current_items = Main_CurrentItemsData_WithFilter();

    tmp.push('<table style="width: 100%" class=items>');

    var kda_key = Main_GetKey('KDA', config.CurrentWave, data.User.PersonalizedReportBase);
    var kda = data[kda_key];
    var drivers = kda[dimension_id];
    if (drivers == null) drivers = [];

    var drivers = drivers.slice(0,2); //todo

    if (!!meta.Dimensions[ dimension_id ].Items) {
        for (var j = 0; j< 2 && j < drivers.length; j++) {
            var item_id = drivers[j]; // example: "AV01"
            var pct_distribution = Utils_CountsToPercents ( current_items[item_id].Dist );

            var scoreValue;

            switch (scoreType) {
                case 'Fav' :
                    scoreValue = Utils_FormatPctOutput(pct_distribution.Fav);
                    break;
                case 'Neu' :
                    scoreValue = Utils_FormatPctOutput(pct_distribution.Neu);
                    break;
                case 'Unfav' :
                    scoreValue = Utils_FormatPctOutput(pct_distribution.Unfav);
                    break;
                default :
                    scoreValue = Utils_FormatPctOutput(pct_distribution.Fav);
                    break;
            }

            var item_dimension_id = Main_GetDimensionIdByItemId ( item_id );

            //check if item has been added to Focus Areas
            //set action button as 'selected' if so
            let isItemAddedAsFocusArea = FocusAreas_IsItemAlreadyAdded(item_id);
            let actionButtonClass = isItemAddedAsFocusArea ? 'remove-action action-button__selected' : 'add-action';
            let actionButtonText = isItemAddedAsFocusArea
                ? `<div class="remove-action_icon">-</div> ${meta.Labels['labels.Selected'].Label}`
                : meta.Labels['buttons.TakeAction'].Label;

            tmp.push(`
				<tr class=itemrow>
					<td colspan=2 style="font-size: 10px; padding-top: 10px; padding-bottom: 8px; color: #666; text-transform: uppercase">
						${meta.Dimensions[ item_dimension_id ].Label}
					</td>
                </tr>
                <tr>
					<td class=itemlabel>
						${Main_GetQuestionText(item_id)}
					</td>
					<td class=itemscore>
						${scoreValue}
					</td>
                </tr>
                <tr>
					<td colspan=2 style="width: 100%;">
						<div class="action-button ${actionButtonClass}" id="${dimension_id}-${item_dimension_id}-${item_id}-button">
							${actionButtonText}
						</div>
					</td>
				</tr>
			`);
        }
    }
    tmp.push('</table>');
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