function Intro_Render() {
    return `
    
<style>  
@import url("https://fonts.googleapis.com/css?family=Noto+Sans:ital@1|IM+Fell+English:ital@1|Bayon|Merienda+One");

.snowstorm {
  opacity: 0;
  background-color: #FFF;
  background-image: url(https://images.unsplash.com/photo-1531972497489-8eb337acf6e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=193456e9385b553747a5e0f0cbc7badb&auto=format&fit=crop&w=1334&q=80);
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-repeat: no-repeat;
  left: 0;
  top: 0;
}

.movie {
text-align: center;
  font-size: 8em;
  font-family: "Bayon";
  font-weight: 400;
  position: fixed;
  top: 30%;
  left: 0;
  right: 0;
  margin: 0;
  line-height: 1;
  transform: translateY(-50%);
  z-index: 100;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
}

.more-snow {
  opacity: 1;
}

.snowstorm:before, 
.snowstorm:after,
.more-snow:before,
.more-snow:after {
  content: "";
  position: fixed;
  top: -3000%;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.01);
  background-image: url(http://www.freepngimg.com/download/winter_snow/4-2-white-snow-png.png);
  background-size: 30%;
  -webkit-animation-name: MOVE-BG;
  -webkit-animation-duration: 500s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
}

.snowstorm:before {
  filter: blur(6px);
  opacity: 0.8;
}
.snowstorm:after {
  filter: blur(1px);
  top: -1500%;
  background-image: url(http://www.freepngimg.com/download/winter_snow/4-2-white-snow-png.png);
  background-size: 90%;
  -webkit-animation-duration: 200s;
          animation-duration: 200s;
}

.more-snow:before {
  filter: blur(4px);
  opacity: 0.8;
  top: -2500%;
  background-size: 60%;
  -webkit-animation-duration: 400s;
          animation-duration: 400s;
}
.more-snow:after {
  filter: blur(2px);
  opacity: 0.8;
  top: -2000%;
  background-image: url(https://laviwebfiles.com/stage/codepen/4-2-white-snow-png.png);
  background-size: 70%;
  -webkit-animation-duration: 300s;
          animation-duration: 300s;
}

@-webkit-keyframes MOVE-BG {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(70%);
  }
}
</style>

<div class=snowstorm>
    <div class="more-snow"></div>
</div>

<div style="text-align: center; color: white;">
	<div class=movie>
		<div id=movie1 style="position: absolute; width: 100%">
			<div>
				<img class=kflogo style="width: 500px; opacity: 0" src="https://survey.confirmit.com/isa/BDJPFRDMEYBPBKLVADAYFQCDAVIOEQJR/KornFerryPOC/kf-logo.svg" style="width: 1000px">
			</div>
			<div class=presents style="opacity: 0; font-family: IM Fell English; margin-bottom: 40px">presents</div>
		</div>

		<div id=movie2 style="position: absolute; opacity: 0; width: 100%">
			<div>
				<div class=presents style="opacity: 0; font-family: IM Fell English; margin-bottom: 40px">
					In collaboration with
				</div>
				<img class=forstalogo style="width: 300px; opacity: 0" src="https://verdane.com/uploads/2020/05/Forsta_Logo_RGB_Navy.png">
			</div>
		</div>

		<div id=movie3 style="position: absolute; opacity: 0; width: 100%">
			<div>
				<div class=presents style="opacity: 0; font-size: larger; font-family: IM Fell English; margin-bottom: 40px">
					Navigator 2.0
				</div>
				<div class=presents style="opacity: 0; font-size: 40px; font-family: IM Fell English; margin-bottom: 40px">
					Employee Engagement
				</div>
			</div>
		</div>
	</div>

  <div class="action" id="button-ready" style="position: absolute; opacity: 0; top: 75vh; padding: 20px; width: 300px; height: 60px; right: 10vw; top: 75vh;">
    Your Report is Ready >>
  </div>

</div>

<!--
<iframe style="position:absolute; width: 100vw; top:0; left:0; z-index: 9999999999999999" src="https://player.vimeo.com/video/507165658" width="692" height="389" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="" data-ready="true"></iframe>
-->

  <script>
  $('.page-header').velocity({display: 'none', opacity: 0}, {delay: 0, duration: 0});
  $('.kflogo').velocity({opacity:1}, {duration: 3000, delay: 2000});
  $('.snowstorm').velocity({opacity:1}, {duration: 3000, delay: 5000});
  $('.presents').velocity({opacity:1}, {duration: 1000, delay: 8000});

  $('#movie1')
    .velocity({opacity:0}, {duration: 1000, delay: 12000})
    .velocity({display:'none'}, {duration: 0, delay: 0});
  
  $('#movie2')
    .velocity({opacity:1, display: 'unset'}, {duration: 1000, delay: 15000})
    .velocity({opacity:0}, {duration: 1000, delay: 3000})
    .velocity({display:'none'}, {duration: 1000, delay: 0});

  $('#movie3')
    .velocity({opacity:1, display: 'unset'}, {duration: 1000, delay: 22000})
    .velocity({opacity:0}, {duration: 1000, delay: 3000})
    .velocity({display:'none'}, {duration: 1000, delay: 0, complete: function() { $('#button-ready').click(); }});


  $('.forstalogo').velocity({opacity:1}, {duration: 1000, delay: 17000});


  $('#button-ready').velocity( {opacity: 1}, {duration: 1000, delay: 19000} );

  $('#button-ready').click( function() {
      $('.page-header').css('display', 'unset');
      $('.page-header').css('opacity', 1);
      $('#page-Intro').html('');
      $('#menuitem-Home').click();
    }
  );

  </script>
  
  
  `;

}