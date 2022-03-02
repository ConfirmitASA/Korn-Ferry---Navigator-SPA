// Comments > Verbatims

function CommentsVerbatims_Page() {
    return {
        Label: 'Verbatims',

        LeftPane: meta.Labels.comments.Label,

        RightPane: `
        <div id="commentsverbatims-table-container">
            Chart Not Loaded
        </div>
        `,

        ClassName: 'commentsverbatims-container',
        Style: null,
        ShowFilterSummary: true
    };
}

function CommentsVerbatims_Render() {

    var o = [];

    o.push ( Component_TestDataIndicator ( data.Comments.IsTestData ) );
    /*
        var comments = data.Comments.Verbatims;

        var values = [];
        var theme_map = {};

        for (var i=0; i<comments.length; ++i) {
            var theme = comments[i].Comm1Theme;
            if (theme == null) theme = "Uncategorized";
            if (theme_map[theme] == null) theme_map[theme] = 0;
            theme_map[theme]++;
        }

        for (var theme in theme_map) {
            values.push (
              {
                  Code: ThemeCode ( theme ),
                  Label: theme + ' (' + theme_map[theme] + ')'
              }
            );
        }

        values = values.sort(SortByLabel);
    */
    var Comment_dropdown = Component_Dropdown(
        'comment',
        meta.Labels.labels["SelectQuestion"].Label,
        'commentsverbatims-comment-highlighter-dropdown',
        '',
        ParamValues_Comment()
    );

    var Theme_dropdown = Component_Dropdown(
        'theme',
        meta.Labels.labels["SelectTheme"].Label,
        'commentsverbatims-theme-highlighter-dropdown',
        meta.Labels.drop_downs["all"].Label,
        ParamValues_Theme()
    );

    o.push(`
        <div class="selector-group">
            ${Comment_dropdown}
            ${Theme_dropdown}
        </div>
    `);

    $("#commentsverbatims-table-container").html(o.join(''));


    $('#commentsverbatims-comment-highlighter-dropdown').change(function () {

        // Save Selection
        var SelectedOption = $(this).val();
        State_Set('comment', SelectedOption);

        var query = {
            page: 'CommentsVerbatims',
            parameter: 'comment'
        };
        Main_SubmitQuery(query);

    });
    /*
        for (var i=0; i<comments.length; ++i) {
            o.push ( `
                <div class="comment ${ThemeCode( comments[i].Comm1Theme)}">
                    <div>${comments[i].Comm1}</div>
                    <span style="display: table; margin-bottom: 20px; margin-top: 5px; background-color: #00634f; color: white; border-radius: 5px; padding: 5px; font-size: 10px">${comments[i].Comm1Theme == null ? 'N/A' : comments[i].Comm1Theme}</span>
                </div>
                `
            );

        }

        $('#comments-verbatims-details').html(
            o.join('')
        );

        //
        $('#comments-theme-dropdown').change(
            function () {
                var value = $(this).val();

                switch ( value ) {

                    case '-1': // means show all
                        $('.comment').css('display', 'unset');
                        break;

                    default:
                        $('.comment').css('display', 'none');
                        $('.' + value).css('display', 'unset');
                }
            }
        );
        */
}

function SortByLabel(a, b) {
    if (a.Label > b.Label) return 1;
    if (a.Label < b.Label) return -1;
    if (a.Label == b.Label) return 0;
}

var theme_codes_map = {};

function ThemeCode ( s ) {
    if ( s == null) s = "Uncategorized";
    if ( theme_codes_map[s] == null ) {
        var tmp = s;
        tmp = tmp.split(' ').join('_');
        tmp = tmp.split('/').join('_');
        tmp = tmp.split('&').join('_');
        tmp = tmp.split(',').join('_');

        theme_codes_map[s] = tmp;
    }
    return theme_codes_map[s];
}