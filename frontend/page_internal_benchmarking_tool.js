// Demographic Highlighter

function BenchmarkingTool_Page() {
    return {
        Label: 'Internal Benchmarking Tool',

        LeftPane: meta.Labels.demographic_highlighter.Label,

        RightPane: `
        <div id="internal-benchmarking-tool-details">
            ${Utils_LoremIpsum()}
        </div>
        `,

        ClassName: 'internal-benchmarking-tool-container',
        Style: null,
        ShowFilterSummary: true
    };
}

function BenchmarkingTool_Render() {
    var o = [];

    o.push(Component_TestDataIndicator ( data.isTestData ));

    var dimensionsQuestions_dropdown = Component_Dropdown (
        'dimensions_questions',
        meta.Labels['labels.show'].Label,
        'internal-benchmarking-tool-dimensions-questions-dropdown',
        '',
        ParamValues_InternalBenchmarkingTool_Dimensions_Questions(),
    );

    var breakby_dropdown = Component_Dropdown (
        'breakby',
        meta.Labels['labels.BreakBy'].Label,
        'internal-benchmarking-tool-breakby-dropdown',
        '',
        ParamValues_Demo()
    );

    var metric_dropdown = Component_Dropdown (
        'metric',
        meta.Labels['labels.metric'].Label,
        'internal-benchmarking-tool-metric-dropdown',
        '',
        ParamValues_InternalBenchmarkingTool_Metric(),
    );

    var comparators_dropdown = Component_Dropdown (
        'display_comparators',
        meta.Labels['plot_your_results.Displaycomparatorsas'].Label,
        'internal-benchmarking-tool-comparators-dropdown',
        '',
        ParamValues_InternalBenchmarkingTool_Comparators(),
    );

    o.push(`
        <div class="selector-group">
            ${dimensionsQuestions_dropdown}
            ${breakby_dropdown}
            ${metric_dropdown}
            ${comparators_dropdown}
        </div>
    `);

    o.push ( `
        <h3 id="internal-benchmarking-tool-table-title"></h3>
    `);

    var dt = BenchmarkingTool_GetItemsTable();

    o.push(dt.Html);

    $('#internal-benchmarking-tool-details').html(
        o.join('')
    );

    if(!!dt.ScriptCode) {
        eval ( dt.ScriptCode );
    }

    BenchmarkingTool_UpdateTableTitle();

    var dataTable = $('#items-table-internalBenchmarkingTool').DataTable();
    BenchmarkingTool_SortTable(dataTable, State_Get('dimensions_questions'));

    // Change Handler: Dimension/Question Dropdown Selection
    $('#internal-benchmarking-tool-dimensions-questions-dropdown').change( function() {
        var dimensionQuestionElementValue = $(this).val();
        var selectorObj = {
            selectorElementValue: dimensionQuestionElementValue,
            parameterName: 'dimensions_questions'
        }
        BenchmarkingTool_HandleSelectorChange(selectorObj);
    });

    // Change Handler: Demographic Dropdown Selection
    $('#internal-benchmarking-tool-breakby-dropdown').change( function() {
        var breakbyElementValue = $(this).val();
        var selectorObj = {
            selectorElementValue: breakbyElementValue,
            parameterName: 'breakby'
        }
        BenchmarkingTool_HandleSelectorChange(selectorObj);
    });

    // Change Handler: Metric Dropdown Selection
    $('#internal-benchmarking-tool-metric-dropdown').change( function() {
        var metricElementValue = $(this).val();
        var selectorObj = {
            selectorElementValue: metricElementValue,
            parameterName: 'metric'
        }
        BenchmarkingTool_HandleSelectorChange(selectorObj);
    });

    // Change Handler: Demographic Dropdown Selection
    $('#internal-benchmarking-tool-comparators-dropdown').change( function() {
        var comparatorsElementValue = $(this).val();
        var selectorObj = {
            selectorElementValue: comparatorsElementValue,
            parameterName: 'display_comparators'
        }
        BenchmarkingTool_HandleSelectorChange(selectorObj);
    });

}

function BenchmarkingTool_HandleSelectorChange(selectorObj) {
    // Save Selection
    State_Set(selectorObj.parameterName, selectorObj.selectorElementValue);

    BenchmarkingTool_UpdateTableTitle();

    if(selectorObj.parameterName == 'breakby') {
        var query = {
            Filters: State_Get('filter'),
            InternalBenchmarkingTool: {
                DimensionsQuestions: State_Get('dimensions_questions'),
                Demo: State_Get('breakby'),
                Metric: State_Get('metric'),
                DisplayComparators: State_Get('display_comparators')
            }
        };

        Main_SubmitQuery(query);
    } else {
        if(selectorObj.parameterName === 'dimensions_questions') {
            //redraw rows
            var dataTable = $('#items-table-internalBenchmarkingTool').DataTable();
            BenchmarkingTool_SortTable(dataTable, selectorObj.selectorElementValue);
        } else {
            var dt = BenchmarkingTool_GetItemsTable();

            $('#items-table-internalBenchmarkingTool_wrapper').html(dt.Html);

            if(!!dt.ScriptCode) {
                eval ( dt.ScriptCode );
            }

            var dataTable = $('#items-table-internalBenchmarkingTool').DataTable();
            BenchmarkingTool_SortTable(dataTable, State_Get('dimensions_questions'));
        }
    }
}

