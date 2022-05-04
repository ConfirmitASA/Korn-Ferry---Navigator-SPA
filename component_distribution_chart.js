function Component_DistributionChartStacked( distribution, ChartStyle ) {

	if (!ChartStyle) ChartStyle = "DistributionChart";

	var style = config.styles[ChartStyle] 
	var keys = Object.keys(distribution);

	var d = [];

	var sum = 0;
	for (var i in distribution)
		sum += distribution[i];

	if ( sum == 0 ) return '-';

	var factor = 100 / sum;

	for (var i = 0; i < keys.length; i++) {
		d.push(
			'<div class="table-barchart" style="background-color: ' + style.bgcolors[i] + '; color: ' + style.colors[i] + '; width: ' + factor * distribution[keys[i]] + '%;"><span>' + ( (distribution[keys[i]]>=5) ? distribution[keys[i]] : '&nbsp;') + '</span></div>'
		)
	}

	var distribution_chart = d.join('');

	return distribution_chart;
}

function Component_DistributionChartBar( value ) {

	var style = config.styles.DistributionChart_onecolor;
	var distribution_chart = '<div class="table-barchart" style="background-color: ' + style.bgcolor + '; color: ' + style.color + '; width: ' + value + '%;"><span>' + '&nbsp;' + '</span></div>'

	return distribution_chart;
}