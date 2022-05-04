
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

    $('.loader').hide();
    $('#wait-heading').velocity('fadeOut');

    $('#wait-close').css('opacity', '0' );
    //$('#wait-close').css('display', 'block' );
    $('#wait-close').velocity('fadeIn');
}



function WaitMessage() {

    var container = $('#master-page-modal-wait-container');
    
    container.css ('background-color', 'white');  
    container.css ('color', 'black');  
    container.css ('opacity', '1');  
    container.css ('z=index', '9999'); 
    container.css ('background-size', 'cover'); 
 
    container.fadeIn();
    var o  = [];

    var img_count = 8;
    var index = Math.floor ( Math.random() * img_count ) + 1;
    var img_url = ImgPath() + index + '.jpeg';
    container.css ('background-image', 'url(' + img_url + ')');

    var length = meta.FunFacts.length;
    var index = Math.floor ( Math.random() * length );
    var tip = meta.FunFacts[ index ];

    o.push (
`
<style>
#did-you-know li {
    margin: 20px 0;
}
.tip-text {
    opacity: 0;
    position: relative;
    top: 100px;
}

</style>
<div id="did-you-know" style="opacity: 0; width: 50vw; min-width: 600px; position: absolute; color: black; padding: 50px;">
    <div style="background-color: #f0f0f0; color: #333; margin: 20px 0; padding: 50px; border-radius: 15px; box-shadow: 20px 20px 40px #666;">
        <div class=loader>Loading...</div>
        <h1 style="font-weight: 200; font-size: 40px; padding-right: 80px">${tip.Title}</h1>
        <br>
        <h3 class="tip-text" style="padding-bottom: 20px; line-height: 24px; color: black; font-weight: 400">${tip.Text}</h3>
        <p style="color: #999">
        <div style="margin-bottom: 45px"></div>
        <span style="display: none; float: right; position: relative; top: -25px; border-radius: 15px; " id="wait-close">Your Report is ready >></span>
    </div>
</div>



`);

    $('#master-page-modal-wait').html ( o.join('') );   

    $('#wait-close').click ( WaitClose );

    $('#did-you-know').velocity ({opacity: 0.95}, {duration: 300, delay: 1000});
    $('.tip-text').velocity ({opacity: 0.3, top: 0}, {duration: 400, delay: 1200, complete: function(){
        $('.tip-text').velocity ({opacity: 1}, {duration: 300});
    }});

    // For Local Testing
    if (typeof production === 'undefined') setTimeout( ShowWaitCloseButton, 5000);

}