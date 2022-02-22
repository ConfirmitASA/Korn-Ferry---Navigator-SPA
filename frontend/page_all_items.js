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
			{ Label: "#", ClassName: 'text-cell', rowspan: NofHeaderRows },
			{ Label: "Question", ClassName: 'text-cell', rowspan: NofHeaderRows },
			{ Label: "Valid N", ClassName: 'numeric-cell', rowspan: NofHeaderRows },
			{ Label: "Fav", ClassName: 'numeric-cell distribution-cell', rowspan: NofHeaderRows },
			{ Label: "Neu", ClassName: 'numeric-cell distribution-cell', rowspan: NofHeaderRows },
			{ Label: "Unfav", ClassName: 'numeric-cell distribution-cell', rowspan: NofHeaderRows },
			{ Label: "Distribution", ClassName: 'text-cell', rowspan: NofHeaderRows }
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
				{Label: '', ClassName: 'text-cell'},
				{Label: j, ClassName: 'text-cell'},
				{Label: meta.Labels.Items[j].Label, ClassName: 'text-cell'},
				{Label: item.N, ClassName: 'numeric-cell'},
				{Label: item.Distribution.Fav, ClassName: 'numeric-cell distribution-cell'},
				{Label: item.Distribution.Neu, ClassName: 'numeric-cell distribution-cell'},
				{Label: item.Distribution.Unfav, ClassName: 'numeric-cell distribution-cell'},
				{Label: Component_DistributionChart(item.Distribution), datasort: item.Distribution.Fav, ClassName: 'text-cell'}
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
			if (itemgroup=='AllDimensions' || itemgroup=='AllQuestionsOrdByDimension' || dimensionId==i) {
				var item = data.Dimensions[i];
				rowdata = [
					{Label: itemgroup=='AllDimensions' ? '' : (counter<10 ? '0'+counter : counter), ClassName: 'text-cell'},
					{Label: '&#9674;', ClassName: 'text-cell'},
					{Label: '<b>'+meta.Labels.Dimensions[i].Label+'</b>', ClassName: 'text-cell'},
					{Label: item.N, ClassName: 'numeric-cell'},
					{Label: item.Distribution.Fav, ClassName: 'numeric-cell distribution-cell'},
					{Label: item.Distribution.Neu, ClassName: 'numeric-cell distribution-cell'},
					{Label: item.Distribution.Unfav, ClassName: 'numeric-cell distribution-cell'},
					{Label: Component_DistributionChart(item.Distribution), datasort: item.Distribution.Fav, ClassName: 'text-cell'}
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
						{Label: counter<10 ? '0'+counter+'_' : counter+'_', ClassName: 'text-cell'},
						{Label: dimItems[j], ClassName: 'text-cell'},
						{Label: meta.Labels.Items[dimItems[j]].Label, ClassName: 'text-cell'},
						{Label: item.N, ClassName: 'numeric-cell'},
						{Label: item.Distribution.Fav, ClassName: 'numeric-cell distribution-cell'},
						{Label: item.Distribution.Neu, ClassName: 'numeric-cell distribution-cell'},
						{Label: item.Distribution.Unfav, ClassName: 'numeric-cell distribution-cell'},
						{Label: Component_DistributionChart(item.Distribution), datasort: item.Distribution.Fav, ClassName: 'text-cell'}
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

	var dt = Component_DataTable (
		"items-table-allitems",
		"items-table",
		headers,
		table_data,
		true,
		true
	);

	return dt;
}