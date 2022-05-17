function ResultsBreakdown_Page() {
	return {
		Label: meta.Labels['ResultsBreakdown'].Title,

		LeftPane: meta.Labels['ResultsBreakdown'].Label,

		RightPane: `
		<div id="resultsbreakdown-table-container"></div>
		`,

		ClassName: 'resultsbreakdown-container',
		Style: null,
		ShowFilterSummary: true
	};

}

function ResultsBreakdown_Render() {

	var o = [];

	var Items_dropdown = Component_Dropdown(
		'item',
		meta.Labels["labels.show"].Label,
		'resultsbreakdown-items-highlighter-dropdown',
		'',
		ParamValues_Items()
	);

	var BreakBy_dropdown = Component_Dropdown(
		'breakby',
		meta.Labels["labels.BreakBy"].Label,
		'resultsbreakdown-breakby-highlighter-dropdown',
		'',
		ParamValues_BreakBy()
	);

	o.push(`
        <div class="selector-group">
            ${Items_dropdown}
            ${BreakBy_dropdown}
        </div>
    `);

	o.push(Component_TestDataIndicator(data.isTestData));

	var dt = ResultsBreakdown_ItemsTable();
	o.push(dt.Html);

	$("#resultsbreakdown-table-container").html(o.join(''));
	if (dt.ScriptCode != null) eval(dt.ScriptCode);

	$('#resultsbreakdown-items-highlighter-dropdown').change(function () {

		// Save Selection
		var SelectedOption = $(this).val();
		State_Set('item', SelectedOption);

		/*
		var query = {
			page: 'ResultsBreakdown',
			parameter: 'item'
		};
		Main_SubmitQuery(query);
		*/

		Main_RefreshCurrentPage();
	});

	$('#resultsbreakdown-breakby-highlighter-dropdown').change(function () {

		// Save Selection
		var SelectedOption = $(this).val();
		State_Set('breakby', SelectedOption);

		/*
		var query = {
			page: 'ResultsBreakdown',
			parameter: 'breakby'
		};
		Main_SubmitQuery(query);
		*/

		Main_RefreshCurrentPage();
	});

}

function ResultsBreakdown_VariableId() {
    //return $('#resultsbreakdown-breakby-highlighter-dropdown').val();
	return $('#resultsbreakdown-breakby-highlighter-dropdown').val();
}

