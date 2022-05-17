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

        var query = {
            page: 'NonStandardQuestions',
            parameter: 'NonStandardQuestions'
        };
        Main_SubmitQuery(query);

    });

}

function NonStandardQuestions_ItemsTable() {
    // Return Value: {Html: <string>, [ScriptCode: <string>]}

    var nsq = State_Get('NonStandardQuestions');
    var question = meta.NonStandardQuestions[nsq];
    var questionData = data.NonStandardQuestions[nsq];

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
        rowdata = [
            {Label: question.Answers[j].Label, ClassName: 'text-cell'},
            {Label: questionData[j].N, ClassName: 'numeric-cell'},
            {Label: questionData[j].Pct, ClassName: 'numeric-cell distribution-cell'},
            {Label: Component_DistributionChartBar(questionData[j].Pct), datasort: questionData[j].Pct,  ClassName: 'text-cell'}
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

    var view_name = Main_GetPageLabel ('#submenuitem-GroupExplore-NonStandardQuestions'); /* + 
    ' - ' +
    $("#nonstandardquestions-NonStandardQuestions-highlighter-dropdown option:selected").text();
    */
   
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