function Intro_Render() {

    var button_text = "Your Report is ready >>";

    return `
    
      <style>

      #myVideo {
        position: fixed;
        left: 0;
        top: -7.5vh;
        min-width: 100vw;
        min-height: 100vh;
        width: 100vw;
      }
      
      .content {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        background-color: #f0f0f0;
        color: #999;
        width: 100%;
        padding: 1vw 40vw 1vw 6vw;
        font-size: 1vw;
        font-weight: 300;
        z-index: 2;
        height: 15vh;
      }
      
      </style>
      </head>
      <body>

      <video autoplay muted loop id="myVideo">
        <source src="${ImgPath()}intro.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>

      <div class="content">
          <div style="font-size: 2vw">Your Report is Loading</div>
          <p>We are downloading data for ${data.User.PersonalizedReportBaseText}.</p>
          <div class="action" id="wait-close" style="position: absolute; font-size: 1vw; display: none; opacity: 0; top: 75vh; padding: 1vw; width: 20vw; height: 3.5vw; right: 2vw; top: 2vh;">${button_text}</div>
        </div>

        
      
      
      <script>
      $('.page-header').css('display', 'none');
  
      $('#wait-close').click( function() {
        $('.page-header').css('display', 'unset');
        $('.page-header').css('opacity', 1);
        $('#page-Intro').html('');
        $('#menuitem-Home').click();
      }
      );

      setTimeout ( Main_SubmitDefaultQuery, 2000 );
        
      </script>
    `;

    
  
}
