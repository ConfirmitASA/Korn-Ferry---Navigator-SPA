function Component_DistributionChart( distribution ) {

	var style = meta.Styles.DistributionChart;
	var keys = Object.keys(distribution);

	var d = [];

	var sum = 0;
	for (var i in distribution)
		sum += distribution[i];

	if ( sum == 0 ) return '-';

	var factor = 100 / sum;

	for (var i = 0; i < keys.length; i++) {
		d.push(
			'<div style="display: inline-block; height: ' + style.height + '; background-color: ' + style.bgcolors[i] + '; color: ' + style.colors[i] + '; width: ' + factor * distribution[keys[i]] + '%; ' + style.style + '"><span style="position: relative; top: 4px">' + ( (distribution[keys[i]]>=5) ? distribution[keys[i]] : '&nbsp;') + '</span></div>'
		)
	}

	var distribution_chart = d.join('');

	return distribution_chart;
}