// StrengthsAndOpportunities

function StrengthsAndOpportunities_Page () {
	return {

		Label: 'Strengths and Opportunities',

		LeftPane: `
		<p>To the right is a list of items where your score was either very good (relative to your industry and other comparisons), or very low (where you clearly have work to do).</p>
		<p>Click on an item for tips and guidance on how to improve or maintain.</p>
		`,

		RightPane: `
		<div id="strengths-and-concerns-data-container"></div>
		`,

		ClassName: 'strengths-and-concerns-container',
        Style: null,
		ShowFilterSummary: true
	};		
}

function StrengthsAndOpportunities_Render() {
	var tmp = [];

	var language_id = data.Report.CurrentLanguage;

	var o = [];

	o.push ( Component_TestDataIndicator ( data.Strengths.IsTestData ) );

	for (var i = 0; i < data.Strengths.Items.length && i < 5; ++i) {
		var strength_qno = data.Strengths.Items[i];
		var item = Main_ItemMap()[strength_qno];

		o.push(`
			<div class="strength" style="transform: scale(0.1); transition: transform 0.5s">
				<div style="margin-bottom:20px; font-size: 14px">
					${(i + 1)} 
				</div>
				${item.Label} 
			</div>
		`);
	}

	tmp.push(`
		<h2 style="font-weight:normal;">
			${meta.Pages.StrengthsAndOpportunities.Strengths.Title[language_id]}
		</h2>
		${meta.Pages.StrengthsAndOpportunities.Strengths.Text[language_id]}
		<div style="max-width: 90vw; margin-top: 0px; display:flex; flex-direction: row; flex-wrap: wrap">
			${o.join('')}
		</div>
	`);

	var o = [];
	for (var i = 0; i < data.Opportunities.Items.length && i < 5; ++i) {
		var qno = data.Opportunities.Items[i];
		var item = Main_ItemMap()[qno];

		o.push(`
			<div class="opportunity" style="transform: scale(0.1); transition: transform 0.5s"> 
				<div style="margin-bottom:20px; font-size: 14px">
					${(i + 1)} 
				</div> 
				${item.Label}
			</div>
		`);
	}

	tmp.push(`
		<h2 style="font-weight:normal; margin-top: 30px">
			${meta.Pages.StrengthsAndOpportunities.Opportunities.Title[language_id]}
		</h2>
		${meta.Pages.StrengthsAndOpportunities.Opportunities.Text[language_id]}
		<div style="max-width: 90vw; margin-top: 0px; display:flex; flex-direction: row; flex-wrap: wrap">
			${o.join('')}
		</div>
	`);


	$('#strengths-and-concerns-data-container').html(
		tmp.join('')
	);

	// Animation
	$('.strength, .opportunity').css('opacity', 0);
	var delay = 0;
	$('.strength').each(function(){
		$(this).velocity({opacity:1, transform: "scale(1)"}, {duration: 500, delay: 500+delay});
		delay += 200;
	})
	
	delay += 500;
	$('.opportunity').each(function(){
		$(this).velocity({opacity:1, transform: "scale(1)"}, {duration: 500, delay: 500+delay});
		delay += 200;
	})

}