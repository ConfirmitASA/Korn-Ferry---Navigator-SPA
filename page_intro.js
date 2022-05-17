function Intro_Render() {

    var button_text = meta.Labels['labels.ReportReady'].Label; //"Your Report is ready >>";

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
      

      .button-report-loaded {
        position: absolute; 
        font-size: 1vw; 
        opacity: 0; 
        top: 75vh; 
        padding: 1vw !important; 
        width: 20vw; 
        height: 3.5vw; 
        right: 2vw; 
        top: 2vh;
      }

      </style>
      </head>
      <body>

      <video autoplay muted loop id="myVideo">
        <source src="${ImgPath()}intro.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>

      <div class="content">
          <div style="font-size: 2vw">${meta.Labels['labels.ReportLoading'].Label}</div>
          <p>${meta.Labels['labels.LoadingData'].Label.split('[BRANCH]').join(data.User.PersonalizedReportBaseText)}</p>
          <div class="action button-report-loaded hidden" id="wait-close">${button_text}</div>
        </div>

        
      
      
      <script>
  
      $('#wait-close').click( function() {
        $('.page-header').css('display', 'unset');
        $('.page-header').css('opacity', 1);
        $('#page-Intro').html('');
        $('#menuitem-Home').click();
      });

      $(document).ready (
        function() {
          $('.page-header').css('display', 'none');
          setTimeout ( Main_SubmitDefaultQuery, 2000 );
      });
 
      </script>
    `;

    
  
}
