// Pptx

const PPTX_TITLE_STYLE = {
	x: 1.0,
	w: 11.5,
	y: 0.5,
	h: 0.5,
	fontFace: 'Arial',
	fontSize: 28,
	color: '00634f',
	margin: 0
};
const PPTX_INFO_STYLE = {
	x: 1.0,
	w: 11.5,
	y: 1.2,
	h: 0.8,
	fill: { color: "ECF6D9" },
	fontFace: 'Arial',
	fontSize: 12,
	lineSpacingMultiple: 1.5
};
const PPTX_BULLET_STYLE = {
	code: '25AA',
	indent: 10
};
const PPTX_COMMENT_STYLE = {
	x: 1.0,
	w: 11.5,
	y: 1.1,
	h: 0.5,
	fontFace: 'Arial',
	fontSize: 16,
	margin: 0
};
const PPTX_CHART_STYLE = {
	x: 1.0,
	w: 9.0,
	barDir: "bar",
	barGrouping: "percentStacked",
	chartColors: ['#77bc1f', '#e0e0e0', '#d30f1d'],

	catAxisLineShow: false,
	catAxisOrientation: "maxMin",
	catAxisLabelFontFace: "Arial",
	catAxisLabelFontSize: 12,

	get catAxisLabelPos() { return meta.RTL ? 'high' : 'nextTo'},

	valAxisHidden: true,
	valGridLine: { style: "none" },
	valAxisMinVal: 0,
	valAxisMaxVal: 1,
	dataLabelColor: "FFFFFF",
	showValue: true
};
const PPTX_CHART_STYLE_COMMENTS = {
	x: 1.0,
	w: 11.0,
	barDir: "bar",
	barGapWidthPct: 50,
	showValue: true,
	dataLabelColor: "FFFFFF",
	//dataLabelFormatCode: "#%",
	dataLabelPosition: 'ctr',

	catAxisLineShow: false,
	catAxisOrientation: "maxMin",
	catAxisLabelFontFace: "Arial",
	catAxisLabelFontSize: 12,

	valAxisHidden: true,
	valGridLine: { style: "none" },
	valAxisMinVal: 0,
	valAxisMaxVal: 100,
	get valAxisOrientation() { return meta.RTL ? 'maxMin' : 'minMax'},
};

const PPTX_TABLE_STYLE = {
	x: 1.0,
	fontSize: 12,
	fontFace: 'Arial',
	align: 'center',
	valign: 'middle',
	border: [0, 0, { pt: '1', color: 'd0d0d0' }, 0]
};

const PPTX_LONG_TABLE_STYLE = {
	x: 1.0,
	autoPage: true,
	autoPageRepeatHeader: true,
	newSlideStartY: 0.5,
	autoPageHeaderRows: 2,
	h: 5,
	fontSize: 10,
};

const PPTX_CELL_GREEN = {
	color: '77bc1f',
	bold: true,
	align: 'center'
};
const PPTX_CELL_RED = {
	color: 'd30f1d',
	bold: true,
	align: 'center'
};
const PPTX_CELL_BLACK = {
	color: '000000',
	bold: false,
	align: 'center'
}

window.addEventListener("load", function(event) {
	window.PPT_image_storage = {
		root: config.FileLib,
		get KF_logo_white() { return this.root + 'KF_logo_white.png'},
		get KF_text_logo() { return this.root + 'KF_text_logo.png'},
		get KF_logo_gray() { return this.root + 'KF_logo_gray.png'},
		get green_background() { return this.root + 'green_background.png'},
		get green_gradient1() { return this.root + 'green_gradient1.png'},
		get green_background2() { return this.root + 'green_background2.jpg'},
		get green_gradient2() { return this.root + 'green_gradient2.png'},
		get green_gradient3() { return this.root + 'green_gradient3.png'},
		get green_gradient4() { return this.root + 'green_gradient4.png'},
		get green_gradient5() { return this.root + 'green_gradient5.png'},
		get green_gradient6() { return this.root + 'green_gradient6.png'},
		get gray_gradient() { return this.root + 'gray_gradient.png'},
		get arrow_down() { return this.root + 'arrow_down.png'},
		get arrow_up() { return this.root + 'arrow_up.png'},
		get arrow_flat() { return this.root + 'arrow_flat.png'},
		get authority_and_empowerement() { return this.root + 'authority_and_empowerement.png'},
		get change_management() { return this.root + 'change_management.png'},
		get clear_and_promising_direction() { return this.root + 'clear_and_promising_direction.png'},
		get collaboration() { return this.root + 'collaboration.png'},
		get communication() { return this.root + 'communication.png'},
		get compensation_and_benefits() { return this.root + 'compensation_and_benefits.png'},
		get confidence_in_leaders() { return this.root + 'confidence_in_leaders.png'},
		get corporate_social_responsibility() { return this.root + 'corporate_social_responsibility.png'},
		get development_opportunities() { return this.root + 'development_opportunities.png'},
		get diversity_and_inclusion() { return this.root + 'diversity_and_inclusion.png'},
		get employee_wellbeing() { return this.root + 'employee_wellbeing.png'},
		get enablement() { return this.root + 'enablement.png'},
		get engagement() { return this.root + 'engagement.png'},
		get ethics_and_compliance() { return this.root + 'ethics_and_compliance.png'},
		get organizational_agility() { return this.root + 'organizational_agility.png'},
		get performance_management() { return this.root + 'performance_management.png'},
		get quality_and_customer_focus() { return this.root + 'quality_and_customer_focus.png'},
		get resources() { return this.root + 'resources.png'},
		get respect_and_recognition() { return this.root + 'respect_and_recognition.png'},
		get safety() { return this.root + 'safety.png'},
		get strategy_alignment() { return this.root + 'strategy_alignment.png'},
		get training() { return this.root + 'training.png'},
		get work_structure_progress() { return this.root + 'work_structure_progress.png'},
		get detached() { return this.root + 'detached.png'},
		get frustrated() { return this.root + 'frustrated.png'},
		get leasteffective() { return this.root + 'leasteffective.png'},
		get mosteffective() { return this.root + 'mosteffective.png'},
		get attract_talent() { return this.root + 'attract_talent.png'},
		get customer_loyalty() { return this.root + 'customer_loyalty.png'},
		get financial_performance() { return this.root + 'financial_performance.png'},
		get operational_excellence() { return this.root + 'operational_excellence.png'},
		get strong_brand() { return this.root + 'strong_brand.png'},
		get enablement_briefcase() { return this.root + 'enablement_briefcase.png'},
		get engagement_bulb() { return this.root + 'engagement_bulb.png'}
	}
});

// Button: Download (PowerPoint)
function Pptx_Generator() {
	// Dowloading PowerPoint...

	$('#page-Home').css('display', 'none');
	$('#master-page-modal-spinner-container').css('display', 'block');
	$('.loader').css('display', 'block');

	var pptx = new PptxGenJS();

	pptx.layout = 'LAYOUT_WIDE';

	pptx.rtlMode = meta.RTL ? true : false;

	// Slide Master
	var copyChar = unescape('%A9');

	pptx.defineSlideMaster({
		title: "GREENTITLE",
		background: {
			color: 'FFFFFF',
		},
		// green_background2, green_gradient6, KF_logo_white, KF_text_logo
		objects: [
			{ image: { x: 0, y: 0, h: '100%', w: '100%', path: PPT_image_storage.green_background2 } },
			{ image: { x: 0, y: 0, h: '100%', w: '100%', path: PPT_image_storage.green_gradient6 } },
			{ image: { x: 0.917, y: 6.11, h: 0.521, w: 0.5625, path: PPT_image_storage.KF_logo_white } },
			{ image: { x: 1.622, y: 6.11, h: 0.394, w: 1.76, path: PPT_image_storage.KF_text_logo } },
		],
	});

	pptx.defineSlideMaster({
		title: "WHITE",
		background: {
			color: 'FFFFFF',
		},
		// gray_gradient, KF_logo_gray
		objects: [
			{ image: { x: 9.35, y: 0.0, h: '100%', w: 4, path: PPT_image_storage.gray_gradient } },
			{ image: { x: 0.917, y: 6.81, h: 0.521, w: 0.5625, path: PPT_image_storage.KF_logo_gray } },
			{ text: { text: copyChar + ' 2022 Korn Ferry', options: { x: 11.09, y: 6.95, w: 1.319, h: 0.256, fontSize: 10, color: 'A9A9A9' } } },
			{ line: { x: 12.197, y: 6.894, h: 0.59, w: 0.197, rotate: 25, line: { color: "A9A9A9", width: 1 } } },
		],
		slideNumber: { x: 12.41, y: 6.95, color: '045D5D', fontSize: 12 },
	});

	pptx.defineSlideMaster({
		title: "GREEN",
		background: {
			color: 'FFFFFF',
		},
		// green_background, green_gradient1, green_gradient2, green_gradient3, KF_logo_white
		objects: [
			{ image: { x: 0, y: 0, h: '100%', w: '100%', path: PPT_image_storage.green_background } },
			{ image: { x: 0, y: 0, h: '100%', w: 6.909, path: PPT_image_storage.green_gradient1 } },
			{ image: { x: 4.236, y: 0, h: '100%', w: 4.453, path: PPT_image_storage.green_gradient2 } },
			{ image: { x: 12.055, y: 0, h: '100%', w: 1.280, path: PPT_image_storage.green_gradient3 } },
			{ image: { x: 0.917, y: 6.81, h: 0.521, w: 0.5625, path: PPT_image_storage.KF_logo_white } },
			{ text: { text: copyChar + ' 2022 Korn Ferry', options: { x: 11.09, y: 6.95, w: 1.319, h: 0.256, fontSize: 10, color: 'FFFFFF' } } },
			{ line: { x: 12.197, y: 6.894, h: 0.59, w: 0.197, rotate: 25, line: { color: "FFFFFF", width: 1 } } },
		],
		slideNumber: { x: 12.41, y: 6.95, color: 'FFFFFF', fontSize: 12 },
	});

	pptx.defineSlideMaster({
		title: "WHITE2GREEN",
		background: {
			color: 'FFFFFF',
		},
		// green_gradient4, KF_logo_gray
		objects: [
			{ image: { x: 9.217, y: 0, h: '100%', w: 4.118, path: PPT_image_storage.green_gradient4 } },
			{ image: { x: 0.917, y: 6.81, h: 0.521, w: 0.5625, path: PPT_image_storage.KF_logo_gray } },
			{ text: { text: copyChar + ' 2022 Korn Ferry', options: { x: 11.09, y: 6.95, w: 1.319, h: 0.256, fontSize: 10, color: 'FFFFFF' } } },
			{ line: { x: 12.197, y: 6.894, h: 0.59, w: 0.197, rotate: 25, line: { color: "FFFFFF", width: 1 } } },
		],
		slideNumber: { x: 12.41, y: 6.95, color: 'FFFFFF', fontSize: 12 },
	});

	pptx.defineSlideMaster({
		title: "GREEN2WHITE",
		background: {
			color: 'FFFFFF',
		},
		// green_gradient5, KF_logo_white, gray_gradient
		objects: [
			{ image: { x: 0, y: 0, h: '100%', w: 5.98, path: PPT_image_storage.green_gradient5 } },
			{ image: { x: 0.917, y: 6.81, h: 0.521, w: 0.5625, path: PPT_image_storage.KF_logo_white } },
			{ image: { x: 9.35, y: 0.0, h: '100%', w: 4, path: PPT_image_storage.gray_gradient } },
			{ text: { text: copyChar + ' 2022 Korn Ferry', options: { x: 11.09, y: 6.95, w: 1.319, h: 0.256, fontSize: 10, color: 'A9A9A9' } } },
			{ line: { x: 12.197, y: 6.894, h: 0.59, w: 0.197, rotate: 25, line: { color: "A9A9A9", width: 1 } } },
		],
		slideNumber: { x: 12.41, y: 6.95, color: '045D5D', fontSize: 12 },
	});

	var tableTypes = ['ENG', 'ENA', 'STRENGTHS', 'OPPORTUNITIES', 'DIMS', 'TOP5', 'BOTTOM5'];
	var tableData = {};
	for (var i=0; i<tableTypes.length; i++)
		tableData[tableTypes[i]] = Pptx_GenerateTable(tableTypes[i]);

	// add slides
	pptx.addSection({ title: "Main section" });

	Pptx_AddTitleSlide(pptx, meta.Labels.SlideTexts.SLIDE_TITLE.info, GetAccess("Title"));
	Pptx_AddSurveyBackgroundSlide(pptx, GetAccess("SurveyBackground"));
	Pptx_AddHowToReadYourResultsSlide(pptx, GetAccess("HowToReadResults"));
	Pptx_AddEngagedPerformanceFrameworkSlide(pptx, GetAccess("EngagedPerformanceFramework"));

	Pptx_AddGreenCoverSlide(pptx, meta.Labels.SlideTexts.SLIDE_RESSUMMARY.title, GetAccess("KeyMetrics_Cover"));

	Pptx_AddKeyMetricsSlide(pptx, GetAccess("KeyIndices"));

	Pptx_AddSlideWithItemsList(pptx, tableData, 'ENG', true, GetAccess("Engagement"));
	Pptx_AddSlideWithItemsList(pptx, tableData, 'ENA', true, GetAccess("Enablement"));

	Pptx_AddKeyDriversSlide(pptx, GetAccess("KeyDrivers"));

	Pptx_AddSlideWithItemsList(pptx, tableData, 'STRENGTHS', true, GetAccess("TeamStrengths"));
	Pptx_AddSlideWithItemsList(pptx, tableData, 'OPPORTUNITIES', true, GetAccess("TeamOpportunities"));

	Pptx_AddGreenCoverSlide(pptx, meta.Labels.EffectivenessProfile.Title, GetAccess("EP_Cover"));

	Pptx_AddEffectivenessProfileSegmentationSlide(pptx, GetAccess("EP_Segmentation"));
	Pptx_AddEffectivenessProfileDetailSlide(pptx, GetAccess("EP_Detail"));

	Pptx_AddGreenCoverSlide(pptx, meta.Labels.SlideTexts.SLIDE_RESDETAIL.title, GetAccess("Details_Cover"));

	Pptx_AddSlideWithItemsList(pptx, tableData, 'DIMS', true, GetAccess("Details_Dimensions"));
	Pptx_AddSlideWithItemsList(pptx, tableData, 'TOP5', true, GetAccess("Details_Top5"));
	Pptx_AddSlideWithItemsList(pptx, tableData, 'BOTTOM5', true, GetAccess("Details_Bottom5"));

	for (var i in meta.CommentCategories)
		Pptx_AddCommentsSlide(pptx, i, GetAccess("Comments"));

	Pptx_AddTakingAction(pptx, GetAccess("TakingAction"));

	// add charts
	pptx.addSection({ title: "Appendix" });
	Pptx_AddSlideWithItemsList(pptx, tableData, 'ENG', false, GetAccess("Charts_Engagement"));
	Pptx_AddSlideWithItemsList(pptx, tableData, 'ENA', false, GetAccess("Charts_Enablement"));
	Pptx_AddSlideWithItemsList(pptx, tableData, 'STRENGTHS', false, GetAccess("Charts_Strengths"));
	Pptx_AddSlideWithItemsList(pptx, tableData, 'OPPORTUNITIES', false, GetAccess("Charts_Opportunities"));
	Pptx_AddSlideWithItemsList(pptx, tableData, 'DIMS', false, GetAccess("Charts_Dimensions"));
	Pptx_AddSlideWithItemsList(pptx, tableData, 'TOP5', false, GetAccess("Charts_Top5"));
	Pptx_AddSlideWithItemsList(pptx, tableData, 'BOTTOM5', false, GetAccess("Charts_Bottom5"));

	pptx.writeFile({
		fileName: 'Korn Ferry - Employee Engagement'
	}).then(fileName => {
		$('#page-Home').css('display', 'block');
		$('#master-page-modal-spinner-container').css('display', 'none');
		$('.loader').css('display', 'none');
		console.log(`PPT created: ${fileName}`);
	});

}

