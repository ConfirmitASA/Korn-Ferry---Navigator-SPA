// EffecivenessProfileByDemo

function EffectivenessProfileByDemo_Page() {
	return {
		Label: 'Effectiveness Profile By Demo',

		LeftPane: `
		<p>Placeholder text.</p>
		<p>More Placeholder text.</p>
		`,

		RightPane: `
		<div class="effectiveness-by-demo-container"></div>
		`,
		
		ClassName: 'effectiveness-container',
		Style: null,
		ShowFilterSummary: true
	};
}

function EffectivenessProfileByDemo_Render() {

	//console.log ("EffectivenessProfileByDemo_Render");

	var demographic_dropdown = Component_Dropdown ( 
		'Break by: ', 
		'effectiveness-by-demo-dropdown', 
		'(Select demographic)', 
		ParamValues_Demo(), 
		State_Get('demo')
	);

	var dt = EffectivenessProfileByDemo_ItemsTable();

	var o = [
		Component_TestDataIndicator ( data.EffectivenessByDemo.IsTestData ),
		demographic_dropdown,
		dt.Html
	];

	$(".effectiveness-by-demo-container").html( o.join('') );

	if ( dt.ScriptCode != null ) eval ( dt.ScriptCode );

	// Change Handler: Demographic Dropdown Selection
	$('#effectiveness-by-demo-dropdown').change( function() {
		
		// Save Selection
		var demo = $(this).val();
		State_Set ( 'demo', demo );

		var query = {
			Filters: State_Get('filter'),
			EffectivenessByDemo: { Demo: State_Get('demo') }
		};
		
		Main_SubmitQuery ( query );
		
	});
}

function EffectivenessProfileByDemo_ItemsTable() {
	var o = [];
	
	var demovar = State_Get('demo');

	if ( demovar == null || demovar == '-1') return {Html:""};

	var filtervar = data.Filters.Items [ demovar ];
	var answers = filtervar.Answers;

	var headers = [
		{Label: "#", ClassName: 'text-cell'},
		{Label: "Valid N", ClassName: 'numeric-cell'},
		{Label: "Most Effective", ClassName: 'numeric-cell'},
		{Label: "Frustrated", ClassName: 'numeric-cell'},
		{Label: "Detached", ClassName: 'numeric-cell'},
		{Label: "Least Effective", ClassName: 'numeric-cell'},
		{Label: "Distribution", ClassName: 'barchart-cell'}
	];
	
	var bgcolors = ['#82C341', '#F99B1E', '#00B7F1', '#F03223'];
	var colors = ['white', 'white', 'white', 'white'];

	var distr = data.EffectivenessByDemo.Distribution;
	var table_data = [];

	for (var i=0; i<answers.length; ++i) {

		var n = distr.MostEffective[i] + distr.Frustrated[i] + distr.Detached[i] + distr.LeastEffective[i];

		var percent_distribution = Utils_PercentDistribution ([
			distr.MostEffective[i],
			distr.Frustrated[i],
			distr.Detached[i],
			distr.LeastEffective[i]
		]);

		var distribution_chart_html = Component_DistributionChart(
			percent_distribution, 
			colors, 
			bgcolors, 
			'20px', 
			'text-align: center; font-size: smaller;' 
		);
		
		var row_data = [
			answers[i].Label,
			n,
			percent_distribution[0],
			percent_distribution[1],
			percent_distribution[2],
			percent_distribution[3],
			distribution_chart_html
		];

		table_data.push ( row_data );
	}

	var dt = Component_DataTable (
		'items-table-epbydemo',
		'items-table',
		headers,
		table_data,
		true,
		true
	);

	return dt;
}
