// KeyDrivers

function KeyDrivers_Page() {
    return {
        Label: meta.Pages.KeyDrivers.Title,

        // Left Pane
        LeftPane: meta.Pages.KeyDrivers.Label,

        // Right Pane
        RightPane: `
		<div id="keyDriversTableContainer">
		</div>
		`,

        ClassName: 'flip-card-container',
        Style: null,
        ShowFilterSummary: true
    }
};

function KeyDrivers_Render() {

    var dt = KeyDrivers_GetKeyDriversTable();

    $('#keyDriversTableContainer').html(dt.Html);
    if (dt.ScriptCode != null) eval(dt.ScriptCode);
}

function KeyDrivers_GetKeyDriversTable() {

    var comparators = Main_CompactComparatorSet(); //State_Get('comparators');
    var NofComparators = comparators ? comparators.length : 0;
    var NofHeaderRows = (NofComparators > 0) ? 2 : 1;

    // Table Headers
    var headers = [
        [
            {Label: "#", ClassName: 'numeric-cell', colspan: 1, rowspan: NofHeaderRows},
            {Label: meta.Labels["Question"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows},
            {Label: meta.Labels.Dimension.Label, ClassName: 'numeric-cell', rowspan: NofHeaderRows},
            {Label: meta.Labels.ImpactOnEngagement.Label, ClassName: 'numeric-cell', rowspan: NofHeaderRows},
            {Label: meta.Labels.ImpactOnEnablement.Label, ClassName: 'numeric-cell', rowspan: NofHeaderRows},
            {Label: meta.Labels["ValidN"].Label, ClassName: 'numeric-cell', rowspan: NofHeaderRows},
            {
                Label: meta.Labels["PercentFav"].Label,
                ClassName: 'numeric-cell distribution-cell',
                rowspan: NofHeaderRows
            },
        ]
    ];

    if (NofComparators > 0) {
        headers[0].push({
            Label: meta.Labels["FavvsComparator"].Label,
            ClassName: 'numeric-cell',
            colspan: NofComparators
        });
        var subheaders = [];
        for (var i = 0; i < NofComparators; i++) {
            subheaders.push({Label: meta.Comparators[comparators[i]].Label, ClassName: 'numeric-cell'});
        }
        headers.push(subheaders);
    }

    // Table Data
    var table_data = [];
    var rowdata = [];
    var formatter = Utils_FormatOutput;

    var keyDriversImpactData = KeyDrivers_GetDataForDrivers();

    var items_data = Main_CurrentItemsData_WithFilter();

    var comparators_data = Main_ComparatorsData_WithFilter();

    for(var item in keyDriversImpactData) {
        var itemData = items_data[item];
        var pct_distribution = Utils_CountsToPercents ( itemData.Dist );

        var cellImpactOnEngagement = keyDriversImpactData[item].ImpactOnEngagement;
        var cellImpactOnEnablement = keyDriversImpactData[item].ImpactOnEnablement;

        rowdata = [
            {Label: itemData.QNo, ClassName: 'id-cell'},
            {Label: Main_GetQuestionText(item), ClassName: 'text-cell'},
            {Label: meta.Dimensions[keyDriversImpactData[item].DimensionId].Label, ClassName: 'numeric-cell'},
            {Label: formatter(cellImpactOnEngagement), ClassName: 'numeric-cell', datasort: !!cellImpactOnEngagement ? (cellImpactOnEngagement) : 100},
            {Label: formatter(cellImpactOnEnablement), ClassName: 'numeric-cell', datasort: !!cellImpactOnEnablement ? (cellImpactOnEnablement) : 100},
            {Label: formatter(itemData.N), ClassName: 'numeric-cell', datasort: formatter(itemData.N)},
            {Label: formatter(pct_distribution.Fav), ClassName: 'numeric-cell distribution-cell'},
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
                comparator_data.Items[item] == null 
            ) {
                value = NOT_AVAILABLE;
                sigClassname = '';
            }
            else {
                var sig_test = Utils_SigTest ( itemData, comparator_data.Items[item], 'Fav' );
                sigClassname = sig_test.IsSignificant
                    ? ( sig_test.Diff > 0 ? 'cell-green' : 'cell-red')
                    : '';

                value = (sig_test.Diff == null)
                    ? NOT_AVAILABLE
                    : (sig_test.Diff>0 ? '+' : '') + sig_test.Diff + (sig_test.IsSignificant ? ' *' : '');
            }

            rowdata.push({
                Label: value,
                datasort: parseFloat(value), //.replace(/\*/g, ''),
                ClassName: 'numeric-cell ' + sigClassname
            });
        }

        table_data.push(rowdata);
    }

    var numsortColumns = [];
	var LastColIndex = 6 + NofComparators;
	for (var k = 5; k <= LastColIndex ; k++) numsortColumns.push(k);

    var columnSettings = `
		'order': [ 0, 'asc' ],
		'columnDefs': [
			{ 'targets': [0,1,2,3,4], type: 'natural' },
			{ 'targets': [ ${numsortColumns.join(',')} ], type: 'numsort' }
		],
	`;

    var exportColumns = [];
    for (var k = 0; k < 6; k++) exportColumns.push(k);
    for (var k = 7; k < 7 + NofComparators; k++) exportColumns.push(k);

    var view_name = Main_GetPageLabel ('#submenuitem-GroupHeadlines-KeyDrivers');
    var buttonSettings = DataTable_ButtonSettings(exportColumns, view_name);

    var dt = Component_DataTable(
        "keyDriversTable",
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

function KeyDrivers_GetDataForDrivers() {
    var metrics = data.Metrics;
    var addedItems = {};

    for (var i = 0; i < metrics.length; i++) {
        var metric = metrics[i];
        var dimension_id = metrics[i];

        var kda_key = Main_GetKey('KDA', config.CurrentWave, data.User.PersonalizedReportBase);
        var kda = data[kda_key];
        var drivers = kda[dimension_id];
        if (drivers == null) drivers = [];
    
        if (dimension_id === config.EngagementDimensionId || dimension_id === config.EnablementDimensionId) {
            for (var j = 0; j < drivers.length; j++) {
                var item_id = drivers[j];

                var impactOnEngagement = '';
                var impactOnEnablement = '';

                if (dimension_id === config.EngagementDimensionId) {
                    impactOnEngagement = (j+1); //driver.Impact;
                }

                if (dimension_id === config.EnablementDimensionId) {
                    impactOnEnablement = (j+1); //driver.Impact;
                }

                if (!!addedItems[item_id]) {
                    if (addedItems[item_id].ImpactOnEngagement === '') {
                        addedItems[item_id].ImpactOnEngagement = impactOnEngagement;
                    }

                    if (addedItems[item_id].ImpactOnEnablement === '') {
                        addedItems[item_id].ImpactOnEnablement = impactOnEnablement;
                    }
                } else {
                    addedItems[item_id] = {
                        DimensionId: Main_GetDimensionIdByItemId ( item_id ),
                        ImpactOnEngagement: impactOnEngagement,
                        ImpactOnEnablement: impactOnEnablement
                    }
                }
            }
        }
    }

    return addedItems;
}