// user access
function GetAccess(pageID) {
	if (meta.VisibleSlides.indexOf(pageID) != -1) return true;
	return false;
}

function Pptx_AddSlideWithItemsList(pptx, tableData, tableType, addTable, access) {
	if (access == false) return;

	var infoStyle = Object.assign({}, PPTX_INFO_STYLE);

	var style = Object.assign({}, addTable ? PPTX_TABLE_STYLE : PPTX_CHART_STYLE);

	var section = addTable ? "Main section" : "Appendix";
	var slide = pptx.addSlide({masterName: "WHITE",  sectionTitle: section});

	var slideId = 'SLIDE_' + tableType;
	var table = tableData[tableType];

	var title = meta.Labels.SlideTexts[slideId].title;
	slide.addText(title, PPTX_TITLE_STYLE);

	var info = meta.Labels.SlideTexts[slideId].info;
	if (info.length > 0 && tableType!='DIMS') { // info text for DIMS is only for slideshow
		var str = [];
		for (var i = 0; i < info.length; i++)
			str.push({ text: info[i], options: { bullet: PPTX_BULLET_STYLE, breakLine: true } });

		if (tableType == 'ENG' || tableType == 'ENA') {
			infoStyle.y = 1.2;
			infoStyle.h = 0.8;
			style.y = 2.2;
		}
		else { // strengths & opportunities have longer texts
			infoStyle.y = 1.2;
			infoStyle.h = 1.0;
			style.y = 2.5;
		}
		slide.addText(str, infoStyle);
	}
	else style.y = (tableType == 'DIMS') ? 1.1 : 1.5;

	if (addTable) {
		style.colW = meta.RTL ? Pptx_ColWRTL() : Pptx_ColW();
		if (table.NofItems > 10) Object.assign(style, PPTX_LONG_TABLE_STYLE);
		slide.addTable(table.rows, style);

	} else {

		/*
		if (table.NofItems > 10) {
		   style.h = 6;
		   style.catAxisLabelFontSize = 14 / table.NofItems * 12;
		   style.dataLabelFontSize = 14 / table.NofItems * 12;
		   console.log(table);
		}
		style.chartColors = config.styles.DistributionChart.bgcolors;
		slide.addChart(pptx.ChartType.bar, Pptx_GenerateChartData(table), style);
		*/
		style.chartColors = config.styles.DistributionChart.bgcolors;
		if (tableType == 'DIMS') {
			RecursiveTableRedraw(pptx, slide, table, style, 1);
		} else {
			slide.addChart(pptx.ChartType.bar, Pptx_GenerateChartData(table), style);
		}
	}
}

function RecursiveTableRedraw(pptx, slide, table, style, pages) {
	var newStyle = Object.assign({}, style);
	var dimsPerSlide;
	var slideHeight;
	if (config.DimensionsPerSlide < 5) {
		dimsPerSlide = 5;
	} else {
		dimsPerSlide = config.DimensionsPerSlide;
	}

	if (pages > 1) {
		slide = pptx.addSlide({masterName: "WHITE",  sectionTitle: "Appendix"});
	}
	if (table.NofItems < dimsPerSlide) {
		newStyle.h = table.NofItems*0.85;
		slide.addChart(pptx.ChartType.bar, Pptx_GenerateChartData(table), newStyle);
	} else {
		slideHeight = dimsPerSlide*6/10;
		if (slideHeight > 6) slideHeight = 6;
		newStyle.h = slideHeight;
		// cut table by n rows sections
		var newTable = {};
		var newTableRows = table.rows.slice();
		var startRow = table.rows.length - table.NofItems;
		newTableRows.splice(startRow + dimsPerSlide, newTableRows.length - dimsPerSlide);
		newTable.rows = newTableRows;
		newTable.NofItems = dimsPerSlide;
		slide.addChart(pptx.ChartType.bar, Pptx_GenerateChartData(newTable), newStyle);
		table.rows.splice(startRow, dimsPerSlide);
		table.NofItems = table.NofItems - dimsPerSlide;
		pages++;
		RecursiveTableRedraw(pptx, slide, table, newStyle, pages);
	}
}

function Pptx_ColW() {
	var comparators = Main_CompactComparatorSet(); // State_Get('comparators');
	var NofCols = comparators ? 4 + comparators.length : 4;
	var colW = [0.5, 3.0];
	for (var i = 0; i < NofCols; i++) colW.push(8.0 / NofCols);
	return colW;
}

function Pptx_ColWRTL() {
	var comparators = Main_CompactComparatorSet(); // State_Get('comparators');
	var NofCols = comparators ? 4 + comparators.length : 4;
	var colW = [3.0, 0.5];
	for (var i = 0; i < NofCols; i++) colW.unshift(8.0 / NofCols);
	return colW;
}

function Pptx_GenerateTable(tableType) {
	var table_data = [];
	var rowdata = [];

	var comparators = Main_CompactComparatorSet(); // State_Get('comparators');
	var NofComparators = comparators ? comparators.length : 0;
	var NofHeaderRows = (NofComparators > 0) ? 2 : 1;

	var headers = [
		{ text: "# ", options: { rowspan: NofHeaderRows, align: 'left', color: '#00634f', bold: true } },
		{ text: meta.Labels["labels.Question"].Label, options: { rowspan: NofHeaderRows, align: 'left', color: '#00634f', bold: true } },
		{ text: tableType == 'DIMS' ? '' : meta.Labels["labels.ValidN"].Label, options: { rowspan: NofHeaderRows, color: '#00634f', bold: true } },
		{ text: meta.Labels["labels.PercentFav"].Label, options: { rowspan: NofHeaderRows, color: '#00634f', bold: true } },
		{ text: meta.Labels["labels.PercentNeu"].Label, options: { rowspan: NofHeaderRows, color: '#00634f', bold: true } },
		{ text: meta.Labels["labels.PercentUnfav"].Label, options: { rowspan: NofHeaderRows, color: '#00634f', bold: true } },

	];

	if (NofComparators > 0) {
		headers.push({ text: meta.Labels["labels.FavvsComparator"].Label, options: { colspan: NofComparators, color: '#00634f', bold: true } });

		if (meta.RTL) headers = headers.reverse();

		table_data.push(headers);
		var subheaders = [];
		for (var i = 0; i < NofComparators; i++) {
			subheaders.push({ text: meta.Comparators[comparators[i]].Label, options: { color: '#00634f', bold: true, border: [{ pt: '1', color: 'd0d0d0' }, 0, { pt: '1', color: 'd0d0d0' }, 0] } });
		}

		if (meta.RTL) subheaders = subheaders.reverse();

		table_data.push(subheaders);
	} else {
		if (meta.RTL) headers = headers.reverse();
		table_data.push(headers);
	}


	var NofItems = 0;
	if (tableType == 'ENG' || tableType == 'ENA') {
		var dimId = (tableType == 'ENG')
			? 'DIM_ENG'
			: 'DIM_ENA';

		rowdata = Pptx_AddItemToTable(dimId, true);
//
		if (meta.RTL) rowdata = rowdata.reverse();
//
		table_data.push(rowdata);
		NofItems++;
	}
	var items = [];
	switch (tableType) {
		case 'ENG':
			items = meta.Dimensions['DIM_ENG'].Items;
			items.sort( Pptx_SortByFav_Desc );
			break;
		case 'ENA':
			items = meta.Dimensions['DIM_ENA'].Items;
			items.sort( Pptx_SortByFav_Desc );
			break;
		case 'STRENGTHS':
			var so_key = Main_GetKeyWithFilter('SO', config.CurrentWave, data.User.PersonalizedReportBase);
			var so = data[so_key];
			items = so.S;
			break;
		case 'OPPORTUNITIES':
			var so_key = Main_GetKeyWithFilter('SO', config.CurrentWave, data.User.PersonalizedReportBase);
			var so = data[so_key];
			items = so.O;
			break;
		case 'DIMS':
			items = Object.keys(meta.Dimensions);
			items.sort( Pptx_SortByDimensionFav_Desc );
			break;
		case 'TOP5':
			items = Object.keys(meta.Items);
			items.sort( Pptx_SortByFav_Desc );
			items = items.slice(0, 5);
			break;
		case 'BOTTOM5':
			items = Object.keys(meta.Items);
			items.sort( Pptx_SortByUnfav_Desc );
			items = items.slice(0, 5);
			break;
	}
	for (var i = 0; i < items.length; i++) {
		var index = (tableType == 'STRENGTHS' || tableType == 'OPPORTUNITIES') ? i + 1 : 0;
		rowdata = Pptx_AddItemToTable(items[i], tableType == 'DIMS' ? true : false, index);
//
		if (meta.RTL) rowdata = rowdata.reverse();
//
		table_data.push(rowdata);
	}
	NofItems += items.length;

	return { rows: table_data, NofItems: NofItems };
}

