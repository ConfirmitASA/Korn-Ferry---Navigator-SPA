// Home



function Home_Render() {

    var languages = {
        1: "Arabic",
        32772: "Chinese",
        9: "English",
        1046: "Portuguese",
        2058: "Spanish"
    };

    var o = [];
    for (var lang_id in languages) {
        if ( lang_id.toString() != data.Report.CurrentLanguage.toString())
            o.push ( '<span onclick="UpdateLanguage(' + lang_id + ');" class=language-selector>' + languages[lang_id] + '</span>' );
    }

    var language_links = o.join('');

    return `
    <div class="pageheader">${meta.Labels['WelcomePage.Title'].Label} ${data.User.FirstName}</div>
    <div class="background-area"></div>
    <div class="pagecontainer" id="pagecontainer-1">

        <video id=video autoplay muted loop style="position: absolute; top: 0; left: 0; width: 100vw; z-index: -2">
            <source src="https://survey.confirmit.com/isa/BDJPFRDMEYBPBKLVADAYFQCDAVIOEQJR/KornFerryPOC2/video_lowres.mp4" type="video/mp4">
        </video>

        <div class="greenareatext">
            ${meta.Labels['WelcomePage.Label'].Label}        
            <div style="margin-top: 10px;">
                ${meta.Labels['WelcomePage.LabelFooter'].Label}
            </div>
        </div>
        <div class="sidebyside">
            <div class="leftside">

                <div class="icon_container">
                    <div class="icon" style="transform: scale(0.7); transform-origin: top left; position: relative; left: -14px; top: -8px">
                        ${Resources_Icon1()}
                    </div>

                </div>
                <div class="boxtext_header">
                    ${meta.Labels['WelcomePage.TitleSummary'].Label}
                </div>
                <div class="boxtext">
                    ${meta.Labels['WelcomePage.LabelSummary'].Label}
                </div>


                <div class="actioncontainer">

                    <div class="action" id="action-powerpoint">
                        ${meta.Labels['buttons.Download'].Label}
                    </div>

                    <div class="action" id="action-slideshow">
                        ${meta.Labels['buttons.Slideshow'].Label}
                    </div>

                </div>

            </div>
            <div class="rightside">
                <div class="icon_container">
                    <div class="icon">
                        ${Resources_Icon2()}
                    </div>
                </div>
                <div class="boxtext_header">
                    ${meta.Labels['WelcomePage.TitleDetails'].Label}
                </div>
                <div class="boxtext">
                    ${meta.Labels['WelcomePage.LabelDetails'].Label}
                </div>

                <div class="actioncontainer">

                    <div class="action" id="action-explore">
                        ${meta.Labels['buttons.Start'].Label}
                    </div>

                </div>
            </div>
        </div>

        <div id="home-footer">

            <div style="margin-top: 30px; margin-bottom: 20px; font-size: 10px; color: white">
                This report is also available in:
                <div>
                    ${language_links}
                </div>
            </div>

            <div style="color: white; border-top: 1px solid white; padding-top: 10px; font-size: 10px">
                ${meta.Labels['WelcomePage.Footer'].Label}
            </div>

        </div>
    </div>
    <iframe id="iframe1" scrolling="no" style="display:none; position:fixed; inset: 60px 0 0 0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:99;"></iframe>

    <script>


	// Animation

	$('.leftside').velocity({
		opacity: 1,
		top: "-8vh"
	}, {
		delay: 1000,
        duration: 200
	});
	
	$('.rightside').velocity({
		opacity: 1,
		top: "-8vh"
	}, {
		delay: 1500,
        duration: 200
	});

    // Fade In text
	
    $('.greenareatext').velocity("fadeIn", { duration: 1000, delay: 500 });

	// Click Handler: Button: Slideshow
	$('#action-slideshow').click(function() {
        $("#iframe1").fadeIn();
	    document.getElementById("iframe1").focus();
	});

	// Click Handler: Button: Explore Results
	$('#action-explore').click(function() {
		$('#menuitem-GroupHeadlines').click();
	});

    // Click Handler: PowerPoint generator
    $('#action-powerpoint').click(Pptx_Generator);

    var d = document.getElementById("iframe1").contentWindow.document;

    d.write(Slideshow_RenderIframe());
	d.close(); 

    </script>
    `;
}

$(document).ready( function () {

    $(function(){
        $('#video').on('ended', function(){
          $(this).fadeOut('2000', function(){
            // on fadeout complete
         });
        });
      });
});