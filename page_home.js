// Home

function Home_Render() {
    return `
    <div class="pageheader">${meta.WelcomePage.Title} ${data.User.FirstName}</div>
    <div class="background-area"></div>
    <div class="pagecontainer" id="pagecontainer-1">

        <video id=video autoplay muted loop style="position: absolute; top: 0; left: 0; width: 100vw; z-index: -2">
            <source src="https://survey.confirmit.com/isa/BDJPFRDMEYBPBKLVADAYFQCDAVIOEQJR/KornFerryPOC2/video_lowres.mp4" type="video/mp4">
        </video>

        <div class="greenareatext">
            ${meta.WelcomePage.Label}        
            <div style="margin-top: 10px;">
                ${meta.WelcomePage.LabelFooter}
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
                    ${meta.WelcomePage.TitleSummary}
                </div>
                <div class="boxtext">
                    ${meta.WelcomePage.LabelSummary}
                </div>


                <div class="actioncontainer">

                    <div class="action" id="action-powerpoint">
                        ${meta.Buttons['Download'].Label}
                    </div>

                    <div class="action" id="action-slideshow">
                        ${meta.Buttons['Slideshow'].Label}
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
                    ${meta.WelcomePage.TitleDetails}
                </div>
                <div class="boxtext">
                    ${meta.WelcomePage.LabelDetails}
                </div>

                <div class="actioncontainer">

                    <div class="action" id="action-explore">
                        ${meta.Buttons['Start'].Label}
                    </div>

                </div>
            </div>
        </div>
        <div style="color: white; padding-left: 30vw; font-size: 10px">
            ${meta.WelcomePage.Footer}
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
		//$('#menuitem-Slideshow').click();
        $("#iframe1").fadeIn();
	    document.getElementById("iframe1").focus();
	});

	// Click Handler: Button: Explore Results
	$('#action-explore').click(function() {
		$('#menuitem-GroupHeadlines').click();
	});

    // Click Handler: PowerPoint generator
    $('#action-powerpoint').click(Pptx_Generator);

    document.getElementById("iframe1").contentWindow.document.write(Slideshow_RenderIframe());
	document.getElementById("iframe1").contentWindow.document.close(); 

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