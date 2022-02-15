function Component_DataTable ( table_id, class_name, headers, data, isSortable, showButtons, innerDimensionSortingSettings) {
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
	for (var i=0; i<data.length; ++i) {
		var d = data[i];

		o.push('<tr>');
		for (var j=0; j<d.length; ++j)
			o.push ( TD (d[j]/*, headers[j].ClassName*/) );

		o.push('</tr>');
	}

	o.push('</table>');

	// Script Code to Initialize DataTable
	var orderStr;

	if(!!innerDimensionSortingSettings && innerDimensionSortingSettings.isApplied) {
		orderStr = `
			'order': [],			
			'orderFixed': ${innerDimensionSortingSettings.orderFixed},
			'columnDefs': [
				{ visible: false, targets: [${innerDimensionSortingSettings.hiddenColumns.join(',')}] },
				{ targets: [0, 1, 2], type: "natural" }
			]
		`;
	}


	var script_code = `
		var tbl = $('#${table_id}');

		tbl.DataTable({
			'searching': false,
			'sorting': ${isSortable},
			'paging': false,
			'info': false,
			${orderStr},
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

function TH(headerCellObj, classname) {
	if (classname == null) classname = "items-table-td";
	return '<th class="' + classname + '" colspan="' + headerCellObj.ColSpan + '" rowspan="' + headerCellObj.RowSpan + '">' + headerCellObj.Label + '</th>';
}