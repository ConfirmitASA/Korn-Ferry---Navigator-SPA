// EffectivenessProfile

function EffectivenessProfile_Page() {
	return 	{
		Label: meta.Labels['EffectivenessProfile'].Title,

		LeftPane: meta.Labels['EffectivenessProfile'].Label,

		RightPane: `
		<div id="effectiveness-chart-container"></div>
		`,

		ClassName: 'effectiveness-container',
		Style: null,
		ShowFilterSummary: true
	};

}

function EffectivenessProfile_Render() {
	var o = [];

	o.push ( Component_TestDataIndicator ( data.isTestData ) );

	var frontChart = EffectivenessProfile_GetSimpleQuadrantChart();
	var backChart = EffectivenessProfile_GetComplexQuadrantChart();

	o.push (`

		<div class="effectiveness-profile-card-wrapper effectiveness-profile-flip-card">
			<div class="effectiveness-profile-flip-card-inner" id="effectiveness-profile">
				<div class="effectiveness-profile-flip-card-front">
					${frontChart}
					<div class="effectiveness-profile-flipicon-front" id="effectiveness-profile_front"></div>
				</div>
				<div class="effectiveness-profile-flip-card-back">
					${backChart}
					<div class="effectiveness-profile-flipicon-back" id="effectiveness-profile_back"></div>
				</div>
			</div>
		</div>    
    `);

	$('#effectiveness-chart-container').html(
		o.join('')
	);


	$('.effectiveness-profile-flip-card-front').addClass('backface-visible');
	$('.effectiveness-profile-flip-card-back').addClass('backface-hidden');

	var chartData = EffectivenessProfile_GetChartData();

	EffectivenessProfile_DrawTileChart('topleft-chart', chartData.Detached);
	EffectivenessProfile_DrawTileChart('topright-chart', chartData.MostEffective);
	EffectivenessProfile_DrawTileChart('bottomleft-chart', chartData.LeastEffective);
	EffectivenessProfile_DrawTileChart('bottomright-chart', chartData.Frustrated);

	EffectivenessProfile_ShowQuadrantChart();
	EffectivenessProfile_QuadrantCallout('bottomright', {
		Text: meta.Labels['EffectivenessProfileTexts.Frustrated'].Label,
		Left: meta.RTL ? -45 : 590,
		Top: 410
	});
	EffectivenessProfile_QuadrantCallout('topright', {
		Text: meta.Labels['EffectivenessProfileTexts.MostEffective'].Label,
		Left: meta.RTL ? -45 : 590,
		Top: 40
	});
	EffectivenessProfile_QuadrantCallout('bottomleft', {
		Text: meta.Labels['EffectivenessProfileTexts.LeastEffective'].Label,
		Left: meta.RTL ? 590 : -45,
		Top: 410
	});
	EffectivenessProfile_QuadrantCallout('topleft', {
		Text: meta.Labels['EffectivenessProfileTexts.Detached'].Label,
		Left: meta.RTL ? 590 : -45,
		Top: 40
	});

	// flipcard  hover
	$('.effectiveness-profile-flip-card-front').mouseenter(function(e) {
		$(this).parent().addClass('effectiveness-profile-flip-card-inner__hover');
		$('.effectiveness-profile-flipicon-front').addClass('flipicon_hover');
	});
	$('.effectiveness-profile-flip-card-front').mouseleave(function(e) {
		$(this).parent().removeClass('effectiveness-profile-flip-card-inner__hover');
		$('.effectiveness-profile-flipicon-front').removeClass('flipicon_hover');

	});


	$('.effectiveness-profile-flip-card-back').mouseenter(function(e) {
		$(this).parent().addClass('effectiveness-profile-flip-card-inner-back__hover');
		$('.effectiveness-profile-flipicon-back').addClass('flipicon_hover');
	});
	$('.effectiveness-profile-flip-card-back').mouseleave(function(e) {
		$(this).parent().removeClass('effectiveness-profile-flip-card-inner-back__hover');
		$('.effectiveness-profile-flipicon-back').removeClass('flipicon_hover');
	});

	// Click: Flip Card - Front
	$('.effectiveness-profile-flip-card-front').click(function() {
		effectivenessProfile_FlipFrontToBack($(this));
	});

	// Click: Flip Card - Back
	$('.effectiveness-profile-flip-card-back').click(function() {
		effectivenessProfile_FlipBackToFront($(this));
	});

	// Card Flip
	function effectivenessProfile_FlipFrontToBack(x) {
		x.parent().removeClass('effectiveness-profile-flip-card-inner__hover');
		x.parent().addClass('effectiveness-profile-flip-card-inner-click');

		x.removeClass('backface-visible');
		x.addClass('backface-hidden');
		$('.effectiveness-profile-flip-card-back').removeClass('backface-hidden');
		$('.effectiveness-profile-flip-card-back').addClass('backface-visible');

		$(".effectiveness-profile-flip-card-back").velocity('fadeIn', {
			delay: 0,
			duration: 1000
		});
		$(".effectiveness-profile-flip-card-front").velocity('fadeOut', {
			delay: 0,
			duration: 1000
		});
	}

	function effectivenessProfile_FlipBackToFront(x) {
		x.parent().removeClass('effectiveness-profile-flip-card-inner-back__hover');
		x.parent().removeClass('effectiveness-profile-flip-card-inner-click');

		x.removeClass('backface-visible');
		x.addClass('backface-hidden');
		$('.effectiveness-profile-flip-card-front').removeClass('backface-hidden');
		$('.effectiveness-profile-flip-card-front').addClass('backface-visible');

		$(".effectiveness-profile-flip-card-front").velocity('fadeIn', {
			delay: 0,
			duration: 1000
		});
		$(".effectiveness-profile-flip-card-back").velocity('fadeOut', {
			delay: 0,
			duration: 1000
		});
	}

}

