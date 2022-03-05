function Component_DataTable ( table_id, class_name, headers, data, isSortable, isSearchable, columnSettings, showButtons, buttonSettings) {
	var o = [];

	o.push(`<table id="${table_id}" class="${class_name}">`);

	// Headers
	o.push('<thead>');

	for (var i = 0; i < headers.length; i++) {
		var headerRow = headers[i];

		o.push('<tr>');

		for(var j = 0; j < headerRow.length; j++) {
			o.push( TH( headerRow[j] ) );
		}

		o.push('</tr>');
	}



	o.push('</thead>');

	// Data
	o.push('<tbody>');
	for (var i=0; i<data.length; ++i) {
		var d = data[i];

		o.push('<tr>');
		for (var j=0; j<d.length; ++j)
			o.push ( TD (d[j]) );

		o.push('</tr>');
	}

	o.push('</tbody>');

	o.push('</table>');

	// Script Code to Initialize DataTable

	var script_code = `
		var tbl = $('#${table_id}');

		tbl.DataTable({
			'sorting': ${isSortable},
			'searching': ${isSearchable},			
			'paging': false,
			'info': false,
			${columnSettings}			
			dom: 'Bfrtip',
			'language': {
				'search': '${meta.Labels.labels["Search"].Label}'
			},
			buttons: ${showButtons ? buttonSettings : "[]" }
		});
		tbl.css('float', 'left');
		tbl.css('margin-top', '20px');
		tbl.css('width', '');
    `;

	return {
		Html: o.join(''),
		ScriptCode: script_code
	};
}

function TD(cell) {
	if (cell.ClassName == null) cell.ClassName = "items-table-td";
	var datasort = ('datasort' in cell) ? ' data-sort="'+cell.datasort+'"' : '';
	return '<td class="' + cell.ClassName + '"' + datasort + '>' + cell.Label + '</td>';
}

function TH(cell) {
	if (cell.ClassName == null) cell.ClassName = "items-table-td";
	if (cell.colspan == null) cell.colspan = 1;
	if (cell.rowspan == null) cell.rowspan = 1;
	return '<th class="' + cell.ClassName + '" colspan=' + cell.colspan + ' rowspan=' + cell.rowspan + '>' + cell.Label + '</th>';
}