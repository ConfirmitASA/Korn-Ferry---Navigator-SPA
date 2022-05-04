// ResponseRates

function ResponseRates_Page() {
	return {
		Label: 'Response Rates',

		LeftPane: `
		<p>A Response Rate of 90% or above is considered good.</p>
		`,
		
		RightPane:
			Component_TestDataIndicator ( true ) +
		`
		<div class="dashboard__main-wrapper view-mode">
			<section class="widgets__wrapper">

				<div id="FullHierarchy" class="r2i-row r2i-row--max-width" style="display: block;">
					<article class="" style="WIDTH: 100%">
						<h3 class="widget__title"></h3>
						<div class="" style="WIDTH: 100%" id="FullScrollingDiv">
							<!-- AccoridionScript-->
							<table id="accordionTable" class="treetable">
								<thead class="TableRow" id="accordionHeader">
									<tr class="TableRow" id="accordionHeader">
										<th class="acc_hdr" style="text-align:left !important; min-width:200px !important;">Report Group</th>
										<th class="acc_hdr">Invited</th>
										<th class="acc_hdr">Respondents</th>
										<th class="acc_hdr">Response Rate</th>
										<th class="acc_hdr">Rollup</th>
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
		</div>
		`,
		
		ClassName: 'response-rate-container',
        Style: null,
		ShowFilterSummary: false
	}
}

function ResponseRates_Render() {


	var dataTableData = [];
	var tableData = [
		["0", "false", "overall", "TOP", "Company Overall", "52,524", "47,721", "91%", "*", "overall", "TOP", ""],
		["1", "true", "4179", "overall", "Group A", "14", "12", "86%", "*", "4179", "overall", ""],
		["2", "true", "4106", "4179", "North  [Ned Stewart]", "1", "1", "100%", " ", "4106", "4179", ""],
		["2", "true", "4107", "4179", "East and West [Aida Murray]", "1", "1", "100%", " ", "4107", "4179", ""],
		["2", "true", "4108", "4179", "South [EJ Sieracki]", "12", "10", "83%", " ", "4108", "4179", ""]
	];

	if ( $("#AccordionContent").text().replace(/\s/g, '') == '' ) {

		tableData.forEach(function(item, index) {
			dataTableData.push(item.slice(4));
			var treeVals = 'data-tt-id="' + item[2] + '" ';
			if (item[3] != "TOP") treeVals += 'data-tt-parent-id="' + item[3] + '"';
			var tableRow = '<tr class="TableRow toggle HierarchyItem ' + (item[1] == "false" ? "alwaysshow" : "") + '" id="node_' + item[2] + '" ' + treeVals + '>';
			tableRow += '<td class="HierarchyTitle" >' + item[4] + '</td>';
			item.slice(5, -3).forEach(function(colItem, colIndex) {
				tableRow += '<td class="acc_data">' + colItem + '</td>';
			});
			tableRow += '<td class="workId hideable" style="display:none">' + item[2] + '</td><td class="parentId hideable" style="display:none">' + item[3] + '</td>';
			tableRow += '<td class="managerName hideable" style="display:none">' + item[item.length - 1] + '</td>';
			$("#AccordionContent").append(tableRow);
		});
		
		$("#accordionTable").treetable({
			expandable: true,
			clickableNodeNames: true,
			onNodeCollapse: function() {
				var node = this;
				removeFromInput(node.id)
			},
			onNodeExpand: function() {
				var node = this;
				addToInput(node.id);
			}
		});

		if ($("#viewmode").prop("checked") == false) {
			$(".alwaysshow").each(function() {
				var item = this.id.replace("node_", "");
				var val = $("#accordionTable").treetable("expandNode", item);
			});
		}
			
		$("#ShowFull").click(function(e) {
			e.preventDefault();
			$('#viewmode').prop('checked', false);
			$("#FlatHierarchy").hide();
			$("#FullHierarchy").show();
			$("#displayedView input").val("full");
			$("#expand_collapse_buttons").show();
		});

		$("#expandAll").click(function(e) {
			$('#viewmode').prop('checked', false);
			$("#FlatHierarchy").hide();
			$("#FullHierarchy").show();
			$("#displayedView input").val("full");
			WaitShow(true);
			$("#accordionTable").treetable("expandAll");
			WaitShow(false);
		});

		$("#collapseAll").click(function(e) {
			$('#viewmode').prop('checked', false);
			$("#FlatHierarchy").hide();
			$("#FullHierarchy").show();
			$("#displayedView input").val("full");
			$("#accordionTable").treetable("collapseAll");
			$(".alwaysshow").each(function() {
				var item = this.id.replace("node_", "");
				$("#accordionTable").treetable("expandNode", item);
			});
		});	
	}
}

function expandNodes(ids) {
	for (var j = 0; j < ids.length; j++)
		if (ids[j].length > 0)
			try {
				$("#accordionTable").treetable("expandNode", ids[j]);
			} catch (e) {}
}

function addToInput(value) {
	var currentValue = $("#selectedItems input").val();
	currentValue += value + ";";
	$("#selectedItems input").val(currentValue);
}

function removeFromInput(value) {
	var currentValue = $("#selectedItems input").val();
	var pattern = value + ";";
	re = new RegExp(pattern, "g");
	currentValue = currentValue.replace(re, '');
	$("#selectedItems input").val(currentValue);
}