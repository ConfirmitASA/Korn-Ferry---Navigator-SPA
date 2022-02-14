function Component_DataTable ( table_id, class_name, headers, data, isSortable, showButtons ) {
	var o = [];

	o.push(`<table id="${table_id}" class="${class_name}">`);

	// Headers
	o.push('<thead>');
	o.push('<tr>');
	for (var i=0; i<headers.length; ++i)
		o.push( TH( headers[i].Label ) );

	o.push('</tr>');
	o.push('</thead>');

	// Data
	for (var i=0; i<data.length; ++i) {
		var d = data[i];

		o.push('<tr>');
		for (var j=0; j<d.length; ++j)
			o.push ( TD (d[j], headers[j].ClassName) );

		o.push('</tr>');
	}

	o.push('</table>');

	// Script Code to Initialize DataTable
	var script_code = `
		var tbl = $('#${table_id}');

		tbl.DataTable({
			'searching': false,
			'sorting': ${isSortable},
			'paging': false,
			'info': false,
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

function TD(x, classname) {
	if (classname == null) classname = "items-table-td";
	return '<td class="' + classname + '">' + (x == null ? '-' : x) + '</td>';
}

function TH(x, classname) {
	if (classname == null) classname = "items-table-td";
	return '<th class="' + classname + '">' + x + '</th>';
}