function ENPSScore_Page() {
    return {
        Label: meta.Labels['ENPSScore'].Title,

        LeftPane:  meta.Labels['ENPSScore'].Label,
        RightPane: `
        <div id="enps-score-details">
        </div>
        `,
        
        ClassName: 'enps-score-container',
        Style: null,
		ShowFilterSummary: true
    };
}

function ENPSScore_Render() {

    var current_key = Main_GetKeyWithFilter('ENPS', config.CurrentWave, data.User.PersonalizedReportBase);
    var current_enps = data[current_key];

    //var d = data.Dimensions["DIM_NPS"].Distribution; // N counts
    var d = current_enps.Dist;


    var pct_dist = Utils_CountsToPercents ( d ); // PercentDistribution ( [d.Promoters, d.Neutrals, d.Detractors] );

    var pct_detractors = pct_dist.Detractors;
    var pct_neutrals = pct_dist.Neutrals;
    var pct_promoters = pct_dist.Promoters;

    //var n_dist = data.Dimensions["DIM_NPS"].DistributionScale;

    var n_detractors = d.Detractors; //n_dist[0] + n_dist[1] + n_dist[2] + n_dist[3] + n_dist[4] + n_dist[5] + n_dist[6];
    var n_neutrals = d.Neutrals; //n_dist[7] + n_dist[8];
    var n_promoters = d.Promoters; //n_dist[9] + n_dist[10];

    var o = [];

    //o.push ( Component_TestDataIndicator ( data.ENPS.IsTestData ) );

    // Enps card

    var view = ENPSScore_ComparatorsView();
    var columns = ENPSScore_ScaleDistributionView();

    let formatter = Utils_FormatOutput;
    let formatterPct = Utils_FormatPctOutput;

    let enpsScore = (pct_promoters == null || pct_detractors == null) ? null : pct_promoters - pct_detractors;

    o.push (`

    <!-- ENPS -->
    <div class="enps-card-wrapper enps-flip-card">
        <div class="flip-card-inner" id="enps">
            <div class="enps-flip-card-front">
                <div class="enps-wrapper">
                    <div class="enps">


                        ${meta.Labels['ENPSTexts.ENPSCardFrontTitle'].Label}
                        <div class="enps-score">
                            ${Utils_FormatOutput(enpsScore)}
                        </div>
                        <div class="qtext">${meta.Labels['ENPSTexts.ENPSQuestion'].Label}</div>
                    </div>
                </div>

                <div class="enps-distribution-wrapper">
                <!-- PROMOTERS -->
                <div class="enps-distribution enps-distribution-promoters">
                    ${meta.Labels['labels.Promoters'].Label}
                    <div class="enps-distribution-score">
                        ${formatterPct( pct_promoters )}
                    </div>
                </div>

                <!-- NEUTRALS -->
                <div class="enps-distribution enps-distribution-neutrals">
                    ${meta.Labels['labels.Passives'].Label}
                    <div class="enps-distribution-score">
                        ${formatterPct( pct_neutrals )}
                    </div>
                </div>

                <!-- DETRACTORS -->
                <div class="enps-distribution enps-distribution-detractors">
                    ${meta.Labels['labels.Detractors'].Label}
                    <div class="enps-distribution-score">
                        ${formatterPct( pct_detractors )} 
                    </div>
                </div>
                </div>

                <div class="enps-distribution-description-wrapper">
                    <!-- PROMOTERS -->
                    <div class="enps-distribution-description">
                        <div class="enps-distribution-count">
                            (N=${formatter(d.Promoters)})
                        </div>
                        ${meta.Labels['ENPSTexts.ENPSPromotersDesc'].Label}
                    </div>

                    <!-- NEUTRALS -->
                    <div class="enps-distribution-description">
                        <div class="enps-distribution-count">
                            (N=${formatter(d.Neutrals)})
                        </div>
                        ${meta.Labels['ENPSTexts.ENPSPassivesDesc'].Label}
                    </div>

                    <!-- DETRACTORS -->
                    <div class="enps-distribution-description">
                        <div class="enps-distribution-count">
                            (N=${formatter(d.Detractors)})
                        </div>
                        ${meta.Labels['ENPSTexts.ENPSDetractorsDesc'].Label}
                    </div>
                </div>

                ${view}

                <div class="enps-flipicon-front" id="ENPSScore_front"></div>

            </div>

            <div class="enps-flip-card-back">

            <div class="enps-wrapper">
            <div class="enps">
                ${meta.Labels['ENPSTexts.ENPSCardBackTitle'].Label}
                <div class="enps-score">
                    ${formatter(current_enps.N)}
                </div>
                <div class="qtext">${meta.Labels['ENPSTexts.ENPSQuestion'].Label}</div>
            </div>
        </div>
        
        <div class="enps-distribution-wrapper">
            <!-- PROMOTERS -->
            <div class="enps-distribution enps-distribution-promoters">
                ${meta.Labels['labels.Promoters'].Label}
                <div class="enps-distribution-score">
                    ${formatter(n_promoters)}
                </div>
            </div>

            <!-- NEUTRALS -->
            <div class="enps-distribution enps-distribution-neutrals">
                ${meta.Labels['labels.Passives'].Label}
                <div class="enps-distribution-score">
                    ${formatter(n_neutrals)}
                </div>
            </div>

            <!-- DETRACTORS -->
            <div class="enps-distribution enps-distribution-detractors">
                ${meta.Labels['labels.Detractors'].Label}
                <div class="enps-distribution-score">
                    ${formatter(n_detractors)}
                </div>
            </div>
        </div>
        <div class="enps-graph-wrapper">
          <div class="smile-wrapper">
            <div class="material-icons enps-smile-promoter">sentiment_satisfied_alt</div>
            <div class="material-icons enps-smile-promoter">sentiment_satisfied_alt</div>
            <div class="material-icons enps-smile-passive">sentiment_neutral</div>
            <div class="material-icons enps-smile-passive">sentiment_neutral</div>
            <div class="material-icons enps-smile-detractor">sentiment_very_dissatisfied</div>
            <div class="material-icons enps-smile-detractor">sentiment_very_dissatisfied</div>
            <div class="material-icons enps-smile-detractor">sentiment_very_dissatisfied</div>
            <div class="material-icons enps-smile-detractor">sentiment_very_dissatisfied</div>
            <div class="material-icons enps-smile-detractor">sentiment_very_dissatisfied</div>
            <div class="material-icons enps-smile-detractor">sentiment_very_dissatisfied</div>
            <div class="material-icons enps-smile-detractor">sentiment_very_dissatisfied</div>
          </div>
          <div class="label-wrapper">
             <div class="promoter-label">${meta.Labels['labels.Promoters'].Label}</div>
             <div class="passive-label">${meta.Labels['labels.Passives'].Label}</div>
             <div class="detractor-label">${meta.Labels['labels.Detractors'].Label}</div>
          </div>
          <div class="border-wrapper">
             <div class="promoter-border"></div>
             <div class="promoter-border"></div>
             <div class="passive-border"></div>
             <div class="passive-border"></div>
             <div class="detractor-border"></div>
             <div class="detractor-border"></div>
             <div class="detractor-border"></div>
             <div class="detractor-border"></div>
             <div class="detractor-border"></div>
             <div class="detractor-border"></div>
             <div class="detractor-border"></div>
          </div>
          <!--
          <div class="column-wrapper">
          ${columns}
          </div>
          -->
          <div class="number-wrapper">
             <div class="number">10</div>
             <div class="number">9</div>
             <div class="number">8</div>
             <div class="number">7</div>
             <div class="number">6</div>
             <div class="number">5</div>
             <div class="number">4</div>
             <div class="number">3</div>
             <div class="number">2</div>
             <div class="number">1</div>
             <div class="number">0</div>
          </div>
        </div>

                <!-- OLD BACK SIDE DESIGN START -->
                <!--
                <div class="enps-flip-card-back--header">${meta.Labels['ENPSTexts.ENPSCardBackTitle'].Label}</div>

                <div class="formula-block-wrapper">
                    <div class="grid-wrapper">
                        <div class="detractors-grid-wrapper">
                            <div class="detractors-grid-upperlabel">${meta.Labels['labels.Detractors'].Label}</div>
                            <div class="detractors-grid">
                                <div class="detractors-grid-item">0</div>
                                <div class="detractors-grid-item">1</div> 
                                <div class="detractors-grid-item">2</div> 
                                <div class="detractors-grid-item">3</div> 
                                <div class="detractors-grid-item">4</div> 
                                <div class="detractors-grid-item">5</div>
                                <div class="detractors-grid-item">6</div> 
                            </div>
                            <div class="detractors-grid-lowerlabel">${meta.Labels['ENPSTexts.ENPSDetractorsScale'].Label}</div>
                        </div>
                        <div class="passives-grid-wrapper">
                            <div class="passives-grid-upperlabel">${meta.Labels['labels.Passives'].Label}</div>
                            <div class="passives-grid">
                                <div class="passives-grid-item">7</div>
                                <div class="passives-grid-item">8</div> 
                            </div>
                            <div class="passives-grid-lowerlabel">${meta.Labels['ENPSTexts.ENPSPassivesScale'].Label}</div>
                        </div>
                        <div class="promoters-grid-wrapper">
                            <div class="promoters-grid-upperlabel">${meta.Labels['labels.Promoters'].Label}</div>
                            <div class="promoters-grid">
                                <div class="promoters-grid-item">9</div>
                                <div class="promoters-grid-item">10</div>
                            </div>
                            <div class="promoters-grid-lowerlabel">${meta.Labels['ENPSTexts.ENPSPromotersScale'].Label}</div>
                        </div>
                    </div>

                    <div class="formula-wrapper">
                        <div class="nps-block">${meta.Labels['labels.ENPS'].Label}</div>
                        <div class="math-block">=</div>
                        <div class="promoters-block"><div class="white-text">${meta.Labels['labels.PercentPromoters'].Label}</div><div class="gray-text">${meta.ENPSTexts.ENPSPromotersScaleDesc.Label}</div></div>
                        <div class="math-block">-</div>
                        <div class="detractors-block"><div class="white-text">${meta.Labels['labels.PercentDetractors'].Label}</div><div class="gray-text">${meta.ENPSTexts.ENPSDetractorsScaleDesc.Label}</div></div>
                    </div>
                </div>
                -->
                <!-- OLD BACK SIDE DESIGN END -->

                <div class="enps-flipicon-back" id="ENPSScore_back"></div>
            </div>
            
            
        </div>
    </div>
    `);

    $('#enps-score-details').html(
        o.join('')
    );
    

    // flipcard  hover
    $('.enps-flip-card-front').mouseenter(function() {
        $(this).parent().addClass('enps-flip-card-inner__hover');
        $('.enps-flipicon-front').addClass('flipicon_hover');
    });
    $('.enps-flip-card-front').mouseleave(function() {
        $(this).parent().removeClass('enps-flip-card-inner__hover');
        $('.enps-flipicon-front').removeClass('flipicon_hover');
    });


    $('.enps-flip-card-back').mouseenter(function() {
        $(this).parent().addClass('enps-flip-card-inner-back__hover');
        $('.enps-flipicon-back').addClass('flipicon_hover');
    });
    $('.enps-flip-card-back').mouseleave(function() {
        $(this).parent().removeClass('enps-flip-card-inner-back__hover');
        $('.enps-flipicon-back').removeClass('flipicon_hover');
    });

    

    // Click: Flip Card - Front
	$('.enps-flip-card-front').click(function() {
		ENPSScore_FlipFrontToBack($(this));
	});

	// Click: Flip Card - Back
	$('.enps-flip-card-back').click(function() {
        ENPSScore_FlipBackToFront($(this));
	});


    //Show/hide details table

    $('#enps-moredetails-button').click(function() {
        $('#enps-breakby').toggleClass("data-hidden");
	});
    $('.exit-card-details-indicator').click(function() {
        $(this).parent().toggleClass("data-hidden");
	});



    // Card Flip

    function ENPSScore_FlipFrontToBack(x) {
        x.parent().removeClass('enps-flip-card-inner__hover');
        x.parent().addClass('enps-flip-card-inner-click');
        $(".enps-flip-card-back").velocity('fadeIn', {
            delay: 0,
            duration: 500
        });
        $(".enps-flip-card-front").velocity('fadeOut', {
            delay: 0,
            duration: 500
        });
        $('body').scrollTop(0);
    }
        
        
    function ENPSScore_FlipBackToFront(x) {
        x.parent().removeClass('enps-flip-card-inner-back__hover');
        x.parent().removeClass('enps-flip-card-inner-click');
        $(".enps-flip-card-front").velocity('fadeIn', {
            delay: 0,
            duration: 500
        });
        $(".enps-flip-card-back").velocity('fadeOut', {
            delay: 0,
            duration: 500
        });
        $('body').scrollTop(0);
    }


    if ( Main_IsFirstClick( 'ENPSScore' ) ) {
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

    $("body").scrollTop(0);
}


function ENPSScore_ComparatorsView() {
    var comparators = Main_CompactComparatorSet(); // State_Get('comparators');
    var comparators_data = Main_ComparatorsData_WithFilter('ENPS');

    var NofComparators = comparators ? comparators.length : 0;

    var html = '';
    if (NofComparators > 0) {
        var html = "<div class='enps-comparators-card'>";

        for (var i=0; i<NofComparators; i++) {

            var comparator_id = comparators[i];

            // Unclear where NPS external norm data is coming from, so only do internal comparators for now
            if (comparator_id.split('.')[0] == 'Internal') {

                var comp = comparators_data[comparator_id];
                var label = meta.Comparators[comparator_id].Label;
                var pct_distribution = Utils_CountsToPercents ( comp.Dist );
                var fav = pct_distribution.Promoters; //comp.Distribution.Fav;
                var unfav = pct_distribution.Detractors; //comp.Distribution.Unfav;
                var nps = fav - unfav; //comp.NPS;

                var fav_display = (fav == null) ? NOT_AVAILABLE : fav + '%';
                var unfav_display = (unfav == null) ? NOT_AVAILABLE : unfav + '%';
                var enps_display = (fav == null || unfav == null) ? NOT_AVAILABLE : fav-unfav;
                

                html += `
                    <div class="enps-trend-wrapper">
                        <div class="enps-trend-label">${label}</div>
                        <div class="enps-trend-arrow"></div>
                        <div class="enps-trend-math"></div>
                        <div class="enps-trend-promoters">${fav_display}</div>
                        <div class="enps-trend-math">-</div>
                        <div class="enps-trend-detractors">${unfav_display}</div>
                        <div class="enps-trend-math">=</div>
                        <div class="enps-trend-enps">${enps_display}</div>
                    </div>`;
            }
        }
        html += "</div>"
    }
    return html;

}

function ENPSScore_ScaleDistributionView() {
    var html = '';
    var blockHeight = 70;
    var color = '';

    // Temporarily, generate random data distribution for the 0-10 scale 
    var scaleDistribition = []; //data.Dimensions["DIM_NPS"].DistributionScale;
    for (var i=0; i<11; ++i)
        scaleDistribition.push ( Math.round(Math.random()*100) );

    var maxVal = Math.max.apply(null, scaleDistribition);
    
    for (var i=scaleDistribition.length - 1; i>=0; i--) {
        if (i>8) color = '#77bc1f';
        if (i>=7 && i<=8) color = 'orange';
        if (i<=6) color = '#d30f1d';
        proportion = scaleDistribition[i] * 0.95 / maxVal;
        height = Math.round(blockHeight * proportion);
        html += '<div class="column" style="background-color: ' + color + '; height:' + height + 'px;"></div>';
    }
    return html;
}

