function Slideshow_RenderIframe() {
    return `

    <!--
    <script src="libraries/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="libraries/reveal.css" />
    <link rel="stylesheet" href="libraries/white.css" />
    <script type="text/javascript" src="libraries/reveal.js"></script>

    <link rel="stylesheet" href="CSS/kf.css">
    <link rel="stylesheet" href="CSS/key_metrics.css">
    -->


    <link rel="stylesheet" href="https://survey.us.confirmit.com/isa/BDJPFRDMEYBPBKLVADAYFQCDAVIOEQJR/KornFerrySPA/reveal.css">
    <link rel="stylesheet" href="https://survey.us.confirmit.com/isa/BDJPFRDMEYBPBKLVADAYFQCDAVIOEQJR/KornFerrySPA/white.css">
    <link rel="stylesheet" href="https://survey.us.confirmit.com/isa/BDJPFRDMEYBPBKLVADAYFQCDAVIOEQJR/KornFerrySPA/kf.css">
    <link rel="stylesheet" href="https://survey.us.confirmit.com/isa/BDJPFRDMEYBPBKLVADAYFQCDAVIOEQJR/KornFerrySPA/key_metrics.css">
    
    <script src="https://survey.us.confirmit.com/isa/BDJPFRDMEYBPBKLVADAYFQCDAVIOEQJR/KornFerrySPA/reveal.js"></script>
    <script src="https://survey.us.confirmit.com/isa/BDJPFRDMEYBPBKLVADAYFQCDAVIOEQJR/KornFerrySPA/jquery-3.6.0.min.js"></script>


    <style>
        :root {
            --r-link-color: #00634f;
        }
        .reveal ul {
            margin: 0;
            padding-left: 30px;
        }
        .reveal table th, .reveal table td {
            border: none;
            padding: 5px 10px;
        }
        .reveal-viewport {
            height: 85%;
            width: 85%;
            margin: auto;
        }
        .slidewrapper {
            filter: drop-shadow(20px 20px 20px #c0c0c0);
        }
        .slidecontainer {
            background-color: white;
            border-radius: 10px;
            padding: 20px;
            height: 600px;
        }
        .slide_header {
            color: #00634f;
            font-size: 28px;
            text-align: start;
        }
        .slide_infotext {
            font-size: 12px;
            background-color: #ECF6D9;
            text-align: start;
            margin: 10px 0 10px 0;
            padding: 10px 0 10px 0;
        }
        .slide_text {
            font-size: 20px;
            text-align: start;
            margin: 20px 0px;
            line-height: 2;
        }
        .slide_text ul, .slide_text ol {
            padding-left: 30px;
        }
        .close_slideshow_button {
		    width: 30px;
			height: 30px;
			border: 0px dashed rgb(0, 0, 0);
			background-color: red;
			color: rgb(255, 255, 255);
			opacity: 1;
			z-index: 99999999;
			position: absolute;
			border-radius: 50px;
			top: -10px;
			right: -10px;
			font-size: 16px;
			display: unset;
		}
        .flip-card-front, .flip-card-back {
            cursor: auto;
        }
        .flip-card {
            margin: 0;
        }
        .flip-card-wrapper {
            margin-top: 20px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-evenly;
        }
        .dot {
            left: 0;
        }
        .trend-indicator-value {
            font-size: 12px;
            text-align: center;
            padding-top: 4px;
            padding-left: 2px;
        }
        .large {
            top: calc(50% - 160px);
            left: calc(50% - 150px);
            transform: scale(0.5);
        }
        .keydrivers-card {
            background-color: #FFFFF6; 
            border: 1px solid #77BC1F;
            padding: 10px;
            margin: 10px;
        }
        .keydrivers-icon {
            height: 50px;
            float: left;
        }
        .keydrivers-icon img {
            margin: 5px;
        }
        .vs {
            bottom: 60px;
        }
        .keydrivers-text {
            text-transform: uppercase;
            font-size: 10px;
            font-weight: bold;
            text-align: start;
            padding: 20px 0px;
            height: 15px;
            clear: both;
        }
        .itemrow {
            height: 90px;
        }
        .items-table-slideshow {
            width: 100%;
            margin: 10px auto !important;
        }
        .items-table-slideshow .numeric-cell {
            text-align: center;
        }
        .items-table-slideshow .rowheader-cell {
            text-align: start;
            font-size: 14px;
            font-weight: bold;
            color: #00634f;
        }
    </style>

        <div class="reveal">
        <div class="slides">
            ${Slideshow_RenderSlides()}
        </div>
        </div>

        <script>
            $('.close_slideshow_button').click(function() {
                window.parent.document.getElementById("iframe1").style.display = "none";
            });
            Reveal.initialize({width:1200,height:700,controlsLayout:'edges', rtl: parent.Main_IsRTL()});
        </script>
    `;
}

