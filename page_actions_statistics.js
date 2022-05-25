// Actions > Statistics
function ActionsStatistics_Page() {
    return {
        Label: meta.Labels["ActionsStatistics"].Title,

        // Left Pane
        LeftPane: meta.Labels["ActionsStatistics"].Label,

        // Right Pane
        RightPane: `
            ${Component_TestDataIndicator(data.Report.IsTestData)}
            <div class="statistics-container">
            <div id="statDataContainer" class="statistics-container_row">
                <div id="ownersTile" class="statistics-tile">
                    <div class="statistics-tile_info">
                        <div class="statistics-data">
                            <div id="numberOfOwners" class="statistics-data_number"></div>
                            <div class="statistics-data_label">${meta.Labels['labels.Owners'].Label}</div>
                        </div>
                        <div id="ownersIcon" class="statistics-icon">
                        </div>
                    </div>
                    <div class="statistics-tile_button">
                        <div id="ownersShowButton" class="statistics-button_show-button">${meta.Labels['buttons.Show'].Label}</div>
                    </div>
                </div>
                <div id="plansTile" class="statistics-tile">
                    <div class="statistics-tile_info">
                        <div class="statistics-data">
                            <div id="numberOfPlans" class="statistics-data_number"></div>
                            <div class="statistics-data_label">${meta.Labels['labels.Plans'].Label}</div>
                        </div>
                        <div id="plansIcon" class="statistics-icon">
                        </div>
                    </div>
                    <div class="statistics-tile_button">
                        <div id="plansShowButton" class="statistics-button_show-button">${meta.Labels['buttons.Show'].Label}</div>
                    </div>
                </div>
                <div id="actionsTile" class="statistics-tile">
                    <div class="statistics-tile_info">
                        <div class="statistics-data">
                            <div id="numberOfActions" class="statistics-data_number"></div>
                            <div class="statistics-data_label">${meta.Labels['labels.Actions'].Label}</div>
                        </div>
                        <div id="actionsIcon" class="statistics-icon">
                        </div>
                    </div>
                    <div class="statistics-tile_button">
                        <div id="actionsShowButton" class="statistics-button_show-button">${meta.Labels['buttons.Show'].Label}</div>
                    </div>
                </div>
            </div>
            <div id="statChartsContainer" class="statistics-container_row"></div>
            </div>
            `,

        ClassName: 'statistics-page-container',
        Style: null,
        ShowFilterSummary: false
    }
};


function ActionsStatistics_Render() {
    $('#numberOfOwners').html('50');
    $('#numberOfPlans').html('100');
    $('#numberOfActions').html('339');

    $('#ownersShowButton').click(() => {
        $('#submenuitem-GroupActions-ActionsAllPlans').click();
    });

    $('#plansShowButton').click(() => {
        $('#submenuitem-GroupActions-ActionsAllPlans').click();
    });

    $('#actionsShowButton').click(() => {
        $('#submenuitem-GroupActions-ActionsAllPlans').click();
    });
}