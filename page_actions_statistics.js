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
                    ${ActionsStatistics_GetDateRangeDropdownHTML()}
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

function ActionsStatistics_GetDateRangeDropdownHTML() {
    return Component_Dropdown(
        'daterange',
        meta.Labels['labels.DateRange'].Label,
        'date-range-dropdown',
        '',
        ParamValues_ActionsStatistics_DateRange()
    );
}


function ActionsStatistics_Render() {

    console.log('Render');

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

    $('#date-range-dropdown').change(function() {
        let dateRangeElementValue = $(this).val();
        let selectorObj = {
            selectorElementValue: dateRangeElementValue,
            parameterName: 'daterange'
        }

        ActionStatistics_CreatedDateByPlanChart_HandleSelectorChange(selectorObj);
    });

    let plansByCurrentStatusChartData = ActionStatistics_GetPlansByCurrentStatusChartData();
    ActionStatistics_DrawPlansByCurrentStatusChart('plansByCurrentStatusChart', plansByCurrentStatusChartData)
}

function ActionStatistics_CreatedDateByPlanChart_HandleSelectorChange(selectorObj) {
    State_Set(selectorObj.parameterName, selectorObj.selectorElementValue);
    let createdDateByPlanCountsChartData = ActionStatistics_GetCreatedDateByPlanCountsChartData();
    ActionsStatistics_DrawCreatedDateByPlanCountsChart('createdDateByPlanCountsChart', createdDateByPlanCountsChartData);
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
    }

    console.log(dates);

    let dateRangeSelected = State_Get('daterange');
    switch (dateRangeSelected) {
        case 'LastWeek': {
            dates = ActionStatistics_FilterDates_LastWeek(dates);
            break;
        }
        case 'LastMonth': {
            dates = ActionStatistics_FilterDates_LastMonth(dates);
            break;
        }
        case 'LastQuarter': {
            dates = ActionStatistics_FilterDates_LastQuarter(dates);
            break;
        }
    }

    chartData.categories = Object.keys(dates);
    chartData.series.data = Object.values(dates);

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
    if(chartData.categories.length > 0) {
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
    } else {
        $('#createdDateByPlanCountsChart').html(meta.Labels['labels.NoDataToDisplay'].Label);
    }
}

function ActionStatistics_DrawPlansByCurrentStatusChart(containerId, chartData) {
    let indexOfNotZero = chartData.series.data.findIndex((dataPoint) => {
        return dataPoint > 0;
    });

    if(chartData.categories.length > 0 && indexOfNotZero >= 0) {
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
    } else {
        $('#plansByCurrentStatusChart').html(meta.Labels['labels.NoDataToDisplay'].Label);
    }
}

function ActionStatistics_FilterDates_LastWeek(dates) {
    let dateAWeekAgo = new Date(new Date().setDate(new Date().getDate() - 7));
    let today = new Date();
    let filtered = Object.entries(dates).filter(([key, value]) => new Date(key) > dateAWeekAgo && new Date(key) <= today);

    filtered.sort((a, b) => {
        let aDate = new Date(a[0]);
        let bDate = new Date(b[0]);

        if (aDate < bDate) {
            return -1;
        }

        if (aDate > bDate) {
            return 1;
        }

        return 0;
    });

    return Object.fromEntries(filtered);
}

function ActionStatistics_FilterDates_LastMonth(dates) {
    let today = new Date();
    today.setHours(0,0,0,0);
    let dateAMonthAgo = ActionStatistics_GetDateAMonthBefore(today);
    let lastMonthDates = Object.entries(dates).filter(([key, value]) => new Date(key) >= dateAMonthAgo);
    let weeks = {};
    let startDate = new Date(dateAMonthAgo);
    let endDate = new Date(dateAMonthAgo.setDate(dateAMonthAgo.getDate() + 6));
    while(startDate <= today) {
        endDate = endDate > today ? new Date(today) : endDate;
        let entries = lastMonthDates.filter(([key, value]) => new Date(key).setHours(0,0,0,0) >= startDate && new Date(key) <= endDate);
        let count = ActionStatistics_AggregatePlansByDate(entries);
        weeks[ActionStatistics_GetWeekName(startDate, endDate)] = count;

        startDate = new Date(endDate.setDate(endDate.getDate() + 1));
        endDate.setDate(startDate.getDate() + 6);
    }

    return weeks;
}

//March 31 -> Feb 28
function ActionStatistics_GetDateAMonthBefore(date) {
    date = new Date(date);
    const month = date.getMonth();
    date.setMonth(date.getMonth() - 1);
    while (date.getMonth() === month) {
        date.setDate(date.getDate() - 1);
    }
    return date;
}

function ActionStatistics_AggregatePlansByDate(entries) {
    let plansCount = 0;
    for (let i = 0; i < entries.length; i++) {
        plansCount += entries[i][1];
    }

    return plansCount;
}

function ActionStatistics_GetWeekName(startDate, endDate) {
    return startDate.toString().split(' ').slice(1, 4).join(' ') + ' -</br>' +
        endDate.toString().split(' ').slice(1, 4).join(' ');
}

function ActionStatistics_FilterDates_LastQuarter(dates) {
    let result = {};

    //Current month
    let today = new Date();
    let firstDayOfThisMonth = new Date(today.getFullYear(), today.getMonth());
    let thisMonthEntries = Object.entries(dates).filter(([key, value]) => new Date(key) >= firstDayOfThisMonth && new Date(key) <= new Date()); //Array of arrays [date, #]

    //previous month
    let firstDayOfPreviousMonth = ActionStatistics_GetDateAMonthBefore(firstDayOfThisMonth);
    let previousMonthEntries = Object.entries(dates).filter(([key, value]) => new Date(key) >= firstDayOfPreviousMonth && new Date(key) < firstDayOfThisMonth); //Array of arrays [date, #]

    //3 month ago
    let firstDayOfThirdMonth = ActionStatistics_GetDateAMonthBefore(firstDayOfPreviousMonth);
    let thirdMonthEntries = Object.entries(dates).filter(([key, value]) => new Date(key) >= firstDayOfThirdMonth && new Date(key) < firstDayOfPreviousMonth); //Array of arrays [date, #]

    result[ActionStatistics_GetMonthName(firstDayOfThirdMonth)] = ActionStatistics_AggregatePlansByDate(thirdMonthEntries);
    result[ActionStatistics_GetMonthName(firstDayOfPreviousMonth)] = ActionStatistics_AggregatePlansByDate(previousMonthEntries);
    result[ActionStatistics_GetMonthName(firstDayOfThisMonth)] = ActionStatistics_AggregatePlansByDate(thisMonthEntries);

    return result;
}

function ActionStatistics_GetMonthName(date) {
    return date.toString().split(' ').slice(1, 2).join(' ');
}

/* For development testing only */
var fakeDatesForTesting = createFakeFocusAreasWithCreationDates();
function createFakeFocusAreasWithCreationDates() {
    const plansCount = 100;
    let result = {};
    for (let i = 0; i < plansCount; i++) {
        result[i] = {
            'planIsSubmitted': true,
            'planCreatedDate': getRandomDate(new Date(2022, 2, 1), new Date()).toString().split(' ').slice(0, 4).join(' ')
        }
    }

    return result;
}
function getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}