function Slideshow_RenderSlides() {
    let slides = ["WELCOME", "KEYINDICES", "KEYDRIVERS", "STRENGTHS", "OPPORTUNITIES", "DIMS", "NEXTSTEPS"];
    let o = [];
    for (const key in slides) {
        o.push(`
            <section>
                <div class="slidewrapper">
                    <div class="slidecontainer">${Slideshow_RenderSlideContent(slides[key])}</div>
                </div>
                <button class="close_slideshow_button">X</button>
            </section>
        `);
    }
    return o.join('');
}

function Slideshow_RenderSlideContent(slide) {
    switch (slide) {
        case "KEYINDICES":
            return `
            <div style="padding: 20px 50px;">
                <div class="slide_header">${meta.SlideTexts.SLIDE_KEYINDICES.title}</div>
                <div class="slide_infotext">
                    <ul>
                        <li>${meta.SlideTexts.SLIDE_KEYINDICES.info[0]}</li>
                        <li>${meta.SlideTexts.SLIDE_KEYINDICES.info[1]}</li>
                    </ul>
                </div>
                <div class="flip-card-wrapper" style="margin-top: 30px;">${Slideshow_RenderKeyIndices()}</div>
            </div>
            `;
        case "KEYDRIVERS":
            return `
            <div style="padding: 20px 50px;">
                <div class="slide_header">${meta.SlideTexts.SLIDE_KEYDRIVERS.title}</div>
                <div>${Slideshow_RenderKeyDrivers()}</div>
            </div>    
            `;
        case "STRENGTHS":
        case "OPPORTUNITIES":
            return `
                <div style="padding: 0px 0px;">
                    <div class="slide_header">${meta.SlideTexts["SLIDE_" + slide].title}</div>
                    <div class="slide_infotext">
                        <ul>
                            <li>${meta.SlideTexts["SLIDE_" + slide].info[0]}</li>
                            <li>${meta.SlideTexts["SLIDE_" + slide].info[1]}</li>
                        </ul>
                    </div>
                    <div>${Slideshow_RenderItemsTable(slide)}</div>
                </div>    
                `;
        case "DIMS":
            return `
                    <div style="padding: 0px 0px;">
                        <div class="slide_header">${meta.SlideTexts["SLIDE_" + slide].title}</div>
                        <div class="slide_infotext">
                            <ul>
                                <li>${meta.SlideTexts["SLIDE_" + slide].info[0]}</li>
                            </ul>
                        </div>
                        <div>${Slideshow_RenderItemsTable(slide)}</div>
                    </div>    
                    `;
        case "WELCOME":
            return `
                <div style="padding: 20px 50px;">
                    <div class="slide_header">${meta.SlideTexts["SLIDE_" + slide].title}</div>
                    <div class="slide_text">
                        <p>${meta.SlideTexts["SLIDE_" + slide].info[0]}</p>
                        <ul>
                            <li>${meta.SlideTexts["SLIDE_" + slide].info[1]}</li>
                            <li>${meta.SlideTexts["SLIDE_" + slide].info[2]}</li>
                            <li>${meta.SlideTexts["SLIDE_" + slide].info[3]}</li>
                            <li>${meta.SlideTexts["SLIDE_" + slide].info[4]}</li>                            
                            <li>${meta.SlideTexts["SLIDE_" + slide].info[5]}</li>
                        </ul>
                    </div>
                </div>
            `;
        case "NEXTSTEPS":
            return `
                <div style="padding: 20px 50px;">
                    <div class="slide_header">${meta.SlideTexts["SLIDE_" + slide].title}</div>
                    <div class="slide_text">
                        <p>${meta.SlideTexts["SLIDE_" + slide].info[0]}</p>
                        <ol>
                            <li>${meta.SlideTexts["SLIDE_" + slide].info[1]}</li>
                            <li>${meta.SlideTexts["SLIDE_" + slide].info[2]}</li>
                            <li>${meta.SlideTexts["SLIDE_" + slide].info[3]}</li>
                        </ol>
                    </div>
                </div>
                `;
        default:
            return "slide placeholder";
    }
}