function EffectivenessProfile_GetSimpleQuadrantChart() {

	var ep_data = EffectivenessProfile_GetCurrentWaveDataWithFilter();
	var pct_distribution = Utils_CountsToPercents ( ep_data.Dist );

	let formatterPct = Utils_FormatPctOutput;

	var chart = `
		<div class="quadrant">
			<div class="quadrant_table-container">
				<table class="quadrant_table">
					<tbody>
						<tr>
							<td class="tile topleft">
								${meta.Labels['labels.Detached'].Label}
								<div class="quadrantscore">
									${formatterPct(pct_distribution.Detached)}
								</div>
							</td>
							<td class="tile topright">
								${meta.Labels['labels.MostEffective'].Label}
								<div class="quadrantscore">
									${formatterPct(pct_distribution.MostEffective)}
								</div>							
							</td>
						</tr>

						<tr>
							<td class="tile bottomleft">
								${meta.Labels['labels.LeastEffective'].Label}
								<div class="quadrantscore">
									${formatterPct(pct_distribution.LeastEffective)}
								</div>
							</td>
							<td class="tile bottomright">
								${meta.Labels['labels.Frustrated'].Label}
								<div class="quadrantscore">
									${formatterPct(pct_distribution.Frustrated)}
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			
			<div id="quadrant-callout"></div>

			<div class="quadranticon icon-horizontal">
				<div id="arrow-x" class="arrow"></div>
				<div class="axislabel axislabelx">
					${meta.Labels['labels.Engagement'].Label}
				</div>
			</div>

			<div class="quadranticon icon-vertical">
				<div id="arrow-y" class="arrow"></div>
				<div class="axislabel axislabely">
					${meta.Labels['labels.Enablement'].Label}
				</div>
			</div>
			
		</div>		
	`;

	return chart;
}

