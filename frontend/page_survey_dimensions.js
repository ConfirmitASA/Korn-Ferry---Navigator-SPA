// Survey Dimensions (Currently more or less a copy of All Items)

function SurveyDimensions_Page() {
	return 	{
		Label: 'Survey Dimensions',
		
		LeftPane: meta.Labels.survey_dimensions.Label,
		
		RightPane: `
		<div id="survey-dimensions-table-container"></div>
		`,

		ClassName: 'survey-dimensions-details-container',
		Style: null,
		ShowFilterSummary: true
	};

}

function SurveyDimensions_Render() {
	
	// Build Table
	var dt = SurveyDimensions_ItemsTable();

	var o = [];
    o.push ( Component_TestDataIndicator ( data.ENPS.IsTestData ) );
	o.push ( dt.Html );
	
	$("#survey-dimensions-table-container").html( o.join('') );
	if ( dt.ScriptCode != null ) eval ( dt.ScriptCode );

}

function SurveyDimensions_ItemsTable() {
	// Return Value: {Html: <string>, [ScriptCode: <string>]}
	var headers = [
		{Label: "#", ClassName: 'numeric-cell'},
		{Label: "Question", ClassName: 'text-cell'},
		{Label: "Valid N", ClassName: 'numeric-cell'},
		{Label: "Fav", ClassName: 'numeric-cell distribution-cell'},
		{Label: "Neu", ClassName: 'numeric-cell distribution-cell'},
		{Label: "Unfav", ClassName: 'numeric-cell distribution-cell'},
		{Label: "Distribution", ClassName: 'text-cell'}
	];

	var bgcolors = ['#77bc1f', '#e0e0e0', '#d30f1d'];
	var colors = ['white', 'black', 'white'];
	var table_data = [];

	for (var i = 0; i < data.Items.length; ++i) {

		var item = data.Items[i];

		var distribution_chart_html = Component_DistributionChart( 
			[ item.Fav, item.Neu, item.Unfav ], 
			colors, 
			bgcolors, 
			'20px', 
			'text-align:center; font-size: smaller' 
		);

		var rowdata = [
			item.Id,
			item.Label,
			item.N,
			item.Fav,
			item.Neu,
			item.Unfav,
			distribution_chart_html
		];

		table_data.push ( rowdata );
	}

	var dt = Component_DataTable (
		"survey-dimensions-table-all-items",
		"survey-dimensions-table",
		headers,
		table_data,
		true,
		true
	);

	return dt;
}