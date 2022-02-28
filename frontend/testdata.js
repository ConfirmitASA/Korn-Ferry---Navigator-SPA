function TestData_ENPS() {
	var testdata = {
		IsTestData: true,
		Distribution: {
			Promoters: Math.round ( Math.random() * 1000 ),
			Detractors: Math.round ( Math.random() * 500 ),
			Neutrals: Math.round ( Math.random() * 500 )
		},
		DimensionID: 'DIM_NPS'
	};

	return testdata;
}

function TestData_EffectivenessByDemo( demo ) {
	var testdata = {
		IsTestData: true,
		Demo: demo,
		Distribution: {
			LeastEffective: [],
			Detached: [],
			Frustrated: [],
			MostEffective: []
		}
	}

	if ( demo != null && demo != '-1') {

		var answer_count = data.Filters.Items[ demo ].Answers.length;
		for (var i=0; i<answer_count; ++i) {
			testdata.Distribution.LeastEffective.push ( parseInt(Math.random()*100) );
			testdata.Distribution.Detached.push ( parseInt(Math.random()*100) );
			testdata.Distribution.Frustrated.push ( parseInt(Math.random()*100) );
			testdata.Distribution.MostEffective.push ( parseInt(Math.random()*100) );
		}
	}

	return testdata;
}

function TestData_getDimensionOptionsFromMeta() {
	return Object.keys(data.Dimensions);
}
function Data_getDimensionLabelsFromMeta() {
	var dimensionIds = Object.keys(data.Dimensions);
	var dimensionLabels = [];

	for(var i = 0; i < dimensionIds.length; i++) {
		var currentDimensionLabel = meta.Labels.Dimensions[dimensionIds[i]].Label;

		if(!!currentDimensionLabel) {
			dimensionLabels.push(currentDimensionLabel)
		}
	}

	return dimensionLabels;
}

function TestData_getItemOptionsFromMeta() {
	return Object.keys(data.ItemsNew);
}
function Data_getItemLabelsFromMeta() {
	var itemIds = Object.keys(data.ItemsNew);
	var itemLabels = [];

	for(var i = 0; i < itemIds.length; i++) {
		var currentItemLabel = meta.Labels.Items[itemIds[i]].Label;

		if(!!currentItemLabel) {
			itemLabels.push(currentItemLabel)
		}
	}

	return itemLabels;
}
function Data_getItemLabelsFromMetaByDimensionId(dimensionId) {
	var itemIds = data.Dimensions[dimensionId].Items;
	var itemLabels = [];

	for(var i = 0; i < itemIds.length; i++) {
		var currentItemLabel = meta.Labels.Items[itemIds[i]].Label;

		if(!!currentItemLabel) {
			itemLabels.push(currentItemLabel)
		}
	}

	return itemLabels;
}

function TestData_getBreakByData(breakByVariable) {
	var breakByData = {};
	breakByData.Variable = breakByVariable;
	breakByData.Options = {};

	var breakByOptions = meta.Labels.BreakBy[breakByVariable].Options;

	for (var i in breakByOptions) {
		var rnd = Math.floor(Math.random() * 10);
		var tmpBreakByData = {
			N: 15792 + rnd,
			Distribution: {
				Fav: 87+rnd,
				Neu: 10-rnd,
				Unfav: 2
			},
			vsTotal: {
				Fav: String(5 - rnd),
				Neu: String(10 - rnd),
				Unfav: (0 - rnd) + ' *'
			}
		}
		breakByData.Options[i] = tmpBreakByData;
	}

	return breakByData;
}

function TestData_fillBreakByData() {
	var breakByVariable = State_Get('breakby');

	if (!breakByVariable) {
		breakByVariable = ParamValues_BreakBy()[0].Code;
	}

	var testBreakByData = TestData_getBreakByData(breakByVariable);

	var itemsLabels = Object.keys(data.ItemsNew);

	for (var i in itemsLabels) {
		data.ItemsNew[itemsLabels[i]].BreakBy = testBreakByData;
	}
	var dimensionsLabels = Object.keys(data.Dimensions);

	for (var j in dimensionsLabels) {
		data.Dimensions[dimensionsLabels[j]].BreakBy = testBreakByData;
	}
}

function TestData_getComparatorsData(comparators) {
	var comparatorsData = {};

	for (var i = 0; i < comparators.length; i++) {
		var rnd = Math.floor(Math.random() * 10);
		var rnd2 = Math.floor(Math.random() * 2);
		var rnd3 = Math.floor(Math.random() * 2);
		var tmpComparatorsData = {
			Label: meta.Labels.Comparators[comparators[i]].Label,
			Value: (rnd2 ? '' : '-') + (25 + rnd) + (rnd3 ? '' : ' *'),
			Distribution: {
				Fav: rnd+10,
				Neu: rnd,
				UnFav: rnd-15
			},
			NPS: rnd
		}
		comparatorsData[comparators[i]] = tmpComparatorsData;
	}

	return comparatorsData;

}

function TestData_fillComparatorsData() {
	var comparators = State_Get('comparators');
	if (!comparators) return;

	for (var i in data.ItemsNew) {
		var testComparatorsData = TestData_getComparatorsData(comparators);
		data.ItemsNew[i].Comparators = testComparatorsData;
		for (var j in data.ItemsNew[i].BreakBy.Options) {
			data.ItemsNew[i].BreakBy.Options[j].Comparators = testComparatorsData;
		}
	}
	for (var i in data.Dimensions) {
		var testComparatorsData = TestData_getComparatorsData(comparators);
		data.Dimensions[i].Comparators = testComparatorsData;
		for (var j in data.Dimensions[i].BreakBy.Options) {
			data.Dimensions[i].BreakBy.Options[j].Comparators = testComparatorsData;
		}
	}
}

// Meta: Menu, Page Text Labels, etc