function Slideshow_RenderKeyIndices() {
    let o = [];

    let current_dimensions_key = Main_GetKeyWithFilter('DIMS', config.CurrentWave, data.User.PersonalizedReportBase);
    let current_dimensions = data[current_dimensions_key];
    let comparator_dimensions = Main_PreviousDimensionsData_WithFilter();

    let comparators = Main_CompactComparatorSet();
    let comparators_data = Main_ComparatorsData_WithFilter();

    let metrics = data.Metrics;

    for (let i = 0; i < metrics.length; i++) {
        let dimension_id = metrics[i];
        let current_score = current_dimensions[dimension_id].Dist.Fav;
        let comparator_score = comparator_dimensions[dimension_id].Dist.Fav;
        let scoreLabel = meta.Labels['labels.Favorable'].Label;
        let scoreValue = Utils_FormatPctOutput(current_score);

        let arrowClass = '';
        let vsTrendValue = Utils_Diff(current_score, comparator_score);

        let has_trend = !(current_score == null || comparator_score == null);

        if (vsTrendValue > 0) {
            arrowClass = 'green-arrow';
        } else {
            if (vsTrendValue < 0) {
                arrowClass = 'red-arrow';
            } else {
                arrowClass = 'amber-arrow';
            }
        }

        let comparators_scores = "";
        for (let k = 0; k < comparators.length; k++) {
            let c = comparators[k];
            let type = c.split('.')[0]; // "Internal" or "External"

            if (type == "External") {

                let comparator_data = comparators_data[c];

                // Check if external norm exists for this dimension
                let comparator_fav = (
                    comparator_data == null
                    ||
                    comparator_data.Dimensions == null
                    ||
                    comparator_data.Dimensions[dimension_id] == null
                )
                    ? ''
                    : Utils_FormatPctOutput(comparator_data.Dimensions[dimension_id].Dist.Fav);

                comparators_scores += `<tr>
                        <td class="vs_label">${meta.Comparators[c].Label}</td>
                        <td class="vs_score">${comparator_fav}</td>
                    </tr>`;
            }
        }

        o.push(`
				<div id=${dimension_id}_card class="flip-card">
					<div class="flip-card-inner">

						<!-- Front -->
						<div style="background-color:#FFF" id=${dimension_id}_front class="flip-card-front">

							<div class="myicon large">
								<img src="${Resources_GetIconUrlByDimensionId(dimension_id)}"/>
							</div>

							<!-- Score -->
							<div class="scorelabel">
								${scoreLabel}
							</div>
							<div class=score>
								${scoreValue}
							</div>
							
							<!-- Comparison Scores -->
							<div class=vs>
                            <table style="width: 100%;"><tbody align="center">
                                ${comparators_scores}
                            </tbody></table>
							<div>
			`);

        o.push(`
								</div>
							</div>
							<!-- End Comparison Scores -->

							<!-- Metric Label -->
							<div class="metriclabel">
                                <div class="trend-indicator" style="width: 60px; display:${has_trend ? 'unset' : 'none'}">
                                    <div class="dot ${arrowClass}"></div>
                                    <div class="trend-indicator-value">
                                        ${vsTrendValue > 0 ? ('+' + vsTrendValue) : (vsTrendValue < 0 ? vsTrendValue : '')}
                                        <br>
                                        ${vsTrendValue ? 'vs. ' + config.PreviousWave : ''}
                                    </div>
                                </div>
                                <div class="metric-heading">${meta.Dimensions[dimension_id].Label}</div>
							</div>
							
						</div>
						<!-- End Front -->						
					</div>
					<!-- End Flip Card Inner -->
				</div>
				<!-- End Flip Card -->
			`);
    }
    return o.join('');
}

