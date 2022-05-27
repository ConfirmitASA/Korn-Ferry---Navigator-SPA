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
        $('#submenuitem-GroupActions-ActionsPlans').click();
    });

    $('#plansShowButton').click(() => {
        State_Set('showactions', 'Off');
        $('#submenuitem-GroupActions-ActionsPlans').click();
    });

    $('#actionsShowButton').click(() => {
        State_Set('showactions', 'On');
        $('#submenuitem-GroupActions-ActionsPlans').click();
    });

    let createdDateByPlanCountsChartData = ActionStatistics_GetCreatedDateByPlanCountsChartData();
    ActionsStatistics_DrawCreatedDateByPlanCountsChart('createdDateByPlanCountsChart', createdDateByPlanCountsChartData);

    let plansByCurrentStatusChartData = ActionStatistics_GetPlansByCurrentStatusChartData();
    ActionStatistics_DrawPlansByCurrentStatusChart('plansByCurrentStatusChart', plansByCurrentStatusChartData)
}

function ActionStatistics_GetStatData() {
    let focusAreas = FocusAreas_GetFocusAreas();

    let numberOfPlans = 0;
    let numberOfActions = 0;
    let owners = [];

    for(let area in focusAreas) {
        let actionPlan = focusAreas[area];

        if(actionPlan.planIsSubmitted) {
            numberOfPlans++;
            numberOfActions += !!actionPlan.planActions ? Object.keys(actionPlan.planActions).length : 0;

            let foundOwnerIndex = owners.indexOf(actionPlan.planOwner);

            if(foundOwnerIndex < 0) {
                owners.push(actionPlan.planOwner);
            }
        }
    };

    return [owners.length, numberOfPlans, numberOfActions];

}

function ActionStatistics_GetCreatedDateByPlanCountsChartData() {
    let focusAreas = FocusAreas_GetFocusAreas();

    let chartData = {
        categories: [],
        series: {
            name: meta.Labels['labels.Plans'].Label,
            data: []
        }
    }

    let dates = {};

    for(let area in focusAreas) {
        let actionPlan = focusAreas[area];

        if(actionPlan.planIsSubmitted) {
            let createdDate_Clear = actionPlan.planCreatedDate.split(' ').splice(1).join(' ');

            if(dates.hasOwnProperty(createdDate_Clear)) {
                dates[createdDate_Clear]++;
            } else {
                dates[createdDate_Clear] = 1;
            }
        }
    };

    chartData.categories = Object.keys(dates);
    chartData.categories.sort((a,b) => {
        let aDate = new Date(a);
        let bDate = new Date(b);

        if (aDate < bDate) {
            return -1;
        }

        if (aDate > bDate) {
            return 1;
        }

        return 0;
    });

    for(let i = 0; i < chartData.categories.length; i++) {
        chartData.series.data[i] = dates[chartData.categories[i]];
    }

    return chartData;
}

function ActionStatistics_GetPlansByCurrentStatusChartData() {
    let focusAreas = FocusAreas_GetFocusAreas();

    let chartData = {
        categories: [
            meta.Labels["labels.NotStarted"].Label,
            meta.Labels["labels.Started"].Label,
            meta.Labels["labels.OnHold"].Label,
            meta.Labels["labels.Complete"].Label
        ],
        series: {
            name: meta.Labels['labels.Plans'].Label,
            data: [0,0,0,0],
            colors: ['#F03223', '#F99B1E', '#00B7F1', '#82C341']
        }
    }

    //series.data[0] - not started
    //series.data[1] - started
    //series.data[2] - on hold
    //series.data[3] - complete
    for(let area in focusAreas) {
        let actionPlan = focusAreas[area];

        if (actionPlan.planIsSubmitted) {
            switch (actionPlan.planStatus) {
                case 'NotStarted':
                    chartData.series.data[0]++;
                    break;
                case 'Started':
                    chartData.series.data[1]++;
                    break;
                case 'OnHold':
                    chartData.series.data[2]++;
                    break;
                case 'Complete':
                    chartData.series.data[3]++;
                    break;
            }
        }
    };

    return chartData;
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
            categories: chartData.categories
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
                color: '#77bc1f',
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [chartData.series]
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
            categories: chartData.categories,
            crosshair: true
        },
        yAxis: {
            min: 0,
            /*tickInterval: 5,*/
            reversed: meta.RTL ? true : false, //rtl
            title: {
                text: ''
            },
            stackLabels: {
                useHTML: true,
                enabled: true,
                style: {
                    fontSize: '12px'
                }
            }
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
        series: [chartData.series]
    });
}