function Pptx_SortByDimensionFav_Desc(a, b){
	var items = Main_CurrentDimensionsData_WithFilter();
	if (items[a] == undefined || items[b] == undefined) return;
	return items[b].Dist.Fav - items[a].Dist.Fav;
}

function Pptx_SortByFav_Desc(a, b){
	var items = Main_CurrentItemsData_WithFilter();
	if (items[a] == undefined || items[b] == undefined) return;
	return Utils_CountsToPercents(items[b].Dist).Fav - Utils_CountsToPercents(items[a].Dist).Fav;
}

function Pptx_SortByUnfav_Desc(a, b){
	var items = Main_CurrentItemsData_WithFilter();
	if (items[a] == undefined || items[b] == undefined) return;
	return Utils_CountsToPercents(items[b].Dist).Unfav - Utils_CountsToPercents(items[a].Dist).Unfav;
}

function Pptx_AddItemToTable(itemId, isDimension, index) {

	var current_data = isDimension
		? Main_CurrentDimensionsData_WithFilter()
		: Main_CurrentItemsData_WithFilter();

	var obj = current_data[itemId]; // Either Item or Dimension
	if (obj == undefined) return [{text: '-'},{text: '-'},{text: '-'},{text: '-'},{text: '-'},{text: '-'},{text: '-'},{text: '-'}];

	var label = isDimension
		? meta.Dimensions[itemId].Label
		: meta.Items[itemId].Label;

	var id = isDimension
		? unescape('\u25ca') // diamond symbol
		: (index ? index : obj.QNo );

	var pct_dist = isDimension
		? obj.Dist // dimensions already store rounded percentages in the distribution
		: Utils_CountsToPercents ( obj.Dist );

	var rowdata = [
		{ text: id, options: { align: 'left' } },
		{ text: label, options: { bold: isDimension, align: 'left' } },
		{ text: (isDimension ? '' : Utils_FormatOutput(obj.N)) }, // dimensions don't show Valid N
		{ text: Utils_FormatOutput(pct_dist.Fav) },
		{ text: Utils_FormatOutput(pct_dist.Neu) },
		{ text: Utils_FormatOutput(pct_dist.Unfav) },
	];
	var comparators = Main_CompactComparatorSet();
	var comparators_data = Main_ComparatorsData_WithFilter();

	var NofComparators = comparators ? comparators.length : 0;
	for (var k = 0; k < NofComparators; k++) {

		var comparator_id = comparators[k]; // example: "Internal.Wave:2019"
		var comparator_data = comparators_data[ comparator_id ]; // example: {Items: {...}, Dimensions: {...}}
		var value;
		var sigClassname;

		var obj_comparator_data = isDimension
			? comparator_data.Dimensions
			: comparator_data.Items;

		if ( obj_comparator_data == null || obj_comparator_data[itemId] == null) {
			value = NOT_AVAILABLE;
			sigClassname = Object.assign({}, PPTX_CELL_BLACK);

		}
		else {
			var obj_comparator = obj_comparator_data[itemId]; // example: {N: ..., Dist: {...}}
			var sig_test = Utils_SigTest ( obj, obj_comparator, 'Fav', isDimension );
			sigClassname = sig_test.IsSignificant
				? ( sig_test.Diff > 0 ? Object.assign({}, PPTX_CELL_GREEN) : Object.assign({}, PPTX_CELL_RED))
				: Object.assign({}, PPTX_CELL_BLACK);

			value = (sig_test.Diff == null)
				? NOT_AVAILABLE
				: (sig_test.Diff>0 ? '+' : '') + sig_test.Diff + (sig_test.IsSignificant ? ' *' : '');
		}

		rowdata.push({ text: value, options: sigClassname });
	}
	return rowdata;
}

function Pptx_GenerateChartData(table) {
	var arrChartData = [
		{ name: "Fav", labels: [], values: [] },
		{ name: "Neu", labels: [], values: [] },
		{ name: "Unfav", labels: [], values: [] }
	];

	var startRow = table.rows.length - table.NofItems;
	for (var i = startRow; i < table.rows.length; i++) {
		if (meta.RTL) {
			arrChartData[0].labels.push(table.rows[i][7].text);
			arrChartData[0].values.push(table.rows[i][5].text);
			arrChartData[1].labels.push(table.rows[i][7].text);
			arrChartData[1].values.push(table.rows[i][4].text);
			arrChartData[2].labels.push(table.rows[i][7].text);
			arrChartData[2].values.push(table.rows[i][3].text);
		} else {
			arrChartData[0].labels.push(table.rows[i][1].text);
			arrChartData[0].values.push(table.rows[i][3].text);
			arrChartData[1].labels.push(table.rows[i][1].text);
			arrChartData[1].values.push(table.rows[i][4].text);
			arrChartData[2].labels.push(table.rows[i][1].text);
			arrChartData[2].values.push(table.rows[i][5].text);
		}
	}
	return arrChartData;
}

function Pptx_AddCommentsSlide(pptx, comm, access) {
	if (access == false) return;

	var style = Object.assign({}, PPTX_CHART_STYLE_COMMENTS);

	var slide = pptx.addSlide({ masterName: "WHITE", sectionTitle: "Main section" });

	var title = meta.Labels.SlideTexts['SLIDE_COMMENTS'].title;
	slide.addText(title, PPTX_TITLE_STYLE);

	slide.addText(meta.CommentQuestions[comm].Label, PPTX_COMMENT_STYLE);
	var categories = Object.keys(meta.CommentCategories[comm]); // {"1": ..., "2": ...}
	var key = Main_GetKeyWithFilter('COMCAT', config.CurrentWave, data.User.PersonalizedReportBase);
	var d = data[key];

	categories.sort(
		function (a, b) {
			return d[comm].Dist[b] - d[comm].Dist[a]
		}
	);

	var arrChartData = [
		{ name: "Pct", labels: [], values: [] }
	];

	var pct_distribution = Utils_CountsToPercents ( d[comm].Dist );
	for (var i = 0; i < categories.length; i++) {
		var cat = categories[i]; // example: "4"
		arrChartData[0].labels.push(meta.CommentCategories[comm][cat].Label + ' (N=' + d[comm].Dist[cat] + ')');
		arrChartData[0].values.push( pct_distribution[cat] );
	}

	style.y = 1.5;
	style.h = 0.4 * Object.keys(meta.CommentCategories[comm]).length;
	style.chartColors = [config.styles.DistributionChart_onecolor.bgcolor];

	slide.addChart(pptx.ChartType.bar, arrChartData, style);
}