if ( meta == null ) {

	meta =  {

		Menu: [
			//{Code: 'Intro', Label: 'Intro'},
			{Code: 'Home', Label: 'Home'},
			{Code: 'Slideshow', Label: 'Slideshow'},
			{Code: 'Actions', Label: 'Actions', Submenu: [
					{Code: 'KeyMetrics', Label: 'Key Metrics'},
					{Code: 'StrengthsAndOpportunities', Label: 'Strengths & Opportunities'},
					{Code: 'ActionsHome', Label: 'Home'},
					{Code: 'ActionsCreatePlan', Label: 'Create Plan'},
					{Code: 'ActionsReviewOwnPlans', Label: 'Own Plans'},
					{Code: 'ActionsReviewAllPlans', Label: 'All Plans'},
					{Code: 'ActionsSharedPlans', Label: 'Shared Plans'},
					{Code: 'ActionsStatistics', Label: 'Statistics'}
				]
			},
			{Code: 'Effectiveness', Label: 'Effectiveness', Submenu:
					[
						{Code: 'EffectivenessProfile', Label: 'Effectiveness Profile'},
						{Code: 'EffectivenessProfileByDemo', Label: 'Effectiveness Profile by Demo'}
					]
			},
			{Code: 'Comments', Label: 'Comments', Submenu:
					[
						{Code: 'CommentsCategories', Label: 'Categories'},
						{Code: 'CommentsVerbatims', Label: 'Verbatims'}
					]
			},

			{Code: 'EnpsGroup', Label: 'ENPS', Submenu:[
					{Code: 'ENPS', Label: 'ENPS Score'},
				]},

			{Code: 'Explore', Label: 'Explore', Submenu:
					[
						{Code: 'AllItems', Label: 'All Items'},
						{Code: 'ItemDetails', Label: 'Item Details' },
						{Code: 'ResponseRates', Label: 'Response Rates'},
						{Code: 'DemographicHeatmap', Label: 'Demographic Heatmap'},
						{Code: 'DemographicHighlighter', Label: 'Demographic Highlighter'},
						{Code: 'NonStandardQuestions', Label: 'Non-standard Questions'}
					]
			},
			{Code: 'Filters', Label: FilterIcon()}, //Filters & Comparators'},
			{Code: 'LogOut', Label: 'Log Out'}
		],

		Pages: {
			StrengthsAndOpportunities: {
				Strengths: {
					Title: 'Things to Celebrate (strengths)',
					Text:'Keep doing these things well.'
				},
				Opportunities: {
					Title: 'Things to Work on (opportunities)',
					Text: 'Try improving on the following.'
				}
			}
		},

		FunFacts: [
			{
				Title: "85% of Employees Are Not Engaged in the Workplace",
				Text: "According to Gallup's State of the Global Workplace, only 15 percent of employees are engaged in the workplace.",
				Sub: "This means that the majority of workforce around the world are either viewing their workplace negatively or only doing the bare minimum to make it through the day, with little to no emotional attachment."
			},

			{
				Title: "81% of Employees Are Considering Leaving Their Jobs",
				Text: "According to a 2017 study, 81 percent of employees would consider leaving their jobs for the right offer, even if they wouldn't be looking for a job at the moment.",
				Sub: "Changing jobs isn't all about the money, either, as 74 percent of younger employees would accept a pay cut for a chance to work at their ideal job, and 23 percent of those seeking a job wouldn't need a pay increase to take a new position."
			},

			{
				Title: "Low Employee Engagement Costs Companies $450-500 Billion Each Year",
				Text: "According to a study on workplace engagement in the U.S, disengaged employees cost organizations around $450-550 billion each year.",
				Sub: "Disengaged workers take less responsibility and ownership of their attitude, behavior, and motivation, and drain overall productivity."
			},

			{
				Title: "Companies with Highly Engaged Workforce Are 21% More Profitable",
				Text: "Employee engagement isn't just about soft, intangible and feelings-based reviews about employee well-being. Employee engagement has a very real impact on business success, and employee engagement should be considered a part of a business strategy.",
				Sub: "According to Gallup's meta-analysis, the business or work units that scored the highest on employee engagement showed 21 percent higher levels of profitability than units in the lowest quartile. Companies with highly engaged workforce also scored 17 percent higher on productivity."
			},

			{
				Title: "Good Company Culture Increases Revenue by 4X",
				Text: "In a major long-term study, companies that had the best corporate cultures, that encouraged all-around leadership initiatives and that highly appreciated their employees, customers and owners grew 682 percent in revenue.",
				Sub: "During the same period of evaluation -- 11 years -- companies without a thriving company culture grew only 166 percent in revenue. This means that a thriving company culture leads to more than four times higher revenue growth."
			},

			{
				Title: "1 in 3 Professionals Cite Boredom as Their Main Reason to Leave Their Jobs",
				Text: "According to a 2018 Korn Ferry Survey, the majority -- 33 percent -- of those changing jobs cite boredom and the need for new challenges as the top reason why they are leaving.",
				Sub: "The second most common reason was the fact that the work culture didn't fit the employee or their values, with 24 percent choosing this as their main reason. The quest for a larger salary came fourth, with only 19 percent choosing it as their main reason for leaving."
			},

			{
				Title: "37% of Employees Consider Recognition Most Important",
				Text: "One study asked what would be the most important thing a manager or a company could do that would help the employee be successful and 37 percent -- the majority -- cited recognition as the most important method of support.",
				Sub: "Other solutions lag far behind -- 12 percent want more autonomy, 12 percent more inspiration, 7 percent more pay, 6 percent more training and 4 percent a promotion. This means over a third of the workforce need first and foremost to be recognized."
			},

			{
				Title: "Only 29% of Employees Are Happy with Career Advancement Opportunities",
				Text: "According to SHRM's 2017 Employee Job Satisfaction and Engagement Report, only 29 percent of employees are 'very satisfied' with current career advancement opportunities available to them in the organization they work for.",
				Sub: "However, 41 percent consider this a very important factor to job satisfaction, so companies should pay close attention to making sure employees feel they can advance in their careers without leaving the company."
			}
		],

		Styles: {
			DistributionChart: {
				bgcolors: ['#77bc1f', '#e0e0e0', '#d30f1d'],
				colors: ['white', 'black', 'white'],
				height: '20px',
				style: 'text-align:center; font-size: smaller',
			},
			DistributionChart_onecolor: {
				bgcolor: 'rgb(0, 180, 235)',
				color: 'white',
				height: '20px',
				style: 'text-align:center; font-size: smaller',
			},
		},

		Labels: {
			Items: {
				"32": { "Label": "I believe I am paid fairly for the work I do." },
				"10": { "Label": "There are enough people to do the work in my work group." },
				"42": { "Label": "I believe my pay is fair considering the pay of people doing similar work in other companies." },
				"7": { "Label": "I have opportunities to achieve my career goals at the company." },
				"11": { "Label": "My job leaves adequate time to take advantage of job-related training opportunities." },
				"4": { "Label": "My work group receives high quality support from other parts of the company we depend on." },
				"22": { "Label": "The company provides training so that I can perform my present job well." },
				"40": { "Label": "I have good opportunities for learning and development at the company." },
				"31": { "Label": "The company is open and honest in communications with employees." },
				"15": { "Label": "The company motivates me to do more than is required." },
				"24": { "Label": "I have opportunities to have my ideas adopted and put into use." },
				"34": { "Label": "The work is well organized in my work group." },
				"48": { "Label": "The company provides a high quality customer experience." },
				"8": { "Label": "The company is effectively managed and well-run." },
				"6": { "Label": "I receive clear and regular feedback on how well I do my work." },
				"19": { "Label": "I have trust and confidence in the company's senior leadership team." },
				"36": { "Label": "There are no significant barriers at work to doing my job well." },
				"49": { "Label": "I would recommend the company as a good place to work." },
				"46": { "Label": "The company provides employee benefits that meet my needs." },
				"1": { "Label": "I have the resources I need to do my job effectively." },
				"44": { "Label": "I have the information I need to do my job well." },
				"47": { "Label": "There is effective sharing of ideas and resources across the company." },
				"2": { "Label": "I have enough authority to do my job well." },
				"3": { "Label": "I receive recognition when I do a good job." },
				"35": { "Label": "I am encouraged to come up with new or better ways of doing things." },
				"30": { "Label": "There is a clear link between my performance and my compensation." },
				"13": { "Label": "I believe that the company has the right strategic priorities and goals." },
				"29": { "Label": "The company is innovative in how work is done (using new technologies or creative approaches to continuously improve)." },
				"64": { "Label": "In the company, decisions are generally made at the lowest level appropriate." },
				"12": { "Label": "The company expects a high level of performance from its employees." },
				"38": { "Label": "My immediate manager supports me in my learning and development." },
				"5": { "Label": "The company is customer focused (always seeking to understand and meet customer needs)." },
				"50": { "Label": "New employees receive the training they need to do their jobs well." },
				"70": { "Label": "There is good communication between departments in the company." },
				"63": { "Label": "In the company, decisions are generally made in a timely manner." },
				"77": { "Label": "Poor performance is addressed effectively in the company." },
				"14": { "Label": "I understand the results expected of me in my job." },
				"73": { "Label": "I have opportunities for advancement at the company." },
				"69": { "Label": "There is good cooperation between departments in the company." },
				"58": { "Label": "The company is effectively organized and structured." },
				"75": { "Label": "Employee benefits provided by the company are competitive with benefits offered by other companies in our industry." },
				"28": { "Label": "I am treated with respect as an individual." },
				"74": { "Label": "I have a good idea of the possible career paths available to me." },
				"87": { "Label": "When changes are made where I work, communications are handled well." },
				"16": { "Label": "The people in my work group are committed to delivering high quality products and services." },
				"26": { "Label": "I believe that the company will be successful over the next 2-3 years." },
				"71": { "Label": "The company is responding effectively to changes in the business environment." },
				"41": { "Label": "There is good cooperation and teamwork within my work group." },
				"66": { "Label": "The information from this survey will be used constructively by the company." },
				"76": { "Label": "I have a good understanding of compensation policies and practices that affect me." },
				"61": { "Label": "Conditions in my job allow me to be about as productive as I can be." },
				"86": { "Label": "The amount of work expected of me is reasonable." },
				"59": { "Label": "The company supports me in achieving a reasonable balance between my work life and my personal life." },
				"78": { "Label": "The feedback I receive during the year helps me develop and improve." },
				"60": { "Label": "The company shows care and concern for its employees." },
				"85": { "Label": "My immediate manager coaches me to help improve my performance." },
				"53": { "Label": "I feel motivated to do more than is required of me." },
				"80": { "Label": "We resolve customer problems quickly and effectively." },
				"62": { "Label": "Given your choice, how long would you plan to continue working for the company?" },
				"82": { "Label": "Physical working conditions where I work are good." },
				"83": { "Label": "The company values and promotes employee diversity." },
				"52": { "Label": "My job provides opportunities to do challenging and interesting work." },
				"57": { "Label": "My job makes good use of my skills and abilities." },
				"55": { "Label": "I have a good understanding of the company's strategic priorities and goals." },
				"65": { "Label": "I have trust and confidence in my immediate manager." },
				"51": { "Label": "The company provides high quality products and services." },
				"56": { "Label": "I feel proud to work for the company." },
				"67": { "Label": "The company operates in an ethical manner." },
				"68": { "Label": "The company is socially responsible." },
				"79": { "Label": "I would recommend the company's products or services to a friend." },
				"54": { "Label": "I understand how my job contributes to the company's strategic priorities and goals." },
				"81": { "Label": "My immediate manager is accessible when needed." },
				"72": { "Label": "I have a good understanding of my work group's goals and objectives." },
				"84": { "Label": "My work area is safe." },
				"95": { "Label": "Given your choice, how long would you plan to continue working for the company?" },
			},
			Dimensions: {
				"DIM_ENG": {
					"Label": "Employee Engagement",
					"KeyMetric_BackCardText": "What drives engagement in our organisation",
					"KeyMetrics_MoreCardText" : "<p>Engagement measures commitment to the company, and extra effort employees are willing to put in for the good of the organisation.</p><p>The Engagement score is calculated as an average of the favourable scores from questions shown below.</p>"
				},
				"DIM_ENA": {
					"Label": "Employee Enablement",
					"KeyMetric_BackCardText": "What drives engagement in our organisation",
					"KeyMetrics_MoreCardText" : "<p>Enablement measures the extent to which employee skills and abilities are fully utilised and the support received in getting work done.</p><p>The Enablement score is calculated as an average of the favourable scores from questions shown below.</p>"
				},
				"DIM_N64": {
					"Label": "Resources",
					"KeyMetric_BackCardText": "Resources Drivers",
					"KeyMetrics_MoreCardText" : "Resources intro text"
				},
				"DIM_N50": {
					"Label": "Authority & Empowerment",
					"KeyMetric_BackCardText": "Authority & Empowerment Drivers",
					"KeyMetrics_MoreCardText" : "Authority & Empowerment intro text"
				},
				"DIM_N65": {
					"Label": "Respect & Recognition",
					"KeyMetric_BackCardText": "Respect & Recognition Drivers",
					"KeyMetrics_MoreCardText" : "Respect & Recognition intro text"
				},
				"DIM_N52": {
					"Label": "Collaboration",
					"KeyMetric_BackCardText": "Collaboration Drivers",
					"KeyMetrics_MoreCardText" : "Collaboration intro text"
				},
				"DIM_N63": {
					"Label": "Quality & Customer Focus",
					"KeyMetric_BackCardText": "Quality & Customer Focus Drivers",
					"KeyMetrics_MoreCardText" : "Quality & Customer Focus intro text"
				},
				"DIM_N61": {
					"Label": "Performance Management",
					"KeyMetric_BackCardText": "Performance Management Drivers",
					"KeyMetrics_MoreCardText" : "Performance Management intro text"
				},
				"DIM_N54": {
					"Label": "Development Opportunities",
					"KeyMetric_BackCardText": "Development Opportunities Drivers",
					"KeyMetrics_MoreCardText" : "Development Opportunities intro text"
				},
				"DIM_N53": {
					"Label": "Confidence in Leaders",
					"KeyMetric_BackCardText": "Confidence in Leaders Drivers",
					"KeyMetrics_MoreCardText" : "Confidence in Leaders intro text"
				},
				"DIM_N66": {
					"Label": "Training",
					"KeyMetric_BackCardText": "Training Drivers",
					"KeyMetrics_MoreCardText" : "Training intro text"
				},
				"DIM_N51": {
					"Label": "Clear & Promising Direction",
					"KeyMetric_BackCardText": "Clear & Promising Direction",
					"KeyMetrics_MoreCardText" : "Clear & Promising Direction intro text"
				},
				"DIM_N67": {
					"Label": "Work, Structure, & Process",
					"KeyMetric_BackCardText": "Work, Structure, & Process Drivers",
					"KeyMetrics_MoreCardText" : "Work, Structure, & Process intro text"
				},
				"DIM_N60": {
					"Label": "Pay & Benefits",
					"KeyMetric_BackCardText": "Pay & Benefits Drivers",
					"KeyMetrics_MoreCardText" : "Pay & Benefits intro text"
				},
				"DIM_C15": {
					"Label": "Local questions",
					"KeyMetric_BackCardText": "Local questions Drivers",
					"KeyMetrics_MoreCardText" : "Local questions intro text"
				},
				"DIM_NPS": {
					"Label": "Employee Net Promoter Score (ENPS)",
					"KeyMetric_BackCardText": "Employee Net Promoter Score (ENPS) Drivers",
					"KeyMetrics_MoreCardText" : "Employee Net Promoter Score (ENPS) intro text"
				},
			},
			NonStandardQuestions: {
				"NSQ1": {
					"Label": "Please review the list below and select up to 5 areas that are most important to you in your career when deciding to stay or join a new company.",
					"Answers" : {
						"1": { "Label": "Q1 Answer A" },
						"2": { "Label": "Q1 Answer B" },
						"3": { "Label": "Q1 Answer C" }
					}
				},
				"NSQ2": {
					"Label": "Please select which of the following are barriers to innovation at the company: (Select all that apply)",
					"Answers" : {
						"1": { "Label": "Q2 Answer A" },
						"2": { "Label": "Q2 Answer B" },
						"3": { "Label": "Q2 Answer C" }
					}
				},
				"NSQ3": {
					"Label": "How do you prefer to read your emails, reports and books?",
					"Answers" : {
						"1": { "Label": "Q3 Answer A" },
						"2": { "Label": "Q3 Answer B" },
						"3": { "Label": "Q3 Answer C" }
					}
				},
			},
			BreakBy: {
				"Hierarchy": {
					"Label": "One Level Down",
					"Title": "Company Overall",
					"Options": {
						"1a": { "Label": "Group A" },
						"1b": { "Label": "Group B" },
						"1c": { "Label": "Group C" }
					}
				},
				"Gender": {
					"Label": "Gender",
					"Options": {
						"410": { "Label": "Male" },
						"420": { "Label": "Female" },
						"430": { "Label": "Other/non-binary" },
						"440": { "Label": "Prefer not to say" }
					}
				},
				"Age": {
					"Label": "Age",
					"Options": {
						"651": { "Label": "Under 20" },
						"652": { "Label": "20 to 29" },
						"653": { "Label": "30 to 39" },
						"654": { "Label": "40 to 49" },
						"655": { "Label": "50 to 59" },
						"656": { "Label": "Over 59" }
					}
				},
				"Tenure": {
					"Label": "Tenure",
					"Options": {
						"701": { "Label": "Less than 1 year" },
						"702": { "Label": "1 year to less than 2 years" },
						"703": { "Label": "2 years to less than 5 years" },
						"704": { "Label": "5 years to less than 10 years" },
						"705": { "Label": "10 years or more" }
					}
				},
				"UnionNon": {
					"Label": "Union/Non-Union",
					"Options": {
						"631": { "Label": "Union" },
						"632": { "Label": "Non-Union" }
					}
				},
				"Wage_Status": {
					"Label": "Wage_Status",
					"Options": {
						"641": { "Label": "Hourly" },
						"642": { "Label": "Salaried" }
					}
				}
			},
			Comparators: {
				"Internal.trend2020": { Label: "Trend 2020" },
				"Internal.trend2019": { Label: "Trend 2019" },
				"Internal.trend2018": { Label: "Trend 2018" },
				"Internal.parent": { Label: "Parent" },
				"Internal.total": { Label: "Total Company" },
				"External.IndustryBenchmark": { Label: "Industry Benchmark" },
				"External.HighPerformers": { Label: "High Performers" },
			},

			ui: {
				"print": { "Label": "Print" },
				"export": { "Label": "Export" },
				"logoff": { "Label": "Log Off" },
				"breakby": { "Label": "Break By:" },
				"respondentcount": { "Label": "Number of Respondents" },
				"preferences": { "Label": "Preferences" },
				"breadcrumb": { "Label": "You are here:" },
				"setreportbase": { "Label": "Set Report Base" },
				"reenterreport": { "Label": "Re-enter Report" },
				"changereport": { "Label": "Report List" },
			},
			labels: {
				"ResponseRate": { "Label": "Response Rate" },
				"Passives": { "Label": "Passives" },
				"Promoters": { "Label": "Promoters" },
				"Detractors": { "Label": "Detractors" },
				"PercentDistribution": { "Label": "% Distribution" },
				"ValidN": { "Label": "Valid N" },
				"Favorable": { "Label": "Favorable" },
				"Neutral": { "Label": "Neutral" },
				"Unfavorable": { "Label": "Unfavorable" },
				"Score": { "Label": "Score" },
				"Fav": { "Label": "Fav" },
				"Neu": { "Label": "Neu" },
				"Unfav": { "Label": "Unfav" },
				"PercentFav": { "Label": "% Fav" },
				"PercentNeu": { "Label": "% Neu" },
				"PercentUnfav": { "Label": "% Unfav" },
				"Distribution": { "Label": "Distribution" },
				"PriorResults": { "Label": "Trend 2015" },
				"PriorResults2": { "Label": "Trend 2014" },
				"PriorResults3": { "Label": "Trend 2013" },
				"FavvsComparator": { "Label": "% Fav vs Comparator" },
				"ImpactonEngagement": { "Label": "Impact on Engagement" },
				"ImpactonEnablement": { "Label": "Impact on Enablement" },
				"YourCurrentResults": { "Label": "Your Current Results" },
				"PercentFavorable": { "Label": "% Favorable" },
				"PercentEffective": { "Label": "% Effective" },
				"PercentFrustrated": { "Label": "% Frustrated" },
				"PercentDetached": { "Label": "% Detached" },
				"PercentIneffective": { "Label": "% Ineffective" },
				"Potential": { "Label": "(Potential)" },
				"AND": { "Label": "AND" },
				"ENPS": { "Label": "ENPS" },
				"AddtoPlan": { "Label": "Add to Plan" },
				"BuildYourPlan": { "Label": "Build Your Plan" },
				"Item": { "Label": "Item" },
				"Rank": { "Label": "Rank" },
				"ShowAll": { "Label": "(Show All)" },
				"ByStatus": { "Label": "By Status" },
				"filtererror": { "Label": "Error: Max [ERROR] comparators allowed" },
				"SelectQuestion": { "Label": "Select Question:" },
				"SelectOpinionQuestion": { "Label": "Select Opinion Question:" },
				"Question": { "Label": "Question:" },
				"BreakBy": { "Label": "Break By:" },
				"FullDistribution": { "Label": "Full Distribution:" },
				"none": { "Label": "(None)" },
				"DIMENSION": { "Label": "Dimension:" },
				"norm": { "Label": "(Norm)" },
				"QNo": { "Label": "Q #" },
				"SelectTheme": { "Label": "Select Theme:" },
				"show": { "Label": "Show:" },
				"metric": { "Label": "Metric:" },
				"INTERNAL": { "Label": "INTERNAL:" },
				"EXTERNAL": { "Label": "EXTERNAL:" },
				"DimensionLabel": { "Label": "Dimension" },
				"Chart": { "Label": "Chart" },
				"InternalComp1": { "Label": "Total Company" },
				"InternalComp2": { "Label": "Parent" },
				"InternalComp3": { "Label": "Level 2" },
				"InternalComp4": { "Label": "Custom 1" },
				"InternalComp5": { "Label": "Custom 2" },
				"VirtualUnits": { "Label": "Virtual Units" },
				"NewVU": { "Label": "(New)" },
				"DefaultVUName": { "Label": "(Virtual Unit)" },
				"APHomeItem": { "Label": "Item" },
				"Max5CompsAllowed": { "Label": "No more than [MAXALLOWED] comparators can be selected at the same time." },
				"NoDataToDisplay": { "Label": "No data to display" },
				"Pct" : { "Label": "Pct" }
			},
			drop_downs: {
				"Passives": { "Label": "Passives" },
				"Detractors": { "Label": "Detractors" },
				"PriorResults": { "Label": "Trend 2015" },
				"PriorResults2": { "Label": "Trend 2014" },
				"PriorResults3": { "Label": "Trend 2013" },
				"Overall": { "Label": "Overall" },
				"fulldetails": { "Label": "(full details)" },
				"PercentFavorable": { "Label": "% Favorable" },
				"PercentNeutral": { "Label": "% Neutral" },
				"PercentUnfavorable": { "Label": "% Unfavorable" },
				"NoSorting": { "Label": "No Sorting" },
				"AbsoluteValue": { "Label": "Absolute Value" },
				"DifferencetoTotal": { "Label": "Difference to Total" },
				"AllDimensions": { "Label": "All Dimensions" },
				"Top10Questions": { "Label": "Top 10 Questions" },
				"AllQuestions": { "Label": "All Questions" },
				"ReportTotal": { "Label": "Report Total" },
				"DemographicTotal": { "Label": "Demographic Total" },
				"Exclude": { "Label": "Exclude" },
				"Include": { "Label": "Include" },
				"compact": { "Label": "(compact)" },
				"none": { "Label": "(None)" },
				"DIMENSION": { "Label": "Dimension:" },
				"norm": { "Label": "(Norm)" },
				"all": { "Label": "(All)" },
				"AllQuestionsOrdByDimension": { "Label": "All Questions ordered by dimension" },
			},
			rst_drop_down: {
				"Strengths": { "Label": "Strengths" },
				"Opportunities": { "Label": "Opportunities" },
				"KeyDriversofEngagement": { "Label": "Key Drivers of Engagement" },
				"KeyDriversofEnablement": { "Label": "Key Drivers of Enablement" },
				"QuestionTrend": { "Label": "Question Trend 2015" },
				"QuestionTrend2": { "Label": "Question Trend 2014" },
				"QuestionTrend3": { "Label": "Question Trend 2013" },
				"InternalComparison": { "Label": "Internal Comparison" },
				"ExternalComparison": { "Label": "External Comparison ([NORM])" },
				"Top10MostFavorable": { "Label": "Top [N] Most Favorable" },
				"Top10LeastFavorable": { "Label": "Top [N] Least Favorable" },
				"Top10MostUnfavorable": { "Label": "Top [N] Most Unfavorable" },
				"Top10LeastUnfavorable": { "Label": "Top [N] Least Unfavorable" },
				"Top10Neutral": { "Label": "Top [N] Neutral" },
				"Top10Improved": { "Label": "Top [N] Improved" },
				"Top10Declined": { "Label": "Top [N] Declined" },
				"Top10AboveNORM": { "Label": "Top [N] Above [NORM] (Norm)" },
				"Top10BelowNORM": { "Label": "Top [N] Below [NORM] (Norm)" },
				"Top10Above": { "Label": "Top [N] Above" },
				"Top10Below": { "Label": "Top [N] Below" },
				"FullQFav": { "Label": "% Favorable" },
				"FullQNeutral": { "Label": "% Neutral" },
				"FullQUnfav": { "Label": "% Unfavorable" },
			},
			pages: {
				"AllItems": {
					"Title": "All Items",
					"Label": `
						<p>Use this page to explore your survey results in more detail.</p>
						<p>Select whether you want to view all dimensions, all questions or all questions within their dimensions. You can sort the data by any of the columns, simply click on the column headers.</p>
						<p>Note that: 
						<ul class="left-pane-list">
						<li>The Valid N refers to the number of responses to a question, not the population size</li>
						<li>Question scores are suppressed if there are deemed to be too few responses to protect confidentiality</li>
						<li>Dimension scores are suppressed where any of the questions in that dimension have not received enough responses</li>
						</ul></p>
						`
				},
				"ItemDetails": {
					"Title": "Item Breakdown",
					"Label": `
						<p><b>Use this page to focus on one dimension or question and review differences by demographic and organisational groups.</b></p>
						<p>Select the dimension or question you want to view then select the demographic or organisational group to get a better understanding of differences. The data can be sorted by any of the columns.</p>
						`
				},
				"NonStandardQuestions": {
					"Title": "Non-Standard Questions",
					"Label": ``
				},
				"KeyMetrics" : {
					"Title": "Key Metrics",
					"Label": "<p>These metrics are what drive success in your organisation.</p><p>Engagement measures commitment to the company, and extra effort employees are willing to put in for the good of the organisation.</p><p>Enablement measures the extent to which employee skills and abilities are fully utilised and the support received in getting work done.</p><p>The cards show your team performance on these metrics. Click on the cards to flip them and find out which topics have the biggest impact.</p>",
				},
				"StrengthsAndOpportunities" : {
					"Title": "Strengths and Opportunities",
					"Label": "Strengths and Opportunities text",
				},
				"Action": { "Label": "Take Action" },
				"ActionAll": { "Label": "Review All Plans" },
				"ActionBestPractice": { "Label": "Shared Plans" },
				"ActionCreate": { "Label": "Create Plan" },
				"ActionHome": { "Label": "Home" },
				"ActionOwn": { "Label": "Review Own Plans" },
				"ActionStatistics": { "Label": "Statistics" },
				"Comments": { "Label": "Comments" },
				"Dashboard": { "Label": "Dashboard" },
				"DemographicHighlighter": { "Label": "Demographic Highlighter" },
				"EE": { "Label": "Engagement and Enablement" },
				"EEDetails": { "Label": "Engagement and Enablement Details" },
				"EEDrivers": { "Label": "Engagement and Enablement Drivers" },
				"EEOverview": { "Label": "Engagement and Enablement Overview" },
				"EProfile": { "Label": "Effectiveness Profile" },
				"EProfileDetails": { "Label": "Effectiveness Profile Details" },
				"EProfileGap": { "Label": "Effectiveness Profile Gap" },
				"EProfileTrend": { "Label": "Effectiveness Profile Trend" },
				"ExploreResults": { "Label": "Explore Results" },
				"ExploreSurveyDimensions": { "Label": "Survey Dimensions" },
				"DimDetails": { "Label": "Dimension Details" },
				"GeneratingPssTable": { "Label": "Generating PSS Table..." },
				"DemographicHeatmap": {
					"Title": "Heatmap",
					"Label": "<p>Use the Heatmap to identify differences across demographic and organisational groups, and quickly understand which groups show best practice or require most focus.</p><p>First, select whether you want to review all dimensions, all questions or all questions within dimensions. Select a demographic or organisational group to compare against your base population.</p><p>Results will show percent favourable scores for the base group and you can toggle to show favourable scores or percentage-point differences in favourability for the comparison groups. Statistically significant differences are highlighted to help you understand whether differences are meaningful.</p>"},
				"LocalQuestions": { "Label": "Local Questions" },
				"Nps": { "Label": "ENPS" },
				"NpsDetails": { "Label": "ENPS Details" },
				"NpsGap": { "Label": "ENPS Gap" },
				"NpsScale": { "Label": "ENPS Scale" },
				"NSQ": { "Label": "Non-Standard Questions" },
				"NSQ_COMPARATOR": { "Label": "NSQ Comparator page" },
				"NSQ_IBT": { "Label": "NSQ Benchmark Tool" },
				"RankingQuestions": { "Label": "Ranking Questions" },
				"PlotYourResults": { "Label": "Plot Your Results" },
				"PssTableComplete": { "Label": "PSS Table Complete" },
				"PssTableGenerator": { "Label": "PSS Table Generator" },
				"QuestionDetails": { "Label": "Question Details" },
				"QuestionsByDimension": { "Label": "Questions By Dimension" },
				"QuestionsSummary": { "Label": "Questions Summary" },
				"Respondents": { "Label": "Respondents" },
				"RespondentsTrend": { "Label": "Respondents - Trend" },
				"ResponsesByGroup": { "Label": "Responses By Group" },
				"ResponsesBySegment": { "Label": "Responses By Segment" },
				"ResponseRate": { "Label": "Response Rate" },
				"ResponseRateDetails": { "Label": "Response Rate Details" },
				"ResultsSortingTool": { "Label": "Results Sorting Tool" },
				"Summary": { "Label": "Summary" },
				"Welcome": { "Label": "Welcome" },
				"AlgorithmSO": { "Label": "Algorithm: Strengths and Opportunities" },
				"NPSGapTool": { "Label": "ENPS - Gap Analysis Tool" },
				"FiltersandComparators": { "Label": "Filters and Comparators" },
				"ChangeRole": { "Label": "Change Role" },
				"UserGuide": { "Label": "User Guide" },
				"ComparatorGuide": { "Label": "Guide" },
				"PSS": { "Label": "PSS" },
				"ExportWelcome": { "Label": "Export Welcome" },
				"ExportCover": { "Label": "Export Cover" },
				"VirtualUnitsEditor": { "Label": "Virtual Unit Editor" },
				"VirtualUnitsEnterCodes": { "Label": "Virtual Unit Editor - Enter Codes" },
			},
			buttons: {
				"Back": { "Label": "Back" },
				"vu_update": { "Label": "Update This Virtual Unit" },
				"vu_delete": { "Label": "Delete This Virtual Unit" },
				"vu_create": { "Label": "Create New Virtual Unit" },
				"vu_previous_page": { "Label": "Previous Page" },
				"vu_activate": { "Label": "Activate This Virtual Unit" },
				"vu_enter_codes": { "Label": "Enter Codes" },
				"vu_hierarchy_list": { "Label": "Hierarchy Selector" },
				"ByGroup": { "Label": "By Group" },
				"BySegment": { "Label": "By Segment" },
				"Comments": { "Label": "Comments" },
				"CreatePlan": { "Label": "Create Plan" },
				"Dashboard": { "Label": "Dashboard" },
				"DemoHighlighter": { "Label": "Demographic Highlighter" },
				"Details": { "Label": "Details" },
				"EEDrivers": { "Label": "Engagement and Enablement Drivers" },
				"EEOverview": { "Label": "Overview" },
				"EffectivenessProfile": { "Label": "Effectiveness Profile" },
				"FurtherDetails": { "Label": "Further Details" },
				"GapAnalysis": { "Label": "Gap Analysis Tool" },
				"Home": { "Label": "Home" },
				"InternalBM": { "Label": "Internal Benchmark Tool" },
				"NavByDimension": { "Label": "Questions by Dimension" },
				"NavDetails": { "Label": "Details" },
				"NavMain": { "Label": "Dimensions" },
				"NavMainAll": { "Label": "All Dimensions" },
				"NavNPS": { "Label": "ENPS" },
				"NavProfile": { "Label": "Effectiveness Profile" },
				"NavQuestionDetails": { "Label": "Question Details" },
				"Next": { "Label": "Next" },
				"NPS": { "Label": "ENPS" },
				"NPSScale": { "Label": "ENPS Scale" },
				"NSQ": { "Label": "Non-Standard Questions" },
				"Overall": { "Label": "Overall" },
				"PlotYourResults": { "Label": "Plot Your Results" },
				"QuestionSummary": { "Label": "Questions Summary" },
				"RST": { "Label": "Results Sorting Tool" },
				"ScaleFilter": { "Label": "Apply Scale Filter" },
				"SharedPlans": { "Label": "Shared Plans" },
				"Statistics": { "Label": "Statistics" },
				"Summary": { "Label": "Summary" },
				"SurveyDimensions": { "Label": "Survey Dimensions" },
				"NavDimDetails": { "Label": "Dimension Details" },
				"Trend": { "Label": "Trend" },
				"Update": { "Label": "Update" },
				"UserGuide": { "Label": "User Guide" },
				"ViewAllPlans": { "Label": "Review All Plans" },
				"ViewOwnPlan": { "Label": "Review Own Plans" },
				"Nextiteration": { "Label": "Next iteration" },
				"Gap": { "Label": "ENPS Gap Analysis" },
				"FiltersComparators": { "Label": "Filters / Comparators" },
				"ClearFilters": { "Label": "Clear Filters" },
				"ComparatorGuide": { "Label": "Guide" },
				"SaveandReturn": { "Label": "Save and Return" },
				"Previous": { "Label": "Previous" },
				"More": { "Label": "More" },
				"EGapAnalysis": { "Label": "Gap Analysis" },
				"Edit": { "Label": "Edit" },
				"ENPSDetail": { "Label": "ENPS Details" },
				"ClearVirtualUnit": { "Label": "Clear Virtual Unit" },
				"EditVirtualUnit": { "Label": "Edit Virtual Unit" },
				"AddNew": { "Label": "Add" },
				"Delete": { "Label": "Delete" },
				"Save": { "Label": "Save" },
				"EnterCodes": { "Label": "Enter Codes" },
				"LocalQuestions": { "Label": "Local Questions" },
				"NSQComp": { "Label": "NSQ Comparator page" },
				"NSQ_IBT": { "Label": "NSQ Benchmark Tool" },
				"Respondents": { "Label": "Respondents" },
				"TakeAction" : { "Label": "Take Action to Improve" }
			},
			exports: {
				"ResponseRate": { "Label": "Response rate preamble text" },
				"EffectivenessProfile": { "Label": "The Effectiveness Profile arranges people into four different groups based on levels of Engagement and Enablement and compares the size of these groups to Korn Ferry benchmarks." },
				"EngAndEna": { "Label": "Below are your Engagement and Enablement results compared to benchmarks. <ul><li><b>Engagement</b> represents the % of employees committed to the organization and willing to apply discretionary effort in their work. </li><li><b>Enablement</b> represents the % employees well matched to their role and who experience job conditions that support them perform to their full potential.</li></ul>" },
				"TopDimensions": { "Label": "Survey Dimensions show the average score for a set of questions relating to a common theme.<br>The Top Dimensions chart shows the three most favorably scoring themes and represents the areas where people feel most positive, regardless of benchmarks." },
				"QuestionTrend": { "Label": "Question Trends show the change in opinion, across all comparable questions since the prior survey.<br>The chart shows the number of questions where the % favorable score either improved or declined significantly." },
				"InternalComparison": { "Label": "The Internal Comparison shows how results compare to the rest of the organization across all questions.  The chart shows the number of questions where the percent favorable score is significantly above or below the wider organization." },
				"ExternalComparison": { "Label": "The External Comparison shows how results compare to Korn Ferry external benchmarks.  The chart shows the number of questions where the percent favorable score is significantly above or below external benchmarks." },
				"KeyDrivers": { "Label": "Key Drivers are Dimensions and individual questions which have the strongest influence on how engaged and enabled people are." },
				"TopComments": { "Label": "People were asked the following open-ended question: [INSERT QUESTION TEXT].   Their written feedback is grouped into themes.<br>The chart shows the three most frequently mentioned themes." },
				"Strengths": { "Label": "Strengths were selected by analyzing which questions compare most positively to the wider organization, Korn Ferry benchmarks and in absolute terms." },
				"Opportunities": { "Label": "Opportunities were selected by analyzing which questions compare least positively to the wider organization, Korn Ferry benchmarks and in absolute terms." },
				"ENPS": { "Label": "The Employee Net Promoter Score (ENPS) is based on the question: How likely is it that you would recommend our products / services to a friend or colleague?<br>ENPS measures the percentage of people willing to actively promote the organization's products and services and compares this to those that are less likely or unwilling to." },
				"ENPSTrend": { "Label": "The Employee Net Promoter Score (ENPS) is based on the question: How likely is it that you would recommend our products / services to a friend or colleague?<br>ENPS measures the percentage of people willing to actively promote the organization's products and services and compares this to those that are less likely or unwilling to." },
				"ReportFor": { "Label": "Report For:" },
				"InfoIntro_1": { "Label": "Output text > summary/abstract title element on the first export page." },
				"InfoIntro_2": { "Label": "Output text > summary/abstract title element on the second export page." },
				"InfoIntro_3": { "Label": "Output text > summary/abstract title element on the third export page." },
				"InfoSummary_1": { "Label": "This is the output text of the free text summary/abstract second output element on the first export page. This element is optional. If left blank the element will beremoved from the export output." },
				"InfoSummary_2": { "Label": "This is the output text of the free text summary/abstract second output element on the second export page. This element is optional. If left blank the element will beremoved from the export output." },
				"InfoSummary_3": { "Label": "This is the output text of the free text summary/abstract second output element on the third export page. This element is optional. If left blank the element will beremoved from the export output." },
				"InfoBody_1": { "Label": "This is the body text of the free text body element on the first export page. Update this text to either some sort of pertinent verbiage or delete completely to have this element removed from the export output." },
				"InfoBody_2": { "Label": "This is the body text of the free text body element on the second export page. Update this text to either some sort of pertinent verbiage or delete completely to have this element removed from the export output." },
				"InfoBody_3": { "Label": "This is the body text of the free text body element on the third export page. Update this text to either some sort of pertinent verbiage or delete completely to have this element removed from the export output." },
				"Continued": { "Label": "cont'd" },
				"Tier1SlidePreAmble": { "Label": "Tier1 widget slide pre-amble (configurable)" },
			},
			comparator_guide: {
				"Trend1": { "Label": "Difference from the previous year's result (i.e., current % favorable minus previous % favorable)." },
				"Trend2": { "Label": "Description of Trend2" },
				"Trend3": { "Label": "Description of Trend3" },
				"Internal1": { "Label": "Difference from the overall results for ABC Corporation (i.e., Your group's % favorable minus Overall ABC Corporation's % favorable)." },
				"Internal2": { "Label": "Difference from one level up in the hierarchy (i.e., Your group's % favorable minus the level above's % favorable)." },
				"Internal3": { "Label": "Description for third internal comparator." },
				"Internal4": { "Label": "Description for fourth internal comparator." },
				"Internal5": { "Label": "Description for fifth internal comparator." },
				"Norm1": { "Label": "This benchmark is based on data collected from over 5.7 million employees in 400 organizations around the world in a wide variety of industries." },
				"Norm2": { "Label": "This benchmark is a stretch target and shows the average survey scores from over 750,000 employees in 30 high performing organizations. Organizations are eligible for inclusion in the high performance benchmark if they exceed their industry peer group on the majority of financial Key Performance Indicators and meet a minimum threshold on employee engagement and enablement." },
				"Norm3": { "Label": "Difference from companies operating in the financial services industry, who have surveyed with the same question(s) within the previous five years." },
				"Norm4": { "Label": "Difference from companies located in Europe, across multiple industries, who have surveyed with the same question(s) within the previous five years." },
				"Norm5": { "Label": "Difference from companies located in the United Kingdom, across multiple industries, who have surveyed with the same question(s) within the previous five years." },
			},
			ug_headers_desciptions: {
				"highlights": { "Label": "Results highlights" },
				"explore": { "Label": "Explore results in detail" },
				"actionplanning": { "Label": "Action planning resources" },
				"linkheader1": { "Label": "The links below take you to pages that provide highlights from your results" },
				"linkheader2": { "Label": "The links below take you to pages where you can explore results in detail and conduct your own data mining" },
				"linkheader3": { "Label": "This area of the site includes various resources to support action planning and communication" },
				"Welcome_Des": { "Label": "An introduction to the site" },
				"Summary_Des": { "Label": "A one page summary showing key themes from the survey" },
				"Dashboard_Des": { "Label": "A selection of active widgets showing snapshots of your results. Click on a widget to explore further" },
				"EEOverview_Des": { "Label": "Engagement and Enablement results compared to various benchmarks" },
				"EEDrivers_Des": { "Label": "The Dimensions and questions in the survey that have the strongest influence on Engagement and Enablement" },
				"EProfile_Des": { "Label": "A segmentation analysis showing how effective people are at work, and including a tool to understand the differences in opinion between each segment" },
				"area": { "Label": "Area" },
				"subarea": { "Label": "Sub Area" },
				"description": { "Label": "Description" },
				"QuestionsSummary_Des": { "Label": "All of the survey questions grouped into Dimensions and compared to benchmarks" },
				"ExploreSurveyDimensions_Des": { "Label": "Data mine the survey Dimension and questions and explore demographic differences" },
				"ResultsSortingTool_Des": { "Label": "Sort, rank and filter Dimensions and questions compared to benchmarks" },
				"InternalBenchmarkTool_Des": { "Label": "Explore demographical results side by side to pin point significant differences" },
				"PlotYourResults_Des": { "Label": "Select two questions of your choice and plot the results for any demographic on a grid" },
				"DemographicHighlighter_Des": { "Label": "Choose a Dimension or question and pin point all the demographic groups that are significantly above or below average" },
				"NSQ_Des": { "Label": "An area for any questions with a non-standard response scale (e.g. multiple choice scale, ranking scale)" },
				"step": { "Label": "Step" },
				"ActionHome_Des": { "Label": "Introduction to taking action and Engagement resources hub" },
				"ActionCreate_Des": { "Label": "Design and schedule your plan, access recommended actions" },
				"ActionOwn_Des": { "Label": "Record the progress of your plan and measure your success" },
				"ActionAll_Des": { "Label": "An overview of all plans for your part of the hierarchy" },
				"ActionBestPractice_Des": { "Label": "Take inspiration from successful plans other managers chose to share" },
				"ActionStatistics_Des": { "Label": "View quantified user activity to explore action planning trends" },
				"LocalQuestions_Des": { "Label": "Offers functionality similar to the Question Summary page but allows you to show/hide individual dimensions based on hierarchy units" },
				"NSQ_COMPARATOR_Des": { "Label": "NSQ (Non-standard question) Comparator page displays percentages of selected answers for non-standard questions next to internal or external comparators" },
				"NSQ_IBT_Des": { "Label": "NSQ (Non-standard question) Benchmark Tool page displays percentages of selected answers for non-standard questions  next to results of individual cuts belonging to a selected demographic group" },
				"Comments_Des": { "Label": "See individual responses to comment questions in the survey and explore them in more detail using various filtering options" },
				"Nps_Des": { "Label": "ENPS (Employee Net Promoter Score) page displays percentages of respondents willing to actively promote the organization's products and services against those that are less likely or unwilling to" },
				"Respondents_Des": { "Label": "See the response rate for your unit and units directly below as well as the group sizes of demographic breakdowns on your level" },
			},

			"welcome": {
				"Id": "welcome",
				"Title": "welcome",
				"Label": "Hello [FIRSTNAME],<p spellcheck=\"-1\">This website provides a powerful gateway to understanding the collective voice of people in your organization. Explore how people feel, what motivates them and actions you can take to make the organization a better place to work.</p><p spellcheck=\"-1\">You have access to a range of tools to understand people’s feedback from different perspectives. Use these resources and insights to set priorities and take action on the most important themes you identify.</p><p spellcheck=\"-1\">If you have questions about the survey or how to use this site contact: <a spellcheck=\"-1\" href=\"mailto:[Contact.Email]\">[Contact.Email]</a>.</p>"
			},
			"welcome.dummy": {
				"Label": "Dummy Text"
			},
			"welcome_poweruser": {
				"Id": "welcome_poweruser",
				"Title": "welcome_poweruser",
				"Label": "As a power user you have access to an extensive range of data mining and analytical tools. You can also navigate through the entire organizational structure to understand how employee opinion varies across the organization. Whilst respondent confidentiality will be protected at all times, please remember to treat the data you access responsibly."
			},
			"welcome_poweruser.dummy": {
				"Label": "Dummy Text"
			},
			"welcome_senioruser": {
				"Id": "welcome_senioruser",
				"Title": "welcome_senioruser",
				"Label": "As a senior user of this site you will be able to delve into the details of your part of the organizational structure, even filtering by different demographics should you need. These powerful analytics will help you understand how your people are feeling and inform your thinking as you strive to increase employee engagement and effectiveness."
			},
			"welcome_senioruser.dummy": {
				"Label": "Dummy Text"
			},
			"welcome_manager": {
				"Id": "welcome_manager",
				"Title": "welcome_manager",
				"Label": "As a team manager, this analysis tool will help you to get a better understanding of how your people are feeling and provide guidance on how you can increase their engagement in the company and their overall work effectiveness. We wish you the best as you take the next step on your manager journey."
			},
			"welcome_manager.dummy": {
				"Label": "Dummy Text"
			},
			"welcome_custom1": {
				"Id": "welcome_custom1",
				"Title": "",
				"Label": ""
			},
			"welcome_custom1.dummy": {
				"Label": "Dummy Text"
			},
			"welcome_custom2": {
				"Id": "welcome_custom2",
				"Title": "",
				"Label": ""
			},
			"welcome_custom2.dummy": {
				"Label": "Dummy Text"
			},
			"welcome_footer": {
				"Id": "welcome_footer",
				"Title": "welcome_footer",
				"Label": "This website is managed by Korn Ferry, commissioned by your organization to administer this survey on its behalf <a spellcheck=\"-1\" href=\"https://www.kornferry.com/\" target=\"_new\">www.kornferry.com</a>. Korn Ferry protects individual respondent confidentiality by only reporting results data in an aggregated format. Korn Ferry will only show aggregated results data for group sizes at or above the minimum number of respondents agreed with your organization. As a user of this website you are responsible for handling all survey results data with due care and attention and in accordance with your organization’s information security standards and policies.<p spellcheck=\"-1\"></p><p spellcheck=\"-1\"></p>"
			},
			"welcome_footer.dummy": {
				"Label": "Dummy Text"
			},
			"export_welcome": {
				"Id": "export_welcome",
				"Title": "Sample text",
				"Label": "Sample text"
			},
			"export_welcome.dummy": {
				"Label": "Dummy Text"
			},
			"newuser": {
				"Id": "newuser",
				"Title": "",
				"Label": ""
			},
			"newuser.highlights": {
				"Label": "Results highlights"
			},
			"newuser.explore": {
				"Label": "Explore results in detail"
			},
			"newuser.actionplanning": {
				"Label": "Action planning resources"
			},
			"newuser.linkheader1": {
				"Label": "The links below take you to pages that provide highlights from your results"
			},
			"newuser.linkheader2": {
				"Label": "The links below take you to pages where you can explore results in detail and conduct your own data mining"
			},
			"newuser.linkheader3": {
				"Label": "This area of the site includes various resources to support action planning and communication"
			},
			"newuser.a2": {
				"Label": "An introduction to the site"
			},
			"newuser.b2": {
				"Label": "A one page summary showing key themes from the survey"
			},
			"newuser.c2": {
				"Label": "A selection of active widgets showing snapshots of your results. Click on a widget to explore further"
			},
			"newuser.d2": {
				"Label": "Engagement and Enablement results compared to various benchmarks"
			},
			"newuser.e2": {
				"Label": "The Dimensions and questions in the survey that have the strongest influence on Engagement and Enablement"
			},
			"newuser.f2": {
				"Label": "A segmentation analysis showing how effective people are at work, and including a tool to understand the differences in opinion between each segment"
			},
			"newuser.a0": {
				"Label": "Welcome"
			},
			"newuser.b0": {
				"Label": "Summary"
			},
			"newuser.c0": {
				"Label": "Dashboard"
			},
			"newuser.d0": {
				"Label": "Engagement & Enablement"
			},
			"newuser.g0": {
				"Label": "Explore Results"
			},
			"newuser.d1": {
				"Label": "Engagement & Enablement Overview"
			},
			"newuser.e1": {
				"Label": "Engagement & Enablement Drivers"
			},
			"newuser.f1": {
				"Label": "Effectiveness Profile"
			},
			"newuser.g1": {
				"Label": "Question Summary"
			},
			"newuser.area": {
				"Label": "Area"
			},
			"newuser.subarea": {
				"Label": "Sub Area"
			},
			"newuser.description": {
				"Label": "Description"
			},
			"newuser.g2": {
				"Label": "All of the survey questions grouped into Dimensions and compared to benchmarks"
			},
			"newuser.h1": {
				"Label": "Survey Dimensions"
			},
			"newuser.h2": {
				"Label": "Data mine the survey Dimension and questions and explore demographic differences"
			},
			"newuser.i1": {
				"Label": "Results Sorting Tool"
			},
			"newuser.j1": {
				"Label": "Internal Benchmark Tool"
			},
			"newuser.k1": {
				"Label": "Plot Your Results"
			},
			"newuser.l1": {
				"Label": "Demographic Highlighter"
			},
			"newuser.m1": {
				"Label": "Non-Standard Questions"
			},
			"newuser.i2": {
				"Label": "Sort, rank and filter Dimensions and questions compared to benchmarks"
			},
			"newuser.j2": {
				"Label": "Explore demographical results side by side to pin point significant differences"
			},
			"newuser.k2": {
				"Label": "Select two questions of your choice and plot the results for any demographic on a grid"
			},
			"newuser.l2": {
				"Label": "Choose a Dimension or question and pin point all the demographic groups that are significantly above or below average"
			},
			"newuser.m2": {
				"Label": "An area for any questions with a non-standard response scale (e.g. multiple choice scale, ranking scale)"
			},
			"newuser.step": {
				"Label": "Step"
			},
			"newuser.n0": {
				"Label": "Take Action"
			},
			"newuser.n1": {
				"Label": "Home"
			},
			"newuser.n2": {
				"Label": "Introduction to taking action and Engagement resources hub"
			},
			"newuser.o1": {
				"Label": "Create Plan"
			},
			"newuser.o2": {
				"Label": "Design and schedule your plan, access recommended actions"
			},
			"newuser.p1": {
				"Label": "Review Own Plan"
			},
			"newuser.p2": {
				"Label": "Record the progress of your plan and measure your success"
			},
			"newuser.q1": {
				"Label": "Review All Plans"
			},
			"newuser.q2": {
				"Label": "An overview of all plans for your part of the hierarchy"
			},
			"newuser.r1": {
				"Label": "Shared Plans"
			},
			"newuser.r2": {
				"Label": "Take inspiration from successful plans other managers chose to share"
			},
			"newuser.s1": {
				"Label": "Statistics"
			},
			"newuser.s2": {
				"Label": "View quantified user activity to explore action planning trends"
			},
			"summary": {
				"Id": "summary",
				"Title": "Your summary provides a starting point to exploring survey results. See how your results compare to the wider organization on key Dimensions the organization chose to highlight.",
				"Label": "Your summary provides a starting point to exploring survey results. See how your results compare to the wider organization on key Dimensions the organization chose to highlight."
			},
			"summary.SignificantlyAboveCompany": {
				"Label": "Your results are significantly above [COMPARATOR]"
			},
			"summary.SignificantlyBelowCompany": {
				"Label": "Your results are significantly below [COMPARATOR]"
			},
			"summary.SignificantlyEqualCompany": {
				"Label": "Your results are not significantly different to [COMPARATOR]"
			},
			"summary.ResponseRate": {
				"Label": "Response Rate"
			},
			"summary.CompanyOverall": {
				"Label": "Company Overall"
			},
			"summary.Result": {
				"Label": "Result"
			},
			"dashboard": {
				"Id": "dashboard",
				"Title": "",
				"Label": ""
			},
			"dashboard.dummy": {
				"Label": "Dummy Text"
			},
			"dashboard_footer": {
				"Id": "dashboard_footer",
				"Title": "",
				"Label": ""
			},
			"dashboard_footer.dummy": {
				"Label": "Dummy Text"
			},
			"widgets": {
				"Id": "widgets",
				"Title": "",
				"Label": ""
			},
			"widgets.RESPONSE_RATE": {
				"Label": "Response Rate"
			},
			"widgets.EE": {
				"Label": "Engagement and Enablement"
			},
			"widgets.TIER1": {
				"Label": "Tier 1 Dimensions"
			},
			"widgets.EFF_PROFILE": {
				"Label": "Effectiveness Profile"
			},
			"widgets.TOP_DIM": {
				"Label": "Top Dimensions"
			},
			"widgets.Q_TREND": {
				"Label": "Question Trend"
			},
			"widgets.INTERNAL_COMP": {
				"Label": "Internal Comparison"
			},
			"widgets.EXTERNAL_COMP": {
				"Label": "External Comparison"
			},
			"widgets.KEY_DRIVERS": {
				"Label": "Key Drivers"
			},
			"widgets.TOP_THEMES": {
				"Label": "Top Comment Themes: [QUESTION]"
			},
			"widgets.STRENGTHS": {
				"Label": "Strengths"
			},
			"widgets.OPPS": {
				"Label": "Opportunities"
			},
			"widgets.ENPS": {
				"Label": "Employee Net Promoter Score"
			},
			"widgets.ENPSSlideOverall": {
				"Label": "ENPS"
			},
			"widgets.ENPSSlideInternal1": {
				"Label": "ENPS vs Total Company"
			},
			"widgets.ENPSSlideInternal2": {
				"Label": "ENPS vs Level Up"
			},
			"widgets.ENPSSlideInternal3": {
				"Label": "ENPS vs Level Up 2"
			},
			"widgets.ENPSSlideInternal4": {
				"Label": "ENPS vs Level Up 2"
			},
			"widgets.ENPSSlideInternal5": {
				"Label": "ENPS vs Level Up 2"
			},
			"widgets.ENPSSlideTrend1": {
				"Label": "ENPS vs Trend 2014"
			},
			"widgets.ENPSSlideTrend2": {
				"Label": "ENPS vs Trend 2013"
			},
			"widgets.ENPSSlideTrend3": {
				"Label": "ENPS vs Trend 2012"
			},
			"widgets.Promoters": {
				"Label": "Promoters"
			},
			"widgets.Detractors": {
				"Label": "Detractors"
			},
			"widgets.Type": {
				"Label": "Type"
			},
			"widgets.Passives": {
				"Label": "Passives"
			},
			"widgets.ChangeSincePrevious": {
				"Label": "Change since previous survey"
			},
			"widgets.NumberImproved": {
				"Label": "Number of questions that improved significantly"
			},
			"widgets.NumberDeclined": {
				"Label": "Number of questions that declined significantly"
			},
			"widgets.ComparedtoNorm": {
				"Label": "Your results compared to [NORM] (Norm)"
			},
			"widgets.NumberAbove": {
				"Label": "Number of questions that are above significantly"
			},
			"widgets.NumberBelow": {
				"Label": "Number of questions that are below significantly"
			},
			"widgets.ComparedtoCompany": {
				"Label": "Your results compared to [COMPARATOR]"
			},
			"widgets.EngagementDrivers": {
				"Label": "Top Engagement Drivers"
			},
			"widgets.EnablementDrivers": {
				"Label": "Top Enablement Drivers"
			},
			"widgets.SignificantlyAboveCompany": {
				"Label": "Your results are significantly above the company overall"
			},
			"widgets.SignificantlyBelowCompany": {
				"Label": "Your results are significantly below the company overall"
			},
			"widgets.SignificantlyEqualCompany": {
				"Label": "Your results are not significantly different to the company overall"
			},
			"widgets.FavLabel": {
				"Label": "FAV"
			},
			"widgets.Comparedto": {
				"Label": "Your results compared to"
			},
			"widgets.CompletedRespondents": {
				"Label": "Completed Respondents"
			},
			"widgets.NoResponse": {
				"Label": "No Response"
			},
			"widgets.EEChartTitle": {
				"Label": "% ENGAGED                      % ENABLED"
			},
			"widgets.Tier1ChartTitle": {
				"Label": "TIER 1"
			},
			"widgets.Tier1SlideTitle": {
				"Label": "Title for Tier1 widget (configurable)"
			},
			"ee_overview": {
				"Id": "ee_overview",
				"Title": "ee_overview",
				"Label": "Below are your Engagement and Enablement results compared to various benchmarks. <ul spellcheck=\"-1\"><li spellcheck=\"-1\"><strong spellcheck=\"-1\">Engagement</strong> represents employees committed to the organisation and willing to apply discretionary effort in their work. </li><li spellcheck=\"-1\"><strong spellcheck=\"-1\">Enablement</strong> represents employees well matched to their role and who experience job conditions that support them to perform to their full potential. </li></ul>"
			},
			"ee_overview.Engagement": {
				"Label": "Engagement"
			},
			"ee_overview.Enablement": {
				"Label": "Enablement"
			},
			"key_drivers": {
				"Id": "key_drivers",
				"Title": "Key Drivers",
				"Label": "Key Drivers are dimensions and individual questions which have the strongest influence on how engaged and enabled people are. The more positive people are towards the key driver topics the more engaged and enabled they will feel. Negative views on the key drivers will lead to lower engagement and enablement. Improve motivation and help people to perform at their full potential by taking action on the key drivers."
			},
			"key_drivers.KEY_DRIVERS": {
				"Label": "Key Drivers"
			},
			"key_drivers.EngagementDrivers": {
				"Label": "Top Engagement Drivers"
			},
			"key_drivers.EnablementDrivers": {
				"Label": "Top Enablement Drivers"
			},
			"key_drivers.PreamblePPT": {
				"Label": "Key Drivers are Dimensions and individual questions which have the strongest influence on how engaged and enabled people are."
			},
			"ee_details": {
				"Id": "ee_details",
				"Title": "Below are the individual questions which together form the Engagement and Enablement Dimensions.",
				"Label": "Below are the individual questions which together form the Engagement and Enablement Dimensions."
			},
			"ee_details.dummy": {
				"Label": "Dummy Text"
			},
			"effectiveness_profile": {
				"Id": "effectiveness_profile",
				"Title": "Effectiveness Profile",
				"Label": "The Effectiveness Profile arranges people into four different groups based on levels of Engagement and Enablement and compares the size of these groups to Korn Ferry benchmarks. <p spellcheck=\"-1\">People are Most Effective when they are highly engaged and enabled. Most Effective people are likely to be more productive, able to deliver superior levels of service and are more inclined to speak positively about the organisation to others. </p><p spellcheck=\"-1\">Explore your report to see how effective people feel and how you can improve levels of effectiveness. </p>"
			},
			"effectiveness_profile.YourCurrentResults": {
				"Label": "Your Current Results"
			},
			"effectiveness_profile.Detached": {
				"Label": "Detached"
			},
			"effectiveness_profile.MostEffective": {
				"Label": "Most Effective"
			},
			"effectiveness_profile.LeastEffective": {
				"Label": "Least Effective"
			},
			"effectiveness_profile.Frustrated": {
				"Label": "Frustrated"
			},
			"effectiveness_profile.PriorResults": {
				"Label": "Trend 2015"
			},
			"effectiveness_profile.TotalCompany": {
				"Label": "Total Company"
			},
			"effectiveness_profile.Norm": {
				"Label": "(Norm)"
			},
			"effectiveness_profile.NA": {
				"Label": "N/A"
			},
			"effectiveness_profile.Engagement": {
				"Label": "Engagement"
			},
			"effectiveness_profile.Enablement": {
				"Label": "Enablement"
			},
			"effectiveness_profile.PercentDistribution": {
				"Label": "% Distribution"
			},
			"effectiveness_profile.DistributionChart": {
				"Label": "Distribution Chart"
			},
			"effectiveness_profile.Type": {
				"Label": "Type"
			},
			"effectiveness_profile.Item": {
				"Label": "Item"
			},
			"effectiveness_profile.DataFavorably": {
				"Label": "Data shows how favorably [COMPANY] employees responded"
			},
			"effectiveness_profile.PercentFavgap": {
				"Label": "% Fav gap"
			},
			"effectiveness_profile.CompareMOSTEFFECTIVEto": {
				"Label": "Compare MOST EFFECTIVE to:"
			},
			"effectiveness_profile.1": {
				"Label": "The Effectiveness Profile arranges people into four different groups based on levels of Engagement and Enablement and compares the size of these groups to Korn Ferry benchmarks."
			},
			"effectiveness_profile.PriorResults2": {
				"Label": "Trend 2014"
			},
			"effectiveness_profile.PriorResults3": {
				"Label": "Trend 2013"
			},
			"effectiveness_profile.Total": {
				"Label": "total"
			},
			"effectiveness_profile.Trend": {
				"Label": "Trend year"
			},
			"effectiveness_profile.Segmentation": {
				"Label": "segmentation"
			},
			"effectiveness_profile.HowTheyScored": {
				"Label": "How they scored in"
			},
			"effectiveness_profile_trend": {
				"Id": "effectiveness_profile_trend",
				"Title": "",
				"Label": ""
			},
			"effectiveness_profile_trend.Total": {
				"Label": "[N] total"
			},
			"effectiveness_profile_trend.Trend": {
				"Label": "Trend year:"
			},
			"effectiveness_profile_trend.Segmentation": {
				"Label": "[YEAR] segmentation"
			},
			"effectiveness_profile_trend.HowTheyScored": {
				"Label": "How they scored in [YEAR]"
			},
			"effectiveness_profile_trend.Year1Label": {
				"Label": ""
			},
			"effectiveness_profile_trend.Year2Label": {
				"Label": ""
			},
			"effectiveness_profile_trend.Year3Label": {
				"Label": ""
			},
			"questions_summary": {
				"Id": "questions_summary",
				"Title": "Top Comments",
				"Label": "The results for all survey dimensions and questions are shown below."
			},
			"questions_summary.dummy": {
				"Label": "Dummy Text"
			},
			"survey_dimensions": {
				"Id": "survey_dimensions",
				"Title": "Top Dimensions",
				"Label": "In this area you can explore survey dimensions in detail, zoom into questions within a dimension and apply demographic filters."
			},
			"items_details": {
				"Id": "items_details",
				"Title": "Top Dimensions",
				"Label": "In this area you can explore survey dimensions in detail, zoom into questions within a dimension and apply demographic filters."
			},
			"survey_dimensions.dummy": {
				"Label": "Dummy Text"
			},
			"top_dimensions_widget": {
				"Id": "top_dimensions_widget",
				"Title": "Top Dimensions",
				"Label": "Survey Dimensions show the average score for a set of questions relating to a common theme. <p spellcheck=\"-1\">The Top Dimensions chart shows the three most favorably scoring themes and represents the areas where people feel most positive, regardless of benchmarks. </p><p spellcheck=\"-1\">Explore your report in more detail to see the results for all Dimensions.</p>"
			},
			"top_dimensions_widget.dummy": {
				"Label": "Dummy Text"
			},
			"rst_questiontrend": {
				"Id": "rst_questiontrend",
				"Title": "Question Trend",
				"Label": "Question Trends show the change in opinion, across all comparable questions since the prior survey. <p spellcheck=\"-1\">The chart shows the number of questions where the % favorable score either improved or declined significantly. </p><p spellcheck=\"-1\">Explore your report in more detail to see how opinions have changed across all the survey questions.</p>"
			},
			"rst_questiontrend.dummy": {
				"Label": "Dummy Text"
			},
			"rst_internalcomparison": {
				"Id": "rst_internalcomparison",
				"Title": "Internal Comparison",
				"Label": "The Internal Comparison shows how results compare to the rest of the organization across all questions. The chart shows the number of questions where the percent favorable score is significantly above or below the wider organization. <p spellcheck=\"-1\">Explore your report in more detail to see how results compare to the wider organization across all survey questions.</p>"
			},
			"rst_internalcomparison.dummy": {
				"Label": "Dummy Text"
			},
			"rst_externalcomparison": {
				"Id": "rst_externalcomparison",
				"Title": "External Comparison",
				"Label": "The External Comparison shows how results compare to Korn Ferry external benchmarks. The chart shows the number of questions where the percent favorable score is significantly above or below external benchmarks. <p spellcheck=\"-1\">Explore your report in more detail to see how results compare to external benchmarks across all survey questions.</p>"
			},
			"rst_externalcomparison.dummy": {
				"Label": "Dummy Text"
			},
			"rst_opportunities": {
				"Id": "rst_opportunities",
				"Title": "Opportunities",
				"Label": "Opportunities were selected by analyzing which questions compare least positively to the wider organization, Korn Ferry benchmarks and in absolute terms. <p spellcheck=\"-1\">Consider ways to understand and act on opportunities that may be impacting performance.</p>"
			},
			"rst_opportunities.dummy": {
				"Label": "Dummy Text"
			},
			"rst_strengths": {
				"Id": "rst_strengths",
				"Title": "Strengths",
				"Label": "Strengths were selected by analyzing which questions compare most positively to the wider organization, Korn Ferry benchmarks and in absolute terms. <p spellcheck=\"-1\">Consider ways to reinforce and sustain your strengths.</p>"
			},
			"rst_strengths.SortBy": {
				"Label": "Sort By"
			},
			"plot_your_results": {
				"Id": "plot_your_results",
				"Title": "plot_your_results",
				"Label": "The plot your results tool allows you to combine the results of two different questions, apply any demographic filter and display the result on a quadrant. The tool can be used to explore the relationship between two topics. The most favorable results are displayed towards the upper right of the chart and the least favorable results towards the lower left of the chart."
			},
			"plot_your_results.Subtitle": {
				"Label": "[DATA] for Question [ITEM1] vs Question [ITEM2] broken out by [DEMO]"
			},
			"plot_your_results.Horizontal": {
				"Label": "Horizontal:"
			},
			"plot_your_results.Vertical": {
				"Label": "Vertical:"
			},
			"plot_your_results.QuestiononXaxis": {
				"Label": "Question on X axis:"
			},
			"plot_your_results.QuestiononYaxis": {
				"Label": "Question on Y axis:"
			},
			"plot_your_results.SubHeading": {
				"Label": "[DATA] for [BENCHMARK] by [DEMO]"
			},
			"plot_your_results.Question": {
				"Label": "Question"
			},
			"plot_your_results.Displaycomparatorsas": {
				"Label": "Display comparators as"
			},
			"demographic_highlighter": {
				"Id": "demographic_highlighter",
				"Title": "demographic_highlighter",
				"Label": "The demographic highlighter allows you to quickly identify which demographic codes are either significantly above or below the report average for any dimension or question. Alternatively the demographic highlighter can show significant differences to the total population (e.g. males in your report compared to males overall). Select the dimension or question you are interested in to get started."
			},
			"demographic_highlighter.QuestionSelected": {
				"Label": "Question Selected:"
			},
			"demographic_highlighter.DimensionSelected": {
				"Label": "Dimension Selected:"
			},
			"demographic_highlighter.PositiveDiff": {
				"Label": "Positive Differences to [BASIS]"
			},
			"demographic_highlighter.NegativeDiff": {
				"Label": "Negative Differences to [BASIS]"
			},
			"demographic_highlighter.Demo1": {
				"Label": "Demog 1: [DEMO]"
			},
			"demographic_highlighter.None": {
				"Label": "(None)"
			},
			"demographic_highlighter.SelectDemographic": {
				"Label": "Select Demographic:"
			},
			"demographic_highlighter.Basisforcomparison": {
				"Label": "Basis for comparison:"
			},
			"demographic_highlighter.SelectDimensionorQuestion": {
				"Label": "Select Dimension or Question:"
			},
			"nsq": {
				"Id": "nsq",
				"Title": "",
				"Label": ""
			},
			"nsq.TimesSelected": {
				"Label": "# of times selected as ..."
			},
			"nsq.Distribution": {
				"Label": "Distribution"
			},
			"pss2": {
				"Id": "pss2",
				"Title": "Partial PSS Output: Overall Progress: [PERCENT]",
				"Label": "Partial PSS Output: Overall Progress: [PERCENT]"
			},
			"pss2.ExtendedAnalysis": {
				"Label": "Variables for extended analysis:"
			},
			"pss2.PercentFav": {
				"Label": "Variables for %Fav:"
			},
			"dim_questions": {
				"Id": "dim_questions",
				"Title": "Question Summary:",
				"Label": "Question Summary:"
			},
			"dim_questions.dummy": {
				"Label": "Dummy Text"
			},
			"net_promoter": {
				"Id": "net_promoter",
				"Title": "Net Promoter",
				"Label": "<strong spellcheck=\"-1\">The Employee Net Promoter Score</strong> (ENPS) is based on the question: How likely is it that you would recommend our products / services to a friend or colleague? <p spellcheck=\"-1\">ENPS measures the percentage of people willing to actively promote the organization's products and services and compares this to those that are less likely or unwilling to. </p><p spellcheck=\"-1\">Use ENPS to understand how clear and confident people feel about the organization's products and services. Explore your report in more detail to see what leads to people being Promoters or Detractors.</p>"
			},
			"net_promoter.ENPSScale": {
				"Label": "ENPS Scale"
			},
			"net_promoter.ScaleImg": {
				"Label": "/isa/BDJPFRDMEYBPBKLVADAYFQCDAVIOEQJR/HayGroup/nps_scale.png"
			},
			"net_promoter.ENPSEquation": {
				"Label": "ENPS Equation"
			},
			"net_promoter.EqsImg": {
				"Label": "/isa/BDJPFRDMEYBPBKLVADAYFQCDAVIOEQJR/HayGroup/nps_formula.png"
			},
			"nps_scale": {
				"Id": "nps_scale",
				"Title": "",
				"Label": ""
			},
			"nps_scale.ENPSScale": {
				"Label": "ENPS Scale"
			},
			"nps_scale.ENPSEquation": {
				"Label": "ENPS Equation"
			},
			"nps_scale.ENPSScale_img": {
				"Label": "nps_scale.png"
			},
			"nps_scale.ENPSEquation_img": {
				"Label": "nps_formula.png"
			},
			"net_promoter_gap": {
				"Id": "net_promoter_gap",
				"Title": "The Gap Analysis Tool displays the differences in opinion between the three ENPS groups. Use the filters below to see how the views of people in the Detractor and Passives categories compare to people in the Promoter category.",
				"Label": "The Gap Analysis Tool displays the differences in opinion between the three ENPS groups. Use the filters below to see how the views of people in the Detractor and Passives categories compare to people in the Promoter category."
			},
			"net_promoter_gap.DataFavorably": {
				"Label": "Data shows how favorably [DATA] responded"
			},
			"net_promoter_gap.PercentFavgap": {
				"Label": "% Fav gap"
			},
			"net_promoter_gap.PercentFav": {
				"Label": "% Fav"
			},
			"net_promoter_gap.ComparePROMOTERSto": {
				"Label": "Compare PROMOTERS to:"
			},
			"net_promoter_gap.Show": {
				"Label": "Show:"
			},
			"response_rate": {
				"Id": "response_rate",
				"Title": "",
				"Label": ""
			},
			"response_rate.completed": {
				"Label": "Completed"
			},
			"response_rate.online": {
				"Label": "Online"
			},
			"response_rate.population": {
				"Label": "Population"
			},
			"response_rate.responserate": {
				"Label": "Response Rate"
			},
			"response_rate.paper": {
				"Label": "Paper"
			},
			"response_rate.total": {
				"Label": "Total"
			},
			"response_rate.completedrespondents": {
				"Label": "Completed Respondents"
			},
			"response_rate.noresponse": {
				"Label": "No Response"
			},
			"response_rate.respondentcount": {
				"Label": "Number of Respondents"
			},
			"response_rate.RespondentsbyDemo": {
				"Label": "Respondents by [DEMO]"
			},
			"response_rate.kiosk": {
				"Label": "Kiosk"
			},
			"respondents": {
				"Id": "respondents",
				"Title": "",
				"Label": ""
			},
			"respondents.main": {
				"Label": "The overall response rate for your area was [RESPONSE_RATE]."
			},
			"respondents.above": {
				"Label": "This was [DIFF] points above the company overall."
			},
			"respondents.below": {
				"Label": "This was [DIFF] points below the company overall."
			},
			"respondents.inline": {
				"Label": "This was in line with the company overall."
			},
			"respondents.trivial": {
				"Label": "The participation rate was too low to display."
			},
			"comments_widget": {
				"Id": "comments_widget",
				"Title": "Top Comments",
				"Label": "People were asked the following open-ended question: [INSERT QUESTION TEXT]. Their written feedback is grouped into themes. <p spellcheck=\"-1\">The chart shows the three most frequently mentioned themes.</p><p spellcheck=\"-1\">Explore your report in more detail to review the comments people made.</p>"
			},
			"comments_widget.dummy": {
				"Label": "Dummy Text"
			},
			"comments": {
				"Id": "comments",
				"Title": "comments",
				"Label": "Use the filters and options below to explore people's comments in different ways. The default view shows all available comments in your report. If you would like to focus on comments related to a particular theme use the Select Theme filter. The select opinion question filter allows you to isolate comments based on how favorable respondents were on a survey question of interest to you. Click the Excel icon at the top of the comments table to export comments into an Excel spreadsheet."
			},
			"comments.dummy": {
				"Label": "Dummy Text"
			},
			"ap_home": {
				"Id": "ap_home",
				"Title": "From insight to action",
				"Label": "The action planning resources in this area will help you prioritize and schedule actions that lead to positive people and performance outcomes. Below is a summary of the tools available to you:"
			},
			"ap_home.dummy": {
				"Label": "Dummy Text"
			},
			"ap_home_hub": {
				"Id": "ap_home_hub",
				"Title": "Engagement resources hub",
				"Label": "Access the latest employee engagement research and insights from Korn Ferry and beyond."
			},
			"ap_home_hub.1": {
				"Label": "The New Rules of Engagement"
			},
			"ap_home_hub.2": {
				"Label": "Leadership 2030"
			},
			"ap_home_hub.3": {
				"Label": "The Enemy of Engagement"
			},
			"ap_home_hub_url": {
				"Id": "ap_home_hub_url",
				"Title": "",
				"Label": ""
			},
			"ap_home_hub_url.1": {
				"Label": "https://focus.kornferry.com/thought-paper-the-new-rules-of-engagement/"
			},
			"ap_home_hub_url.2": {
				"Label": "https://focus.kornferry.com/leadership-2030/"
			},
			"ap_home_hub_url.3": {
				"Label": "https://www.kornferry.com/institute/the-enemies-of-engagement"
			},
			"ap_home_1": {
				"Id": "ap_home_1",
				"Title": "Home",
				"Label": ""
			},
			"ap_home_1.1": {
				"Label": "Introduction to taking action"
			},
			"ap_home_1.2": {
				"Label": "Engagement resources hub"
			},
			"ap_home_2": {
				"Id": "ap_home_2",
				"Title": "Create Plan",
				"Label": ""
			},
			"ap_home_2.1": {
				"Label": "Design and schedule your plan"
			},
			"ap_home_2.2": {
				"Label": "Access recommended actions"
			},
			"ap_home_3": {
				"Id": "ap_home_3",
				"Title": "Review Own Plans",
				"Label": ""
			},
			"ap_home_3.1": {
				"Label": "Record the progress of your plan"
			},
			"ap_home_3.2": {
				"Label": "Measure your success"
			},
			"ap_home_4": {
				"Id": "ap_home_4",
				"Title": "Review All Plans",
				"Label": ""
			},
			"ap_home_4.1": {
				"Label": "An overview of all plans for your part of the hierarchy"
			},
			"ap_home_5": {
				"Id": "ap_home_5",
				"Title": "Shared Plans",
				"Label": ""
			},
			"ap_home_5.1": {
				"Label": "Take inspiration from successful plans other managers chose to share"
			},
			"ap_home_6": {
				"Id": "ap_home_6",
				"Title": "Statistics",
				"Label": ""
			},
			"ap_home_6.1": {
				"Label": "View quantified user activity to explore action planning trends"
			},
			"ap_home_6.2": {
				"Label": "This areas is most relevant for managers of managers"
			},
			"ap_create": {
				"Id": "ap_create",
				"Title": "ap_create",
				"Label": "In this area select the topics that you will take action on. It is good practice to select no more than 2-3 actions in total. One of your actions should be to reinforce an existing strength. The remaining actions should relate to one of the opportunities shown below or a driver of Engagement or Enablement. You can also create an action for any other topic you have identified as a priority, using the list at the bottom of this page."
			},
			"ap_create.TopEngagementDrivers": {
				"Label": "Top Engagement Drivers"
			},
			"ap_create.SubTitle": {
				"Label": "Create Custom Plan Based on a Question"
			},
			"ap_create.TopEnablementDrivers": {
				"Label": "Top Enablement Drivers"
			},
			"ap_create.Opportunities": {
				"Label": "Opportunities"
			},
			"ap_create.Strengths": {
				"Label": "Strengths"
			},
			"ap_create.CustomPlan": {
				"Label": "Create Custom Plan Based on a Question"
			},
			"ap_review_own": {
				"Id": "ap_review_own",
				"Title": "In this area you can view and edit all of your own plans. Use the Edit function to update the status of your plan and record lessons learnt.",
				"Label": "In this area you can view and edit all of your own plans. Use the <span spellcheck=\"-1\" style=\"font-style: italic;\">Edit</span> function to update the status of your plan and record lessons learnt."
			},
			"ap_review_own.Plandetails": {
				"Label": "Plan details"
			},
			"ap_review_all": {
				"Id": "ap_review_all",
				"Title": "In this area you can view all of the plans created by the users below your branch of the hierarchy. Click on any of the plans below to see the plan in detail.",
				"Label": "In this area you can view all of the plans created by the users below your branch of the hierarchy. Click on any of the plans below to see the plan in detail."
			},
			"ap_review_all.Plandetails": {
				"Label": "Plan Details"
			},
			"ap_review_all.Additionalfilter": {
				"Label": "Additional filter:"
			},
			"ap_review_all.FIELD": {
				"Label": "FIELD"
			},
			"ap_review_all.VALUE": {
				"Label": "VALUE"
			},
			"ap_best_practice": {
				"Id": "ap_best_practice",
				"Title": "ap_best_practice",
				"Label": "Listed below are action plans that other managers chose to share. Use these shared plans to gain insight into how other managers approached a particular opportunity. You can filter shared plans by topic and also click on individual plans for the full details."
			},
			"ap_best_practice.Sharedplandetails": {
				"Label": "Shared plan details"
			},
			"ap_statistics": {
				"Id": "ap_statistics",
				"Title": "Statistics for the Take Action pages are listed below. Use the filters below to display the statistics you would like to see.",
				"Label": "Statistics for the Take Action pages are listed below. Use the filters below to display the statistics you would like to see."
			},
			"ap_statistics.Planned": {
				"Label": "Planned"
			},
			"ap_statistics.Delayed": {
				"Label": "Delayed"
			},
			"ap_statistics.Cancelled": {
				"Label": "Cancelled"
			},
			"ap_statistics.Overdue": {
				"Label": "Overdue"
			},
			"ap_statistics.Ongoing": {
				"Label": "Ongoing"
			},
			"ap_statistics.Completed": {
				"Label": "Completed"
			},
			"ap_statistics.BestPractice": {
				"Label": "Best Practice"
			},
			"ap_statistics.Datainrows": {
				"Label": "Data in rows:"
			},
			"ap_statistics.Breakby": {
				"Label": "Break by:"
			},
			"vu": {
				"Id": "vu",
				"Title": "",
				"Label": ""
			},
			"vu.virtual_unit": {
				"Label": "Virtual Unit:"
			},
			"vu.virtual_units": {
				"Label": "Included Units:"
			},
			"vu.temp_load_message": {
				"Label": "Loading Hierarchy..."
			},
			"vu.vu_name": {
				"Label": "Name:"
			},
			"vu.comma_separated_list": {
				"Label": "Comma separated list"
			},
			"vu.dd_n_selected_text": {
				"Label": "Selected"
			},
			"vu.dd_non_selected_text": {
				"Label": "Please pick the branches defining your virtual unit"
			},
			"vu.dd_search_text": {
				"Label": "Search"
			},
			"vu.dd_select_all_text": {
				"Label": "Check All"
			},
			"vu.dd_all_selected_text": {
				"Label": "All selected"
			},
			"vu.err1": {
				"Label": "You tried to combine [N] units. The maximum number of combination units is [THRESHOLD]. Only the first [THRESHOLD] units were saved."
			},
			"vu.err2": {
				"Label": "The following codes could not be found below the active node ([NODE]) and were not saved:'"
			},
			"vu.vu_create_error": {
				"Label": "Please complete the form."
			},
			"vu.vu_create_error_max": {
				"Label": "You've reached the limit."
			},
			"vu.vu_char_limit": {
				"Label": "Name is too long. Maximum [NAME_MAX_LENGTH] characters allowed."
			},
			"vu.vu_code_deficit": {
				"Label": "You need to provide at least [MINIMUM_N] unique codes."
			},
			"vu.vu_duplicate_label": {
				"Label": "Name is already used."
			},
			"vu.vu_placeholder": {
				"Label": "Without Label"
			},
			"vu.vu_treshold_text": {
				"Label": "You can create [N] more Virtual Units."
			},
			"vu.vu_previous_page": {
				"Label": "Previous Page"
			},
			"vu.vu_edit_title": {
				"Label": "Edit your Virtual Unit"
			},
			"vu.vu_create_title": {
				"Label": "Create New Virtual Unit"
			},
			"vu.vu_unit_number": {
				"Label": "Number of Units:"
			},
			"vu_preamble": {
				"Id": "vu_preamble",
				"Title": "Virtual Units  provide results of combination of indirect orgcodes (direct for direct Navigator). The VUs are user specific. Each user can have up to 50 VUs set up.​​",
				"Label": "Virtual Units  provide results of combination of indirect orgcodes (direct for direct Navigator). The VUs are user specific. Each user can have up to 50 VUs set up.​​"
			},
			"vu_preamble.dummy": {
				"Label": "Dummy Text"
			},
			"matrix": {
				"Id": "matrix",
				"Title": "Click on the 'Question Mark' in the top right hand corner for details on how the Matrix is created.",
				"Label": "Click on the 'Question Mark' in the top right hand corner for details on how the Matrix is created.<br spellcheck=\"-1\"/>"
			},
			"matrix.dummy": {
				"Label": "Dummy Text"
			},
			"exportsppt": {
				"Id": "exportsppt",
				"Title": "Click on the 'Question Mark' in the top right hand corner for details on PPT/PDF/Excel exports.",
				"Label": "Click on the 'Question Mark' in the top right hand corner for details on PPT/PDF/Excel exports.<br spellcheck=\"-1\"/>"
			},
			"exportsppt.dummy": {
				"Label": "Dummy Text"
			},
			"standard": {
				"Id": "standard",
				"Title": "Click on the 'Question Mark' in the top right hand corner for details on what is Standard vs Non-Standard",
				"Label": "Click on the 'Question Mark' in the top right hand corner for details on what is Standard vs Non-Standard<br spellcheck=\"-1\"/>"
			},
			"standard.dummy": {
				"Label": "Dummy Text"
			}
		}
	};
}