function BenchmarkingTool_UpdateTableTitle() {
    var rowVar = State_Get('dimensions_questions');
    var breakbyVar = State_Get('breakby');
    var metricVar = State_Get('metric');
    var comparatorsVar = State_Get('display_comparators');

    console.log(rowVar);

    var rowText = '';

    if(rowVar === 'AllDimensions') {
        rowText = meta.Labels["drop_downs.AllDimensions"].Label;
    } else {
        if(rowVar === 'AllQuestions') {
            rowText = meta.Labels["drop_downs.AllQuestions"].Label;
        } else {
            if(rowVar === 'AllQuestionsOrdByDimension') {
                rowText = meta.Labels["drop_downs.AllQuestionsOrdByDimension"].Label;
            } else {
                if(rowVar.indexOf('dimensions') >= 0) {
                    rowText = meta.Labels["drop_downs.DIMENSION"].Label + ' ' + meta.Labels[rowVar].Label;
                }
            }
        }
    }

    var newTitle = `${rowText} for ${meta.Labels["drop_downs." + metricVar].Label} (${meta.Labels["drop_downs." + comparatorsVar].Label}) by ${meta.Labels["questions." + breakbyVar].Label}`;

    $('#internal-benchmarking-tool-table-title').html(newTitle);
}

//only show items/dimensions based on the selector
//predefined order is also dynamic so all items and all dimensions could be sorted independently
//for all questions ordered by dimension keep dimension->item sorting
function BenchmarkingTool_SortTable(dataTable, showOption) {
    if(showOption === 'AllDimensions') {
        BenchmarkingTool_ResetTable(dataTable);
        dataTable.order.fixed( { pre: [1, "asc" ] } );
        dataTable.columns(1).search('1').draw();

    } else {
        if (showOption === 'AllQuestions') {
            BenchmarkingTool_ResetTable(dataTable);
            dataTable.order.fixed( { pre: [ 1, 'asc' ] } );
            dataTable.order( [ 3, 'asc' ] );
            dataTable.columns(1).search('0').draw();
        } else {
            if(showOption === 'AllQuestionsOrdByDimension') {
                BenchmarkingTool_ResetTable(dataTable);
            } else {
                if (showOption.indexOf('dimensions') >= 0) {
                    BenchmarkingTool_ResetTable(dataTable);
                    dataTable.columns(2).search(showOption).draw();
                } else {
                    BenchmarkingTool_ResetTable(dataTable);
                }
            }
        }
    }
}

//remove any searches or sortings from the table
function BenchmarkingTool_ResetTable(dataTable) {
    dataTable.search('');
    dataTable.columns(1).search('');
    dataTable.columns(2).search('');
    dataTable.order([]);
    dataTable.order.fixed( { pre: [[ 0, "asc" ], [ 1, "desc" ]] } );
    dataTable.draw();
}

function BenchmarkingTool_GetItemsTable() {
    var o = [];

    var rowVar = State_Get('dimensions_questions');

    if (rowVar == null || rowVar == '-1') {
        return { Html: "" };
    }

    var breakbyVar = State_Get('breakby');
    var metricVar = State_Get('metric');
    var comparatorsVar = State_Get('display_comparators');

    var breakByAnswerIds = Object.keys(meta.Labels['questions.' + breakbyVar].Answers);

    var headers = [
        [
            {Label: 'dimensionN', ClassName: 'text-cell', ColSpan: 1, RowSpan: 3},
            {Label: 'dimensionFlag', ClassName: 'text-cell', ColSpan: 1, RowSpan: 3},
            {Label: 'dimensionId', ClassName: 'text-cell', ColSpan: 1, RowSpan: 3},
            {Label: "#", ClassName: 'numeric-cell', ColSpan: 1, RowSpan: 3},
            {Label: 'Question', ClassName: 'text-cell', ColSpan: 1, RowSpan: 3},
            {Label: `${data.Report.ReportBase}`, ClassName: 'numeric-cell', ColSpan: 1, RowSpan: 1},
            {Label: `${meta.Labels['questions.' + breakbyVar].Label}`, ClassName: 'numeric-cell', ColSpan: breakByAnswerIds.length, RowSpan: 1}
        ]
    ];

    //var breakByAnswers = meta.Labels['questions.' + breakbyVar].Answers;
    var headerRow1 = [];
    var headerRow2 = [];

    headerRow1.push({Label: `N=${data.Questions['questions.' + breakbyVar].N}`, ClassName: 'numeric-cell', ColSpan: 1, RowSpan: 2},);

    for(var i = 0; i < breakByAnswerIds.length; i++) {
        headerRow1.push({Label: `${meta.Labels['questions.' + breakbyVar].Answers[breakByAnswerIds[i]].Label}`, ClassName: 'numeric-cell', ColSpan: 1, RowSpan: 1})
        headerRow2.push({Label: `N=${data.Questions['questions.' + breakbyVar].Answers[breakByAnswerIds[i]].N}`, ClassName: 'numeric-cell', ColSpan: 1, RowSpan: 1})
    }

    headers.push(headerRow1);
    headers.push(headerRow2);

    var table_data = [];

    var dimensionOptions = Object.keys(data.Dimensions);

    for(var i in dimensionOptions) {
        table_data.push(BenchmarkingTool_GetDimensionRowData(i, dimensionOptions[i], breakbyVar, breakByAnswerIds, metricVar, comparatorsVar));

        var itemOptions = data.Dimensions[dimensionOptions[i]].Items;

        for (var j in itemOptions) {
            table_data.push(BenchmarkingTool_GetItemRowData(i, dimensionOptions[i], 'items.' + itemOptions[j], breakbyVar, breakByAnswerIds, metricVar, comparatorsVar));
        }
    }

    var innerDimensionSortingSettings = {
        isApplied: true,
        hiddenColumns: [0, 1, 2],
        orderFixed: '{ pre: [[ 0, "asc" ], [ 1, "desc" ]] }',
        columnsWidth: '{ targets: [4], width: 200 },'
    }

    var dt = Component_DataTable (
        'items-table-internalBenchmarkingTool',
        'items-table',
        headers,
        table_data,
        true,
        true,
        innerDimensionSortingSettings,
        true
    );

    return dt;
}

