// Demographic Heatmap

function DemographicHeatmap_Page() {
    return {
        Label: meta.Labels.DemographicHeatmap.Title,

        LeftPane: meta.Labels.DemographicHeatmap.Label,

        RightPane: `
        <div id="Demographic-Heatmap-details">
        </div>
        `,

        ClassName: 'Demographic-Heatmap-container',
        Style: null,
        ShowFilterSummary: true
    };
}

function DemographicHeatmap_PageId() {
    return 'submenuitem-GroupExplore-DemographicHeatmap';
}

function DemographicHeatmap_Render() {
    var o = [];

    o.push(Component_TestDataIndicator(data.isTestData));

    var dimensionsQuestions_dropdown = Component_Dropdown(
        'dimensions_questions',
        meta.Labels['labels.show'].Label,
        'Demographic-Heatmap-dimensions-questions-dropdown',
        '',
        ParamValues_ItemGroups()
    );

    var breakby_dropdown = Component_Dropdown(
        'breakby',
        meta.Labels['labels.BreakBy'].Label,
        'Demographic-Heatmap-breakby-dropdown',
        '',
        ParamValues_BreakBy()
    );

    var metric_switchComponent = Component_TwoOptionSwitch(
        'metric',
        meta.Labels['labels.metric'].Label,
        'Demographic-Heatmap',
        ParamValues_DemographicHeatmap_Metric()
    );

    var comparators_switchComponent = Component_TwoOptionSwitch(
        'display_comparators',
        meta.Labels['labels.DisplayComparatorsAs'].Label,
        'Demographic-Heatmap',
        ParamValues_DemographicHeatmap_Comparators()
    );

    o.push(`
        <div class="selector-group">
            ${dimensionsQuestions_dropdown}
            ${breakby_dropdown}
            ${metric_switchComponent}
            ${comparators_switchComponent}
        </div>
    `);


    o.push(`
        <h3 id="Demographic-Heatmap-table-title"></h3>
    `);

    var dt = DemographicHeatmap_GetItemsTable();

    o.push('<div id="items-table-Demographic-Heatmap_container">');
    o.push(dt.Html);
    o.push('</div>');

    $('#Demographic-Heatmap-details').html(
        o.join('')
    );

    if (!!dt.ScriptCode) {
        eval(dt.ScriptCode);
    }

    DemographicHeatmap_UpdateTableTitle();

    var dataTable = $('#items-table-Demographic-Heatmap').DataTable();
    DemographicHeatmap_SortTable(dataTable, State_Get('dimensions_questions'));

    // Change Handler: Dimension/Question Dropdown Selection
    $('#Demographic-Heatmap-dimensions-questions-dropdown').change(function () {
        var dimensionQuestionElementValue = $(this).val();
        var selectorObj = {
            selectorElementValue: dimensionQuestionElementValue,
            parameterName: 'dimensions_questions'
        }
        DemographicHeatmap_HandleSelectorChange(selectorObj);
    });

    // Change Handler: Demographic Dropdown Selection
    $('#Demographic-Heatmap-breakby-dropdown').change(function () {
        var breakbyElementValue = $(this).val();
        State_Set ('breakby', breakbyElementValue);
        var selectorObj = {
            selectorElementValue: breakbyElementValue,
            parameterName: 'breakby'
        }
        DemographicHeatmap_HandleSelectorChange(selectorObj);
    });

    $('#Demographic-Heatmap-metric-left').click(function () {
        var metricElementValue = $(this).val();
        var selectorObj = {
            selectorElementValue: metricElementValue,
            parameterName: 'metric',
            parameterElementId: 'Demographic-Heatmap-metric-left'
        }

        DemographicHeatmap_HandleSwitchClick(selectorObj);
    });

    $('#Demographic-Heatmap-metric-right').click(function () {
        var metricElementValue = $(this).val();
        var selectorObj = {
            selectorElementValue: metricElementValue,
            parameterName: 'metric',
            parameterElementId: 'Demographic-Heatmap-metric-right'
        }

        DemographicHeatmap_HandleSwitchClick(selectorObj);
    });

    $('#Demographic-Heatmap-display_comparators-left').click(function () {
        var comparatorsElementValue = $(this).val();
        var selectorObj = {
            selectorElementValue: comparatorsElementValue,
            parameterName: 'display_comparators',
            parameterElementId: 'Demographic-Heatmap-display_comparators-left'
        }
        DemographicHeatmap_HandleSwitchClick(selectorObj);
    });

    $('#Demographic-Heatmap-display_comparators-right').click(function () {
        var comparatorsElementValue = $(this).val();
        var selectorObj = {
            selectorElementValue: comparatorsElementValue,
            parameterName: 'display_comparators',
            parameterElementId: 'Demographic-Heatmap-display_comparators-right'
        }
        DemographicHeatmap_HandleSwitchClick(selectorObj);
    });
}