if ( data == null ) {
	data = {
		isTestData: true
	};
}


// Data object

// User
if (data.User == null) {

	var user = {
		FirstName: 'FirstName',
		LastName: 'LastName',
		Email: 'email',
		Roles: ['role1', 'role2']
	};

	data.User = user;
	data.User.IsTestData = true;
}

// Report
if ( data.Report == null ) {
	var report = {
		CurrentLanguage: '9', // English
		ReportBase: 'TestReportBaseId',
		IsTestData: true
	}

	data.Report = report;
}

// Comments

if ( data.Comments == null ) {
	var verbatims = [
		{"Comm1":"Those an equal point no years do. Depend warmth fat but her but played. Shy and subjects wondered trifling pleasant. Prudent cordial comfort do no on colonel as assured chicken. Smart mrs day which begin. Snug do sold mr it if such. ",
			"Comm1Theme":"Pay & Benefits"},
		{"Comm1":"Bringing so sociable felicity supplied mr. September suspicion far him two acuteness perfectly. Covered as an examine so regular of. Ye astonished friendship remarkably no. Window admire matter praise you bed whence. Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen yet blushes. Entire its the did figure wonder off. Agreed joy vanity regret met may ladies oppose who. Mile fail as left as hard eyes. Meet made call in mean four year it to. Prospect so branched wondered sensible of up. For gay consisted resolving pronounce sportsman saw discovery not. Northward or household as conveying we earnestly believing. No in up contrasted discretion inhabiting excellence. Entreaties we collecting unpleasant at everything conviction. Made last it seen went no just when of by. Occasional entreaties comparison me difficulty so themselves. At brother inquiry of offices without do my service. As particular to companions at sentiments. Weather however luckily enquire so certain do. Aware did stood was day under ask. Dearest affixed enquire on explain opinion he. Reached who the mrs joy offices pleased. Towards did colonel article any parties. So by colonel hearted ferrars. Draw from upon here gone add one. He in sportsman household otherwise it perceived instantly. Is inquiry no he several excited am. Called though excuse length ye needed it he having. Whatever throwing we on resolved entrance together graceful. Mrs assured add private married removed believe did she. Not far stuff she think the jokes. Going as by do known noise he wrote round leave. Warmly put branch people narrow see. Winding its waiting yet parlors married own feeling. Marry fruit do spite jokes an times. Whether at it unknown warrant herself winding if. Him same none name sake had post love. An busy feel form hand am up help. Parties it brother amongst an fortune of. Twenty behind wicket why age now itself ten. Full age sex set feel her told. Tastes giving in passed direct me valley as supply. End great stood boy noisy often way taken short. Rent the size our more door. Years no place abode in ﻿no child my. Man pianoforte too solicitude friendship devonshire ten ask. Course sooner its silent but formal she led. Extensive he assurance extremity at breakfast. Dear sure ye sold fine sell on. Projection at up connection literature insensible motionless projecting.","Comm1Theme":null},{"Comm1":"Comment about Resources","Comm1Theme":"Resources"},{"Comm1":"Comment about Collaboration","Comm1Theme":"Collaboration"},{"Comm1":"Comment about Development Opportunities","Comm1Theme":"Development Opportunities"},{"Comm1":"Comment about Confidence in Leaders","Comm1Theme":"Confidence in Leaders"},{"Comm1":"Comment about Clear & Promising Direction","Comm1Theme":"Clear & Promising Direction"},{"Comm1":"Comment about Collaboration","Comm1Theme":"Collaboration"},{"Comm1":"Comment about Employee Enablement","Comm1Theme":"Employee Enablement"},{"Comm1":"Comment about Authority & Empowerment","Comm1Theme":"Authority & Empowerment"},{"Comm1":"Comment about Collaboration","Comm1Theme":"Collaboration"},{"Comm1":"Comment about Quality & Customer Focus","Comm1Theme":"Quality & Customer Focus"},{"Comm1":"Comment about Resources","Comm1Theme":"Resources"},{"Comm1":"Comment about Confidence in Leaders","Comm1Theme":"Confidence in Leaders"},{"Comm1":"Comment about Respect & Recognition","Comm1Theme":"Respect & Recognition"},{"Comm1":"Comment about Clear & Promising Direction","Comm1Theme":"Clear & Promising Direction"},{"Comm1":"Comment about Training","Comm1Theme":"Training"},{"Comm1":"Comment about Resources","Comm1Theme":"Resources"},{"Comm1":"Comment about Pay & Benefits","Comm1Theme":"Pay & Benefits"},{"Comm1":"Comment about Quality & Customer Focus","Comm1Theme":"Quality & Customer Focus"},{"Comm1":"Comment about Employee Enablement","Comm1Theme":"Employee Enablement"},{"Comm1":"Comment about Employee Engagement","Comm1Theme":"Employee Engagement"},{"Comm1":"Comment about Collaboration","Comm1Theme":"Collaboration"},{"Comm1":"Comment about Respect & Recognition","Comm1Theme":"Respect & Recognition"},{"Comm1":"Comment about Collaboration","Comm1Theme":"Collaboration"},{"Comm1":"Comment about Development Opportunities","Comm1Theme":"Development Opportunities"},{"Comm1":"Comment about Employee Engagement","Comm1Theme":"Employee Engagement"},{"Comm1":"Comment about Pay & Benefits","Comm1Theme":"Pay & Benefits"},{"Comm1":"Comment about Authority & Empowerment","Comm1Theme":"Authority & Empowerment"},{"Comm1":"Comment about Confidence in Leaders","Comm1Theme":"Confidence in Leaders"},{"Comm1":"Comment about Performance Management","Comm1Theme":"Performance Management"},{"Comm1":"Comment about Employee Enablement","Comm1Theme":"Employee Enablement"},{"Comm1":"Comment about Confidence in Leaders","Comm1Theme":"Confidence in Leaders"},{"Comm1":"Comment about Respect & Recognition","Comm1Theme":"Respect & Recognition"},{"Comm1":"Comment about Employee Engagement","Comm1Theme":"Employee Engagement"},{"Comm1":"Comment about Employee Enablement","Comm1Theme":"Employee Enablement"},{"Comm1":"Comment about Training","Comm1Theme":"Training"},{"Comm1":"Comment about Development Opportunities","Comm1Theme":"Development Opportunities"},{"Comm1":"Comment about Quality & Customer Focus","Comm1Theme":"Quality & Customer Focus"},{"Comm1":"Comment about Pay & Benefits","Comm1Theme":"Pay & Benefits"},{"Comm1":"Comment about Quality & Customer Focus","Comm1Theme":"Quality & Customer Focus"},{"Comm1":"Comment about Employee Enablement","Comm1Theme":"Employee Enablement"},
		{"Comm1":"Comment about Collaboration","Comm1Theme":"Collaboration"},
		{"Comm1":"Comment about Work, Structure, & Process","Comm1Theme":"Work, Structure, & Process"},
		{"Comm1":"Comment about Training","Comm1Theme":"Training"}
	];

	data.Comments = {
		IsTestData: true,
		Verbatims: verbatims
	}
}