function BenchmarkingTool_GetDimensionRowData(dimensionN, dimensionId, breakbyVar, breakByAnswerIds, metricVar, comparatorsVar) {
    var totalColumnRowValue;

    if(metricVar == 'PercentFavorable') {
        totalColumnRowValue = data.Dimensions[dimensionId].Distribution.Fav;
    } else {
        if(metricVar == 'PercentUnfavorable') {
            totalColumnRowValue = data.Dimensions[dimensionId].Distribution.Unfav;
        } else {
            totalColumnRowValue = null;
        }
    }

    var row_data = [
        {Label: dimensionN, ClassName: 'numeric-cell dimension-row-cell'},
        {Label: '1', ClassName: 'text-cell dimension-row-cell'},
        {Label: dimensionId, ClassName: 'text-cell dimension-row-cell'},
        {Label: '&#9674;', ClassName: 'numeric-cell dimension-row-cell'},
        {Label: meta.Labels[dimensionId].Label, ClassName: 'text-cell dimension-row-cell'},
        {Label: totalColumnRowValue, ClassName: 'numeric-cell dimension-row-cell'}
    ];

    for(var i = 0; i < breakByAnswerIds.length; i++) {
        var breakByRowValue;

        if(metricVar == 'PercentFavorable') {
            breakByRowValue = data.Dimensions[dimensionId].BreakBy.Options[breakByAnswerIds[i]].Distribution.Fav;
        } else {
            if(metricVar == 'PercentUnfavorable') {
                breakByRowValue = data.Dimensions[dimensionId].BreakBy.Options[breakByAnswerIds[i]].Distribution.Unfav;
            } else {
                breakByRowValue = null;
            }
        }

        if(comparatorsVar == 'DifferencetoTotal') {
            breakByRowValue = breakByRowValue - totalColumnRowValue; //significant difference here???
        }

        row_data.push({Label: breakByRowValue, ClassName: 'numeric-cell dimension-row-cell'});
    }

    return row_data;
}

function BenchmarkingTool_GetItemRowData(dimensionN, dimensionId, itemId, breakbyVar, breakByAnswerIds, metricVar, comparatorsVar) {
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

    var row_data = [
        {Label: dimensionN, ClassName: 'text-cell item-row-cell'},
        {Label: '0', ClassName: 'text-cell item-row-cell'},
        {Label: dimensionId, ClassName: 'text-cell item-row-cell'},
        {Label: itemId.split('.')[1], ClassName: 'numeric-cell item-row-cell'},
        {Label: meta.Labels[itemId].Label, ClassName: 'text-cell item-row-cell'},
        {Label: totalColumnRowValue, ClassName: 'numeric-cell item-row-cell'}
    ];

    for(var i = 0; i < breakByAnswerIds.length; i++) {
        var breakByRowValue;

        if(metricVar == 'PercentFavorable') {
            breakByRowValue = data.ItemsNew[itemId].BreakBy.Options[breakByAnswerIds[i]].Distribution.Fav;
        } else {
            if(metricVar == 'PercentUnfavorable') {
                breakByRowValue = data.ItemsNew[itemId].BreakBy.Options[breakByAnswerIds[i]].Distribution.Unfav;
            } else {
                breakByRowValue = null;
            }
        }

        if(comparatorsVar == 'DifferencetoTotal') {
            breakByRowValue = breakByRowValue - totalColumnRowValue; //significant difference here???
        }

        row_data.push({Label: breakByRowValue, ClassName: 'numeric-cell item-row-cell'});
    }

    return row_data;
}