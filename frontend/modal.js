	// Modal

	var modal_filter_variables = {};


	function ClearFilters() {
		$("#master-page-modal-filter option:selected").each ( function () {
			$(this).prop('selected', false);
		});
		
		$('#filter-apply-button').click();
	}
			
	function ClearFiltersIndividualDemographic( demo ) {
	
		$("#master-page-modal-filter option:selected").each ( function () {
			if ($(this).attr('value').split('.')[0] == demo)
				$(this).prop('selected', false);
		});
	
		$('#filter-apply-button').click();
	
	}
	
	function ModalGetFilters() {
		var codes = [];
		$('.demoanswers').each( function() {
		var options = $(this)[0].selectedOptions;
		for (var i=0; i<options.length; ++i)
			codes.push ( options[i].value);
		});
		
		return codes;
	}

	function ModalOpen() {
		$('#master-page-modal-filter-container').fadeIn();
	}
		
	function ModalFilterRenderComparators( comps ) {
		var o = [];
		for (var i=0; i<comps.length; ++i) {
			o.push ( '<div class=demoitem><input class=democheckbox type="checkbox">' + '<span class=answerlabel>' + comps[i] + '</span></input></div>' );
		}
		return o.join('');
	}

	function ModalFilterInternalComparators() {
		var comps = ['Trend 2020', 'Trend 2019', 'Trend 2018', 'Parent', 'Total Company'];
		return ModalFilterRenderComparators ( comps );
	}

	function ModalFilterExternalComparators() {
		var comps = ['Industry Benchmark', 'High Performers'];
		return ModalFilterRenderComparators ( comps );
	}

	$(document).ready (
		function() 
		{
			var o = [];
			
			for (var qid in data.Filters.Items) {
					
				var item = data.Filters.Items[qid];

				var tmp = [];
				for (var i=0; i<item.Answers.length; ++i) {
					var answer = item.Answers[i];
					tmp.push ( `<option value="${qid}.${answer.Code}">${answer.Label}</option>`);
				}
				
				o.push (`
					<div class=filterbox>
						<div class=filterheading>${item.Label}</div>
						<select size=4 multiple=multiple class=demoanswers>${tmp.join('')}</select>
					</div>
				`);
			}
			
			$('#master-page-modal-filter').html (`
				<div class=inner_filter_container>
					<div class=sectionheading>${'Data Filters'}</div>
					<div style="display: flex; flex-wrap: wrap; max-width: 800px;">
						${o.join('')}
					</div>
					<hr>
					<div class=sectionheading style="margin-top: 20px">
						${'Internal Comparators'}
					</div>
					${ModalFilterInternalComparators()}
					<div style="margin-top: 20px" class=sectionheading>
						${'External Comparators'}
					</div>
					${ModalFilterExternalComparators()}
					<hr>
					<input
						id="filter-apply-button" 
						style="background-color: #77bc1f; color:white; border:0; margin: 20px; padding: 10px; width: 120px; font-size: 14px" 
						type=button 
						value="${'Apply'}"
					>
					<input
						id="filter-cancel-button" 
						style="background-color: red; color:white; border:0; margin: 20px; padding: 10px; width: 120px; font-size: 14px" 
						type=button 
						value="${'Cancel'}"
					>
					</input>
				</div>
			`);

			// Click Handler: Filter Option
			$('.answerlabel').click( function() {
				$(this).parent().find('.democheckbox').click();
			});
			

			// Click Handler: Cancel Button
			$('#filter-cancel-button').click( function() {

				// Clear Filters
				$("#master-page-modal-filter option:selected").each ( function () {
					$(this).prop('selected', false);
				});

				// Restore Filters
				var filters = State_Get('filter');
				if (filters == null) filters = []; // no filters have ever been set

				for (var i=0; i<filters.length; ++i) {
					// Check Filter
					$("#master-page-modal-filter option[value='" + filters[i] + "']").prop('selected', true);
				}

				// Fade Out Modal
				$('#master-page-modal-filter-container').fadeOut();		
									
			});
		

			// Click Handler: Apply Button
			$('#filter-apply-button').click( function() {

					// Save Filters
					State_Set( 'filter', ModalGetFilters() );

					// Fade Out Modal
					$('#master-page-modal-filter-container').fadeOut();		
					
					var query = {
						Filters: ModalGetFilters(),
						EffectivenessByDemo: { Demo: State_Get('demo') },
						Tables: ['items']
					};
					
					Main_SubmitQuery ( query );
										
			});

		}

	);