// Strengths
if ( data.Strengths == null ) {
	var strengths = [32, 7, 10, 22, 4, 11, 40, 24, 42, 48];
	var opportunities = [19, 72, 61, 62, 54, 79, 68, 67, 51, 55];

	data.Strengths = {
		Items: strengths
	};

	data.Opportunities = {
		Items: opportunities
	};

}

// Filters
if (data.Filters == null) {
	data.Filters = {
		Items: {
			"Gender":
				{
					"Label":"Gender",
					"Answers":
						[
							{"Code":"410","Label":"Male"},
							{"Code":"420","Label":"Female"},
							{"Code":"430","Label":"Other/non-binary"},
							{"Code":"440","Label":"Prefer not to say"}
						]
				},
			"Age":
				{
					"Label":"Age",
					"Answers":
						[
							{"Code":"651","Label":"Under 20"},
							{"Code":"652","Label":"20 to 29"},
							{"Code":"653","Label":"30 to 39"},
							{"Code":"654","Label":"40 to 49"},
							{"Code":"655","Label":"50 to 59"},
							{"Code":"656","Label":"Over 59"}
						]
				},
			"Tenure":
				{
					"Label":"Tenure",
					"Answers":
						[
							{"Code":"701","Label":"Less than 1 year"},
							{"Code":"702","Label":"1 year to less than 2 years"},
							{"Code":"703","Label":"2 years to less than 5 years"},
							{"Code":"704","Label":"5 years to less than 10 years"},
							{"Code":"705","Label":"10 years or more"}
						]
				},
			"UnionNon":
				{
					"Label":"Union/Non-Union",
					"Answers":
						[
							{"Code":"631","Label":"Union"},
							{"Code":"632","Label":"Non-Union"}
						]
				},
			"Wage_Status":
				{
					"Label":"Wage_Status",
					"Answers":
						[
							{"Code":"641","Label":"Hourly"},
							{"Code":"642","Label":"Salaried"}
						]
				}
		},
		"IsTestData":true};

	data.Filters.IsTestData = true;
}