function Pptx_AddKeyMetricsSlide(pptx, access) {
	if (access == false) return;

	var external_comparators = Main_CompactComparatorSet();

	var comparator_id = 'Internal.Wave:' + config.PreviousWave;
	var trend_indicator_description;
	var dimensions_data = Main_CurrentDimensionsData_WithFilter();
	var all_comparator_data = Main_ComparatorsData_WithFilter(null, true); // force reading of all comparators (even if not checked in the UI)
	var comparator_dimensions_data;
	if (config.PreviousWave != null) comparator_dimensions_data = all_comparator_data[comparator_id].Dimensions;


	if (config.PreviousWave != null) trend_indicator_description = 'vs. ' + meta.Comparators['Internal.Wave:' + config.PreviousWave].Label;

	let keyMetricsSlide = pptx.addSlide({
		masterName: "WHITE",
		sectionTitle: "Main section"
	});

	keyMetricsSlide.addText(meta.Labels.SlideTexts.SLIDE_KEYINDICES.title, PPTX_TITLE_STYLE);

	keyMetricsSlide.addText(
		[
			{ text: meta.Labels.SlideTexts.SLIDE_KEYINDICES.info[0], options: { bullet: PPTX_BULLET_STYLE, breakLine: true } },
			{ text: meta.Labels.SlideTexts.SLIDE_KEYINDICES.info[1], options: { bullet: PPTX_BULLET_STYLE } }
		],
		PPTX_INFO_STYLE
	);

	let keyMetricsCardGeneralOptions = {
		y: '30%',
		w: '23%',
		h: '55%',
		border: {
			pt: 0.5,
			color: "999999"
		},
		fontSize: 18,
		fontFace: 'Arial',
		fill: 'FFFFFF',
		align: "center",
		margin: [10, 35, 0, 35]
	}
	let keyMetricsArrowIconGeneralOptions = {
		y: '32%',
		h: 0.35,
		w: 0.35
	}
	let keyMetricsCardIconGeneralOptions = {
		y: '45%',
	}
	let keyMetricsScoreTextGeneralOptions = {
		y: '70%',
		w: '23%',
		align: 'center',
		fontFace: "Arial",
		color: "000000",
	}
	let keyMetricsVSTextGeneralOptions = {
		y: '80%',
		w: '23%',
		align: 'center',
		fontFace: "Arial",
		color: "000000"
	}
	let keyMetricsTrendTextGeneralOptions = {
		y: '39%',
		w: '7%',
		fontSize: 9,
		align: 'center',
		fontFace: "Arial",
		color: "000000",
		lineSpacingMultiple: 0.8,
	}

	let metrics = data.Metrics;
	let engDimensionId = config.EngagementDimensionId;//'DIM_ENG'; //metrics[0].DimensionId;
	let enaDimensionId = config.EnablementDimensionId//'DIM_ENA'; //metrics[1].DimensionId;
	let thirdCardDimensionId = metrics[2]; //.DimensionId;

	var external_comparator1 = all_comparator_data[ external_comparators[0] ];
	var external_comparator2 = all_comparator_data[ external_comparators[1] ];

	// ENGAGEMENT --------------------------------------------------------

	var eng_score = dimensions_data[engDimensionId].Dist.Fav;
	var comparator_eng_score = comparator_dimensions_data !== undefined ? comparator_dimensions_data[engDimensionId].Dist.Fav : null;
	var engDiff = Utils_Diff ( eng_score, comparator_eng_score );
	let engHas_trend = !( eng_score === null || comparator_eng_score === null);

	let engagementRows = [[meta.Dimensions[engDimensionId].Label]];
	let keyMetricsEngagementTableOptions = {
		x: '10%',
		...keyMetricsCardGeneralOptions
	}

	let keyMetricsEngagementArrowIconOptions = {
		path: GetArrowIconPathBasedOnTrend( engDiff ),
		x: '11%',
		...keyMetricsArrowIconGeneralOptions
	}
	let keyMetricsEngagementCardIconOptions = {
		x: '17%',
		...GetCardIconOptionsBasedOnDimensionId(engDimensionId),
		...keyMetricsCardIconGeneralOptions
	}
	let keyMetricsEngagementScoreTextOptions = {
		x: '10%',
		...keyMetricsScoreTextGeneralOptions
	}
	let keyMetricsEngagementVSTextOptions = {
		x: '10%',
		...keyMetricsVSTextGeneralOptions
	}

	keyMetricsSlide.addTable(engagementRows, keyMetricsEngagementTableOptions);

	if (engHas_trend && keyMetricsEngagementArrowIconOptions.path != null)
		keyMetricsSlide.addImage(keyMetricsEngagementArrowIconOptions);

	keyMetricsSlide.addImage(keyMetricsEngagementCardIconOptions);
	keyMetricsSlide.addText(
		[
			{ text: meta.Labels['labels.Favorable'].Label, options: { fontSize: 10, align: "center", breakLine: true } },
			{ text: Utils_FormatPctOutput(eng_score), options: { fontSize: 26, align: "center", bold: true } }
		],
		keyMetricsEngagementScoreTextOptions
	);

	keyMetricsSlide.addText(
		[
			{
				text: `${external_comparators[0] ? meta.Comparators[external_comparators[0]].Label : ''}   ${!!external_comparator1 && external_comparator1.Dimensions ? Utils_FormatPctOutput(external_comparator1.Dimensions[engDimensionId].Dist.Fav) : ''}`,
				options: { fontSize: 10, breakLine: true }
			},
			{
				text: `${external_comparators[1] ? meta.Comparators[external_comparators[1]].Label : ''}   ${!!external_comparator2 && external_comparator2.Dimensions ? Utils_FormatPctOutput(external_comparator2.Dimensions[engDimensionId].Dist.Fav) : ''}`,
				options: { fontSize: 10 }
			}
		],
		keyMetricsEngagementVSTextOptions
	);

	if(engHas_trend) {
		keyMetricsSlide.addText(
			[
				{text: engDiff > 0 ? ('+' + engDiff) : (engDiff < 0 ? engDiff : ''), options: {breakLine: true}},
				{text: trend_indicator_description, options: {}}
			],
			{
				x: '9%',
				...keyMetricsTrendTextGeneralOptions
			}
		);
	}


	// ENABLEMENT --------------------------------------------------------

	var ena_score = dimensions_data[enaDimensionId].Dist.Fav;
	var comparator_ena_score = comparator_dimensions_data !== undefined ? comparator_dimensions_data[enaDimensionId].Dist.Fav : null;
	var enaDiff = Utils_Diff ( ena_score, comparator_ena_score );
	let enaHas_trend = !( ena_score === null || comparator_ena_score === null);

	let enablementRows = [[meta.Dimensions[enaDimensionId].Label]];
	let keyMetricsEnablementTableOptions = {
		x: '39%',
		...keyMetricsCardGeneralOptions
	}
	let keyMetricsEnablementArrowIconOptions = {
		path: GetArrowIconPathBasedOnTrend( enaDiff ),
		x: '40%',
		...keyMetricsArrowIconGeneralOptions
	}
	let keyMetricsEnablementCardIconOptions = {
		x: '47%',
		...GetCardIconOptionsBasedOnDimensionId(enaDimensionId),
		...keyMetricsCardIconGeneralOptions
	}
	let keyMetricsEnablementScoreTextOptions = {
		x: '39%',
		...keyMetricsScoreTextGeneralOptions
	}
	let keyMetricsEnablementVSTextOptions = {
		x: '39%',
		...keyMetricsVSTextGeneralOptions
	}

	keyMetricsSlide.addTable(enablementRows, keyMetricsEnablementTableOptions);

	if ( enaHas_trend && keyMetricsEnablementArrowIconOptions.path != null )
		keyMetricsSlide.addImage(keyMetricsEnablementArrowIconOptions);

	keyMetricsSlide.addImage(keyMetricsEnablementCardIconOptions);
	keyMetricsSlide.addText(
		[
			{ text: meta.Labels['labels.Favorable'].Label, options: { fontSize: 10, align: "center", breakLine: true } },
			{ text: Utils_FormatPctOutput(ena_score), options: { fontSize: 26, align: "center", bold: true } }
		],
		keyMetricsEnablementScoreTextOptions
	);

	keyMetricsSlide.addText(
		[
			{
				text: `${external_comparators[0] ? meta.Comparators[external_comparators[0]].Label : ''}   ${!!external_comparator1 && external_comparator1.Dimensions ? Utils_FormatPctOutput(external_comparator1.Dimensions[enaDimensionId].Dist.Fav) : ''}`,
				options: { fontSize: 10, breakLine: true }
			},
			{
				text: `${external_comparators[1] ? meta.Comparators[external_comparators[1]].Label : ''}   ${!!external_comparator2 && external_comparator2.Dimensions ? Utils_FormatPctOutput(external_comparator2.Dimensions[enaDimensionId].Dist.Fav) : ''}`,
				options: { fontSize: 10 }
			}
		],
		keyMetricsEnablementVSTextOptions
	);

	if(enaHas_trend) {
		keyMetricsSlide.addText(
			[
				{text: enaDiff > 0 ? ('+' + enaDiff) : (enaDiff < 0 ? enaDiff : ''), options: {breakLine: true}},
				{text: trend_indicator_description, options: {}}
			],
			{
				x: '38%',
				...keyMetricsTrendTextGeneralOptions
			}
		);
	}


	// THIRD CARD ----------------------------------------------------------------------

	var dimension_id = data.Metrics[2]; //.DimensionId;
	var dimension_score = dimensions_data[ dimension_id ].Dist.Fav;
	var comparator_dimension_score = comparator_dimensions_data !== undefined ? comparator_dimensions_data[ dimension_id ].Dist.Fav : null;
	var dimensionDiff = Utils_Diff ( dimension_score, comparator_dimension_score );
	let dimensionHas_trend = !( dimension_score === null || comparator_dimension_score === null);

	let thirdCardRows = [[meta.Dimensions[thirdCardDimensionId].Label]];
	let keyMetricsThirdCardTableOptions = {
		x: '68%',
		...keyMetricsCardGeneralOptions
	}
	let keyMetricsThirdCardArrowIconOptions = {
		path: GetArrowIconPathBasedOnTrend( dimensionDiff ),
		x: '69%',
		...keyMetricsArrowIconGeneralOptions
	}
	let keyMetricsThirdCardCardIconOptions = {
		x: '76%',
		...GetCardIconOptionsBasedOnDimensionId(thirdCardDimensionId),
		...keyMetricsCardIconGeneralOptions
	}
	let keyMetricsThirdCardScoreTextOptions = {
		x: '68%',
		...keyMetricsScoreTextGeneralOptions
	}
	let keyMetricsThirdCardVSTextOptions = {
		x: '68%',
		...keyMetricsVSTextGeneralOptions
	}

	keyMetricsSlide.addTable(thirdCardRows, keyMetricsThirdCardTableOptions);

	if (dimensionHas_trend && keyMetricsThirdCardArrowIconOptions.path != null)
		keyMetricsSlide.addImage(keyMetricsThirdCardArrowIconOptions);

	keyMetricsSlide.addImage(keyMetricsThirdCardCardIconOptions);
	keyMetricsSlide.addText(
		[
			{ text: meta.Labels['labels.Favorable'].Label, options: { fontSize: 10, align: "center", breakLine: true } },
			{ text: Utils_FormatPctOutput(dimension_score), options: { fontSize: 26, align: "center", bold: true } }
		],
		keyMetricsThirdCardScoreTextOptions
	);

	keyMetricsSlide.addText(
		[
			{
				text: `${external_comparators[0] ? meta.Comparators[external_comparators[0]].Label : ''}   ${!!external_comparator1 && external_comparator1.Dimensions ? Utils_FormatPctOutput(external_comparator1.Dimensions[thirdCardDimensionId].Dist.Fav) : ''}`,
				options: { fontSize: 10, breakLine: true }
			},
			{
				text: `${external_comparators[1] ? meta.Comparators[external_comparators[1]].Label : ''}   ${!!external_comparator2 && external_comparator2.Dimensions ? Utils_FormatPctOutput(external_comparator2.Dimensions[thirdCardDimensionId].Dist.Fav) : ''}`,
				options: { fontSize: 10 }
			}
		],
		keyMetricsThirdCardVSTextOptions
	);

	if(dimensionHas_trend) {
		keyMetricsSlide.addText(
			[
				{text: dimensionDiff > 0 ? ('+' + dimensionDiff) : (dimensionDiff < 0 ? dimensionDiff : ''), options: {breakLine: true}},
				{text: trend_indicator_description, options: {}}
			],
			{
				x: '67%',
				...keyMetricsTrendTextGeneralOptions
			}
		);
	}

	function GetArrowIconPathBasedOnTrend(vsTrendValue) {
		if ( vsTrendValue == null ) return null; // no comparison was possible, don't show any type of arrow

		let arrowPath = '';

		if (vsTrendValue > 0) {
			arrowPath = PPT_image_storage.arrow_up;
		} else {
			if (vsTrendValue < 0) {
				arrowPath = PPT_image_storage.arrow_down;
			} else {
				arrowPath = PPT_image_storage.arrow_flat;
			}
		}

		return arrowPath;
	}


	function GetCardIconOptionsBasedOnDimensionId(dimensionId) {
		let options = {
			path: '',
			h: 1.1,
			w: 1.1
		}

		switch (dimensionId) {
			case 'DIM_ENG':
				options.path = PPT_image_storage.engagement;
				break;
			case 'DIM_ENA':
				options.path = PPT_image_storage.enablement;
				break;
			case 'DIM_N64':
				options.path = PPT_image_storage.resources;
				options.w = 1.1;
				options.h = 1;
				break;
			case 'DIM_N50':
				options.path = PPT_image_storage.authority_and_empowerement;
				break;
			case 'DIM_N65':
				options.path = PPT_image_storage.respect_and_recognition;
				break;
			case 'DIM_N52':
				options.path = PPT_image_storage.collaboration;
				break;
			case 'DIM_N63':
				options.path = PPT_image_storage.quality_and_customer_focus;
				options.w = 0.9;
				options.h = 1.2;
				break;
			case 'DIM_N61':
				options.path = PPT_image_storage.performance_management;
				options.w = 1.1;
				options.h = 0.8;
				break;
			case 'DIM_N54':
				options.path = PPT_image_storage.development_opportunities;
				break;
			case 'DIM_N53':
				options.path = PPT_image_storage.confidence_in_leaders;
				options.w = 1;
				options.h = 1.3;
				break;
			case 'DIM_N66':
				options.path = PPT_image_storage.training;
				options.w = 1.1;
				options.h = 1.2;
				break;
			case 'DIM_N51':
				options.path = PPT_image_storage.clear_and_promising_direction;
				break;
			case 'DIM_N67':
				options.path = PPT_image_storage.work_structure_progress;
				break;
			case 'DIM_N60':
				options.path = PPT_image_storage.compensation_and_benefits;
				options.w = 1.1;
				options.h = 1.2;
				break;
			default:
				options.path = PPT_image_storage.engagement;
				break;
		}

		return options;
	}
}

