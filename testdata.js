function TestData_Hash() {
	return 'TEST';
}

function TestData_ENPS() {
	var testdata = {
		IsTestData: true,
		Distribution: {
			Promoters: Math.round(Math.random() * 1000),
			Detractors: Math.round(Math.random() * 500),
			Neutrals: Math.round(Math.random() * 500)
		},
		DimensionID: 'DIM_NPS'
	};

	return testdata;
}

function TestData_EffectivenessByDemo() {
	var breakByVariable = State_Get('breakby');

	if (!breakByVariable) {
		breakByVariable = ParamValues_BreakBy()[0].Code;
	}

	var testdata = {
		Demo: breakByVariable,
		Distribution: {
			LeastEffective: [],
			Detached: [],
			Frustrated: [],
			MostEffective: []
		}
	}

	if (breakByVariable != null && breakByVariable != '-1') {

		var breakByOptions = meta.Demographics[breakByVariable].Options;

		for (var i in breakByOptions) {
			testdata.Distribution.LeastEffective.push(parseInt(Math.random() * 100));
			testdata.Distribution.Detached.push(parseInt(Math.random() * 100));
			testdata.Distribution.Frustrated.push(parseInt(Math.random() * 100));
			testdata.Distribution.MostEffective.push(parseInt(Math.random() * 100));
		}
	}

	return testdata;
}

