function NonStandardQuestions_Page() {
    return {
        Label: meta.Labels['NonStandardQuestions'].Title,

        LeftPane: meta.Labels['NonStandardQuestions'].Label,

        RightPane: `
		<div id="nonstandardquestions-table-container"></div>
		`,

        ClassName: 'nonstandardquestions-container',
        Style: null,
        ShowFilterSummary: true
    };

}

function NonStandardQuestions_PageId() {
    return 'submenuitem-GroupExplore-NonStandardQuestions';
}

function NonStandardQuestions_Render() {

    var o = [];

    var NonStandardQuestions_dropdown = Component_Dropdown(
        'NonStandardQuestions',
        meta.Labels["labels.SelectQuestion"].Label,
        'nonstandardquestions-NonStandardQuestions-highlighter-dropdown',
        '',
        ParamValues_NonStandardQuestions()
    );
    o.push(`
        ${NonStandardQuestions_dropdown}
    `);

    o.push(Component_TestDataIndicator(data.isTestData));

    var dt = NonStandardQuestions_ItemsTable();
    o.push(dt.Html);

    $("#nonstandardquestions-table-container").html(o.join(''));
    if (dt.ScriptCode != null) eval(dt.ScriptCode);

    $('#nonstandardquestions-NonStandardQuestions-highlighter-dropdown').change(function () {

        // Save Selection
        var SelectedOption = $(this).val();
        State_Set('NonStandardQuestions', SelectedOption);

        Main_RefreshCurrentPage();
    });

}

function NonStandardQuestions_ItemsTable() {
    // Return Value: {Html: <string>, [ScriptCode: <string>]}

    if ( NonStandardQuestions_MissingData()) {
        return {
            Html: Main_Loader(),
            ScriptCode: "if (NonStandardQuestions_PageId() == State_GetCurrentPageId() ) Main_SubmitQuery ( {Requester: 'NonStandardQuestions_ItemsTable', ShowWaitMessage: false, DataRequest:[{ Type: 'NSQ'}]} );"
        };

    }

    var formatter = Utils_FormatOutput;
    var nsq = NonStandardQuestions_VariableId();
    if (nsq == null) return '';

    var question = meta.NonStandardQuestions[nsq];

    var key = Main_GetKeyWithFilter ( 'NSQ', config.CurrentWave, data.User.PersonalizedReportBase );
    var nsq_data = data[key];
    var questionData = nsq_data[nsq];

    var is_multi = (questionData.CAT != null);

    var headers = [
        [
            { Label: question.Label, ClassName: 'text-cell' },
            { Label: meta.Labels["labels.ValidN"].Label, ClassName: 'numeric-cell' },
            { Label: meta.Labels["labels.Pct"].Label, ClassName: 'numeric-cell distribution-cell' },
            { Label: meta.Labels["labels.Distribution"].Label, ClassName: 'numeric-cell' }
        ]
    ];

    var table_data = [];
    var rowdata = [];


    for (var j in question.Answers) {

        if ( is_multi ) {
            // MULTI
            var item = questionData.CAT[j]
            var n = item.C;
            var valid_n = item.N;

        }
        else {
            // SINGLE
            var n = questionData.Dist[j].N;
            var valid_n = questionData.N;
        }

        var pct = (valid_n == 0 || valid_n == null)
            ? null
            : Math.round ( 100*n/valid_n);

        rowdata = [
            {Label: question.Answers[j].Label, ClassName: 'text-cell'},
            {Label: formatter(n), ClassName: 'numeric-cell'},
            {Label: formatter(pct), ClassName: 'numeric-cell distribution-cell'},
            {Label: Component_DistributionChartBar( pct ), datasort: pct,  ClassName: 'text-cell'}
        ];
        table_data.push(rowdata);
    }

    var columnSettings = `
        'order': [[ 3, 'desc' ],[0, 'asc']],
        'columnDefs': [
            { 'targets': [1,2,3], type: 'numsort' }
        ],
    `;

    var exportColumns = [ 0, 1, 2 ];

    var view_name = Main_GetPageLabel ('#submenuitem-GroupExplore-NonStandardQuestions');

    var buttonSettings = DataTable_ButtonSettings(exportColumns, view_name);

    var dt = Component_DataTable(
        "items-table-nonstandardquestions",
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

function NonStandardQuestions_VariableId() {
    return $('#nonstandardquestions-NonStandardQuestions-highlighter-dropdown').val();
}

function NonStandardQuestions_Key() {
    return Main_GetKeyWithFilter( 'NSQ', config.CurrentWave, data.User.PersonalizedReportBase );
}

function NonStandardQuestions_Data() {
    var key = NonStandardQuestions_Key();
    return data[key];
}

function NonStandardQuestions_MissingData() {
    // return true if rendering cannot happen due to missing data

    var is_missing_data = (NonStandardQuestions_Data() == null);

    return is_missing_data;
}