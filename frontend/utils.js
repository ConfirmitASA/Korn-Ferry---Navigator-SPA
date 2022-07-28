// Utils

/*
function SortById(a, b) {
	if (a.Id > b.Id) return 1;
	if (a.Id == b.Id) return 0;
	if (a.Id < b.Id) return -1;
}
*/

function Utils_LoremIpsum() {
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';    
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