function DemographicHeatmap_HandleSwitchClick(selectorObj) {
    var currentMetricVal = State_Get(selectorObj.parameterName);

    if (currentMetricVal != selectorObj.selectorElementValue) {
        var labelsForInput = $('#' + selectorObj.parameterElementId).parent().find('label');
        if (labelsForInput.length > 0) {
            State_Set(selectorObj.parameterName, selectorObj.selectorElementValue);

            DemographicHeatmap_UpdateTableTitle();

            for (var i = 0; i < labelsForInput.length; i++) {
                $(labelsForInput[i]).toggleClass('label-checked');
            }

            var dt = DemographicHeatmap_GetItemsTable();

            $('#items-table-Demographic-Heatmap_container').html(dt.Html);

            if (!!dt.ScriptCode) {
                eval(dt.ScriptCode);
            }

            var dataTable = $('#items-table-Demographic-Heatmap').DataTable();
            DemographicHeatmap_SortTable(dataTable, State_Get('dimensions_questions'));
        }
    }
}

function DemographicHeatmap_HandleSelectorChange(selectorObj) {
    // Save Selection
    State_Set(selectorObj.parameterName, selectorObj.selectorElementValue);

    DemographicHeatmap_UpdateTableTitle();

    if (selectorObj.parameterName == 'breakby') {

        Main_RefreshCurrentPage();
    } else {
        if (selectorObj.parameterName === 'dimensions_questions') {
            //redraw rows
            var dataTable = $('#items-table-Demographic-Heatmap').DataTable();
            DemographicHeatmap_SortTable(dataTable, selectorObj.selectorElementValue);
        } else {
            var dt = DemographicHeatmap_GetItemsTable();

            $('#items-table-Demographic-Heatmap_container').html(dt.Html);

            if (!!dt.ScriptCode) {
                eval(dt.ScriptCode);
            }

            var dataTable = $('#items-table-Demographic-Heatmap').DataTable();
            DemographicHeatmap_SortTable(dataTable, State_Get('dimensions_questions'));
        }
    }
}

function DemographicHeatmap_UpdateTableTitle() {
    var rowVar = State_Get('dimensions_questions');
    var breakbyVar = State_Get('breakby');
    var metricVar = State_Get('metric');
    var comparatorsVar = State_Get('display_comparators');

    var rowText = '';

    if (rowVar === 'AllDimensions') {
        rowText = meta.Labels['labels.AllDimensions'].Label;
    } else {
        if (rowVar === 'AllQuestions') {
            rowText = meta.Labels['labels.AllQuestions'].Label;
        } else {
            if (rowVar === 'AllQuestionsOrdByDimension') {
                rowText = meta.Labels['labels.AllQuestionsOrdByDimension'].Label;
            } else {
                if (rowVar.indexOf('dimensions') >= 0) {
                    rowText = meta.Labels['labels.Dimension'].Label + ' ' + meta.Dimensions[rowVar.split('.')[1]].Label;
                }
            }
        }
    }

    var newTitle = meta.Labels['labels.SubHeading'].Label;
    newTitle = newTitle.replace('[DATA]', rowText)
        .replace('[BENCHMARK]', `${meta.Labels['labels.' + metricVar].Label} (${meta.Labels['labels.' + comparatorsVar].Label})`)
        .replace('[DEMO]', meta.Demographics[breakbyVar].Label);

    $('#Demographic-Heatmap-table-title').html(newTitle);
}

