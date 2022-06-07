function OpenComments_Page() {
    return {
        Label: meta.Labels['OpenComments'].Title,

        LeftPane: meta.Labels['OpenComments'].Label,

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
		meta.Labels["labels.SelectQuestion"].Label,
		'opencomments_comment-highlighter-dropdown',
		'',
		ParamValues_Comment()
	);

	var Category_dropdown = Component_Dropdown(
		'CommentCategory',
		meta.Labels['labels.SelectTheme'].Label,
		'opencomments_category-highlighter-dropdown',
		meta.Labels['labels.all'].Label,
		ParamValues_CommentCategory()
	);

	o.push(`
        <div class="selector-group">
            ${Comment_dropdown}
            ${Category_dropdown}
        </div>
    `);

    //o.push ( Component_TestDataIndicator ( data.Comments.IsTestData ) );

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
        var str = '<option value="-1">' + meta.Labels["labels.all"].Label + '</option>';    
        for (var i=0; i<options.length; i++)
            str += '<option value="' + options[i].Code + '">' + options[i].Label + '</option>';
        $('#opencomments_category-highlighter-dropdown').html(str);

        Main_RefreshCurrentPage();

    });

    $('#opencomments_category-highlighter-dropdown').change(function () {

        // Save Selection
        var SelectedOption = $(this).val();
        State_Set('CommentCategory', SelectedOption);

        Main_RefreshCurrentPage();
    });

}

function OpenComments_VerbatimsTable() {

    if ( OpenComments_MissingData() ) {
        return {
            Html: '<div class="loader" style="right: unset; position: relative;top: -50px; overflow: hidden; float: left;">Loading...</div>', 
            ScriptCode: "Main_SubmitQuery ( {Requester: 'OpenComments_VerbatimsTable', ShowWaitMessage: false, DataRequest:[{ Type: 'Comments'}]} );"
        };
    }

    var comm = OpenComments_VariableId(); // example: "Comm1"
    var cat = $('#opencomments_category-highlighter-dropdown').val(); // example: "1"
    var cat_text = $('#opencomments_category-highlighter-dropdown option:selected').text(); // example: "Quality"

    var table_data = [];
    var rowdata = [];

    var key = ['COMM', config.CurrentWave, data.User.PersonalizedReportBase, comm.toUpperCase(), Main_FilterHash()].join('.');
    var records = data.COMM[key];

    for (var i=0; i<records.length; ++i) {
        var comment = records[i];
        if (cat && cat != -1 && cat_text != comment.Category) continue; 

        var category = (comment.Category == null) 
            ? meta.Labels['labels.NA'].Label
            : comment.Category //categories[comment.Category].Label;

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
        Label: meta.Labels['labels.Comments'].Label + " (" + table_data.length + "): " + $('#opencomments_comment-highlighter-dropdown option:selected').text(), 
        ClassName: 'text-cell' 
    };

    var headers = [
        [
            hdr,
            hdr,
            { Label: meta.Labels["labels.Theme"].Label, ClassName: 'text-cell' }
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

function OpenComments_VariableId() {
    var v = $('#opencomments_comment-highlighter-dropdown').val();

    if ( v == null) {
        var keys = Object.keys ( config.comments );
        if ( keys.length>0 )
            v = keys[0]; // return first in list
    }

	return v;
}

function OpenComments_Key() {
    return ['COMM', config.CurrentWave, data.User.PersonalizedReportBase,  OpenComments_VariableId().toUpperCase(), Main_FilterHash()].join('.');
}

function OpenComments_Data() {

    if ( data.COMM == null ) return null;

    var key = OpenComments_Key();

    return data.COMM[key];
}

function OpenComments_MissingData() {
    // return true if rendering cannot happen due to missing data

    var is_missing_data = (OpenComments_Data() == null);

    return is_missing_data;
}
