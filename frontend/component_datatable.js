function Component_DataTable ( table_id, class_name, headers, data, isSortable, showButtons, columnSettings, isSearchable) {
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
			'searching': ${isSearchable},
			'sorting': ${isSortable},
			'paging': false,
			'info': false,
			${columnSettings},
			'autoWidth': false,
			dom: 'Bfrtip',
			buttons: ${showButtons ? "['copyHtml5', 'excelHtml5', 'csvHtml5', 'pdfHtml5']" : "[]"}
		});
		tbl.css('float', 'left');
		tbl.css('margin-top', '20px');
    `;

	return {
		Html: o.join(''),
		ScriptCode: script_code
	};
}

function TD(bodyCellObj, classname) {
	if (classname == null) classname = bodyCellObj.ClassName;
	return '<td class="' + classname + '">' + (!!bodyCellObj.Label ? bodyCellObj.Label : '-') + '</td>';
}

function TH(headerCellObj, classname) {
	if (classname == null) classname = "items-table-td";
	return '<th class="' + classname + '" colspan="' + headerCellObj.ColSpan + '" rowspan="' + headerCellObj.RowSpan + '">' + headerCellObj.Label + '</th>';
}