//only show items/dimensions based on the selector
//predefined order is also dynamic so all items and all dimensions could be sorted independently
//for all questions ordered by dimension keep dimension->item sorting
function DemographicHeatmap_SortTable(dataTable, showOption) {
    if (showOption === 'AllDimensions') {
        DemographicHeatmap_ResetTable(dataTable);
        dataTable.order.fixed({ pre: [1, "asc"] });
        dataTable.columns(1).search('1').draw();

    } else {
        if (showOption === 'AllQuestions') {
            DemographicHeatmap_ResetTable(dataTable);
            dataTable.order.fixed({ pre: [1, 'asc'] });
            dataTable.order([4, 'asc']);
            dataTable.columns(3).search('1');
            dataTable.columns(1).search('0').draw();
        } else {
            if (showOption === 'AllQuestionsOrdByDimension') {
                DemographicHeatmap_ResetTable(dataTable);
            } else {
                if (showOption.indexOf('dimensions') >= 0) {
                    DemographicHeatmap_ResetTable(dataTable);
                    dataTable.columns(2).search(showOption.split('.')[1]).draw();
                } else {
                    DemographicHeatmap_ResetTable(dataTable);
                }
            }
        }
    }
}

//remove any searches or sortings from the table
function DemographicHeatmap_ResetTable(dataTable) {
    dataTable.search('');
    dataTable.columns(1).search('');
    dataTable.columns(2).search('');
    dataTable.columns(3).search('');
    dataTable.order([]);
    dataTable.order.fixed({ pre: [[0, "asc"], [1, "desc"]] });
    dataTable.draw();
}

