// Demographic Highlighter

function DemographicHeatmap_Page() {
    return {
        Label: meta.Labels.pages.DemographicHeatmap.Title,

        LeftPane: meta.Labels.pages.DemographicHeatmap.Label,

        RightPane: `
        <div id="Demographic-Heatmap-details">
        </div>
        `,

        ClassName: 'Demographic-Heatmap-container',
        Style: null,
        ShowFilterSummary: true
    };
}

function DemographicHeatmap_Render() {
    var o = [];

    o.push(Component_TestDataIndicator(data.isTestData));

    var dimensionsQuestions_dropdown = Component_Dropdown(
        'dimensions_questions',
        meta.Labels.labels.show.Label,
        'Demographic-Heatmap-dimensions-questions-dropdown',
        '',
        ParamValues_ItemGroups()
    );

    var breakby_dropdown = Component_Dropdown(
        'breakby',
        meta.Labels.labels.BreakBy.Label,
        'Demographic-Heatmap-breakby-dropdown',
        '',
        ParamValues_BreakBy()
    );

    var metric_switchComponent = Component_TwoOptionSwitch(
        'metric',
        meta.Labels.labels.metric.Label,
        'Demographic-Heatmap',
        ParamValues_DemographicHeatmap_Metric()
    );

    var comparators_switchComponent = Component_TwoOptionSwitch(
        'display_comparators',
        meta.Labels['plot_your_results.Displaycomparatorsas'].Label,
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

    o.push(dt.Html);

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

            $('#items-table-Demographic-Heatmap_wrapper').html(dt.Html);

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
        var query = {
            DemographicHeatmap: {
                DimensionsQuestions: State_Get('dimensions_questions'),
                Demo: State_Get('breakby'),
                Metric: State_Get('metric'),
                DisplayComparators: State_Get('display_comparators')
            },
            parameter: 'breakby'
        };

        Main_SubmitQuery(query);
    } else {
        if (selectorObj.parameterName === 'dimensions_questions') {
            //redraw rows
            var dataTable = $('#items-table-Demographic-Heatmap').DataTable();
            DemographicHeatmap_SortTable(dataTable, selectorObj.selectorElementValue);
        } else {
            var dt = DemographicHeatmap_GetItemsTable();

            $('#items-table-Demographic-Heatmap_wrapper').html(dt.Html);

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
        rowText = meta.Labels.drop_downs.AllDimensions.Label;
    } else {
        if (rowVar === 'AllQuestions') {
            rowText = meta.Labels.drop_downs.AllQuestions.Label;
        } else {
            if (rowVar === 'AllQuestionsOrdByDimension') {
                rowText = meta.Labels.drop_downs.AllQuestionsOrdByDimension.Label;
            } else {
                if (rowVar.indexOf('dimensions') >= 0) {
                    rowText = meta.Labels.drop_downs.DIMENSION.Label + ' ' + meta.Labels.Dimensions[rowVar.split('.')[1]].Label;
                }
            }
        }
    }

    var newTitle = `${rowText} for ${meta.Labels.drop_downs[metricVar].Label} (${meta.Labels.drop_downs[comparatorsVar].Label}) by ${meta.Labels.BreakBy[breakbyVar].Label}`;

    $('#Demographic-Heatmap-table-title').html(newTitle);
}

//only show items/dimensions based on the selector
//predefined order is also dynamic so all items and all dimensions could be sorted independently
//for all questions ordered by dimension keep dimension->item sorting
function DemographicHeatmap_SortTable(dataTable, showOption) {
    if (showOption === 'AllDimensions') {
        DemographicHeatmap_ResetTable(dataTable);
        dataTable.order.fixed({pre: [1, "asc"]});
        dataTable.columns(1).search('1').draw();

    } else {
        if (showOption === 'AllQuestions') {
            DemographicHeatmap_ResetTable(dataTable);
            dataTable.order.fixed({pre: [1, 'asc']});
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
    dataTable.order.fixed({pre: [[0, "asc"], [1, "desc"]]});
    dataTable.draw();
}

function DemographicHeatmap_GetItemsTable() {
    var o = [];

    var rowVar = State_Get('dimensions_questions');

    if (rowVar == null || rowVar == '-1') {
        return {Html: ""};
    }

    var breakbyVar = State_Get('breakby');
    var metricVar = State_Get('metric');
    var comparatorsVar = State_Get('display_comparators');

    var breakByAnswerIds = Object.keys(meta.Labels.BreakBy[breakbyVar].Options);

    var headers = [
        [
            {Label: 'dimensionN', ClassName: 'text-cell', colspan: 1, rowspan: 3},
            {Label: 'dimensionFlag', ClassName: 'text-cell', colspan: 1, rowspan: 3},
            {Label: 'dimensionId', ClassName: 'text-cell', colspan: 1, rowspan: 3},
            {Label: 'isExclusive', ClassName: 'text-cell', colspan: 1, rowspan: 3},
            {Label: "#", ClassName: 'numeric-cell', colspan: 1, rowspan: 3},
            {Label: 'Question', ClassName: 'text-cell', colspan: 1, rowspan: 3},
            {Label: `${meta.Labels.BreakBy.Hierarchy.Title}`, ClassName: 'numeric-cell', colspan: 1, rowspan: 1},
            {Label: `${meta.Labels.BreakBy[breakbyVar].Label}`, ClassName: 'numeric-cell', colspan: breakByAnswerIds.length, rowspan: 1}
        ]
    ];

    //var breakByAnswers = meta.Labels['questions.' + breakbyVar].Answers;
    var headerRow1 = [];
    var headerRow2 = [];

    headerRow1.push({Label: `N=${data.Questions[breakbyVar].N}`, ClassName: 'numeric-cell', colspan: 1, rowspan: 2},);

    for (var i = 0; i < breakByAnswerIds.length; i++) {
        headerRow1.push({
            Label: `${meta.Labels.BreakBy[breakbyVar].Options[breakByAnswerIds[i]].Label}`,
            ClassName: 'numeric-cell',
            colspan: 1,
            rowspan: 1
        })
        headerRow2.push({
            Label: `N=${data.Questions[breakbyVar].Options[breakByAnswerIds[i]].N}`,
            ClassName: 'numeric-cell',
            colspan: 1,
            rowspan: 1
        })
    }

    headers.push(headerRow1);
    headers.push(headerRow2);

    var table_data = [];

    var dimensionOptions = Object.keys(data.Dimensions);

    var addedItems = [];

    for (var i in dimensionOptions) {
        table_data.push(DemographicHeatmap_GetDimensionRowData(i, dimensionOptions[i], breakbyVar, breakByAnswerIds, metricVar, comparatorsVar));

        var itemOptions = data.Dimensions[dimensionOptions[i]].Items;

        for (var j in itemOptions) {
            table_data.push(DemographicHeatmap_GetItemRowData(i, dimensionOptions[i], itemOptions[j], breakbyVar, breakByAnswerIds, metricVar, comparatorsVar, addedItems));
            addedItems.push(itemOptions[j]);
        }
    }

    var columnSettings = `
			'columnDefs': [
				{ targets: [0, 1, 2, 3], visible: false },
				{ targets: [5], width: 200 },
				{ targets: [4], type: "natural" }
			],
		`;

    var exportColumns = [];

    for (var k = 4; k < 4 + 3 + breakByAnswerIds.length; k++) {
        exportColumns.push(k);
    }

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

function DemographicHeatmap_GetDimensionRowData(dimensionN, dimensionId, breakbyVar, breakByAnswerIds, metricVar, comparatorsVar) {
    var totalColumnRowValue;

    if (metricVar == 'PercentFavorable') {
        totalColumnRowValue = data.Dimensions[dimensionId].Distribution.Fav;
    } else {
        if (metricVar == 'PercentUnfavorable') {
            totalColumnRowValue = data.Dimensions[dimensionId].Distribution.Unfav;
        } else {
            totalColumnRowValue = null;
        }
    }

    var row_data = [
        {Label: dimensionN, ClassName: 'numeric-cell dimension-row-cell'},
        {Label: '1', ClassName: 'text-cell dimension-row-cell'},
        {Label: dimensionId, ClassName: 'text-cell dimension-row-cell'},
        {Label: '1', ClassName: 'text-cell dimension-row-cell'},
        {Label: '&#9674;', ClassName: 'numeric-cell dimension-row-cell'},
        {Label: meta.Labels.Dimensions[dimensionId].Label, ClassName: 'text-cell dimension-row-cell'},
        {Label: totalColumnRowValue, ClassName: 'numeric-cell dimension-row-cell'}
    ];

    for (var i = 0; i < breakByAnswerIds.length; i++) {
        var breakByRowValue = data.Dimensions[dimensionId].BreakBy.Options[breakByAnswerIds[i]].Distribution;
        var vsTotalValue = data.Dimensions[dimensionId].BreakBy.Options[breakByAnswerIds[i]].vsTotal;

        var sigTestingClass = '';
        var cellValue = '';

        if (metricVar == 'PercentFavorable') {
            if (comparatorsVar == 'DifferencetoTotal') {
                cellValue = vsTotalValue.Fav;
            } else {
                cellValue = breakByRowValue.Fav;
            }

            sigTestingClass = (vsTotalValue.Fav.indexOf('*') > 0) ? (parseInt(vsTotalValue.Unfav) < 0 ? 'cell-red' : 'cell-green') : '';
        } else {
            if (metricVar == 'PercentUnfavorable') {
                if (comparatorsVar == 'DifferencetoTotal') {
                    cellValue = vsTotalValue.Unfav;
                } else {
                    cellValue = breakByRowValue.Unfav;
                }

                sigTestingClass = (vsTotalValue.Unfav.indexOf('*') > 0) ? (parseInt(vsTotalValue.Unfav) < 0 ? 'cell-red' : 'cell-green') : '';
            } else {
                cellValue = null;
            }
        }

        var datasortValue = parseInt(cellValue, 10);

        row_data.push({Label: cellValue, ClassName: 'numeric-cell dimension-row-cell ' + sigTestingClass, datasort: datasortValue});
    }

    return row_data;
}

function DemographicHeatmap_GetItemRowData(dimensionN, dimensionId, itemId, breakbyVar, breakByAnswerIds, metricVar, comparatorsVar, addedItems) {
    var totalColumnRowValue;

    if (metricVar == 'PercentFavorable') {
        totalColumnRowValue = data.ItemsNew[itemId].Distribution.Fav;
    } else {
        if (metricVar == 'PercentUnfavorable') {
            totalColumnRowValue = data.ItemsNew[itemId].Distribution.Unfav;
        } else {
            totalColumnRowValue = null;
        }
    }

    var isExclusiveItem = addedItems.filter(function (element) {
        return element === itemId;
    });

    var row_data = [
        {Label: dimensionN, ClassName: 'text-cell item-row-cell'},
        {Label: '0', ClassName: 'text-cell item-row-cell'},
        {Label: dimensionId, ClassName: 'text-cell item-row-cell'},
        {Label: isExclusiveItem.length > 0 ? '0' : '1', ClassName: 'text-cell item-row-cell'},
        {Label: itemId, ClassName: 'numeric-cell item-row-cell'},
        {Label: meta.Labels.Items[itemId].Label, ClassName: 'text-cell item-row-cell'},
        {Label: totalColumnRowValue, ClassName: 'numeric-cell item-row-cell'}
    ];

    for (var i = 0; i < breakByAnswerIds.length; i++) {
        var breakByRowValue = data.ItemsNew[itemId].BreakBy.Options[breakByAnswerIds[i]].Distribution;
        var vsTotalValue = data.ItemsNew[itemId].BreakBy.Options[breakByAnswerIds[i]].vsTotal;

        var sigTestingClass = '';
        var cellValue = '';

        if (metricVar == 'PercentFavorable') {
            if (comparatorsVar == 'DifferencetoTotal') {
                cellValue = vsTotalValue.Fav;
            } else {
                cellValue = breakByRowValue.Fav;
            }

            sigTestingClass = (vsTotalValue.Fav.indexOf('*') > 0) ? (parseInt(vsTotalValue.Unfav) < 0 ? 'cell-red' : 'cell-green') : '';
        } else {
            if (metricVar == 'PercentUnfavorable') {
                if (comparatorsVar == 'DifferencetoTotal') {
                    cellValue = vsTotalValue.Unfav;
                } else {
                    cellValue = breakByRowValue.Unfav;
                }

                sigTestingClass = (vsTotalValue.Unfav.indexOf('*') > 0) ? (parseInt(vsTotalValue.Unfav) < 0 ? 'cell-red' : 'cell-green') : '';
            } else {
                cellValue = null;
            }
        }

        var datasortValue = parseInt(cellValue, 10);

        row_data.push({Label: cellValue, ClassName: 'numeric-cell dimension-row-cell ' + sigTestingClass, datasort: datasortValue});
    }

    return row_data;
}