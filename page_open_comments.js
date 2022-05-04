function OpenComments_Page() {
    return {
        Label: meta.Pages['OpenComments'].Title,

        LeftPane: meta.Pages['OpenComments'].Label,

        RightPane: `
        <div id="opencomments_table-container"></div>
        `,
        
        ClassName: 'opencomments_container',
        Style: null,
		ShowFilterSummary: true        
    };
}

function OpenComments_HasData() {
    /*
    
    Check to see if the data needed to render the page is present.
    
    COMM.Comm1 = {
        "<WaveId>.<NodeId>.<FilterHash>": [
            {
                Comment: "...",
                Cat: "3"
            }
        ];
    }

    */
}

function OpenComments_Render() {
   
    var o = [];

	var Comment_dropdown = Component_Dropdown(
		'comment',
		meta.Labels["SelectQuestion"].Label,
		'opencomments_comment-highlighter-dropdown',
		'',
		ParamValues_Comment()
	);

	var Category_dropdown = Component_Dropdown(
		'CommentCategory',
		meta.Labels["SelectTheme"].Label,
		'opencomments_category-highlighter-dropdown',
		meta.Labels["all"].Label,
		ParamValues_CommentCategory()
	);

	o.push(`
        <div class="selector-group">
            ${Comment_dropdown}
            ${Category_dropdown}
        </div>
    `);

    o.push ( Component_TestDataIndicator ( data.Comments.IsTestData ) );

    var dt = OpenComments_VerbatimsTable();
    o.push(dt.Html);

    $("#opencomments_table-container").html(o.join(''));
    if (dt.ScriptCode != null) eval(dt.ScriptCode);

    $('#opencomments_comment-highlighter-dropdown').change(function () {

        // Save Selection
        var SelectedOption = $(this).val();
        State_Set('comment', SelectedOption);

        // Change Comment Category List
        State_Set('CommentCategory', '-1');
        var options = ParamValues_CommentCategory();
        var str = '<option value="-1">' + meta.Labels["all"].Label + '</option>';    
        for (var i=0; i<options.length; i++)
            str += '<option value="' + options[i].Code + '">' + options[i].Label + '</option>';
        $('#opencomments_category-highlighter-dropdown').html(str);

        var query = {
            page: 'OpenComments',
            parameter: 'comment'
        };
        Main_SubmitQuery(query);

    });

    $('#opencomments_category-highlighter-dropdown').change(function () {

        // Save Selection
        var SelectedOption = $(this).val();
        State_Set('CommentCategory', SelectedOption);

        var query = {
            page: 'OpenComments',
            parameter: 'CommentCategory'
        };
        Main_SubmitQuery(query);
        
    });

}

function OpenComments_VerbatimsTable() {
    var comm = State_Get('comment');
    var cat = State_Get('CommentCategory');
    var categories = meta.CommentCategories;

    var table_data = [];
    var rowdata = [];

    for (var i in data.Comments[comm]) {
        var comment = data.Comments[comm][i];
        if (cat && cat != -1 && cat != comment.Category) continue; 
        var category = (comment.Category == null) 
            ? meta.Labels['NA'].Label 
            : categories[comment.Category].Label;

        var commentHtml = `
        <div>
            <div>${comment.Comment}</div>
            <span class="commentCategory">${category}</span>
        </div>
        `;
        rowdata = [
            {Label: commentHtml, ClassName: 'text-cell'},
            {Label: comment.Comment, ClassName: 'text-cell'},
            {Label: category, ClassName: 'text-cell'}
        ];
        table_data.push(rowdata);
    }
    
    var hdr = {
        Label: meta.Labels["Comments"].Label + " (" + table_data.length + "): " + $('#opencomments_comment-highlighter-dropdown option:selected').text(), 
        ClassName: 'text-cell' 
    };

    var headers = [
        [
            hdr,
            hdr,
            { Label: meta.Labels["Theme"].Label, ClassName: 'text-cell' }
        ]
    ];
    
    var columnSettings = `
        'order': [],
		'columnDefs': [
			{ 'targets': [ 1, 2 ], 'visible': false }
		],
        'searchHighlight': true,
    `;

    var exportColumns = [ 1, 2 ];
    var view_name = Main_GetPageLabel ('#submenuitem-GroupComments-OpenComments'); /* + 
    ' - ' +
    $('#opencomments_comment-highlighter-dropdown option:selected').text();
    */
   
    var buttonSettings = DataTable_ButtonSettings(exportColumns, view_name);
 
    var dt = Component_DataTable(
        "items-table-opencomments",
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