function DemographicHeatmap_GetItemsTable() {

    if ( DemographicHeatmap_MissingData() ) {
        return {
            Html: Main_Loader(),
            ScriptCode: "if (DemographicHeatmap_PageId() == State_GetCurrentPageId() ) Main_SubmitQuery ( {Requester: 'DemographicHeatmap_GetItemsTable', ShowWaitMessage: false, DataRequest:[{Type: 'N'}, { Type: 'N.Breakdown', Breakdown:'" + DemographicHeatmap_VariableId() + "'}, { Type: 'ItemsAndDimensions.Breakdown', Breakdown:'" + DemographicHeatmap_VariableId() + "'}]} );"
        };
    }


    var o = [];

    var rowVar = State_Get('dimensions_questions');

    if (rowVar == null || rowVar == '-1') {
        return { Html: "" };
    }

    var item_data = Main_CurrentItemsData_WithFilter();


    var breakbyVar = DemographicHeatmap_VariableId(); //State_Get('breakby');
    var metricVar = State_Get('metric');
    var comparatorsVar = State_Get('display_comparators');

    var breakByAnswerIds;

    if (breakbyVar == config.PFQ) {
        var data_key = Main_GetKeyWithFilter( 'ITEMSX', config.CurrentWave, data.User.PersonalizedReportBase, config.PFQ);
        breakByAnswerIds = Object.keys ( data[data_key] );
    } else {
        breakByAnswerIds = Object.keys(meta.Demographics[breakbyVar].Answers);
    }

    var key = Main_GetKeyWithFilter(
        'N',
        config.CurrentWave,
        data.User.PersonalizedReportBase // meta.Hierarchy.TopNode.Id
    ); // example: "N.2020.389.0"

    var n = data[key].N;

    var headers = [
        [
            { Label: 'dimensionN', ClassName: 'text-cell', colspan: 1, rowspan: 2 },
            { Label: 'dimensionFlag', ClassName: 'text-cell', colspan: 1, rowspan: 2 },
            { Label: 'dimensionId', ClassName: 'text-cell', colspan: 1, rowspan: 2 },
            { Label: 'isExclusive', ClassName: 'text-cell', colspan: 1, rowspan: 2 },
            { Label: "#", ClassName: 'numeric-cell', colspan: 1, rowspan: 2 },
            { Label: meta.Labels["labels.Question"].Label, ClassName: 'text-cell', colspan: 1, rowspan: 2 },
            { Label: meta.Hierarchy.Map[ data.User.PersonalizedReportBase /*meta.Hierarchy.TopNode.Id*/].Label + ' <div class="n-count">(N=' + n + ')</div>', ClassName: 'numeric-cell', colspan: 1, rowspan: 2 },
            { Label: meta.Demographics[breakbyVar].Label, ClassName: 'numeric-cell', colspan: breakByAnswerIds.length, rowspan: 1 }
        ]
    ];

    // Demograpic Labels (including N=...)
    var headerRow1 = [];
    var key = Main_GetKeyWithFilter('NX', config.CurrentWave, data.User.PersonalizedReportBase, DemographicHeatmap_VariableId() );
    var nx = data[key];

    for (var i = 0; i < breakByAnswerIds.length; i++) {
        if(breakbyVar == config.PFQ && breakByAnswerIds[i] === data.User.PersonalizedReportBase) {
            continue; //don't show column for top node under One Level Down as it is already shown
        }
        var n = nx[breakByAnswerIds[i]].N;

        var option;

        if (breakbyVar == config.PFQ) {
            option = meta.Hierarchy.Map[breakByAnswerIds[i]];
        } else {
            option = meta.Demographics[breakbyVar].Answers[breakByAnswerIds[i]];
        }

        headerRow1.push({
            Label: `${option.Label}` + ' <div class="n-count">(N=' + n + ')</div>',
            ClassName: 'numeric-cell',
            colspan: 1,
            rowspan: 1
        })

    }

    headers.push(headerRow1);

    var table_data = [];

    var dimensionOptions = Object.keys(meta.Dimensions);

    var addedItems = [];

    for (var i in dimensionOptions) {
        table_data.push(DemographicHeatmap_GetDimensionRowData(i, dimensionOptions[i], breakByAnswerIds, metricVar, comparatorsVar));

        var itemOptions = meta.Dimensions[dimensionOptions[i]].Items;

        for (var j in itemOptions) {
            table_data.push(
                DemographicHeatmap_GetItemRowData(
                    i,
                    dimensionOptions[i],
                    itemOptions[j],
                    breakByAnswerIds,
                    metricVar,
                    comparatorsVar,
                    addedItems
                )
            );
            addedItems.push(itemOptions[j]);
        }
    }

    var numsortColumns = [];
    var LastColIndex = 6 + breakByAnswerIds;
    for (var k = 6; k <= LastColIndex ; k++) numsortColumns.push(k);

    var columnSettings = `
			'columnDefs': [
				{ targets: [0, 1, 2, 3], visible: false },
				{ targets: [0, 1, 2, 3, 4, 5], type: "natural" },
                { 'targets': [ ${numsortColumns.join(',')} ], type: 'numsort' }
			],
			'fixedColumns': {
                leftColumns: 2,                
            },
		`;

    var exportColumns = [];

    var BBlength = breakbyVar == config.PFQ ? breakByAnswerIds.length - 1 : breakByAnswerIds.length;
    for (var k = 4; k < 4 + 3 + BBlength; k++) {
        exportColumns.push(k);
    }

    var view_name = [
        Main_GetPageLabel ('#submenuitem-GroupExplore-DemographicHeatmap'),  // Page Name
        $('#Demographic-Heatmap-breakby-dropdown option:selected').text(), // Selected breakdown variable label
        $('#Demographic-Heatmap-metric-switch input[value=' + state.Parameters.metric + ']').prev().text(), // example: "% Favorable"
        $('#Demographic-Heatmap-display_comparators-switch input[value=' + state.Parameters.display_comparators + ']').prev().text() // example: "Absolute Value"
    ].join(' - ');

    var buttonSettings = DataTable_ButtonSettings(exportColumns, view_name);

    var dt = Component_DataTable(
        'items-table-Demographic-Heatmap',
        'items-table',
        headers,
        table_data,
        true,
        true,
        columnSettings,
        true,
        buttonSettings
    );

    return dt;
}

