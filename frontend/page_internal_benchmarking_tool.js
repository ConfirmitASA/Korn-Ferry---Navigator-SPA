// Demographic Highlighter

function BenchmarkingTool_Page() {
    return {
        Label: 'Internal Benchmarking Tool',

        LeftPane: meta.Labels.demographic_highlighter.Label,

        RightPane: `
        <div id="internal-benchmarking-tool-details">
            ${Utils_LoremIpsum()}
        </div>
        `,
        
        ClassName: 'demograpic-highlighter-container',
        Style: null,
		ShowFilterSummary: true        
    };
}

function BenchmarkingTool_Render() {
   
    var o = [];

    o.push ( `
        <h3>Placeholder Scoring for Internal Benchmarking Tool</h3>
    `);

    $('#internal-benchmarking-tool-details').html(
        o.join('')
    );

	// Change Handler: Demographic Dropdown Selection
	$('#internal-benchmarking-tool-dropdown').change( function() {
		
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