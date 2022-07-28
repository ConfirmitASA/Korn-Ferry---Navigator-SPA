// Home

function Home_Render() {
    return `
    <div class="pageheader">Welcome, ${data.User.FirstName}.</div>
    <div class="pagecontainer" id="pagecontainer-1">


        <video id=video autoplay muted loop style="position: absolute; top: 0; left: 0; width: 100vw; z-index: -1">
            <source src="https://survey.confirmit.com/isa/BDJPFRDMEYBPBKLVADAYFQCDAVIOEQJR/KornFerryPOC2/video_lowres.mp4" type="video/mp4">
        </video>

        <table class="background-area" style="border-collapse: collapse">
            <tbody>
                <tr>
                    <td>
                        <div class="greenarea">
                        </div>
                    </td>
                    <td>
                        <div class="whitearea">
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="greenareatext">
            This website provides a powerful gateway to understanding the collective voice of people in your organization. Explore how people feel, what motivates them and actions you can take to make the organization a better place to work.
            <p>
            </p>
            <div style="margin-top: 10px; color: #77bc1f !important;">
                Don't need details? High-level results are only a click away.
            </div>
        </div>
        <div class="sidebyside">
            <div class="leftside">

                <div class="icon_container">
                    <div class="icon" style="transform: scale(0.7); transform-origin: upper left; position: relative; left: -14px; top: -8px">
                        ${Resources_Icon1()}
                    </div>

                </div>
                <div class="boxtext_header">
                    I just want the summary
                </div>
                <div class="boxtext">
                    Prepackaged content available for instant download or slideshow view.
                </div>


                <div class="actioncontainer">

                    <div class="action" id="action-powerpoint">
                        Download
                    </div>

                    <div class="action" id="action-slideshow">
                        Slideshow
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
                    I want all the details
                </div>
                <div class="boxtext">
                    Explore detailed results for your organization and plan your next steps.
                </div>

                <div class="actioncontainer">

                    <div class="action" id="action-explore">
                        Start Exploring
                    </div>

                </div>
            </div>
        </div>
        <div style="color: white; padding-left: 420px; font-size: 10px">
            ${meta.Labels.welcome_footer.Label}
        </div>
    </div>

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

	// Click Handler: Button: Slideshow
	$('#action-slideshow').click(function() {
		$('#menuitem-Slideshow').click();
	});

	// Click Handler: Button: Explore Results
	$('#action-explore').click(function() {
		$('#menuitem-Explore').click();
	});

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
      })
});