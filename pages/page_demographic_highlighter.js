// Demographic Highlighter

function DemographicHighlighter_Page() {
	return {
		Label: meta.Labels.DemographicHighlighter.Title,

		LeftPane: meta.Labels.DemographicHighlighter.Label,

		RightPane: `
			<div id="demographic-highlighter-details">
			</div>
        `,

		ClassName: 'demographic-highlighter-container',
		Style: null,
		ShowFilterSummary: true
	};
}

function DemographicHighlighter_PageId() {
	return 'submenuitem-GroupExplore-DemographicHighlighter';
}

function DemographicHighlighter_Render() {

	var o = [];

	var items_dropdown = Component_Dropdown(
		'item',
		meta.Labels["labels.SelectDimensionOrQuestion"].Label,
		'demographic_highlighter-items-dropdown',
		'',
		ParamValues_Items()
	);

	var breakby_dropdown = Component_Dropdown(
		'breakby',
		meta.Labels["labels.SelectDemographic"].Label,
		'demographic_highlighter-breakby-dropdown',
		'',
		ParamValues_BreakBy()
	);

	o.push ( `
		<div class="selector-group">        
			${breakby_dropdown}
		`);

	var basisForComparison_dropdown = '';
	var basisForComparisonParamValues = ParamValues_DemographicHighlight_BasisForComparison();

	if(!!basisForComparisonParamValues) {
		if (basisForComparisonParamValues.length == 1) {
			basisForComparison_dropdown = `
				<div class="selector-row">
					<div class="selector-label">${meta.Labels["labels.BasisForComparison"].Label}</div>
					<div class="selector-label">${basisForComparisonParamValues[0].Label}</div>
				</div>
			`;

			State_Set('basisForComparison', basisForComparisonParamValues[0].Code);
		} else {
			basisForComparison_dropdown = Component_Dropdown(
				'basisForComparison',
				meta.Labels["labels.BasisForComparison"].Label,
				'demographic_highlighter-BasisForComparison-dropdown',
				'',
				basisForComparisonParamValues
			);
		}

		o.push(basisForComparison_dropdown);
	}

	var selectedDemographic = State_Get('breakby');
	var selectedBasis = State_Get('basisForComparison');
	var selectedItemId = State_Get('item');




	var dh = DemographicHighlighter_CreateCards(selectedDemographic, selectedItemId, selectedBasis);

	o.push ( `
				${items_dropdown}			
			</div>
			<div class="demographic-highlighter-card-wrapper dropshadow">
			`);
	o.push(dh.Html);
	o.push(`</div>`);


	$('#demographic-highlighter-details').html(
		o.join('')
	);

	if (!!dh.ScriptCode) {
		eval(dh.ScriptCode);
	}

	// Animation
	$('#demographic-highlighter-card__positive, #demographic-highlighter-card__negative').css('opacity', 0);

	$('#demographic-highlighter-card__positive').velocity(
		{opacity: 1, transform: "scale(1)"},
		{duration: 200, delay: 200}
	);

	$('#demographic-highlighter-card__negative').velocity(
		{opacity: 1, transform: "scale(1)"},
		{duration: 200, delay: 400}
	);

	$('#demographic_highlighter-breakby-dropdown').change( function() {
		var breakbyElementValue = $(this).val();
		State_Set ('breakby', breakbyElementValue);
		var selectorObj = {
			selectorElementValue: breakbyElementValue,
			parameterName: 'breakby'
		}

		DemographicHighlighter_HandleSelectorChange(selectorObj);
	});

	$('#demographic_highlighter-items-dropdown').change(function () {
		var itemsElementValue = $(this).val();
		var selectorObj = {
			selectorElementValue: itemsElementValue,
			parameterName: 'item'
		}

		DemographicHighlighter_HandleSelectorChange(selectorObj);
	});

	if($('#demographic_highlighter-BasisForComparison-dropdown').length > 0) {
		$('#demographic_highlighter-BasisForComparison-dropdown').change(function () {
			var basisForComparisonElementValue = $(this).val();
			var selectorObj = {
				selectorElementValue: basisForComparisonElementValue,
				parameterName: 'basisForComparison'
			};

			DemographicHighlighter_HandleSelectorChange(selectorObj);
		});
	}

}

