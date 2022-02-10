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

    var d = data.ENPS.Distribution; // N counts
    var pct_dist = Utils_PercentDistribution ( [d.Detractors, d.Neutrals, d.Promoters] );

    var pct_detractors = pct_dist[0];
    var pct_neutrals = pct_dist[1];
    var pct_promoters = pct_dist[2];

    var o = [];

    o.push ( Component_TestDataIndicator ( data.ENPS.IsTestData ) );

    o.push (`

    <!-- ENPS -->
    <div class="enps_wrapper">
        <div class="enps">


            Your ENPS score
            <div class="enps-score">
                ${Math.round( pct_promoters - pct_detractors )}
            </div>


        </div>

        <div class="enps-add" style="left: 110px;">
            Add ${Math.round( pct_promoters )}
        </div>
        
        <div class="enps-subtract" style="left: 400px;">
            Subtract ${Math.round( pct_detractors )}
        </div>

    </div>


    <!-- PROMOTERS -->
    <div class="enps-distribution enps-distribution-promoters" style="background-color: #77bc1f;">
        Promoters
        <div class="enps-distribution-score">
            ${Math.round( pct_promoters )}%
        </div>
    </div>

    <!-- NEUTRALS -->
    <div class="enps-distribution" style="background-color: #FFFFCC; color: black;">
        Neutrals
        <div class="enps-distribution-score">
            ${Math.round( pct_neutrals )}%
        </div>
    </div>

    <!-- DETRACTORS -->
    <div class="enps-distribution enps-distribution-detractors" style="background-color: #d30f1d;">
        Detractors
        <div class="enps-distribution-score">
            ${Math.round( pct_detractors )}%
        </div>
    </div>

    <div>
        <!-- PROMOTERS -->
        <div class="enps-distribution-description">
            <div class="enps-distribution-count">
                (N=${d.Promoters})
            </div>
            Employees who are likely to recommend you
        </div>

        <!-- NEUTRALS -->
        <div class="enps-distribution-description">
            <div class="enps-distribution-count">
                (N=${d.Neutrals})
            </div>
            Employees with no strong feelings one way or the other
        </div>

        <!-- DETRACTORS -->
        <div class="enps-distribution-description">
            <div class="enps-distribution-count">
                (N=${d.Detractors})
            </div>
            Employees who are unwilling to recommend you or will possibly speak unfavorably about you
        </div>
    </div>
    `);

    
    $('#enps-details').html(
        o.join('')
    );


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
            {opacity: 1}, {delay: delay+=1000}
        );

        $('.enps-subtract').velocity(
            {opacity: 1}, {delay: delay+=1000}
        );

        $('.enps-distribution-description').each(function(){
            delay += 2000;
            $(this).velocity({opacity: 1}, {duration: 1000, delay: delay})
        });    
    }
    else {
        $('.enps-add, .enps-subtract, .enps-distribution, .enps-distribution-description').css('opacity', 1);
    }
}