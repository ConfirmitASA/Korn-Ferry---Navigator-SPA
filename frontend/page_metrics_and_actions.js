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
		<div id="keyDriversTableContainer">
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

    //var comparators = State_Get('comparators');

    /*if(!!comparators) {
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
    }*/

    var metrics = data.Metrics;

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
                arrowClass = 'amber-arrow';
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

							<div style="zoom: 0.65" class="myicon large">
								<img src="${Resources_GetIconUrlByDimensionId(metric.DimensionId)}"/>
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
						${data.Dimensions[metric.DimensionId].Comparators[c].Distribution.Fav}%
					</div>
				`);
        }


        o.push(`
								</div>
							</div>
							<!-- End Comparison Scores -->

							<!-- Metric Label -->
							<div class=metriclabel>
								<div class="dot ${arrowClass}"></div>
                                <div>${meta.Labels.Dimensions[metric.DimensionId].Label}</div>
							</div>
							
						</div>
						<!-- End Front -->

						<!-- Back -->
						<div id=${metric.DimensionId}_back class="flip-card-back">
							<div class="myicon small">
								<img src="${Resources_GetIconUrlByDimensionId(metric.DimensionId)}"/>
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

    if(user.Roles.includes('role5')) {
        var dt = KeyMetrics_GetKeyDriversTable();

        $('#keyDriversTableContainer').html( dt.Html );
        if ( dt.ScriptCode != null ) eval ( dt.ScriptCode );
    }

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

            var distribution_chart = Component_DistributionChartStacked(
                data.Items[item].Distribution
            );

            tmp.push(`
				<div class=itemrow>
					<div class=itemlabel_details>${meta.Labels.Items[item].Label}</div>
					<div class=item_barchart_container>${distribution_chart}</div>
					<div class=itemscore_details>${data.Items[item].Distribution.Fav}%</div>
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
        for (var j = 0; j< 2 && j < metric.Drivers.length; j++) {
            var item = metric.Drivers[j];

            var scoreValue;

            switch (scoreType) {
                case 'Fav' :
                    scoreValue = data.Items[item.ItemId].Distribution.Fav + '%';
                    break;
                case 'Neu' :
                    scoreValue = data.Items[item.ItemId].Distribution.Neu + '%';
                    break;
                case 'Unfav' :
                    scoreValue = data.Items[item.ItemId].Distribution.Unfav + '%';
                    break;
                default :
                    scoreValue = data.Items[item.ItemId].Score;
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

function KeyMetrics_GetKeyDriversTable() {

    var comparators = State_Get('comparators');
    var NofComparators = comparators ? comparators.length : 0;
    var NofHeaderRows = (NofComparators > 0) ? 2 : 1;

    var headers = [
        [
            { Label: "#", ClassName: 'numeric-cell', colspan: 1, rowspan: NofHeaderRows },
            { Label: meta.Labels.labels["Question"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
            { Label: meta.Labels.labels["ValidN"].Label, ClassName: 'numeric-cell', rowspan: NofHeaderRows },
            { Label: meta.Labels.labels["PercentFav"].Label, ClassName: 'numeric-cell distribution-cell', rowspan: NofHeaderRows },
            { Label: meta.Labels.labels["PercentNeu"].Label, ClassName: 'numeric-cell distribution-cell', rowspan: NofHeaderRows },
            { Label: meta.Labels.labels["PercentUnfav"].Label, ClassName: 'numeric-cell distribution-cell', rowspan: NofHeaderRows },
            { Label: meta.Labels.labels["Distribution"].Label, ClassName: 'numeric-cell', rowspan: NofHeaderRows }
        ]
    ];

    if (NofComparators > 0) {
        headers[0].push({ Label: meta.Labels.labels["FavvsComparator"].Label, ClassName: 'numeric-cell', colspan: NofComparators });
        var subheaders = [];
        for (var i = 0; i < NofComparators; i++) {
            subheaders.push({ Label: meta.Labels.Comparators[comparators[i]].Label, ClassName: 'numeric-cell' });
        }
        headers.push(subheaders);
    }

    var metrics = data.Metrics;
    var addedItems = [];
    var table_data = [];
    var rowdata = [];

    for(var i = 0; i < metrics.length; i++) {
        var metric = metrics[i];

        for(var j = 0; j < metric.Drivers.length; j++) {
            var driver = metric.Drivers[j];

            var copies = addedItems.filter(function (element) {
                return element === driver.ItemId;
            });

            if (copies.length == 0) {
                addedItems.push(driver.ItemId);

                var item = data.Items[driver.ItemId];
                rowdata = [
                    {Label: driver.ItemId, ClassName: 'id-cell'},
                    {Label: meta.Labels.Items[driver.ItemId].Label, ClassName: 'text-cell'},
                    {Label: item.N, ClassName: 'numeric-cell'},
                    {Label: item.Distribution.Fav, ClassName: 'numeric-cell distribution-cell'},
                    {Label: item.Distribution.Neu, ClassName: 'numeric-cell distribution-cell'},
                    {Label: item.Distribution.Unfav, ClassName: 'numeric-cell distribution-cell'},
                    {Label: Component_DistributionChartStacked(item.Distribution), datasort: item.Distribution.Fav, ClassName: 'text-cell'}
                ];

                for (var k = 0; k < NofComparators; k++) {
                    var value = item.Comparators[comparators[k]].Value;
                    sigClassname = (value.indexOf('*')>0) ? (value.indexOf('-')==0 ? 'cell-red' : 'cell-green') : '';
                    rowdata.push({ Label: value, datasort: value.replace(/\*/g,''), ClassName: 'numeric-cell '+sigClassname });
                }

                table_data.push(rowdata);
            }
        }
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

    var exportColumns = [];
    for (var k = 0; k < 6; k++) exportColumns.push(k);
    for (var k = 7; k < 7 + NofComparators; k++) exportColumns.push(k);

    var buttonSettings = `
        [
            {
                extend: 'copyHtml5',
				title: 'Data export',
                exportOptions: { columns: [ ${exportColumns.join(',')} ] }
            }, 
            {
                extend: 'excelHtml5',
				title: 'Data export',
                exportOptions: { columns: [ ${exportColumns.join(',')} ] }
            }, 
            {
                extend: 'csvHtml5',
				title: 'Data export',
                exportOptions: { columns: [ ${exportColumns.join(',')} ] }
            }, 
            {
                extend: 'pdfHtml5',
				title: 'Data export',
                exportOptions: { columns: [ ${exportColumns.join(',')} ] }
            }, 
        ],
    `;

    var dt = Component_DataTable (
        "keyDriversTable",
        "items-table",
        headers,
        table_data,
        true,
        false,
        columnSettings,
        true,
        buttonSettings
    );

    return dt;
}