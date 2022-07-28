function AllResults_Page() {
	return 	{
		Label: meta.Labels['AllResults'].Title,

		LeftPane: meta.Labels['AllResults'].Label,

		RightPane: `
		<div id="allresults-table-container"></div>
		`,

		ClassName: 'allresults-container',
		Style: null,
		ShowFilterSummary: true
	};

}

function AllResults_Render() {

	var o = [];

	var ItemGroups_dropdown = Component_Dropdown (
		'itemgroup',
		meta.Labels["labels.show"].Label,
		'allresults-itemgroups-highlighter-dropdown',
		'',
		ParamValues_ItemGroups()
	);
	o.push ( `
        ${ItemGroups_dropdown}
    `);

	o.push ( Component_TestDataIndicator(data.isTestData) );

	var dt = AllResults_ItemsTable();
	o.push ( dt.Html );

	$("#allresults-table-container").html( o.join('') );
	if ( dt.ScriptCode != null ) eval ( dt.ScriptCode );

	FocusAreas__handleTableActionIconClick('#items-table-allresults');

	$('#allresults-itemgroups-highlighter-dropdown').change( function() {

		// Save Selection
		var SelectedOption = $(this).val();
		State_Set ( 'itemgroup', SelectedOption );

		// The data should already be in the page, so let's redraw the page
		Main_RefreshCurrentPage();
	});

}