function Pptx_AddKeyDriversSlide(pptx, access) {
	if (access == false) return;

	let keyDriversSlide = pptx.addSlide({
		masterName: "WHITE",
		sectionTitle: "Main section"
	});

	keyDriversSlide.addText(meta.Labels.KeyDrivers.Title, PPTX_TITLE_STYLE);

	let kdInfoTextFirstParSplitByENG = meta.Labels.SlideTexts.SLIDE_KEYDRIVERS.info[0].split('[ENG]');
	let kdInfoTextFirstParSplitByENA = (kdInfoTextFirstParSplitByENG.length == 1)
		? ''
		: kdInfoTextFirstParSplitByENG[1].split('[ENA]');

	keyDriversSlide.addText([
		{ text: kdInfoTextFirstParSplitByENG[0], options: {} },
		{ text: meta.Labels.SlideTexts.SLIDE_KEYDRIVERS.LabelEmployeeEngagement, options: { color: '006550', bold: true } },
		{ text: kdInfoTextFirstParSplitByENA[0], options: {} },
		{ text: meta.Labels.SlideTexts.SLIDE_KEYDRIVERS.LabelEmployeeEnablement, options: { color: '006550', bold: true } },
		{ text: kdInfoTextFirstParSplitByENA[1], options: { breakLine: true } },
		{ text: meta.Labels.SlideTexts.SLIDE_KEYDRIVERS.info[1], options: { breakLine: true, paraSpaceBefore: 10 } },
		{ text: meta.Labels.SlideTexts.SLIDE_KEYDRIVERS.info[2], options: { breakLine: true, paraSpaceBefore: 10 } },
		{ text: meta.Labels.SlideTexts.SLIDE_KEYDRIVERS.info[3], options: { paraSpaceBefore: 10 } },
	], {
		w: '39%',
		x: 0.92,
		y: 3.8,
		align: 'left',
		fontFace: "Arial",
		fontSize: 14,
		color: '000000',
		lineSpacingMultiple: 1.5,
		isTextBox: true
	});

	let keyDriversCardTitleGeneralOptions = {
		w: '22%',
		y: 1.5,
		align: 'center',
		fontFace: "Arial",
		fontSize: 14,
		bold: true,
		color: '006550'
	}

	keyDriversSlide.addText(`${meta.Labels.SlideTexts.SLIDE_KEYDRIVERS.LabelTop2KeyDriversOf} ${meta.Labels.SlideTexts.SLIDE_KEYDRIVERS.LabelEmployeeEngagement}`, {
		x: '47%',
		...keyDriversCardTitleGeneralOptions
	});
	keyDriversSlide.addText(`${meta.Labels.SlideTexts.SLIDE_KEYDRIVERS.LabelTop2KeyDriversOf} ${meta.Labels.SlideTexts.SLIDE_KEYDRIVERS.LabelEmployeeEnablement}`, {
		x: '72%',
		...keyDriversCardTitleGeneralOptions
	});

	let keyDriversCardGeneralOptions = {
		y: 2,
		w: '22%',
		h: '50%',
		fill: { color: 'FFFFF6' },
		line: { color: '77BC1F', width: 1 }
	}

	keyDriversSlide.addShape(pptx.ShapeType.rect, {
		x: '47%',
		...keyDriversCardGeneralOptions
	});
	keyDriversSlide.addShape(pptx.ShapeType.rect, {
		x: '72%',
		...keyDriversCardGeneralOptions
	});

	let metrics = data.Metrics;
	let engagementDimensionId = config.EngagementDimensionId;
	let enablementDimensionId = config.EnablementDimensionId;

	let engagementIconPath = PPT_image_storage.engagement;
	let enablementIconPath = PPT_image_storage.enablement;

	keyDriversSlide.addImage({
		path: engagementIconPath,
		x: '48%',
		y: 2.1,
		w: 0.5,
		h: 0.5
	});
	keyDriversSlide.addImage({
		path: enablementIconPath,
		x: '73%',
		y: 2.1,
		w: 0.5,
		h: 0.5
	});

	let keyDriversCardInnerTitleGeneralOptions = {
		w: '20%',
		y: 3,
		align: 'left',
		fontFace: "Arial",
		fontSize: 10,
		bold: true,
		color: '000000'
	}

	keyDriversSlide.addText((meta.Dimensions[engagementDimensionId].KeyMetric_BackCardText).toUpperCase(), {
		x: '48%',
		...keyDriversCardInnerTitleGeneralOptions
	});
	keyDriversSlide.addText((meta.Dimensions[enablementDimensionId].KeyMetric_BackCardText).toUpperCase(), {
		x: '73%',
		...keyDriversCardInnerTitleGeneralOptions
	});

	let keyDriversCardLineGeneralOptions = {
		w: '20%',
		h: 0.0,
		line: { color: '000000', width: 1}
	}

	keyDriversSlide.addShape(pptx.ShapeType.line, {
		x: '48%',
		y: 3.36,
		...keyDriversCardLineGeneralOptions
	});
	keyDriversSlide.addShape(pptx.ShapeType.line, {
		x: '73%',
		y: 3.36,
		...keyDriversCardLineGeneralOptions
	});

	var kda_key = Main_GetKey('KDA', config.CurrentWave, data.User.PersonalizedReportBase);
	var kda = data[kda_key];

	let engagementDrivers = kda[engagementDimensionId]; // array of items (or null)
	let enablementDrivers = kda[enablementDimensionId];

	if (engagementDrivers == null) engagementDrivers = [];
	if (enablementDrivers == null) enablementDrivers = [];


	let keyDriversCardDriverDimensionGeneralOptions = {
		w: '20%',
		align: 'left',
		fontFace: "Arial",
		fontSize: 8,
		color: '777777'
	}

	var dimension_id = Main_GetDimensionIdByItemId ( engagementDrivers[0] );
	if (dimension_id == undefined) return;
	keyDriversSlide.addText((meta.Dimensions[ dimension_id ].Label).toUpperCase(), {
		x: '48%',
		y: 3.55,
		...keyDriversCardDriverDimensionGeneralOptions
	});

	var dimension_id = Main_GetDimensionIdByItemId ( enablementDrivers[0] );
	if (dimension_id == undefined) return;
	keyDriversSlide.addText((meta.Dimensions[ dimension_id ].Label).toUpperCase(), {
		x: '73%',
		y: 3.55,
		...keyDriversCardDriverDimensionGeneralOptions
	});

	let keyDriversCardDriverItemGeneralOptions = {
		w: '16%',
		align: 'left',
		fontFace: "Arial",
		fontSize: 8,
		color: '000000'
	}

	keyDriversSlide.addText(meta.Items[ engagementDrivers[0] ].Label, {
		x: '48%',
		y: 3.9,
		...keyDriversCardDriverItemGeneralOptions
	});

	keyDriversSlide.addText(meta.Items[ enablementDrivers[0] ].Label, {
		x: '73%',
		y: 3.9,
		...keyDriversCardDriverItemGeneralOptions
	});

	let keyDriversCardDriverItemScoreGeneralOptions = {
		w: '5%',
		align: 'left',
		fontFace: "Arial",
		fontSize: 12,
		bold: true,
		color: '000000'
	}

	var items_data = Main_CurrentItemsData_WithFilter();

	keyDriversSlide.addText(`${Utils_FormatPctOutput(Utils_CountsToPercents ( items_data[engagementDrivers[0] ].Dist ).Fav)}`, {
		x: '64%',
		y: 3.9,
		...keyDriversCardDriverItemScoreGeneralOptions
	});
	keyDriversSlide.addText(`${Utils_FormatPctOutput(Utils_CountsToPercents (items_data[enablementDrivers[0] ].Dist).Fav)}`, {
		x: '89%',
		y: 3.9,
		...keyDriversCardDriverItemScoreGeneralOptions
	});

	keyDriversSlide.addShape(pptx.ShapeType.line, {
		x: '48%',
		y: 4.35,
		...keyDriversCardLineGeneralOptions
	});
	keyDriversSlide.addShape(pptx.ShapeType.line, {
		x: '73%',
		y: 4.35,
		...keyDriversCardLineGeneralOptions
	});

	var dimension_id = Main_GetDimensionIdByItemId ( engagementDrivers[1] );
	if (dimension_id == undefined) return;
	keyDriversSlide.addText((meta.Dimensions[ dimension_id ].Label).toUpperCase(), {
		x: '48%',
		y: 4.55,
		...keyDriversCardDriverDimensionGeneralOptions
	});

	var dimension_id = Main_GetDimensionIdByItemId ( enablementDrivers[1] );
	if (dimension_id == undefined) return;
	keyDriversSlide.addText((meta.Dimensions[ dimension_id ].Label).toUpperCase(), {
		x: '73%',
		y: 4.55,
		...keyDriversCardDriverDimensionGeneralOptions
	});

	keyDriversSlide.addText(meta.Items[engagementDrivers[1]].Label, {
		x: '48%',
		y: 4.9,
		...keyDriversCardDriverItemGeneralOptions
	});
	keyDriversSlide.addText(meta.Items[enablementDrivers[1]].Label, {
		x: '73%',
		y: 4.9,
		...keyDriversCardDriverItemGeneralOptions
	});

	keyDriversSlide.addText(`${Utils_FormatPctOutput(Utils_CountsToPercents (items_data[engagementDrivers[1] ].Dist).Fav)}`, {
		x: '64%',
		y: 4.9,
		...keyDriversCardDriverItemScoreGeneralOptions
	});
	keyDriversSlide.addText(`${Utils_FormatPctOutput(Utils_CountsToPercents (items_data[enablementDrivers[1] ].Dist).Fav)}`, {
		x: '89%',
		y: 4.9,
		...keyDriversCardDriverItemScoreGeneralOptions
	});
}

function Pptx_AddEffectivenessProfileSegmentationSlide(pptx, access) {
	if (access == false) return;

	let effectivenessProfileSegmentationSlide = pptx.addSlide({
		masterName: "WHITE",
		sectionTitle: "Main section"
	});

	effectivenessProfileSegmentationSlide.addText(meta.Labels.SlideTexts.SLIDE_EPSEGMENTATION.title, PPTX_TITLE_STYLE);

	let chartTitleGeneralOptions = {
		h: 0.35,
		align: 'center',
		fontFace: "Arial",
		fontSize: 14,
		color: 'ffffff',
		fill: '006550',
		bold: true
	}

	effectivenessProfileSegmentationSlide.addText(meta.Labels['labels.Engagement'].Label, {
		w: '42%',
		x: 1,
		y: 1.7,
		...chartTitleGeneralOptions
	});

	effectivenessProfileSegmentationSlide.addText(meta.Labels['labels.Enablement'].Label, {
		w: '35%',
		x: -1.16,
		y: 3.9,
		rotate: -90,
		...chartTitleGeneralOptions
	});

	let chartSubtitleGeneralOptions = {
		w: 1,
		h: 0.3,
		fontSize: 10,
		align: 'center',
		fontFace: "Arial",
		color: 'ffffff',
		bold: true
	}

	effectivenessProfileSegmentationSlide.addText(meta.Labels.SlideTexts.SLIDE_EPSEGMENTATION.LabelLow.toUpperCase(), {
		x: 1.1,
		y: 1.725,
		...chartSubtitleGeneralOptions
	});
	effectivenessProfileSegmentationSlide.addText(meta.Labels.SlideTexts.SLIDE_EPSEGMENTATION.LabelHigh.toUpperCase(), {
		x: 5.5,
		y: 1.725,
		...chartSubtitleGeneralOptions
	});
	effectivenessProfileSegmentationSlide.addText(meta.Labels.SlideTexts.SLIDE_EPSEGMENTATION.LabelHigh.toUpperCase(), {
		x: 0.675,
		y: 2.15,
		rotate: -90,
		...chartSubtitleGeneralOptions
	});
	effectivenessProfileSegmentationSlide.addText(meta.Labels.SlideTexts.SLIDE_EPSEGMENTATION.LabelLow.toUpperCase(), {
		x: 0.675,
		y: 5.75,
		rotate: -90,
		...chartSubtitleGeneralOptions
	});

	//add arrows
	effectivenessProfileSegmentationSlide.addShape(pptx.ShapeType.line, {
		x: 3.85,
		y: 2.15,
		w: 0.0,
		h: 4.15,
		line: { color: '000000', width: 0.5, beginArrowType: "triangle", endArrowType: "triangle" }
	});
	effectivenessProfileSegmentationSlide.addShape(pptx.ShapeType.line, {
		x: 1.45,
		y: 4.25,
		w: 5,
		h: 0.0,
		line: { color: '000000', width: 0.5, beginArrowType: "triangle", endArrowType: "triangle" }
	});

	//add icons
	effectivenessProfileSegmentationSlide.addImage({
		path: PPT_image_storage.detached,
		h: 0.91,
		w: 0.6,
		y: 2.5,
		x: 2.2
	});
	effectivenessProfileSegmentationSlide.addImage({
		path: PPT_image_storage.mosteffective,
		h: 0.91,
		w: 0.65,
		y: 2.5,
		x: 4.8
	});
	effectivenessProfileSegmentationSlide.addImage({
		path: PPT_image_storage.leasteffective,
		h: 1,
		w: 0.7,
		y: 4.5,
		x: 2.2
	});
	effectivenessProfileSegmentationSlide.addImage({
		path: PPT_image_storage.frustrated,
		h: 1,
		w: 0.7,
		y: 4.5,
		x: 4.8
	});

	//add texts for icons
	effectivenessProfileSegmentationSlide.addText([
		{ text: meta.Labels['labels.Detached'].Label.toUpperCase(), options: { color: '00ADBB', fontSize: 12, breakLine: true, bold: true } },
		{ text: meta.Labels.SlideTexts.SLIDE_EPSEGMENTATION.LabelDetachedExplanation, options: { color: '404040', fontSize: 11 } }
	], {
		w: 2.5,
		y: 3.7,
		x: 1.3,
		align: 'center',
		fontFace: 'Arial'
	});
	effectivenessProfileSegmentationSlide.addText([
		{ text: meta.Labels['labels.MostEffective'].Label.toUpperCase(), options: { color: '77BC1F', fontSize: 12, breakLine: true, bold: true } },
		{ text: meta.Labels.SlideTexts.SLIDE_EPSEGMENTATION.LabelMostEffectiveExplanation, options: { color: '404040', fontSize: 11 } }
	], {
		w: 2.5,
		y: 3.7,
		x: 3.9,
		align: 'center',
		fontFace: 'Arial'
	});
	effectivenessProfileSegmentationSlide.addText([
		{ text: meta.Labels['labels.LeastEffective'].Label.toUpperCase(), options: { color: 'D40A1C', fontSize: 12, breakLine: true, bold: true } },
		{ text: meta.Labels.SlideTexts.SLIDE_EPSEGMENTATION.LabelLeastEffectiveExplanation, options: { color: '404040', fontSize: 11 } }
	], {
		w: 2.5,
		y: 5.8,
		x: 1.3,
		align: 'center',
		fontFace: 'Arial'
	});
	effectivenessProfileSegmentationSlide.addText([
		{ text: meta.Labels['labels.Frustrated'].Label.toUpperCase(), options: { color: 'FF8300', fontSize: 12, breakLine: true, bold: true } },
		{ text: meta.Labels.SlideTexts.SLIDE_EPSEGMENTATION.LabelFrustratedExplanation, options: { color: '404040', fontSize: 11 } }
	], {
		w: 2.5,
		y: 5.8,
		x: 3.9,
		align: 'center',
		fontFace: 'Arial'
	});

	let epsFirstParSplitByEPF = meta.Labels.SlideTexts.SLIDE_EPSEGMENTATION.info[0].split('[ENGFRAMEWORK]');
	let epsThirdParSplitByFrustrated = meta.Labels.SlideTexts.SLIDE_EPSEGMENTATION.info[2].split('[FRUSTRATED]');
	let epsFourthParSplitByDetachment = meta.Labels.SlideTexts.SLIDE_EPSEGMENTATION.info[3].split('[DETACHMENT]');
	let engagedPerformanceFrameworkTextSplitByTM = meta.Labels.SlideTexts.SLIDE_EPSEGMENTATION.LabelEngagedPerformanceFramework.split('[TM]');

	effectivenessProfileSegmentationSlide.addText([
		{ text: epsFirstParSplitByEPF[0], options: {} },
		{ text: engagedPerformanceFrameworkTextSplitByTM[0], options: { color: '006550', bold: true } },
		{ text: 'TM', options: { color: '006550', bold: true, superscript: true } },
		{ text: engagedPerformanceFrameworkTextSplitByTM[1], options: { color: '006550', bold: true } },
		{ text: epsFirstParSplitByEPF[1], options: { breakLine: true } },
		{ text: meta.Labels.SlideTexts.SLIDE_EPSEGMENTATION.info[1], options: { breakLine: true, paraSpaceBefore: 10 } },
		{ text: epsThirdParSplitByFrustrated[0], options: { paraSpaceBefore: 10 } },
		{ text: meta.Labels['labels.Frustrated'].Label.toLowerCase(), options: { color: 'FF8300', bold: true } },
		{ text: epsThirdParSplitByFrustrated[1], options: { breakLine: true } },
		{ text: epsFourthParSplitByDetachment[0], options: { paraSpaceBefore: 10 } },
		{ text: meta.Labels.SlideTexts.SLIDE_EPSEGMENTATION.LabelDetachment.toLowerCase(), options: { color: '00ADBB', bold: true } },
		{ text: epsFourthParSplitByDetachment[1], options: {} }
	], {
		w: '43%',
		x: '53%',
		y: 3.7,
		align: 'left',
		fontFace: "Arial",
		fontSize: 14,
		color: '000000',
		lineSpacingMultiple: 1.5,
		isTextBox: true
	});
}

