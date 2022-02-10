// EffectivenessProfile

function EffectivenessProfile_Page() {
	return 	{
		Label: 'Effectiveness Profile',

		LeftPane: `
		<p>The Effectiveness Profile arranges people into four different groups based on levels of Engagement and Enablement and compares the size of these groups to Korn Ferry benchmarks.</p>
		<p>People are Most Effective when they are highly engaged and enabled. Most Effective people are likely to be more productive, able to deliver superior levels of service and are more inclined to speak positively about the organisation to others.</p>
		`,
		
		RightPane: `
		<div class="effectiveness-chart-container"></div>
		`,

		ClassName: 'effectiveness-container',
		Style: null,
		ShowFilterSummary: true
	};

}

function EffectivenessProfile_Render() {
	
	EffectivenessProfile_Chart();
	EffectivenessProfile_ShowQuadrantChart();
	
	EffectivenessProfile_QuadrantCallout('bottomright', {
		Text: 'This group is frustrated. They are engaged -- but are not given the tools enabling them to do their job right.',
		Left: 160,
		Top: -40
	});

	EffectivenessProfile_QuadrantCallout('topright', {
		Text: 'This is where you want your people to be. They are both engaged and enabled to do their job well.',
		Left: 160,
		Top: -20
	});

	EffectivenessProfile_QuadrantCallout('bottomleft', {
		Text: 'This the least desirable group. These people are neither engaged nor enabled to do their job right.',
		Left: -370,
		Top: -40
	});

	EffectivenessProfile_QuadrantCallout('topleft', {
		Text: 'You are giving this group the tools to do their job right, however, there is a lack of engagment.',
		Left: -370,
		Top: -40
	});		
	
}

function EffectivenessProfile_Chart() {
	
	var chart = Component_TestDataIndicator ( data.EffectivenessProfile.IsTestData ) + `
<div class="quadrant">
    <div class="tablecontainer">
        <table style="zoom: 0.9; position: relative; top: 80px; left: -20px; ">
            <tbody>
                <tr>
                    <td class="tile topleft">
						${'Detached'}
						<div class="quadrantscore">
							${Math.round(data.EffectivenessProfile.Detached)}%
						</div>
                    </td>
                    <td class="tile topright">
						${'Most Effective'}
						<div class="quadrantscore">
							${Math.round(data.EffectivenessProfile.MostEffective)}%
						</div>
                    </td>
                </tr>

                <tr>
                    <td class="tile bottomleft">
						${'Least Effective'}
						<div class="quadrantscore">
							${Math.round(data.EffectivenessProfile.LeastEffective)}%
						</div>
                    </td>
                    <td class="tile bottomright">
						${'Frustrated'}
						<div class="quadrantscore">
							${Math.round(data.EffectivenessProfile.Frustrated)}%
						</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div id="quadrant-callout"></div>

    <div class="quadranticon icon-horizontal">
        <div class="arrow"></div>
        <div class="axislabel axislabelx">
			${'Engagement'}
		</div>
    </div>

    <div class="quadranticon icon-vertical">
        <div class="arrow"></div>
        <div class="axislabel axislabely">
			${'Enablement'}
		</div>
    </div>
</div>		
	`;
		
	$('.effectiveness-chart-container').html ( chart );
}

function EffectivenessProfile_ShowQuadrantChart() {

	// Animation

	if ( Main_IsFirstClick( 'EffectivenessProfile' )) {
		var interval = 800;
		var step_count = 0;

		$('.quadranticon').css('display', 'none');
		$('.tile').css('opacity', 0);

		step_count++;

		$('.icon-horizontal').velocity('fadeIn', {delay: interval * step_count++});
		$('.icon-vertical').velocity('fadeIn', {delay: interval * step_count++});

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
	x.mouseenter(function() {
		var e = $('#quadrant-callout');
		e.text(config.Text);
		e.velocity("fadeIn");
		e.css('z-index', '999999999');

		var offset = $(this).offset();
		e.css('left', offset.left + config.Left);
		e.css('top', offset.top + config.Top);

	});

	// Mouse Leave
	x.mouseleave(function() {
		var e = $('#quadrant-callout');
		e.velocity('stop');
		e.text('');
		e.css('display', 'none');
	});
}