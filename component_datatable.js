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
			dom: 'Bfr<"stickyHeaderWrapper"t>ip',
			'language': {
				'search': '${meta.Labels['labels.Search'].Label}',
				'zeroRecords': '${meta.Labels['labels.NoMatchingRecordsFound'].Label}',
				'infoEmpty': '${meta.Labels['labels.NoDataToDisplay'].Label}'
			},
			buttons: ${showButtons ? buttonSettings : "[]" }
		});
		tbl.css('float', 'left');
		tbl.css('width', '');
		tbl.css('overflow', 'scroll');
    `;

	return {
		Html: o.join(''),
		ScriptCode: script_code
	};
}

function TD(cell) {
	if (cell.ClassName == null) cell.ClassName = "items-table-td";
	if (cell.colspan == null) cell.colspan = 1;
	if (cell.rowspan == null) cell.rowspan = 1;
	var datasort = ('datasort' in cell) ? ' data-sort="'+cell.datasort+'"' : '';
	return '<td class="' + cell.ClassName + '" colspan=' + cell.colspan + ' rowspan=' + cell.rowspan + ' ' + datasort + '>' + cell.Label + '</td>';
}

function TH(cell) {
	if (cell.ClassName == null) cell.ClassName = "items-table-td";
	if (cell.colspan == null) cell.colspan = 1;
	if (cell.rowspan == null) cell.rowspan = 1;
	return '<th class="' + cell.ClassName + '" colspan=' + cell.colspan + ' rowspan=' + cell.rowspan + '>' + cell.Label + '</th>';
}

function DataTable_ButtonSettings(exportColumns, view_name ) {

	// reverse export columns if RTL
	if ( meta.RTL) exportColumns = exportColumns.reverse();

	if ( view_name == null )
		view_name = meta.ExportButtons['copy'].FileName; // fallback to "Data Export"

	var export_filename = Main_ExportFileName ( view_name );

	var file_name_encoded = encodeURI ( export_filename );

	var modifier = meta.RTL
		? `
		,
		modifier: {order: 'index'},
		format: {
			body: function (data, row, column, node) {

				const arabic = /[\u0600-\u06FF]/;

				if (arabic.test(data)) {
					return data.split(' ').reverse().join(' ');
				}
				return data;
			},
			header: function (data, row, column, node) {
				const arabic = /[\u0600-\u06FF]/;

				if (arabic.test(data)) {
					return data.split(' ').reverse().join(' ');
				}
				return data;
			}
		}`
		: '';


	var buttonSettings = `
        [
            {
                extend: 'copyHtml5',
                text: '${meta.Labels.copy.Title}',
                title: decodeURI("${file_name_encoded}"),
                exportOptions: { columns: [ ${exportColumns.join(',')} ] }
            }, 
            {
                extend: 'excelHtml5',
                text: '${meta.Labels.excel.Title}',
                title: decodeURI("${file_name_encoded}"),
                exportOptions: { columns: [ ${exportColumns.join(',')} ] }
            }, 
            {
                extend: 'csvHtml5',
				charset: 'UTF-8',
				bom: true,
				text: '${meta.Labels.csv.Title}',
                title: decodeURI("${file_name_encoded}"),
                exportOptions: { columns: [ ${exportColumns.join(',')} ] }
            }, 
            {
                extend: 'pdfHtml5',
				orientation: 'landscape',
                text: '${meta.Labels.pdf.Title}',
                title: decodeURI("${file_name_encoded}"),
				customize: function (doc) { 
					doc.defaultStyle.font = meta.RTL ? 'Tajawal' : 'Roboto'; 
					if (meta.RTL) doc.defaultStyle.alignment = 'right';
				},
                exportOptions: { 
					columns: [ ${exportColumns.join(',')} ]
					${modifier}
				}
            }, 
        ],
    `;
	return buttonSettings;
}