function DemographicHighlighter_CreateCards(breakBy, item, basisForComparison) {

	if ( DemographicHighlighter_MissingData() ) {
		return {
			Html: Main_Loader(),
			ScriptCode: "if ( DemographicHighlighter_PageId() == State_GetCurrentPageId()) Main_SubmitQuery ( {Requester: 'DemographicHighlighter_Render', ShowWaitMessage: false, DataRequest:[{ Type: 'ItemsAndDimensions.Breakdown', Breakdown:'" + DemographicHighlighter_VariableId() + "'}]} );"
		};
	}

	var parts = item.split('.'); // example: ['dimension', 'DIM_ENG']

	var is_dimension = ( parts[0] == 'dimensions' );

	var overall_data = is_dimension
		? Main_CurrentDimensionsData_WithFilter()[parts[1]]
		: Main_CurrentItemsData_WithFilter()[parts[1]];

	var breakdown_data = is_dimension
		? data [ Main_GetKeyWithFilter('DIMSX', config.CurrentWave, data.User.PersonalizedReportBase, breakBy )]
		: data [ Main_GetKeyWithFilter('ITEMSX', config.CurrentWave, data.User.PersonalizedReportBase, breakBy )];

	var differences = DemographicHighlighter_GetDifferences(overall_data, breakdown_data, parts[1], is_dimension );

	var cardWrapper = '';

	var positiveCard = [];
	var negativeCard = [];

	positiveCard.push('<div class="demographic-highlighter-card" id="demographic-highlighter-card__positive">');
	negativeCard.push('<div class="demographic-highlighter-card" id="demographic-highlighter-card__negative">');

	positiveCard.push('<div class="demographic-highlighter-card__header"><div class="thumbs-up"></div><div class="demographic-highlighter-card__title">' + meta.Labels['labels.PositiveDifferencesTo'].Label + ' ' + meta.Labels['labels.' + basisForComparison].Label + '</div></div>');
	negativeCard.push('<div class="demographic-highlighter-card__header"><div class="thumbs-down"></div><div class="demographic-highlighter-card__title">' + meta.Labels['labels.NegativeDifferencesTo'].Label + ' ' + meta.Labels['labels.' + basisForComparison].Label + '</div></div>');

	positiveCard.push('<div class="demographic-highlighter-card__body">');
	negativeCard.push('<div class="demographic-highlighter-card__body">');

	positiveCard.push('<table class="demographic-highlighter-card__items"><tbody>');
	negativeCard.push('<table class="demographic-highlighter-card__items"><tbody>');

	var positiveIndex = 0;
	var negativeIndex = 0;

	for (var i = 0; i < differences.length; i++) {

		/*
		var demog_data = breakdown_data[differences[i].Code][parts[1]];
		var dist = is_dimension
			? demog_data.Dist
			: Utils_CountsToPercents ( demog_data.Dist );
		*/

		var option;

		if (breakBy == config.PFQ) {
			option = meta.Hierarchy.Map[differences[i].Code];
		} else {
			option = meta.Demographics[breakBy].Answers[differences[i].Code];
		}

		if(differences[i].Value >= 0) {
			positiveCard.push(`
            	<tr class="item-row">
				    <td class="item-number item-row_section">
						${positiveIndex + 1}
					</td>
					<td class="item-label item-row_section">
						${option.Label}
					</td>
					<td class="items-core item-row_section">
						${'+' + differences[i].Value + ' *'}
					</td>
				</tr>
            `);
			positiveIndex++;
		} else {
			negativeCard.push(`
            	<tr class="item-row">
				    <td class="item-number item-row_section">
						${negativeIndex + 1}
					</td>
					<td class="item-label item-row_section">
						${option.Label}
					</td>
					<td class="items-core item-row_section">
					${differences[i].Value + ' *'}
					</td>
				</tr>
            `);
			negativeIndex++;
		}
	}

	if(positiveIndex == 0) {
		positiveCard.push(`
				<tr class="item-row">
					<td class="item-label item-row_section">
						${meta.Labels['labels.none'].Label}
					</td>
				</tr>
		`);
	}

	if(negativeIndex == 0) {
		negativeCard.push(`
				<tr class="item-row">
					<td class="item-label item-row_section">
						${meta.Labels['labels.none'].Label}
					</td>
				</tr>
		`);
	}

	positiveCard.push('</tbody></table></div></div>');
	negativeCard.push('</tbody></table></div>');

	cardWrapper += positiveCard.join('');
	cardWrapper += negativeCard.join('');

	return {Html: cardWrapper};
}

function DemographicHighlighter_GetDifferences(overall_data, breakdown_data, item_id, is_dimension) {
	var differences = [];

	for (var key in breakdown_data) { // example: key="410" (Male)
		var comp_data = breakdown_data[key][item_id];
		var sigtest = Utils_SigTest ( comp_data, overall_data, 'Fav', is_dimension);

		if (sigtest.IsSignificant) {
			differences.push (
				{
					Code: key,
					Value: sigtest.Diff
				}
			)
		}
	}


	return differences;
}

function DemographicHighlighter_HandleSelectorChange(selectorObj) {

	State_Set(selectorObj.parameterName, selectorObj.selectorElementValue);

	if (selectorObj.parameterName == 'breakby') {

		Main_RefreshCurrentPage();

	} else {
		var selectedDemographic = State_Get('breakby');
		var selectedBasis = State_Get('basisForComparison');
		var selectedItemId = State_Get('item');



		var dh = DemographicHighlighter_CreateCards(selectedDemographic, selectedItemId, selectedBasis);

		$('.demographic-highlighter-card-wrapper').html(
			dh.Html
		);

		if (!!dh.ScriptCode) {
			eval ( dh.ScriptCode );
		}

		// Animation
		$('#demographic-highlighter-card__positive, #demographic-highlighter-card__negative').css('opacity', 0);

		$('#demographic-highlighter-card__positive').velocity(
			{opacity: 1, transform: "scale(1)"},
			{duration: 200, delay: 200}
		);

		$('#demographic-highlighter-card__negative').velocity(
			{opacity: 1, transform: "scale(1)"},
			{duration: 200, delay: 400}
		);

	}
}

function DemographicHighlighter_VariableId() {
	var x = $('#demographic_highlighter-breakby-dropdown').val();
	if ( x == null ) x = state.Parameters.breakby;

	return x;
}

function DemographicHighlighter_Key() {
	return Main_GetKeyWithFilter('ITEMSX', config.CurrentWave, data.User.PersonalizedReportBase, State_Get('breakby') );
}

function DemographicHighlighter_Data() {
	var key = DemographicHighlighter_Key();

	return data[key];
}

function DemographicHighlighter_MissingData() {
	// return true if rendering cannot happen due to missing data

	var is_missing_data = (DemographicHighlighter_Data() == null);

	return is_missing_data;
}