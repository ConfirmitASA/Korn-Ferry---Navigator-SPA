// ParamValues

function ParamValues_BreakBy () {
	var param_values = [];
	for (var i in meta.Demographics)
		param_values.push ( {Code: i, Label: meta.Demographics[i].Label} );

	return param_values;
}

function ParamValues_ItemGroups() {
	var param_values = [];
	param_values.push ( {Code: 'AllDimensions', Label: meta.Labels['labels.AllDimensions'].Label} );
	param_values.push ( {Code: 'AllQuestions', Label: meta.Labels['labels.AllQuestions'].Label} );
	param_values.push ( {Code: 'AllQuestionsOrdByDimension', Label: meta.Labels['labels.AllQuestionsOrdByDimension'].Label} );

	var capsDimensionText = meta.Labels['labels.Dimension'].Label + ':';
	var dimensionKeys = Object.keys(meta.Dimensions);

	for (var i of dimensionKeys) {
		param_values.push ( {Code: 'dimensions.'+i, Label: capsDimensionText + ' ' + meta.Dimensions[i].Label} );
	}

	return param_values;
}

function ParamValues_Items() {
	var param_values = [];

	var capsDimensionText = meta.Labels['labels.Dimension'].Label + ':';
	var dimensionKeys = Object.keys(meta.Dimensions);
	var itemKeys = Object.keys(meta.Items);

	itemKeys.sort(function(a,b) {	return a.replace(/\D/g,'') - b.replace(/\D/g,'') });

	for (var i of dimensionKeys) {
		param_values.push ( {Code: 'dimensions.' + i, Label: capsDimensionText + ' ' + meta.Dimensions[i].Label} );
	}

	var qno = 0; // todo - fixed qno issue
	for (var i of itemKeys) {
		param_values.push ( {Code: 'items.' + i, Label: (++qno) + '. ' + meta.Items[i].Label} ); 
	}

	return param_values;
}

function ParamValues_DemographicHeatmap_Metric() {
	var param_values = [];

	param_values.push ( {Code: 'PercentFavorable', Label: meta.Labels["labels.PercentFavorable"].Label} );
	param_values.push ( {Code: 'PercentUnfavorable', Label: meta.Labels["labels.PercentUnfavorable"].Label} );

	return param_values;
}

function ParamValues_DemographicHeatmap_Comparators() {
	var param_values = [];

	param_values.push ( {Code: 'AbsoluteValue', Label: meta.Labels["labels.AbsoluteValue"].Label} );
	param_values.push ( {Code: 'DifferencetoTotal', Label: meta.Labels["labels.DifferencetoTotal"].Label} );

	return param_values;
}

function ParamValues_NonStandardQuestions() {
	var param_values = [];

	for (var i in meta.NonStandardQuestions) {
		param_values.push ( {Code: i, Label: meta.NonStandardQuestions[i].Label} );
	}

	return param_values;
}

function ParamValues_Comment() {
	var param_values = [];

	for (var i in meta.CommentQuestions) {
		param_values.push ( {Code: i, Label: meta.CommentQuestions[i].Label} );
	}

	return param_values;
}

function ParamValues_CommentCategory() {
	var comm = State_Get('comment');
	//var CategoryList = config.comments[comm].CategoryList;
	var param_values = [];

	for (var i in meta.CommentCategories/*[CategoryList]*/) {
		param_values.push ( {Code: i, Label: meta.CommentCategories/*[CategoryList]*/[i].Label} );
	}

	return param_values;
}

function ParamValues_DemographicHighlight_BasisForComparison() {
	var param_values = [];

	param_values.push ( {Code: 'ReportTotal', Label: meta.Labels["labels.ReportTotal"].Label} );

	return param_values;
}