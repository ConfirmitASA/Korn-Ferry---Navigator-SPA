function CommentsThemes_Page() {
    return {
        Label: meta.Labels['CommentsThemes'].Title,

        LeftPane: meta.Labels['CommentsThemes'].Label,

        RightPane: `
		<div id="commentsthemes-table-container"></div>
		`,

        ClassName: 'commentsthemes-container',
        Style: null,
        ShowFilterSummary: true
    };
}

function CommentsThemes_Render() {

    var o = [];

    var Comment_dropdown = Component_Dropdown(
        'comment',
        meta.Labels["labels.SelectQuestion"].Label,
        'commentsthemes-comment-highlighter-dropdown',
        '',
        ParamValues_Comment()
    );
    o.push(`
        ${Comment_dropdown}
    `);

    o.push(Component_TestDataIndicator(data.isTestData));

    if (!$.isEmptyObject(meta.CommentCategories)) {
        var dt = CommentsThemes_ItemsTable();
        o.push(dt.Html);
        $("#commentsthemes-table-container").html(o.join(''));
        if (dt.ScriptCode != null) eval(dt.ScriptCode);
    }

    $('#commentsthemes-comment-highlighter-dropdown').change(function () {

        // Save Selection
        var SelectedOption = $(this).val();
        State_Set('comment', SelectedOption);

        Main_RefreshCurrentPage();
    });

}


function CommentsThemes_ItemsTable() {
    // Return Value: {Html: <string>, [ScriptCode: <string>]}

    var comm = State_Get('comment'); // example: "Comm1"

    // Check to make sure this question is coded
    var is_coded = (meta.CommentCategories[comm] != null);

    if ( !is_coded ) {
        return {Html: meta.Labels["labels.NoDataToDisplay"].Label };
    }

    var headers = [
        [
            { Label: !$.isEmptyObject(meta.CommentQuestions) ? meta.CommentQuestions[comm].Label : ' ', ClassName: 'text-cell' },
            { Label: meta.Labels["labels.ValidN"].Label, ClassName: 'numeric-cell' },
            { Label: meta.Labels["labels.Pct"].Label, ClassName: 'numeric-cell distribution-cell' },
            { Label: meta.Labels["labels.Distribution"].Label, ClassName: 'numeric-cell' }
        ]
    ];

    var table_data = [];
    var rowdata = [];

    var key = Main_GetKeyWithFilter( 'COMCAT', config.CurrentWave, data.User.PersonalizedReportBase );

    if (data[key] != undefined) {

        var theme_data = data[key][comm];
        var dist = theme_data.Dist;
        var pct_dist = Utils_CountsToPercents ( dist );
        var comm =  State_Get('comment');
        let formatter = Utils_FormatOutput;

        for (var code in dist) {
            rowdata = [
                {Label: !$.isEmptyObject(meta.CommentCategories) ? meta.CommentCategories[comm][code].Label : ' ', ClassName: 'text-cell'},
                {Label: formatter(dist[code]), ClassName: 'numeric-cell'},
                {Label: formatter(pct_dist[code]), ClassName: 'numeric-cell distribution-cell'},
                {Label: Component_DistributionChartBar( pct_dist[code] ), datasort: dist[code],  ClassName: 'text-cell'}
            ];
            table_data.push(rowdata);
        }

        var columnSettings = `
        'order': [[ 3, 'desc' ],[0, 'asc']],
        'columnDefs': [
            { 'targets': [1,2,3], type: 'numsort' }
        ],
    `;


        var view_name = Main_GetPageLabel ('#submenuitem-GroupComments-CommentsThemes');
        var exportColumns = [ 0, 1, 2 ];
        var buttonSettings = DataTable_ButtonSettings(exportColumns, view_name);

        var dt = Component_DataTable(
            "items-table-commentsthemes",
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
    } else {
        var dt = {};
        dt.Html = '';
        return dt;
    }

}