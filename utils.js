// Utils

function Utils_FormatOutput ( x ) {
	return (x === null || isNaN(x)) ? NOT_AVAILABLE : x;
}

function Utils_FormatPctOutput ( x ) {
	return (x === null || isNaN(x)) ? NOT_AVAILABLE : x + '%';
}


function Utils_SigTest ( a, b, property, is_pct_distribution ) {
	// Example parameter: property = 'Fav'
	// Example return value: {IsSignificant: true, Diff: 12}
	
	if (a == null || b == null ) return {IsSignificant: false, Diff: null};

	var a_dist = is_pct_distribution ? a.Dist : Utils_CountsToPercents ( a.Dist );

	// This is to account for the scenario where we use external norms and only have "Fav" property; in this case the distribution is already percentage
	var b_dist = (is_pct_distribution || !b.Dist.hasOwnProperty('Neu'))
		? b.Dist 
		: Utils_CountsToPercents ( b.Dist );

	var diff = Utils_Diff(a_dist[property], b_dist[property]);

	if (diff == null) return {IsSignificant: false, Diff: null};


	// Sig Test
	return {
		IsSignificant: Utils_StatSig_NumberInput(a.N, a_dist[property], b.N, b_dist[property], false),
		Diff: diff
	};
}


function Utils_StatSig_NumberInput(lngCount1, lngValue1, lngCount2, lngValue2, blnValue2IsDiff) {
	if (blnValue2IsDiff==null) blnValue2IsDiff=true; // default value
	try {
		  const csngZLimit = config.SigTest.Threshold; // typically 1.96
		  var lngValue2Final;
		  var dblPool;
		  var dblZ;
		  
		  lngValue2Final = blnValue2IsDiff ? (lngValue1 - lngValue2) : (lngValue2);
		  dblPool = ((lngCount1 * (lngValue1 / 100)) + (lngCount2 * (lngValue2Final / 100))) / (lngCount1 + lngCount2);
		  dblZ = ((lngValue1 / 100) - (lngValue2Final / 100)) / (Math.sqrt(((dblPool * (1 - dblPool)) / lngCount1) + ((dblPool * (1 - dblPool) / lngCount2))));
		  
		  var output = (Math.abs(dblZ) >= csngZLimit);
		  return output;
	}
	catch (e) {
		  return false;
	}
}


function Utils_Diff(a, b) {
	return ( a == null || b == null )
	? null
	: (a-b);
}

function Utils_LoremIpsum() {
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';    
}

function Utils_IsNullInDistribution( dist ) {
	let indexOfNull = Object.values(dist).findIndex((element) => {
		return element === null || isNaN(element);
	});

	return indexOfNull >= 0;
}

function Utils_Count ( dist ) {
	var count = 0;
	for (var key in dist)
		count += dist[key];

	return count;
}

function Utils_CountsToPercents  ( dist ) {
	var count = Utils_Count ( dist );
	var o = {};

	if(!Utils_IsNullInDistribution(dist)) {
		for (var key in dist)
			o[key] = (count == 0) ? null : Math.round(100 * dist[key] / count);
	} else {
		for (var key in dist)
			o[key] =  null;
	}
	
	return o;
}

function Utils_PercentDistribution ( n_dist ) {
	// Turn N values into percents
	
	var o = [];
	var sum = 0;
	for (var i=0; i<n_dist.length; ++i) sum += n_dist[i];
	
	for (var i=0; i<n_dist.length; ++i) {
		if ( sum>0 )
			o.push ( Math.round(100 * n_dist[i] / sum) );
		else 
			o.push ( null ); // no percents can be computed
	}
	
	return o;
}


// todo: verify that this function is used; if not, remove it
function Utils_AddComparatorsData (item, rowdata) {
	var comparators = State_Get('comparators');
	var NofComparators = comparators ? comparators.length : 0;

	for (var k = 0; k < NofComparators; k++) {
		var value = item.Comparators[comparators[k]].Value;
		sigClassname = (value.indexOf('*') > 0) ? (value.indexOf('-') == 0 ? 'cell-red' : 'cell-green') : '';
		rowdata.push({ Label: value, datasort: parseFloat(value), ClassName: 'numeric-cell ' + sigClassname });
	}
	
	return rowdata;
}

function Utils_SetActionButtonToADD(actionButtonElement, buttonText) {
	$(actionButtonElement).removeClass('remove-action');
	$(actionButtonElement).removeClass('action-button__selected');
	$(actionButtonElement).addClass('add-action');
	$(actionButtonElement).html(buttonText);
}

function Utils_SetActionButtonToREMOVE(actionButtonElement, buttonText) {
	$(actionButtonElement).removeClass('add-action');
	$(actionButtonElement).addClass('remove-action');
	$(actionButtonElement).addClass('action-button__selected');
	$(actionButtonElement).html(`<div class="remove-action_icon">-</div> ${buttonText}`);
}

function Utils_SetActionIconToADD(actionIconElement) {
	$(actionIconElement).removeClass('remove-action');
	$(actionIconElement).removeClass('table_remove-item-minus-circle');
	$(actionIconElement).addClass('add-action');
	$(actionIconElement).addClass('table_add-item-plus-circle__thin');
}

function Utils_SetActionIconToREMOVE(actionIconElement) {
	$(actionIconElement).removeClass('add-action');
	$(actionIconElement).removeClass('table_add-item-plus-circle__thin');
	$(actionIconElement).addClass('remove-action');
	$(actionIconElement).addClass('table_remove-item-minus-circle');
}