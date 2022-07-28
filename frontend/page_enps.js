// ENPS


function ENPS_Page() {
    return {
        Label: 'ENPS',

        LeftPane:  meta.Labels.net_promoter.Label,
        RightPane: `
        <div id="enps-details">
            ${Utils_LoremIpsum()}
        </div>
        `,
        
        ClassName: 'enps-container',
        Style: null,
		ShowFilterSummary: true
    };
}

function ENPS_Render() {

    // var d = data.ENPS.Distribution; // N counts
 
    // var brb = TestData_fillBreakByData();

    var d = data.Dimensions["DIM_NPS"].Distribution; // N counts

    //data.Dimensions["dimensions.DIM_NPS"].Distribution.Fav
    //data.Dimensions["dimensions.DIM_NPS"].Distribution.Neu
    //data.Dimensions["dimensions.DIM_NPS"].Distribution.UnFav

    var pct_dist = Utils_PercentDistribution ( [d.Fav, d.Neu, d.Unfav] );

    var pct_detractors = pct_dist[0];
    var pct_neutrals = pct_dist[1];
    var pct_promoters = pct_dist[2];

    var o = [];

    var breakby_dropdown = Component_Dropdown (
        'breakby',
        meta.Labels.labels["BreakBy"].Label,
        'enps-breakby-dropdown',
        '',
        ParamValues_BreakBy()
    );

    o.push ( Component_TestDataIndicator ( data.ENPS.IsTestData ) );



    // Enps card

    var view = ENPS_ComparatorsView();
        
    o.push (`

    <!-- ENPS -->
    <div class="enps-card-wrapper enps-flip-card">
        <div class="flip-card-inner" id="enps">
            <div class="enps-flip-card-front">
                <div class="enps-wrapper">
                    <div class="enps">
                        Your ENPS score
                        <div class="enps-score">
                            ${Math.round( pct_promoters - pct_detractors )}
                        </div>
                    </div>
                </div>


                <!-- PROMOTERS -->
                <div class="enps-distribution enps-distribution-promoters">
                    Promoters
                    <div class="enps-distribution-score">
                        ${Math.round( pct_promoters )}%
                    </div>
                </div>

                <!-- NEUTRALS -->
                <div class="enps-distribution enps-distribution-neutrals">
                    Neutrals
                    <div class="enps-distribution-score">
                        ${Math.round( pct_neutrals )}%
                    </div>
                </div>

                <!-- DETRACTORS -->
                <div class="enps-distribution enps-distribution-detractors">
                    Detractors
                    <div class="enps-distribution-score">
                        ${Math.round( pct_detractors )}%
                    </div>
                </div>

                <div class="enps-distribution-description-wrapper">
                    <!-- PROMOTERS -->
                    <div class="enps-distribution-description">
                        <div class="enps-distribution-count">
                            (N=${d.Fav})
                        </div>
                        Employees who are likely to recommend you
                    </div>

                    <!-- NEUTRALS -->
                    <div class="enps-distribution-description">
                        <div class="enps-distribution-count">
                            (N=${d.Neu})
                        </div>
                        Employees with no strong feelings one way or the other
                    </div>

                    <!-- DETRACTORS -->
                    <div class="enps-distribution-description">
                        <div class="enps-distribution-count">
                            (N=${d.Unfav})
                        </div>
                        Employees who are unwilling to recommend you or will possibly speak unfavorably about you
                    </div>
                </div>

                ${view}

                <div class="enps-flipicon-front" id="enps_front"></div>

            </div>

            <div class="enps-flip-card-back">
                
                <div class="enps-flip-card-back--header"> ENPS formula</div>

                <div class="enps-formula-logo"></div>

                <div style='visibility:hidden;background:#FFF'>
                ${view}
                </div>

                <div class="enps-flipicon-back" id="enps_back"></div>
            </div>
            
            
        </div>
    </div>
    `);

    
    o.push(`
        <div class=enps-details-wrapper>

        <div class="enps-tables-card " id="enps-breakby">
             <div class="exit-card-details-indicator"></div>
             <div class="selector-group">
                 ${breakby_dropdown}
            </div>
            <div class="enps-table">

            
    `);

    var dt = ENPS_ItemsTable();
    o.push ( dt.Html );

    o.push(`
       </div>
       </div>
       </div>
    `);


    $('#enps-details').html(
        o.join('')
    );
    
    if ( dt.ScriptCode != null ) eval ( dt.ScriptCode );
    


    $('#enps-breakby-dropdown').change( function() {
        // Save Selection
        var SelectedOption = $(this).val();
        //parameter
        State_Set ( 'breakby', SelectedOption );

        var query = {
            page: 'ENPS',
			parameter: 'breakby'
        };
        Main_SubmitQuery ( query );
     });




    
    

    // flipcard  hover
    $('.enps-flipicon-front').mouseenter(function() {
        $('.enps-flip-card-front').parent().addClass('enps-flip-card-inner__hover');
    });
    $('.enps-flipicon-front').mouseleave(function() {
        $('.enps-flip-card-front').parent().removeClass('enps-flip-card-inner__hover');
    });


    $('.enps-flipicon-back').mouseenter(function() {
        $('.enps-flip-card-back').parent().addClass('enps-flip-card-inner-back__hover');
    });
    $('.enps-flipicon-back').mouseleave(function() {
        $('.enps-flip-card-back').parent().removeClass('enps-flip-card-inner-back__hover');
    });

    

    // Click: Flip Card - Front
	$('.enps-flipicon-front').click(function() {
		ENPS_FlipFrontToBack($(this));
	});

	// Click: Flip Card - Back
	$('.enps-flipicon-back').click(function() {
        ENPS_FlipBackToFront($(this));
	});


    //Show/hide details table

    $('#enps-moredetails-button').click(function() {
        $('#enps-breakby').toggleClass("data-hidden");
	});
    $('.exit-card-details-indicator').click(function() {
        $(this).parent().toggleClass("data-hidden");
        console.log(this);
	});



    // Card Flip

    function ENPS_FlipFrontToBack(x) {
        x.parent().parent().removeClass('enps-flip-card-inner__hover');
        x.parent().parent().addClass('enps-flip-card-inner-click');
        $(".enps-flip-card-back").velocity('fadeIn', {
            delay: 0,
            duration: 1000
        });
    }
        
        
    function ENPS_FlipBackToFront(x) {
        x.parent().parent().removeClass('enps-flip-card-inner-back__hover');
        x.parent().parent().removeClass('enps-flip-card-inner-click');
        $(".enps-flip-card-front").velocity('fadeIn', {
            delay: 0,
            duration: 1000
        });
    }


    if ( Main_IsFirstClick( 'ENPS' ) ) {
        // Animation; only run 1st time
        var d = $('.enps-distribution');
        d.css('position', 'relative');
        d.css('top', '100px');

        var delay = 0;
        d.each(function(){
            $(this).velocity({opacity:1, top:0}, {duration: 300, delay: delay+=100});
            }
        );

        $('.enps-add').velocity(
            {opacity: 1}, {delay: delay+=300}
        );

        $('.enps-subtract').velocity(
            {opacity: 1}, {delay: delay+=300}
        );

        $('.enps-distribution-description').each(function(){
            delay += 300;
            $(this).velocity({opacity: 1}, {duration: 500, delay: delay})
        });    
    }
    else {
        $('.enps-add, .enps-subtract, .enps-distribution, .enps-distribution-description').css('opacity', 1);
    }

    $("#enps-details").scrollTop(0);
}


