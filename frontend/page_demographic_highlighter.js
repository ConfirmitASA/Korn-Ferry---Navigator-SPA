// Demographic Highlighter

function DemographicHighlighter_Page() {
    return {
        Label: 'Demographic Highlighter',

        LeftPane: meta.Labels.demographic_highlighter.Label,

        RightPane: `
        <div id="demographic-highlighter-details">
            ${Utils_LoremIpsum()}
        </div>
        `,
        
        ClassName: 'demograpic-highlighter-container',
        Style: null,
		ShowFilterSummary: true        
    };
}

function DemographicHighlighter_Render() {
   
    var o = [];

	var demographic_dropdown = Component_Dropdown ( 
		'Break by: ', 
		'demographic-highlighter-dropdown', 
		'(Select demographic)', 
		ParamValues_BreakBy(),
		State_Get( 'breakby' )
	);


    o.push ( `
        ${demographic_dropdown}
        <h3>Placeholder Scoring for Demographic Highlighter</h3>
    `);

    $('#demographic-highlighter-details').html(
        o.join('')
    );

	// Change Handler: Demographic Dropdown Selection
	$('#demographic-highlighter-dropdown').change( function() {
		
		// Save Selection
		var demo = $(this).val();
		State_Set('demo', demo);

		var query = {
			Filters: State_Get('filter'),
			EffectivenessByDemo: { Demo: State_Get('demo') }
		};
		
		Main_SubmitQuery ( query );
		
	});    

}