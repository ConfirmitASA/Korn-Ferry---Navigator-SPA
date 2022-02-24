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
        o.push(`
            <p>Page: ${actionInfo.page}</p>
            <p>Card dimension: ${actionInfo.cardDimensionId}</p>
            <p>Key Driver dimension: ${actionInfo.keyDriverDimensionId}</p>
            <p>Key Driver item: ${actionInfo.keyDriverItemId}</p>
        `);
    }

    $('#Create-Plan-details').html(
        o.join('')
    );
}