function TestData_getBreakByData(breakByVariable) {
	var breakByData = {};
	breakByData.Variable = breakByVariable;
	breakByData.Options = {};

	var breakByOptions = meta.Demographics[breakByVariable].Options;

	for (var i in breakByOptions) {
		var rnd = Math.floor(Math.random() * 10);
		var rnd2 = Math.floor(Math.random() * 2);
		var tmpBreakByData = {
			N: 15792 + rnd,
			Distribution: {
				Fav: 87 + rnd,
				Neu: 10 - rnd,
				Unfav: 2
			},
			get NPS() {
				return this.Distribution.Fav - this.Distribution.Unfav
			},
			vsTotal: {
				Fav: String(5 - rnd) + (rnd2 ? '' : ' *'),
				Neu: String(10 - rnd),
				Unfav: String(0 - rnd) + (rnd2 ? '' : ' *')
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

	for (var i in data.Items) {
		var testBreakByData = TestData_getBreakByData(breakByVariable);
		data.Items[i].BreakBy = testBreakByData;
	}
	for (var i in data.Dimensions) {
		var testBreakByData = TestData_getBreakByData(breakByVariable);
		data.Dimensions[i].BreakBy = testBreakByData;
	}
}

function TestData_getComparatorsData(comparators) {
	var comparatorsData = {};

	for (var i = 0; i < comparators.length; i++) {
		var rnd = Math.floor(Math.random() * 10);
		var rnd2 = Math.floor(Math.random() * 2);
		var rnd3 = Math.floor(Math.random() * 2);
		var tmpComparatorsData = {
			Label: meta.Comparators[comparators[i]].Label,
			Value: (rnd2 ? '' : '-') + (25 + rnd) + (rnd3 ? '' : ' *'),
			Distribution: {
				Fav: rnd + 60,
				Neu: rnd,
				Unfav: rnd - 5
			},
			get NPS() {
				return this.Distribution.Fav - this.Distribution.Unfav
			},
		}
		comparatorsData[comparators[i]] = tmpComparatorsData;
	}

	return comparatorsData;
}

function TestData_getComparatorsDataForEffectivenessProfile(comparators) {
	var comparatorsData = {};

	for (var i = 0; i < comparators.length; i++) {
		var tmpComparatorsData = {
			LeastEffective: (parseInt(Math.random() * 100)),
			Detached: (parseInt(Math.random() * 100)),
			Frustrated: (parseInt(Math.random() * 100)),
			MostEffective: (parseInt(Math.random() * 100))
		}
		comparatorsData[comparators[i]] = tmpComparatorsData;
	}

	return comparatorsData;
}

function TestData_fillComparatorsData() {
	var comparators = State_Get('comparators');

	var comparatorsExtended = [];
	for (var i in meta.Comparators) {
		if ((!!comparators && comparators.some(el => el == i)) || (config.comparators.some(el => el == i)))
			comparatorsExtended.push(i);
	}
	if (comparatorsExtended.length == 0) return;

	for (var i in data.Items) {
		var testComparatorsData = TestData_getComparatorsData(comparatorsExtended);
		data.Items[i].Comparators = testComparatorsData;
		for (var j in data.Items[i].BreakBy.Options) {
			data.Items[i].BreakBy.Options[j].Comparators = testComparatorsData;
		}
	}

	for (var i in data.Dimensions) {
		var testComparatorsData = TestData_getComparatorsData(comparatorsExtended);
		data.Dimensions[i].Comparators = testComparatorsData;
		for (var j in data.Dimensions[i].BreakBy.Options) {
			data.Dimensions[i].BreakBy.Options[j].Comparators = testComparatorsData;
		}
	}

	data.EffectivenessProfile.Comparators = TestData_getComparatorsDataForEffectivenessProfile(comparators);
}

function TestData_fillCommentCategoriesData() {
	var catData = {};
	for (var i in meta.CommentCategories) {
		var catList = meta.CommentCategories[i];
		var catListData = {};
		for (var j in catList) {
			var rnd = Math.floor(Math.random() * 30);
			var commData = {
				N: rnd + 100,
				Pct: rnd
			};
			catListData[j] = commData;
		}
		catData[i] = catListData;
	}
	return catData;
}

// Meta: Menu, Page Text Labels, etc

if (meta == null) {

	meta = {

		ReportName: "Test Report",

		ClientName: "Company X",

		VisiblePages: ["Intro","Home","Slideshow","GroupHeadlines","KeyMetrics","KeyDrivers","StrengthsAndOpportunities","EffectivenessProfile","EffectivenessProfileBreakdown","GroupExplore","AllResults","ResultsBreakdown","DemographicHeatmap","DemographicHighlighter","NonStandardQuestions","GroupComments","CommentsThemes","OpenComments","GroupEnps","ENPSScore","ENPSBreakdown","GroupResponse","ResponseRates","GroupActions","ActionsFocusAreas","ActionsOwnPlans","ActionsAllPlans","ActionsSharedPlans","ActionsStatistics","Filters","LogOut"],

		Menu: Menu(),

		FunFacts: [
			{
				Title: "Combine the power of both",
				Text: "You can improve performance through better engagement or better enablement alone. But for truly impressive results, you need to combine them. Research shows that your people who are both highly engaged and highly enabled will be 50% more likely to perform better than you expect and 54% less likely to cost you money by leaving your organization."
			},
	
			{
				Title: "Motivation on its own is not enough",
				Text: "When people feel motivated, they perform better. But even the most highly motivated employee will lose faith if they don't feel enabled to do their jobs. That's why we don't just measure how motivated and committed your people are (engagement). We also measure whether they're in the right roles and working in a supportive environment (enablement)."
			},
	
			{
				Title: "Make the most of feedback sessions",
				Text: "<li>Be prepared - Where results are negative, but there is little you can do as a manager to improve things, be ready to explain why and refocus on things within your team's control<li>Know your audience - share handouts, posters, or slides"
			},
	
			{
				Title: "Make the most of feedback sessions",
				Text: "<li>Do not take the results personally - keep people reassured about confidentiality<li>Ask open questions - Does anyone else experience this? What is it that makes you feel that?"
			},
	
			{
				Title: "Make the most of feedback sessions",
				Text: "<li>Celebrate your successes - Do not just discuss lower scoring questions, remember to focus as much attention on the positive results<li>Write down team feedback - it can be a good idea to write the notes on a flipchart to stay open and transparent, you can ask someone to help you with this"
			},
	
			{
				Title: "Drive effective change through your results",
				Text:  "<li>Be realistic, focus on 2-3 areas of action only to increase your chances of success<li>Do not overlook strengths - sometimes a good action plan can be about maintaining a strong score"
			},
	
			{
				Title: "Drive effective change through your results",
				Text: "<li>Focus on high priority areas that are within your control<li>Make sure the actions address the root cause - think about the reasons why this issue has come about"
			},
	
			{
				Title: "The positive impact of taking action",
				Text: "Organizations rated the highest by employees for acting on survey feedback outperform others on financial performance."
			}
		],

		Pages: {
			"KeyMetrics": {
				"Title": "Key Metrics",
				"Label": `
					<p>These metrics are what drive success in your organisation.</p>
					<p>Engagement measures commitment to the company, and extra effort employees are willing to put in for the good of the organisation.</p>
					<p>Enablement measures the extent to which employee skills and abilities are fully utilised and the support received in getting work done.</p>
					<p>The cards show your team performance on these metrics. Click on the cards to flip them and find out which topics have the biggest impact.</p>
					`
			},
			"KeyDrivers": {
				"Title": "Key Drivers",
				"Label": `
					<p>Key Driver Analysis determines which question items within survey questionnaire most strongly influence or predict Employee Engagement and Employee Enablement.</p>
					<p>Using key driver analysis, we can help answer the question: “Where should I focus attention first in order to have the best chance of improving engagement and enablement?”</p>
					<p>Results can give you an alternative lens for understanding the culture of your organisation and can be used to drive targeted Action Planning process.</p>
					`
			},
			"StrengthsAndOpportunities": {
				"Title": "Strengths & Opportunities",
				"Label": `
					<p>This page helps you focus on the most important results for your work group.</p>
					<p>Questions are categorised as 'strengths' and 'opportunities' based on an algorithm combining a number of factors, such as the percentage favourable, percentage unfavourable and how those scores compare to other internal groups and external benchmarks.</p>
					`
			},
			"EffectivenessProfile": {
				"Title": "Effectiveness Profile",
				"Label": `
					<p>The effectiveness profile is designed to guide targeted action efforts.</p>
					<p>The Effectiveness profile clusters employees into four distinct segments, based on relative levels of Engagement and Enablement in comparison to Korn Ferry’s global benchmark.</p>
					<p>Leaders seeking to improve the effectiveness of their teams need to determine whether performance issues are the result of a lack of engagement, a lack of enablement, or both.</p>
					<p>Click on the chart to understand how your team compares to the rest of the organization and Korn Ferry benchmarks.</p>
					`
			},
			"EffectivenessProfileBreakdown": {
				"Title": "Effectiveness Profile Breakdown",
				"Label": `
					<p>The breakdown page allows you to view how the effectiveness profile varies by different employee groups.</p>
					<p>The <b>break by</b> drop down enables the selection of the demographic of most interest to you.</p>
					<p>Use the column headers to rank employees by their effectiveness level and better understand groups where action is most needed.</p>
					`
			},
			"AllResults": {
				"Title": "All Results",
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
			"ResultsBreakdown": {
				"Title": "Results Breakdown",
				"Label": `
					<p>Use this page to focus on one dimension or question and review differences by demographic and organisational groups.</p>
					<p>Select the dimension or question you want to view then select the demographic or organisational group to get a better understanding of differences. The data can be sorted by any of the columns.</p>
					`
			},
			"DemographicHeatmap": {
				"Title": "Heatmap",
				"Label": `
					<p>Use the Heatmap to identify differences across demographic and organisational groups, and quickly understand which groups show best practice or require most focus.</p>
					<p>First, select whether you want to review all dimensions, all questions or all questions within dimensions. Select a demographic or organisational group to compare against your base population.</p>
					<p>Results will show percent favourable scores for the base group and you can toggle to show favourable scores or percentage-point differences in favourability for the comparison groups. Statistically significant differences are highlighted to help you understand whether differences are meaningful.</p>
					`
			},
			"DemographicHighlighter": {
				"Title": "Demographic Highlighter",
				"Label": `
					<p>This page enables you to identify important variations in employee experience by looking at significant differences in the way demographic groups have answered questions.</p>
					<p>Use the drop-down functions to select the demographic group and dimension / questions for which you would like to display results. Demographic groups that are significantly above or below average for the chosen dimensions or question will be displayed.</p>				
					`
			},
			"NonStandardQuestions": {
				"Title": "Non-Standard Questions",
				"Label": `
					<p>This page shows results to questions that do not use the standard 5-point response scale measuring favourability.</p>
					<p>Select a question from the dropdown to view the distribution of results.</p>
					`
			},
			"CommentsThemes": {
				"Title": "Comment Themes",
				"Label": `
					<p>Comments provide helpful context in understanding your survey results and can be an additional source of action planning ideas. To make the best use of your comments in your interpretation and action planning, review your survey scores first and then your group's comments.</p>
					<p>This chart ranks comment themes in order of selection by the respondents. Select the question that you want to review.</p>
					<p>Consider the topics that are of most interest based on your results so far and then explore the verbatims further.</p>
					`
			},
			"OpenComments": {
				"Title": "Open Comments",
				"Label": `
					<p>Comments provide helpful context in understanding your survey results and can be an additional source of action planning ideas. To make the best use of your comments in your interpretation and action planning, review your survey scores first and then your group's comments.</p>
					<p>Select the comment question, then you can focus on a specific theme or even search for a specific term. The filter options allow you to highlight specific demographic groups.</p>
					<p>Export the comments to share them with others.</p>				
					`
			},
			"ENPSScore": {
				"Title": "ENPS Score",
				"Label": `
					<p>Use your Employee Net Promoter Score (ENPS) as a key measure of your employees' overall perception of your organisation. ENPS provides an anchor for your employee experience management.</p>
					<p>A positive score means you have a higher proportion of employees that are strong advocates of the organization, whereas a negative score suggests you need to dig deeper to understand why people are less likely to recommend the organization as a place to work.</p>
					<p>Flip the card to understand more about the scoring methodology.</p>
					`
			},
			"ENPSBreakdown": {
				"Title": "ENPS Breakdown",
				"Label": `
					<p>Use the ENPS Break By to identify differences across demographic and organisational groups, and quickly understand best practice areas and where action is most needed.</p>
					<p>Select the different demographics from the dropdown at the top of the page and focus on groups that include high volume of either promoters or detractors.</p>
					`
			},		
			"ResponseRates": {
				"Title": "Response Rates",
				"Label": `
					<p>A Response Rate of 90% or above is considered good.</p>
					`
			},
			"ActionsFocusAreas": {
				"Title": "Areas to focus",
				"Label": `
					<p>Focus just on one or two actions at the time.</p>
					<p>Some additional text can be here describing why it is important.</p>
				`
			},
			"ActionsOwnPlans": { "Label": "Own Plans" },
			"ActionsAllPlans": { "Label": "All Plans" },
			"ActionsSharedPlans": { "Label": "Shared Plans" },
			"ActionsStatistics": { "Label": "Statistics" },	
		},
		Items: {
			"RE01": {
				"Label": "I have the resources I need to do my job effectively.",
				"RecommendedActions": []
			},
			"DM02": {
				"Label": "I have enough authority to do my job well.",
				"RecommendedActions": []
			},
			"RC01": {
				"Label": "I receive recognition when I do a good job.",
				"RecommendedActions": []
			},
			"TW06": {
				"Label": "My work group receives high quality support from other parts of the company we depend on.",
				"RecommendedActions": []
			},
			"QS01": {
				"Label": "The company is customer focused (always seeking to understand and meet customer needs).",
				"RecommendedActions": []
			},
			"PE09": {
				"Label": "I receive clear and regular feedback on how well I do my work.",
				"RecommendedActions": []
			},
			"AV15": {
				"Label": "I have opportunities to achieve my career goals at the company.",
				"RecommendedActions": []
			},
			"LD04": {
				"Label": "The company is effectively managed and well-run.",
				"RecommendedActions": []
			},
			"WS03": {
				"Label": "There are enough people to do the work in my work group.",
				"RecommendedActions": []
			},
			"TR09": {
				"Label": "My job leaves adequate time to take advantage of job-related training opportunities.",
				"RecommendedActions": []
			},
			"PE06": {
				"Label": "The company expects a high level of performance from its employees.",
				"RecommendedActions": []
			},
			"SD04": {
				"Label": "I believe that the company has the right strategic priorities and goals.",
				"RecommendedActions": []
			},
			"PE03": {
				"Label": "I understand the results expected of me in my job.",
				"RecommendedActions": []
			},
			"OM12": {
				"Label": "The company motivates me to do more than is required.",
				"RecommendedActions": []
			},
			"QS16": {
				"Label": "The people in my work group are committed to delivering high quality products and services.",
				"RecommendedActions": []
			},
			"LD09": {
				"Label": "I have trust and confidence in the company's senior leadership team.",
				"RecommendedActions": []
			},
			"TR01": {
				"Label": "The company provides training so that I can perform my present job well.",
				"RecommendedActions": []
			},
			"VC04": {
				"Label": "I have opportunities to have my ideas adopted and put into use.",
				"RecommendedActions": []
			},
			"GP07": {
				"Label": "I believe that the company will be successful over the next 2-3 years.",
				"RecommendedActions": []
			},
			"ER01": {
				"Label": "I am treated with respect as an individual.",
				"RecommendedActions": []
			},
			"IV02": {
				"Label": "The company is innovative in how work is done (using new technologies or creative approaches to continuously improve).",
				"RecommendedActions": []
			},
			"CP14": {
				"Label": "There is a clear link between my performance and my compensation.",
				"RecommendedActions": []
			},
			"GP12": {
				"Label": "The company is open and honest in communications with employees.",
				"RecommendedActions": []
			},
			"CP11": {
				"Label": "I believe I am paid fairly for the work I do.",
				"RecommendedActions": []
			},
			"WE01": {
				"Label": "The work is well organized in my work group.",
				"RecommendedActions": []
			},
			"IV04": {
				"Label": "I am encouraged to come up with new or better ways of doing things.",
				"RecommendedActions": []
			},
			"WE12": {
				"Label": "There are no significant barriers at work to doing my job well.",
				"RecommendedActions": []
			},
			"SP12": {
				"Label": "My immediate manager supports me in my learning and development.",
				"RecommendedActions": []
			},
			"AV09": {
				"Label": "I have good opportunities for learning and development at the company.",
				"RecommendedActions": []
			},
			"TW04": {
				"Label": "There is good cooperation and teamwork within my work group.",
				"RecommendedActions": []
			},
			"CP12": {
				"Label": "I believe my pay is fair considering the pay of people doing similar work in other companies.",
				"RecommendedActions": []
			},
			"DC11": {
				"Label": "I have the information I need to do my job well.",
				"RecommendedActions": []
			},
			"BN01": {
				"Label": "The company provides employee benefits that meet my needs.",
				"RecommendedActions": []
			},
			"GP09": {
				"Label": "There is effective sharing of ideas and resources across the company.",
				"RecommendedActions": []
			},
			"QS03": {
				"Label": "The company provides a high quality customer experience.",
				"RecommendedActions": []
			},
			"OM01": {
				"Label": "I would recommend the company as a good place to work.",
				"RecommendedActions": []
			},
			"TR04": {
				"Label": "New employees receive the training they need to do their jobs well.",
				"RecommendedActions": []
			},
			"QS02": {
				"Label": "The company provides high quality products and services.",
				"RecommendedActions": []
			},
			"JS05": {
				"Label": "My job provides opportunities to do challenging and interesting work.",
				"RecommendedActions": []
			},
			"OM11": {
				"Label": "I feel motivated to do more than is required of me.",
				"RecommendedActions": []
			},
			"SD05": {
				"Label": "I understand how my job contributes to the company's strategic priorities and goals.",
				"RecommendedActions": []
			},
			"SD03": {
				"Label": "I have a good understanding of the company's strategic priorities and goals.",
				"RecommendedActions": []
			},
			"OS02": {
				"Label": "I feel proud to work for the company.",
				"RecommendedActions": []
			},
			"JS02": {
				"Label": "My job makes good use of my skills and abilities.",
				"RecommendedActions": []
			},
			"ST01": {
				"Label": "The company is effectively organized and structured.",
				"RecommendedActions": []
			},
			"WL01": {
				"Label": "The company supports me in achieving a reasonable balance between my work life and my personal life.",
				"RecommendedActions": []
			},
			"GP10": {
				"Label": "The company shows care and concern for its employees.",
				"RecommendedActions": []
			},
			"WE08": {
				"Label": "Conditions in my job allow me to be about as productive as I can be.",
				"RecommendedActions": []
			},
			"DM04": {
				"Label": "In the company, decisions are generally made in a timely manner.",
				"RecommendedActions": []
			},
			"DM18": {
				"Label": "In the company, decisions are generally made at the lowest level appropriate.",
				"RecommendedActions": []
			},
			"SP45": {
				"Label": "I have trust and confidence in my immediate manager.",
				"RecommendedActions": []
			},
			"SV03": {
				"Label": "The information from this survey will be used constructively by the company.",
				"RecommendedActions": []
			},
			"SR05": {
				"Label": "The company operates in an ethical manner.",
				"RecommendedActions": []
			},
			"SR03": {
				"Label": "The company is socially responsible.",
				"RecommendedActions": []
			},
			"TW02": {
				"Label": "There is good cooperation between departments in the company.",
				"RecommendedActions": []
			},
			"DC08": {
				"Label": "There is good communication between departments in the company.",
				"RecommendedActions": []
			},
			"GP03": {
				"Label": "The company is responding effectively to changes in the business environment.",
				"RecommendedActions": []
			},
			"PE01": {
				"Label": "I have a good understanding of my work group's goals and objectives.",
				"RecommendedActions": []
			},
			"AV01": {
				"Label": "I have opportunities for advancement at the company.",
				"RecommendedActions": []
			},
			"AV08": {
				"Label": "I have a good idea of the possible career paths available to me.",
				"RecommendedActions": []
			},
			"BN04": {
				"Label": "Employee benefits provided by the company are competitive with benefits offered by other companies in our industry.",
				"RecommendedActions": []
			},
			"CP16": {
				"Label": "I have a good understanding of compensation policies and practices that affect me.",
				"RecommendedActions": []
			},
			"PE10": {
				"Label": "Poor performance is addressed effectively in the company.",
				"RecommendedActions": []
			},
			"PE21": {
				"Label": "The feedback I receive during the year helps me develop and improve.",
				"RecommendedActions": []
			},
			"OM04": {
				"Label": "I would recommend the company's products or services to a friend.",
				"RecommendedActions": []
			},
			"QS09": {
				"Label": "We resolve customer problems quickly and effectively.",
				"RecommendedActions": []
			},
			"SP04": {
				"Label": "My immediate manager is accessible when needed.",
				"RecommendedActions": []
			},
			"WK01": {
				"Label": "Physical working conditions where I work are good.",
				"RecommendedActions": []
			},
			"DI03": {
				"Label": "The company values and promotes employee diversity.",
				"RecommendedActions": []
			},
			"WK02": {
				"Label": "My work area is safe.",
				"RecommendedActions": []
			},
			"SP47": {
				"Label": "My immediate manager coaches me to help improve my performance.",
				"RecommendedActions": []
			},
			"WS01": {
				"Label": "The amount of work expected of me is reasonable.",
				"RecommendedActions": []
			},
			"DC09": {
				"Label": "When changes are made where I work, communications are handled well.",
				"RecommendedActions": []
			},
			"AV02": {
				"Label": "There is a clear link between my performance and my opportunities for career advancement.",
				"RecommendedActions": []
			},
			"DI04": {
				"Label": "In my work environment, everyone is treated fairly regardless of personal background or characteristics.",
				"RecommendedActions": []
			},
			"IV05": {
				"Label": "Employees are encouraged to take reasonable risks (e.g., try new ideas, new ways of doing things).",
				"RecommendedActions": []
			},
			"OM06": {
				"Label": "Given your choice, how long would you plan to continue working for the company?",
				"RecommendedActions": []
			},
			"NSQ1": {
				"Label": "How likely is it that you would recommend this company's products and services to family or friends?",
				"RecommendedActions": []
			}
		},

		Dimensions: {
			"DIM_ENG": {
				Items: ['OM12','OM01','OM11','OS02','OM06'],
				"Label": "Employee Engagement",
				"RecommendedActions": [],
				"KeyMetric_BackCardText": "What drives engagement in our organisation",
				"KeyMetrics_MoreCardText": "<p>Engagement measures commitment to the company, and extra effort employees are willing to put in for the good of the organisation.</p><p>The Engagement score is calculated as an average of the favourable scores from questions shown below.</p>"
			},
			"DIM_ENA": {
				Items: ['WE12','JS05','JS02','WE08'],
				"Label": "Employee Enablement",
				"RecommendedActions": [],
				"KeyMetric_BackCardText": "What drives enablement in our organisation",
				"KeyMetrics_MoreCardText": "<p>Enablement measures the extent to which employee skills and abilities are fully utilised and the support received in getting work done.</p><p>The Enablement score is calculated as an average of the favourable scores from questions shown below.</p>"
			},
			"DIM_N64": {
				Items: ['RE01','WS03','DC11','SP04','WK01'],
				"Label": "Resources",
				"RecommendedActions": [],
				"KeyMetric_BackCardText": "Resources Drivers",
				"KeyMetrics_MoreCardText": "Resources intro text"
			},
			"DIM_N50": {
				Items: ['DM02','VC04','IV04','DM18'],
				"Label": "Authority & Empowerment",
				"RecommendedActions": [],
				"KeyMetric_BackCardText": "Authority & Empowerment Drivers",
				"KeyMetrics_MoreCardText": "Authority & Empowerment intro text"
			},
			"DIM_N65": {
				Items: ['RC01','ER01','WL01','GP10','DI03','WK02'],
				"Label": "Respect & Recognition",
				"RecommendedActions": [],
				"KeyMetric_BackCardText": "Respect & Recognition Drivers",
				"KeyMetrics_MoreCardText": "Respect & Recognition intro text"
			},
			"DIM_N52": {
				Items: ['TW06','TW04','GP09','TW02','DC08'],
				"Label": "Collaboration",
				"RecommendedActions": [],
				"KeyMetric_BackCardText": "Collaboration Drivers",
				"KeyMetrics_MoreCardText": "Collaboration intro text"
			},
			"DIM_N63": {
				Items: ['QS01','QS16','QS03','QS02','OM04','QS09'],
				"Label": "Quality & Customer Focus",
				"RecommendedActions": [],
				"KeyMetric_BackCardText": "Quality & Customer Focus Drivers",
				"KeyMetrics_MoreCardText": "Quality & Customer Focus intro text"
			},
			"DIM_N61": {
				Items: ['PE09','PE06','PE03','CP14','PE10','PE21'],
				"Label": "Performance Management",
				"RecommendedActions": [],
				"KeyMetric_BackCardText": "Performance Management Drivers",
				"KeyMetrics_MoreCardText": "Performance Management intro text"
			},
			"DIM_N54": {
				Items: ['AV15','SP12','AV09','AV01','AV08'],
				"Label": "Development Opportunities",
				"RecommendedActions": [],
				"KeyMetric_BackCardText": "Development Opportunities Drivers",
				"KeyMetrics_MoreCardText": "Development Opportunities intro text"
			},
			"DIM_N53": {
				Items: ['LD04','LD09','GP12','SP45','SV03','SR05','SR03'],
				"Label": "Confidence in Leaders",
				"RecommendedActions": [],
				"KeyMetric_BackCardText": "Confidence in Leaders Drivers",
				"KeyMetrics_MoreCardText": "Confidence in Leaders intro text"
			},
			"DIM_N66": {
				Items: ['TR09','TR01','TR04','SP47'],
				"Label": "Training",
				"RecommendedActions": [],
				"KeyMetric_BackCardText": "Training Drivers",
				"KeyMetrics_MoreCardText": "Training intro text"
			},
			"DIM_N51": {
				Items: ['SD04','GP07','SD05','SD03','GP03','PE01'],
				"Label": "Clear & Promising Direction",
				"RecommendedActions": [],
				"KeyMetric_BackCardText": "Clear & Promising Direction",
				"KeyMetrics_MoreCardText": "Clear & Promising Direction intro text"
			},
			"DIM_N67": {
				Items: ['IV02','WE01','ST01','DM04','WS01','DC09'],
				"Label": "Work, Structure, & Process",
				"RecommendedActions": [],
				"KeyMetric_BackCardText": "Work, Structure, & Process Drivers",
				"KeyMetrics_MoreCardText": "Work, Structure, & Process intro text"
			},
			"DIM_N60": {
				Items: ['CP11','CP12','BN01','BN04','CP16'],
				"Label": "Pay & Benefits",
				"RecommendedActions": [],
				"KeyMetric_BackCardText": "Pay & Benefits Drivers",
				"KeyMetrics_MoreCardText": "Pay & Benefits intro text"
			},


			/*
			"DIM_C15": {
				Items: [],
				"Label": "Local questions",
				"KeyMetric_BackCardText": "Local questions Drivers",
				"KeyMetrics_MoreCardText": "Local questions intro text"
			},
			*/

			"DIM_NPS": {
				Items: ['NSQ1'],
				"Label": "Employee Net Promoter Score (ENPS)",
				"RecommendedActions": [],
				"KeyMetric_BackCardText": "Employee Net Promoter Score (ENPS) Drivers",
				"KeyMetrics_MoreCardText": "Employee Net Promoter Score (ENPS) intro text"
			},
		},
		NonStandardQuestions: {
			"NSQ1": {
				"Label": "Please review the list below and select up to 5 areas that are most important to you in your career when deciding to stay or join a new company.",
				"Answers": {
					"1": { "Label": "Q1 Answer A" },
					"2": { "Label": "Q1 Answer B" },
					"3": { "Label": "Q1 Answer C" }
				}
			},
			"NSQ2": {
				"Label": "Please select which of the following are barriers to innovation at the company: (Select all that apply)",
				"Answers": {
					"1": { "Label": "Q2 Answer A" },
					"2": { "Label": "Q2 Answer B" },
					"3": { "Label": "Q2 Answer C" }
				}
			},
			"NSQ3": {
				"Label": "How do you prefer to read your emails, reports and books?",
				"Answers": {
					"1": { "Label": "Q3 Answer A" },
					"2": { "Label": "Q3 Answer B" },
					"3": { "Label": "Q3 Answer C" }
				}
			},
		},
		CommentQuestions: {
			"Comm1": { "Label": "The MAIN thing that makes the Company a great place to work" },
			"Comm2": { "Label": "The MAIN thing that would make us more productive" }
		},
		CommentCategories: {"1":{"Label":"Authority & Empowerment"},"2":{"Label":"Clear & Promising Direction"},"3":{"Label":"Collaboration"},"4":{"Label":"Confidence in Leaders"},"5":{"Label":"Development Opportunities"},"6":{"Label":"Employee Enablement"},"7":{"Label":"Employee Engagement"},"8":{"Label":"Pay & Benefits"},"9":{"Label":"Performance Management"},"10":{"Label":"Quality & Customer Focus"},"11":{"Label":"Resources"},"12":{"Label":"Respect & Recognition"},"13":{"Label":"Training"},"14":{"Label":"Work, Structure, & Process"}},
		Demographics: {

			/*
			"Hierarchy": {
				"Label": "One Level Down",
				"Title": "Company Overall",
				"": {
					"1a": { "Label": "Group A" },
					"1b": { "Label": "Group B" },
					"1c": { "Label": "Group C" }
				}
			},
			*/
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
				"Label": "Wage Status",
				"Options": {
					"641": { "Label": "Hourly" },
					"642": { "Label": "Salaried" }
				}
			}/*,
			"Test": {
				"Label": "Many columns q",
				"Options": {
					"651": { "Label": "Under 20" },
					"652": { "Label": "20 to 29" },
					"653": { "Label": "30 to 39" },
					"654": { "Label": "40 to 49" },
					"656": { "Label": "50 to 59" },
					"657": { "Label": "Under 20" },
					"658": { "Label": "20 to 29" },
					"659": { "Label": "30 to 39" },
					"6510": { "Label": "40 to 49" },
					"6551": { "Label": "50 to 59" },
					"6512": { "Label": "Under 20" },
					"6523": { "Label": "20 to 29" },
					"6534": { "Label": "30 to 39" },
					"6545": { "Label": "40 to 49" },
					"6556": { "Label": "50 to 59" },
					"6567": { "Label": "Over 59" }
				}
			}*/
		},
		Comparators: {
			//"Internal.trend2020": { Label: "Trend 2020" },
			"Internal.Wave:2019": { Label: "Trend 2019" },
			"Internal.Wave:2018": { Label: "Trend 2018" },
			"Internal.parent": { Label: "Parent" },
			"Internal.total": { Label: "Total Company" },
			"External.IndustryBenchmark": { Label: "Industry Benchmark" },
			"External.HighPerformers": { Label: "High Performers" },
		},
		Labels: {
			"Dimension": { "Label": "Dimension" },
			"AllDimensions": { "Label": "All Dimensions" },
			"AllQuestions": { "Label": "All Questions" },
			"AllQuestionsOrdByDimension": { "Label": "All Questions ordered by dimension" },
			"Question": { "Label": "Question" },
			"Comments": { "Label": "Comments" },
			"Theme": { "Label": "Theme" },
			"Search": { "Label": "Search:" },
			"show": { "Label": "Show:" },
			"metric": { "Label": "Metric:" },
			"BreakBy": { "Label": "Break By:" },
			"DisplayComparatorsAs": { "Label": "Display comparators as" },
			"SelectQuestion": { "Label": "Select Question:" },
			"SelectTheme": { "Label": "Select Theme:" },
			"SelectDimensionOrQuestion": { "Label": "Select Dimension or Question:" },
			"SelectDemographic": { "Label": "Select Demographic:" },
			"BasisForComparison": { "Label": "Basis for comparison:" },
			"AbsoluteValue": { "Label": "Absolute Value" },
			"DifferencetoTotal": { "Label": "Difference to Total" },
			"PositiveDifferencesTo": { "Label": "Positive differences to" },
			"NegativeDifferencesTo": { "Label": "Negative differences to" },
			"PercentFavorable": { "Label": "% Favorable" },
			"PercentUnfavorable": { "Label": "% Unfavorable" },
			"PercentFav": { "Label": "% Fav" },
			"PercentNeu": { "Label": "% Neu" },
			"PercentUnfav": { "Label": "% Unfav" },
			"Promoters": { "Label": "Promoters" },
			"Passives": { "Label": "Passives" },
			"Detractors": { "Label": "Detractors" },
			"PercentPromoters": { "Label": "% of Promoters" },
			"PercentDetractors": { "Label": "% of Detractors" },
			"Favorable": { "Label": "Favorable" },
			"Neutral": { "Label": "Neutral" },
			"Unfavorable": { "Label": "Unfavorable" },
			"Distribution": { "Label": "Distribution" },
			"FavvsComparator": { "Label": "% Fav vs Comparator" },
			"ReportTotal": { "Label": "Report Total" },
			"Strengths": { "Label": "Strengths" },
			"Opportunities": { "Label": "Opportunities" },
			"DataFilters": { "Label": "Data Filters" },
			"InternalComparators": { "Label": "Internal Comparators" },
			"ExternalComparators": { "Label": "External Comparators" },
			"Engagement": { "Label": "Engagement" },
			"Enablement": { "Label": "Enablement" },
			"Frustrated": { "Label": "Frustrated" },
			"Detached": { "Label": "Detached" },
			"LeastEffective": { "Label": "Least Effective" },
			"MostEffective": { "Label": "Most Effective" },
			"ValidN": { "Label": "Valid N" },			
			"Pct": { "Label": "Pct" },
			"none": { "Label": "(None)" },
			"all": { "Label": "(All)" },
			"NA": { "Label": "N/A" },
			"ENPS": { "Label": "ENPS" },
			"Action": { "Label": "Action" },
			"NoDataToDisplay": { "Label": "No data to display" },
			"NoMatchingRecordsFound": { "Label": "No matching records found" },
			"TrendIndicator": { "Label": "Trend Indicator" },
			"OneLevelDown": { "Label": "One Level Down" },
			"SubHeading": { "Label": "[DATA] for [BENCHMARK] by [DEMO]" },
			"ImpactOnEngagement": { "Label": "Impact on Engagement" },
			"ImpactOnEnablement": { "Label": "Impact on Enablement" },
			"Selected": { "Label": "Selected" },
			"Add": { "Label": "add" },
			"NoRecommendationsAvailable": { "Label": "No recommendation/s available" },
			"RecommendationsAvailable": { "Label": "recommendation/s available" },
			"FocusOn": { "Label": "Focus on:" },
			"WorkOnThis": { "Label": "Work on this >>" },
			//"ResponseRate": { "Label": "Response Rate" },
			//"Invited": { "Label": "Invited" },
			//"Respondents": { "Label": "Respondents" },			
			//"Rollup": { "Label": "Respondents" },
			//"Report Group": { "Label": "Report Group" },
			//"Tips & Fun Facts"
			//"Your Report is ready >"
			//"Loading..."
		},
		Buttons: {
			"Apply": { "Label": "Apply" },
			"Cancel": { "Label": "Cancel" },
			"Clear": { "Label": "Clear" },
			"Download": { "Label": "Download" },
			"Slideshow": { "Label": "Slideshow" },
			"Start": { "Label": "Start Exploring" },
			"More": { "Label": "More" },
			"TakeAction": { "Label": "Take Action" },
			"Maintain": { "Label": "Take Action to Maintain" },
			"Improve": { "Label": "Take Action to Improve" },
		},
		ExportButtons: {
			"copy": {
				"Label": "Copy",
				"FileName": "Data export"
			},
			"excel": {
				"Label": "Excel",
				"FileName": "Data export"
			},
			"csv": {
				"Label": "CSV",
				"FileName": "Data export"
			},
			"pdf": {
				"Label": "PDF",
				"FileName": "Data export"
			}
		},
		WelcomePage: {
			"Title": "Welcome",
			"Label": `
				<p style="font-size: medium;"><b>Make better decisions and drive meaningful change by understanding your people and their experience.</b></p>
             	<p>Use this report to explore how people feel, what motivates them and what actions you can take to make your team and the organisation a better place to work.</p>
            	<p></p>
			`,
			"LabelFooter": "High-level results are only a click away.",
			"TitleSummary": "I just want the summary",
			"LabelSummary": "Your summary report available for instant view or download.",
			"TitleDetails": "I want all the details",
			"LabelDetails": "Explore detailed results for your people and plan your next steps.",
			"Footer": "This website is managed by Korn Ferry, commissioned by your organization to administer this survey on its behalf <a href=\"https://www.kornferry.com/\" target=\"_new\">www.kornferry.com</a>. Korn Ferry protects individual respondent confidentiality by only reporting results data in an aggregated format. Korn Ferry will only show aggregated results data for group sizes at or above the minimum number of respondents agreed with your organization. As a user of this website, you are responsible for handling all survey results data with due care and attention and in accordance with your organization`s information security standards and policies.",
		},
		SlideshowPage: {
			"Title": "Slideshow",
			"Label": `
				<p>The slideshow contains a curated set of slides based on the survey findings.</p>
				<p>The same content is available as a downloadable PowerPoint presentation.</p>
			`,
			"Start": "Start Slideshow >"
		},
		EffectivenessProfileTexts: {
			"MostEffective": "These employees are the key to driving better organizational performance.",
			"Detached": "These employees may need additional alignment or leadership in order to become effective.",
			"LeastEffective": "These employees can become a drag on the organization if they are not turned towards effectiveness.",
			"Frustrated": "Productivity issues can cause these employees to disengage or leave your company."
		},
		ENPSTexts: {
			"ENPSCardFrontTitle": { "Label": "Your ENPS Score" },
			"ENPSCardBackTitle": { "Label": "Number of ENPS respondents" },
			"ENPSQuestionLabel": { "Label": "How likely is it that you would recommend our products / services to a friend or colleague?" },
			"ENPSPromotersDesc": { "Label": "Employees who are likely to recommend you" },
			"ENPSPassivesDesc": { "Label": "Employees with no strong feelings one way or the other" },
			"ENPSDetractorsDesc": { "Label": "Employees who are unwilling to recommend you or will possibly speak unfavorably about you" },
			"ENPSPromotersScale": { "Label": "Extremely likely" },
			"ENPSPassivesScale": { "Label": "Neutral" },
			"ENPSDetractorsScale": { "Label": "Not at all likely" },
			"ENPSPromotersScaleDesc": { "Label": "i.e. 9 & 10 scores" },
			"ENPSDetractorsScaleDesc": { "Label": "i.e. 0 & 6 scores" },
		},
        SlideTexts: {
            'SLIDE_ENG': {
                'title': 'Employee Engagement: Results Details',
                'info': [
                    "Engagement measures commitment to the company and extra effort employees are willing to put in for the good of the organisation",
                    "The Engagement score is calculated as an average of the favourable scores from questions shown below"
                ]
            },
            'SLIDE_ENA': {
                'title': 'Employee Enablement: Results Details',
                'info': [
                    "Enablement measures the extent to which employee skills and abilities are fully utilised and the support received in getting work done.",
                    "The Enablement score is calculated as an average of the favourable scores from questions shown below."
                ]
            },
            'SLIDE_STRENGTHS': {
                'title': 'Team Strengths: Areas to Celebrate',
                'info': [
                    "This page helps you focus on come of the most important survey results for your work group. Keep doing these well.",
                    "Questions are categorised as 'strengths' based on an algorithm combining a number of factors, such as the percentage favourable, percentage unfavourable and how those scores compare to other internal groups and external benchmarks."
                ]
            },
            'SLIDE_OPPORTUNITIES': {
                'title': 'Team Opportunities: Areas to Focus',
                'info': [
                    "This page helps you focus on come of the most important survey results for your work group. Focus on improving these.",
                    "Questions are categorised as 'opportunities' based on an algorithm combining a number of factors, such as the percentage favourable, percentage unfavourable and how those scores compare to other internal groups and external benchmarks."
                ]
            },
            'SLIDE_DIMS': {
                'title': 'Dimension Overview',
                'info': []
            },
            'SLIDE_TOP5': {
                'title': 'Top 5 Questions',
                'info': []
            },
            'SLIDE_BOTTOM5': {
                'title': 'Bottom 5 Questions',
                'info': []
            },
            'SLIDE_COMMENTS': {
                'title': 'Open-Ended Comment Themes',
                'info': []
            },
            'SLIDE_KEYINDICES': {
                'title': "Key Indices",
                'info': [
                    "These metrics are what drive success in your organisation.",
                    "See the summary below for your teams performance on these metrics."
                ]
            },
            'SLIDE_KEYDRIVERS': {
                'title': 'Key Drivers',
                'info': [
                    "Key Driver Analysis determines which question items within a survey questionnaire most strongly influence or predict a dependent variable (in this case, the dependent variables are [ENG] and [ENA]).",
                    "Using key driver analysis, we can help answer the question: \"Where should I focus attention first in order to have the best chance of improving engagement and enablement in my organisation?\"",
                    "Results can give managers an alternative lens for understanding the culture of their organisations.",
                    "Key Driver Analysis results can be used to drive targeted Action Planning process."
                ],
                "LabelEmployeeEngagement": "Employee Engagement",
                "LabelEmployeeEnablement": "Employee Enablement",
                "LabelTop2KeyDriversOf": "Top 2 Key Drivers of"
            },
            'SLIDE_EPSEGMENTATION': {
                'title': 'Effectiveness Profile - Segmentation',
                'info': [
                    "The [ENGFRAMEWORK] clusters employees into four distinct segments, based on relative levels of Engagement and Enablement in comparison to Korn Ferry\'s global benchmark.",
                    "The segmentation is designed to guide targeted action efforts.",
                    "For example, when employees are [FRUSTRATED] action should focus on implementing counter measures to organizational barriers that hinder performance and productivity.",
                    "When [DETACHMENT] is present, employees are likely to be disconnected for the organizations mission and purpose and question their long term prospects at the company."
                ],
                "LabelHigh": "High",
                "LabelLow": "Low",
                "LabelDetachedExplanation": "Enabled, but not engaged",
                "LabelMostEffectiveExplanation": "Engaged and enabled",
                "LabelLeastEffectiveExplanation": "Neither engaged nor enabled",
                "LabelFrustratedExplanation": "Engaged, but not enabled",
                "LabelDetachment": "Detachment",
                "LabelEngagedPerformanceFramework": "Engaged Performance[TM] Framework"
            },
            'SLIDE_EPDETAIL': {
                'title': 'Effectiveness Profile: Detail',
                'info': [
                    "These metrics are what drive success in your organisation."
                ]
            },
            'SLIDE_RESSUMMARY': {
                'title': 'Results Summary',
                'info': []
            },
            'SLIDE_RESDETAIL': {
                'title': 'Results in Detail',
                'info': []
            },
            'SLIDE_ENGFRAMEWORK': {
                'title': 'Engaged Performance[TM] Framework',
                'info': [
                    '1. Clear and promising direction',
                    '2. Confidence in leaders',
                    '3. Quality and customer focus',
                    '4. Respect and recognition',
                    '5. Development opportunities',
                    '6. Pay and benefits',
                    '7. Performance management',
                    '8. Authority and empowerment',
                    '9. Resources',
                    '10. Training',
                    '11. Collaboration',
                    '12. Work, structure and process'
                ],
                'LabelPerformanceDrivers': 'Performance drivers configured to each client\'s business priorities',
                'LabelEngagedPerformance': 'Engaged Performance',
                'LabelEngagementInfo': 'Committed and loyal people, willing to go the extra mile',
                'LabelEnablementInfo': 'The right people in the right roles, in an enabling work environment',
                'LabelOperationalExcellence': 'Operational excellence',
                'LabelCustomerLoyalty': 'Customer loyalty',
                'LabelFinancialPerformance': 'Financial performance',
                'LabelAttractTalent': 'Attract and retain talent',
                'LabelStrongBrand': 'Strong employer brand'
            },
            'SLIDE_SURVEYBACKGROUND': {
                'title': 'Survey Background',
                'info': [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',                 
                ],
                'LabelNoResponses': 'No. responses:',
                'LabelRespRate': 'Response rate:'
            },
            'SLIDE_TAKEACTION': {
                'title': 'Taking Action',
                'LeftSideContent': '"Organizations rated the highest by employees for acting on survey feedback outperform others on financial performance."',
                'RightSideContent': [
                    'To drive effective change through your results...',
                    'Be realistic, focus on [2-3 areas of action] only to increase your chances of success',
                    '[Do not overlook strengths] - sometimes a good action plan can be about maintaining a strong score',
                    'Focus on high priority areas that are [within your control]',
                    'Make sure the actions address the [root cause] - think about the reasons why this issue has come about',
                ]
            },
            'SLIDE_HOWTOREAD': {
                'title': 'How to Read Your Results',
                'info': [
                    'The five-point scale is classified into favourable, neutral and unfavourable',
                    'Example table:',
                    'A star denotes statistically significant difference vs comparison (green font for positive; red font for negative)'
                ],
                'LabelStronglyAgree': 'Strongly agree',
                'LabelAgree': 'Agree',
                'LabelNeither': 'Neither agree nor disagree',
                'LabelDisagree': 'Disagree',
                'LabelStronglyDisagree': 'Strongly disagree',
                'LabelClearStrength': 'Clear strength',
                'LabelModerateStrength': 'Moderate strength',
                'LabelWarningSign': 'Warning sign',
                'LabelRedFlag': 'Red flag',
                'LabelClearStrengthPercent': '>80% favourable',
                'LabelModerateStrengthPercent': '65-80% favourable',
                'LabelWarningSignPercent': '<60% favourable or >20% unfavourable',
                'LabelRedFlagPercent': '<50% favourable or >30% unfavourable'
            },
            'SLIDE_TITLE': {
                'title': 'Title Slide',
                'info': [
                    '#survey name#',
                    '#client#',
                    'Results for: #team name#'
                ]
            }
        }
    
	};
}

if (data == null) {
	data = {

		// COMMENT CATEGORIES
		"COMCAT.2020.389.0": {"Comm1":{"N":7734,"Dist":{"1":552,"2":510,"3":563,"4":598,"5":536,"6":544,"7":591,"8":512,"9":533,"10":586,"11":530,"12":541,"13":596,"14":542}},"Comm2":{"N":11669,"Dist":{"1":840,"2":811,"3":783,"4":869,"5":817,"6":825,"7":839,"8":848,"9":802,"10":874,"11":819,"12":828,"13":877,"14":837}}},

		// NORMS
		"NORMS.AllCompany_A_17TO19_Avg.0": {"AG03":{"N":43440,"Dist":{"Fav":59}},"AG07":{"N":548333,"Dist":{"Fav":71}},"AG08":{"N":42786,"Dist":{"Fav":73}},"AG09":{"N":160479,"Dist":{"Fav":77}},"AG11":{"N":73278,"Dist":{"Fav":53}},"AL06":{"N":65146,"Dist":{"Fav":73}},"AL07":{"N":228332,"Dist":{"Fav":72}},"AV01":{"N":1302045,"Dist":{"Fav":51}},"AV02":{"N":441793,"Dist":{"Fav":58}},"AV05":{"N":600787,"Dist":{"Fav":42}},"AV08":{"N":997242,"Dist":{"Fav":55}},"AV09":{"N":4961155,"Dist":{"Fav":63}},"AV13":{"N":80085,"Dist":{"Fav":66}},"AV15":{"N":3797924,"Dist":{"Fav":56}},"BN01":{"N":3969635,"Dist":{"Fav":64}},"BN02":{"N":104937,"Dist":{"Fav":81}},"BN04":{"N":565996,"Dist":{"Fav":54}},"BN09":{"N":75256,"Dist":{"Fav":62}},"CF01":{"N":78151,"Dist":{"Fav":71}},"CF04":{"N":109718,"Dist":{"Fav":79}},"CF12":{"N":101868,"Dist":{"Fav":74}},"CF13":{"N":92507,"Dist":{"Fav":84}},"CM04":{"N":79340,"Dist":{"Fav":66}},"CM11":{"N":29028,"Dist":{"Fav":68}},"CM13":{"N":134815,"Dist":{"Fav":61}},"CM17":{"N":25618,"Dist":{"Fav":61}},"CP01":{"N":23782,"Dist":{"Fav":53}},"CP11":{"N":3696043,"Dist":{"Fav":49}},"CP12":{"N":3094373,"Dist":{"Fav":43}},"CP14":{"N":2855522,"Dist":{"Fav":45}},"CP16":{"N":875250,"Dist":{"Fav":61}},"CP19":{"N":172273,"Dist":{"Fav":70}},"CP26":{"N":214333,"Dist":{"Fav":51}},"CS05":{"N":263008,"Dist":{"Fav":74}},"CS13":{"N":175205,"Dist":{"Fav":81}},"CS25":{"N":29523,"Dist":{"Fav":81}},"DC01":{"N":197211,"Dist":{"Fav":65}},"DC03":{"N":499349,"Dist":{"Fav":67}},"DC08":{"N":680334,"Dist":{"Fav":45}},"DC09":{"N":1468202,"Dist":{"Fav":55}},"DC11":{"N":3546444,"Dist":{"Fav":72}},"DC21":{"N":589084,"Dist":{"Fav":57}},"DC29":{"N":285317,"Dist":{"Fav":72}},"DG01":{"N":156137,"Dist":{"Fav":60}},"DG07":{"N":122359,"Dist":{"Fav":61}},"DI01":{"N":372980,"Dist":{"Fav":74}},"DI03":{"N":2336605,"Dist":{"Fav":72}},"DI04":{"N":1529157,"Dist":{"Fav":76}},"DI09":{"N":696917,"Dist":{"Fav":64}},"DI10":{"N":197293,"Dist":{"Fav":78}},"DI11":{"N":26243,"Dist":{"Fav":63}},"DI12":{"N":40824,"Dist":{"Fav":78}},"DI13":{"N":25576,"Dist":{"Fav":80}},"DI14":{"N":27386,"Dist":{"Fav":62}},"DI15":{"N":25954,"Dist":{"Fav":90}},"DI16":{"N":41328,"Dist":{"Fav":90}},"DI17":{"N":32469,"Dist":{"Fav":79}},"DI18":{"N":22708,"Dist":{"Fav":54}},"DI19":{"N":51529,"Dist":{"Fav":76}},"DI20":{"N":80124,"Dist":{"Fav":69}},"DI21":{"N":24385,"Dist":{"Fav":55}},"DI22":{"N":39219,"Dist":{"Fav":71}},"DI23":{"N":27130,"Dist":{"Fav":82}},"DI24":{"N":24377,"Dist":{"Fav":63}},"DI25":{"N":25098,"Dist":{"Fav":58}},"DI26":{"N":22241,"Dist":{"Fav":60}},"DI27":{"N":24803,"Dist":{"Fav":68}},"DI28":{"N":25544,"Dist":{"Fav":59}},"DI29":{"N":42067,"Dist":{"Fav":66}},"DI30":{"N":24779,"Dist":{"Fav":58}},"DI31":{"N":28896,"Dist":{"Fav":50}},"DI32":{"N":106999,"Dist":{"Fav":79}},"DI33":{"N":23210,"Dist":{"Fav":69}},"DI34":{"N":25095,"Dist":{"Fav":52}},"DI35":{"N":25542,"Dist":{"Fav":69}},"DI36":{"N":24014,"Dist":{"Fav":58}},"DI37":{"N":24058,"Dist":{"Fav":61}},"DI38":{"N":24430,"Dist":{"Fav":76}},"DI39":{"N":23617,"Dist":{"Fav":58}},"DI40":{"N":36688,"Dist":{"Fav":57}},"DM01":{"N":330143,"Dist":{"Fav":67}},"DM02":{"N":4029109,"Dist":{"Fav":73}},"DM04":{"N":1987892,"Dist":{"Fav":46}},"DM05":{"N":91310,"Dist":{"Fav":64}},"DM18":{"N":1212067,"Dist":{"Fav":38}},"DM20":{"N":391868,"Dist":{"Fav":69}},"EC01":{"N":181821,"Dist":{"Fav":68}},"EC08":{"N":123222,"Dist":{"Fav":73}},"EC09":{"N":407773,"Dist":{"Fav":80}},"EC12":{"N":234963,"Dist":{"Fav":86}},"EC13":{"N":110735,"Dist":{"Fav":77}},"EQ01":{"N":347105,"Dist":{"Fav":73}},"ER01":{"N":4146678,"Dist":{"Fav":79}},"ER02":{"N":94175,"Dist":{"Fav":73}},"ER03":{"N":182444,"Dist":{"Fav":67}},"ER05":{"N":132137,"Dist":{"Fav":58}},"ER08":{"N":222792,"Dist":{"Fav":70}},"GP02":{"N":20389,"Dist":{"Fav":53}},"GP03":{"N":1178337,"Dist":{"Fav":60}},"GP06":{"N":151971,"Dist":{"Fav":82}},"GP07":{"N":1422808,"Dist":{"Fav":72}},"GP08":{"N":327022,"Dist":{"Fav":61}},"GP09":{"N":3079710,"Dist":{"Fav":54}},"GP10":{"N":2796260,"Dist":{"Fav":64}},"GP11":{"N":110105,"Dist":{"Fav":75}},"GP12":{"N":4779267,"Dist":{"Fav":57}},"GP13":{"N":59234,"Dist":{"Fav":72}},"GP18":{"N":272497,"Dist":{"Fav":61}},"GP19":{"N":118255,"Dist":{"Fav":49}},"GP20":{"N":158235,"Dist":{"Fav":79}},"GP21":{"N":63507,"Dist":{"Fav":65}},"GP22":{"N":805263,"Dist":{"Fav":79}},"IV02":{"N":2838315,"Dist":{"Fav":58}},"IV03":{"N":479086,"Dist":{"Fav":64}},"IV04":{"N":3816491,"Dist":{"Fav":70}},"IV05":{"N":630820,"Dist":{"Fav":61}},"js01":{"N":98350,"Dist":{"Fav":73}},"JS02":{"N":5765012,"Dist":{"Fav":74}},"JS03":{"N":178696,"Dist":{"Fav":75}},"JS05":{"N":5595093,"Dist":{"Fav":74}},"JS07":{"N":215884,"Dist":{"Fav":71}},"JS09":{"N":248669,"Dist":{"Fav":79}},"LD01":{"N":23323,"Dist":{"Fav":74}},"LD04":{"N":1537253,"Dist":{"Fav":57}},"LD05":{"N":28508,"Dist":{"Fav":70}},"LD07":{"N":60220,"Dist":{"Fav":67}},"LD09":{"N":3830535,"Dist":{"Fav":63}},"LD10":{"N":918383,"Dist":{"Fav":66}},"LD11":{"N":750564,"Dist":{"Fav":61}},"LD20":{"N":958705,"Dist":{"Fav":77}},"MV02":{"N":10276,"Dist":{"Fav":92}},"MV04":{"N":677615,"Dist":{"Fav":77}},"MV06":{"N":457194,"Dist":{"Fav":85}},"MV07":{"N":1037281,"Dist":{"Fav":71}},"MV08":{"N":542554,"Dist":{"Fav":80}},"NP01":{"N":956988,"Dist":{"Fav":47}},"OM01":{"N":6755670,"Dist":{"Fav":69}},"OM02":{"N":36473,"Dist":{"Fav":89}},"OM04":{"N":814268,"Dist":{"Fav":80}},"OM05":{"N":86697,"Dist":{"Fav":60}},"OM06":{"N":5130392,"Dist":{"Fav":57}},"OM10":{"N":106582,"Dist":{"Fav":67}},"OM11":{"N":5643128,"Dist":{"Fav":68}},"OM12":{"N":5901263,"Dist":{"Fav":57}},"OM13":{"N":40868,"Dist":{"Fav":56}},"OM16":{"N":5883,"Dist":{"Fav":73}},"OS01":{"N":486488,"Dist":{"Fav":69}},"OS02":{"N":6878814,"Dist":{"Fav":77}},"OS03":{"N":104486,"Dist":{"Fav":77}},"PE01":{"N":1295899,"Dist":{"Fav":85}},"PE02":{"N":167070,"Dist":{"Fav":78}},"PE03":{"N":4104995,"Dist":{"Fav":87}},"PE04":{"N":6545,"Dist":{"Fav":90}},"PE05":{"N":407064,"Dist":{"Fav":68}},"PE06":{"N":1378015,"Dist":{"Fav":87}},"PE07":{"N":61390,"Dist":{"Fav":75}},"PE08":{"N":508527,"Dist":{"Fav":78}},"PE09":{"N":3854479,"Dist":{"Fav":59}},"PE10":{"N":1062375,"Dist":{"Fav":47}},"PE11":{"N":211593,"Dist":{"Fav":48}},"PE14":{"N":103344,"Dist":{"Fav":67}},"PE21":{"N":1075519,"Dist":{"Fav":63}},"PE23":{"N":220609,"Dist":{"Fav":76}},"QS01":{"N":3855178,"Dist":{"Fav":76}},"QS02":{"N":3475371,"Dist":{"Fav":77}},"QS03":{"N":1149564,"Dist":{"Fav":69}},"QS04":{"N":49826,"Dist":{"Fav":85}},"QS09":{"N":654609,"Dist":{"Fav":71}},"QS10":{"N":16552,"Dist":{"Fav":78}},"QS16":{"N":2133185,"Dist":{"Fav":82}},"RC01":{"N":4796063,"Dist":{"Fav":63}},"RC03":{"N":23584,"Dist":{"Fav":58}},"RE01":{"N":4303709,"Dist":{"Fav":69}},"SD01":{"N":508991,"Dist":{"Fav":68}},"SD02":{"N":178718,"Dist":{"Fav":70}},"SD03":{"N":2851599,"Dist":{"Fav":76}},"SD04":{"N":2853230,"Dist":{"Fav":67}},"SD05":{"N":4360474,"Dist":{"Fav":83}},"SD06":{"N":100735,"Dist":{"Fav":74}},"SD12":{"N":19218,"Dist":{"Fav":58}},"SD14":{"N":11106,"Dist":{"Fav":72}},"SP02":{"N":374438,"Dist":{"Fav":74}},"SP03":{"N":1642554,"Dist":{"Fav":69}},"SP04":{"N":1196674,"Dist":{"Fav":83}},"SP06":{"N":178802,"Dist":{"Fav":78}},"SP07":{"N":542390,"Dist":{"Fav":85}},"SP08":{"N":1149313,"Dist":{"Fav":79}},"SP09":{"N":148849,"Dist":{"Fav":77}},"SP12":{"N":4271868,"Dist":{"Fav":70}},"SP13":{"N":437096,"Dist":{"Fav":74}},"SP16":{"N":100023,"Dist":{"Fav":78}},"SP20":{"N":287216,"Dist":{"Fav":73}},"SP22":{"N":98925,"Dist":{"Fav":70}},"SP24":{"N":263299,"Dist":{"Fav":85}},"SP37":{"N":205136,"Dist":{"Fav":86}},"SP40":{"N":320221,"Dist":{"Fav":80}},"SP41":{"N":860600,"Dist":{"Fav":75}},"SP45":{"N":3049935,"Dist":{"Fav":77}},"SP47":{"N":1221622,"Dist":{"Fav":66}},"SP48":{"N":232302,"Dist":{"Fav":85}},"SP49":{"N":41344,"Dist":{"Fav":70}},"SP50":{"N":132216,"Dist":{"Fav":78}},"SP53":{"N":226401,"Dist":{"Fav":83}},"SP57":{"N":175209,"Dist":{"Fav":75}},"SP58":{"N":76513,"Dist":{"Fav":68}},"SP62":{"N":111118,"Dist":{"Fav":73}},"SP65":{"N":239772,"Dist":{"Fav":78}},"SP67":{"N":209613,"Dist":{"Fav":80}},"SP68":{"N":468938,"Dist":{"Fav":80}},"SP72":{"N":386774,"Dist":{"Fav":76}},"SR01":{"N":314693,"Dist":{"Fav":81}},"SR03":{"N":2298539,"Dist":{"Fav":79}},"SR05":{"N":1419704,"Dist":{"Fav":79}},"SR07":{"N":821789,"Dist":{"Fav":75}},"SR08":{"N":437778,"Dist":{"Fav":84}},"SR09":{"N":426879,"Dist":{"Fav":76}},"ST01":{"N":2570325,"Dist":{"Fav":52}},"ST05":{"N":261889,"Dist":{"Fav":69}},"SV02":{"N":2219995,"Dist":{"Fav":53}},"SV03":{"N":1717158,"Dist":{"Fav":61}},"SV04":{"N":476435,"Dist":{"Fav":60}},"SV05":{"N":395878,"Dist":{"Fav":59}},"SY01":{"N":356062,"Dist":{"Fav":74}},"TR01":{"N":4416830,"Dist":{"Fav":60}},"TR02":{"N":43160,"Dist":{"Fav":59}},"TR04":{"N":1551188,"Dist":{"Fav":58}},"TR06":{"N":209703,"Dist":{"Fav":58}},"TR09":{"N":1760961,"Dist":{"Fav":50}},"TW02":{"N":2219111,"Dist":{"Fav":52}},"TW03":{"N":146141,"Dist":{"Fav":72}},"TW04":{"N":3725842,"Dist":{"Fav":80}},"TW06":{"N":3270915,"Dist":{"Fav":52}},"VC01":{"N":145789,"Dist":{"Fav":66}},"VC02":{"N":112513,"Dist":{"Fav":62}},"VC04":{"N":2267181,"Dist":{"Fav":66}},"VC07":{"N":415349,"Dist":{"Fav":73}},"VC10":{"N":1542321,"Dist":{"Fav":64}},"WB01":{"N":17971,"Dist":{"Fav":71}},"WB04":{"N":20856,"Dist":{"Fav":65}},"WB07":{"N":121650,"Dist":{"Fav":82}},"WE01":{"N":3205296,"Dist":{"Fav":65}},"WE02":{"N":181341,"Dist":{"Fav":39}},"WE06":{"N":4795,"Dist":{"Fav":66}},"WE07":{"N":127590,"Dist":{"Fav":73}},"WE08":{"N":5733140,"Dist":{"Fav":62}},"WE12":{"N":5684312,"Dist":{"Fav":58}},"WK01":{"N":1361098,"Dist":{"Fav":72}},"WK02":{"N":870538,"Dist":{"Fav":84}},"WK03":{"N":192396,"Dist":{"Fav":90}},"WK04":{"N":404449,"Dist":{"Fav":81}},"WK05":{"N":102185,"Dist":{"Fav":79}},"WK06":{"N":262963,"Dist":{"Fav":81}},"WK09":{"N":17566,"Dist":{"Fav":70}},"WL01":{"N":3227147,"Dist":{"Fav":63}},"WL02":{"N":154592,"Dist":{"Fav":77}},"WL03":{"N":1098090,"Dist":{"Fav":68}},"WS01":{"N":1064106,"Dist":{"Fav":63}},"WS03":{"N":2210249,"Dist":{"Fav":48}},"WS04":{"N":297053,"Dist":{"Fav":49}}},
		"NORMS.HP_A_17TO19_Avg.0": {"AV01":{"N":35168,"Dist":{"Fav":59}},"AV08":{"N":39519,"Dist":{"Fav":61}},"AV09":{"N":333120,"Dist":{"Fav":70}},"AV15":{"N":423988,"Dist":{"Fav":63}},"BN01":{"N":432581,"Dist":{"Fav":71}},"BN04":{"N":19205,"Dist":{"Fav":64}},"CP11":{"N":357017,"Dist":{"Fav":54}},"CP12":{"N":416394,"Dist":{"Fav":48}},"CP14":{"N":472573,"Dist":{"Fav":54}},"CP16":{"N":241911,"Dist":{"Fav":71}},"DC08":{"N":64493,"Dist":{"Fav":57}},"DC09":{"N":161312,"Dist":{"Fav":66}},"DC11":{"N":316783,"Dist":{"Fav":78}},"DC21":{"N":269114,"Dist":{"Fav":57}},"DI01":{"N":47707,"Dist":{"Fav":82}},"DI03":{"N":276912,"Dist":{"Fav":78}},"DI04":{"N":42893,"Dist":{"Fav":79}},"DM02":{"N":317861,"Dist":{"Fav":78}},"DM04":{"N":434054,"Dist":{"Fav":59}},"DM18":{"N":306047,"Dist":{"Fav":54}},"ER01":{"N":371159,"Dist":{"Fav":84}},"GP03":{"N":203171,"Dist":{"Fav":74}},"GP07":{"N":111832,"Dist":{"Fav":83}},"GP09":{"N":265198,"Dist":{"Fav":63}},"GP10":{"N":195637,"Dist":{"Fav":74}},"GP12":{"N":341319,"Dist":{"Fav":67}},"GP22":{"N":44433,"Dist":{"Fav":89}},"IV02":{"N":246881,"Dist":{"Fav":68}},"IV03":{"N":268946,"Dist":{"Fav":76}},"IV04":{"N":393732,"Dist":{"Fav":75}},"IV05":{"N":100374,"Dist":{"Fav":65}},"JS02":{"N":511304,"Dist":{"Fav":78}},"JS05":{"N":497219,"Dist":{"Fav":78}},"LD04":{"N":129758,"Dist":{"Fav":69}},"LD09":{"N":355863,"Dist":{"Fav":74}},"LD10":{"N":67077,"Dist":{"Fav":73}},"OM01":{"N":691438,"Dist":{"Fav":78}},"OM04":{"N":95500,"Dist":{"Fav":88}},"OM06":{"N":633607,"Dist":{"Fav":65}},"OM11":{"N":688246,"Dist":{"Fav":74}},"OM12":{"N":663954,"Dist":{"Fav":65}},"OS02":{"N":692055,"Dist":{"Fav":84}},"PE01":{"N":187454,"Dist":{"Fav":89}},"PE03":{"N":303468,"Dist":{"Fav":91}},"PE06":{"N":69011,"Dist":{"Fav":91}},"PE08":{"N":75980,"Dist":{"Fav":84}},"PE09":{"N":346624,"Dist":{"Fav":67}},"PE10":{"N":94823,"Dist":{"Fav":57}},"PE21":{"N":109283,"Dist":{"Fav":73}},"QS01":{"N":463658,"Dist":{"Fav":83}},"QS02":{"N":416316,"Dist":{"Fav":86}},"QS03":{"N":135832,"Dist":{"Fav":80}},"QS09":{"N":120460,"Dist":{"Fav":80}},"QS16":{"N":80811,"Dist":{"Fav":86}},"RC01":{"N":408345,"Dist":{"Fav":69}},"RE01":{"N":348199,"Dist":{"Fav":75}},"SD03":{"N":302177,"Dist":{"Fav":81}},"SD04":{"N":227600,"Dist":{"Fav":78}},"SD05":{"N":373438,"Dist":{"Fav":88}},"SP04":{"N":120389,"Dist":{"Fav":88}},"SP08":{"N":40744,"Dist":{"Fav":81}},"SP12":{"N":323007,"Dist":{"Fav":75}},"SP45":{"N":353524,"Dist":{"Fav":81}},"SP47":{"N":121811,"Dist":{"Fav":73}},"SR03":{"N":129483,"Dist":{"Fav":86}},"SR05":{"N":94646,"Dist":{"Fav":87}},"ST01":{"N":190299,"Dist":{"Fav":65}},"SV02":{"N":116503,"Dist":{"Fav":58}},"SV03":{"N":67355,"Dist":{"Fav":70}},"TR01":{"N":590701,"Dist":{"Fav":68}},"TR04":{"N":136878,"Dist":{"Fav":67}},"TR09":{"N":101859,"Dist":{"Fav":54}},"TW02":{"N":308975,"Dist":{"Fav":64}},"TW04":{"N":394248,"Dist":{"Fav":82}},"TW06":{"N":246869,"Dist":{"Fav":60}},"VC04":{"N":165017,"Dist":{"Fav":71}},"VC10":{"N":193722,"Dist":{"Fav":69}},"WE01":{"N":261685,"Dist":{"Fav":71}},"WE08":{"N":654526,"Dist":{"Fav":70}},"WE12":{"N":679327,"Dist":{"Fav":65}},"WK01":{"N":236814,"Dist":{"Fav":80}},"WK02":{"N":138149,"Dist":{"Fav":87}},"WK04":{"N":103782,"Dist":{"Fav":85}},"WK06":{"N":59427,"Dist":{"Fav":83}},"WL01":{"N":206917,"Dist":{"Fav":69}},"WL03":{"N":284527,"Dist":{"Fav":69}},"WS01":{"N":183013,"Dist":{"Fav":69}},"WS03":{"N":145974,"Dist":{"Fav":52}}},


		"NORMDIMS.AllCompany_A_17TO19_Avg.0": {"DIM_ENG":{"Dist":{"Fav":66},"N":6878814},"DIM_ENA":{"Dist":{"Fav":67},"N":5765012},"DIM_N64":{"Dist":{"Fav":69},"N":4303709},"DIM_N50":{"Dist":{"Fav":62},"N":4029109},"DIM_N65":{"Dist":{"Fav":71},"N":4796063},"DIM_N52":{"Dist":{"Fav":57},"N":3725842},"DIM_N63":{"Dist":{"Fav":76},"N":3855178},"DIM_N61":{"Dist":{"Fav":65},"N":4104995},"DIM_N54":{"Dist":{"Fav":59},"N":4961155},"DIM_N53":{"Dist":{"Fav":68},"N":4779267},"DIM_N66":{"Dist":{"Fav":59},"N":4416830},"DIM_N51":{"Dist":{"Fav":74},"N":4360474},"DIM_N67":{"Dist":{"Fav":57},"N":3205296},"DIM_N60":{"Dist":{"Fav":54},"N":3969635},"DIM_NPS":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null}},
		"NORMDIMS.HP_A_17TO19_Avg.0": {"DIM_ENG":{"Dist":{"Fav":73},"N":692055},"DIM_ENA":{"Dist":{"Fav":73},"N":679327},"DIM_N64":{"Dist":{"Fav":75},"N":348199},"DIM_N50":{"Dist":{"Fav":70},"N":393732},"DIM_N65":{"Dist":{"Fav":77},"N":408345},"DIM_N52":{"Dist":{"Fav":65},"N":394248},"DIM_N63":{"Dist":{"Fav":84},"N":463658},"DIM_N61":{"Dist":{"Fav":72},"N":472573},"DIM_N54":{"Dist":{"Fav":66},"N":423988},"DIM_N53":{"Dist":{"Fav":76},"N":355863},"DIM_N66":{"Dist":{"Fav":66},"N":590701},"DIM_N51":{"Dist":{"Fav":82},"N":373438},"DIM_N67":{"Dist":{"Fav":66},"N":434054},"DIM_N60":{"Dist":{"Fav":62},"N":432581},"DIM_NPS":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null}},

		//test for null
		/*
		"NORMDIMS.AllCompany_A_17TO19_Avg.0": {"DIM_ENG":{"Dist":{"Fav":null},"N":6878814},"DIM_ENA":{"Dist":{"Fav":67},"N":5765012},"DIM_N64":{"Dist":{"Fav":69},"N":4303709},"DIM_N50":{"Dist":{"Fav":62},"N":4029109},"DIM_N65":{"Dist":{"Fav":71},"N":4796063},"DIM_N52":{"Dist":{"Fav":57},"N":3725842},"DIM_N63":{"Dist":{"Fav":76},"N":3855178},"DIM_N61":{"Dist":{"Fav":65},"N":4104995},"DIM_N54":{"Dist":{"Fav":59},"N":4961155},"DIM_N53":{"Dist":{"Fav":68},"N":4779267},"DIM_N66":{"Dist":{"Fav":59},"N":4416830},"DIM_N51":{"Dist":{"Fav":74},"N":4360474},"DIM_N67":{"Dist":{"Fav":57},"N":3205296},"DIM_N60":{"Dist":{"Fav":54},"N":3969635},"DIM_NPS":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null}},
		"NORMDIMS.HP_A_17TO19_Avg.0": {"DIM_ENG":{"Dist":{"Fav":null},"N":692055},"DIM_ENA":{"Dist":{"Fav":73},"N":679327},"DIM_N64":{"Dist":{"Fav":75},"N":348199},"DIM_N50":{"Dist":{"Fav":70},"N":393732},"DIM_N65":{"Dist":{"Fav":77},"N":408345},"DIM_N52":{"Dist":{"Fav":65},"N":394248},"DIM_N63":{"Dist":{"Fav":84},"N":463658},"DIM_N61":{"Dist":{"Fav":72},"N":472573},"DIM_N54":{"Dist":{"Fav":66},"N":423988},"DIM_N53":{"Dist":{"Fav":76},"N":355863},"DIM_N66":{"Dist":{"Fav":66},"N":590701},"DIM_N51":{"Dist":{"Fav":82},"N":373438},"DIM_N67":{"Dist":{"Fav":66},"N":434054},"DIM_N60":{"Dist":{"Fav":62},"N":432581},"DIM_NPS":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null}},
		*/

		// RESPONSE RATE
		"RR.2020.389": {
			"Completes": 15814,
			"Total": 17275
		},

		// ITEMS
		"ITEMS.2018.389.0": {"RE01":{"Dist":{"Fav":9027,"Neu":1550,"Unfav":1237},"N":11814},"DM02":{"Dist":{"Fav":8960,"Neu":1452,"Unfav":1403},"N":11815},"RC01":{"Dist":{"Fav":1828,"Neu":574,"Unfav":509},"N":2911},"TW06":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null},"QS01":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null},"PE09":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null},"AV15":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null},"LD04":{"Dist":{"Fav":9138,"Neu":1519,"Unfav":1157},"N":11814},"WS03":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null},"TR09":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null},"PE06":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null},"SD04":{"Dist":{"Fav":1133,"Neu":417,"Unfav":409},"N":1959},"PE03":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null},"OM12":{"Dist":{"Fav":719,"Neu":117,"Unfav":100},"N":936},"QS16":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null},"LD09":{"Dist":{"Fav":1581,"Neu":160,"Unfav":210},"N":1951},"TR01":{"Dist":{"Fav":1397,"Neu":303,"Unfav":258},"N":1958},"VC04":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null},"GP07":{"Dist":{"Fav":476,"Neu":226,"Unfav":230},"N":932},"ER01":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null},"IV02":{"Dist":{"Fav":1129,"Neu":330,"Unfav":489},"N":1948},"CP14":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null},"GP12":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null},"CP11":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null},"WE01":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null},"IV04":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null},"WE12":{"Dist":{"Fav":3150,"Neu":971,"Unfav":709},"N":4830},"SP12":{"Dist":{"Fav":7667,"Neu":2464,"Unfav":1684},"N":11815},"AV09":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null},"TW04":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null},"CP12":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null},"DC11":{"Dist":{"Fav":9584,"Neu":1736,"Unfav":486},"N":11806},"BN01":{"Dist":{"Fav":8987,"Neu":1757,"Unfav":1048},"N":11792},"GP09":{"Dist":{"Fav":6542,"Neu":2222,"Unfav":3047},"N":11811},"QS03":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null},"OM01":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null},"TR04":{"Dist":{"Fav":5742,"Neu":2290,"Unfav":3780},"N":11812},"QS02":{"Dist":{"Fav":3626,"Neu":1791,"Unfav":3611},"N":9028},"JS05":{"Dist":{"Fav":3610,"Neu":1837,"Unfav":3626},"N":9073},"OM11":{"Dist":{"Fav":3615,"Neu":1883,"Unfav":3644},"N":9142},"SD05":{"Dist":{"Fav":3694,"Neu":1859,"Unfav":3565},"N":9118},"SD03":{"Dist":{"Fav":3650,"Neu":1825,"Unfav":3634},"N":9109},"OS02":{"Dist":{"Fav":3670,"Neu":1852,"Unfav":3588},"N":9110},"JS02":{"Dist":{"Fav":3694,"Neu":1763,"Unfav":3638},"N":9095},"ST01":{"Dist":{"Fav":3611,"Neu":1836,"Unfav":3677},"N":9124},"WL01":{"Dist":{"Fav":3591,"Neu":1871,"Unfav":3647},"N":9109},"GP10":{"Dist":{"Fav":3552,"Neu":1800,"Unfav":3774},"N":9126},"WE08":{"Dist":{"Fav":3626,"Neu":1854,"Unfav":3652},"N":9132},"DM04":{"Dist":{"Fav":3640,"Neu":1768,"Unfav":3716},"N":9124},"DM18":{"Dist":{"Fav":3661,"Neu":1750,"Unfav":3614},"N":9025},"SP45":{"Dist":{"Fav":3628,"Neu":1846,"Unfav":3612},"N":9086},"SV03":{"Dist":{"Fav":3575,"Neu":1789,"Unfav":3647},"N":9011},"SR05":{"Dist":{"Fav":3662,"Neu":1789,"Unfav":3657},"N":9108},"SR03":{"Dist":{"Fav":3631,"Neu":1798,"Unfav":3667},"N":9096},"TW02":{"Dist":{"Fav":3652,"Neu":1906,"Unfav":3555},"N":9113},"DC08":{"Dist":{"Fav":3600,"Neu":1781,"Unfav":3724},"N":9105},"GP03":{"Dist":{"Fav":3728,"Neu":1829,"Unfav":3519},"N":9076},"PE01":{"Dist":{"Fav":3657,"Neu":1841,"Unfav":3678},"N":9176},"AV01":{"Dist":{"Fav":3657,"Neu":1793,"Unfav":3612},"N":9062},"AV08":{"Dist":{"Fav":3605,"Neu":1818,"Unfav":3699},"N":9122},"BN04":{"Dist":{"Fav":3665,"Neu":1821,"Unfav":3601},"N":9087},"CP16":{"Dist":{"Fav":3632,"Neu":1807,"Unfav":3659},"N":9098},"PE10":{"Dist":{"Fav":3617,"Neu":1866,"Unfav":3615},"N":9098},"PE21":{"Dist":{"Fav":3624,"Neu":1816,"Unfav":3618},"N":9058},"OM04":{"Dist":{"Fav":3628,"Neu":1773,"Unfav":3693},"N":9094},"QS09":{"Dist":{"Fav":3595,"Neu":1836,"Unfav":3676},"N":9107},"SP04":{"Dist":{"Fav":3594,"Neu":1875,"Unfav":3596},"N":9065},"WK01":{"Dist":{"Fav":3620,"Neu":1704,"Unfav":3711},"N":9035},"DI03":{"Dist":{"Fav":3612,"Neu":1828,"Unfav":3665},"N":9105},"WK02":{"Dist":{"Fav":3617,"Neu":1780,"Unfav":3680},"N":9077},"SP47":{"Dist":{"Fav":3565,"Neu":1881,"Unfav":3653},"N":9099},"WS01":{"Dist":{"Fav":3735,"Neu":1822,"Unfav":3566},"N":9123},"DC09":{"Dist":{"Fav":3668,"Neu":1813,"Unfav":3664},"N":9145},"AV02":{"Dist":{"Fav":9027,"Neu":1550,"Unfav":1237},"N":11814},"DI04":{"Dist":{"Fav":8960,"Neu":1452,"Unfav":1403},"N":11815},"IV05":{"Dist":{"Fav":1828,"Neu":574,"Unfav":509},"N":2911},"OM06":{"Dist":{"Fav":2171,"Neu":2186,"Unfav":4432},"N":8789},"NSQ1":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null}},
		"ITEMS.2019.389.0": {"RE01":{"Dist":{"Fav":10622,"Neu":1380,"Unfav":1083},"N":13085},"DM02":{"Dist":{"Fav":10932,"Neu":1106,"Unfav":1046},"N":13084},"RC01":{"Dist":{"Fav":9407,"Neu":2020,"Unfav":1641},"N":13068},"TW06":{"Dist":{"Fav":10638,"Neu":1367,"Unfav":1076},"N":13081},"QS01":{"Dist":{"Fav":9858,"Neu":1921,"Unfav":1304},"N":13083},"PE09":{"Dist":{"Fav":9858,"Neu":1921,"Unfav":1304},"N":13083},"AV15":{"Dist":{"Fav":11507,"Neu":892,"Unfav":682},"N":13081},"LD04":{"Dist":{"Fav":9530,"Neu":1887,"Unfav":1656},"N":13073},"WS03":{"Dist":{"Fav":11058,"Neu":1096,"Unfav":919},"N":13073},"TR09":{"Dist":{"Fav":10385,"Neu":1640,"Unfav":1047},"N":13072},"PE06":{"Dist":{"Fav":10992,"Neu":1238,"Unfav":755},"N":12985},"SD04":{"Dist":{"Fav":9654,"Neu":1830,"Unfav":1579},"N":13063},"PE03":{"Dist":{"Fav":10231,"Neu":1721,"Unfav":1065},"N":13017},"OM12":{"Dist":{"Fav":10153,"Neu":1618,"Unfav":1123},"N":12894},"QS16":{"Dist":{"Fav":8703,"Neu":2589,"Unfav":1712},"N":13004},"LD09":{"Dist":{"Fav":10185,"Neu":1528,"Unfav":1351},"N":13064},"TR01":{"Dist":{"Fav":11107,"Neu":1273,"Unfav":681},"N":13061},"VC04":{"Dist":{"Fav":11121,"Neu":1416,"Unfav":517},"N":13054},"GP07":{"Dist":{"Fav":7355,"Neu":2751,"Unfav":2697},"N":12803},"ER01":{"Dist":{"Fav":8852,"Neu":2238,"Unfav":1960},"N":13050},"IV02":{"Dist":{"Fav":7914,"Neu":2672,"Unfav":2420},"N":13006},"CP14":{"Dist":{"Fav":7059,"Neu":2714,"Unfav":3150},"N":12923},"GP12":{"Dist":{"Fav":10218,"Neu":1716,"Unfav":976},"N":12910},"CP11":{"Dist":{"Fav":10813,"Neu":1331,"Unfav":318},"N":12462},"WE01":{"Dist":{"Fav":10820,"Neu":1432,"Unfav":809},"N":13061},"IV04":{"Dist":{"Fav":10051,"Neu":2158,"Unfav":498},"N":12707},"WE12":{"Dist":{"Fav":9284,"Neu":2383,"Unfav":1207},"N":12874},"SP12":{"Dist":{"Fav":8985,"Neu":2605,"Unfav":1460},"N":13050},"AV09":{"Dist":{"Fav":10982,"Neu":1511,"Unfav":319},"N":12812},"TW04":{"Dist":{"Fav":5985,"Neu":3732,"Unfav":1069},"N":10786},"CP12":{"Dist":{"Fav":9717,"Neu":2107,"Unfav":1157},"N":12981},"DC11":{"Dist":{"Fav":10884,"Neu":1744,"Unfav":439},"N":13067},"BN01":{"Dist":{"Fav":10393,"Neu":1704,"Unfav":952},"N":13049},"GP09":{"Dist":{"Fav":8965,"Neu":1921,"Unfav":2191},"N":13077},"QS03":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null},"OM01":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null},"TR04":{"Dist":{"Fav":7940,"Neu":2307,"Unfav":2830},"N":13077},"QS02":{"Dist":{"Fav":4322,"Neu":2138,"Unfav":4291},"N":10751},"JS05":{"Dist":{"Fav":4358,"Neu":2223,"Unfav":4167},"N":10748},"OM11":{"Dist":{"Fav":4371,"Neu":2123,"Unfav":4278},"N":10772},"SD05":{"Dist":{"Fav":4344,"Neu":2214,"Unfav":4189},"N":10747},"SD03":{"Dist":{"Fav":4331,"Neu":2153,"Unfav":4304},"N":10788},"OS02":{"Dist":{"Fav":4332,"Neu":2186,"Unfav":4264},"N":10782},"JS02":{"Dist":{"Fav":4279,"Neu":2175,"Unfav":4319},"N":10773},"ST01":{"Dist":{"Fav":4252,"Neu":2174,"Unfav":4395},"N":10821},"WL01":{"Dist":{"Fav":4312,"Neu":2184,"Unfav":4318},"N":10814},"GP10":{"Dist":{"Fav":4242,"Neu":2216,"Unfav":4300},"N":10758},"WE08":{"Dist":{"Fav":4246,"Neu":2190,"Unfav":4384},"N":10820},"DM04":{"Dist":{"Fav":4297,"Neu":2187,"Unfav":4299},"N":10783},"DM18":{"Dist":{"Fav":4289,"Neu":2164,"Unfav":4271},"N":10724},"SP45":{"Dist":{"Fav":4341,"Neu":2183,"Unfav":4215},"N":10739},"SV03":{"Dist":{"Fav":4300,"Neu":2079,"Unfav":4340},"N":10719},"SR05":{"Dist":{"Fav":4383,"Neu":2086,"Unfav":4275},"N":10744},"SR03":{"Dist":{"Fav":4324,"Neu":2108,"Unfav":4295},"N":10727},"TW02":{"Dist":{"Fav":4343,"Neu":2240,"Unfav":4205},"N":10788},"DC08":{"Dist":{"Fav":4293,"Neu":2153,"Unfav":4325},"N":10771},"GP03":{"Dist":{"Fav":4357,"Neu":2166,"Unfav":4285},"N":10808},"PE01":{"Dist":{"Fav":4312,"Neu":2144,"Unfav":4343},"N":10799},"AV01":{"Dist":{"Fav":4334,"Neu":2220,"Unfav":4220},"N":10774},"AV08":{"Dist":{"Fav":4351,"Neu":2098,"Unfav":4319},"N":10768},"BN04":{"Dist":{"Fav":4335,"Neu":2105,"Unfav":4266},"N":10706},"CP16":{"Dist":{"Fav":4200,"Neu":2145,"Unfav":4292},"N":10637},"PE10":{"Dist":{"Fav":4355,"Neu":2190,"Unfav":4226},"N":10771},"PE21":{"Dist":{"Fav":4318,"Neu":2182,"Unfav":4318},"N":10818},"OM04":{"Dist":{"Fav":4277,"Neu":2158,"Unfav":4269},"N":10704},"QS09":{"Dist":{"Fav":4199,"Neu":2229,"Unfav":4292},"N":10720},"SP04":{"Dist":{"Fav":4242,"Neu":2239,"Unfav":4246},"N":10727},"WK01":{"Dist":{"Fav":4229,"Neu":2164,"Unfav":4286},"N":10679},"DI03":{"Dist":{"Fav":4236,"Neu":2108,"Unfav":4383},"N":10727},"WK02":{"Dist":{"Fav":4257,"Neu":2151,"Unfav":4316},"N":10724},"SP47":{"Dist":{"Fav":4307,"Neu":2111,"Unfav":4300},"N":10718},"WS01":{"Dist":{"Fav":4295,"Neu":2144,"Unfav":4272},"N":10711},"DC09":{"Dist":{"Fav":4308,"Neu":2156,"Unfav":4310},"N":10774},"AV02":{"Dist":{"Fav":10622,"Neu":1380,"Unfav":1083},"N":13085},"DI04":{"Dist":{"Fav":10932,"Neu":1106,"Unfav":1046},"N":13084},"IV05":{"Dist":{"Fav":9407,"Neu":2020,"Unfav":1641},"N":13068},"OM06":{"Dist":{"Fav":2614,"Neu":2556,"Unfav":5166},"N":10336},"NSQ1":{"Dist":{"Fav":5905,"Neu":4482,"Unfav":2707},"N":13094}},
		"ITEMS.2020.389.0": {"RE01":{"Dist":{"Fav":12736,"Neu":1667,"Unfav":1402},"N":15805},"DM02":{"Dist":{"Fav":12898,"Neu":1479,"Unfav":1427},"N":15804},"RC01":{"Dist":{"Fav":11402,"Neu":2445,"Unfav":1938},"N":15785},"TW06":{"Dist":{"Fav":12663,"Neu":1773,"Unfav":1353},"N":15789},"QS01":{"Dist":{"Fav":11756,"Neu":2356,"Unfav":1689},"N":15801},"PE09":{"Dist":{"Fav":11756,"Neu":2356,"Unfav":1689},"N":15801},"AV15":{"Dist":{"Fav":13713,"Neu":1129,"Unfav":952},"N":15794},"LD04":{"Dist":{"Fav":11597,"Neu":2185,"Unfav":2017},"N":15799},"WS03":{"Dist":{"Fav":13086,"Neu":1485,"Unfav":1221},"N":15792},"TR09":{"Dist":{"Fav":12518,"Neu":1980,"Unfav":1297},"N":15795},"PE06":{"Dist":{"Fav":13325,"Neu":1451,"Unfav":909},"N":15685},"SD04":{"Dist":{"Fav":11495,"Neu":2271,"Unfav":2014},"N":15780},"PE03":{"Dist":{"Fav":12227,"Neu":2181,"Unfav":1313},"N":15721},"OM12":{"Dist":{"Fav":12045,"Neu":2117,"Unfav":1399},"N":15561},"QS16":{"Dist":{"Fav":10409,"Neu":3276,"Unfav":2027},"N":15712},"LD09":{"Dist":{"Fav":12136,"Neu":1981,"Unfav":1642},"N":15759},"TR01":{"Dist":{"Fav":13425,"Neu":1545,"Unfav":806},"N":15776},"VC04":{"Dist":{"Fav":13514,"Neu":1695,"Unfav":558},"N":15767},"GP07":{"Dist":{"Fav":8416,"Neu":3531,"Unfav":3545},"N":15492},"ER01":{"Dist":{"Fav":10246,"Neu":3013,"Unfav":2496},"N":15755},"IV02":{"Dist":{"Fav":9895,"Neu":3299,"Unfav":2527},"N":15721},"CP14":{"Dist":{"Fav":8337,"Neu":3462,"Unfav":3809},"N":15608},"GP12":{"Dist":{"Fav":12119,"Neu":2188,"Unfav":1294},"N":15601},"CP11":{"Dist":{"Fav":13253,"Neu":1547,"Unfav":351},"N":15151},"WE01":{"Dist":{"Fav":13253,"Neu":1610,"Unfav":931},"N":15794},"IV04":{"Dist":{"Fav":12107,"Neu":2677,"Unfav":615},"N":15399},"WE12":{"Dist":{"Fav":11299,"Neu":2798,"Unfav":1516},"N":15613},"SP12":{"Dist":{"Fav":10742,"Neu":3123,"Unfav":1921},"N":15786},"AV09":{"Dist":{"Fav":13110,"Neu":1995,"Unfav":384},"N":15489},"TW04":{"Dist":{"Fav":8515,"Neu":4251,"Unfav":1425},"N":14191},"CP12":{"Dist":{"Fav":11640,"Neu":2649,"Unfav":1424},"N":15713},"DC11":{"Dist":{"Fav":13060,"Neu":2157,"Unfav":575},"N":15792},"BN01":{"Dist":{"Fav":12103,"Neu":2407,"Unfav":1248},"N":15758},"GP09":{"Dist":{"Fav":10323,"Neu":2610,"Unfav":2862},"N":15795},"QS03":{"Dist":{"Fav":13382,"Neu":1670,"Unfav":566},"N":15618},"OM01":{"Dist":{"Fav":12838,"Neu":1849,"Unfav":730},"N":15417},"TR04":{"Dist":{"Fav":8539,"Neu":3804,"Unfav":3441},"N":15784},"QS02":{"Dist":{"Fav":5230,"Neu":2567,"Unfav":5166},"N":12963},"JS05":{"Dist":{"Fav":5222,"Neu":2610,"Unfav":5069},"N":12901},"OM11":{"Dist":{"Fav":5252,"Neu":2596,"Unfav":5166},"N":13014},"SD05":{"Dist":{"Fav":5298,"Neu":2643,"Unfav":5030},"N":12971},"SD03":{"Dist":{"Fav":5207,"Neu":2622,"Unfav":5216},"N":13045},"OS02":{"Dist":{"Fav":5250,"Neu":2624,"Unfav":5130},"N":13004},"JS02":{"Dist":{"Fav":5225,"Neu":2556,"Unfav":5229},"N":13010},"ST01":{"Dist":{"Fav":5127,"Neu":2636,"Unfav":5252},"N":13015},"WL01":{"Dist":{"Fav":5137,"Neu":2675,"Unfav":5179},"N":12991},"GP10":{"Dist":{"Fav":5100,"Neu":2568,"Unfav":5356},"N":13024},"WE08":{"Dist":{"Fav":5220,"Neu":2618,"Unfav":5204},"N":13042},"DM04":{"Dist":{"Fav":5193,"Neu":2605,"Unfav":5191},"N":12989},"DM18":{"Dist":{"Fav":5158,"Neu":2562,"Unfav":5173},"N":12893},"SP45":{"Dist":{"Fav":5247,"Neu":2663,"Unfav":5031},"N":12941},"SV03":{"Dist":{"Fav":5163,"Neu":2542,"Unfav":5217},"N":12922},"SR05":{"Dist":{"Fav":5267,"Neu":2531,"Unfav":5230},"N":13028},"SR03":{"Dist":{"Fav":5197,"Neu":2562,"Unfav":5180},"N":12939},"TW02":{"Dist":{"Fav":5153,"Neu":2736,"Unfav":5108},"N":12997},"DC08":{"Dist":{"Fav":5135,"Neu":2534,"Unfav":5275},"N":12944},"GP03":{"Dist":{"Fav":5315,"Neu":2579,"Unfav":5108},"N":13002},"PE01":{"Dist":{"Fav":5233,"Neu":2571,"Unfav":5197},"N":13001},"AV01":{"Dist":{"Fav":5259,"Neu":2661,"Unfav":5116},"N":13036},"AV08":{"Dist":{"Fav":5168,"Neu":2550,"Unfav":5250},"N":12968},"BN04":{"Dist":{"Fav":5278,"Neu":2558,"Unfav":5097},"N":12933},"CP16":{"Dist":{"Fav":5094,"Neu":2546,"Unfav":5205},"N":12845},"PE10":{"Dist":{"Fav":5220,"Neu":2594,"Unfav":5117},"N":12931},"PE21":{"Dist":{"Fav":5204,"Neu":2612,"Unfav":5184},"N":13000},"OM04":{"Dist":{"Fav":5149,"Neu":2605,"Unfav":5204},"N":12958},"QS09":{"Dist":{"Fav":5120,"Neu":2597,"Unfav":5232},"N":12949},"SP04":{"Dist":{"Fav":5112,"Neu":2664,"Unfav":5142},"N":12918},"WK01":{"Dist":{"Fav":5103,"Neu":2608,"Unfav":5215},"N":12926},"DI03":{"Dist":{"Fav":5126,"Neu":2606,"Unfav":5280},"N":13012},"WK02":{"Dist":{"Fav":5088,"Neu":2637,"Unfav":5176},"N":12901},"SP47":{"Dist":{"Fav":5160,"Neu":2620,"Unfav":5097},"N":12877},"WS01":{"Dist":{"Fav":5232,"Neu":2544,"Unfav":5096},"N":12872},"DC09":{"Dist":{"Fav":5222,"Neu":2529,"Unfav":5218},"N":12969},"AV02":{"Dist":{"Fav":12736,"Neu":1667,"Unfav":1402},"N":15805},"DI04":{"Dist":{"Fav":12898,"Neu":1479,"Unfav":1427},"N":15804},"IV05":{"Dist":{"Fav":11402,"Neu":2445,"Unfav":1938},"N":15785},"OM06":{"Dist":{"Fav":3103,"Neu":3152,"Unfav":6226},"N":12481},"NSQ1":{"Dist":{"Fav":6905,"Neu":5489,"Unfav":3420},"N":15814}},

		//test for null
		//"ITEMS.2020.389.0": {"RE01":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null},"DM02":{"Dist":{"Fav":12898,"Neu":1479,"Unfav":1427},"N":15804},"RC01":{"Dist":{"Fav":11402,"Neu":2445,"Unfav":1938},"N":15785},"TW06":{"Dist":{"Fav":12663,"Neu":1773,"Unfav":1353},"N":15789},"QS01":{"Dist":{"Fav":11756,"Neu":2356,"Unfav":1689},"N":15801},"PE09":{"Dist":{"Fav":11756,"Neu":2356,"Unfav":1689},"N":15801},"AV15":{"Dist":{"Fav":13713,"Neu":1129,"Unfav":952},"N":15794},"LD04":{"Dist":{"Fav":11597,"Neu":2185,"Unfav":2017},"N":15799},"WS03":{"Dist":{"Fav":13086,"Neu":1485,"Unfav":1221},"N":15792},"TR09":{"Dist":{"Fav":12518,"Neu":1980,"Unfav":1297},"N":15795},"PE06":{"Dist":{"Fav":13325,"Neu":1451,"Unfav":909},"N":15685},"SD04":{"Dist":{"Fav":11495,"Neu":2271,"Unfav":2014},"N":15780},"PE03":{"Dist":{"Fav":12227,"Neu":2181,"Unfav":1313},"N":15721},"OM12":{"Dist":{"Fav":null,"Neu":2117,"Unfav":null},"N":15561},"QS16":{"Dist":{"Fav":10409,"Neu":3276,"Unfav":2027},"N":15712},"LD09":{"Dist":{"Fav":12136,"Neu":1981,"Unfav":1642},"N":15759},"TR01":{"Dist":{"Fav":13425,"Neu":1545,"Unfav":806},"N":15776},"VC04":{"Dist":{"Fav":13514,"Neu":1695,"Unfav":558},"N":15767},"GP07":{"Dist":{"Fav":8416,"Neu":3531,"Unfav":3545},"N":15492},"ER01":{"Dist":{"Fav":10246,"Neu":3013,"Unfav":2496},"N":15755},"IV02":{"Dist":{"Fav":9895,"Neu":3299,"Unfav":2527},"N":15721},"CP14":{"Dist":{"Fav":8337,"Neu":3462,"Unfav":3809},"N":15608},"GP12":{"Dist":{"Fav":12119,"Neu":2188,"Unfav":1294},"N":15601},"CP11":{"Dist":{"Fav":13253,"Neu":1547,"Unfav":351},"N":15151},"WE01":{"Dist":{"Fav":13253,"Neu":1610,"Unfav":931},"N":15794},"IV04":{"Dist":{"Fav":12107,"Neu":2677,"Unfav":615},"N":15399},"WE12":{"Dist":{"Fav":11299,"Neu":2798,"Unfav":1516},"N":15613},"SP12":{"Dist":{"Fav":10742,"Neu":3123,"Unfav":1921},"N":15786},"AV09":{"Dist":{"Fav":13110,"Neu":1995,"Unfav":384},"N":15489},"TW04":{"Dist":{"Fav":8515,"Neu":4251,"Unfav":1425},"N":14191},"CP12":{"Dist":{"Fav":11640,"Neu":2649,"Unfav":1424},"N":15713},"DC11":{"Dist":{"Fav":13060,"Neu":2157,"Unfav":575},"N":15792},"BN01":{"Dist":{"Fav":12103,"Neu":2407,"Unfav":1248},"N":15758},"GP09":{"Dist":{"Fav":10323,"Neu":2610,"Unfav":2862},"N":15795},"QS03":{"Dist":{"Fav":13382,"Neu":1670,"Unfav":566},"N":15618},"OM01":{"Dist":{"Fav":12838,"Neu":1849,"Unfav":730},"N":15417},"TR04":{"Dist":{"Fav":8539,"Neu":3804,"Unfav":3441},"N":15784},"QS02":{"Dist":{"Fav":5230,"Neu":2567,"Unfav":5166},"N":12963},"JS05":{"Dist":{"Fav":5222,"Neu":2610,"Unfav":5069},"N":12901},"OM11":{"Dist":{"Fav":5252,"Neu":2596,"Unfav":5166},"N":13014},"SD05":{"Dist":{"Fav":5298,"Neu":2643,"Unfav":5030},"N":12971},"SD03":{"Dist":{"Fav":5207,"Neu":2622,"Unfav":5216},"N":13045},"OS02":{"Dist":{"Fav":5250,"Neu":2624,"Unfav":5130},"N":13004},"JS02":{"Dist":{"Fav":5225,"Neu":2556,"Unfav":5229},"N":13010},"ST01":{"Dist":{"Fav":5127,"Neu":2636,"Unfav":5252},"N":13015},"WL01":{"Dist":{"Fav":5137,"Neu":2675,"Unfav":5179},"N":12991},"GP10":{"Dist":{"Fav":5100,"Neu":2568,"Unfav":5356},"N":13024},"WE08":{"Dist":{"Fav":5220,"Neu":2618,"Unfav":5204},"N":13042},"DM04":{"Dist":{"Fav":5193,"Neu":2605,"Unfav":5191},"N":12989},"DM18":{"Dist":{"Fav":5158,"Neu":2562,"Unfav":5173},"N":12893},"SP45":{"Dist":{"Fav":5247,"Neu":2663,"Unfav":5031},"N":12941},"SV03":{"Dist":{"Fav":5163,"Neu":2542,"Unfav":5217},"N":12922},"SR05":{"Dist":{"Fav":5267,"Neu":2531,"Unfav":5230},"N":13028},"SR03":{"Dist":{"Fav":5197,"Neu":2562,"Unfav":5180},"N":12939},"TW02":{"Dist":{"Fav":5153,"Neu":2736,"Unfav":5108},"N":12997},"DC08":{"Dist":{"Fav":5135,"Neu":2534,"Unfav":5275},"N":12944},"GP03":{"Dist":{"Fav":5315,"Neu":2579,"Unfav":5108},"N":13002},"PE01":{"Dist":{"Fav":5233,"Neu":2571,"Unfav":5197},"N":13001},"AV01":{"Dist":{"Fav":5259,"Neu":2661,"Unfav":5116},"N":13036},"AV08":{"Dist":{"Fav":5168,"Neu":2550,"Unfav":5250},"N":12968},"BN04":{"Dist":{"Fav":5278,"Neu":2558,"Unfav":5097},"N":12933},"CP16":{"Dist":{"Fav":5094,"Neu":2546,"Unfav":5205},"N":12845},"PE10":{"Dist":{"Fav":5220,"Neu":2594,"Unfav":5117},"N":12931},"PE21":{"Dist":{"Fav":5204,"Neu":2612,"Unfav":5184},"N":13000},"OM04":{"Dist":{"Fav":5149,"Neu":2605,"Unfav":5204},"N":12958},"QS09":{"Dist":{"Fav":5120,"Neu":2597,"Unfav":5232},"N":12949},"SP04":{"Dist":{"Fav":5112,"Neu":2664,"Unfav":5142},"N":12918},"WK01":{"Dist":{"Fav":5103,"Neu":2608,"Unfav":5215},"N":12926},"DI03":{"Dist":{"Fav":5126,"Neu":2606,"Unfav":5280},"N":13012},"WK02":{"Dist":{"Fav":5088,"Neu":2637,"Unfav":5176},"N":12901},"SP47":{"Dist":{"Fav":5160,"Neu":2620,"Unfav":5097},"N":12877},"WS01":{"Dist":{"Fav":5232,"Neu":2544,"Unfav":5096},"N":12872},"DC09":{"Dist":{"Fav":5222,"Neu":2529,"Unfav":5218},"N":12969},"AV02":{"Dist":{"Fav":12736,"Neu":1667,"Unfav":1402},"N":15805},"DI04":{"Dist":{"Fav":12898,"Neu":1479,"Unfav":1427},"N":15804},"IV05":{"Dist":{"Fav":11402,"Neu":2445,"Unfav":1938},"N":15785},"OM06":{"Dist":{"Fav":3103,"Neu":3152,"Unfav":6226},"N":12481},"NSQ1":{"Dist":{"Fav":6905,"Neu":5489,"Unfav":3420},"N":15814}},

		// DIMENSIONS
		"DIMS.2018.389.0": {"DIM_ENG":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":9142},"DIM_ENA":{"Dist":{"Fav":47,"Neu":20,"Unfav":34},"N":9132},"DIM_N64":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":11814},"DIM_N50":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":11815},"DIM_N65":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":9126},"DIM_N52":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":11811},"DIM_N63":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":9107},"DIM_N61":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":9098},"DIM_N54":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":11815},"DIM_N53":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":11814},"DIM_N66":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":11812},"DIM_N51":{"Dist":{"Fav":45,"Neu":21,"Unfav":34},"N":9176},"DIM_N67":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":9145},"DIM_N60":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":11792},"DIM_NPS":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null}},
		"DIMS.2019.389.0": {"DIM_ENG":{"Dist":{"Fav":40,"Neu":40,"Unfav":20},"N":12894},"DIM_ENA":{"Dist":{"Fav":48,"Neu":20,"Unfav":32},"N":12874},"DIM_N64":{"Dist":{"Fav":66,"Neu":15,"Unfav":20},"N":13085},"DIM_N50":{"Dist":{"Fav":72,"Neu":14,"Unfav":14},"N":13084},"DIM_N65":{"Dist":{"Fav":50,"Neu":19,"Unfav":32},"N":13068},"DIM_N52":{"Dist":{"Fav":57,"Neu":20,"Unfav":23},"N":13081},"DIM_N63":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":13083},"DIM_N61":{"Dist":{"Fav":62,"Neu":17,"Unfav":21},"N":13083},"DIM_N54":{"Dist":{"Fav":65,"Neu":16,"Unfav":19},"N":13081},"DIM_N53":{"Dist":{"Fav":56,"Neu":17,"Unfav":27},"N":13073},"DIM_N66":{"Dist":{"Fav":66,"Neu":15,"Unfav":19},"N":13077},"DIM_N51":{"Dist":{"Fav":49,"Neu":19,"Unfav":32},"N":13063},"DIM_N67":{"Dist":{"Fav":51,"Neu":19,"Unfav":31},"N":13061},"DIM_N60":{"Dist":{"Fav":64,"Neu":16,"Unfav":20},"N":13049},"DIM_NPS":{"Dist":{"Fav":45,"Neu":34,"Unfav":21},"N":13094}},
		"DIMS.2020.389.0": {"DIM_ENG":{"Dist":{"Fav":53,"Neu":18,"Unfav":29},"N":15561},"DIM_ENA":{"Dist":{"Fav":48,"Neu":20,"Unfav":32},"N":15613},"DIM_N64":{"Dist":{"Fav":65,"Neu":15,"Unfav":20},"N":15805},"DIM_N50":{"Dist":{"Fav":72,"Neu":14,"Unfav":14},"N":15804},"DIM_N65":{"Dist":{"Fav":49,"Neu":19,"Unfav":32},"N":15785},"DIM_N52":{"Dist":{"Fav":57,"Neu":20,"Unfav":23},"N":15795},"DIM_N63":{"Dist":{"Fav":58,"Neu":18,"Unfav":25},"N":15801},"DIM_N61":{"Dist":{"Fav":62,"Neu":17,"Unfav":22},"N":15801},"DIM_N54":{"Dist":{"Fav":64,"Neu":16,"Unfav":20},"N":15794},"DIM_N53":{"Dist":{"Fav":56,"Neu":17,"Unfav":27},"N":15799},"DIM_N66":{"Dist":{"Fav":65,"Neu":17,"Unfav":19},"N":15795},"DIM_N51":{"Dist":{"Fav":48,"Neu":20,"Unfav":32},"N":15780},"DIM_N67":{"Dist":{"Fav":51,"Neu":19,"Unfav":30},"N":15794},"DIM_N60":{"Dist":{"Fav":64,"Neu":16,"Unfav":20},"N":15758},"DIM_NPS":{"Dist":{"Fav":44,"Neu":35,"Unfav":22},"N":15814}},

		//test for null
		//"DIMS.2020.389.0": {"DIM_ENG":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":15561},"DIM_ENA":{"Dist":{"Fav":48,"Neu":20,"Unfav":32},"N":15613},"DIM_N64":{"Dist":{"Fav":65,"Neu":15,"Unfav":20},"N":15805},"DIM_N50":{"Dist":{"Fav":72,"Neu":14,"Unfav":14},"N":15804},"DIM_N65":{"Dist":{"Fav":49,"Neu":19,"Unfav":32},"N":15785},"DIM_N52":{"Dist":{"Fav":57,"Neu":20,"Unfav":23},"N":15795},"DIM_N63":{"Dist":{"Fav":58,"Neu":18,"Unfav":25},"N":15801},"DIM_N61":{"Dist":{"Fav":62,"Neu":17,"Unfav":22},"N":15801},"DIM_N54":{"Dist":{"Fav":64,"Neu":16,"Unfav":20},"N":15794},"DIM_N53":{"Dist":{"Fav":56,"Neu":17,"Unfav":27},"N":15799},"DIM_N66":{"Dist":{"Fav":65,"Neu":17,"Unfav":19},"N":15795},"DIM_N51":{"Dist":{"Fav":48,"Neu":20,"Unfav":32},"N":15780},"DIM_N67":{"Dist":{"Fav":51,"Neu":19,"Unfav":30},"N":15794},"DIM_N60":{"Dist":{"Fav":64,"Neu":16,"Unfav":20},"N":15758},"DIM_NPS":{"Dist":{"Fav":44,"Neu":35,"Unfav":22},"N":15814}},

		// ENPS
		"ENPS.2020.389.0": {
			"Dist": {
				"Detractors": 3420,
				"Neutrals": 5489,
				"Promoters": 6905
			},
			"N": 15814
		},
		//test for null
		/*"ENPS.2020.389.0": {
			"Dist": {
				"Detractors": 3420,
				"Neutrals": 5489,
				"Promoters": null
			},
			"N": 15814
		},*/
		"ENPS.2018.389.0": {
			"Dist": {
				"Detractors": null,
				"Neutrals": null,
				"Promoters": null
			},
			"N": null
		},
		"ENPS.2019.389.0": {
			"Dist": {
				"Detractors": 2707,
				"Neutrals": 4482,
				"Promoters": 5905
			},
			"N": 13094
		},

		// EP
		"EP.2020.389.0": {
			"Dist": {
				"MostEffective": 9462,
				"Frustrated": 2256,
				"Detached": 1538,
				"LeastEffective": 4018
			},
			"N": 17274
		},
		"EP.2018.389.0": {
			"Dist": {
				"MostEffective": 5546,
				"Frustrated": 2357,
				"Detached": 789,
				"LeastEffective": 3128
			},
			"N": 11820
		},
		"EP.2019.389.0": {
			"Dist": {
				"MostEffective": 7625,
				"Frustrated": 1377,
				"Detached": 1285,
				"LeastEffective": 2805
			},
			"N": 13092
		}
	};
}


