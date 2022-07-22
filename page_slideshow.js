// Slideshow

var swiper;
var slides = [];

function Slideshow_Render() {

	slides = [];
	
	slides.push({
		Title: "Participation",
		Text: "The overall response rate for your area was 92%.<br><br>In total, 15,814 people completed the survey. 1,461 either did not respond or dropped out.",
		Content: "Placeholder: Pie Chart - 92%"
	}, {
		Title: "Engagement and Enablement",
		Text: "Engagement represents employees committed to the organisation and willing to apply discretionary effort in their work.<br><br>Enablement represents employees well matched to their role and who experience job conditions that support them to perform to their full potential.",
		Content: "Placeholder: Chart w/ Engagement and Enablement"
	}, {
		Title: "Effectiveness Profile",
		Text: "The Effectiveness Profile arranges people into four different groups based on levels of Engagement and Enablement and compares the size of these groups to Korn Ferry benchmarks.<p>People are Most Effective when they are highly engaged and enabled.<p><span class=apple>Most Effective people are likely to be more productive, able to deliver superior levels of service and are more inclined to speak positively about the organisation to others.</span>",
		Content: "Placeholder: 2x2 effectiveness grid"
	}, {
		Title: "Engagement and Enablement Drivers",
		Text: "Key Drivers are dimensions and individual questions which have the strongest influence on how engaged and enabled people are. <p>The more positive people are towards the key driver topics the more engaged and enabled they will feel. Negative views on the key drivers will lead to lower engagement and enablement. <p><span class=apple>Improve motivation and help people to perform at their full potential by taking action on the key drivers.</span>",
		Content: "Placeholder: Key Drivers of Engagement and Enablement"
	});


	var o = [];
	for (var i = 0; i < slides.length; ++i) {
		o.push('<div class="swiper-slide"><span class="swiper-content">' + slides[i].Content + '</span></div>');
	}

	//$('.swiper-wrapper').html(o.join(''));	

	return `
	<div class="pageheader">${meta.SlideshowPage.Title}</div>
	<div class="pagecontainer" id="pagecontainer-3">
		<table class="slideshow-background-area" style="border-collapse: collapse">
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
			${meta.SlideshowPage.Label}
			<div id="start_slideshow" style="margin-top: 10px; color: #77bc1f !important;">${meta.SlideshowPage.Start}</div>
		</div>

		<!-- Swiper -->
		<div class="swiper mySwiper">

			<div class="parallax-bg" data-swiper-parallax="-23%"></div>
			<div class="swiper-wrapper">
				${o.join('')}
			</div>
			<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>
			<div class="swiper-pagination"></div>
		</div>

	</div>

	<script>
	// Click Handler: Link: Start Slideshow
	$('.greenareatext').velocity("fadeIn", { duration: 1000, delay: 500 });
	$('#start_slideshow').click(function() {
		Slideshow_Start();
	});
	</script>
	`;



}

function Slideshow_SlideChange() {

	var slide = slides[swiper.activeIndex];
	var page = $('#page-Slideshow');

	var pageheader = page.find('.pageheader');
	pageheader.css('display', 'none');
	pageheader.fadeIn();
	pageheader.text(slide.Title);

	var text = page.find('.greenareatext');
	text.css('display', 'none');
	text.fadeIn();
	text.html(slide.Text);

}

function Slideshow_Start() {

	$('.swiper').css('opacity', 1);

	swiper = new Swiper(".mySwiper", {
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	swiper.on('slideChange', function() {
		Slideshow_SlideChange();
	});

	Slideshow_SlideChange();
}

$(document).ready ( function () {
});