function ENPS_ComparatorsView() {
    var comparators = State_Get('comparators');
    var NofComparators = comparators ? comparators.length : 0;
    var item = data.Items[95];
    var html = '';
    if (NofComparators > 0) {
       var html = "<div class='enps-comparators-card'>";

       for (var i=0; i<NofComparators; i++) {
          var label = item.Comparators[comparators[i]].Label;
          var nps = item.Comparators[comparators[i]].NPS;
          var fav = item.Comparators[comparators[i]].Distribution.Fav;
          var neu = item.Comparators[comparators[i]].Distribution.Neu;
          var unfav = item.Comparators[comparators[i]].Distribution.Unfav;

          html += '<div class="trend-wrapper"><div class="trend-label">' + label + '</div><div class="trend-arrow"></div><div class="trend-math"></div><div class="trend-promoters">' + fav + '%</div><div class="trend-math">-</div><div class="trend-detractors">' + unfav + '%</div><div class="trend-math">=</div><div class="trend-enps">' + nps + '</div></div>';
        }
       html += "</div>"
    }
    return html;

}


function ENPS_ItemsTable() {
	// Return Value: {Html: <string>, [ScriptCode: <string>]}

	//var dim = State_Get('dim'); 
	//var dimensionId = dim.indexOf('dimensions.') == 0 ? dim : ''; 
	
	var headers = [
        [
        { Label: "", ClassName: 'id-cell', rowspan: 2 },
		{Label: " ", ClassName: 'text-cell', colspan: 1, rowspan: 2},
		{Label: "Valid N", ClassName: 'numeric-cell', colspan: 1, rowspan: 2},
		{Label: "% Distribution", ClassName: 'numeric-cell', colspan: 3, rowspan: 1},

		{Label: "Distribution", ClassName: 'numeric-cell', colspan: 1, rowspan: 2},
        {Label: "ENPS", ClassName: 'numeric-cell', colspan: 1, rowspan: 2}
        ]
	];

    var distributionSubHeader = [
        {Label: "Fav", ClassName: 'numeric-cell distribution-cell'},
		{Label: "Neu", ClassName: 'numeric-cell distribution-cell'},
		{Label: "Unfav", ClassName: 'numeric-cell distribution-cell'},
    ]

    var breakBySubheader = [
        {Label: meta.Labels.BreakBy["Hierarchy"].Title, ClassName: 'text-cell distribution-cell', colspan: 7, rowspan: 1},
    ]

    headers.push(distributionSubHeader);
    //headers.push(breakBySubheader);

    var table_data = [];
	var rowdata = [];
	var item = {};

	//if (itemId) item = data.ItemsNew[itemId];
	//else if (dimensionId) item = data.Dimensions[dimensionId];
    item = data.Dimensions.DIM_NPS;

    rowdata = [
        { Label: '0', ClassName: 'id-cell' },
        { Label: meta.Labels.BreakBy["Hierarchy"].Title, ClassName: 'text-cell'},
        { Label: item.N, ClassName: 'numeric-cell' },
        { Label: item.Distribution.Fav, ClassName: 'numeric-cell distribution-cell' },
        { Label: item.Distribution.Neu, ClassName: 'numeric-cell distribution-cell' },
        { Label: item.Distribution.Unfav, ClassName: 'numeric-cell distribution-cell' },
        { Label: Component_DistributionChartStacked(item.Distribution), datasort: item.Distribution.Fav, ClassName: 'text-cell' },
        { Label: item.Distribution.Fav - item.Distribution.Unfav, ClassName: 'numeric-cell distribution-cell' }
    ];
    table_data.push(rowdata);

    
    rowdata = [
        { Label: '1', ClassName: 'id-cell' },
        { Label: item.BreakBy.Variable + ":", ClassName: 'separator-cell'},
        { Label: '', ClassName: 'separator-cell' },
        { Label: '', ClassName: 'separator-cell' },
        { Label: '', ClassName: 'separator-cell' },
        { Label: '', ClassName: 'separator-cell' },
        { Label: '', ClassName: 'separator-cell' },
        { Label: '', ClassName: 'separator-cell' },
    ];
    table_data.push(rowdata);
    


    
		for (var j in item.BreakBy.Options) {
			var option = item.BreakBy.Options[j];
			rowdata = [
                { Label: '2', ClassName: 'id-cell' },
				{ Label: meta.Labels.BreakBy[item.BreakBy.Variable].Options[j].Label, ClassName: 'text-cell' },
				{ Label: option.N, ClassName: 'numeric-cell' },
				{ Label: option.Distribution.Fav, ClassName: 'numeric-cell distribution-cell' },
				{ Label: option.Distribution.Neu, ClassName: 'numeric-cell distribution-cell' },
				{ Label: option.Distribution.Unfav, ClassName: 'numeric-cell distribution-cell' },
				{ Label: Component_DistributionChartStacked(option.Distribution), datasort: option.Distribution.Fav, ClassName: 'text-cell' },
                { Label: option.NPS, ClassName: 'numeric-cell distribution-cell' }
			];
		//	for (var i = 0; i < NofComparators; i++) {
		//		var value = option.Comparators[comparators[i]].Value;
		//		sigClassname = (value.indexOf('*')>0) ? (value.indexOf('-')==0 ? 'cell-red' : 'cell-green') : '';
		//		rowdata.push({ Label: value, datasort: value.replace(/\*/g,''), ClassName: 'numeric-cell '+sigClassname });
		//	}
			table_data.push(rowdata);
		}

    var hideColumns = [0];

	var columnSettings = `
		'orderFixed': [ 0, 'asc' ],
		'order': [],
		'columnDefs': [
			{ 'targets': [ ${hideColumns.join(',')} ], 'visible': false },
			{ 'targets': '_all', type: 'natural' }
		],
	`;
    
    var exportColumns = [];
	for (var k = 1; k < 6; k++) exportColumns.push(k);
    
    var buttonSettings = `
        [
            {
                extend: 'copyHtml5',
				title: 'Data export',
                exportOptions: { columns: [ ${exportColumns.join(',')} ] }
            }, 
            {
                extend: 'excelHtml5',
				title: 'Data export',
                exportOptions: { columns: [ ${exportColumns.join(',')} ] }
            }, 
            {
                extend: 'csvHtml5',
				title: 'Data export',
                exportOptions: { columns: [ ${exportColumns.join(',')} ] }
            }, 
            {
                extend: 'pdfHtml5',
				title: 'Data export',
                exportOptions: { columns: [ ${exportColumns.join(',')} ] }
            }, 
        ],
    `;
    // table_id, class_name, headers, data, isSortable, isSearchable, columnSettings, showButtons, buttonSettings 
	var dt = Component_DataTable (
		"enps-table-all-items",
		"enps-table",
		headers,
		table_data,
		true,
		true,
        columnSettings,
        true,
        buttonSettings
	);
    console.log(dt);
	return dt;
}