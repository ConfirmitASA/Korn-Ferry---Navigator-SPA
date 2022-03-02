// ParamValues

function ParamValues_Demo () {
	var param_values = [];
	for (var filtervar in data.Filters.Items)
		param_values.push ( {Code: filtervar, Label: data.Filters.Items[filtervar].Label} );

	return param_values;
}

function ParamValues_BreakBy () {
	var param_values = [];
	for (var i in meta.Labels.BreakBy)
		param_values.push ( {Code: i, Label: meta.Labels.BreakBy[i].Label} );

	return param_values;
}

function ParamValues_ItemGroups() {
	var param_values = [];
	param_values.push ( {Code: 'AllDimensions', Label: meta.Labels.drop_downs["AllDimensions"].Label} );
	param_values.push ( {Code: 'AllQuestions', Label: meta.Labels.drop_downs["AllQuestions"].Label} );
	param_values.push ( {Code: 'AllQuestionsOrdByDimension', Label: meta.Labels.drop_downs["AllQuestionsOrdByDimension"].Label} );

	var capsDimensionText = meta.Labels.drop_downs["DIMENSION"].Label;
	var dimensionKeys = Object.keys(meta.Labels.Dimensions);

	for (var i of dimensionKeys) {
		param_values.push ( {Code: 'dimensions.'+i, Label: capsDimensionText + ' ' + meta.Labels.Dimensions[i].Label} );
	}

	return param_values;
}

function ParamValues_Items() {
	var param_values = [];

	var capsDimensionText = meta.Labels.drop_downs["DIMENSION"].Label;
	var dimensionKeys = Object.keys(meta.Labels.Dimensions);
	var itemKeys = Object.keys(meta.Labels.Items);

	itemKeys.sort(function(a,b) {	return a.replace(/\D/g,'') - b.replace(/\D/g,'') });

	for (var i of dimensionKeys) {
		param_values.push ( {Code: 'dimensions.'+i, Label: capsDimensionText + ' ' + meta.Labels.Dimensions[i].Label} );
	}
	for (var i of itemKeys) {
		param_values.push ( {Code: 'items.'+i, Label: i + '. ' + meta.Labels.Items[i].Label} );
	}

	return param_values;
}

function ParamValues_DemographicHeatmap_Metric() {
	var param_values = [];

	param_values.push ( {Code: 'PercentFavorable', Label: meta.Labels.drop_downs["PercentFavorable"].Label} );
	param_values.push ( {Code: 'PercentUnfavorable', Label: meta.Labels.drop_downs["PercentUnfavorable"].Label} );

	return param_values;
}

function ParamValues_DemographicHeatmap_Comparators() {
	var param_values = [];

	param_values.push ( {Code: 'AbsoluteValue', Label: meta.Labels.drop_downs["AbsoluteValue"].Label} );
	param_values.push ( {Code: 'DifferencetoTotal', Label: meta.Labels.drop_downs["DifferencetoTotal"].Label} );

	return param_values;
}

function ParamValues_NonStandardQuestions() {
	var param_values = [];

	for (var i in meta.Labels.NonStandardQuestions) {
		param_values.push ( {Code: i, Label: meta.Labels.NonStandardQuestions[i].Label} );
	}

	return param_values;
}

function ParamValues_Comment() {
	var param_values = [];

	for (var i in meta.Labels.CommentQuestions) {
		param_values.push ( {Code: i, Label: meta.Labels.CommentQuestions[i].Label} );
	}

	return param_values;
}

function ParamValues_Theme() {
	var param_values = [];

	for (var i in meta.Labels.Dimensions) {
		param_values.push ( {Code: i, Label: meta.Labels.Dimensions[i].Label} );
	}

	return param_values;
}