function ResultsBreakdown_ItemsTable() {
	// Return Value: {Html: <string>, [ScriptCode: <string>]}


    if ( ResultsBreakdown_MissingData() ) {
        return {
            Html: '<div class="loader" style="right: unset; position: relative;top: -50px; overflow: hidden; float: left;">Loading...</div>', 
            ScriptCode: "Main_SubmitQuery ( {ShowWaitMessage: false, DataRequest:[{ Type: 'ItemsAndDimensions.Breakdown', Breakdown:'" + ResultsBreakdown_VariableId() + "'}]} );"
        };
    }


	var formatter = Utils_FormatOutput;

	var item = State_Get('item');
	var dimensionId = item.indexOf('dimensions.') == 0 ? item.split('.')[1] : '';
	var itemId = item.indexOf('items.') == 0 ? item.split('.')[1] : '';

	var comparators = Main_CompactComparatorSet(); //State_Get('comparators');
	var NofComparators = comparators ? comparators.length : 0;
	var NofHeaderRows = (NofComparators > 0) ? 2 : 1;
	var sigClassname = '';

	var header_label = [
		//$('#resultsbreakdown-items-highlighter-dropdown option:selected').text(),
		$('#resultsbreakdown-breakby-highlighter-dropdown option:selected').text()
	].join(' / ');

	var headers = [
		[
			{ Label: "", ClassName: 'id-cell', rowspan: NofHeaderRows },
			{ Label: header_label, ClassName: 'text-cell', rowspan: NofHeaderRows },
			{ Label: meta.Labels["labels.ValidN"].Label, ClassName: 'numeric-cell', rowspan: NofHeaderRows },
			{ Label: meta.Labels["labels.PercentFav"].Label, ClassName: 'numeric-cell distribution-cell', rowspan: NofHeaderRows },
			{ Label: meta.Labels["labels.PercentNeu"].Label, ClassName: 'numeric-cell distribution-cell', rowspan: NofHeaderRows },
			{ Label: meta.Labels["labels.PercentUnfav"].Label, ClassName: 'numeric-cell distribution-cell', rowspan: NofHeaderRows },
			{ Label: meta.Labels["labels.Distribution"].Label, ClassName: 'numeric-cell', rowspan: NofHeaderRows }
		]
	];

	if (NofComparators > 0) {
		headers[0].push({ Label: meta.Labels["labels.FavvsComparator"].Label, ClassName: 'numeric-cell', colspan: NofComparators });
		var subheaders = [];
		for (var i = 0; i < NofComparators; i++) {
			subheaders.push({ Label: meta.Comparators[comparators[i]].Label, ClassName: 'numeric-cell' });
		}
		headers.push(subheaders);
	}

	var table_data = [];
	var rowdata = [];
	var item = {};

	var breakdown_variable_id = ResultsBreakdown_VariableId();

	if (breakdown_variable_id == null ) return '';

	//alert ('breakdown_variable_id=' + breakdown_variable_id );

	var items_key = ResultsBreakdown_Key(); //Main_GetKeyWithFilter('ITEMSX', config.CurrentWave, data.User.PersonalizedReportBase, breakdown_variable_id);
	var dimensions_key = Main_GetKeyWithFilter('DIMSX', config.CurrentWave, data.User.PersonalizedReportBase, breakdown_variable_id);

	if (itemId) {
		var item_id = itemId;
		var items_data = data[items_key];
		var type = 'Items';
		//item = items_data['410'][item_id]; // todo
		//var dist = Utils_CountsToPercents ( item.Dist );
	}
	else if (dimensionId) {
		var item_id = dimensionId;
		var items_data = data[dimensions_key];
		var type = 'Dimensions';
		//item = items_data['410'][item_id]; // todo
		//var dist = item.Dist;
	}


	if (true) { //('N' in item) {

		for (var j in items_data) {
			// example: j = "410" (Male)
			var option = items_data[j][item_id];
			var dist = option.Dist;
			if (itemId) dist = Utils_CountsToPercents ( dist );

			var opt = meta.Demographics[breakdown_variable_id].Answers[j];
            var label = (opt == null)
                ? NOT_AVAILABLE
                : opt.Label;
				
			rowdata = [
				{ Label: '0_', ClassName: 'id-cell' },
				{ Label: label, ClassName: 'text-cell' },
				{ Label: formatter(option.N), ClassName: 'numeric-cell' },
				{ Label: formatter(dist.Fav), ClassName: 'numeric-cell distribution-cell' },
				{ Label: formatter(dist.Neu), ClassName: 'numeric-cell distribution-cell' },
				{ Label: formatter(dist.Unfav), ClassName: 'numeric-cell distribution-cell' },
				{ Label: Component_DistributionChartStacked( dist ), datasort: dist.Fav, ClassName: 'text-cell' }
			];

			var comparators_data = Main_ComparatorsData_WithFilter( null, null, breakdown_variable_id, j ); //todo

			for (var k = 0; k < NofComparators; k++) {
				var comparator_id = comparators[k];
				var comparator_data = comparators_data[comparator_id];

				var value;
				var sigClassname;

				if (
					comparator_data == null
					||
					comparator_data[type] == null
					||
					comparator_data[type][item_id] == null
				) {
					value = NOT_AVAILABLE;
					sigClassname = '';
				}
				else {
					var sig_test = Utils_SigTest ( option, comparator_data[type][item_id], 'Fav' );
					sigClassname = sig_test.IsSignificant
						? ( sig_test.Diff > 0 ? 'cell-green' : 'cell-red')
						: '';

					value = (sig_test.Diff == null)
						? NOT_AVAILABLE
						: (sig_test.Diff>0 ? '+' : '') + sig_test.Diff + (sig_test.IsSignificant ? ' *' : '');

				}
				rowdata.push({ Label: value, datasort: value.replace(/\*/g,''), ClassName: 'numeric-cell ' + sigClassname });
			}

			table_data.push(rowdata);
		}
	}

	var hideColumns = [0];
	if (NofComparators>3) hideColumns.push(6);

	var numsortColumns = [];
	var LastColIndex = 6 + NofComparators;
	for (var k = 2; k <= LastColIndex ; k++) numsortColumns.push(k);

	var columnSettings = `
		'orderFixed': [ 0, 'asc' ],
		'order': [],
		'columnDefs': [
			{ 'targets': [ ${hideColumns.join(',')} ], 'visible': false },
			{ 'targets': [0,1], type: 'natural' },
			{ 'targets': [ ${numsortColumns.join(',')} ], type: 'numsort' }
		],
	`;


    var view_name = [
		Main_GetPageLabel ('#submenuitem-GroupExplore-ResultsBreakdown'),
		$('#resultsbreakdown-items-highlighter-dropdown option:selected').text(),
		$('#resultsbreakdown-breakby-highlighter-dropdown option:selected').text()		
	].join(' - ');

	var exportColumns = [];
	for (var k = 1; k < 6; k++) exportColumns.push(k);
	for (var k = 7; k < 7+NofComparators; k++) exportColumns.push(k);

    var buttonSettings = DataTable_ButtonSettings(exportColumns, view_name);

	var dt = Component_DataTable(
		"items-table-resultsbreakdown",
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

function ResultsBreakdown_Key() {
    return Main_GetKeyWithFilter('ITEMSX', config.CurrentWave, data.User.PersonalizedReportBase, ResultsBreakdown_VariableId() );
}

function ResultsBreakdown_Data() {
    var key = ResultsBreakdown_Key();

    return data[key];
}

function ResultsBreakdown_MissingData() {
    // return true if rendering cannot happen due to missing data

    var is_missing_data = (ResultsBreakdown_Data() == null);

    return is_missing_data;
}