// ENPS
if ( data.ENPS == null ) {
	data.ENPS = TestData_ENPS();
}

// EffectivenessByDemo
if ( data.EffectivenessByDemo == null) {
	data.EffectivenessByDemo = TestData_EffectivenessByDemo( State_Get('demo') );
}

// Items
if (data.Items == null) {
	var items = [{
		Id: 32,
		Label: "I believe I am paid fairly for the work I do.",
		N: 15792,
		Fav: 87,
		Neu: 10,
		Unfav: 2,
		vsTrend: "0",
		vsNorm: "38 *",
		vsHighPerformers: "33 *"
	},
		{
			Id: 10,
			Label: "There are enough people to do the work in my work group.",
			N: 15713,
			Fav: 83,
			Neu: 9,
			Unfav: 8,
			vsTrend: "-2 *",
			vsNorm: "35 *",
			vsHighPerformers: "31 *"
		},
		{
			Id: 42,
			Label: "I believe my pay is fair considering the pay of people doing similar work in other companies.",
			N: 15794,
			Fav: 74,
			Neu: 17,
			Unfav: 9,
			vsTrend: "-1",
			vsNorm: "31 *",
			vsHighPerformers: "26 *"
		},
		{
			Id: 7,
			Label: "I have opportunities to achieve my career goals at the company.",
			N: 15795,
			Fav: 87,
			Neu: 7,
			Unfav: 6,
			vsTrend: "-1 *",
			vsNorm: "31 *",
			vsHighPerformers: "24 *"
		},
		{
			Id: 11,
			Label: "My job leaves adequate time to take advantage of job-related training opportunities.",
			N: 15789,
			Fav: 79,
			Neu: 13,
			Unfav: 8,
			vsTrend: "0",
			vsNorm: "29 *",
			vsHighPerformers: "25 *"
		},
		{
			Id: 4,
			Label: "My work group receives high quality support from other parts of the company we depend on.",
			N: 15776,
			Fav: 80,
			Neu: 11,
			Unfav: 9,
			vsTrend: "-1 *",
			vsNorm: "28 *",
			vsHighPerformers: "20 *"
		},
		{
			Id: 22,
			Label: "The company provides training so that I can perform my present job well.",
			N: 15489,
			Fav: 85,
			Neu: 10,
			Unfav: 5,
			vsTrend: "0",
			vsNorm: "25 *",
			vsHighPerformers: "17 *"
		},
		{
			Id: 40,
			Label: "I have good opportunities for learning and development at the company.",
			N: 15601,
			Fav: 85,
			Neu: 13,
			Unfav: 2,
			vsTrend: "-1 *",
			vsNorm: "22 *",
			vsHighPerformers: "15 *"
		},
		{
			Id: 31,
			Label: "The company is open and honest in communications with employees.",
			N: 15561,
			Fav: 78,
			Neu: 14,
			Unfav: 8,
			vsTrend: "-1 *",
			vsNorm: "21 *",
			vsHighPerformers: "11 *"
		},
		{
			Id: 15,
			Label: "The company motivates me to do more than is required.",
			N: 15767,
			Fav: 77,
			Neu: 14,
			Unfav: 9,
			vsTrend: "-2 *",
			vsNorm: "20 *",
			vsHighPerformers: "12 *"
		},
		{
			Id: 24,
			Label: "I have opportunities to have my ideas adopted and put into use.",
			N: 15794,
			Fav: 86,
			Neu: 11,
			Unfav: 4,
			vsTrend: "1 *",
			vsNorm: "20 *",
			vsHighPerformers: "15 *"
		},
		{
			Id: 34,
			Label: "The work is well organized in my work group.",
			N: 15618,
			Fav: 84,
			Neu: 10,
			Unfav: 6,
			vsTrend: "1 *",
			vsNorm: "19 *",
			vsHighPerformers: "13 *"
		},
		{
			Id: 48,
			Label: "The company provides a high quality customer experience.",
			N: 15799,
			Fav: 86,
			Neu: 11,
			Unfav: 4,
			vsTrend: "-",
			vsNorm: "17 *",
			vsHighPerformers: "6 *"
		},
		{
			Id: 8,
			Label: "The company is effectively managed and well-run.",
			N: 15801,
			Fav: 73,
			Neu: 14,
			Unfav: 13,
			vsTrend: "0",
			vsNorm: "16 *",
			vsHighPerformers: "4 *"
		},
		{
			Id: 6,
			Label: "I receive clear and regular feedback on how well I do my work.",
			N: 15759,
			Fav: 74,
			Neu: 15,
			Unfav: 11,
			vsTrend: "-1",
			vsNorm: "15 *",
			vsHighPerformers: "7 *"
		},
		{
			Id: 19,
			Label: "I have trust and confidence in the company's senior leadership team.",
			N: 15613,
			Fav: 77,
			Neu: 13,
			Unfav: 10,
			vsTrend: "-1 *",
			vsNorm: "14 *",
			vsHighPerformers: "3 *"
		},
		{
			Id: 36,
			Label: "There are no significant barriers at work to doing my job well.",
			N: 15417,
			Fav: 72,
			Neu: 18,
			Unfav: 10,
			vsTrend: "0",
			vsNorm: "14 *",
			vsHighPerformers: "7 *"
		},
		{
			Id: 49,
			Label: "I would recommend the company as a good place to work.",
			N: 15758,
			Fav: 83,
			Neu: 12,
			Unfav: 5,
			vsTrend: "-",
			vsNorm: "14 *",
			vsHighPerformers: "5 *"
		},
		{
			Id: 46,
			Label: "The company provides employee benefits that meet my needs.",
			N: 15805,
			Fav: 77,
			Neu: 15,
			Unfav: 8,
			vsTrend: "-3 *",
			vsNorm: "13 *",
			vsHighPerformers: "6 *"
		},
		{
			Id: 1,
			Label: "I have the resources I need to do my job effectively.",
			N: 15792,
			Fav: 81,
			Neu: 11,
			Unfav: 9,
			vsTrend: "0",
			vsNorm: "12 *",
			vsHighPerformers: "6 *"
		},
		{
			Id: 44,
			Label: "I have the information I need to do my job well.",
			N: 15795,
			Fav: 83,
			Neu: 14,
			Unfav: 4,
			vsTrend: "0",
			vsNorm: "11 *",
			vsHighPerformers: "5 *"
		},
		{
			Id: 47,
			Label: "There is effective sharing of ideas and resources across the company.",
			N: 15804,
			Fav: 65,
			Neu: 17,
			Unfav: 18,
			vsTrend: "-4 *",
			vsNorm: "11 *",
			vsHighPerformers: "2 *"
		},
		{
			Id: 2,
			Label: "I have enough authority to do my job well.",
			N: 15785,
			Fav: 82,
			Neu: 9,
			Unfav: 9,
			vsTrend: "-2 *",
			vsNorm: "9 *",
			vsHighPerformers: "4 *"
		},
		{
			Id: 3,
			Label: "I receive recognition when I do a good job.",
			N: 15399,
			Fav: 72,
			Neu: 15,
			Unfav: 12,
			vsTrend: "0",
			vsNorm: "9 *",
			vsHighPerformers: "3 *"
		},
		{
			Id: 35,
			Label: "I am encouraged to come up with new or better ways of doing things.",
			N: 15608,
			Fav: 79,
			Neu: 17,
			Unfav: 4,
			vsTrend: "0",
			vsNorm: "9 *",
			vsHighPerformers: "4 *"
		},
		{
			Id: 30,
			Label: "There is a clear link between my performance and my compensation.",
			N: 15780,
			Fav: 53,
			Neu: 22,
			Unfav: 24,
			vsTrend: "-2 *",
			vsNorm: "8 *",
			vsHighPerformers: "-1 *"
		},
		{
			Id: 13,
			Label: "I believe that the company has the right strategic priorities and goals.",
			N: 15721,
			Fav: 73,
			Neu: 14,
			Unfav: 13,
			vsTrend: "-1",
			vsNorm: "6 *",
			vsHighPerformers: "-5 *"
		},
		{
			Id: 29,
			Label: "The company is innovative in how work is done (using new technologies or creative approaches to continuously improve).",
			N: 12893,
			Fav: 63,
			Neu: 21,
			Unfav: 16,
			vsTrend: "2 *",
			vsNorm: "5 *",
			vsHighPerformers: "-5 *"
		},
		{
			Id: 64,
			Label: "In the company, decisions are generally made at the lowest level appropriate.",
			N: 15685,
			Fav: 40,
			Neu: 20,
			Unfav: 40,
			vsTrend: "0",
			vsNorm: "2 *",
			vsHighPerformers: "-14 *"
		},
		{
			Id: 12,
			Label: "The company expects a high level of performance from its employees.",
			N: 15786,
			Fav: 85,
			Neu: 9,
			Unfav: 6,
			vsTrend: "0",
			vsNorm: "-2 *",
			vsHighPerformers: "-6 *"
		},
		{
			Id: 38,
			Label: "My immediate manager supports me in my learning and development.",
			N: 15801,
			Fav: 68,
			Neu: 20,
			Unfav: 12,
			vsTrend: "-1",
			vsNorm: "-2 *",
			vsHighPerformers: "-7 *"
		},
		{
			Id: 5,
			Label: "The company is customer focused (always seeking to understand and meet customer needs).",
			N: 15784,
			Fav: 74,
			Neu: 15,
			Unfav: 11,
			vsTrend: "-1",
			vsNorm: "-2 *",
			vsHighPerformers: "-9 *"
		},
		{
			Id: 50,
			Label: "New employees receive the training they need to do their jobs well.",
			N: 12944,
			Fav: 54,
			Neu: 24,
			Unfav: 22,
			vsTrend: "-7 *",
			vsNorm: "-4 *",
			vsHighPerformers: "-13 *"
		},
		{
			Id: 70,
			Label: "There is good communication between departments in the company.",
			N: 12989,
			Fav: 40,
			Neu: 20,
			Unfav: 41,
			vsTrend: "0",
			vsNorm: "-5 *",
			vsHighPerformers: "-17 *"
		},
		{
			Id: 63,
			Label: "In the company, decisions are generally made in a timely manner.",
			N: 12931,
			Fav: 40,
			Neu: 20,
			Unfav: 40,
			vsTrend: "0",
			vsNorm: "-6 *",
			vsHighPerformers: "-19 *"
		},
		{
			Id: 77,
			Label: "Poor performance is addressed effectively in the company.",
			N: 15721,
			Fav: 40,
			Neu: 20,
			Unfav: 40,
			vsTrend: "0",
			vsNorm: "-7 *",
			vsHighPerformers: "-17 *"
		},
		{
			Id: 14,
			Label: "I understand the results expected of me in my job.",
			N: 13036,
			Fav: 78,
			Neu: 14,
			Unfav: 8,
			vsTrend: "-1 *",
			vsNorm: "-9 *",
			vsHighPerformers: "-13 *"
		},
		{
			Id: 73,
			Label: "I have opportunities for advancement at the company.",
			N: 12997,
			Fav: 40,
			Neu: 20,
			Unfav: 39,
			vsTrend: "0",
			vsNorm: "-11 *",
			vsHighPerformers: "-19 *"
		},
		{
			Id: 69,
			Label: "There is good cooperation between departments in the company.",
			N: 13015,
			Fav: 40,
			Neu: 21,
			Unfav: 39,
			vsTrend: "0",
			vsNorm: "-12 *",
			vsHighPerformers: "-24 *"
		},
		{
			Id: 58,
			Label: "The company is effectively organized and structured.",
			N: 12933,
			Fav: 39,
			Neu: 20,
			Unfav: 40,
			vsTrend: "0",
			vsNorm: "-13 *",
			vsHighPerformers: "-26 *"
		},
		{
			Id: 75,
			Label: "Employee benefits provided by the company are competitive with benefits offered by other companies in our industry.",
			N: 15755,
			Fav: 41,
			Neu: 20,
			Unfav: 39,
			vsTrend: "1",
			vsNorm: "-13 *",
			vsHighPerformers: "-23 *"
		},
		{
			Id: 28,
			Label: "I am treated with respect as an individual.",
			N: 12968,
			Fav: 65,
			Neu: 19,
			Unfav: 16,
			vsTrend: "-3 *",
			vsNorm: "-14 *",
			vsHighPerformers: "-19 *"
		},
		{
			Id: 74,
			Label: "I have a good idea of the possible career paths available to me.",
			N: 12969,
			Fav: 40,
			Neu: 20,
			Unfav: 40,
			vsTrend: "0",
			vsNorm: "-15 *",
			vsHighPerformers: "-21 *"
		},
		{
			Id: 87,
			Label: "When changes are made where I work, communications are handled well.",
			N: 15712,
			Fav: 40,
			Neu: 20,
			Unfav: 40,
			vsTrend: "0",
			vsNorm: "-15 *",
			vsHighPerformers: "-26 *"
		},
		{
			Id: 16,
			Label: "The people in my work group are committed to delivering high quality products and services.",
			N: 15492,
			Fav: 66,
			Neu: 21,
			Unfav: 13,
			vsTrend: "-1",
			vsNorm: "-16 *",
			vsHighPerformers: "-20 *"
		},
		{
			Id: 26,
			Label: "I believe that the company will be successful over the next 2-3 years.",
			N: 13002,
			Fav: 54,
			Neu: 23,
			Unfav: 23,
			vsTrend: "-3 *",
			vsNorm: "-18 *",
			vsHighPerformers: "-29 *"
		},
		{
			Id: 71,
			Label: "The company is responding effectively to changes in the business environment.",
			N: 14191,
			Fav: 41,
			Neu: 20,
			Unfav: 39,
			vsTrend: "1",
			vsNorm: "-19 *",
			vsHighPerformers: "-33 *"
		},
		{
			Id: 41,
			Label: "There is good cooperation and teamwork within my work group.",
			N: 12922,
			Fav: 60,
			Neu: 30,
			Unfav: 10,
			vsTrend: "5 *",
			vsNorm: "-20 *",
			vsHighPerformers: "-22 *"
		},
		{
			Id: 66,
			Label: "The information from this survey will be used constructively by the company.",
			N: 12845,
			Fav: 40,
			Neu: 20,
			Unfav: 40,
			vsTrend: "0",
			vsNorm: "-21 *",
			vsHighPerformers: "-30 *"
		},
		{
			Id: 76,
			Label: "I have a good understanding of compensation policies and practices that affect me.",
			N: 13042,
			Fav: 40,
			Neu: 20,
			Unfav: 41,
			vsTrend: "1",
			vsNorm: "-21 *",
			vsHighPerformers: "-31 *"
		},
		{
			Id: 61,
			Label: "Conditions in my job allow me to be about as productive as I can be.",
			N: 12872,
			Fav: 40,
			Neu: 20,
			Unfav: 40,
			vsTrend: "1",
			vsNorm: "-22 *",
			vsHighPerformers: "-30 *"
		},
		{
			Id: 86,
			Label: "The amount of work expected of me is reasonable.",
			N: 12991,
			Fav: 41,
			Neu: 20,
			Unfav: 40,
			vsTrend: "1",
			vsNorm: "-22 *",
			vsHighPerformers: "-28 *"
		},
		{
			Id: 59,
			Label: "The company supports me in achieving a reasonable balance between my work life and my personal life.",
			N: 13000,
			Fav: 40,
			Neu: 21,
			Unfav: 40,
			vsTrend: "0",
			vsNorm: "-23 *",
			vsHighPerformers: "-29 *"
		},
		{
			Id: 78,
			Label: "The feedback I receive during the year helps me develop and improve.",
			N: 13024,
			Fav: 40,
			Neu: 20,
			Unfav: 40,
			vsTrend: "0",
			vsNorm: "-23 *",
			vsHighPerformers: "-33 *"
		},
		{
			Id: 60,
			Label: "The company shows care and concern for its employees.",
			N: 12877,
			Fav: 39,
			Neu: 20,
			Unfav: 41,
			vsTrend: "0",
			vsNorm: "-25 *",
			vsHighPerformers: "-35 *"
		},
		{
			Id: 85,
			Label: "My immediate manager coaches me to help improve my performance.",
			N: 13014,
			Fav: 40,
			Neu: 20,
			Unfav: 40,
			vsTrend: "0",
			vsNorm: "-26 *",
			vsHighPerformers: "-33 *"
		},
		{
			Id: 53,
			Label: "I feel motivated to do more than is required of me.",
			N: 12949,
			Fav: 40,
			Neu: 20,
			Unfav: 40,
			vsTrend: "-1",
			vsNorm: "-28 *",
			vsHighPerformers: "-34 *"
		},
		{
			Id: 80,
			Label: "We resolve customer problems quickly and effectively.",
			N: 12481,
			Fav: 40,
			Neu: 20,
			Unfav: 40,
			vsTrend: "1",
			vsNorm: "-31 *",
			vsHighPerformers: "-40 *"
		},
		{
			Id: 62,
			Label: "Given your choice, how long would you plan to continue working for the company?",
			N: 12926,
			Fav: 25,
			Neu: 25,
			Unfav: 50,
			vsTrend: "0",
			vsNorm: "-32 *",
			vsHighPerformers: "-40 *"
		},
		{
			Id: 82,
			Label: "Physical working conditions where I work are good.",
			N: 13012,
			Fav: 39,
			Neu: 20,
			Unfav: 40,
			vsTrend: "-1",
			vsNorm: "-33 *",
			vsHighPerformers: "-41 *"
		},
		{
			Id: 83,
			Label: "The company values and promotes employee diversity.",
			N: 12901,
			Fav: 39,
			Neu: 20,
			Unfav: 41,
			vsTrend: "0",
			vsNorm: "-33 *",
			vsHighPerformers: "-39 *"
		},
		{
			Id: 52,
			Label: "My job provides opportunities to do challenging and interesting work.",
			N: 13010,
			Fav: 40,
			Neu: 20,
			Unfav: 39,
			vsTrend: "-1",
			vsNorm: "-34 *",
			vsHighPerformers: "-38 *"
		},
		{
			Id: 57,
			Label: "My job makes good use of my skills and abilities.",
			N: 13045,
			Fav: 40,
			Neu: 20,
			Unfav: 40,
			vsTrend: "0",
			vsNorm: "-34 *",
			vsHighPerformers: "-38 *"
		},
		{
			Id: 55,
			Label: "I have a good understanding of the company's strategic priorities and goals.",
			N: 12941,
			Fav: 40,
			Neu: 20,
			Unfav: 40,
			vsTrend: "0",
			vsNorm: "-36 *",
			vsHighPerformers: "-41 *"
		},
		{
			Id: 65,
			Label: "I have trust and confidence in my immediate manager.",
			N: 12963,
			Fav: 41,
			Neu: 21,
			Unfav: 39,
			vsTrend: "1",
			vsNorm: "-36 *",
			vsHighPerformers: "-40 *"
		},
		{
			Id: 51,
			Label: "The company provides high quality products and services.",
			N: 13004,
			Fav: 40,
			Neu: 20,
			Unfav: 40,
			vsTrend: "0",
			vsNorm: "-37 *",
			vsHighPerformers: "-46 *"
		},
		{
			Id: 56,
			Label: "I feel proud to work for the company.",
			N: 13028,
			Fav: 40,
			Neu: 20,
			Unfav: 39,
			vsTrend: "0",
			vsNorm: "-37 *",
			vsHighPerformers: "-44 *"
		},
		{
			Id: 67,
			Label: "The company operates in an ethical manner.",
			N: 12939,
			Fav: 40,
			Neu: 19,
			Unfav: 40,
			vsTrend: "-1",
			vsNorm: "-39 *",
			vsHighPerformers: "-47 *"
		},
		{
			Id: 68,
			Label: "The company is socially responsible.",
			N: 12958,
			Fav: 40,
			Neu: 20,
			Unfav: 40,
			vsTrend: "0",
			vsNorm: "-39 *",
			vsHighPerformers: "-46 *"
		},
		{
			Id: 79,
			Label: "I would recommend the company's products or services to a friend.",
			N: 12971,
			Fav: 40,
			Neu: 20,
			Unfav: 40,
			vsTrend: "0",
			vsNorm: "-40 *",
			vsHighPerformers: "-48 *"
		},
		{
			Id: 54,
			Label: "I understand how my job contributes to the company's strategic priorities and goals.",
			N: 12918,
			Fav: 41,
			Neu: 20,
			Unfav: 39,
			vsTrend: "1",
			vsNorm: "-42 *",
			vsHighPerformers: "-47 *"
		},
		{
			Id: 81,
			Label: "My immediate manager is accessible when needed.",
			N: 13001,
			Fav: 40,
			Neu: 21,
			Unfav: 40,
			vsTrend: "0",
			vsNorm: "-43 *",
			vsHighPerformers: "-48 *"
		},
		{
			Id: 72,
			Label: "I have a good understanding of my work group's goals and objectives.",
			N: 12901,
			Fav: 40,
			Neu: 20,
			Unfav: 40,
			vsTrend: "0",
			vsNorm: "-45 *",
			vsHighPerformers: "-49 *"
		},
		{
			Id: 84,
			Label: "My work area is safe.",
			N: 13857,
			Fav: 39,
			Neu: 20,
			Unfav: 40,
			vsTrend: "-1",
			vsNorm: "-45 *",
			vsHighPerformers: "-48 *"
		},
		{
			Id: 95,
			Label: "Given your choice, how long would you plan to continue working for the company?",
			N: 13857,
			Fav: 35,
			Neu: 26,
			Unfav: 39,
			vsTrend: "-1",
			vsNorm: "-",
			vsHighPerformers: "-"
		}

	];

	data.Items = items;
	data.Items.IsTestData = true;
}

