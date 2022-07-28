function Component_HierarchyPicker() {

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

    var completes = completed_surveys.toLocaleString();
    var invites = invite_count.toLocaleString();
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
        z-index: 1;
    }
    .hierarchy:hover {
        background-color: #c0c0c0;
    }

    .dd-search-input {
        text-align: start !important;
    }
    .dd-noresults {
        text-align: start;
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
            margin: auto;
        ">
            ${branch_name}
        </div>

        <span style="
            font-size: 6px;
            position: relative;
            top: -5px;
            text-transform: uppercase;
            font-weight: 4300;
            display: block;
            padding: 6px 0 0 0;
            TEXT-ALIGN: CENTER;
            color: #343434;
            font-size: 9px;
        ">
            ${rr_label} (${completes}/${invites})
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
        Main_AddHierarchyEventListeners();
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


        document.addEventListener("DOMContentLoaded", function() {  
            var ddTarget = document.querySelector("div[id$='drilldown_container']");
            var observer = new MutationObserver( function(mutations) {
                    if (document.querySelector('.dd-cancel') != null) {
                        observer.disconnect();
                        document.querySelector('.dd-button-select').innerText = '${meta.Labels["buttons.Apply"].Label}'; 
                        document.querySelector('.dd-cancel').innerText = '${meta.Labels["buttons.Cancel"].Label}';
                        document.querySelector('.dd-search-input').placeholder = '${meta.Labels["labels.Search"].Label}';
                        document.querySelector('.dd-search-input').dir = 'auto';

                        var SearchList = document.querySelector(".dd-items");
                        var observerSearchList = new MutationObserver( function(items) {
                            items.forEach(function(item) {
                                if (item.addedNodes.length != 0 && item.addedNodes[0].className == 'dd-noresults') {
                                    document.querySelector('.dd-noresults').innerText = '${meta.Labels["labels.NoDataToDisplay"].Label}';
                                }
                            });
                        });
                        var SLcfg = { childList: true, subtree: true };
                        observerSearchList.observe(SearchList, SLcfg);
                        
                        var ddHeader = document.querySelector(".dd-header");
                        var observerHeaderList = new MutationObserver( function(items) {
                                if (document.querySelector('a[title="Top"]') != null) {
                                    document.querySelector('a[title="Top"]').innerText = '${meta.Labels["labels.top"].Label}';
                                }
                        });
                        var headercfg = { childList: true };
                        observerHeaderList.observe(ddHeader, headercfg);
                        
                    } 
            });
            var config = { childList: true, subtree: true };
            observer.observe(ddTarget, config);
        });

    </script>
        `
    );

    return o.join('');
}