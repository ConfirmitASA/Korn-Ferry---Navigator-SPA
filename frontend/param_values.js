// ParamValues

function ParamValues_Demo () {
	var param_values = [];
	for (var filtervar in data.Filters.Items)
		param_values.push ( {Code: filtervar, Label: data.Filters.Items[filtervar].Label} );

	return param_values;
}


function ParamValues_InternalBenchmarkingTool_Dimensions_Questions() {
	var param_values = [];

	param_values.push ( {Code: 'AllDimensions', Label: meta.Labels["drop_downs.AllDimensions"].Label} );
	param_values.push ( {Code: 'AllQuestions', Label: meta.Labels["drop_downs.AllQuestions"].Label} );
	param_values.push ( {Code: 'AllQuestionsOrdByDimension', Label: meta.Labels["drop_downs.AllQuestionsOrdByDimension"].Label} );

	var capsDimensionText = meta.Labels["drop_downs.DIMENSION"].Label;
	var dimensionLabels = TestData_getDimensionOptionsFromMeta();

	for(var i in dimensionLabels) {
		param_values.push ( {Code: dimensionLabels[i], Label: capsDimensionText + ' ' + meta.Labels[dimensionLabels[i]].Label} );
	}

	return param_values;
}

function ParamValues_InternalBenchmarkingTool_Metric() {
	var param_values = [];

	param_values.push ( {Code: 'PercentFavorable', Label: meta.Labels["drop_downs.PercentFavorable"].Label} );
	param_values.push ( {Code: 'PercentUnfavorable', Label: meta.Labels["drop_downs.PercentUnfavorable"].Label} );

	return param_values;
}

function ParamValues_InternalBenchmarkingTool_Comparators() {
	var param_values = [];

	param_values.push ( {Code: 'AbsoluteValue', Label: meta.Labels["drop_downs.AbsoluteValue"].Label} );
	param_values.push ( {Code: 'DifferencetoTotal', Label: meta.Labels["drop_downs.DifferencetoTotal"].Label} );

	return param_values;
}