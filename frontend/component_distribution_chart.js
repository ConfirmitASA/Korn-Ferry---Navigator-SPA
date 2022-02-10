function Component_DistributionChart( distribution, colors, bgcolors, height, style ) {

	var d = [];
	
	var sum = 0;
	for (var i=0; i<distribution.length; ++i) 
		sum += distribution[i];

	if ( sum == 0 ) return '-';
	
	var factor = 100 / sum;

	for (var i = 0; i < distribution.length; ++i) {
		d.push(
			'<div style="display: inline-block; height: ' + height + '; background-color: ' + bgcolors[i] + '; color: ' + colors[i] + '; width: ' + factor * distribution[i] + '%; ' + style + '"><span style="position: relative; top: 4px">' + ( (distribution[i]>=5) ? distribution[i] : '&nbsp;') + '</span></div>'
		)
	}

	var distribution_chart = d.join('');
	
	return distribution_chart;
}