// Metrics

if(data.Metrics == null) {
	var metrics = [
		{
			DimensionId: 'DIM_ENG',
			Drivers: [
				{
					ItemId: '7',
					DimensionId: 'DIM_N54'
				},
				{
					ItemId: '55',
					DimensionId: 'DIM_N51'
				}
			],
			KeyMetric: 'Distribution.Fav',
			Comparators: ['External.IndustryBenchmark', 'External.HighPerformers'],
			ArrowComparator: 'Internal.trend2020',
			Icon: Resources_EngagementIcon(),
			Color: '#d30f1d', // red
			xBgColor: '#F0FFF0',
			BgColor: '#FFF',
		},
		{
			DimensionId: 'DIM_ENA',
			Drivers: [
				{
					ItemId: '7',
					DimensionId: 'DIM_N54'
				},
				{
					ItemId: '55',
					DimensionId: 'DIM_N51'
				}
			],
			KeyMetric: 'Distribution.Fav',
			Comparators: ['External.IndustryBenchmark', 'External.HighPerformers'],
			ArrowComparator: 'Internal.trend2020',
			Icon: Resources_EnablementIcon(),
			Color: '#d30f1d', // red
			xBgColor: '#FFF0F0',
			BgColor: '#FFF',
		},
		{
			DimensionId: 'DIM_N63',
			Drivers: [
				{
					ItemId: '7',
					DimensionId: 'DIM_N54'
				},
				{
					ItemId: '55',
					DimensionId: 'DIM_N51'
				}
			],
			KeyMetric: 'Distribution.Fav',
			Comparators: ['External.IndustryBenchmark', 'External.HighPerformers'],
			ArrowComparator: 'Internal.trend2020',
			Icon: Resources_EffectivenessIcon(),
			xBgColor: '#F0FFF0',
			BgColor: '#FFF',
			Color: '#77bc1f', //'#ff9300',
		}
	];

	data.Metrics = metrics;
}

