// Comments > Categories

function CommentsCategories_Page() {
    return {
        Label: meta.Labels.pages['CommentsCategories'].Title,

        LeftPane: meta.Labels.pages['CommentsCategories'].Label,

        RightPane: `
		<div id="commentscategories-table-container"></div>
		`,
        
        ClassName: 'commentscategories-container',
        Style: null,
		ShowFilterSummary: true        
    };
}

function CommentsCategories_Render() {
   
    var o = [];

    var Comment_dropdown = Component_Dropdown(
		'comment',
		meta.Labels.labels["SelectQuestion"].Label,
		'commentscategories-comment-highlighter-dropdown',
		'',
		ParamValues_Comment()
	);
	o.push(`
        ${Comment_dropdown}
    `);

    o.push(Component_TestDataIndicator(data.isTestData));

    var dt = CommentsCategories_ItemsTable();
    o.push(dt.Html);
   
    $("#commentscategories-table-container").html(o.join(''));
    if (dt.ScriptCode != null) eval(dt.ScriptCode);

    $('#commentscategories-comment-highlighter-dropdown').change(function () {

        // Save Selection
        var SelectedOption = $(this).val();
        State_Set('comment', SelectedOption);

        var query = {
            page: 'CommentsCategories',
            parameter: 'comment'
        };
        Main_SubmitQuery(query);

    });

}


function CommentsCategories_ItemsTable() {
    // Return Value: {Html: <string>, [ScriptCode: <string>]}

    var comm = State_Get('comment');
     
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
/*
    var max = 1;
    for (var j in data.Dimensions) {
        if (data.Dimensions[j].Comments[comm].Pct>max) max = data.Dimensions[j].Comments[comm].Pct;
    }
    max = max/100;
*/
    var CategoryList = config.comments[comm].CategoryList;
    var categories = meta.Labels.CommentCategories[CategoryList];
    for (var i in categories) {
        rowdata = [
            {Label: categories[i].Label, ClassName: 'text-cell'},
            {Label: data.CommentCategories[CategoryList][i].N, ClassName: 'numeric-cell'},
            {Label: data.CommentCategories[CategoryList][i].Pct, ClassName: 'numeric-cell distribution-cell'},
            {Label: Component_DistributionChartBar(data.CommentCategories[CategoryList][i].Pct), datasort: data.CommentCategories[CategoryList][i].Pct,  ClassName: 'text-cell'}
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
        "items-table-commentscategories",
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
