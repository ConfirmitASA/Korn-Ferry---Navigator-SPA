// KeyMetrics

function KeyMetrics_Page () {
	return {
		Label: 'Key Metrics and Actions',

		// Left Pane
		LeftPane: `
		<p>Engagement and Enablement are the two metrics you want to excel at to be successful.</p>
		<p>To the right is a flip-card explorer with recommendations for ways to improve on your current scores.</p>
		`,

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

function KeyMetrics_Render(){

		// Flip Cards
		var o = [];

		o.push ( Component_TestDataIndicator ( data.Metrics.IsTestData ) );

		for (var i = 0; i < metrics.length; ++i)
			map[metrics[i].Id] = metrics[i];

		for (var key in map) {
			var metric = map[key];

			o.push(`
				<div id=${metric.Id}_card class="flip-card">
					<div class="flip-card-inner">

						<!-- Front -->
						<div style="background-color:${metric.BgColor}" id=${metric.Id}_front class="flip-card-front">

							<!-- Flip Icon -->
							<div style="position: absolute; width: 64px; bottom: 0px; right: 0px;">
								<img src="https://cdn.dribbble.com/users/4155/screenshots/255603/flip.png" class=flipicon>
							</div>

							<!-- Traffic Light Dot -->
							<div class=dot style="position: absolute; top: 20px; left: 20px; background-color:${metric.Color}"></div>

							<div style="zoom: 0.7" class="myicon ${metric.Class} large">
								${metric.Icon}
							</div>

							<!-- Score -->
							<div class=scorelabel>
								${metric.KeyMetric.Label}
							</div>

							<div class=score>
								${metric.KeyMetric.Value}
							</div>

							<div id=help_${metric.Id} class="help">
								${'How can I improve my score?'}
							</div>
							
							<!-- Comparison Scores -->
							<div class=vs>
								<div>
			`);

			for (var i = 0; i < metric.Comparators.length; ++i) {
				var c = metric.Comparators[i];
				o.push(`
					<div class="vs_label">
						${c.Label}
					</div>

					<div class="vs_score">
						${c.Value}
					</div>
				`);
			}


			o.push(`
								</div>
							</div>
							<!-- End Comparison Scores -->

							<!-- Metric Label -->
							<div class=metriclabel>
								${metric.Label}
							</div>
							
						</div>
						<!-- End Front -->

						<!-- Back -->
						<div id=${metric.Id}_back class="flip-card-back">
							<div class="myicon ${metric.Class} small">
								${metric.Icon}
							</div>
							
							<div id=${metric.Id}_more class="detailslink">
								${'More'}
							</div>

							<div class="metriclabel_back">
								${'Drivers of ' + metric.Label}
							</div>

							<div style="position: absolute; top: 130px; left: 8%; width: 85%;">
								${KeyMetrics_MetricDrivers(metric)}
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
		$('.flip-card-front').mouseenter(function() {
			$(this).parent().addClass('flip-card-inner-hover');
			$(this).find('.flipicon').addClass('flipicon_hover');
		});

		$('.flip-card-front').mouseleave(function() {
			$(this).parent().removeClass('flip-card-inner-hover');
			$(this).find('.flipicon').removeClass('flipicon_hover');
		});


		// Click Handlers ---------------------------------------


		// Click: Flip Card - Front
		$('.flip-card-front').click(function() {
			KeyMetrics_FlipFrontToBack($(this));
		});

		// Click: Flip Card - Back
		$('.flip-card-back').click(function() {
			KeyMetrics_FlipBackToFront($(this));
		});

		// Click: Button - Show Front of Cards
		$('#flipall').click(function() {
			$('.flip-card-inner').addClass('flip-card-inner-click');
		});

		// Click: Button - Show Back of Cards
		$('#restoreall').click(function() {
			$('.flip-card-inner').removeClass('flip-card-inner-click');
		});

		// Click: Show Details ("More" button)
		$('.detailslink').click(function(event) {

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
				left: ( first_card.width() + 40 + 50) + 'px',
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
			var metric = map[metric_id];

			var tmp = [];
			tmp.push(`

				<!-- Metric Label -->
				<div style="font-size: 20px; font-weight: bold; margin-bottom: 20px">
					${metric.Label}
				</div>

				<!--Metric Description -->
				${metric.Description}

				<!-- Details -->
				${KeyMetrics_CardDetailsMain(metric)}
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
				function() {

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
		$('.action-button').click(function(event) {

			// Hide "More" link until restore
			//$(this).hide();

			event.stopPropagation();
			event.preventDefault();

			var metric_id = 'engagementindicator'; //$(this).attr('id').split('_more')[0];
			var selected_card_id = '#' + $(this).closest('.flip-card').attr('id'); //'engagementindicator_card';

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

			var distance = offset.left - $('.flip-card').first().offset().left;

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


			// Animate / Fade in Details Section
			var offset = card.offset();
			var width = card.width();
			var container = $('.card-details-container');

			var first_card = $('.flip-card').first();

			container.velocity({
				//left: (first_card.offset().left + first_card.width() + 40) + 'px',
				left: (first_card.width() + 40 + 50) + 'px',
				top: 38 + 'px', //0,//60, //offset.top + "px",
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
			var metric = map[metric_id];

			var tmp = [];
			tmp.push(
				'<h2 style="margin-bottom: 12px">' + 'Take Action: Clear & Promising Directon' + '</h1>',


				'<div class="action-text">' +
				'Ensuring that the practical implications of organisational directions are clear to employees is essential to effective execution.<p>However, connecting employees with the big picture is equally important from a motivational perspective, as most employees are looking for opportunities to contribute to something larger than themselves, to make a difference.',
				'</div>',

				'<div class="action-label">' +
				'What this means:',
				'</div>',
				'<div class="action-text">' +
				'Low scores in this dimension are typically related to employees being disconnected from the company overall.',

				'</div>',

				'<div class="action-label">' +
				'Links to resources:',
				'</div>',
				'<div class="action-text" style="line-height: 20px">' +
				'<li><a class=apple href="https://www.kornferry.com/challenges/coronavirus/leadership" target=new>Leadership in the pandemic</a><br>',
				'<li><a class=apple target=new href="https://infokf.kornferry.com/Be_the_change.html?utm_source=website&utm_medium=banner&utm_term=&utm_content=%20&utm_campaign=19-11-GBL-Culture-Transformation)">Culture Transformation</a>',
				'</div>',

				'<div class="action-label">' +
				'Recommended Actions',
				'</div>',
				'<div class="action-text">',
				'<div class="action-title">Share the big picture</div>',
				'<div class="action-descr"><li>Set frequent team meetings and start with a Strategy Section in the agenda. <li>Explain the current strategy and goals of the company and relate the larger strategy to your business unit and team\'s strategy and goals.</div>',
				'<div class="action-button do-this" style="margin-top: 6px">Do this</div>',
				'</div>',

				'<div class="action-text" style="margin-top: 8px">',
				'<div class="action-title">Align individual and company targets</div>',
				'<div class="action-descr"><li>Check in on your team member\'s performance on a regular basis.<li>In the initial meeting, agree clear goals for the employee to achieve and make sure they connect to the company\'s overall goals and strategy. </div>',
				'<div class="action-button do-this" style="margin-top: 6px">Do this</div>',
				'</div>',
			);


			$('.card-details-container').html(

				// Exit button`
				'<div id=exitdetails_' + metric_id + ' style="width:32px; height: 32px; background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/1200px-Flat_cross_icon.svg.png); background-size:32px 32px; cursor: pointer;  position: absolute;   top: 20px; right: 20px;" class=exitdetails>' + '' + '</div>' +

				// Main Content
				'<div class="card-details-main">' +
				tmp.join('') +
				'</div>'
			);

			// Do This
			$('.do-this').click(function() {
				if ($(this).hasClass('do-this-selected')) {
					$(this).removeClass('do-this-selected');
					$(this).html('Do this');
				} else {
					$(this).addClass('do-this-selected');
					$(this).html('Added');
				}
			});



			// Click - Exit (X) button in Details view
			$('.exitdetails').off('click');
			$('.exitdetails').click(
				function() {

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

		$('.action-button').click(function(e) {
			e.stopPropagation();
		});

}

function KeyMetrics_CardDetailsMain(metric) {
	// This info appears when you click the [MORE] button on the back of the flip card


	var html = `
		<div class=itemrow style="border-top: 0px; margin-top: 30px">
			<div class=metriclabel_back style="position: absolute; top: unset; left: unset;">${metric.Label}</div>
			<div class=score_back style="position: absolute; top: unset; right: 50px; font-size: 18px">${metric.KeyMetric.Value}</div>
		</div>
		`;

	switch (metric.Id) {

		case 'effectiveness':
			html += '<div style="padding-top: 30px">Placeholder for 2x2 chart</div>';
			break;

		default:
			// Item Details`
			html += '<div style="margin-top: 60px">' +
				KeyMetrics_MetricItems(metric) +
				'</div>';
	}

	return html;
}

function KeyMetrics_MetricItems(metric) {
	var tmp = [];
	tmp.push('<div class=items>');
	if (metric.Items != null) {
		for (var j = 0; j < metric.Items.length; ++j) {
			var item = metric.Items[j];

			var distribution_chart = Component_DistributionChart(
				item.Distribution, 
				['white', 'black', 'white'], 
				['#77bc1f', '#e0e0e0', '#d30f1d'], 
				'100%', 
				null 
			);

			tmp.push(`
				<div class=itemrow>
					<div class=itemlabel_details>${item.Label}</div>
					<div class=item_barchart_container>${distribution_chart}</div>
					<div class=itemscore_details>${item.Score}</div>
				</div>
			`);
		}
	}
	tmp.push('</div>');
	return tmp.join('');
}

function KeyMetrics_MetricDrivers(metric) {
	var tmp = [];

	if (metric.Id == 'effectiveness') {
		return '<div class=itemlabel style="width: unset; text-align: left; display: block;">' +
			'Effeciveness is a combination of Engagement and Enablement.<p>To improve your Effectiveness score, please look at ways to improve your Engagement and Enablement scores.'
		'</div>'
	}

	tmp.push('<div class=items>');
	if (metric.Items != null) {
		for (var j = 0; j < metric.Drivers.length; ++j) {
			var item = metric.Drivers[j];
			tmp.push(`
				<div class=itemrow>
					<div style="font-size: 10px; padding-top: 10px; padding-bottom: 8px; color: #666; text-transform: uppercase">
						${item.Dimension}
					</div>
					<div class=itemlabel>
						${item.Label}
					</div>
					<div class=itemscore>
						${item.Score}
					</div>
					<div style="width: 100%; text-align: left">
						<div class=action-button>
							${'Take Action to Improve'}
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