function Slideshow_RenderKeyDrivers() {

    let kdInfoTextFirstParSplitByENG = meta.SlideTexts.SLIDE_KEYDRIVERS.info[0].split('[ENG]');
    let kdInfoTextFirstParSplitByENA = kdInfoTextFirstParSplitByENG[1].split('[ENA]');

    let infotext = `
        <p>
            ${kdInfoTextFirstParSplitByENG[0]}
            <span style="color: #006550; font-weight: bold;">${meta.SlideTexts.SLIDE_KEYDRIVERS.LabelEmployeeEngagement}</span>
            ${kdInfoTextFirstParSplitByENA[0]}
            <span style="color: #006550; font-weight: bold;">${meta.SlideTexts.SLIDE_KEYDRIVERS.LabelEmployeeEnablement}</span>
            ${kdInfoTextFirstParSplitByENA[1]}
            </p>
        <p>${meta.SlideTexts.SLIDE_KEYDRIVERS.info[1]}</p>
        <p>${meta.SlideTexts.SLIDE_KEYDRIVERS.info[2]}</p>
        <p>${meta.SlideTexts.SLIDE_KEYDRIVERS.info[3]}</p>
    `;

    let html = `
        <table width="100%" style="font-size: 14px; margin-top: 20px;"><tbody valign="top"><tr>
        <td width="50%">
            <div style="font-size: 16px; margin-left: -10px;">${infotext}</div>
        </td>
        <td width="25%" align="center">
            <span style="color: #006550; font-weight: bold;">${meta.SlideTexts.SLIDE_KEYDRIVERS.LabelTop2KeyDriversOf}<br>${meta.SlideTexts.SLIDE_KEYDRIVERS.LabelEmployeeEngagement}</span>
            <div class="keydrivers-card">
                <div class="keydrivers-icon"><img src="https://survey.us.confirmit.com/isa/BDJPFRDMEYBPBKLVADAYFQCDAVIOEQJR/KornFerryPOC2/engagement.png"></div>
                <div class="keydrivers-text">
                    ${meta.Dimensions[config.EngagementDimensionId].KeyMetric_BackCardText}
                </div>
                <div>
                    ${Slideshow_MetricDrivers(config.EngagementDimensionId)}
                </div>
            </div>
        </td>
        <td width="25%" align="center">
            <span style="color: #006550; font-weight: bold;">${meta.SlideTexts.SLIDE_KEYDRIVERS.LabelTop2KeyDriversOf}<br>${meta.SlideTexts.SLIDE_KEYDRIVERS.LabelEmployeeEnablement}</span>
            <div class="keydrivers-card">
                <div class="keydrivers-icon""><img src="https://survey.us.confirmit.com/isa/BDJPFRDMEYBPBKLVADAYFQCDAVIOEQJR/KornFerryPOC2/enablement.png"></div>
                <div class="keydrivers-text">
                    ${meta.Dimensions[config.EnablementDimensionId].KeyMetric_BackCardText}
                </div>
                <div>
                    ${Slideshow_MetricDrivers(config.EnablementDimensionId)}
                </div>
            </div>
        </td>
        </tr></tbody></table>
    `;
    return html;
}

