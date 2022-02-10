// Pptx

var map = {};

var config = {

	Cover: {
		BackgroundImageUrl: "https://survey.confirmit.com/isa/BDJPFRDMEYBPBKLVADAYFQCDAVIOEQJR/KornFerryPOC2/KFW_Homepage_banner_1680x995.jpg"
	},

	Logo: {
		Height: 273,
		Width: 799,
		Url: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Korn-ferry-logo.jpg"
	},

	ClientLogo: {
		Height: 314, //720,
		Width: 400, //1200,
		Url: ""
	},

	BackgroundColor: '00634f',
	BackgroundColorMuted: '083C5C',
	Color: 'FFFFFF',
	BarColor: '2251ff',
	ColorMuted: 'c0c0c0',
	Font: {
		Header: 'Arial',
		Text: 'Arial',
		Number: 'Arial'
	},
	Distribution: {
		Palette: ['B7544B',
			'E96B43',
			'c0c0c0',
			'16C5DF',
			'2251ff'
		],

		Color: 'FFFFFF',
	},
	Header: {
		Color: 'FFFFFF',
		BackgroundColor: null
	}
};

function Pptx_AddHeader(slide, txt) {

	opts = {
		x: 0.0,
		y: 0.0,
		w: '100%',
		h: 0.75,
		align: 'center',
		fontSize: 24,
		fontFace: config.Font.Header,
		color: config.Header.Color,
		fill: config.Header.BackgroundColor
	};

	slide.addText(
		txt,
		opts
	);

}
	
$(document).ready(function() {

	// Button: Download (PowerPoint)
	$('#action-powerpoint').click(function() {
		//alert('Dowloading PowerPoint...');

		// Logo 
		var logo_url = config.Cover.BackgroundImageUrl;
		var size = {
			width: "100%",
			height: "100%"
		};

		var pptx = new PptxGenJS();
		var ratio = 0.0075;

		// Slide Master
		pptx.defineSlideMaster({
			title: "MASTER_SLIDE",
			background: {
				color: config.BackgroundColor
			},
			objects: [{
					image: {
						x: "0%",
						y: "0%",
						w: size.width,
						h: size.height,
						path: logo_url
					}
				},

				{
					rect: {
						x: "0%",
						y: "0%",
						w: "60%",
						h: "70%",
						fill: "FFFFFF",
						background: {
							transparency: 70
						}
					}
				},

				{
					image: {
						x: "5%",
						y: "5%",
						w: 2,
						h: 2 * (512 / 1024),
						path: config.Logo.Url
					}
				},
			],
			//slideNumber: { x: 0.3, y: "90%" },
		});


		var slide;

		pptx.addSection({
			title: "Cover & Intro"
		});

		// Cover Slide;
		slide = pptx.addSlide({
			masterName: "MASTER_SLIDE",
			sectionTitle: "Cover & Intro"
		});


		let opts = {
			x: '5%',
			y: '28%',
			w: '50%',
			h: 0.75,
			align: 'left',
			fontFace: "Arial",
			fontSize: 36,
			color: "000000",
		};

		slide.addText(
			'Korn Ferry',
			opts
		);

		opts = {
			x: '5%',
			y: '40%',
			w: '50%',
			h: 0.4,
			align: 'left',
			fontFace: config.Font.Header,
			fontSize: 18,
			color: config.ColorMuted,
		};


		slide.addText(
			'Employee Engagement - Summary',
			opts
		);


		opts = {
			x: '5%',
			y: '58%',
			w: '50%',
			h: 0.4,
			align: 'left',
			fontFace: "Arial",
			fontSize: 10,
			color: "000000",
		};


		slide.addText(
			'Proof of Concept, \n' + new Date(),
			opts
		);




		pptx.writeFile({
			fileName: 'Korn Ferry - Employee Engagement'
		});

	});	
});