// Actions > Create Plan

function ActionsFocusAreas_Page() {
    return {
        Label: meta.Pages["ActionsFocusAreas"].Title,

        // Left Pane
        LeftPane: meta.Pages["ActionsFocusAreas"].Label,

        // Right Pane
        RightPane: `
            ${Component_TestDataIndicator(data.Report.IsTestData)}
            <div id="AddNewFocusArea">
            </div>
            <div id="FocusAreasList">
            </div>
            `,

        ClassName: 'Focus-Areas-container',
        Style: null,
        ShowFilterSummary: true
    }
};

function ActionsFocusAreas_Render() {
    var o = [];

    o.push(Component_TestDataIndicator(data.Report.IsTestData));

    var actionInfo = State_Get('actionInfo');

    if(!!actionInfo) {
        if (actionInfo.page === 'KeyMetrics') {
            o.push(`
                <p>Page: ${actionInfo.page}</p>
                <p>Card dimension: ${actionInfo.cardDimensionId}</p>
                <p>Key Driver dimension: ${actionInfo.keyDriverDimensionId}</p>
                <p>Key Driver item: ${actionInfo.keyDriverItemId}</p>
            `);
        }

        if(actionInfo.page === 'StrengthsAndOpportunities') {
            o.push(`
                <p>Page: ${actionInfo.page}</p>
                <p>Card type: ${actionInfo.cardType}</p>
                <p>Item: ${actionInfo.itemId}</p>
            `);
        }
    }

    $('#FocusAreasList').html(
        o.join('')
    );
}