// EffectivenessProfile
if ( data.EffectivenessProfile == null ) {

	var ep = {
		LeastEffective: 24,
		Detached: 9,
		Frustrated: 12,
		MostEffective: 55
	};

	data.EffectivenessProfile = ep;
	data.EffectivenessProfile.IsTestData = true;
}

if (data.Dimensions == null) {

	var dimensions = {
		'DIM_ENG': {
			N: 15792,
			Score: 85,
			Distribution: {
				Fav: 85,
				Neu: 10,
				Unfav: 5
			},
			Items: ['15', '49', '53', '56', '62']
		},
		'DIM_ENA': {
			N: 15792,
			Score: 85,
			Distribution: {
				Fav: 85,
				Neu: 10,
				Unfav: 5
			},
			Items: ['36', '52', '57', '61']
		},
		'DIM_N64': {
			N: 15792,
			Score: 85,
			Distribution: {
				Fav: 85,
				Neu: 10,
				Unfav: 5
			},
			Items: ['1', '10', '44', '81', '82']
		},
		'DIM_N50': {
			N: 15792,
			Score: 85,
			Distribution: {
				Fav: 85,
				Neu: 10,
				Unfav: 5
			},
			Items: ['2', '24', '35', '64']
		},
		'DIM_N65': {
			N: 15792,
			Score: 85,
			Distribution: {
				Fav: 85,
				Neu: 10,
				Unfav: 5
			},
			Items: ['3', '28', '59', '60', '83', '84']
		},
		'DIM_N52': {
			N: 15792,
			Score: 85,
			Distribution: {
				Fav: 85,
				Neu: 10,
				Unfav: 5
			},
			Items: ['4', '41', '47', '69', '70']
		},
		'DIM_N63': {
			N: 15792,
			Score: 85,
			Distribution: {
				Fav: 85,
				Neu: 10,
				Unfav: 5
			},
			Items: ['5', '16', '48', '51', '79', '80']
		},
		'DIM_N61': {
			N: 15792,
			Score: 85,
			Distribution: {
				Fav: 85,
				Neu: 10,
				Unfav: 5
			},
			Items: ['6', '12', '14', '30', '77', '78']
		},
		'DIM_N54': {
			N: 15792,
			Score: 85,
			Distribution: {
				Fav: 85,
				Neu: 10,
				Unfav: 5
			},
			Items: ['7', '38', '40', '73', '74']
		},
		'DIM_N53': {
			N: 15792,
			Score: 85,
			Distribution: {
				Fav: 85,
				Neu: 10,
				Unfav: 5
			},
			Items: ['8', '19', '31', '65', '66', '67', '68']
		},
		'DIM_N66': {
			N: 15792,
			Score: 85,
			Distribution: {
				Fav: 85,
				Neu: 10,
				Unfav: 5
			},
			Items: ['11', '22', '50', '85']
		},
		'DIM_N51': {
			N: 15792,
			Score: 85,
			Distribution: {
				Fav: 85,
				Neu: 10,
				Unfav: 5
			},
			Items: ['13', '26', '54', '55', '71', '72']
		},
		'DIM_N67': {
			N: 15792,
			Score: 85,
			Distribution: {
				Fav: 85,
				Neu: 10,
				Unfav: 5
			},
			Items: ['29', '34', '58', '63', '86', '87']
		},
		'DIM_N60': {
			N: 15792,
			Score: 85,
			Distribution: {
				Fav: 85,
				Neu: 10,
				Unfav: 5
			},
			Items: ['32', '42', '46', '75', '76']
		},
		'DIM_NPS': {
			N: 15792,
			Score: 85,
			Distribution: {
				Fav: 85,
				Neu: 10,
				Unfav: 5
			},
			Items: ['95']
		}

	};

	data.Dimensions = dimensions;
}

