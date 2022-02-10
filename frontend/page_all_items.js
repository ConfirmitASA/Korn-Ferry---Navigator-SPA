// AllItems

function AllItems_Page() {
	return 	{
		Label: 'All Items',
		
		LeftPane: `
		<p>We get it. Sometimes we all just need to massage the data in Excel and give it some extra love.</p>
		<p>If you\'re just looking to search or sort, you can do that right here. But we didn\'t forget the Excel button; it\'s here. Alongside a couple of friends.
		`,
		
		RightPane: `
		<div id="items-table-container"></div>
		`,

		ClassName: 'item-details-container',
		Style: null,
		ShowFilterSummary: true
	};

}

function AllItems_Render() {
	
	// Build Table
	var dt = AllItems_ItemsTable();

	var o = [];
    o.push ( Component_TestDataIndicator ( data.ENPS.IsTestData ) );
	o.push ( dt.Html );
	
	$("#items-table-container").html( o.join('') );
	if ( dt.ScriptCode != null ) eval ( dt.ScriptCode );

}

function AllItems_ItemsTable() {
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
		"items-table-all-items",
		"items-table",
		headers,
		table_data,
		true,
		true
	);

	return dt;
}