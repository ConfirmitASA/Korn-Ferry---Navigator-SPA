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

    var demographic_dropdown = Component_Dropdown (
        'demo',
        meta.Labels['labels.BreakBy'].Label,
        'internal-benchmarking-tool-demo-dropdown',
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
            ${demographic_dropdown}
            ${metric_dropdown}
            ${comparators_dropdown}
        </div>
    `);

    o.push ( `
        <h3>Placeholder Scoring for Internal Benchmarking Tool</h3>
    `);

    var dt = BenchmarkingTool_GetItemsTable();

    o.push(dt.Html);

    $('#internal-benchmarking-tool-details').html(
        o.join('')
    );

    if(dt.ScriptCode != null) {
        eval ( dt.ScriptCode );
    }

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
    $('#internal-benchmarking-tool-demo-dropdown').change( function() {
        var demographicElementValue = $(this).val();
        var selectorObj = {
            selectorElementValue: demographicElementValue,
            parameterName: 'demo'
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

    var query = {
        Filters: State_Get('filter'),
        InternalBenchmarkingTool: {
            DimensionsQuestions: State_Get('dimensions_questions'),
            Demo: State_Get('demo'),
            Metric: State_Get('metric'),
            DisplayComparators: State_Get('display_comparators')
        }
    };

    //console.log(query);
    Main_SubmitQuery ( query );
}

function BenchmarkingTool_GetItemsTable() {
    var o = [];

    var rowVar = State_Get('dimensions_questions');

    if (rowVar == null || rowVar == '-1') {
        return { Html: "" };
    }

    var demoVar = State_Get('demo');
    var metricVar = State_Get('metric');
    var comparatorsVar = State_Get('display_comparators');

    var headers = [
        {Label: "#", ClassName: 'text-cell'},
        {Label: `${data.Report.ReportBase} N=${data.Questions[demoVar].N}`, ClassName: 'numeric-cell'},
    ];

    var table_data = [];
    var row_data = [];
    var totalColumnRowValue;

    if(rowVar == 'AllDimensions') {
        var dimensionOptions = Object.keys(data.Dimensions);

        for(var i in dimensionOptions) {
            if(metricVar == 'PercentFavorable') {
                totalColumnRowValue = data.Dimensions[dimensionOptions[i]].Distribution.Fav;
            } else {
                if(metricVar == 'PercentUnfavorable') {
                    totalColumnRowValue = data.Dimensions[dimensionOptions[i]].Distribution.Unfav;
                } else {
                    totalColumnRowValue = null;
                }
            }

            row_data = [
                meta.Labels[dimensionOptions[i]].Label,
                totalColumnRowValue
            ];

            table_data.push ( row_data );
        }
    } else {
        if(rowVar == 'AllQuestions') {
            var itemOptions = Object.keys(data.ItemsNew);

            for (var i in itemOptions) {
                if (metricVar == 'PercentFavorable') {
                    totalColumnRowValue = data.ItemsNew[itemOptions[i]].Distribution.Fav;
                } else {
                    if (metricVar == 'PercentUnfavorable') {
                        totalColumnRowValue = data.ItemsNew[itemOptions[i]].Distribution.Unfav;
                    } else {
                        totalColumnRowValue = null;
                    }
                }

                row_data = [
                    meta.Labels[itemOptions[i]].Label,
                    totalColumnRowValue
                ];

                table_data.push(row_data);
            }
        } else {
            if(rowVar == 'AllQuestionsOrdByDimension') {
                var dimensionOptions = Object.keys(data.Dimensions);

                for(var i in dimensionOptions) {

                    if (metricVar == 'PercentFavorable') {
                        totalColumnRowValue = data.Dimensions[dimensionOptions[i]].Distribution.Fav;
                    } else {
                        if (metricVar == 'PercentUnfavorable') {
                            totalColumnRowValue = data.Dimensions[dimensionOptions[i]].Distribution.Unfav;
                        } else {
                            totalColumnRowValue = null;
                        }
                    }

                    row_data = [
                        meta.Labels[dimensionOptions[i]].Label,
                        totalColumnRowValue
                    ];

                    table_data.push(row_data);

                    var itemOptions = data.Dimensions[dimensionOptions[i]].Items;
                    console.log(itemOptions);

                    for (var j in itemOptions) {
                        console.log('item option ' + itemOptions[j]);
                        if (metricVar == 'PercentFavorable') {
                            totalColumnRowValue = data.ItemsNew[itemOptions[j]].Distribution.Fav;
                        } else {
                            if (metricVar == 'PercentUnfavorable') {
                                totalColumnRowValue = data.ItemsNew[itemOptions[j]].Distribution.Unfav;
                            } else {
                                totalColumnRowValue = null;
                            }
                        }

                        row_data = [
                            meta.Labels[itemOptions[j]].Label,
                            totalColumnRowValue
                        ];

                        table_data.push(row_data);
                    }
                }
            } else {
                return { Html: "" };
            }

        }
    }

    var dt = Component_DataTable (
        'items-table-internalBenchmarkingTool',
        'items-table',
        headers,
        table_data,
        false,
        true
    );

    return dt;
}