function Pptx_AddEffectivenessProfileDetailSlide(pptx, access) {
	if (access == false) return;

	var infoStyle = Object.assign({}, PPTX_INFO_STYLE);
	infoStyle.h = 0.5;

	let effectivenessProfileDetailSlide = pptx.addSlide({
		masterName: "WHITE",
		sectionTitle: "Main section"
	});

	effectivenessProfileDetailSlide.addText(meta.Labels.SlideTexts.SLIDE_EPDETAIL.title, PPTX_TITLE_STYLE);

	effectivenessProfileDetailSlide.addText(
		[
			{ text: meta.Labels.SlideTexts.SLIDE_EPDETAIL.info[0], options: { bullet: PPTX_BULLET_STYLE } }
		],
		infoStyle
	);

	let chartGeneralOptions = {
		h: '30%',
		valAxisMaxVal: 100,
		barDir: "bar",
		catAxisLineShow: false,
		valAxisLineShow: false,
		showValue: true,
		dataLabelPosition: "outEnd",
		dataLabelFormatCode: "#",
		valAxisLabelFormatCode: "#",
		valAxisMajorUnit: 25,
		barGapWidthPct: 20,
		dataLabelFontSize: 8,
		catAxisLabelFontSize: 8,
		valAxisLabelFontSize: 8,
		catAxisLabelFontFace: 'Arial',
		valAxisLabelFontFace: 'Arial',
		catAxisLabelColor: '7F7F7F',
		fill: 'ffffff'
	}

	let chartTitleGeneralOptions = {
		w: '28%',
		h: 0.22,
		color: "ffffff",
		align: 'center',
		fontSize: 12,
		fontFace: 'Arial'
	}

	const chartCategoryLabelsOptions = {
		align: "right",
		valign: "middle",
		h: "24.5%",
		w: "12%",
		x: 1.1,
		color: "7F7F7F",
		fontSize: "8",
		fontFace: "Arial"
	}

	var chartData = EffectivenessProfile_GetChartData();

	//top left - Detached
	effectivenessProfileDetailSlide.addText(".", { x: 1.5, y: 2.15, w: '30.6%', h: '30%', fill: { color: "ffffff" }, color: "ffffff" });
	effectivenessProfileDetailSlide.addChart(
		pptx.charts.BAR,
		[
			{
				name: chartData.Detached.series.name,
				labels: [],
				values: chartData.Detached.series.data.reverse(),
			},
		],
		{
			x: 2.51,
			y: 2.1,
			w: "30.6%",
			chartColors: chartData.Detached.series.colors.map((element) => element.split('#')[1]).reverse(),
			...chartGeneralOptions
		}
	);

	let categoryLabels = chartData.Detached.categories;
	let rows = categoryLabels.map(elem => [elem]);
	effectivenessProfileDetailSlide.addTable(rows, { y: 2.25, ...chartCategoryLabelsOptions });

	effectivenessProfileDetailSlide.addText(chartData.Detached.series.name, {
		x: 2.67,
		y: 2,
		fill: { color: "00B7F1" },
		...chartTitleGeneralOptions
	});

	//top right - MostEffective
	effectivenessProfileDetailSlide.addText(".", { x: 6.5, y: 2.15, w: '30%', h: '30%', fill: { color: "ffffff" }, color: "ffffff" });
	effectivenessProfileDetailSlide.addChart(
		pptx.charts.BAR,
		[
			{
				name: chartData.MostEffective.series.name,
				labels: chartData.MostEffective.categories.reverse(),
				values: chartData.MostEffective.series.data.reverse(),
			},
		],
		{
			x: 6.5,
			y: 2.1,
			w: "30%",
			catAxisHidden: true,
			chartColors: chartData.MostEffective.series.colors.map((element) => element.split('#')[1]).reverse(),
			...chartGeneralOptions
		}
	);
	effectivenessProfileDetailSlide.addText(chartData.MostEffective.series.name, {
		x: 6.6,
		y: 2,
		fill: { color: "82C341" },
		...chartTitleGeneralOptions
	})

	//bottom left - LeastEffective
	effectivenessProfileDetailSlide.addText(".", { x: 1.5, y: 4.5, w: '30.6%', h: '30%', fill: { color: "ffffff" }, color: "ffffff" });
	effectivenessProfileDetailSlide.addChart(
		pptx.charts.BAR,
		[
			{
				name: chartData.LeastEffective.series.name,
				labels: [],
				values: chartData.LeastEffective.series.data.reverse(),
			},
		],
		{
			x: 2.51,
			y: 4.5,
			w: "30.6%",
			chartColors: chartData.LeastEffective.series.colors.map((element) => element.split('#')[1]).reverse(),
			...chartGeneralOptions
		}
	);

	categoryLabels = chartData.LeastEffective.categories;
	rows = categoryLabels.map(elem => [elem]);
	effectivenessProfileDetailSlide.addTable(rows, { y: 4.65, ...chartCategoryLabelsOptions });

	effectivenessProfileDetailSlide.addText(chartData.LeastEffective.series.name, {
		x: 2.67,
		y: 4.385,
		fill: { color: "F03223" },
		...chartTitleGeneralOptions
	})

	//bottom right - Frustrated
	effectivenessProfileDetailSlide.addText(".", { x: 6.5, y: 4.5, w: '30%', h: '30%', fill: { color: "ffffff" }, color: "ffffff" });
	effectivenessProfileDetailSlide.addChart(
		pptx.charts.BAR,
		[
			{
				name: chartData.Frustrated.series.name,
				labels: chartData.Frustrated.categories.reverse(),
				values: chartData.Frustrated.series.data.reverse(),
			},
		],
		{
			x: 6.52,
			y: 4.5,
			w: "30%",
			catAxisHidden: true,
			chartColors: chartData.Frustrated.series.colors.map((element) => element.split('#')[1]).reverse(),
			...chartGeneralOptions
		}
	);
	effectivenessProfileDetailSlide.addText(chartData.Frustrated.series.name, {
		x: 6.6,
		y: 4.385,
		fill: { color: "F99B1E" },
		...chartTitleGeneralOptions
	});

	effectivenessProfileDetailSlide.addShape(pptx.ShapeType.line, {
		x: 2.675,
		y: 1.8,
		w: 0.0,
		h: 4.69,
		flipV: true,
		line: { color: '000000', width: 2, endArrowType: "arrow" }
	});

	effectivenessProfileDetailSlide.addShape(pptx.ShapeType.line, {
		x: 2.67,
		y: 6.48,
		w: 8,
		h: 0.0,
		line: { color: '000000', width: 2, endArrowType: "arrow" }
	});

	effectivenessProfileDetailSlide.addText(meta.Labels['labels.Enablement'].Label, {
		w: 1.5,
		x: 1.1,
		y: 2.1,
		align: 'right',
		fontFace: "Arial",
		fontSize: 14,
		color: 'bfbfbf'
	});

	effectivenessProfileDetailSlide.addText(meta.Labels['labels.Engagement'].Label, {
		w: 1.5,
		x: 8,
		y: 6.8,
		align: 'right',
		fontFace: "Arial",
		fontSize: 14,
		color: 'bfbfbf'
	});
}

function Pptx_AddGreenCoverSlide(pptx, coverText, access) {
	if (access == false) return;

	let coverSlide = pptx.addSlide({
		masterName: "GREEN",
		sectionTitle: "Main section"
	});

	coverSlide.addText(coverText, {
		color: 'ffffff',
		fontFace: 'Arial',
		fontSize: 44,
		x: '5%',
		y: '20%',
		w: '30%',
		h: '20%'
	})
}

function Pptx_AddSurveyBackgroundSlide(pptx, access) {
	if (access == false) return;

	let slide = pptx.addSlide({
		masterName: "WHITE2GREEN",
		sectionTitle: "Main section"
	});

	var title = meta.Labels.SlideTexts['SLIDE_SURVEYBACKGROUND'].title;
	slide.addText(title, PPTX_TITLE_STYLE);

	var info = meta.Labels.SlideTexts['SLIDE_SURVEYBACKGROUND'].info;
	let LeftSideContent = [];
	for (var i in info) {
		LeftSideContent.push({ text: "\u200b", options: { fontSize: 12, color: "00634f", bullet: { code: '25CF', indent: 20 } } });
		LeftSideContent.push({ text: info[i], options: { fontSize: 16, color: "000000", paraSpaceAfter: 8, breakLine: true } });
	}
	slide.addText(LeftSideContent, { x: 1.0, y: 1.5, w: 7.5, h: 5.0, valign: 'top' });

	var key = Main_GetKey('RR', config.CurrentWave, data.User.PersonalizedReportBase);
	var completed_surveys = data[key].Completes;
	var invite_count = data[key].Total;
	var rr_pct = Math.round(100 * completed_surveys / invite_count) + '%';

	let RightSideContent = [
		{ text: meta.Labels.SlideTexts['SLIDE_SURVEYBACKGROUND'].LabelNoResponses + " " + completed_surveys + " / " + invite_count, options: { fontSize: 16, color: "FFFFFF", breakLine: true } },
		{ text: meta.Labels.SlideTexts['SLIDE_SURVEYBACKGROUND'].LabelRespRate + " " + rr_pct, options: { fontSize: 16, color: "FFFFFF" } },
	];
	slide.addText(RightSideContent, { x: 10.2, y: 5.5, w: 3.0, h: 1.0, lineSpacing: 24 });
}

