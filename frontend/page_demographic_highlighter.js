// Demographic Highlighter

function DemographicHighlighter_Page() {
    return {
        Label: meta.Labels.pages.DemographicHighlighter.Title,

        LeftPane: meta.Labels.pages.DemographicHighlighter.Label,

        RightPane: `
			<div id="demographic-highlighter-details">
			</div>
        `,

        ClassName: 'demographic-highlighter-container',
        Style: null,
		ShowFilterSummary: true
    };
}

function DemographicHighlighter_Render() {

    var o = [];

	var items_dropdown = Component_Dropdown(
		'item',
		meta.Labels.labels["SelectDimensionOrQuestion"].Label,
		'demographic_highlighter-items-dropdown',
		'',
		ParamValues_Items()
	);

	var breakby_dropdown = Component_Dropdown(
		'breakby',
		meta.Labels.labels["SelectDemographic"].Label,
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
					<div class="selector-label">${meta.Labels.labels["BasisForComparison"].Label}</div>
					<div class="selector-label">${basisForComparisonParamValues[0].Label}</div>
				</div>
			`;

			State_Set('basisForComparison', basisForComparisonParamValues[0].Code);
		} else {
			basisForComparison_dropdown = Component_Dropdown(
				'basisForComparison',
				meta.Labels.labels["BasisForComparison"].Label,
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

    var demographicHighlighterCards = DemographicHighlighter_CreateCards(selectedDemographic, selectedItemId, selectedBasis);

    o.push ( `
			${items_dropdown}			
		</div>
		<div class="demographic-highlighter-card-wrapper">
			${demographicHighlighterCards}
		</div>
    `);

    $('#demographic-highlighter-details').html(
        o.join('')
    );

	$('#demographic_highlighter-breakby-dropdown').change( function() {
		var breakbyElementValue = $(this).val();
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
	var selectedItem = {};

	if(item.indexOf('dimension') >= 0) {
		selectedItem = data.Dimensions[item.split('.')[1]];
	} else {
		selectedItem = data.Items[item.split('.')[1]];
	}

	var differences = DemographicHighlighter_GetDifferences(selectedItem);

	var cardWrapper = '';

	var positiveCard = [];
	var negativeCard = [];

    positiveCard.push('<div class="demographic-highlighter-card" id="demographic-highlighter-card__positive">');
    negativeCard.push('<div class="demographic-highlighter-card" id="demographic-highlighter-card__negative">');

    positiveCard.push('<div class="demographic-highlighter-card__header"><div class="thumbs-up"></div><div class="demographic-highlighter-card__title">' + meta.Labels.labels.PositiveDifferencesTo.Label + ' ' + meta.Labels.drop_downs[basisForComparison].Label + '</div></div>');
    negativeCard.push('<div class="demographic-highlighter-card__header"><div class="thumbs-down"></div><div class="demographic-highlighter-card__title">' + meta.Labels.labels.NegativeDifferencesTo.Label + ' ' + meta.Labels.drop_downs[basisForComparison].Label + '</div></div>');

    positiveCard.push('<div class="demographic-highlighter-card__body">');
    negativeCard.push('<div class="demographic-highlighter-card__body">');

    positiveCard.push('<div class="demographic-highlighter-card__items">');
    negativeCard.push('<div class="demographic-highlighter-card__items">');

	var positiveIndex = 0;
	var negativeIndex = 0;

	for (var i = 0; i < differences.length; i++) {
        if(differences[i].Value >= 0) {
            positiveCard.push(`
            	<div class="item-row">
				    <div class="item-number item-row_section">
						${positiveIndex + 1}
					</div>
					<div class="item-label item-row_section">
						${meta.Labels.BreakBy[breakBy].Options[differences[i].Code].Label}
					</div>
					<div class="items-core item-row_section">
						${selectedItem.BreakBy.Options[differences[i].Code].Distribution.Fav}%
					</div>
				</div>
            `);
			positiveIndex++;
        } else {
            negativeCard.push(`
            	<div class="item-row">
				    <div class="item-number item-row_section">
						${negativeIndex + 1}
					</div>
					<div class="item-label item-row_section">
						${meta.Labels.BreakBy[breakBy].Options[differences[i].Code].Label}
					</div>
					<div class="items-core item-row_section">
						${selectedItem.BreakBy.Options[differences[i].Code].Distribution.Fav}%
					</div>
				</div>
            `);
			negativeIndex++;
        }
	}

	if(positiveIndex == 0) {
		positiveCard.push(`
			<div class="item-row">
					<div class="item-label item-row_section">
						${meta.Labels.labels.none.Label}
					</div>
				</div>
		`);
	}

	if(negativeIndex == 0) {
		negativeCard.push(`
			<div class="item-row">
					<div class="item-label item-row_section">
						${meta.Labels.labels.none.Label}
					</div>
				</div>
		`);
	}

    positiveCard.push('</div></div></div>');
    negativeCard.push('</div></div></div>');

    cardWrapper += positiveCard.join('');
    cardWrapper += negativeCard.join('');

	return cardWrapper;
}

function DemographicHighlighter_GetDifferences(selectedItem) {
	var selectedBreakByOptions = selectedItem.BreakBy.Options;

	var differences = [];

	for(var option in selectedBreakByOptions) {
		var favOptionValue = selectedBreakByOptions[option].vsTotal.Fav

		if(favOptionValue.indexOf('*') >= 0) {
			differences.push({Code: option, Value: parseInt(favOptionValue, 10)});
		}
	}

	return differences;
}

function DemographicHighlighter_HandleSelectorChange(selectorObj) {

	State_Set(selectorObj.parameterName, selectorObj.selectorElementValue);

	if (selectorObj.parameterName == 'breakby') {
		var query = {
			DemographicHighlighter: {
				Item: State_Get('item'),
				BreakBy: State_Get('breakby')
			},
			parameter: 'breakby'
		};

		Main_SubmitQuery(query);
	} else {
		var selectedDemographic = State_Get('breakby');
		var selectedBasis = State_Get('basisForComparison');
		var selectedItemId = State_Get('item');

		var demographicHighlighterCards = DemographicHighlighter_CreateCards(selectedDemographic, selectedItemId, selectedBasis);

		$('.demographic-highlighter-card-wrapper').html(
			demographicHighlighterCards
		);
	}
}