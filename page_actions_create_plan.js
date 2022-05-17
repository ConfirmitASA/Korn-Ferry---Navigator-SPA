// Actions > Create Plan

function ActionsCreatePlan_Page() {
    return {
        Label: `Create Plan`,

        // Left Pane
        LeftPane: `Create Action`,

        // Right Pane
        RightPane: `
            <div id="Create-Plan-details">
            </div>
            `,

        ClassName: 'Create-Plan-container',
        Style: null,
        ShowFilterSummary: true
    }
};

function ActionsCreatePlan_Render() {
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

    $('#Create-Plan-details').html(
        o.join('')
    );
}