if (data.ItemsNew == null) {

	var itemsNew = {

		'32': {
			N: 15792,
			Distribution: {
				Fav: 87,
				Neu: 10,
				Unfav: 2
			}
		},
		'10': {
			N: 15713,
			Distribution: {
				Fav: 83,
				Neu: 9,
				Unfav: 8
			}
		},
		'42': {
			N: 15794,
			Distribution: {
				Fav: 74,
				Neu: 17,
				Unfav: 9
			}
		},
		'7': {
			N: 15795,
			Distribution: {
				Fav: 87,
				Neu: 7,
				Unfav: 6
			}
		},
		'11': {
			N: 15789,
			Distribution: {
				Fav: 79,
				Neu: 13,
				Unfav: 8
			}
		},
		'4': {
			N: 15776,
			Distribution: {
				Fav: 80,
				Neu: 11,
				Unfav: 9
			}
		},
		'22': {
			N: 15489,
			Distribution: {
				Fav: 85,
				Neu: 10,
				Unfav: 5
			}
		},
		'40': {
			N: 15601,
			Distribution: {
				Fav: 85,
				Neu: 13,
				Unfav: 2
			}
		},
		'31': {
			N: 15561,
			Distribution: {
				Fav: 78,
				Neu: 14,
				Unfav: 8
			}
		},
		'15': {
			N: 15767,
			Distribution: {
				Fav: 77,
				Neu: 14,
				Unfav: 9
			}
		},
		'24': {
			N: 15794,
			Distribution: {
				Fav: 86,
				Neu: 11,
				Unfav: 4
			}
		},
		'34': {
			N: 15618,
			Distribution: {
				Fav: 84,
				Neu: 10,
				Unfav: 6
			}
		},
		'48': {
			N: 15799,
			Distribution: {
				Fav: 86,
				Neu: 11,
				Unfav: 4
			}
		},
		'8': {
			N: 15801,
			Distribution: {
				Fav: 73,
				Neu: 14,
				Unfav: 13
			}
		},
		'6': {
			N: 15759,
			Distribution: {
				Fav: 74,
				Neu: 15,
				Unfav: 11
			}
		},
		'19': {
			N: 15613,
			Distribution: {
				Fav: 77,
				Neu: 13,
				Unfav: 10
			}
		},
		'36': {
			N: 15417,
			Distribution: {
				Fav: 72,
				Neu: 18,
				Unfav: 10
			}
		},
		'49': {
			N: 15758,
			Distribution: {
				Fav: 83,
				Neu: 12,
				Unfav: 5
			}
		},
		'46': {
			N: 15805,
			Distribution: {
				Fav: 77,
				Neu: 15,
				Unfav: 8
			}
		},
		'1': {
			N: 15792,
			Distribution: {
				Fav: 81,
				Neu: 11,
				Unfav: 9
			}
		},
		'44': {
			N: 15795,
			Distribution: {
				Fav: 83,
				Neu: 14,
				Unfav: 4
			}
		},
		'47': {
			N: 15804,
			Distribution: {
				Fav: 65,
				Neu: 17,
				Unfav: 18
			}
		},
		'2': {
			N: 15785,
			Distribution: {
				Fav: 82,
				Neu: 9,
				Unfav: 9
			}
		},
		'3': {
			N: 15399,
			Distribution: {
				Fav: 72,
				Neu: 15,
				Unfav: 12
			}
		},
		'35': {
			N: 15608,
			Distribution: {
				Fav: 79,
				Neu: 17,
				Unfav: 4
			}
		},
		'30': {
			N: 15780,
			Distribution: {
				Fav: 53,
				Neu: 22,
				Unfav: 24
			}
		},
		'13': {
			N: 15721,
			Distribution: {
				Fav: 73,
				Neu: 14,
				Unfav: 13
			}
		},
		'29': {
			N: 12893,
			Distribution: {
				Fav: 63,
				Neu: 21,
				Unfav: 16
			}
		},
		'64': {
			N: 15685,
			Distribution: {
				Fav: 40,
				Neu: 20,
				Unfav: 40
			}
		},
		'12': {
			N: 15786,
			Distribution: {
				Fav: 85,
				Neu: 9,
				Unfav: 6
			}
		},
		'38': {
			N: 15801,
			Distribution: {
				Fav: 68,
				Neu: 20,
				Unfav: 12
			}
		},
		'5': {
			N: 15784,
			Distribution: {
				Fav: 74,
				Neu: 15,
				Unfav: 11
			}
		},
		'50': {
			N: 12944,
			Distribution: {
				Fav: 54,
				Neu: 24,
				Unfav: 22
			}
		},
		'70': {
			N: 12989,
			Distribution: {
				Fav: 40,
				Neu: 20,
				Unfav: 41
			}
		},
		'63': {
			N: 12931,
			Distribution: {
				Fav: 40,
				Neu: 20,
				Unfav: 40
			}
		},
		'77': {
			N: 15721,
			Distribution: {
				Fav: 40,
				Neu: 20,
				Unfav: 40
			}
		},
		'14': {
			N: 13036,
			Distribution: {
				Fav: 78,
				Neu: 14,
				Unfav: 8
			}
		},
		'73': {
			N: 12997,
			Distribution: {
				Fav: 40,
				Neu: 20,
				Unfav: 39
			}
		},
		'69': {
			N: 13015,
			Distribution: {
				Fav: 40,
				Neu: 21,
				Unfav: 39
			}
		},
		'58': {
			N: 12933,
			Distribution: {
				Fav: 39,
				Neu: 20,
				Unfav: 40
			}
		},
		'75': {
			N: 15755,
			Distribution: {
				Fav: 41,
				Neu: 20,
				Unfav: 39
			}
		},
		'28': {
			N: 12968,
			Distribution: {
				Fav: 65,
				Neu: 19,
				Unfav: 16
			}
		},
		'74': {
			N: 12969,
			Distribution: {
				Fav: 40,
				Neu: 20,
				Unfav: 40
			}
		},
		'87': {
			N: 15712,
			Distribution: {
				Fav: 40,
				Neu: 20,
				Unfav: 40
			}
		},
		'16': {
			N: 15492,
			Distribution: {
				Fav: 66,
				Neu: 21,
				Unfav: 13
			}
		},
		'26': {
			N: 13002,
			Distribution: {
				Fav: 54,
				Neu: 23,
				Unfav: 23
			}
		},
		'71': {
			N: 14191,
			Distribution: {
				Fav: 41,
				Neu: 20,
				Unfav: 39
			}
		},
		'41': {
			N: 12922,
			Distribution: {
				Fav: 60,
				Neu: 30,
				Unfav: 10
			}
		},
		'66': {
			N: 12845,
			Distribution: {
				Fav: 40,
				Neu: 20,
				Unfav: 40
			}
		},
		'76': {
			N: 13042,
			Distribution: {
				Fav: 40,
				Neu: 20,
				Unfav: 41
			}
		},
		'61': {
			N: 12872,
			Distribution: {
				Fav: 40,
				Neu: 20,
				Unfav: 40
			}
		},
		'86': {
			N: 12991,
			Distribution: {
				Fav: 41,
				Neu: 20,
				Unfav: 40
			}
		},
		'59': {
			N: 13000,
			Distribution: {
				Fav: 40,
				Neu: 21,
				Unfav: 40
			}
		},
		'78': {
			N: 13024,
			Distribution: {
				Fav: 40,
				Neu: 20,
				Unfav: 40
			}
		},
		'60': {
			N: 12877,
			Distribution: {
				Fav: 39,
				Neu: 20,
				Unfav: 41
			}
		},
		'85': {
			N: 13014,
			Distribution: {
				Fav: 40,
				Neu: 20,
				Unfav: 40
			}
		},
		'53': {
			N: 12949,
			Distribution: {
				Fav: 40,
				Neu: 20,
				Unfav: 40
			}
		},
		'80': {
			N: 12481,
			Distribution: {
				Fav: 40,
				Neu: 20,
				Unfav: 40
			}
		},
		'62': {
			N: 12926,
			Distribution: {
				Fav: 25,
				Neu: 25,
				Unfav: 50
			}
		},
		'82': {
			N: 13012,
			Distribution: {
				Fav: 39,
				Neu: 20,
				Unfav: 40
			}
		},
		'83': {
			N: 12901,
			Distribution: {
				Fav: 39,
				Neu: 20,
				Unfav: 41
			}
		},
		'52': {
			N: 13010,
			Distribution: {
				Fav: 40,
				Neu: 20,
				Unfav: 39
			}
		},
		'57': {
			N: 13045,
			Distribution: {
				Fav: 40,
				Neu: 20,
				Unfav: 40
			}
		},
		'55': {
			N: 12941,
			Distribution: {
				Fav: 40,
				Neu: 20,
				Unfav: 40
			}
		},
		'65': {
			N: 12963,
			Distribution: {
				Fav: 41,
				Neu: 21,
				Unfav: 39
			}
		},
		'51': {
			N: 13004,
			Distribution: {
				Fav: 40,
				Neu: 20,
				Unfav: 40
			}
		},
		'56': {
			N: 13028,
			Distribution: {
				Fav: 40,
				Neu: 20,
				Unfav: 39
			}
		},
		'67': {
			N: 12939,
			Distribution: {
				Fav: 40,
				Neu: 19,
				Unfav: 40
			}
		},
		'68': {
			N: 12958,
			Distribution: {
				Fav: 40,
				Neu: 20,
				Unfav: 40
			}
		},
		'79': {
			N: 12971,
			Distribution: {
				Fav: 40,
				Neu: 20,
				Unfav: 40
			}
		},
		'54': {
			N: 12918,
			Distribution: {
				Fav: 41,
				Neu: 20,
				Unfav: 39
			}
		},
		'81': {
			N: 13001,
			Distribution: {
				Fav: 40,
				Neu: 21,
				Unfav: 40
			}
		},
		'72': {
			N: 12901,
			Distribution: {
				Fav: 40,
				Neu: 20,
				Unfav: 40
			}
		},
		'84': {
			N: 13857,
			Distribution: {
				Fav: 39,
				Neu: 20,
				Unfav: 40
			}
		},
		'95': {
			N: 13857,
			Distribution: {
				Fav: 35,
				Neu: 26,
				Unfav: 39
			}
		}
	};

	data.ItemsNew = itemsNew;
}

TestData_fillBreakByData();

if(data.Questions == null) {
	var questionsData = {
		'Hierarchy': {
			N: 12345,
			Options: {
				'1a': {
					N: 551
				},
				'1b': {
					N: 552
				},
				'1c': {
					N: 553
				}
			}
		},
		'Gender': {
			N: 12345,
			Options: {
				'410': {
					N: 555
				},
				'420': {
					N: 555
				},
				'430': {
					N: 555
				},
				'440': {
					N: 555
				}
			}
		},
		'Age': {
			N: 12345,
			Options: {
				'651': {
					N: 555
				},
				'652': {
					N: 555
				},
				'653': {
					N: 555
				},
				'654': {
					N: 555
				},
				'655': {
					N: 555
				},
				'656': {
					N: 555
				}
			}
		},
		'Tenure': {
			N: 12345,
			Options: {
				'701': {
					N: 555
				},
				'702': {
					N: 555
				},
				'703': {
					N: 555
				},
				'704': {
					N: 555
				},
				'705': {
					N: 555
				}
			}
		},
		'UnionNon': {
			N: 12345,
			Options: {
				'631': {
					N: 555
				},
				'632': {
					N: 555
				}
			}
		},
		'Wage_Status': {
			N: 12345,
			Options: {
				'641': {
					N: 555
				},
				'641': {
					N: 555
				}
			}
		}
	}

	data.Questions = questionsData;
}

if (data.NonStandardQuestions == null) {

	var NonStandardQuestions = {
		"NSQ1": {
			"1": {
				N: 1294,
				Pct: 18
			},
			"2": {
				N: 1394,
				Pct: 14
			},
			"3": {
				N: 1214,
				Pct: 24
			},
		},
		"NSQ2": {
			"1": {
				N: 1294,
				Pct: 18
			},
			"2": {
				N: 1394,
				Pct: 18
			},
			"3": {
				N: 1214,
				Pct: 24
			},
		},
		"NSQ3": {
			"1": {
				N: 1294,
				Pct: 18
			},
			"2": {
				N: 1394,
				Pct: 14
			},
			"3": {
				N: 1214,
				Pct: 24
			},
		},
	};

	data.NonStandardQuestions = NonStandardQuestions;
}