function Slideshow_MetricDrivers(dimension_id) {
    let tmp = [];

    let current_items = Main_CurrentItemsData_WithFilter();


    tmp.push('<table style="width: 100%" class=items>');

    let kda_key = Main_GetKey('KDA', config.CurrentWave, data.User.PersonalizedReportBase);
    let kda = data[kda_key];
    let drivers = kda[dimension_id];

    if (drivers == null) drivers = [];

    drivers = drivers.slice(0, 2); //todo

    if (!!meta.Dimensions[dimension_id].Items) {
        for (let j = 0; j < 2 && j < drivers.length; j++) {
            let item_id = drivers[j]; // example: "AV01"
            let pct_distribution = Utils_CountsToPercents(current_items[item_id].Dist);
            let scoreValue = Utils_FormatPctOutput(pct_distribution.Fav);
            let item_dimension_id = Main_GetDimensionIdByItemId(item_id);

            tmp.push(`
				<tr class=itemrow style="height: 50px !important">
					<td colspan=2 style="font-size: 10px; padding-top: 10px; padding-bottom: 8px; color: #666; text-transform: uppercase">
						${meta.Dimensions[item_dimension_id].Label}
					</td>
                </tr>
                <tr>
					<td class=itemlabel style="height: 80px; vertical-align: top;">
						${Main_GetQuestionText(item_id)}
					</td>
					<td class=itemscore>
						${scoreValue}
					</td>
                </tr>
			`);
        }
    }
    tmp.push('</table>');




    /*
    tmp.push('<div class=items>');

    let kda_key = Main_GetKey('KDA', config.CurrentWave, data.User.PersonalizedReportBase);
    let kda = data[kda_key];
    let drivers = kda[dimension_id];
    if (drivers == null) drivers = [];

    let drivers = drivers.slice(0, 2); //todo

    if (!!meta.Dimensions[dimension_id].Items) {
        for (let j = 0; j < 2 && j < drivers.length; j++) {
            let item_id = drivers[j]; // example: "AV01"
            let pct_distribution = Utils_CountsToPercents(current_items[item_id].Dist);
            let scoreValue = Utils_FormatPctOutput(pct_distribution.Fav);
            let item_dimension_id = Main_GetDimensionIdByItemId(item_id);
            tmp.push(`
                <div class=itemrow>
                    <div style="font-size: 10px; padding-top: 10px; padding-bottom: 8px; color: #666; text-transform: uppercase">
                        ${meta.Dimensions[item_dimension_id].Label}
                    </div>
                    <div class=itemlabel>
                        ${Main_GetQuestionText(item_id)}
                    </div>
                    <div class=itemscore>
                        ${scoreValue}
                    </div>
                </div>
            `);
        }
    }
    tmp.push('</div>');
    */
    return tmp.join('');
}

function Slideshow_RenderItemsTable(tableType) {
    let table_data = [];
    let rowdata = [];

    let comparators = Main_CompactComparatorSet();
    let NofComparators = comparators ? comparators.length : 0;
    let NofHeaderRows = (NofComparators > 0) ? 2 : 1;

    let is_all_dimensions_view = (tableType == 'DIMS');

    let headers = [
        []
    ];

    headers[0].push(
        { Label: "# ", ClassName: 'id-cell', rowspan: NofHeaderRows },
        { Label: meta.Labels["labels.Question"].Label, ClassName: 'text-cell', rowspan: NofHeaderRows }
    );

    // don't show N for All Dimensions view
    if (!is_all_dimensions_view)
        headers[0].push({ Label: meta.Labels["labels.ValidN"].Label, ClassName: 'numeric-cell', rowspan: NofHeaderRows });

    if (NofComparators <= 3)
        headers[0].push(
            { Label: meta.Labels["labels.PercentFav"].Label, ClassName: 'numeric-cell distribution-cell', rowspan: NofHeaderRows },
            { Label: meta.Labels["labels.PercentNeu"].Label, ClassName: 'numeric-cell distribution-cell', rowspan: NofHeaderRows },
            { Label: meta.Labels["labels.PercentUnfav"].Label, ClassName: 'numeric-cell distribution-cell', rowspan: NofHeaderRows }
        );

    headers[0].push(
        { Label: meta.Labels["labels.Distribution"].Label, ClassName: 'numeric-cell', rowspan: NofHeaderRows }
    );

    if (NofComparators > 0) {
        headers[0].push(
            { Label: meta.Labels["labels.FavvsComparator"].Label, ClassName: 'numeric-cell', colspan: NofComparators }
        );
        let subheaders = [];
        for (let i = 0; i < NofComparators; i++) {
            subheaders.push({ Label: meta.Comparators[comparators[i]].Label, ClassName: 'numeric-cell' });
        }
        headers.push(subheaders);
    }

    let items = [];
    let so_key;
    let so;

    switch (tableType) {
        case 'STRENGTHS':
            so_key = Main_GetKeyWithFilter('SO', config.CurrentWave, data.User.PersonalizedReportBase);
            so = data[so_key];
            items = so.S;
            break;
        case 'OPPORTUNITIES':
            so_key = Main_GetKeyWithFilter('SO', config.CurrentWave, data.User.PersonalizedReportBase);
            so = data[so_key];
            items = so.O;
            break;
        case 'DIMS':
            items = Object.keys(meta.Dimensions);
            items.sort(Pptx_SortByDimensionFav_Desc);
            break;
    }
    if (tableType == 'STRENGTHS' || tableType == 'OPPORTUNITIES') {
        for (let i = 0; i < items.length; i++) {
            table_data.push( Slideshow_AddItemToTable(items[i], is_all_dimensions_view, i+1) );
        }
    }
    if (tableType == 'DIMS') {
        rowdata=[{ Label: meta.SlideTexts["SLIDE_DIMS"].LabelMostFav, ClassName: 'rowheader-cell', colspan: 2 }];
        table_data.push(rowdata);
        for (let i = 0; i < 5; i++) {
            table_data.push( Slideshow_AddItemToTable(items[i], is_all_dimensions_view) );
        }
        rowdata=[{ Label: meta.SlideTexts["SLIDE_DIMS"].LabelLeastFav, ClassName: 'rowheader-cell', colspan: 2 }];
        table_data.push(rowdata);
        for (let i = items.length-1; i >= items.length-5; i--) {
            table_data.push( Slideshow_AddItemToTable(items[i], is_all_dimensions_view) );
        }
    }

    let dt = Component_DataTable(
        "items-table-slideshow-" + tableType,
        "items-table-slideshow",
        headers,
        table_data,
        false,
        false
    );

    return dt.Html;
}