function DemographicHeatmap_GetDimensionRowData(dimensionN, dimensionId, breakByAnswerIds, metricVar, comparatorsVar) {
    var totalColumnRowValue;


    // Overall Dimension score (no breakout)
    var key = Main_GetKeyWithFilter('DIMS', config.CurrentWave, data.User.PersonalizedReportBase /*meta.Hierarchy.TopNode.Id*/);
    var dimensions_data = data[key];
    var overall_data = dimensions_data[dimensionId];
    var dist = overall_data.Dist;

    switch ( metricVar ) {
        case 'PercentFavorable': totalColumnRowValue = dist.Fav; break;
        case 'PercentUnfavorable': totalColumnRowValue = dist.Unfav; break;
        default: totalColumnRowValue = null;
    }

    var row_data = [
        { Label: dimensionN, ClassName: 'numeric-cell dimension-row-cell' },
        { Label: '1', ClassName: 'text-cell dimension-row-cell' },
        { Label: dimensionId, ClassName: 'text-cell dimension-row-cell' },
        { Label: '1', ClassName: 'text-cell dimension-row-cell' },
        { Label: '&#9674;', ClassName: 'numeric-cell dimension-row-cell' },
        { Label: meta.Dimensions[dimensionId].Label, ClassName: 'text-cell dimension-row-cell' },
        { Label: Utils_FormatOutput(totalColumnRowValue), ClassName: 'numeric-cell dimension-row-cell' }
    ];


    // Breakout Dimension Scores (DIMSX)
    var breakdown_variable_id = State_Get('breakby');
    var breakdown_data_key = Main_GetKeyWithFilter('DIMSX', config.CurrentWave, data.User.PersonalizedReportBase, breakdown_variable_id);
    var breakdown_data = data[breakdown_data_key];

    var property;
    switch ( metricVar ) {
        case 'PercentFavorable': property = 'Fav'; break;
        case 'PercentUnfavorable': property = 'Unfav'; break;
    }

    // Loop over all breakdown values
    for (var i = 0; i < breakByAnswerIds.length; i++) {
        if(breakdown_variable_id == config.PFQ && breakByAnswerIds[i] === data.User.PersonalizedReportBase) {
            continue; //skip top node for One Level Down breakby
        }
        var breakdown_code = breakByAnswerIds[i];
        var breakdown_dimension_data = breakdown_data[breakdown_code][dimensionId];
        var dist = breakdown_dimension_data.Dist;
        var compColumnRowValue = dist[property];
        var cellData = DemographicHeatmap_SetCellData(metricVar, comparatorsVar, overall_data, breakdown_dimension_data, true);

        row_data.push(
            {
                Label: cellData.value,
                ClassName: 'numeric-cell dimension-row-cell ' + cellData.class,
                datasort: cellData.datasortValue
            }
        );
    }

    return row_data;
}

function DemographicHeatmap_GetItemRowData(dimensionN, dimensionId, itemId, breakByAnswerIds, metricVar, comparatorsVar, addedItems) {
    var totalColumnRowValue;

    var key = Main_GetKeyWithFilter('ITEMS', config.CurrentWave, data.User.PersonalizedReportBase /*meta.Hierarchy.TopNode.Id*/);
    var items_data = data[key];

    Main_AssignQNo ( items_data );

    var overall_data = items_data[itemId];
    var dist = Utils_CountsToPercents ( overall_data.Dist );

    switch ( metricVar ) {
        case 'PercentFavorable': totalColumnRowValue = dist.Fav; break;
        case 'PercentUnfavorable': totalColumnRowValue = dist.Unfav; break;
        default: totalColumnRowValue = null;
    }

    var isExclusiveItem = addedItems.filter(function (element) {
        return element === itemId;
    });

    var row_data = [
        { Label: dimensionN, ClassName: 'text-cell item-row-cell' },
        { Label: '0', ClassName: 'text-cell item-row-cell' },
        { Label: dimensionId, ClassName: 'text-cell item-row-cell' },
        { Label: isExclusiveItem.length > 0 ? '0' : '1', ClassName: 'text-cell item-row-cell' },
        { Label: items_data[itemId].QNo, ClassName: 'numeric-cell item-row-cell' },
        { Label: meta.Items[itemId].Label, ClassName: 'text-cell item-row-cell' },
        { Label: Utils_FormatOutput(totalColumnRowValue), ClassName: 'numeric-cell item-row-cell' }
    ];


    // Breakout Dimension Scores (DIMSX)
    var breakdown_variable_id = State_Get('breakby');
    var breakdown_data_key = Main_GetKeyWithFilter('ITEMSX', config.CurrentWave, data.User.PersonalizedReportBase, breakdown_variable_id);
    var breakdown_data = data[breakdown_data_key];

    var property;
    switch ( metricVar ) {
        case 'PercentFavorable': property = 'Fav'; break;
        case 'PercentUnfavorable': property = 'Unfav'; break;
    }

    for (var i = 0; i < breakByAnswerIds.length; i++) {
        if(breakdown_variable_id == config.PFQ && breakByAnswerIds[i] === data.User.PersonalizedReportBase) {
            continue; //skip top node for One Level Down breakby
        }
        var breakdown_code = breakByAnswerIds[i];
        var breakdown_item_data = breakdown_data[breakdown_code][itemId];
        var dist = Utils_CountsToPercents ( breakdown_item_data.Dist );
        var compColumnRowValue = dist[property];
        var cellData = DemographicHeatmap_SetCellData(metricVar, comparatorsVar, overall_data, breakdown_item_data, false);

        row_data.push(
            {
                Label: cellData.value,
                ClassName: 'numeric-cell dimension-item-cell ' + cellData.class,
                datasort: cellData.datasortValue
            }
        );
    }

    return row_data;
}

