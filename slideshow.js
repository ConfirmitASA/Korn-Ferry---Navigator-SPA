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
    var slides = ["WELCOME", "KEYINDICES", "KEYDRIVERS", "STRENGTHS", "OPPORTUNITIES", "DIMS", "NEXTSTEPS"];
    var o = [];
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
    var o = [];

    var current_dimensions_key = Main_GetKeyWithFilter('DIMS', config.CurrentWave, data.User.PersonalizedReportBase);
    var current_dimensions = data[current_dimensions_key];
    var comparator_dimensions = Main_PreviousDimensionsData_WithFilter();

    var comparators = Main_CompactComparatorSet();
    var comparators_data = Main_ComparatorsData_WithFilter();

    var metrics = data.Metrics;

    for (var i = 0; i < metrics.length; i++) {
        var dimension_id = metrics[i];
        var current_score = current_dimensions[dimension_id].Dist.Fav;
        var comparator_score = comparator_dimensions[dimension_id].Dist.Fav;
        var scoreLabel = meta.Labels['labels.Favorable'].Label;
        var scoreValue = Utils_FormatPctOutput(current_score);

        var arrowClass = '';
        var vsTrendValue = Utils_Diff(current_score, comparator_score);

        var has_trend = !(current_score == null || comparator_score == null);

        if (vsTrendValue > 0) {
            arrowClass = 'green-arrow';
        } else {
            if (vsTrendValue < 0) {
                arrowClass = 'red-arrow';
            } else {
                arrowClass = 'amber-arrow';
            }
        }

        var comparators_scores = "";
        for (var k = 0; k < comparators.length; k++) {
            var c = comparators[k];
            var type = c.split('.')[0]; // "Internal" or "External"

            if (type == "External") {

                var comparator_data = comparators_data[c];

                // Check if external norm exists for this dimension
                var comparator_fav = (
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

    var infotext = `
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

    var html = `
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
    var tmp = [];

    var current_items = Main_CurrentItemsData_WithFilter();


    tmp.push('<table style="width: 100%" class=items>');

    var kda_key = Main_GetKey('KDA', config.CurrentWave, data.User.PersonalizedReportBase);
    var kda = data[kda_key];
    var drivers = kda[dimension_id];
    if (drivers == null) drivers = [];

    var drivers = drivers.slice(0,2); //todo

    if (!!meta.Dimensions[ dimension_id ].Items) {
        for (var j = 0; j< 2 && j < drivers.length; j++) {
            var item_id = drivers[j]; // example: "AV01"
            var pct_distribution = Utils_CountsToPercents ( current_items[item_id].Dist );
            var scoreValue = Utils_FormatPctOutput(pct_distribution.Fav);
            var item_dimension_id = Main_GetDimensionIdByItemId ( item_id );

            tmp.push(`
				<tr class=itemrow style="height: 50px !important">
					<td colspan=2 style="font-size: 10px; padding-top: 10px; padding-bottom: 8px; color: #666; text-transform: uppercase">
						${meta.Dimensions[ item_dimension_id ].Label}
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

    var kda_key = Main_GetKey('KDA', config.CurrentWave, data.User.PersonalizedReportBase);
    var kda = data[kda_key];
    var drivers = kda[dimension_id];
    if (drivers == null) drivers = [];

    var drivers = drivers.slice(0, 2); //todo

    if (!!meta.Dimensions[dimension_id].Items) {
        for (var j = 0; j < 2 && j < drivers.length; j++) {
            var item_id = drivers[j]; // example: "AV01"
            var pct_distribution = Utils_CountsToPercents(current_items[item_id].Dist);
            var scoreValue = Utils_FormatPctOutput(pct_distribution.Fav);
            var item_dimension_id = Main_GetDimensionIdByItemId(item_id);
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