function AllResults_ItemsTable() {
	// Return Value: {Html: <string>, [ScriptCode: <string>]}

    var current_items = Main_CurrentItemsData_WithFilter();
    var current_dimensions = Main_CurrentDimensionsData_WithFilter();

	// temp code until the Source property is removed
	if (current_items.hasOwnProperty("Source"))
		delete current_items.Source;	
	
	var itemgroup = State_Get('itemgroup');
	var dimensionId = itemgroup.indexOf('dimensions.') == 0 ? itemgroup.split('.')[1] : '';

	var comparators = Main_CompactComparatorSet();
	var NofComparators = comparators ? comparators.length : 0;
	var NofHeaderRows = (NofComparators > 0) ? 2 : 1;

	var is_all_dimensions_view = ( itemgroup == 'AllDimensions' );

	var headers = [
		[]
	];

	headers[0].push (
		{ Label: "", ClassName: 'text-cell', rowspan: NofHeaderRows },
		{ Label: "# ", ClassName: 'id-cell', rowspan: NofHeaderRows },
		{ Label: meta.Labels["labels.Question"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows },
		{ Label: meta.Labels["labels.ValidN"].Label, ClassName: 'numeric-cell', rowspan: NofHeaderRows },
		{ Label: meta.Labels["labels.PercentFav"].Label, ClassName: 'numeric-cell distribution-cell', rowspan: NofHeaderRows },
		{ Label: meta.Labels["labels.PercentNeu"].Label, ClassName: 'numeric-cell distribution-cell', rowspan: NofHeaderRows },
		{ Label: meta.Labels["labels.PercentUnfav"].Label, ClassName: 'numeric-cell distribution-cell', rowspan: NofHeaderRows },
		{ Label: meta.Labels["labels.Distribution"].Label, ClassName: 'numeric-cell', rowspan: NofHeaderRows }
	);

	if (NofComparators > 0) {
		headers[0].push(
			{ Label: meta.Labels["labels.FavvsComparator"].Label, ClassName: 'numeric-cell', colspan: NofComparators }
		);
		var subheaders = [];
		for (var i = 0; i < NofComparators; i++) {
			subheaders.push({ Label: meta.Comparators[comparators[i]].Label, ClassName: 'numeric-cell' });
		}
		headers.push(subheaders);
	}

	//add action button column
	headers[0].push( {Label: meta.Labels['labels.Action'].Label, ClassName: 'numeric-cell', rowspan: NofHeaderRows} )

	var table_data = [];

	if (itemgroup=='AllQuestions') {
		// Question View
		for (var qid in current_items) {
			table_data.push( AllResults_AddItemToTable(qid, false, '') );
		}
	}
	else {
		// Some type of Dimension View
		var counter=0;
		for (var i in current_dimensions) {
			var sort_dId = counter<10 ? '0'+counter : counter;
			var sort_qId = sort_dId + '_';
			if (itemgroup=='AllDimensions' || itemgroup=='AllQuestionsOrdByDimension' || dimensionId==i) {
				table_data.push( AllResults_AddItemToTable(i, true, is_all_dimensions_view ? '' : sort_dId) );
			}
			if (itemgroup=='AllQuestionsOrdByDimension' || dimensionId==i) {
				// Add Questions from this Dimension
				var dimItems = meta.Dimensions[i].Items;
				for (var j = 0; j < dimItems.length; j++) {
					// Check if question exists in data (this is only a temp problem with test data, in real life we shouldn't have to do this test)
					if ( current_items[dimItems[j]] != null ) {	
						table_data.push( AllResults_AddItemToTable(dimItems[j], false, sort_qId) );
					}
				}
			}
			counter++;
		}
	}

	var ValidNCol = 3;
	var barchartCol = 7;
	var hideColumns = [0];
	if (is_all_dimensions_view) hideColumns.push(ValidNCol);
	if (NofComparators>3) hideColumns.push(barchartCol);

	var numsortColumns = [];
	var LastColIndex = 7 + NofComparators + 1; //+1 for action column
	for (var k = 3; k <= LastColIndex ; k++) numsortColumns.push(k);

	var columnSettings = `
		'orderFixed': [ 0, 'asc' ],
		'order': [ 1, 'asc' ],
		'columnDefs': [
			{ 'targets': [ ${hideColumns.join(',')} ], 'visible': false },
			{ 'targets': [0,1,2], type: 'natural' },
			{ 'targets': [ ${numsortColumns.join(',')} ], type: 'numsort' }
		],
	`;

	var exportColumns = [];
	
	for (var k = 1; k < ValidNCol; k++) exportColumns.push(k);
	if (!is_all_dimensions_view) exportColumns.push(ValidNCol);
	for (var k = ValidNCol+1; k < barchartCol; k++) exportColumns.push(k);
	for (var k = barchartCol+1; k < barchartCol+1+NofComparators; k++) exportColumns.push(k);

	var view_name = $('#allresults-itemgroups-highlighter-dropdown option:selected').text();
	var buttonSettings = DataTable_ButtonSettings(exportColumns, view_name);

	var dt = Component_DataTable (
		"items-table-allresults",
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

function AllResults_AddItemToTable(itemId, isDimension, sortId) {
    var formatter = Utils_FormatOutput;

    var comparators = Main_CompactComparatorSet();
    var NofComparators = comparators ? comparators.length : 0;
    var comparators_data = Main_ComparatorsData_WithFilter();

    var current_data = isDimension
        ? Main_CurrentDimensionsData_WithFilter()
        : Main_CurrentItemsData_WithFilter();

    var obj = current_data[itemId]; // Either Item or Dimension

    var label = isDimension
        ? '<b>'+meta.Dimensions[itemId].Label+'</b>'
        : meta.Items[itemId].Label;

    var id = isDimension
        ? '&#9674;' // diamond symbol
        : obj.QNo;
	
	var validN = isDimension
        ? ''	// don't show N value for dimensions
        : formatter (obj.N);

    var pct_dist = isDimension
        ? obj.Dist // dimensions already store rounded percentages in the distribution
        : Utils_CountsToPercents(obj.Dist);

    var rowdata = [];
    rowdata.push(
		{Label: sortId, ClassName: 'id-cell'},
		{Label: id, ClassName: 'id-cell'},
		{Label: label, ClassName: 'text-cell'},
		{Label: validN, ClassName: 'numeric-cell'},
		{Label: formatter (pct_dist.Fav), ClassName: 'numeric-cell distribution-cell'},
		{Label: formatter (pct_dist.Neu), ClassName: 'numeric-cell distribution-cell'},
		{Label: formatter (pct_dist.Unfav), ClassName: 'numeric-cell distribution-cell'},
		{Label: Component_DistributionChartStacked(pct_dist), datasort: pct_dist.Fav, ClassName: 'text-cell'}
    );

	for (var k = 0; k < NofComparators; k++) {
		var comparator_id = comparators[k];
		var comparator_data = comparators_data[comparator_id];
		var comparator_data_itemsdata = isDimension ? comparator_data.Dimensions : comparator_data.Items;

        var value;
        var sigClassname;

        if (
            comparator_data == null
            ||
            comparator_data_itemsdata == null
            ||
            comparator_data_itemsdata[itemId] == null
        ) {
            value = NOT_AVAILABLE;
            sigClassname = '';
        }
        else {
            var sig_test = Utils_SigTest(obj, comparator_data_itemsdata[itemId], 'Fav', isDimension);
            sigClassname = sig_test.IsSignificant
                ? (sig_test.Diff > 0 ? 'cell-green' : 'cell-red')
                : '';

            value = (sig_test.Diff == null)
                ? NOT_AVAILABLE
                : (sig_test.Diff > 0 ? '+' : '') + sig_test.Diff + (sig_test.IsSignificant ? ' *' : '');

        }
		rowdata.push({ Label: value, datasort: parseFloat(value), ClassName: 'numeric-cell ' + sigClassname });
	}

	//check if item has been added to Focus Areas
	//set action icon to remove icon if so
	let isItemAddedAsFocusArea = FocusAreas_IsItemSelected(itemId);
	let actionButtonClass = isItemAddedAsFocusArea ? 'remove-action table_remove-item-minus-circle' : 'add-action table_add-item-plus-circle__thin';
	let actionIdDimensionOrQuestion = isDimension ? 'dimension' : 'question';
	let actionButton = `<div class="action-cell"><div class="action-icon ${actionButtonClass}" id = "${actionIdDimensionOrQuestion}-${itemId}-button" ></div></div>`;
	rowdata.push({Label: actionButton, ClassName: 'numeric-cell'});

    return rowdata;
}


