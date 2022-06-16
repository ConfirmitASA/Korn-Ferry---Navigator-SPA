// ResponseRates

function ResponseRates_Page() {
	return {
		Label: meta.Labels['ResponseRates'].Title,

		LeftPane: meta.Labels['ResponseRates'].Label,

		RightPane:
			Component_TestDataIndicator ( true ) +
			`
		<div class="view-mode">
			<section class="widgets__wrapper">

				<div id="FullHierarchy" class="r2i-row r2i-row--max-width" style="display: block;">
					<article class="" style="WIDTH: 100%">
						<h3 class="widget__title"></h3>
						<div class="" style="WIDTH: 100%" id="FullScrollingDiv">
							<!-- AccoridionScript-->
							<table id="accordionTable" class="treetable items-table dataTable no-footer">
								<thead class="TableRow" id="accordionHeader">
									<tr class="TableRow" id="accordionHeader">
										<th class="text-cell" style="text-align:left !important; min-width:200px !important;">${meta.Labels['ResponseRatesTexts.reportgroup'].Label}</th>
										<th class="text-cell">${meta.Labels['ResponseRatesTexts.invited'].Label}</th>
										<th class="text-cell">${meta.Labels['ResponseRatesTexts.respondents'].Label}</th>
										<th class="text-cell">${meta.Labels['ResponseRatesTexts.responserate'].Label}</th>
										<th class="text-cell">${meta.Labels['ResponseRatesTexts.rollup'].Label}</th>
										<th class="workId hideable noexport" style="display:none">Work Unit Id</th>
										<th class="parentId hideable noexport" style="display:none">Parent Id</th>
										<th class="managerName hideable noexport" style="display:none">ManagerName</th>
										<th class="searchCol noexport" style="display:none">Report Group Search Column</th>
										<th class="indexCol noexport" style="display:none">Hierarchy Index</th>
									</tr>
								</thead>
								<tbody id="AccordionContent" class="clusterize-content">
								</tbody>
							</table>
						</div>
					</article>
				</div>
			</section>
			<div id="response-rate-spinner-container"></div>
		</div>
		`,

		ClassName: 'response-rate-container',
		Style: null,
		ShowFilterSummary: false
	}
}

function ResponseRates_PageId() {
	return 'submenuitem-GroupResponse-ResponseRates';
}

function ResponseRate_TableData ( node, level ) {

	var o = [];

	// Add Self
	var is_rollup = !( node.Children.length == 0 );
	var is_rollup_code = is_rollup ? '*' : '';

	var d1 = ResponseRates_Data();
	var d2 = d1['OrgCode'];
	if (d2 == null) {
		debugger;
	}
	var d3 = d2[node.Id];
	if ( d3 == null ) {
		debugger;
	}

	var d = ResponseRates_Data()['OrgCode'][node.Id];

	o.push (
		[
			level.toString(),
			"false",
			node.Id,
			node.ParentId,
			node.Label,
			d.N,
			d.C,
			(d.N == 0) ? '-' : Math.round ( 100*d.C/d.N) + '%',
			is_rollup_code,
			"overall",
			"TOP",
			""
		]
	);

	// Add Children
	if ( is_rollup) {
		for (var i=0; i<node.Children.length; ++i)
			o = o.concat ( ResponseRate_TableData ( node.Children[i], level+1) );
	}

	return o;

}

function ResponseRates_Render() {

	if ( ResponseRates_MissingData() ) {
		var x =  {
			Html: Main_Loader(),
			ScriptCode: "if (ResponseRates_PageId() == State_GetCurrentPageId() ) Main_SubmitQuery ( {Requester: 'ResponseRates_Render', ShowWaitMessage: false, DataRequest:[{ Type: 'ResponseRate.Breakdown'}]} );"
		};

		$("#response-rate-spinner-container").html( '<div style="margin-top: 80px">' + x.Html + '</div>' );
		eval(x.ScriptCode);
		return;
	}


	var dataTableData = [];
	var node = meta.Hierarchy.Map[data.User.PersonalizedReportBase];
	var tableData = ResponseRate_TableData( node, 0 );
	$("#AccordionContent").html('');

	tableData.forEach(function(item, index) {
		dataTableData.push(item.slice(4));
		var treeVals = 'data-tt-id="' + item[2] + '" ';
		if (item[3] != "TOP") treeVals += 'data-tt-parent-id="' + item[3] + '"';
		var tableRow = '<tr class="TableRow toggle HierarchyItem ' + (item[1] == "false" ? "alwaysshow" : "") + '" id="node_' + item[2] + '" ' + treeVals + '>';
		tableRow += '<td class="HierarchyTitle text-cell" >' + item[4] + '</td>';
		item.slice(5, -3).forEach(function(colItem, colIndex) {
			tableRow += '<td class="text-cell">' + colItem + '</td>';
		});
		tableRow += '<td class="workId hideable" style="display:none">' + item[2] + '</td><td class="parentId hideable" style="display:none">' + item[3] + '</td>';
		tableRow += '<td class="managerName hideable" style="display:none">' + item[item.length - 1] + '</td>';
		$("#AccordionContent").append(tableRow);
	});

	$("#accordionTable").treetable({
			expandable: true,
			clickableNodeNames: true
		},
		true // re-init
	);

}

function removeFromInput(value) {
	var currentValue = $("#selectedItems input").val();
	var pattern = value + ";";
	re = new RegExp(pattern, "g");
	if (currentValue != null) currentValue = currentValue.replace(re, '');
	$("#selectedItems input").val(currentValue);
}


function ResponseRates_Key() {
	var key = [ 'RRX', config.CurrentWave, data.User.PersonalizedReportBase ].join('.');
	return key;
}

function ResponseRates_Data() {

	var key = ResponseRates_Key();

	return data[key];
}

function ResponseRates_MissingData() {
	// return true if rendering cannot happen due to missing data

	var is_missing_data = (ResponseRates_Data() == null);

	return is_missing_data;
}