// Data object

// User
if (data.User == null) {

	var user = {
		FirstName: 'FirstName',
		LastName: 'LastName',
		Email: 'email',
		Roles: ['role1', 'role2'],
		PersonalizedReportBase: 389,
		PersonalizedReportBaseText: "Company Overall"
	};

	data.User = user;
	data.User.IsTestData = true;
}

// Report
if (data.Report == null) {
	var report = {
		CurrentLanguage: '9', // English
		ReportBase: 'TestReportBaseId',
		IsTestData: true
	}

	data.Report = report;
}

// Comments
if (data.Comments == null) {
	var verbatims = {
		"Comm1": [
			{ "Comment": "Those an equal point no years do. Depend warmth fat but her but played. Shy and subjects wondered trifling pleasant. Prudent cordial comfort do no on colonel as assured chicken. Smart mrs day which begin. Snug do sold mr it if such. ", "Category": "14" },
			{ "Comment": "Bringing so sociable felicity supplied mr. September suspicion far him two acuteness perfectly. Covered as an examine so regular of. Ye astonished friendship remarkably no. Window admire matter praise you bed whence. Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen yet blushes. Entire its the did figure wonder off. Agreed joy vanity regret met may ladies oppose who. Mile fail as left as hard eyes. Meet made call in mean four year it to. Prospect so branched wondered sensible of up. For gay consisted resolving pronounce sportsman saw discovery not. Northward or household as conveying we earnestly believing. No in up contrasted discretion inhabiting excellence. Entreaties we collecting unpleasant at everything conviction. Made last it seen went no just when of by. Occasional entreaties comparison me difficulty so themselves. At brother inquiry of offices without do my service. As particular to companions at sentiments. Weather however luckily enquire so certain do. Aware did stood was day under ask. Dearest affixed enquire on explain opinion he. Reached who the mrs joy offices pleased. Towards did colonel article any parties. So by colonel hearted ferrars. Draw from upon here gone add one. He in sportsman household otherwise it perceived instantly. Is inquiry no he several excited am. Called though excuse length ye needed it he having. Whatever throwing we on resolved entrance together graceful. Mrs assured add private married removed believe did she. Not far stuff she think the jokes. Going as by do known noise he wrote round leave. Warmly put branch people narrow see. Winding its waiting yet parlors married own feeling. Marry fruit do spite jokes an times. Whether at it unknown warrant herself winding if. Him same none name sake had post love. An busy feel form hand am up help. Parties it brother amongst an fortune of. Twenty behind wicket why age now itself ten. Full age sex set feel her told. Tastes giving in passed direct me valley as supply. End great stood boy noisy often way taken short. Rent the size our more door. Years no place abode in ﻿no child my. Man pianoforte too solicitude friendship devonshire ten ask. Course sooner its silent but formal she led. Extensive he assurance extremity at breakfast. Dear sure ye sold fine sell on. Projection at up connection literature insensible motionless projecting.", "Category": null },
			{ "Comment": "Comment about Resources", "Category": "3" },
			{ "Comment": "Comment about Collaboration", "Category": "6" },
			{ "Comment": "Comment about Confidence in Leaders", "Category": "10" },
			{ "Comment": "Comment about Clear & Promising Direction", "Category": "12" },
			{ "Comment": "Comment about Collaboration", "Category": "6" },
			{ "Comment": "Comment about Employee Enablement", "Category": "2" },
			{ "Comment": "Comment about Authority & Empowerment", "Category": "4" },
			{ "Comment": "Comment about Collaboration", "Category": "6" },
			{ "Comment": "Comment about Quality & Customer Focus", "Category": "7" },
			{ "Comment": "Comment about Resources", "Category": "3" },
			{ "Comment": "Comment about Confidence in Leaders", "Category": "10" },
			{ "Comment": "Comment about Respect & Recognition", "Category": "5" },
			{ "Comment": "Comment about Clear & Promising Direction", "Category": "12" },
			{ "Comment": "Comment about Training", "Category": "11" },
			{ "Comment": "Comment about Resources", "Category": "3" },
			{ "Comment": "Comment about Pay & Benefits", "Category": "14" },
			{ "Comment": "Comment about Quality & Customer Focus", "Category": "7" },
			{ "Comment": "Comment about Employee Enablement", "Category": "2" },
			{ "Comment": "Comment about Employee Engagement", "Category": "1" },
			{ "Comment": "Comment about Collaboration", "Category": "6" },
			{ "Comment": "Comment about Respect & Recognition", "Category": "5" },
			{ "Comment": "Comment about Collaboration", "Category": "6" },
			{ "Comment": "Comment about Employee Engagement", "Category": "1" },
			{ "Comment": "Comment about Pay & Benefits", "Category": "14" },
			{ "Comment": "Comment about Authority & Empowerment", "Category": "4" },
			{ "Comment": "Comment about Confidence in Leaders", "Category": "10" },
			{ "Comment": "Comment about Employee Enablement", "Category": "2" },
			{ "Comment": "Comment about Confidence in Leaders", "Category": "10" },
			{ "Comment": "Comment about Respect & Recognition", "Category": "5" },
			{ "Comment": "Comment about Employee Engagement", "Category": "1" },
			{ "Comment": "Comment about Employee Enablement", "Category": "2" },
			{ "Comment": "Comment about Training", "Category": "11" },
			{ "Comment": "Comment about Quality & Customer Focus", "Category": "7" },
			{ "Comment": "Comment about Pay & Benefits", "Category": "14" },
			{ "Comment": "Comment about Quality & Customer Focus", "Category": "7" },
			{ "Comment": "Comment about Employee Enablement", "Category": "2" },
			{ "Comment": "Comment about Collaboration", "Category": "6" },
			{ "Comment": "Comment about Work, Structure, & Process", "Category": "13" },
			{ "Comment": "Comment about Training", "Category": "11" }
		],
		"Comm2": [
			{ "Comment": "Comment2 about Pay & Benefits", "Category": "14" },
			{ "Comment": "Comment2 about Collaboration", "Category": "6" },
			{ "Comment": "Comment2 about Work, Structure, & Process", "Category": "13" }
		]
	};

	data.Comments = verbatims;
}