function Pptx_AddTakingAction(pptx) {

	let slide = pptx.addSlide({
		masterName: "GREEN2WHITE",
		sectionTitle: "Main section"
	});

	var titleStyle = Object.assign({}, PPTX_TITLE_STYLE);
	titleStyle.x = 6.2;
	titleStyle.w = 5.0;
	var title = meta.Labels.SlideTexts['SLIDE_TAKEACTION'].title;
	slide.addText(title, titleStyle);

	slide.addText(meta.Labels.SlideTexts['SLIDE_TAKEACTION'].LeftSideContent, { color: 'ffffff', fontFace: 'Arial', fontSize: 28, x: 0.5, y: 0.5, w: 4.0, h: 5.0, valign: 'top' });

	var info = meta.Labels.SlideTexts['SLIDE_TAKEACTION'].RightSideContent;
	let RightSideContent = [];
	var stylePlain = { fontSize: 16, color: "000000", paraSpaceAfter: 8 };
	var styleEmph = { fontSize: 16, color: "00634f", bold: true, paraSpaceAfter: 8 };
	RightSideContent.push({ text: info[0] + "\n", options: { breakLine: true, ...stylePlain } });
	for (var i = 1; i < Object.keys(info).length; i++) {
		var str = info[i].match(/(.+)?\[(.+)\](.+)?/);
		RightSideContent.push({ text: "\u200b", options: { bullet: { code: '2714', indent: 20 }, ...styleEmph } });
		if (str[1]) RightSideContent.push({ text: str[1], options: stylePlain });
		if (str[2]) RightSideContent.push({ text: str[2], options: styleEmph });
		if (str[3]) RightSideContent.push({ text: str[3], options: stylePlain });
		RightSideContent.push({ text: "\u200b", options: { breakLine: true, ...stylePlain } });
	}
	slide.addText(RightSideContent, { x: 6.2, y: 1.8, w: 6.5, h: 5.0, valign: 'top' });
}

function Pptx_AddEngagedPerformanceFrameworkSlide(pptx) {

	let engagedPerformanceSlide = pptx.addSlide({
		masterName: "WHITE",
		sectionTitle: "Main section"
	});

	let titleSplitByTM = meta.Labels.SlideTexts.SLIDE_ENGFRAMEWORK.title.split('[TM]');

	engagedPerformanceSlide.addText([
		{ text: titleSplitByTM[0], options: {} },
		{ text: 'TM', options: { superscript: true } },
		{ text: titleSplitByTM[1], options: {} }
	], PPTX_TITLE_STYLE);

	let chevronGeneralOptions = {
		h: '5%',
		y: 1.4,
		fill: '#006550',
		color: 'ffffff',
		fontFace: 'Arial',
		align: 'center'
	}
	engagedPerformanceSlide.addText(meta.Labels.SlideTexts.SLIDE_ENGFRAMEWORK.LabelMeasure, {
		shape: pptx.ShapeType.chevron,
		w: '55%',
		x: 1,
		fontSize: 16,
		...chevronGeneralOptions
	});
	engagedPerformanceSlide.addText(meta.Labels.SlideTexts.SLIDE_ENGFRAMEWORK.LabelAchieve, {
		shape: pptx.ShapeType.chevron,
		w: '25%',
		x: 8.3,
		fontSize: 14,
		...chevronGeneralOptions
	})
	engagedPerformanceSlide.addText(meta.Labels.SlideTexts.SLIDE_ENGFRAMEWORK.LabelVision, {
		x: -0.78,
		y: 3.8,
		h: '6%',
		w: '30%',
		rotate: -90,
		color: '77BC1F',
		fontSize: 14,
		fontFace: 'Arial',
		bold: true,
		align: 'center',
		line: { width: 0.5, color: '77BC1F', dashType: "sysDot" }
	});

	let limeGreenParalleloramGeneralOptions = {
		w: '22%',
		h: '20%',
		fill: '77BC1F'
	};
	engagedPerformanceSlide.addShape(pptx.ShapeType.parallelogram, {
		x: 1.7,
		y: 2.02,
		...limeGreenParalleloramGeneralOptions
	});
	engagedPerformanceSlide.addShape(pptx.ShapeType.parallelogram, {
		x: 5,
		y: 2.02,
		...limeGreenParalleloramGeneralOptions
	});
	engagedPerformanceSlide.addShape(pptx.ShapeType.parallelogram, {
		x: 1.7,
		y: 4.53,
		...limeGreenParalleloramGeneralOptions
	});
	engagedPerformanceSlide.addShape(pptx.ShapeType.parallelogram, {
		x: 5,
		y: 4.53,
		...limeGreenParalleloramGeneralOptions
	});

	let darkGreenParalleloramGeneralOptions = {
		w: '22%',
		h: '7%',
		fill: '00634f'
	}
	engagedPerformanceSlide.addShape(pptx.ShapeType.parallelogram, {
		x: 1.7,
		y: 3.75,
		...darkGreenParalleloramGeneralOptions
	});
	engagedPerformanceSlide.addShape(pptx.ShapeType.parallelogram, {
		x: 5,
		y: 3.75,
		...darkGreenParalleloramGeneralOptions
	});

	let limeGreenArrowGeneralOptions = {
		w: '5%',
		h: 0,
		line: { color: '77BC1F', width: 4.5, endArrowType: "triangle" }
	}
	engagedPerformanceSlide.addShape(pptx.ShapeType.line, {
		x: 4.3,
		y: 2.8,
		...limeGreenArrowGeneralOptions
	});
	engagedPerformanceSlide.addShape(pptx.ShapeType.line, {
		x: 4.3,
		y: 5.3,
		...limeGreenArrowGeneralOptions
	});
	engagedPerformanceSlide.addShape(pptx.ShapeType.line, {
		x: 6.3,
		y: 3.4,
		rotate: 90,
		...limeGreenArrowGeneralOptions
	});
	engagedPerformanceSlide.addShape(pptx.ShapeType.line, {
		x: 6.3,
		y: 4.65,
		rotate: -90,
		...limeGreenArrowGeneralOptions
	});
	engagedPerformanceSlide.addShape(pptx.ShapeType.line, {
		x: 7.8,
		y: 4,
		w: '5%',
		h: 0,
		line: { color: '00634f', width: 4.5, endArrowType: "triangle" }
	});

	engagedPerformanceSlide.addText([
		{ text: meta.Labels.SlideTexts.SLIDE_ENGFRAMEWORK.info[0], options: { breakLine: true } },
		{ text: meta.Labels.SlideTexts.SLIDE_ENGFRAMEWORK.info[1], options: { breakLine: true } },
		{ text: meta.Labels.SlideTexts.SLIDE_ENGFRAMEWORK.info[2], options: { breakLine: true } },
		{ text: meta.Labels.SlideTexts.SLIDE_ENGFRAMEWORK.info[3], options: { breakLine: true } },
		{ text: meta.Labels.SlideTexts.SLIDE_ENGFRAMEWORK.info[4], options: { breakLine: true } },
		{ text: meta.Labels.SlideTexts.SLIDE_ENGFRAMEWORK.info[5], options: {} }
	], {
		fontSize: 10,
		fontFace: 'Arial',
		color: 'ffffff',
		align: 'left',
		lineSpacingMultiple: 1.2,
		w: '18%',
		h: '18%',
		x: 2.1,
		y: 2.1
	});
	engagedPerformanceSlide.addText([
		{ text: meta.Labels.SlideTexts.SLIDE_ENGFRAMEWORK.info[6], options: { breakLine: true } },
		{ text: meta.Labels.SlideTexts.SLIDE_ENGFRAMEWORK.info[7], options: { breakLine: true } },
		{ text: meta.Labels.SlideTexts.SLIDE_ENGFRAMEWORK.info[8], options: { breakLine: true } },
		{ text: meta.Labels.SlideTexts.SLIDE_ENGFRAMEWORK.info[9], options: { breakLine: true } },
		{ text: meta.Labels.SlideTexts.SLIDE_ENGFRAMEWORK.info[10], options: { breakLine: true } },
		{ text: meta.Labels.SlideTexts.SLIDE_ENGFRAMEWORK.info[11], options: {} }
	], {
		fontSize: 10,
		fontFace: 'Arial',
		color: 'ffffff',
		align: 'left',
		lineSpacingMultiple: 1.2,
		w: '18%',
		h: '18%',
		x: 2.1,
		y: 4.566
	});
	engagedPerformanceSlide.addText(meta.Labels.SlideTexts.SLIDE_ENGFRAMEWORK.LabelPerformanceDrivers, {
		fontSize: 10,
		fontFace: 'Arial',
		color: 'ffffff',
		align: 'left',
		w: '18%',
		h: '5%',
		x: 2.1,
		y: 3.8
	});
	engagedPerformanceSlide.addText(meta.Labels.SlideTexts.SLIDE_ENGFRAMEWORK.LabelEngagedPerformance, {
		fontSize: 14,
		fontFace: 'Arial',
		color: 'ffffff',
		align: 'center',
		bold: true,
		w: '18%',
		h: '5%',
		x: 5.3,
		y: 3.8
	});
	engagedPerformanceSlide.addImage({
		path: PPT_image_storage.engagement_bulb,
		w: 0.22,
		h: 0.33,
		x: 5.5,
		y: 2.2
	});
	engagedPerformanceSlide.addText([
		{ text: meta.Labels['labels.Engagement'].Label, options: { fontSize: 14, bold: true, breakLine: true } },
		{ text: meta.Labels.SlideTexts.SLIDE_ENGFRAMEWORK.LabelEngagementInfo, options: { breakLine: true } }
	], {
		fontSize: 10,
		fontFace: 'Arial',
		color: 'ffffff',
		align: 'left',
		lineSpacingMultiple: 1.2,
		w: '15%',
		h: '10%',
		x: 5.4,
		y: 2.6
	});
	engagedPerformanceSlide.addImage({
		path: PPT_image_storage.enablement_briefcase,
		w: 0.33,
		h: 0.2,
		x: 5.5,
		y: 4.8
	});
	engagedPerformanceSlide.addText([
		{ text: meta.Labels['labels.Enablement'].Label, options: { fontSize: 14, bold: true, breakLine: true } },
		{ text: meta.Labels.SlideTexts.SLIDE_ENGFRAMEWORK.LabelEnablementInfo, options: { breakLine: true } }
	], {
		fontSize: 10,
		fontFace: 'Arial',
		color: 'ffffff',
		align: 'left',
		lineSpacingMultiple: 1.2,
		w: '17%',
		h: '10%',
		x: 5.3,
		y: 5.1
	});
	engagedPerformanceSlide.addImage({
		path: PPT_image_storage.operational_excellence,
		w: 0.45,
		h: 0.38,
		x: 8.8,
		y: 2.2
	});
	engagedPerformanceSlide.addImage({
		path: PPT_image_storage.customer_loyalty,
		w: 0.28,
		h: 0.385,
		x: 8.8,
		y: 3
	});
	engagedPerformanceSlide.addImage({
		path: PPT_image_storage.financial_performance,
		w: 0.3,
		h: 0.35,
		x: 8.8,
		y: 3.8
	});
	engagedPerformanceSlide.addImage({
		path: PPT_image_storage.attract_talent,
		w: 0.38,
		h: 0.38,
		x: 8.8,
		y: 4.6
	});
	engagedPerformanceSlide.addImage({
		path: PPT_image_storage.strong_brand,
		w: 0.38,
		h: 0.38,
		x: 8.8,
		y: 5.4
	});

	let iconTextGeneralOptions = {
		fontSize: 14,
		fontFace: 'Arial',
		color: '00634f',
		align: 'left',
		bold: true,
		w: '20%',
		h: '5%',
		x: 9.5
	}
	engagedPerformanceSlide.addText(meta.Labels.SlideTexts.SLIDE_ENGFRAMEWORK.LabelOperationalExcellence, {
		y: 2.2,
		...iconTextGeneralOptions
	});
	engagedPerformanceSlide.addText(meta.Labels.SlideTexts.SLIDE_ENGFRAMEWORK.LabelCustomerLoyalty, {
		y: 3,
		...iconTextGeneralOptions
	});
	engagedPerformanceSlide.addText(meta.Labels.SlideTexts.SLIDE_ENGFRAMEWORK.LabelFinancialPerformance, {
		y: 3.8,
		...iconTextGeneralOptions
	});
	engagedPerformanceSlide.addText(meta.Labels.SlideTexts.SLIDE_ENGFRAMEWORK.LabelAttractTalent, {
		y: 4.6,
		...iconTextGeneralOptions
	});
	engagedPerformanceSlide.addText(meta.Labels.SlideTexts.SLIDE_ENGFRAMEWORK.LabelStrongBrand, {
		y: 5.4,
		...iconTextGeneralOptions
	});
}