function Slideshow_AddItemToTable(itemId, is_all_dimensions_view, index) {
    let formatter = Utils_FormatOutput;

    let comparators = Main_CompactComparatorSet();
    let NofComparators = comparators ? comparators.length : 0;
    let comparators_data = Main_ComparatorsData_WithFilter();

    let current_data = is_all_dimensions_view
        ? Main_CurrentDimensionsData_WithFilter()
        : Main_CurrentItemsData_WithFilter();

    let obj = current_data[itemId]; // Either Item or Dimension

    let label = is_all_dimensions_view
        ? meta.Dimensions[itemId].Label
        : meta.Items[itemId].Label;

    let id = is_all_dimensions_view
        ? '&#9674;' // diamond symbol
        : index;

    let pct_dist = is_all_dimensions_view
        ? obj.Dist // dimensions already store rounded percentages in the distribution
        : Utils_CountsToPercents(obj.Dist);

    let rowdata = [];

    rowdata.push(
        { Label: id, ClassName: 'id-cell' },
        { Label: label, ClassName: 'text-cell' }
    );

    if (!is_all_dimensions_view) { // don't show N value for dimensions
        rowdata.push(
            { Label: formatter(obj.N), ClassName: 'numeric-cell' }
        );
    }

    if (NofComparators <= 3)
        rowdata.push(
            { Label: formatter(pct_dist.Fav), ClassName: 'numeric-cell distribution-cell' },
            { Label: formatter(pct_dist.Neu), ClassName: 'numeric-cell distribution-cell' },
            { Label: formatter(pct_dist.Unfav), ClassName: 'numeric-cell distribution-cell' },
        );

    rowdata.push(
        { Label: Component_DistributionChartStacked(pct_dist), datasort: pct_dist.Fav, ClassName: 'text-cell' }
    );

    for (let k = 0; k < NofComparators; k++) {
        let comparator_id = comparators[k];
        let comparator_data = comparators_data[comparator_id];
        let comparator_data_itemsdata = is_all_dimensions_view ? comparator_data.Dimensions : comparator_data.Items;

        let value;
        let sigClassname;

        if (
            comparator_data == null
            ||
            comparator_data_itemsdata == null
            ||
            comparator_data_itemsdata[itemId] == null
        ) {
            value = NOT_AVAILABLE;
            sigClassname = '';
        }
        else {
            let sig_test = Utils_SigTest(obj, comparator_data_itemsdata[itemId], 'Fav', is_all_dimensions_view);
            sigClassname = sig_test.IsSignificant
                ? (sig_test.Diff > 0 ? 'cell-green' : 'cell-red')
                : '';

            value = (sig_test.Diff == null)
                ? NOT_AVAILABLE
                : (sig_test.Diff > 0 ? '+' : '') + sig_test.Diff + (sig_test.IsSignificant ? ' *' : '');

        }
        rowdata.push({ Label: value, datasort: parseFloat(value), ClassName: 'numeric-cell ' + sigClassname });
    }

    return rowdata;
}

