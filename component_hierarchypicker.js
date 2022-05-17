function Component_HierarchyPicker( ) {

    var branch_name = data.User.PersonalizedReportBaseText; // "North America";

    var key =  Main_GetKey ( 'RR', config.CurrentWave, data.User.PersonalizedReportBase );
    var rr = data[key];

    var rr_label = meta.Labels['labels.ResponseRate'].Label; //"Response Rate";
    var completed_surveys = rr.Completes;
    var invite_count = rr.Total;
    var rr_pct = (invite_count == 0)
        ? ''
        : Math.round(100 * completed_surveys/invite_count) + '%';

    var o = [];
    o.push (
	`
    <style>

    .hierarchy {
        position: absolute;
        right: 20px;
        background-color: #e0e0e0;
        padding: 6px;
        padding-left: 8px;
        top: 10px;
        width: 215px;
        border-radius: 4px;
        width: 250px;
        cursor: pointer;
        font-size: 14px;
        color: black;
        max-height: 41px;
    }

    .hierarchy:hover {
        background-color: #c0c0c0;
    }
    </style>

    <div id="hierarchy-button" class="hierarchy">

        <div id="branch-name" style="
            font: inherit;
            text-overflow: ellipsis;
            max-width: 220px;
            overflow: hidden;
            white-space: nowrap;
            TEXT-ALIGN: CENTER;
            font-weight: 400;
        ">
            ${branch_name}
        </div>

        <span style="
            font-size: 6px;
            margin-right: 8px;
            position: relative;
            top: -5px;
            text-transform: uppercase;
            font-weight: 300;
            display: block;
            padding: 4px 0 0 0;
            TEXT-ALIGN: CENTER;
            color: #666;
            font-size: 8px;
        ">
            ${rr_label} (${completed_surveys}/${invite_count})
            <span style="
                FONT-SIZE: 12PX;
                padding-right: 6px;
                MARGIN: 0 8px;
                direction: ltr;
                display: inline-block;
            ">
            ${rr_pct}
            </span>
        </span>

    </div>

    <script>

	function OpenHierarchySelector(){
        console.log ('OpenHierarchySelector')
        var dd = $('.dd-drilldown');
        $('#hierarchypicker').removeClass('displaynone');

									  

        if( dd.html() == undefined ) {
            console.log ('clicking button arrow');
			$('.dd-target-button-arrow')[0].click();
        } else {
            console.log ('unhiding what is already here');
			 
            dd.css('display', 'block');
		}
        return false;
    }

        $('#hierarchy-button').click(
            function(e) {
                $('#fullpath-container').css('display', 'none'); // hide the full path
                OpenHierarchySelector();
                e.stopPropagation();
            }
        );

        $('#hierarchy-button').mouseover (
            function() {
                $('#fullpath-container').css('display', 'unset');
            }
        );


        $('#hierarchy-button').mouseout (
            function () {
                $('#fullpath-container').css('display', 'none');
            }
        );

    </script>
        `
    );

    return o.join('');
}