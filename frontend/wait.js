
function WaitClose() {
    $('#master-page-modal-wait-container').velocity('fadeOut', 
    {
        complete: function() {
            $('#master-page-modal-wait').html ('');  
            $('#master-page-modal-wait-container').css ('z=index', '-999');  
          }
    });
        
}

function ShowWaitCloseButton() {

    $('#wait-heading').velocity('fadeOut');

    $('#wait-close').css('opacity', '0' );
    $('#wait-close').css('display', 'inline-block' );
    $('#wait-close').velocity('fadeIn');
}



function WaitMessage() {

    $('#master-page-modal-wait-container').css ('background-color', 'white');  
    $('#master-page-modal-wait-container').css ('color', 'black');  
    $('#master-page-modal-wait-container').css ('opacity', '1');  
    $('#master-page-modal-wait-container').css ('z=index', '9999'); 

    $('#master-page-modal-wait-container').fadeIn();
    var o  = [];

    var videos = [
        //'martini_lowres.mp4',
        'https://survey.us.confirmit.com/isa/BDJPFRDMEYBPBKLVADAYFQCDAVIOEQJR/KornFerryPOC2/office.mp4',
        'https://survey.us.confirmit.com/isa/BDJPFRDMEYBPBKLVADAYFQCDAVIOEQJR/KornFerryPOC2/office2.mp4',
        'https://survey.us.confirmit.com/isa/BDJPFRDMEYBPBKLVADAYFQCDAVIOEQJR/KornFerryPOC2/office3.mp4'
    ];

    var length = videos.length;
    var index = Math.floor ( Math.random() * length );
    var video = videos[ index ];

    o.push(
`
    <div style="overflow: hidden;">
        <video id="wait-video" autoplay muted loop style="position: absolute; width: 500px; z-index: -1">
            <source src="${video}" type="video/mp4">
        </video>
    </div>
`
);

    var length = meta.FunFacts.length;
    var index = Math.floor ( Math.random() * length );
    var tip = meta.FunFacts[ index ];

    o.push (
`
<div id="wait-heading" style="position: absolute; height: 150px; color: white; padding: 50px; background-color: #000; opacity: 0.9">
    <h2 id="wait-message">While we're waiting...</h2>
    <p>
</div>

<div id="did-you-know" style="position: absolute; color: black;  display: none; padding: 50px;">
    <h3 style="color: darkgray">Did you know that...</h3>
    <p>
    <div style="background-color: #f0f0f0; color: #333; margin: 20px 0; padding: 50px; border-radius: 15px">
        <h1>${tip.Title}</h1>
        <br>
        <h2 style="line-height: 24px; color: #666">${tip.Text}</h2>
        <p style="color: #999">
        ${tip.Sub}
    </div>
    <span style="display: none; position: relative; top: 60px; border-radius: 15px" id="wait-close">Your Report is ready >></span>
</div>


`);

    $('#master-page-modal-wait').html ( o.join('') );   

    $('#wait-close').click ( WaitClose );

    $('#wait-video').on('play', function() {
        //alert ('play');
        var width = $('#wait-video').width();
        //console.log ('width: ' + width);
        $('#wait-heading').css('width', width + 'px');

        $('#did-you-know').css('left', (width + 0) + 'px' );
        $('#did-you-know').velocity ("fadeIn", {delay: 500});
        
    });

    // For Local Testing
    if (typeof production === 'undefined') setTimeout( ShowWaitCloseButton, 5000);

}