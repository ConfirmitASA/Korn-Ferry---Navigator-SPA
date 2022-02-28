function NonStandardQuestions_Page() {
    return {
        Label: meta.Labels.pages['NonStandardQuestions'].Title,

        LeftPane: meta.Labels.pages['NonStandardQuestions'].Label,

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
        meta.Labels.labels["SelectQuestion"].Label,
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
    var question = meta.Labels.NonStandardQuestions[nsq];
    var questionData = data.NonStandardQuestions[nsq];

    var headers = [
        [
            { Label: "", ClassName: 'text-cell' },
            { Label: meta.Labels.labels["ValidN"].Label, ClassName: 'numeric-cell' },
            { Label: meta.Labels.labels["Pct"].Label, ClassName: 'numeric-cell distribution-cell' },
            { Label: meta.Labels.labels["Distribution"].Label, ClassName: 'numeric-cell' }
        ]
    ];

    var table_data = [];
    var rowdata = [];

    var max = 1;
    for (var j in questionData) {
        if (questionData[j].Pct>max) max = questionData[j].Pct;
    }
    max = max/100;

    for (var j in question.Answers) {
        rowdata = [
            {Label: question.Answers[j].Label, ClassName: 'text-cell'},
            {Label: questionData[j].N, ClassName: 'numeric-cell'},
            {Label: questionData[j].Pct, ClassName: 'numeric-cell distribution-cell'},
            {Label: Component_DistributionChartBar(questionData[j].Pct/max), datasort: questionData[j].Pct,  ClassName: 'text-cell'}
        ];
        table_data.push(rowdata);
    }

    var columnSettings = `
        'order': [[ 3, 'desc' ],[0, 'asc']],
        'columnDefs': [
            { 'targets': '_all', type: 'natural' }
        ],
    `;

    var buttonSettings = `
        [
            {
                extend: 'copyHtml5',
				title: 'Data export',
                exportOptions: { columns: [ 0, 1, 2 ] }
            }, 
            {
                extend: 'excelHtml5',
				title: 'Data export',
                exportOptions: { columns: [ 0, 1, 2 ] }
            }, 
            {
                extend: 'csvHtml5',
				title: 'Data export',
                exportOptions: { columns: [ 0, 1, 2 ] }
            }, 
            {
                extend: 'pdfHtml5',
				title: 'Data export',
                exportOptions: { columns: [ 0, 1, 2 ] }
            }, 
        ],
    `;

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