function EffectivenessProfile_GetComplexQuadrantChart() {

	var chart = `
		<div class="quadrant__complex">
			<div class="quadrant_table-container__complex">
				<table class="quadrant_table__complex">
					<tbody>
						<tr>
							<td class="tile__complex">
								<div class="tile_content__complex">
									<div class="tile_header__complex topleft">${meta.Labels['labels.Detached'].Label}</div>
									<div class="tile_body__complex">
										<div id="topleft-chart"></div>
									</div>
								</div>
							</td>
							<td class="tile__complex">
								<div class="tile_content__complex">
									<div class="tile_header__complex topright">${meta.Labels['labels.MostEffective'].Label}</div>	
									<div class="tile_body__complex">
										<div id="topright-chart"></div>
									</div>	
								</div>				
							</td>
						</tr>

						<tr>
							<td class="tile__complex">
								<div class="tile_content__complex">
									<div class="tile_header__complex bottomleft">${meta.Labels['labels.LeastEffective'].Label}</div>
									<div class="tile_body__complex">
										<div id="bottomleft-chart"></div>
									</div>
								</div>
							</td>
							<td class="tile__complex">
								<div class="tile_content__complex">
									<div class="tile_header__complex bottomright">${meta.Labels['labels.Frustrated'].Label}</div>
									<div class="tile_body__complex">
										<div id="bottomright-chart"></div>
									</div>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			
		</div>		
	`;

	return chart;
}

function EffectivenessProfile_GetCurrentWaveDataWithFilter() {
	var key = Main_GetKeyWithFilter ( 'EP', config.CurrentWave, data.User.PersonalizedReportBase );
	return data[key];
}

function EffectivenessProfile_ComparatorsData_WithFilter() {
	var comparators = Main_CompactComparatorSet(); // State_Get('comparators');

	// Look up trend data for internal comparators
	var comparators_data = {};

	for (var i=0; i<comparators.length; ++i) {
		var comparator_id = comparators[i]; // example: "Internal.Wave:2020"
		var parts = comparator_id.split('.');
		var type = parts[0]; // "Internal" or "External"

		var node_id;
		var wave_id;

		switch ( type ) {

			case "Internal":
				var x = parts[1].split(':').pop(); // examples: "2019", "parent", "total"

				switch ( x ) {

					case 'parent':
						node_id = Main_ParentNodeId();
						wave_id = config.CurrentWave;
						break;

					case 'total':
						node_id = meta.Hierarchy.TopNode.Id;
						wave_id = config.CurrentWave;
						break;

					default:
						wave_id = x;
						node_id = data.User.PersonalizedReportBase;
				}

				var ep_key = Main_GetKeyWithFilter('EP', wave_id, node_id);

				/*console.log('ep comparators ep_key');
				console.log(ep_key);*/

				comparators_data[ comparator_id ] = data[ep_key];

				break;

			case "External":
				var name = parts[1];
				var code = config.Norms[name]; // ['AllCompany_A_17TO19_Avg'];
				if(data['NORMS-EP'][code] !== undefined){
					comparators_data[ comparator_id ] = data['NORMS-EP'][code];
				}
				break;
		}
	}

	return comparators_data;
}

function EffectivenessProfile_GetChartData() {

	var ep_data = EffectivenessProfile_GetCurrentWaveDataWithFilter();

	var pct_distribution = Utils_CountsToPercents ( ep_data.Dist );

	/*console.log('EffectivenessProfile_GetChartData');
	console.log(pct_distribution)*/

	var current_branch_label = data.User.PersonalizedReportBaseText;

	var chartData = {
		LeastEffective: {
			categories: [current_branch_label],
			series: {
				name: meta.Labels['labels.LeastEffective'].Label,
				data: [pct_distribution.LeastEffective],
				colors: ['#F03223']
			},
		},
		Detached: {
			categories: [current_branch_label],
			series: {
				name: meta.Labels['labels.Detached'].Label,
				data: [pct_distribution.Detached],
				colors: ['#00B7F1']
			}
		},
		Frustrated: {
			categories: [current_branch_label],
			series: {
				name: meta.Labels['labels.Frustrated'].Label,
				data: [pct_distribution.Frustrated],
				colors: ['#F99B1E']
			}
		},
		MostEffective: {
			categories: [current_branch_label],
			series: {
				name: meta.Labels['labels.MostEffective'].Label,
				data: [pct_distribution.MostEffective],
				colors: ['#82C341']
			}
		}
	};

	//var comparatorsData = data.EffectivenessProfile.Comparators;
	var comparators_data = EffectivenessProfile_ComparatorsData_WithFilter();

	for(var i in comparators_data) {

		var comparator_data = comparators_data[i];
		var pct_distribution = Utils_CountsToPercents ( comparator_data.Dist );

		var label = meta.Comparators[i].Label;

		// Categories
		chartData.LeastEffective.categories.push( label );
		chartData.Detached.categories.push( label );
		chartData.Frustrated.categories.push( label );
		chartData.MostEffective.categories.push( label );

		// Data
		chartData.LeastEffective.series.data.push( pct_distribution.LeastEffective );
		chartData.Detached.series.data.push( pct_distribution.Detached );
		chartData.Frustrated.series.data.push( pct_distribution.Frustrated );
		chartData.MostEffective.series.data.push( pct_distribution.MostEffective );

		// Colors
		chartData.LeastEffective.series.colors.push('#C0C0C0');
		chartData.Detached.series.colors.push('#C0C0C0');
		chartData.Frustrated.series.colors.push('#C0C0C0');
		chartData.MostEffective.series.colors.push('#C0C0C0');
	}

	return chartData;
}