/*
if (data.CommentCategories == null) {
	data.CommentCategories = TestData_fillCommentCategoriesData();
}
*/


if (!Main_IsProduction()) {

	// Strengths & Opp

	data['SO.2020.389.0'] = {"S":["CP11","AV15","WS03","TR01","AV09"],"O":["PE01","WK02","OM06","SP04","OM04"]};	


	// ENPS Breakdown

	var tmp = {"ENPSX.2020.389.0.AGE":{"651":{"Dist":{"Detractors":585,"Neutrals":921,"Promoters":1172},"N":2678},"652":{"Dist":{"Detractors":573,"Neutrals":906,"Promoters":1163},"N":2642},"653":{"Dist":{"Detractors":549,"Neutrals":999,"Promoters":1149},"N":2697},"654":{"Dist":{"Detractors":598,"Neutrals":838,"Promoters":1179},"N":2615},"655":{"Dist":{"Detractors":534,"Neutrals":917,"Promoters":1153},"N":2604},"656":{"Dist":{"Detractors":581,"Neutrals":908,"Promoters":1089},"N":2578}},"ENPSX.2018.389.0.AGE":{"651":{"Dist":{"Detractors":0,"Neutrals":0,"Promoters":0}},"652":{"Dist":{"Detractors":0,"Neutrals":0,"Promoters":0}},"653":{"Dist":{"Detractors":0,"Neutrals":0,"Promoters":0}},"654":{"Dist":{"Detractors":0,"Neutrals":0,"Promoters":0}},"655":{"Dist":{"Detractors":0,"Neutrals":0,"Promoters":0}},"656":{"Dist":{"Detractors":0,"Neutrals":0,"Promoters":0}}},"ENPSX.2019.389.0.AGE":{"651":{"Dist":{"Detractors":435,"Neutrals":747,"Promoters":1013}},"652":{"Dist":{"Detractors":447,"Neutrals":745,"Promoters":964}},"653":{"Dist":{"Detractors":482,"Neutrals":730,"Promoters":993}},"654":{"Dist":{"Detractors":435,"Neutrals":745,"Promoters":1002}},"655":{"Dist":{"Detractors":440,"Neutrals":772,"Promoters":979}},"656":{"Dist":{"Detractors":468,"Neutrals":743,"Promoters":954}}}};
	for (var key in tmp) data[key] = tmp[key];

	var tmp = {"ENPSX.2020.389.0.GENDER":{"410":{"Dist":{"Detractors":874,"Neutrals":1417,"Promoters":1695},"N":3986},"420":{"Dist":{"Detractors":894,"Neutrals":1364,"Promoters":1709},"N":3967},"430":{"Dist":{"Detractors":802,"Neutrals":1361,"Promoters":1760},"N":3923},"440":{"Dist":{"Detractors":850,"Neutrals":1347,"Promoters":1741},"N":3938}},"ENPSX.2018.389.0.GENDER":{"410":{"Dist":{"Detractors":0,"Neutrals":0,"Promoters":0}},"420":{"Dist":{"Detractors":0,"Neutrals":0,"Promoters":0}},"430":{"Dist":{"Detractors":0,"Neutrals":0,"Promoters":0}},"440":{"Dist":{"Detractors":0,"Neutrals":0,"Promoters":0}}},"ENPSX.2019.389.0.GENDER":{"410":{"Dist":{"Detractors":688,"Neutrals":1115,"Promoters":1486}},"420":{"Dist":{"Detractors":697,"Neutrals":1108,"Promoters":1495}},"430":{"Dist":{"Detractors":676,"Neutrals":1146,"Promoters":1392}},"440":{"Dist":{"Detractors":646,"Neutrals":1113,"Promoters":1532}}}};
	for (var key in tmp) data[key] = tmp[key];

	// EP Breakdown

	var tmp = {"EPX.2020.389.0.GENDER":{"410":{"Dist":{"MostEffective":2392,"Frustrated":549,"Detached":388,"LeastEffective":1047},"N":4376},"420":{"Dist":{"MostEffective":2331,"Frustrated":587,"Detached":405,"LeastEffective":1024},"N":4347},"430":{"Dist":{"MostEffective":2412,"Frustrated":545,"Detached":386,"LeastEffective":941},"N":4284},"440":{"Dist":{"MostEffective":2327,"Frustrated":575,"Detached":359,"LeastEffective":1006},"N":4267}},"EPX.2018.389.0.GENDER":{"410":{"Dist":{"MostEffective":1394,"Frustrated":576,"Detached":199,"LeastEffective":845}},"420":{"Dist":{"MostEffective":1399,"Frustrated":609,"Detached":204,"LeastEffective":776}},"430":{"Dist":{"MostEffective":1396,"Frustrated":558,"Detached":176,"LeastEffective":759}},"440":{"Dist":{"MostEffective":1357,"Frustrated":614,"Detached":210,"LeastEffective":748}}},"EPX.2019.389.0.GENDER":{"410":{"Dist":{"MostEffective":1863,"Frustrated":377,"Detached":322,"LeastEffective":726}},"420":{"Dist":{"MostEffective":1942,"Frustrated":331,"Detached":316,"LeastEffective":711}},"430":{"Dist":{"MostEffective":1893,"Frustrated":313,"Detached":312,"LeastEffective":696}},"440":{"Dist":{"MostEffective":1927,"Frustrated":356,"Detached":335,"LeastEffective":672}}}};
	for (var key in tmp) data[key] = tmp[key];

	var tmp = {"EPX.2020.389.0.AGE":{"651":{"Dist":{"MostEffective":1612,"Frustrated":382,"Detached":275,"LeastEffective":656},"N":2925},"652":{"Dist":{"MostEffective":1563,"Frustrated":391,"Detached":247,"LeastEffective":683},"N":2884},"653":{"Dist":{"MostEffective":1577,"Frustrated":392,"Detached":242,"LeastEffective":717},"N":2928},"654":{"Dist":{"MostEffective":1581,"Frustrated":388,"Detached":245,"LeastEffective":665},"N":2879},"655":{"Dist":{"MostEffective":1593,"Frustrated":368,"Detached":277,"LeastEffective":608},"N":2846},"656":{"Dist":{"MostEffective":1536,"Frustrated":335,"Detached":252,"LeastEffective":689},"N":2812}},"EPX.2018.389.0.AGE":{"651":{"Dist":{"MostEffective":964,"Frustrated":380,"Detached":135,"LeastEffective":521}},"652":{"Dist":{"MostEffective":982,"Frustrated":390,"Detached":125,"LeastEffective":522}},"653":{"Dist":{"MostEffective":920,"Frustrated":385,"Detached":127,"LeastEffective":548}},"654":{"Dist":{"MostEffective":898,"Frustrated":412,"Detached":126,"LeastEffective":509}},"655":{"Dist":{"MostEffective":917,"Frustrated":403,"Detached":137,"LeastEffective":507}},"656":{"Dist":{"MostEffective":865,"Frustrated":387,"Detached":139,"LeastEffective":521}}},"EPX.2019.389.0.AGE":{"651":{"Dist":{"MostEffective":1280,"Frustrated":240,"Detached":213,"LeastEffective":462}},"652":{"Dist":{"MostEffective":1264,"Frustrated":205,"Detached":214,"LeastEffective":473}},"653":{"Dist":{"MostEffective":1266,"Frustrated":231,"Detached":230,"LeastEffective":477}},"654":{"Dist":{"MostEffective":1282,"Frustrated":243,"Detached":224,"LeastEffective":433}},"655":{"Dist":{"MostEffective":1278,"Frustrated":227,"Detached":212,"LeastEffective":473}},"656":{"Dist":{"MostEffective":1255,"Frustrated":231,"Detached":192,"LeastEffective":487}}}};
	for (var key in tmp) data[key] = tmp[key];
	

}


