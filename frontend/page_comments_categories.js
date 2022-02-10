// Comments > Categories

function CommentsCategories_Page() {
    return {
        Label: 'Comments Categories',

        LeftPane: meta.Labels.comments.Label,

        RightPane: `
        <div id="comments-categories-details">
            Chart Not Loaded
        </div>
        `,
        
        ClassName: 'comments-categories-container',
        Style: null,
		ShowFilterSummary: true        
    };
}

function CommentsCategories_Render() {
   
    var o = [];

    o.push ( Component_TestDataIndicator ( data.Comments.IsTestData ) );

    var comments = data.Comments.Verbatims;
    var theme_map = {};

    for (var i=0; i<comments.length; ++i) {
        var theme = comments[i].Comm1Theme;
        if (theme == null) theme = "Uncategorized";
        if (theme_map[theme] == null) theme_map[theme] = 0;
        theme_map[theme]++;
    }

    var categories = [];

    for (var theme in theme_map)
        categories.push (
            {
                Label: theme,
                Count: theme_map[theme]
            }
        );

    var sorted_categories = categories.sort ( SortByCount );

    var max = sorted_categories[0].Count;

    for (var i=0; i<sorted_categories.length; ++i) {
        var width = sorted_categories[i].Count/max*300;
        o.push (`
            <div class="comments-category">
                <span style="display: inline-block; width: 200px">${sorted_categories[i].Label}</span> 
                <span style="display: inline-block; position: relative; top: 2px; background-color: #77bc1f; height: 15px; width: ${width}px"></span>
                <span>${sorted_categories[i].Count}</span>
            </div>
            `);
    }

    $('#comments-categories-details').html(
        '<div class=hiddenchart style="display: none">' + o.join('') + '</div>'
    );

    // Animation
    $('.comments-category').css('height', '25px');
    $('.comments-category').css('opacity', 0);
    $('.comments-category').css('position', 'relative');
    $('.comments-category').css('left', '80px');
    $('.hiddenchart').css('display', 'unset');
    
    delay = 300;
    $('.comments-category').each (
        function () {
            delay += 10;
            $(this).velocity ( {opacity: 1, left: 0}, {duration: 200, delay: delay} )
        }
    );


}

function SortByCount(a, b) {
    if ( a.Count > b.Count ) return -1;
    if ( a.Count < b.Count ) return 1;
    if ( a.Count == b.Count ) {
        if ( a.Label > b.Label ) return 1;
        if ( a.Label < b.Label ) return -1;
        if ( a.Label == b.Label ) return 0;
    }
}