function EffectivenessProfile_DrawTileChart(tileId, chartData) {
	Highcharts.chart(tileId, {
		chart: {
			type: 'bar',
			height: 195,
			width: 295
		},
		credits: {
			enabled: false
		},
		title: {
			text: ''
		},
		xAxis: {
			categories: chartData.categories,
			opposite: meta.RTL ? true : false, // rtl
			labels: {
				useHTML: true,
				style: {
					width:'100px',
					fontSize: 12
				}
			}
		},
		yAxis: {
			min: 0,
			max: 100,
			reversed: meta.RTL ? true : false, //rtl
			title: {
				text: ''
			},

			stackLabels: {
				useHTML: true,
				enabled: true,
				style: {
					fontSize: '12px'
				}
			}

		},
		legend: {
			enabled: false
		},

		plotOptions: {
			series: {
				stacking: 'normal',
				colorByPoint: true
			},
		},

		tooltip: {
			enabled: false
		},
		series: [
			chartData.series
		]
	});

}

function EffectivenessProfile_ShowQuadrantChart() {

	// Animation

	if ( Main_IsFirstClick( 'EffectivenessProfile' )) {
		var interval = 500;
		var step_count = 0;

		//$('.quadranticon').css('display', 'none');
		$('.tile').css('opacity', 0);

		//step_count++;

		/*$('.icon-horizontal').velocity('fadeIn', {delay: interval * step_count++});
		$('.icon-vertical').velocity('fadeIn', {delay: interval * step_count++});*/

		step_count++;

		$('.bottomleft').velocity({
			opacity: 1
		}, {
			duration: interval,
			delay: interval * step_count++
		});

		step_count++;

		$('.topright').velocity({
			opacity: 1
		}, {
			duration: interval,
			delay: interval * step_count++
		});

		step_count++;


		$('.topleft').velocity({
			opacity: 1
		}, {
			duration: interval,
			delay: interval * step_count++
		});

		step_count++;

		$('.bottomright').velocity({
			opacity: 1
		}, {
			duration: interval,
			delay: interval * step_count++
		});
	}
	else {
		$('.icon-horizontal, .icon-vertical, .tile').css('opacity', 1);
	}

}



function EffectivenessProfile_QuadrantCallout(classname, config) {
	var x = $('.' + classname);
	x.off();

	// Mouse Enter
	x.mouseenter(function(event) {
		event.stopPropagation();
		event.preventDefault();
		var e = $('#quadrant-callout');
		e.text(config.Text);
		e.velocity("fadeIn");
		e.css('z-index', '999999999');

		var offset = {
			left: 0,
			top: 0
		}//$(this).offset();

		e.css('left', offset.left + config.Left);
		e.css('top', offset.top + config.Top);

	});

	// Mouse Leave
	x.mouseleave(function(event) {
		event.stopPropagation();
		event.preventDefault();
		var e = $('#quadrant-callout');
		e.velocity('stop');
		e.text('');
		e.css('display', 'none');
	});
}