/*
if (data.Strengths == null) {

	var strengths = ['RE01', 'DM02', 'RC01', 'TW06', 'QS01'];
	var opportunities = ['PE06', 'SD04', 'PE03', 'OM12', 'QS16'];

	data.Strengths = {
		Items: strengths
	};

	data.Opportunities = {
		Items: opportunities
	};

}
*/

// Filters
if (data.Filters == null) {
	data.Filters = {
		Items: {
			"Gender":
			{
				"Label": "Gender",
				"Answers":
					[
						{ "Code": "410", "Label": "Male" },
						{ "Code": "420", "Label": "Female" },
						{ "Code": "430", "Label": "Other/non-binary" },
						{ "Code": "440", "Label": "Prefer not to say" }
					]
			},
			"Age":
			{
				"Label": "Age",
				"Answers":
					[
						{ "Code": "651", "Label": "Under 20" },
						{ "Code": "652", "Label": "20 to 29" },
						{ "Code": "653", "Label": "30 to 39" },
						{ "Code": "654", "Label": "40 to 49" },
						{ "Code": "655", "Label": "50 to 59" },
						{ "Code": "656", "Label": "Over 59" }
					]
			},
			"Tenure":
			{
				"Label": "Tenure",
				"Answers":
					[
						{ "Code": "701", "Label": "Less than 1 year" },
						{ "Code": "702", "Label": "1 year to less than 2 years" },
						{ "Code": "703", "Label": "2 years to less than 5 years" },
						{ "Code": "704", "Label": "5 years to less than 10 years" },
						{ "Code": "705", "Label": "10 years or more" }
					]
			},
			"UnionNon":
			{
				"Label": "Union/Non-Union",
				"Answers":
					[
						{ "Code": "631", "Label": "Union" },
						{ "Code": "632", "Label": "Non-Union" }
					]
			},
			"Wage_Status":
			{
				"Label": "Wage Status",
				"Answers":
					[
						{ "Code": "641", "Label": "Hourly" },
						{ "Code": "642", "Label": "Salaried" }
					]
			}
		},
		"IsTestData": true
	};

	data.Filters.IsTestData = true;
}

