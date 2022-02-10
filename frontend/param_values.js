// ParamValues

function ParamValues_Demo () {
	var param_values = [];
	for (var filtervar in data.Filters.Items)
		param_values.push ( {Code: filtervar, Label: data.Filters.Items[filtervar].Label} );
	
	return param_values;
}