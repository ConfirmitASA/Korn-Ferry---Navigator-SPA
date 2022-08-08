// Modal

var modal_filter_variables = {};


function ClearFilters() {
	$("#master-page-modal-filter option:selected").each(function () {
		$(this).prop('selected', false);
	});

	$('#filter-apply-button').click();
}

function ClearFiltersIndividualDemographic(demo) {

	$("#master-page-modal-filter option:selected").each(function () {
		if ($(this).attr('value').split('.')[0] == demo)
			$(this).prop('selected', false);
	});

	$('#filter-apply-button').click();

}

function ModalGetFilters() {
	var codes = [];
	$('.demoanswers').each(function () {
		var options = $(this)[0].selectedOptions;
		for (var i = 0; i < options.length; ++i)
			codes.push(options[i].value);
	});

	return codes;
}

function ModalGetComparators() {
	var codes = [];
	$('.democheckbox').each(function () {
		if ($(this)[0].checked) codes.push($(this)[0].value);
	});

	return codes;
}

function Modal_GetAllComparators() {
	var codes = [];
	$('.democheckbox').each(function () {
		codes.push($(this)[0].value);
	});

	return codes;
}

function ModalOpen() {
	$('#master-page-modal-filter-container').fadeIn();
}

function ModalFilterRenderComparators(comparators) {
	var o = [];
	for(var i of comparators) {
		o.push('<div class=demoitem><input class=democheckbox type="checkbox" value="' + i + '">' + '<span class=answerlabel>' + meta.Comparators[i].Label + '</span></input></div>');
	}
	return o.join('');
}

function ModalFilterInternalComparators() {
	var comparators = Object.keys(meta.Comparators).filter(function (key) { return key.indexOf('Internal.') == 0; });
	return ModalFilterRenderComparators(comparators);
}

function ModalFilterExternalComparators() {
	var comparators = Object.keys(meta.Comparators).filter(function (key) { return key.indexOf('External.') == 0; });
	return ModalFilterRenderComparators(comparators);
}

function Modal_RestoreComparators() {
	// Clear Comparators
	$("#master-page-modal-filter input:checked").each(function () {
		$(this).prop('checked', false);
	});

	// Restore Comparators
	var comparators = State_Get('comparators');
	if (comparators == null) comparators = []; // no comparators have ever been set

	for (var i = 0; i < comparators.length; ++i) {
		// Check Comparator
		$("#master-page-modal-filter input[value='" + comparators[i] + "']").prop('checked', true);
	}
}

function Modal_RestoreFilters() {

	// Restore Filters
	var filters = State_Get('filter');
	if (filters == null) filters = []; // no filters have ever been set

	for (var i = 0; i < filters.length; ++i) {
		// Check Filter
		$("#master-page-modal-filter option[value='" + filters[i] + "']").prop('selected', true);
	}
}

function Modal_RestoreSelections() {
	Modal_RestoreFilters();
	Modal_RestoreComparators();
}

function Modal_Render() {
	var o = [];

	for (var qid in meta.Demographics) {

		if ( qid.toUpperCase() != 'ORGCODE') {
			var item = meta.Demographics[qid];

			var tmp = [];
			for (var code in item.Answers) {
				var answer = item.Answers[code];
				tmp.push(`<option value="${qid}.${code}">${answer.Label}</option>`);
			}

			o.push(`
					<div class=filterbox>
						<div class=filterheading>${item.Label}</div>
						<select size=4 multiple=multiple class=demoanswers>${tmp.join('')}</select>
					</div>
				`);
		}
	}

	var has_data_filters = data.Filters.length>0;

	var data_filters_heading = has_data_filters
		? `<div class=sectionheading>${meta.Labels['labels.DataFilters'].Label}</div>`
		: '';


	$('#master-page-modal-filter').html(`
			<div class=inner_filter_container>
				${data_filters_heading}
				<div style="max-height: 300px; overflow: auto; display: flex; flex-wrap: wrap; max-width: 800px;">
					${o.join('')}
				</div>
				${has_data_filters ? '<hr>' : ''}
				<div class=sectionheading style="margin-top: 20px">
					${meta.Labels['labels.InternalComparators'].Label}
				</div>
				${ModalFilterInternalComparators()}
				<div style="margin-top: 20px" class=sectionheading>
					${meta.Labels['labels.ExternalComparators'].Label}
				</div>
				${ModalFilterExternalComparators()}
				<hr>
				<input
					id="filter-apply-button" 
					class="action"
					style="margin: 20px; width: 120px;" 
					type=button 
					value="${meta.Labels['buttons.Apply'].Label}"
				>
				<input
					id="filter-cancel-button" 
					class="action action-red"
					style="margin: 20px; width: 120px;" 
					type=button 
					value="${meta.Labels['buttons.Cancel'].Label}"
				>
				</input>
			</div>
		`);

	// Restore Filters/Comparator selections
	Modal_RestoreSelections();

	// Click Handler: Filter Option
	$('.answerlabel').click(function () {
		$(this).parent().find('.democheckbox').click();
	});

	// Click Handler: Cancel Button
	$('#filter-cancel-button').click(function () {

		// Clear Filters
		$("#master-page-modal-filter option:selected").each(function () {
			$(this).prop('selected', false);
		});

		// Restore Filters & Comparators
		Modal_RestoreSelections();

		// Fade Out Modal
		$('#master-page-modal-filter-container').fadeOut();

	});


	// Click Handler: Apply Button
	$('#filter-apply-button').click(function () {

		// Save Filters
		State_Set('filter', ModalGetFilters());
		// Save Comparators
		State_Set('comparators', ModalGetComparators());

		// Fade Out Modal
		$('#master-page-modal-filter-container').fadeOut();

		var query = {
			page: 'Modal',
			Requester: 'Modal-#filter-apply-button',
			Filters: ModalGetFilters(),
			EffectivenessByDemo: { Demo: State_Get('demo') },
			Tables: ['items'],
			parameter: 'filterapply'
		};

		Main_SubmitQuery(query);

	});

}


$(document).ready(
	Modal_Render
);