/*
// ENPS
if (data.ENPS == null) {
	data.ENPS = TestData_ENPS();
}
*/

// EffectivenessProfile
if (data.EffectivenessProfile == null) {

	var ep = {
		LeastEffective: 24,
		Detached: 9,
		Frustrated: 12,
		MostEffective: 55
	};

	data.EffectivenessProfile = ep;
}

// EffectivenessByDemo
if (data.EffectivenessByDemo == null) {
	data.EffectivenessByDemo = TestData_EffectivenessByDemo(State_Get('demo'));
}
// Metrics

if (data.Metrics == null) {

	if ( !Main_IsProduction() ) {
		var metrics = ['DIM_ENG', 'DIM_ENA', 'DIM_N65'];

		data.Metrics = metrics;

		// KDA
		data['KDA.2020.389'] = {"DIM_ENG":["AV15","SD03","VC04","SR05","SD05"],"DIM_ENA":["AV15","DM02","RC01","AV09","VC04"]};	
	}
}



if (data.Questions == null) {
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
				'642': {
					N: 555
				}
			}
		},
		"Test": {
			N: 12345,
			Options: {
				651: { N: 555 },
				652: { N: 551 },
				653: { N: 552 },
				654: { N: 553 },
				656: { N: 554 },
				657: { N: 555 },
				658: { N: 556 },
				659: { N: 557 },
				6510: { N: 558 },
				6551: { N: 559 },
				6512: { N: 5551 },
				6523: { N: 5552 },
				6534: { N: 5553 },
				6545: { N: 5554 },
				6556: { N: 5555 },
				6567: { N: 5556 }
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


var config = {


	Norms: {
		Codes: ['AllCompany_A_17TO19_Avg','HP_A_17TO19_Avg']
	}, 

	CurrentWave: '2020',
	PreviousWave: '2019',

	SigTest: {
		Threshold: 1.96,
		BackgroundColor: {Enabled: true},
		Suffix: ' *'
	},

	comparators: ['Internal.Wave:2019', 'External.IndustryBenchmark', 'External.HighPerformers'],

	comments: {
		"Comm1": { CategoryList: "Comm1Theme" },
		"Comm2": { CategoryList: "Comm2Theme" },
	},

	EngagementDimensionId: "DIM_ENG",
	EnablementDimensionId: "DIM_ENA",

	styles: {
		DistributionChart: {
			bgcolors: ['#77bc1f', '#e0e0e0', '#d30f1d'],
			colors: ['white', 'black', 'white']
		},
		DistributionChart_EffectivenessProfile: {
			bgcolors: ['#82C341', '#F99B1E', '#00B7F1', '#F03223'],
			colors: ['white', 'white', 'white', 'white']
		},
		DistributionChart_onecolor: {
			bgcolor: '#00b4eb', //'rgb(0, 180, 235)',
			color: 'white'
		},
	},
};

if (!('comparators' in state.Parameters)) {
	State_Set('comparators', config.comparators);
}

TestData_fillBreakByData();
TestData_fillComparatorsData();