function DemographicHeatmap_SetCellData(metricVar, comparatorsVar, overall, comp, isDimension) {
    var cellData = {};
    var sigTestingClass = '';
    var cellValue = '';

    var sigClassname;
    var metricVar = state.Parameters.metric; // example: 'PercentFavorable'
    var property;

    switch ( metricVar ) {
        case 'PercentFavorable': property = 'Fav'; break;
        case 'PercentUnfavorable': property = 'Unfav'; break;
    }

    if (
        overall == null
        ||
        comp == null
    ) {
        cellValue = NOT_AVAILABLE;
        sigClassname = '';
    }
    else {
        // This is seen from the perspective of the breakout group
        var sig_test = Utils_SigTest( comp, overall, property, isDimension);
        sigClassname = sig_test.IsSignificant
            ? (
                sig_test.Diff > 0
                    ? (property == 'Fav' ? 'cell-green' : 'cell-red')
                    : (property == 'Fav' ? 'cell-red' : 'cell-green')
            )
            : '';

        cellValue = (sig_test.Diff == null)
            ? NOT_AVAILABLE
            : (
                // Add Plus sign if this is a positive differnece and we are reporting on diff to total
                (sig_test.Diff) > 0 && (comparatorsVar == 'DifferencetoTotal')
                    ? '+'
                    : ''
            ) +

            // Value (diff or absolute)
            (comparatorsVar == 'AbsoluteValue'
                    ? isDimension ? comp.Dist[property] : Utils_CountsToPercents ( comp.Dist )[property]
                    : sig_test.Diff
            ) +

            // Add SigTest indicator if applicable
            (sig_test.IsSignificant ? ' *' : '');

    }

    cellData.value = cellValue;
    cellData.datasortValue = parseFloat(cellValue);
    cellData.class = sigClassname;

    return cellData;
}


function DemographicHeatmap_VariableId() {
    return $('#Demographic-Heatmap-breakby-dropdown').val();
}

function DemographicHeatmap_Keys() {
    return [
        Main_GetKeyWithFilter('ITEMSX', config.CurrentWave, data.User.PersonalizedReportBase, State_Get('breakby')),
        Main_GetKeyWithFilter('NX', config.CurrentWave, data.User.PersonalizedReportBase, State_Get('breakby'))
    ];
}

function DemographicHeatmap_Data() {
    var keys = DemographicHeatmap_Keys();
    var o = [];
    for (var i=0; i<keys.length; ++i)
        o.push ( data[keys[i]] );

    return o;
}

function DemographicHeatmap_MissingData() {
    // return true if rendering cannot happen due to missing data

    var is_missing_data = false;

    var DHbb = DemographicHeatmap_VariableId();
    if (DHbb != State_Get('breakby')) return is_missing_data = true;

    var d = DemographicHeatmap_Data(); // array of data
    for (var i=0; i<d.length; ++i)
        if ( d[i] == null) is_missing_data = true;

    return is_missing_data;
}