function Pptx_AddHowToReadYourResultsSlide(pptx) {
	let howToReadSlide = pptx.addSlide({
		masterName: "WHITE",
		sectionTitle: "Main section"
	});

	howToReadSlide.addText(meta.Labels.SlideTexts.SLIDE_HOWTOREAD.title, PPTX_TITLE_STYLE);

	let leftSideTextGeneralOptions = {
		color: '404040',
		fontFace: 'Arial',
		fontSize: '14',
		x: 0.9,
		w: '20%'
	}
	howToReadSlide.addText(meta.Labels.SlideTexts.SLIDE_HOWTOREAD.info[0], {
		bullet: { code: '25AA', indent: 20 },
		h: '20%',
		y: 1.7,
		...leftSideTextGeneralOptions
	});
	howToReadSlide.addText([
		{ text: meta.Labels.SlideTexts.SLIDE_HOWTOREAD.info[1], option: { breakLine: true } },
		{ text: meta.Labels.SlideTexts.SLIDE_HOWTOREAD.info[2], options: { bullet: { code: '25AA', indent: 20 }, paraSpaceBefore: 10 } }
	], {
		h: '25%',
		y: 4.5,
		...leftSideTextGeneralOptions
	});

	let agreementTextGeneralOptions = {
		h: '5%',
		y: 1.5,
		color: '404040',
		fontFace: 'Arial',
		fontSize: 12,
		align: 'center'
	}
	howToReadSlide.addText(meta.Labels.SlideTexts.SLIDE_HOWTOREAD.LabelStronglyAgree, {
		x: 4.5,
		w: '7%',
		...agreementTextGeneralOptions
	});
	howToReadSlide.addText(meta.Labels.SlideTexts.SLIDE_HOWTOREAD.LabelAgree, {
		x: 6.2,
		w: '5%',
		...agreementTextGeneralOptions
	});
	howToReadSlide.addText(meta.Labels.SlideTexts.SLIDE_HOWTOREAD.LabelNeither, {
		x: 7.9,
		w: '10%',
		...agreementTextGeneralOptions
	});
	howToReadSlide.addText(meta.Labels.SlideTexts.SLIDE_HOWTOREAD.LabelDisagree, {
		x: 9.8,
		w: '10%',
		...agreementTextGeneralOptions
	});
	howToReadSlide.addText(meta.Labels.SlideTexts.SLIDE_HOWTOREAD.LabelStronglyDisagree, {
		x: 11.8,
		w: '7%',
		...agreementTextGeneralOptions
	});

	let greyArrowGeneralOptions = {
		line: { color: 'D9D9D9', width: 1, endArrowType: "triangle" },
		h: 0,
		w: '6%',
		y: 1.7
	}
	howToReadSlide.addShape(pptx.ShapeType.line, {
		x: 5.4,
		...greyArrowGeneralOptions
	});
	howToReadSlide.addShape(pptx.ShapeType.line, {
		x: 7,
		...greyArrowGeneralOptions
	});
	howToReadSlide.addShape(pptx.ShapeType.line, {
		x: 9.2,
		...greyArrowGeneralOptions
	});
	howToReadSlide.addShape(pptx.ShapeType.line, {
		x: 11,
		...greyArrowGeneralOptions
	});

	let distributionGeneralOptions = {
		shape: pptx.ShapeType.rect,
		w: '20%',
		h: '4%',
		y: 2.2,
		fontSize: 14,
		fontFace: 'Arial',
		align: 'center'
	}
	howToReadSlide.addText(meta.Labels['labels.Favorable'].Label, {
		x: 4.68,
		color: 'ffffff',
		fill: '8DC444',
		...distributionGeneralOptions
	});
	howToReadSlide.addText(meta.Labels['labels.Neutral'].Label, {
		x: 7.285,
		color: '000000',
		fill: 'C7C7C7',
		...distributionGeneralOptions
	});
	howToReadSlide.addText(meta.Labels['labels.Unfavorable'].Label, {
		x: 9.95,
		color: 'ffffff',
		fill: 'D40A1C',
		...distributionGeneralOptions
	});

	let strengthTableRows = [
		[meta.Labels.SlideTexts.SLIDE_HOWTOREAD.LabelClearStrength, meta.Labels.SlideTexts.SLIDE_HOWTOREAD.LabelClearStrengthPercent],
		[meta.Labels.SlideTexts.SLIDE_HOWTOREAD.LabelModerateStrength,meta.Labels.SlideTexts.SLIDE_HOWTOREAD.LabelModerateStrengthPercent],
		[meta.Labels.SlideTexts.SLIDE_HOWTOREAD.LabelWarningSign,meta.Labels.SlideTexts.SLIDE_HOWTOREAD.LabelWarningSignPercent],
		[meta.Labels.SlideTexts.SLIDE_HOWTOREAD.LabelRedFlag,meta.Labels.SlideTexts.SLIDE_HOWTOREAD.LabelRedFlagPercent]
	]
	howToReadSlide.addTable(strengthTableRows, {
		w: '60%',
		x: 4.67,
		y: 2.7,
		colW: [2.6, 5.35],
		border: { pt: "1", color: "ffffff" },
		margin: [0.04, 0.25, 0.04, 0.25],
		align: 'left',
		fontFace: 'Arial',
		fontSize: 14,
		color: '000000',
		fill: 'F2F2F2'
	});

	// add example items table
	var table_data = [];

	var comparators = Main_CompactComparatorSet();
	var comparators_data = Main_ComparatorsData_WithFilter();
	var NofComparators = comparators ? comparators.length < 3 ? comparators.length : 3 : 0;
	var NofHeaderRows = (NofComparators > 0) ? 2 : 1;

	var headers = [
		{ text: "# ", options: { rowspan: NofHeaderRows, align: 'left', color: '#00634f', bold: true } },
		{ text: meta.Labels["labels.Question"].Label, options: { rowspan: NofHeaderRows, align: 'left', color: '#00634f', bold: true } },
		{ text: meta.Labels["labels.ValidN"].Label, options: { rowspan: NofHeaderRows, color: '#00634f', bold: true } },
		{ text: meta.Labels["labels.PercentFav"].Label, options: { rowspan: NofHeaderRows, color: '#00634f', bold: true } },
		{ text: meta.Labels["labels.PercentNeu"].Label, options: { rowspan: NofHeaderRows, color: '#00634f', bold: true } },
		{ text: meta.Labels["labels.PercentUnfav"].Label, options: { rowspan: NofHeaderRows, color: '#00634f', bold: true } },
	];
	if (NofComparators > 0) {
		headers.push({ text: meta.Labels["labels.FavvsComparator"].Label, options: { colspan: NofComparators, color: '#00634f', bold: true } });
		table_data.push(headers);
		var subheaders = [];
		for (var i = 0; i < NofComparators; i++) {
			subheaders.push({ text: meta.Comparators[comparators[i]].Label, options: { color: '#00634f', bold: true, border: [{ pt: '1', color: 'd0d0d0' }, 0, { pt: '1', color: 'd0d0d0' }, 0] } });
		}
		table_data.push(subheaders);
	}
	else table_data.push(headers);

	var items = Object.keys(meta.Items);

	var items_data = Main_CurrentItemsData_WithFilter();

	for (var i = 0; i < 3; i++) {
		var item_id = items[i];
		var item = items_data[ item_id ];
		var pct_distribution = Utils_CountsToPercents ( item.Dist );
		var rowdata = [
			{ text: item.QNo, options: { align: 'left' } },
			{ text: meta.Items[items[i]].Label, options: { align: 'left' } },
			{ text: Utils_FormatOutput (item.N) },
			{ text: Utils_FormatPctOutput ( pct_distribution.Fav ) },
			{ text: Utils_FormatPctOutput ( pct_distribution.Neu ) },
			{ text: Utils_FormatPctOutput ( pct_distribution.Unfav ) },
		];

		for (var k = 0; k < NofComparators; k++) {

			var comparator_id = comparators[k]; // example: "Internal.Wave:2019"
			var item_comparator_data = comparators_data[ comparator_id ].Items;
			var value;
			var sigClassname;

			if ( item_comparator_data == null || item_comparator_data[item_id] == null) {
				value = NOT_AVAILABLE;
				sigClassname = Object.assign({}, PPTX_CELL_BLACK);
			}
			else {
				var item_comparator = item_comparator_data[item_id]; // example: {N: ..., Dist: {...}}
				var sig_test = Utils_SigTest ( item, item_comparator, 'Fav', false );
				sigClassname = sig_test.IsSignificant
					? ( sig_test.Diff > 0 ? Object.assign({}, PPTX_CELL_GREEN) : Object.assign({}, PPTX_CELL_RED))
					: Object.assign({}, PPTX_CELL_BLACK);

				value = (sig_test.Diff == null)
					? NOT_AVAILABLE
					: sig_test.Diff + (sig_test.IsSignificant ? ' *' : '');
			}

			rowdata.push({ text: value, options: sigClassname });
		}

		/*
		for (var k = 0; k < NofComparators; k++) {
			var value = item.Comparators[comparators[k]].Value;
			sigClassname = (value.indexOf('*') > 0) ? (value.indexOf('-') == 0 ? CELL_RED : CELL_GREEN) : TABLE_STYLE;
			rowdata.push({ text: value, options: sigClassname });
		}
		*/



		table_data.push(rowdata);
	}

	var NofCols = 4 + NofComparators;
	var colW = [0.5, 2.5];
	for (var i = 0; i < NofCols; i++) colW.push(6.0 / NofCols);

	var style = Object.assign({}, PPTX_TABLE_STYLE);
	style.x = 3.9;
	style.y = 4.3;
	style.colW = colW;
	style.fontSize = 10;
	howToReadSlide.addTable(table_data, style);

}

function Pptx_AddTitleSlide(pptx, TxtObj, access) {
	if (access == false) return;

	let slide = pptx.addSlide({
		masterName: "GREENTITLE",
		sectionTitle: "Main section"
	});
	let titleText = [
		{ text: TxtObj[0].replace('#survey name#', meta.ReportName), options: { fontSize: 46, color: "FFFFFF", breakLine: true } },
		{ text: TxtObj[1].replace('#client#', meta.ClientName)+"\n", options: { fontSize: 46, color: "FFFFFF", breakLine: true } },
		{ text: TxtObj[2].replace('#team name#', data.User.PersonalizedReportBaseText), options: { fontSize: 24, color: "FFFFFF", breakLine: true } },
	];
	let arrTabRows = [
		[
			{ text: titleText, options: { fontFace: 'Arial', valign: 'middle', lineSpacing: 50 } },
		],
	];
	slide.addTable(arrTabRows, { x: 0.8, y: 2.3, w: 7.0, h: 2.9, margin: [0,0,0,0.2], border: [{type: 'none'},{type: 'none'},{type: 'none'},{type: 'solid', pt: 2, color: 'FFFFFF'}] });
}