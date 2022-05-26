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
            <div id="statChartsContainer" class="statistics-container_row">
                <div id="createdDateByPlanCountsTile" class="statistics-tile statistics-tile__with-charts">
                    <div class="statistics-tile_title">${meta.Labels['labels.CreatedDateByPlanCounts'].Label}</div>
                    <div class="statistics-tile_chart-container">
                        <div id="createdDateByPlanCountsChart"></div>
                    </div>
                </div>
                <div id="plansByCurrentStatusTile" class="statistics-tile statistics-tile__with-charts">
                    <div class="statistics-tile_title">${meta.Labels['labels.PlansByCurrentStatus'].Label}</div>
                    <div class="statistics-tile_chart-container">
                        <div id="plansByCurrentStatusChart"></div>
                    </div>
                </div>
            </div>
            </div>
            `,

        ClassName: 'statistics-page-container',
        Style: null,
        ShowFilterSummary: false
    }
};


function ActionsStatistics_Render() {

    let [numberOfOwners, numberOfPlans, numberOfActions] = ActionStatistics_GetStatData();

    /*$('#numberOfOwners').html('50');
    $('#numberOfPlans').html('100');
    $('#numberOfActions').html('339');*/

    $('#numberOfOwners').html(numberOfOwners);
    $('#numberOfPlans').html(numberOfPlans);
    $('#numberOfActions').html(numberOfActions);

    $('#ownersShowButton').click(() => {
        $('#submenuitem-GroupActions-ActionsAllPlans').click();
    });

    $('#plansShowButton').click(() => {
        $('#submenuitem-GroupActions-ActionsAllPlans').click();
    });

    $('#actionsShowButton').click(() => {
        $('#submenuitem-GroupActions-ActionsAllPlans').click();
    });

    let chartData = [];
    ActionsStatistics_DrawCreatedDateByPlanCountsChart('createdDateByPlanCountsChart', chartData);
    ActionStatistics_DrawPlansByCurrentStatusChart('plansByCurrentStatusChart', chartData)
}

function ActionStatistics_GetStatData() {
    let focusAreas = FocusAreas_GetFocusAreas();

    let numberOfPlans = 0;
    let numberOfActions = 0;
    let owners = [];

    focusAreas.forEach((area) => {
        let actionPlan = area.actionPlan;

        if(actionPlan.isSubmitted) {
            numberOfPlans++;
            numberOfActions += actionPlan.actions.length;

            let foundOwnerIndex = owners.indexOf(actionPlan.owner);

            if(foundOwnerIndex < 0) {
                owners.push(actionPlan.owner);
            }
        }
    });

    return [owners.length, numberOfPlans, numberOfActions];

}

function ActionsStatistics_DrawCreatedDateByPlanCountsChart(containerId, chartData) {
    Highcharts.chart(containerId, {
        chart: {
            type: 'line',
            height: 300,
            width: 400
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            reversed: meta.RTL ? true : false, //rtl
            title: {
                text: ''
            },

            stackLabels: {
                useHTML: true,
                enabled: true,
                style: {
                    fontSize: '14px'
                }
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Test',
            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }]
    });

}

function ActionStatistics_DrawPlansByCurrentStatusChart(containerId, chartData) {
    Highcharts.chart(containerId, {
        chart: {
            type: 'column',
            height: 300,
            width: 400
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true
        },
        yAxis: {
            reversed: meta.RTL ? true : false, //rtl
            title: {
                text: ''
            },
        },
        tooltip: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            },
            series: {
                stacking: 'normal',
                colorByPoint: true
            },
        },
        series: [{
            name: 'Test',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });
}