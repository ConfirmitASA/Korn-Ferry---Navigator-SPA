function AllItems_Page() {
	return 	{
		Label: meta.Labels.pages['AllItems'].Title,

		LeftPane: meta.Labels.pages['AllItems'].Label,

		RightPane: `
		<div id="allitems-table-container"></div>
		`,

		ClassName: 'allitems-container',
		Style: null,
		ShowFilterSummary: true
	};

}

function AllItems_Render() {

	var o = [];

	var ItemGroups_dropdown = Component_Dropdown (
		'itemgroup',
		meta.Labels.labels["show"].Label,
		'allitems-itemgroups-highlighter-dropdown',
		'',
		ParamValues_ItemGroups()
	);
	o.push ( `
        ${ItemGroups_dropdown}
    `);

	o.push ( Component_TestDataIndicator(data.isTestData) );

	var dt = AllItems_ItemsTable();
	o.push ( dt.Html );

	$("#allitems-table-container").html( o.join('') );
	if ( dt.ScriptCode != null ) eval ( dt.ScriptCode );

	$('#allitems-itemgroups-highlighter-dropdown').change( function() {

		// Save Selection
		var SelectedOption = $(this).val();
		State_Set ( 'itemgroup', SelectedOption );

		var query = {
			page: 'AllItems',
			parameter: 'itemgroup'
		};
		Main_SubmitQuery ( query );

	});

}

function AllItems_ItemsTable() {
	// Return Value: {Html: <string>, [ScriptCode: <string>]}

	var itemgroup = State_Get('itemgroup');
	var dimensionId = itemgroup.indexOf('dimensions.') == 0 ? itemgroup.split('.')[1] : '';

	var comparators = State_Get('comparators');
	var NofComparators = comparators ? comparators.length : 0;
	var NofHeaderRows = (NofComparators > 0) ? 2 : 1;
	var sigClassname = '';

	var headers = [
		[
			{ Label: "", ClassName: 'text-cell', rowspan: NofHeaderRows },
			{ Label: "# ", ClassName: 'id-cell', rowspan: NofHeaderRows },
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

	var table_data = [];
	var rowdata = [];

	if (itemgroup=='AllQuestions') {
		for (var j in data.ItemsNew) {
			var item = data.ItemsNew[j];
			rowdata = [
				{Label: '', ClassName: 'id-cell'},
				{Label: j, ClassName: 'id-cell'},
				{Label: meta.Labels.Items[j].Label, ClassName: 'text-cell'},
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
	else {
		var counter=0;
		for (var i in data.Dimensions) {
			var dId = counter<10 ? '0'+counter : counter;
			var qId = dId+'_';
			if (itemgroup=='AllDimensions' || itemgroup=='AllQuestionsOrdByDimension' || dimensionId==i) {
				var item = data.Dimensions[i];
				rowdata = [
					{Label: ( itemgroup=='AllDimensions' ? "": dId ), ClassName: 'id-cell'},
					{Label: '&#9674;', ClassName: 'id-cell'},
					{Label: '<b>'+meta.Labels.Dimensions[i].Label+'</b>', ClassName: 'text-cell'},
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
			if (itemgroup=='AllQuestionsOrdByDimension' || dimensionId==i) {
				var dimItems = data.Dimensions[i].Items;
				for (var j = 0; j < dimItems.length; j++) {
					var item = data.ItemsNew[dimItems[j]];
					rowdata = [
						{Label: qId, ClassName: 'id-cell'},
						{Label: dimItems[j], ClassName: 'id-cell'},
						{Label: meta.Labels.Items[dimItems[j]].Label, ClassName: 'text-cell'},
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
			counter++;
		}
	}

	var hideColumns = [0];
	if (NofComparators>3) hideColumns.push(7);

	var columnSettings = `
		'orderFixed': [ 0, 'asc' ],
		'order': [ 1, 'asc' ],
		'columnDefs': [
			{ 'targets': [ ${hideColumns.join(',')} ], 'visible': false },
			{ 'targets': '_all', type: 'natural' }
		],
	`;

	var exportColumns = [];
	for (var k = 1; k < 7; k++) exportColumns.push(k);
	for (var k = 8; k < 8+NofComparators; k++) exportColumns.push(k);

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
		"items-table-allitems",
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