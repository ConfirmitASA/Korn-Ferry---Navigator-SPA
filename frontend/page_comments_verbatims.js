// Comments > Verbatims

function CommentsVerbatims_Page() {
    return {
        Label: meta.Labels.pages['CommentsVerbatims'].Title,

        LeftPane: meta.Labels.pages['CommentsVerbatims'].Label,

        RightPane: `
        <div id="commentsverbatims-table-container"></div>
        `,
        
        ClassName: 'commentsverbatims-container',
        Style: null,
		ShowFilterSummary: true        
    };
}

function CommentsVerbatims_Render() {
   
    var o = [];

	var Comment_dropdown = Component_Dropdown(
		'comment',
		meta.Labels.labels["SelectQuestion"].Label,
		'commentsverbatims-comment-highlighter-dropdown',
		'',
		ParamValues_Comment()
	);

	var Category_dropdown = Component_Dropdown(
		'CommentCategory',
		meta.Labels.labels["SelectCategory"].Label,
		'commentsverbatims-category-highlighter-dropdown',
		meta.Labels.drop_downs["all"].Label,
		ParamValues_CommentCategory()
	);

	o.push(`
        <div class="selector-group">
            ${Comment_dropdown}
            ${Category_dropdown}
        </div>
    `);

    o.push ( Component_TestDataIndicator ( data.Comments.IsTestData ) );

    var dt = CommentsVerbatims_VerbatimsTable();
    o.push(dt.Html);

    $("#commentsverbatims-table-container").html(o.join(''));
    if (dt.ScriptCode != null) eval(dt.ScriptCode);

    $('#commentsverbatims-comment-highlighter-dropdown').change(function () {

        // Save Selection
        var SelectedOption = $(this).val();
        State_Set('comment', SelectedOption);

        // Change Comment Category List
        State_Set('CommentCategory', '-1');
        var options = ParamValues_CommentCategory();
        var str = '<option value="-1">' + meta.Labels.drop_downs["all"].Label + '</option>';    
        for (var i=0; i<options.length; i++)
            str += '<option value="' + options[i].Code + '">' + options[i].Label + '</option>';
        $('#commentsverbatims-category-highlighter-dropdown').html(str);

        var query = {
            page: 'CommentsVerbatims',
            parameter: 'comment'
        };
        Main_SubmitQuery(query);

    });

    $('#commentsverbatims-category-highlighter-dropdown').change(function () {

        // Save Selection
        var SelectedOption = $(this).val();
        State_Set('CommentCategory', SelectedOption);

        var query = {
            page: 'CommentsVerbatims',
            parameter: 'CommentCategory'
        };
        Main_SubmitQuery(query);
        
    });

}

function CommentsVerbatims_VerbatimsTable() {
    var comm = State_Get('comment');
    var cat = State_Get('CommentCategory');
    var CategoryList = config.comments[comm].CategoryList;
    var categories = meta.Labels.CommentCategories[CategoryList];

    var headers = [
        [
            { Label: meta.Labels.labels["Comments"].Label, ClassName: 'text-cell' }
        ]
    ];

    var table_data = [];
    var rowdata = [];

    for (var i in data.Comments[comm]) {
        var comment = data.Comments[comm][i];
        if (cat && cat != -1 && cat != comment.Category) continue; 
        var category = comment.Category == null ? meta.Labels.labels['NA'].Label : categories[comment.Category].Label;
        var commentHtml = `
        <div>
            <div>${comment.Comment}</div>
            <span class="commentCategory">${category}</span>
        </div>
        `;
        rowdata = [
            {Label: commentHtml, ClassName: 'text-cell'}
        ];
        table_data.push(rowdata);
    }

    var columnSettings = `
        'order': [],
    `;

    var buttonSettings = `
        [
            {
                extend: 'copyHtml5',
				title: 'Data export',
                exportOptions: { columns: [ 0 ] }
            }, 
            {
                extend: 'excelHtml5',
				title: 'Data export',
                exportOptions: { columns: [ 0 ] }
            }, 
            {
                extend: 'csvHtml5',
				title: 'Data export',
                exportOptions: { columns: [ 0 ] }
            }, 
            {
                extend: 'pdfHtml5',
				title: 'Data export',
                exportOptions: { columns: [ 0 ] }
            }, 
        ],
    `;

    var dt = Component_DataTable(
        "items-table-commentsverbatims",
        "items-table",
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
