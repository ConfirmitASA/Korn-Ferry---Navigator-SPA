function AllResults_Page() {
	return 	{
		Label: meta.Pages['AllResults'].Title,

		LeftPane: meta.Pages['AllResults'].Label,

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
		meta.Labels["show"].Label,
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

	AllResults_handleTableActionIconClick();

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

	var formatter = Utils_FormatOutput;

	// temp code until the Source property is removed
	if (current_items.hasOwnProperty("Source"))
		delete current_items.Source;
	
	// Assign Question Numbers to items
	var counter = 0;
	for (var qid in current_items)
		current_items[qid].QNo = ++counter;
	
	var itemgroup = State_Get('itemgroup');
	var dimensionId = itemgroup.indexOf('dimensions.') == 0 ? itemgroup.split('.')[1] : '';

	var comparators = Main_CompactComparatorSet();

	var NofComparators = comparators ? comparators.length : 0;
	var NofHeaderRows = (NofComparators > 0) ? 2 : 1;
	var sigClassname = '';

	var comparators_data = Main_ComparatorsData_WithFilter();

	var is_all_dimensions_view = ( itemgroup == 'AllDimensions' );


	var headers = [
		[]
	];

	headers[0].push (
		{ Label: "", ClassName: 'text-cell', rowspan: NofHeaderRows },
		{ Label: "# ", ClassName: 'id-cell', rowspan: NofHeaderRows },
		{ Label: meta.Labels["Question"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows }
	);

	// don't show N for All Dimensions view
	if (!is_all_dimensions_view)
		headers[0].push (
			{ Label: meta.Labels["ValidN"].Label, ClassName: 'numeric-cell', rowspan: NofHeaderRows }
		);

	headers[0].push (
		{ Label: meta.Labels["PercentFav"].Label, ClassName: 'numeric-cell distribution-cell', rowspan: NofHeaderRows },
		{ Label: meta.Labels["PercentNeu"].Label, ClassName: 'numeric-cell distribution-cell', rowspan: NofHeaderRows },
		{ Label: meta.Labels["PercentUnfav"].Label, ClassName: 'numeric-cell distribution-cell', rowspan: NofHeaderRows },
		{ Label: meta.Labels["Distribution"].Label, ClassName: 'numeric-cell', rowspan: NofHeaderRows }
	);

	if (NofComparators > 0) {
		headers[0].push(
			{ Label: meta.Labels["FavvsComparator"].Label, ClassName: 'numeric-cell', colspan: NofComparators }
		);
		var subheaders = [];
		for (var i = 0; i < NofComparators; i++) {
			subheaders.push({ Label: meta.Comparators[comparators[i]].Label, ClassName: 'numeric-cell' });
		}
		headers.push(subheaders);
	}

	//add action button column
	headers[0].push( {Label: meta.Labels.Action.Label, ClassName: 'numeric-cell', rowspan: NofHeaderRows} )

	var table_data = [];
	var rowdata = [];



	if (itemgroup=='AllQuestions') {

		// Question View
		for (var qid in current_items) {
			var item = current_items[qid];
			var pct_dist = Utils_CountsToPercents ( item.Dist );

			rowdata = [
				{Label: '', ClassName: 'id-cell'},
				{Label: item.QNo, ClassName: 'id-cell'},
				{Label:  Main_GetQuestionText(qid), ClassName: 'text-cell'},
				{Label: formatter (item.N), ClassName: 'numeric-cell'},
				{Label: formatter (pct_dist.Fav), ClassName: 'numeric-cell distribution-cell'},
				{Label: formatter (pct_dist.Neu), ClassName: 'numeric-cell distribution-cell'},
				{Label: formatter (pct_dist.Unfav), ClassName: 'numeric-cell distribution-cell'},
				{Label: Component_DistributionChartStacked(pct_dist), datasort: pct_dist.Fav, ClassName: 'text-cell'}
			];

			for (var k = 0; k < NofComparators; k++) {
				var comparator_id = comparators[k];
				var comparator_data = comparators_data[comparator_id];

				var value;
				var sigClassname;

				if (
					comparator_data == null
					||
					comparator_data.Items == null
					||
					comparator_data.Items[qid] == null
				) {
					value = NOT_AVAILABLE;
					sigClassname = '';
				}
				else {
					var sig_test = Utils_SigTest ( item, comparator_data.Items[qid], 'Fav' );
					sigClassname = sig_test.IsSignificant
						? ( sig_test.Diff > 0 ? 'cell-green' : 'cell-red')
						: '';

					value = (sig_test.Diff == null)
						? NOT_AVAILABLE
						: (sig_test.Diff>0 ? '+' : '') + sig_test.Diff + (sig_test.IsSignificant ? ' *' : '');

				}
				rowdata.push({ Label: value, datasort: parseFloat(value), ClassName: 'numeric-cell ' + sigClassname });
			}

			//check if item has been added to Focus Areas
			//set action icon to remove icon if so
			let isItemAddedAsFocusArea = FocusAreas_IsItemAlreadyAdded(qid);
			let actionButtonClass = isItemAddedAsFocusArea ? 'remove-action table_remove-item-minus-circle' : 'add-action table_add-item-plus-circle__thin';

			let actionButton = `<div class="action-cell"><div class="action-icon ${actionButtonClass}" id = "question-${qid}-button" ></div></div>`;
			rowdata.push({Label: actionButton, ClassName: 'numeric-cell'});

			table_data.push(rowdata);
		}
	}
	else {

		// Some type of Dimension View
		var counter=0;
		for (var i in current_dimensions) {
			var dId = counter<10 ? '0'+counter : counter;
			var qId = dId + '_';
			if (itemgroup=='AllDimensions' || itemgroup=='AllQuestionsOrdByDimension' || dimensionId==i) {

				var dimension = current_dimensions[i];
				var pct_dist = dimension.Dist; // Dimension distributions are already percentages
				
				rowdata = [];

				rowdata.push (
					{Label: ( itemgroup=='AllDimensions' ? "": dId ), ClassName: 'id-cell'},
					{Label: '&#9674;', ClassName: 'id-cell'},
					{Label: '<b>' + meta.Dimensions[i].Label + '</b>', ClassName: 'text-cell'}
				);
				
				if (!is_all_dimensions_view)
					rowdata.push (
						{Label: '', ClassName: 'numeric-cell'} // don't show N value for dimensions
					);
				
				rowdata.push (
					{Label: formatter(pct_dist.Fav), ClassName: 'numeric-cell distribution-cell'},
					{Label: formatter(pct_dist.Neu), ClassName: 'numeric-cell distribution-cell'},
					{Label: formatter(pct_dist.Unfav), ClassName: 'numeric-cell distribution-cell'},
					{Label: Component_DistributionChartStacked(pct_dist), datasort: pct_dist.Fav, ClassName: 'text-cell'}
				);

				for (var k = 0; k < NofComparators; k++) {
					var comparator_id = comparators[k];
					var comparator_data = comparators_data[comparator_id];
	
					var value;
					var sigClassname;
	
					if ( 
						comparator_data == null 
						|| 
						comparator_data.Dimensions == null
						||
						comparator_data.Dimensions[i] == null 
					) {
						value = NOT_AVAILABLE;
						sigClassname = '';
					}
					else {
						var sig_test = Utils_SigTest ( dimension, comparator_data.Dimensions[i], 'Fav', true );
						sigClassname = sig_test.IsSignificant
							? ( sig_test.Diff > 0 ? 'cell-green' : 'cell-red')
							: '';
	
						value = (sig_test.Diff == null)
							? NOT_AVAILABLE
							: (sig_test.Diff>0 ? '+' : '') + sig_test.Diff + (sig_test.IsSignificant ? ' *' : '');
	
					}
					rowdata.push({ Label: value, datasort: parseFloat(value), ClassName: 'numeric-cell ' + sigClassname });
				}

				//check if item has been added to Focus Areas
				//set action icon to remove icon if so
				let isItemAddedAsFocusArea = FocusAreas_IsItemAlreadyAdded(i);
				let actionButtonClass = isItemAddedAsFocusArea ? 'remove-action table_remove-item-minus-circle' : 'add-action table_add-item-plus-circle__thin';

				let actionButton = `<div class="action-cell"><div class="action-icon ${actionButtonClass}" id = "dimension-${i}-button" ></div></div>`;
				rowdata.push({Label: actionButton, ClassName: 'numeric-cell'});

				table_data.push(rowdata);
			}
			if (itemgroup=='AllQuestionsOrdByDimension' || dimensionId==i) {

				// Add Questions from this Dimension
				var dimItems = meta.Dimensions[i].Items;
				for (var j = 0; j < dimItems.length; j++) {
					var item_id = dimItems[j];
					var item = current_items[item_id];

					// Check if question exists in data (this is only a temp problem with test data, in real life we shouldn't have to do this test)
					if ( item != null ) {
						var pct_dist = Utils_CountsToPercents ( item.Dist );

						rowdata = [
							{Label: qId, ClassName: 'id-cell'},
							{Label: item.QNo, ClassName: 'id-cell'},
							{Label: Main_GetQuestionText(dimItems[j]), ClassName: 'text-cell'},
							{Label: formatter(item.N), ClassName: 'numeric-cell'},
							{Label: formatter(pct_dist.Fav), ClassName: 'numeric-cell distribution-cell'},
							{Label: formatter(pct_dist.Neu), ClassName: 'numeric-cell distribution-cell'},
							{Label: formatter(pct_dist.Unfav), ClassName: 'numeric-cell distribution-cell'},
							{Label: Component_DistributionChartStacked(pct_dist), datasort: pct_dist.Fav, ClassName: 'text-cell'}
						];

						for (var k = 0; k < NofComparators; k++) {
							var comparator_id = comparators[k];
							var comparator_data = comparators_data[comparator_id];
			
							var value;
							var sigClassname;
			
							if (
								comparator_data == null
								||
								comparator_data.Items == null
								||
								comparator_data.Items[item_id] == null
							) {
								value = NOT_AVAILABLE;
								sigClassname = '';
							}
							else {
								var sig_test = Utils_SigTest ( item, comparator_data.Items[item_id], 'Fav' );
								sigClassname = sig_test.IsSignificant
									? ( sig_test.Diff > 0 ? 'cell-green' : 'cell-red')
									: '';
			
								value = (sig_test.Diff == null)
									? NOT_AVAILABLE
									: (sig_test.Diff>0 ? '+' : '') + sig_test.Diff + (sig_test.IsSignificant ? ' *' : '');
			
							}
							rowdata.push({ Label: value, datasort: parseFloat(value), ClassName: 'numeric-cell ' + sigClassname });
						}

						//check if item has been added to Focus Areas
						//set action icon to remove icon if so
						let isItemAddedAsFocusArea = FocusAreas_IsItemAlreadyAdded(item_id);
						let actionButtonClass = isItemAddedAsFocusArea ? 'remove-action table_remove-item-minus-circle' : 'add-action table_add-item-plus-circle__thin';

						let actionButton = `<div class="action-cell"><div class="action-icon ${actionButtonClass}" id = "question-${item_id}-button" ></div></div>`;
						rowdata.push({Label: actionButton, ClassName: 'numeric-cell'});

						table_data.push(rowdata);
					}
				}
			}
			counter++;
		}
	}

	var barchartCol = is_all_dimensions_view ? 6 : 7;

	var hideColumns = [0];
	if (NofComparators>3) hideColumns.push(barchartCol);

	var numsortColumns = [];
	var LastColIndex = 6 + NofComparators + (is_all_dimensions_view ? 0 : 1) + 1; //+1 for action column
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
	
	for (var k = 1; k < barchartCol; k++) exportColumns.push(k);
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

function AllResults_handleTableActionIconClick() {

	$('#allresults-table-container').find('.action-icon').click(function (event) {

		event.stopPropagation();
		event.preventDefault();

		let button_id = $(this).attr('id').split('-');

		if($(this).hasClass('add-action')) {
			Utils_SetActionIconToREMOVE(this);

			let newFocusArea = {
				itemId: button_id[1],
				isDimension: button_id[0] === 'dimension'
			}

			FocusAreas_AddItem(newFocusArea);
		} else {
			if ($(this).hasClass('remove-action')) {
				Utils_SetActionIconToADD(this);
				FocusAreas_RemoveItem(button_id[1]);
			}
		}

		FocusAreas_UpdateFocusAreasCounterSpan();
	});

}