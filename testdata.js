
function TestData_Hash() {
	return 'TEST';
}


// Meta: Menu, Page Text Labels, etc

if (meta == null) { // && !Main_IsProduction()) {

	meta = {

		RTL: false,

		ReportName: "Test Report",

		ClientName: "Company X",

		Hierarchy: {
			Map: {389: {ParentId: -1}},
			TopNode: {
				Id: 389,
				ParentId: -1,
				Children: [
					{
						Id: 390,
						Label: "2nd Level",
						Children: [],
						ParentId: 389
					}
				],
				Label: "Company Overall"
			}
		},

		VisiblePages: ["Intro", "Home", "Slideshow", "GroupHeadlines",
			"KeyMetrics", "KeyDrivers", "StrengthsAndOpportunities",
			"EffectivenessProfile", "EffectivenessProfileBreakdown",
			"GroupExplore", "AllResults", "ResultsBreakdown",
			"DemographicHeatmap", "DemographicHighlighter",
			"NonStandardQuestions", "GroupComments", "CommentsThemes",
			"OpenComments", "GroupEnps", "ENPSScore", "ENPSBreakdown",
			"GroupResponse", "ResponseRates", "GroupActions",
			"ActionsFocusAreas", "ActionsSummaries", "ActionsAllPlans",
			"ActionsSharedPlans", "ActionsStatistics", "Filters",
			"LogOut"
		],

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
				Text: "<li>Be realistic, focus on 2-3 areas of action only to increase your chances of success<li>Do not overlook strengths - sometimes a good action plan can be about maintaining a strong score"
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
				"RecommendedActions": [{
					'Title': 'Seek guidance',
					'Text': 'Seek internal guidance from Human Resources about external training programme.'
				},
					{
						'Title': 'Make it personal',
						'Text': 'Have a one-on-one conversation with your team members to assess what training has been most valuable and what future training they need and why.'
					},
				]
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
				"RecommendedActions": [{
					'Title': 'Share the big picture',
					'Text': "Set frequent team meetings and start with a Strategy Section in the agenda.<br>Explain the current strategy and goals of the company and relate the larger strategy to your business unit and team's strategy and goals."
				},
					{
						'Title': 'Align individual and company targets',
						'Text': "Check in on your team member's performance on a regular basis.<br>In the initial meeting, agree clear goals for the employee to achieve and make sure they connect to the company's overall goals and strategy."
					},
					{
						'Title': 'Stay alert',
						'Text': "Whenever there are company announcements, new policies or programs, press releases, etc., make sure to spend time with your employees as soon as possible to discuss them.<br>Encourage a healthy discussion about what has changed, their initial reactions and what it means for each of them."
					},
				]
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
				"RecommendedActions": [{
					'Title': 'Align individual and company targets',
					'Text': "Check in on your team member's performance on a regular basis.<br>In the initial meeting, agree clear goals for the employee to achieve and make sure they connect to the company's overall goals and strategy."
				},
					{
						'Title': 'Tell good stories',
						'Text': "Communicate successes on a regular basis. Choose a format (Friday newsletters, weekly quizzes, 1-2-1, intranet communication) and include financial successes but don't focus exclusively on them.<br>Invite members of the team to talk about what they've done well recently."
					},
					{
						'Title': 'Be the change',
						'Text': "Download and read Korn Ferry's thought leadership piece urging leaders to <a href='https://infokf.kornferry.com/Be_the_change.html?utm_source=website&utm_medium=banner&utm_term=&utm_content=%20&utm_campaign=19-11-GBL-Culture-Transformation' target='_blank'>Be the Change</a>"
					},
				]
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
				Items: ['OM12', 'OM01', 'OM11', 'OS02', 'OM06'],
				"Label": "Employee Engagement",
				"RecommendedActions": [{
					'Title': 'Recommended action #1',
					'Text': 'Recommended action #1 text'
				},
					{
						'Title': 'Recommended action #2',
						'Text': 'Recommended action #2 text'
					},
					{
						'Title': 'Recommended action #3',
						'Text': 'Recommended action #3 text'
					},
				],
				"KeyMetric_BackCardText": "What drives engagement in our organisation",
				"KeyMetrics_MoreCardText": "<p>Engagement measures commitment to the company, and extra effort employees are willing to put in for the good of the organisation.</p><p>The Engagement score is calculated as an average of the favourable scores from questions shown below.</p>"
			},
			"DIM_ENA": {
				Items: ['WE12', 'JS05', 'JS02', 'WE08'],
				"Label": "Employee Enablement",
				"RecommendedActions": [{
					'Title': 'Recommended action #1',
					'Text': 'Recommended action #1 text'
				},
					{
						'Title': 'Recommended action #2',
						'Text': 'Recommended action #2 text'
					},
				],
				"KeyMetric_BackCardText": "What drives enablement in our organisation",
				"KeyMetrics_MoreCardText": "<p>Enablement measures the extent to which employee skills and abilities are fully utilised and the support received in getting work done.</p><p>The Enablement score is calculated as an average of the favourable scores from questions shown below.</p>"
			},
			"DIM_N64": {
				Items: ['RE01', 'WS03', 'DC11', 'SP04', 'WK01'],
				"Label": "Resources",
				"RecommendedActions": [{
					'Title': 'Recommended action #2',
					'Text': 'Recommended action #2 text'
				},
					{
						'Title': 'Recommended action #3',
						'Text': 'Recommended action #3 text'
					},
				],
				"KeyMetric_BackCardText": "Resources Drivers",
				"KeyMetrics_MoreCardText": "Resources intro text"
			},
			"DIM_N50": {
				Items: ['DM02', 'VC04', 'IV04', 'DM18'],
				"Label": "Authority & Empowerment",
				"RecommendedActions": [{
					'Title': 'Recommended action #1',
					'Text': 'Recommended action #1 text'
				},
					{
						'Title': 'Recommended action #2',
						'Text': 'Recommended action #2 text'
					},
					{
						'Title': 'Recommended action #3',
						'Text': 'Recommended action #3 text'
					},
				],
				"KeyMetric_BackCardText": "Authority & Empowerment Drivers",
				"KeyMetrics_MoreCardText": "Authority & Empowerment intro text"
			},
			"DIM_N65": {
				Items: ['RC01', 'ER01', 'WL01', 'GP10', 'DI03', 'WK02'],
				"Label": "Respect & Recognition",
				"RecommendedActions": [{
					'Title': 'Recommended action #1',
					'Text': 'Recommended action #1 text'
				},
					{
						'Title': 'Recommended action #2',
						'Text': 'Recommended action #2 text'
					},
					{
						'Title': 'Recommended action #3',
						'Text': 'Recommended action #3 text'
					},
				],
				"KeyMetric_BackCardText": "Respect & Recognition Drivers",
				"KeyMetrics_MoreCardText": "Respect & Recognition intro text"
			},
			"DIM_N52": {
				Items: ['TW06', 'TW04', 'GP09', 'TW02', 'DC08'],
				"Label": "Collaboration",
				"RecommendedActions": [{
					'Title': 'Recommended action #1',
					'Text': 'Recommended action #1 text'
				},
					{
						'Title': 'Recommended action #2',
						'Text': 'Recommended action #2 text'
					},
					{
						'Title': 'Recommended action #3',
						'Text': 'Recommended action #3 text'
					},
				],
				"KeyMetric_BackCardText": "Collaboration Drivers",
				"KeyMetrics_MoreCardText": "Collaboration intro text"
			},
			"DIM_N63": {
				Items: ['QS01', 'QS16', 'QS03', 'QS02', 'OM04', 'QS09'],
				"Label": "Quality & Customer Focus",
				"RecommendedActions": [{
					'Title': 'Recommended action #1',
					'Text': 'Recommended action #1 text'
				},
					{
						'Title': 'Recommended action #2',
						'Text': 'Recommended action #2 text'
					},
					{
						'Title': 'Recommended action #3',
						'Text': 'Recommended action #3 text'
					},
				],
				"KeyMetric_BackCardText": "Quality & Customer Focus Drivers",
				"KeyMetrics_MoreCardText": "Quality & Customer Focus intro text"
			},
			"DIM_N61": {
				Items: ['PE09', 'PE06', 'PE03', 'CP14', 'PE10', 'PE21'],
				"Label": "Performance Management",
				"RecommendedActions": [{
					'Title': 'Recommended action #1',
					'Text': 'Recommended action #1 text'
				},
					{
						'Title': 'Recommended action #2',
						'Text': 'Recommended action #2 text'
					},
					{
						'Title': 'Recommended action #3',
						'Text': 'Recommended action #3 text'
					},
				],
				"KeyMetric_BackCardText": "Performance Management Drivers",
				"KeyMetrics_MoreCardText": "Performance Management intro text"
			},
			"DIM_N54": {
				Items: ['AV15', 'SP12', 'AV09', 'AV01', 'AV08'],
				"Label": "Development Opportunities",
				"RecommendedActions": [{
					'Title': 'Recommended action #1',
					'Text': 'Recommended action #1 text'
				},
					{
						'Title': 'Recommended action #2',
						'Text': 'Recommended action #2 text'
					},
					{
						'Title': 'Recommended action #3',
						'Text': 'Recommended action #3 text'
					},
				],
				"KeyMetric_BackCardText": "Development Opportunities Drivers",
				"KeyMetrics_MoreCardText": "Development Opportunities intro text"
			},
			"DIM_N53": {
				Items: ['LD04', 'LD09', 'GP12', 'SP45', 'SV03', 'SR05',
					'SR03'
				],
				"Label": "Confidence in Leaders",
				"RecommendedActions": [{
					'Title': 'Recommended action #1',
					'Text': 'Recommended action #1 text'
				},
					{
						'Title': 'Recommended action #2',
						'Text': 'Recommended action #2 text'
					},
					{
						'Title': 'Recommended action #3',
						'Text': 'Recommended action #3 text'
					},
				],
				"KeyMetric_BackCardText": "Confidence in Leaders Drivers",
				"KeyMetrics_MoreCardText": "Confidence in Leaders intro text"
			},
			"DIM_N66": {
				Items: ['TR09', 'TR01', 'TR04', 'SP47'],
				"Label": "Training",
				"RecommendedActions": [{
					'Title': 'Recommended action #1',
					'Text': 'Recommended action #1 text'
				},
					{
						'Title': 'Recommended action #2',
						'Text': 'Recommended action #2 text'
					},
					{
						'Title': 'Recommended action #3',
						'Text': 'Recommended action #3 text'
					},
				],
				"KeyMetric_BackCardText": "Training Drivers",
				"KeyMetrics_MoreCardText": "Training intro text"
			},
			"DIM_N51": {
				Items: ['SD04', 'GP07', 'SD05', 'SD03', 'GP03', 'PE01'],
				"Label": "Clear & Promising Direction",
				"RecommendedActions": [{
					'Title': 'Recommended action #1',
					'Text': 'Recommended action #1 text'
				},
					{
						'Title': 'Recommended action #2',
						'Text': 'Recommended action #2 text'
					},
					{
						'Title': 'Recommended action #3',
						'Text': 'Recommended action #3 text'
					},
				],
				"KeyMetric_BackCardText": "Clear & Promising Direction",
				"KeyMetrics_MoreCardText": "Clear & Promising Direction intro text"
			},
			"DIM_N67": {
				Items: ['IV02', 'WE01', 'ST01', 'DM04', 'WS01', 'DC09'],
				"Label": "Work, Structure, & Process",
				"RecommendedActions": [{
					'Title': 'Recommended action #1',
					'Text': 'Recommended action #1 text'
				},
					{
						'Title': 'Recommended action #2',
						'Text': 'Recommended action #2 text'
					},
					{
						'Title': 'Recommended action #3',
						'Text': 'Recommended action #3 text'
					},
				],
				"KeyMetric_BackCardText": "Work, Structure, & Process Drivers",
				"KeyMetrics_MoreCardText": "Work, Structure, & Process intro text"
			},
			"DIM_N60": {
				Items: ['CP11', 'CP12', 'BN01', 'BN04', 'CP16'],
				"Label": "Pay & Benefits",
				"RecommendedActions": [{
					'Title': 'Recommended action #1',
					'Text': 'Recommended action #1 text'
				},
					{
						'Title': 'Recommended action #2',
						'Text': 'Recommended action #2 text'
					},
					{
						'Title': 'Recommended action #3',
						'Text': 'Recommended action #3 text'
					},
				],
				"KeyMetric_BackCardText": "Pay & Benefits Drivers",
				"KeyMetrics_MoreCardText": "Pay & Benefits intro text"
			},


			"DIM_NPS": {
				Items: ['NSQ1'],
				"Label": "Employee Net Promoter Score (ENPS)",
				"RecommendedActions": [],
				"KeyMetric_BackCardText": "Employee Net Promoter Score (ENPS) Drivers",
				"KeyMetrics_MoreCardText": "Employee Net Promoter Score (ENPS) intro text"
			}
		},

		NonStandardQuestions: {"NSQ1":{"Label":"How likely is it that you would recommend this company's products and services to family or friends?","Answers":{"1":{"Label":"0 (Not At All Likely)"},"2":{"Label":"1"},"3":{"Label":"2"},"4":{"Label":"3"},"5":{"Label":"4"},"6":{"Label":"5"},"7":{"Label":"6"},"8":{"Label":"7"},"9":{"Label":"8"},"10":{"Label":"9"},"11":{"Label":"10 (Extremely Likely)"}}},"NSQ2":{"Label":"From which of the following sources do you now receive most of your information about what is going on in the company? Rank your top three information sources only.","Answers":{"1":{"Label":"My colleagues"},"2":{"Label":"Bulletin board"},"3":{"Label":"My supervisor"},"4":{"Label":"Company leadership"},"5":{"Label":"Group meetings at our work location"},"6":{"Label":"Newsletter"},"7":{"Label":"Company website"},"8":{"Label":"Company e-mail"},"9":{"Label":"Webcast"}}},"NSQ3":{"Label":"Please select the theme that best describe your comment","Answers":{"1":{"Label":"Confidence in Leadership"},"2":{"Label":"Company Brand"},"3":{"Label":"Customer Focus"},"4":{"Label":"Team work & Collaboration"},"5":{"Label":"People Management"},"6":{"Label":"Positive Work Environment"},"7":{"Label":"Meaningful Work"},"8":{"Label":"Growth Opportunity"},"9":{"Label":"Internal Processes"},"10":{"Label":"Technology & IT Systems"},"11":{"Label":"Other"}}},"NSQ4":{"Label":"Please review the list below and select up to 5 areas that are most important to you in your career when deciding to stay or join a new company.","Answers":{"1":{"Label":"Base pay"},"2":{"Label":"Career advancement and development opportunities"},"3":{"Label":"Challenging work"},"4":{"Label":"Collaborative environment"},"5":{"Label":"Community involvement/philanthropy"},"6":{"Label":"Company agility and speed"},"7":{"Label":"Company mission that I believe in"},"8":{"Label":"Core values"},"9":{"Label":"Customer focus"},"10":{"Label":"Empowerment"},"11":{"Label":"Family owned"},"12":{"Label":"Financial strength/stability"},"13":{"Label":"Flexible working conditions"},"14":{"Label":"Health & Retirement benefits"},"15":{"Label":"High-growth company"},"16":{"Label":"Hours worked"},"17":{"Label":"Innovation"},"18":{"Label":"Leadership effectiveness"},"19":{"Label":"Location"},"20":{"Label":"Ongoing feedback provided"},"21":{"Label":"On-the-job training"},"22":{"Label":"Team effectiveness"},"23":{"Label":"Paid time off"},"24":{"Label":"Performance-based variable pay (incentives, bonus, commissions)"},"25":{"Label":"Products that my friends and family respect"},"26":{"Label":"Recognition"},"27":{"Label":"Results-oriented environment"},"28":{"Label":"Safe work environment"},"29":{"Label":"Other"}}},"NSQ5":{"Label":"Please select which of the following are barriers to innovation at the company: (Select all that apply)","Answers":{"1":{"Label":"Technology (tools and systems)"},"2":{"Label":"Approval process"},"3":{"Label":"Work processes"},"4":{"Label":"Decision-making freedom"},"5":{"Label":"Direction from the person to whom I report"},"6":{"Label":"Workload"},"7":{"Label":"Collaboration between groups"},"8":{"Label":"Availability of resources"},"9":{"Label":"Budget"},"10":{"Label":"Physical work space"},"11":{"Label":"Fear of raising ideas"},"12":{"Label":"I am uncertain about how to innovate"}}},"NSQ6":{"Label":"How do you prefer to read your emails, reports and books?","Answers":{"1":{"Label":"Only Online"},"2":{"Label":"Mixed (Print and Online)"},"3":{"Label":"Only Print"},"4":{"Label":"Do Not Know/Not Applicable"}}}},

		CommentQuestions: {
			"Comm1": {
				"Label": "The MAIN thing that makes the Company a great place to work"
			},
			"Comm2": {
				"Label": "The MAIN thing that would make us more productive"
			}
		},

		CommentCategories: {
			"1": {
				"Label": "Authority & Empowerment"
			},
			"2": {
				"Label": "Clear & Promising Direction"
			},
			"3": {
				"Label": "Collaboration"
			},
			"4": {
				"Label": "Confidence in Leaders"
			},
			"5": {
				"Label": "Development Opportunities"
			},
			"6": {
				"Label": "Employee Enablement"
			},
			"7": {
				"Label": "Employee Engagement"
			},
			"8": {
				"Label": "Pay & Benefits"
			},
			"9": {
				"Label": "Performance Management"
			},
			"10": {
				"Label": "Quality & Customer Focus"
			},
			"11": {
				"Label": "Resources"
			},
			"12": {
				"Label": "Respect & Recognition"
			},
			"13": {
				"Label": "Training"
			},
			"14": {
				"Label": "Work, Structure, & Process"
			}
		},

		Demographics: {
			"Gender": {
				"Label": "Gender",
				"Answers": {
					"410": {
						"Label": "Male"
					},
					"420": {
						"Label": "Female"
					},
					"430": {
						"Label": "Other/non-binary"
					},
					"440": {
						"Label": "Prefer not to say"
					}
				}
			},
			"Age": {
				"Label": "Age",
				"Answers": {
					"651": {
						"Label": "Under 20"
					},
					"652": {
						"Label": "20 to 29"
					},
					"653": {
						"Label": "30 to 39"
					},
					"654": {
						"Label": "40 to 49"
					},
					"655": {
						"Label": "50 to 59"
					},
					"656": {
						"Label": "Over 59"
					}
				}
			},
			"Tenure": {
				"Label": "Tenure",
				"Answers": {
					"701": {
						"Label": "Less than 1 year"
					},
					"702": {
						"Label": "1 year to less than 2 years"
					},
					"703": {
						"Label": "2 years to less than 5 years"
					},
					"704": {
						"Label": "5 years to less than 10 years"
					},
					"705": {
						"Label": "10 years or more"
					}
				}
			},
			"UnionNon": {
				"Label": "Union/Non-Union",
				"Answers": {
					"631": {
						"Label": "Union"
					},
					"632": {
						"Label": "Non-Union"
					}
				}
			},
			"Wage_Status": {
				"Label": "Wage_Status",
				"Answers": {
					"641": {
						"Label": "Hourly"
					},
					"642": {
						"Label": "Salaried"
					}
				}
			}
		},

		Comparators: {
			//"Internal.trend2020": { Label: "Trend 2020" },
			"Internal.Wave:2019": {
				Label: "Trend 2019"
			},
			"Internal.Wave:2018": {
				Label: "Trend 2018"
			},
			"Internal.parent": {
				Label: "Parent"
			},
			"Internal.total": {
				Label: "Total Company"
			},
			"External.IndustryBenchmark": {
				Label: "Industry Benchmark"
			},
			"External.HighPerformers": {
				Label: "High Performers"
			},
		},

		Labels: {
			"menu": {"Id": "menu", "Title": "", "Label": ""},
			"menu.Home": {"Label": "Home"},
			"menu.Slideshow": {"Label": "Slideshow"},
			"menu.GroupHeadlines": {"Label": "Headlines"},
			"menu.KeyMetrics": {"Label": "Key Metrics"},
			"menu.KeyDrivers": {"Label": "Key Drivers"},
			"menu.StrengthsAndOpportunities": {"Label": "Strengths & Opportunities"},
			"menu.EffectivenessProfile": {"Label": "Effectiveness Profile"},
			"menu.EffectivenessProfileBreakdown": {"Label": "Effectiveness Profile Breakdown"},
			"menu.GroupExplore": {"Label": "Explore"},
			"menu.AllResults": {"Label": "All Results"},
			"menu.ResultsBreakdown": {"Label": "Results Breakdown"},
			"menu.DemographicHeatmap": {"Label": "Heatmap"},
			"menu.DemographicHighlighter": {"Label": "Demographic Highlighter"},
			"menu.NonStandardQuestions": {"Label": "Non-Standard Questions"},
			"menu.GroupComments": {"Label": "Comments"},
			"menu.CommentsThemes": {"Label": "Comments Themes"},
			"menu.OpenComments": {"Label": "Open Comments"},
			"menu.GroupEnps": {"Label": "ENPS"},
			"menu.ENPSScore": {"Label": "ENPS Score"},
			"menu.ENPSBreakdown": {"Label": "ENPS Breakdown"},
			"menu.GroupResponse": {"Label": "Response"},
			"menu.ResponseRates": {"Label": "Response Rates"},
			"menu.GroupActions": {"Label": "Actions"},
			"menu.ActionsCreatePlan": {"Label": "Create Plan"},
			"menu.ActionsActionPlans": {"Label": "Plans"},
			"menu.ActionsAllPlans": {"Label": "All Plans"},
			"menu.ActionsSharedPlans": {"Label": "Shared Plans"},
			"menu.ActionsStatistics": {"Label": "Statistics"},
			"menu.LogOut": {"Label": "Log Out"},
			"labels.vsCompany": {"Id": "vsCompany", "Title": "vs. company", Label: "vs. company"},
			"labels.top": {"Id": "top", "Title": "Top", "Label": "Top"},
			"labels": {"Id": "labels", "Title": "", "Label": ""},
			"labels.Dimension": {"Label": "Dimension"},
			"labels.AllDimensions": {"Label": "All Dimensions"},

			"labels.AllQuestions": {"Label": "All Questions"},
			"labels.AllQuestionsOrdByDimension": {"Label": "All Questions ordered by dimension"},
			"labels.Question": {"Label": "Question"},
			"labels.Comments": {"Label": "Comments"},
			"labels.Theme": {"Label": "Theme"},
			"labels.Search": {"Label": "Search"},
			"labels.show": {"Label": "Show"},
			"labels.metric": {"Label": "Metric"},
			"labels.BreakBy": {"Label": "Break By"},
			"labels.DisplayComparatorsAs": {"Label": "Display comparators as"},
			"labels.SelectQuestion": {"Label": "Select Question"},
			"labels.SelectTheme": {"Label": "Select Theme"},
			"labels.SelectDimensionOrQuestion": {"Label": "Select Dimension or Question"},
			"labels.SelectDemographic": {"Label": "Select Demographic"},
			"labels.BasisForComparison": {"Label": "Basis for comparison"},
			"labels.AbsoluteValue": {"Label": "Absolute Value"},
			"labels.DifferencetoTotal": {"Label": "Difference to Total"},
			"labels.PositiveDifferencesTo": {"Label": "Positive differences to"},
			"labels.NegativeDifferencesTo": {"Label": "Negative differences to"},
			"labels.PercentFavorable": {"Label": "% Favorable"},
			"labels.PercentUnfavorable": {"Label": "% Unfavorable"},
			"labels.PercentFav": {"Label": "% Fav"},
			"labels.PercentNeu": {"Label": "% Neu"},
			"labels.PercentUnfav": {"Label": "% Unfav"},
			"labels.Promoters": {"Label": "Promoters"},
			"labels.Passives": {"Label": "Passives"},
			"labels.Detractors": {"Label": "Detractors"},
			"labels.PercentPromoters": {"Label": "% of Promoters"},
			"labels.PercentDetractors": {"Label": "% of Detractors"},
			"labels.Favorable": {"Label": "Favorable"},
			"labels.Neutral": {"Label": "Neutral"},
			"labels.Unfavorable": {"Label": "Unfavorable"},
			"labels.Distribution": {"Label": "Distribution"},
			"labels.FavvsComparator": {"Label": "% Fav vs Comparator"},
			"labels.ReportTotal": {"Label": "Report Total"},
			"labels.Strengths": {"Label": "Strengths"},
			"labels.Opportunities": {"Label": "Opportunities"},
			"labels.DataFilters": {"Label": "Data Filters"},
			"labels.InternalComparators": {"Label": "Internal Comparators"},
			"labels.ExternalComparators": {"Label": "External Comparators"},
			"labels.Engagement": {"Label": "Engagement"},
			"labels.Enablement": {"Label": "Enablement"},
			"labels.Frustrated": {"Label": "Frustrated"},
			"labels.Detached": {"Label": "Detached"},
			"labels.LeastEffective": {"Label": "Least Effective"},
			"labels.MostEffective": {"Label": "Most Effective"},
			"labels.ValidN": {"Label": "Valid N"},
			"labels.Pct": {"Label": "Pct"},
			"labels.none": {"Label": "(None)"},
			"labels.all": {"Label": "(All)"},
			"labels.NA": {"Label": "N/A"},
			"labels.ENPS": {"Label": "ENPS"},
			"labels.Action": {"Label": "Action"},
			"labels.NoDataToDisplay": {"Label": "No data to display"},
			"labels.NoMatchingRecordsFound": {"Label": "No matching records found"},
			"labels.TrendIndicator": {"Label": "Trend Indicator"},
			"labels.OneLevelDown": {"Label": "One Level Down"},
			"labels.SubHeading": {"Label": "[DATA] for [BENCHMARK] by [DEMO]"},
			"labels.ImpactOnEngagement": {"Label": "Impact On Engagement"},
			"labels.ImpactOnEnablement": {"Label": "Impact On Enablement"},
			"labels.ResponseRate": {"Label": "Response Rate"},
			"labels.ReportReady": {"Label": "Your Report is ready >>"},
			"labels.ReportLoading": {"Label": "Your Report is loading"},
			"labels.LoadingData": {"Label": "We are downloading data for [BRANCH]."},
			"labels.Selected": {"Label": "Selected"},
			"labels.Add": {"Label": "add"},
			"labels.NoRecommendationsAvailable": {"Label": "No recommendation/s available"},
			"labels.RecommendationsAvailable": {"Label": "recommendation/s available"},
			"labels.Area": {"Label": "Area:"},
			"labels.FocusOn": {"Label": "Focus on:"},
			"labels.RecommendedActions": {"Label": "Recommended Actions:"},
			"labels.ActionPlan": {"Label": "Action Plan"},
			"labels.PersonalizeActionPlan": {"Label": "Personalize Action Plan"},
			"labels.Name": {"Label": "Name:"},
			"labels.Notes": {"Label": "Notes:"},
			"labels.ActionPlanDetails": {"Label": "Action Plan Details"},
			"labels.Status": {"Label": "Status:"},
			"labels.NotStarted": {"Label": "Not Started"},
			"labels.Started": {"Label": "Started"},
			"labels.OnHold": {"Label": "On Hold"},
			"labels.Complete": {"Label": "Complete"},
			"labels.DueDate": {"Label": "Due Date:"},
			"labels.PlanOwner": {"Label": "Plan Owner:"},
			"labels.ActionOwner": {"Label": "Action Owner:"},
			"labels.DeletePlanConfirmation": {"Label": "Are you sure you want to delete this plan?"},
			"labels.DeleteActionConfirmation": {"Label": "Are you sure you want to delete this action?"},
			"labels.NameHeader": {"Label": "Name"},
			"labels.NotesHeader": {"Label": "Notes"},
			"labels.StatusHeader": {"Label": "Status"},
			"labels.DueDateHeader": {"Label": "Due Date"},
			"labels.LastUpdatedDateHeader": {"Label": "Last Updated Date"},
			"labels.PlanOwnerHeader": {"Label": "Plan Owner"},
			"labels.AreaHeader": {"Label": "Area"},
			"labels.NOfActions": {"Label": "# of actions"},
			"labels.PlanTitle": {"Label": "Plan"},
			"labels.ActionTitle": {"Label": "Action"},
			"labels.ActionText": {"Label": "Description"},
			"labels.ShowActions": {"Label": "Show Actions"},
			"labels.Checked": {"Label": "Checked"},
			"labels.Unchecked": {"Label": "Unchecked"},
			"labels.Off": {"Label": "Off"},
			"labels.On": {"Label": "On"},
			"labels.OwnPlans": {"Label": "Own Plans"},
			"labels.AreaPlans": {"Label": "Area Plans"},
			"labels.SharedPlans": {"Label": "Shared Plans"},
			"labels.Owners": {"Label": "Owners"},
			"labels.Actions": {"Label": "Actions"},
			"labels.Plans": {"Label": "Plans"},
			"labels.CreatedDateByPlanCounts": {"Label": "Created Date by Plan counts"},
			"labels.DateRange": {"Label": "Date Range"},
			"labels.LastWeek": {"Label": "Last Week"},
			"labels.LastMonth": {"Label": "Last Month"},
			"labels.LastQuarter": {"Label": "Last Quarter"},
			"labels.PlansByCurrentStatus": {"Label": "Plans by Current Status"},
			"labels.SharePlan": {"Label": "Share plan"},
			"labels.ActionsLimitReached": {"Label": "You've reached the limit of actions you can add to a plan."},
			"buttons": {"Id": "buttons", "Title": "", "Label": ""},
			"buttons.Apply": {"Label": "Apply"},
			"buttons.Cancel": {"Label": "Cancel"},
			"buttons.Clear": {"Label": "Clear"},
			"buttons.Download": {"Label": "Download"},
			"buttons.Slideshow": {"Label": "Slideshow"},
			"buttons.Start": {"Label": "Start Exploring"},
			"buttons.More": {"Label": "More"},
			"buttons.TakeAction": {"Label": "Take Action"},
			"buttons.Maintain": {"Label": "Take Action to Maintain"},
			"buttons.Improve": {"Label": "Take Action to Improve"},
			"buttons.WorkOnThis": {"Label": "Work on this >>"},
			"buttons.AddToActionPlan": {"Label": "+ Add to Action Plan"},
			"buttons.AddOwnAction": {"Label": "+ Add Own Action"},
			"buttons.RemoveFromActionPlan": {"Label": "- Remove from Action Plan"},
			"buttons.Submit": {"Label": "Submit"},
			"buttons.Close": {"Label": "Close"},
			"buttons.Yes": {"Label": "Yes"},
			"buttons.No": {"Label": "No"},
			"buttons.Show": {"Label": "show"},
			"buttons.Selected": {"Label": "Selected"},
			"comparators": {"Id": "comparators", "Title": "", "Label": ""},
			"comparators.Internal_trend2020": {"Label": "Trend 2020"},
			"comparators.Internal_trend2019": {"Label": "Trend 2019"},
			"comparators.Internal_trend2018": {"Label": "Trend 2018"},
			"comparators.Internal_parent": {"Label": "Parent"},
			"comparators.Internal_total": {"Label": "Total"},
			"comparators.External_IndustryBenchmark": {"Label": "Industry Benchmark"},
			"comparators.External_HighPerformers": {"Label": "High Performers"},
			"items": {"Id": "items", "Title": "", "Label": ""},
			"items.1": {"Label": "I have the resources I need to do my job effectively."},
			"items.2": {"Label": "I have enough authority to do my job well."},
			"items.3": {"Label": "I receive recognition when I do a good job."},
			"items.4": {"Label": "My work group receives high quality support from other parts of the company we depend on."},
			"items.5": {"Label": "The company is customer focused (always seeking to understand and meet customer needs)."},
			"items.6": {"Label": "I receive clear and regular feedback on how well I do my work."},
			"items.7": {"Label": "I have opportunities to achieve my career goals at the company."},
			"items.8": {"Label": "The company is effectively managed and well-run."},
			"items.10": {"Label": "There are enough people to do the work in my work group."},
			"items.11": {"Label": "My job leaves adequate time to take advantage of job-related training opportunities."},
			"items.12": {"Label": "The company expects a high level of performance from its employees."},
			"items.13": {"Label": "I believe that the company has the right strategic priorities and goals."},
			"items.14": {"Label": "I understand the results expected of me in my job."},
			"items.15": {"Label": "The company motivates me to do more than is required."},
			"items.16": {"Label": "The people in my work group are committed to delivering high quality products and services."},
			"items.19": {"Label": "I have trust and confidence in the company's senior leadership team."},
			"items.22": {"Label": "The company provides training so that I can perform my present job well."},
			"items.24": {"Label": "I have opportunities to have my ideas adopted and put into use."},
			"items.26": {"Label": "I believe that the company will be successful over the next 2-3 years."},
			"items.28": {"Label": "I am treated with respect as an individual."},
			"items.29": {"Label": "The company is innovative in how work is done (using new technologies or creative approaches to continuously improve)."},
			"items.30": {"Label": "There is a clear link between my performance and my compensation."},
			"items.31": {"Label": "The company is open and honest in communications with employees."},
			"items.32": {"Label": "I believe I am paid fairly for the work I do."},
			"items.34": {"Label": "The work is well organized in my work group."},
			"items.35": {"Label": "I am encouraged to come up with new or better ways of doing things."},
			"items.36": {"Label": "There are no significant barriers at work to doing my job well."},
			"items.38": {"Label": "My immediate manager supports me in my learning and development."},
			"items.40": {"Label": "I have good opportunities for learning and development at the company."},
			"items.41": {"Label": "There is good cooperation and teamwork within my work group."},
			"items.42": {"Label": "I believe my pay is fair considering the pay of people doing similar work in other companies."},
			"items.44": {"Label": "I have the information I need to do my job well."},
			"items.46": {"Label": "The company provides employee benefits that meet my needs."},
			"items.47": {"Label": "There is effective sharing of ideas and resources across the company."},
			"items.48": {"Label": "The company provides a high quality customer experience."},
			"items.49": {"Label": "I would recommend the company as a good place to work."},
			"items.50": {"Label": "New employees receive the training they need to do their jobs well."},
			"items.51": {"Label": "The company provides high quality products and services."},
			"items.52": {"Label": "My job provides opportunities to do challenging and interesting work."},
			"items.53": {"Label": "I feel motivated to do more than is required of me."},
			"items.54": {"Label": "I understand how my job contributes to the company's strategic priorities and goals."},
			"items.55": {"Label": "I have a good understanding of the company's strategic priorities and goals."},
			"items.56": {"Label": "I feel proud to work for the company."},
			"items.57": {"Label": "My job makes good use of my skills and abilities."},
			"items.58": {"Label": "The company is effectively organized and structured."},
			"items.59": {"Label": "The company supports me in achieving a reasonable balance between my work life and my personal life."},
			"items.60": {"Label": "The company shows care and concern for its employees."},
			"items.61": {"Label": "Conditions in my job allow me to be about as productive as I can be."},
			"items.63": {"Label": "In the company, decisions are generally made in a timely manner."},
			"items.64": {"Label": "In the company, decisions are generally made at the lowest level appropriate."},
			"items.62": {"Label": "Given your choice, how long would you plan to continue working for the company?"},
			"items.65": {"Label": "I have trust and confidence in my immediate manager."},
			"items.67": {"Label": "The company operates in an ethical manner."},
			"items.66": {"Label": "The information from this survey will be used constructively by the company."},
			"items.68": {"Label": "The company is socially responsible."},
			"items.69": {"Label": "There is good cooperation between departments in the company."},
			"items.70": {"Label": "There is good communication between departments in the company."},
			"items.71": {"Label": "The company is responding effectively to changes in the business environment."},
			"items.72": {"Label": "I have a good understanding of my work group's goals and objectives."},
			"items.73": {"Label": "I have opportunities for advancement at the company."},
			"items.74": {"Label": "I have a good idea of the possible career paths available to me."},
			"items.75": {"Label": "Employee benefits provided by the company are competitive with benefits offered by other companies in our industry."},
			"items.76": {"Label": "I have a good understanding of compensation policies and practices that affect me."},
			"items.77": {"Label": "Poor performance is addressed effectively in the company."},
			"items.78": {"Label": "The feedback I receive during the year helps me develop and improve."},
			"items.79": {"Label": "I would recommend the company's products or services to a friend."},
			"items.80": {"Label": "We resolve customer problems quickly and effectively."},
			"items.81": {"Label": "My immediate manager is accessible when needed."},
			"items.82": {"Label": "Physical working conditions where I work are good."},
			"items.83": {"Label": "The company values and promotes employee diversity."},
			"items.84": {"Label": "My work area is safe."},
			"items.85": {"Label": "My immediate manager coaches me to help improve my performance."},
			"items.86": {"Label": "The amount of work expected of me is reasonable."},
			"items.87": {"Label": "When changes are made where I work, communications are handled well."},
			"items.95": {"Label": "Given your choice, how long would you plan to continue working for the company?"},
			"dimensions": {"Id": "dimensions", "Title": "", "Label": ""},
			"dimensions.DIM_ENG": {"Label": "Employee Engagement"},
			"dimensions.DIM_ENA": {"Label": "Employee Enablement"},
			"dimensions.DIM_N64": {"Label": "Resources"},
			"dimensions.DIM_N50": {"Label": "Authority & Empowerment"},
			"dimensions.DIM_N65": {"Label": "Respect & Recognition"},
			"dimensions.DIM_N52": {"Label": "Collaboration"},
			"dimensions.DIM_N63": {"Label": "Quality & Customer Focus"},
			"dimensions.DIM_N61": {"Label": "Performance Management"},
			"dimensions.DIM_N54": {"Label": "Development Opportunities"},
			"dimensions.DIM_N53": {"Label": "Confidence in Leaders"},
			"dimensions.DIM_N66": {"Label": "Training"},
			"dimensions.DIM_N51": {"Label": "Clear & Promising Direction"},
			"dimensions.DIM_N67": {"Label": "Work, Structure, & Process"},
			"dimensions.DIM_N60": {"Label": "Pay & Benefits"},
			"dimensions.DIM_C15": {"Label": "Local questions"},
			"dimensions.DIM_NPS": {"Label": "Employee Net Promoter Score (ENPS)"},
			"KeyMetric_BackCardText": {"Id": "KeyMetric_BackCardText", "Title": "", "Label": ""},
			"KeyMetric_BackCardText.DIM_ENG": {"Label": "What drives engagement in our organisation"},
			"KeyMetric_BackCardText.DIM_ENA": {"Label": "What drives enablement in our organisation"},
			"KeyMetric_BackCardText.DIM_N64": {"Label": "Resources Drivers"},
			"KeyMetric_BackCardText.DIM_N50": {"Label": "Authority & Empowerment Drivers"},
			"KeyMetric_BackCardText.DIM_N65": {"Label": "Respect & Recognition Drivers"},
			"KeyMetric_BackCardText.DIM_N52": {"Label": "Collaboration Drivers"},
			"KeyMetric_BackCardText.DIM_N63": {"Label": "Quality & Customer Focus Drivers"},
			"KeyMetric_BackCardText.DIM_N61": {"Label": "Performance Management Drivers"},
			"KeyMetric_BackCardText.DIM_N54": {"Label": "Development Opportunities Drivers"},
			"KeyMetric_BackCardText.DIM_N53": {"Label": "Confidence in Leaders Drivers"},
			"KeyMetric_BackCardText.DIM_N66": {"Label": "Training Drivers"},
			"KeyMetric_BackCardText.DIM_N51": {"Label": "Clear & Promising Direction"},
			"KeyMetric_BackCardText.DIM_N67": {"Label": "Work, Structure, & Process Drivers"},
			"KeyMetric_BackCardText.DIM_N60": {"Label": "Pay & Benefits Drivers"},
			"KeyMetric_BackCardText.DIM_C15": {"Label": "Local questions Drivers"},
			"KeyMetric_BackCardText.DIM_NPS": {"Label": "Employee Net Promoter Score (ENPS) Drivers"},
			"KeyMetrics_MoreCardText": {"Id": "KeyMetrics_MoreCardText", "Title": "", "Label": ""},
			"KeyMetrics_MoreCardText.DIM_ENG": {"Label": "<p>Engagement measures commitment to the company, and extra effort employees are willing to put in for the good of the organisation.</p>\n<p>The Engagement score is calculated as an average of the favourable scores from questions shown below.</p>"},
			"KeyMetrics_MoreCardText.DIM_ENA": {"Label": "<p>Enablement measures the extent to which employee skills and abilities are fully utilised and the support received in getting work done.</p>\n<p>The Enablement score is calculated as an average of the favourable scores from questions shown below.</p>"},
			"KeyMetrics_MoreCardText.DIM_N64": {"Label": "Click the more button to access additional details about this key metric."},
			"KeyMetrics_MoreCardText.DIM_N50": {"Label": "Click the more button to access additional details about this key metric."},
			"KeyMetrics_MoreCardText.DIM_N65": {"Label": "Click the more button to access additional details about this key metric."},
			"KeyMetrics_MoreCardText.DIM_N52": {"Label": "Click the more button to access additional details about this key metric."},
			"KeyMetrics_MoreCardText.DIM_N63": {"Label": "Click the more button to access additional details about this key metric.t"},
			"KeyMetrics_MoreCardText.DIM_N61": {"Label": "Click the more button to access additional details about this key metric."},
			"KeyMetrics_MoreCardText.DIM_N54": {"Label": "Click the more button to access additional details about this key metric."},
			"KeyMetrics_MoreCardText.DIM_N53": {"Label": "Click the more button to access additional details about this key metric."},
			"KeyMetrics_MoreCardText.DIM_N66": {"Label": "Click the more button to access additional details about this key metric."},
			"KeyMetrics_MoreCardText.DIM_N51": {"Label": "Click the more button to access additional details about this key metric."},
			"KeyMetrics_MoreCardText.DIM_N67": {"Label": "Click the more button to access additional details about this key metric."},
			"KeyMetrics_MoreCardText.DIM_N60": {"Label": "Click the more button to access additional details about this key metric."},
			"KeyMetrics_MoreCardText.DIM_C15": {"Label": "Click the more button to access additional details about this key metric."},
			"KeyMetrics_MoreCardText.DIM_NPS": {"Label": "Click the more button to access additional details about this key metric."},
			"copy": {"Id": "copy", "Title": "Copy", "Label": "Data Export"},
			"excel": {"Id": "excel", "Title": "Excel", "Label": "Data Export"},
			"csv": {"Id": "csv", "Title": "CSV", "Label": "Data Export"},
			"pdf": {"Id": "pdf", "Title": "PDF", "Label": "Data Export"},
			"ff2": {
				"Id": "ff2",
				"Title": "Motivation on its own is not enough",
				"Label": "When people feel motivated, they perform better. But even the most highly motivated employee will lose faith if they don't feel enabled to do their jobs. That's why we don't just measure how motivated and committed your people are (engagement). We also measure whether they're in the right roles and working in a supportive environment (enablement)."
			},
			"ff4": {
				"Id": "ff4",
				"Title": "Make the most of feedback sessions",
				"Label": "<li>Do not take the results personally - keep people reassured about confidentiality\n<li>Ask open questions - Does anyone else experience this? What is it that makes you feel that?"
			},
			"ff6": {
				"Id": "ff6",
				"Title": "Drive effective change through your results",
				"Label": "<li>Be realistic, focus on 2-3 areas of action only to increase your chances of success\n<li>Do not overlook strengths - sometimes a good action plan can be about maintaining a strong score"
			},
			"ff8": {
				"Id": "ff8",
				"Title": "The positive impact of taking action",
				"Label": "Organizations rated the highest by employees for acting on survey feedback outperform others on financial performance."
			},
			"WelcomePage": {"Id": "WelcomePage", "Title": "", "Label": ""},
			"WelcomePage.Title": {"Label": "Welcome"},
			"WelcomePage.Label": {"Label": "<p style=\"font-size: medium;\"><b>Make better decisions and drive meaningful change by understanding your people and their experience.</b></p>\n<p>Use this report to explore how people feel, what motivates them and what actions you can take to make your team and the organisation a better place to work.</p>\n<p></p>"},
			"WelcomePage.LabelFooter": {"Label": "High-level results are only a click away."},
			"WelcomePage.TitleSummary": {"Label": "I just want the summary"},
			"WelcomePage.LabelSummary": {"Label": "Your summary report available for instant view or download."},
			"WelcomePage.TitleDetails": {"Label": "I want all the details"},
			"WelcomePage.LabelDetails": {"Label": "Explore detailed results for your people and plan your next steps."},
			"WelcomePage.Footer": {"Label": "This website is managed by Korn Ferry, commissioned by your organization to administer this survey on its behalf <a href=\\\"https://www.kornferry.com/\\\" target=\\\"_new\\\">www.kornferry.com</a>. Korn Ferry protects individual respondent confidentiality by only reporting results data in an aggregated format. Korn Ferry will only show aggregated results data for group sizes at or above the minimum number of respondents agreed with your organization. As a user of this website, you are responsible for handling all survey results data with due care and attention and in accordance with your organization`s information security standards and policies."},
			"SlideshowPage": {"Id": "SlideshowPage", "Title": "", "Label": ""},
			"SlideshowPage.Title": {"Label": "Slideshow"},
			"SlideshowPage.Label": {"Label": "<p>The slideshow contains a curated set of slides based on the survey findings.</p>\n<p>The same content is available as a downloadable PowerPoint presentation.</p>"},
			"SlideshowPage.Start": {"Label": "Start Slideshow >"},
			"EffectivenessProfileTexts": {"Id": "EffectivenessProfileTexts", "Title": "", "Label": ""},
			"EffectivenessProfileTexts.MostEffective": {"Label": "These employees are the key to driving better organizational performance."},
			"EffectivenessProfileTexts.Detached": {"Label": "These employees may need additional alignment or leadership in order to become effective."},
			"EffectivenessProfileTexts.LeastEffective": {"Label": "These employees can become a drag on the organization if they are not turned towards effectiveness."},
			"EffectivenessProfileTexts.Frustrated": {"Label": "Productivity issues can cause these employees to disengage or leave your company."},
			"ENPSTexts": {"Id": "ENPSTexts", "Title": "", "Label": ""},
			"ENPSTexts.ENPSCardFrontTitle": {"Label": "Your ENPS Score"},
			"ENPSTexts.ENPSCardBackTitle": {"Label": "Number of ENPS respondents"},
			"ENPSTexts.ENPSQuestion": {"Label": "How likely is it that you would recommend our products / services to a friend or colleague?"},
			"ENPSTexts.ENPSPromotersDesc": {"Label": "Employees who are likely to recommend you"},
			"ENPSTexts.ENPSPassivesDesc": {"Label": "Employees with no strong feelings one way or the other"},
			"ENPSTexts.ENPSDetractorsDesc": {"Label": "Employees who are unwilling to recommend you or will possibly speak unfavorably about you"},
			"ENPSTexts.ENPSPromotersScale": {"Label": "Extremely likely"},
			"ENPSTexts.ENPSPassivesScale": {"Label": "Neutral"},
			"ENPSTexts.ENPSDetractorsScale": {"Label": "Not at all likely"},
			"ENPSTexts.ENPSPromotersScaleDesc": {"Label": "i.e. 9 & 10 scores"},
			"ENPSTexts.ENPSDetractorsScaleDesc": {"Label": "i.e. 0 & 6 scores"},
			"ENPSTexts.ENPSN": {"Label": "N="},
			"KeyMetrics": {
				"Id": "KeyMetrics",
				"Title": "Key Metrics",
				"Label": "<p>These metrics are what drive success in your organisation.</p>\n<p>Engagement measures commitment to the company, and extra effort employees are willing to put in for the good of the organisation.</p>\n<p>Enablement measures the extent to which employee skills and abilities are fully utilised and the support received in getting work done.</p>\n<p>The cards show your team performance on these metrics. Click on the cards to flip them and find out which topics have the biggest impact.</p>"
			},
			"KeyDrivers": {
				"Id": "KeyDrivers",
				"Title": "Key Drivers",
				"Label": "<p>Key Driver Analysis determines which question items within survey questionnaire most strongly influence or predict Employee Engagement and Employee Enablement.</p>\n<p>Using key driver analysis, we can help answer the question: &#8220;Where should I focus attention first in order to have the best chance of improving engagement and enablement?&#8221;</p>\n<p>Results can give you an alternative lens for understanding the culture of your organisation and can be used to drive targeted Action Planning process.</p>"
			},
			"StrengthsAndOpportunities": {
				"Id": "StrengthsAndOpportunities",
				"Title": "Strengths & Opportunities",
				"Label": "<p>This page helps you focus on the most important results for your work group.</p>\n<p>Questions are categorised as 'strengths' and 'opportunities' based on an algorithm combining a number of factors, such as the percentage favourable, percentage unfavourable and how those scores compare to other internal groups and external benchmarks.</p>"
			},
			"EffectivenessProfile": {
				"Id": "EffectivenessProfile",
				"Title": "Effectiveness Profile",
				"Label": "<p>The effectiveness profile is designed to guide targeted action efforts.</p>\n<p>The Effectiveness profile clusters employees into four distinct segments, based on relative levels of Engagement and Enablement in comparison to Korn Ferry&#8217;s global benchmark.</p>\n<p>Leaders seeking to improve the effectiveness of their teams need to determine whether performance issues are the result of a lack of engagement, a lack of enablement, or both.</p>\n<p>Click on the chart to understand how your team compares to the rest of the organization and Korn Ferry benchmarks.</p>"
			},
			"EffectivenessProfileBreakdown": {
				"Id": "EffectivenessProfileBreakdown",
				"Title": "Effectiveness Profile Breakdown",
				"Label": "<p>The breakdown page allows you to view how the effectiveness profile varies by different employee groups.</p>\n<p>The <b>break by</b> drop down enables the selection of the demographic of most interest to you.</p>\n<p>Use the column headers to rank employees by their effectiveness level and better understand groups where action is most needed.</p>"
			},
			"AllResults": {
				"Id": "AllResults",
				"Title": "All Results",
				"Label": "<p>Use this page to explore your survey results in more detail.</p>\n<p>Select whether you want to view all dimensions, all questions or all questions within their dimensions. You can sort the data by any of the columns, simply click on the column headers.</p>\n<p>Note that: \n<ul class=\"left-pane-list\">\n<li>The Valid N refers to the number of responses to a question, not the population size</li>\n<li>Question scores are suppressed if there are deemed to be too few responses to protect confidentiality</li>\n<li>Dimension scores are suppressed where any of the questions in that dimension have not received enough responses</li>\n</ul></p>"
			},
			"ResultsBreakdown": {
				"Id": "ResultsBreakdown",
				"Title": "Results Breakdown",
				"Label": "<p>Use this page to focus on one dimension or question and review differences by demographic and organisational groups.</p>\n<p>Select the dimension or question you want to view then select the demographic or organisational group to get a better understanding of differences. The data can be sorted by any of the columns.</p>"
			},
			"DemographicHeatmap": {
				"Id": "DemographicHeatmap",
				"Title": "Heatmap",
				"Label": "<p>Use the Heatmap to identify differences across demographic and organisational groups, and quickly understand which groups show best practice or require most focus.</p>\n<p>First, select whether you want to review all dimensions, all questions or all questions within dimensions. Select a demographic or organisational group to compare against your base population.</p>\n<p>Results will show percent favourable scores for the base group and you can toggle to show favourable scores or percentage-point differences in favourability for the comparison groups. Statistically significant differences are highlighted to help you understand whether differences are meaningful.</p>"
			},
			"DemographicHighlighter": {
				"Id": "DemographicHighlighter",
				"Title": "Demographic Highlighter",
				"Label": "<p>This page enables you to identify important variations in employee experience by looking at significant differences in the way demographic groups have answered questions.</p>\n<p>Use the drop-down functions to select the demographic group and dimension / questions for which you would like to display results. Demographic groups that are significantly above or below average for the chosen dimensions or question will be displayed.</p>"
			},
			"NonStandardQuestions": {
				"Id": "NonStandardQuestions",
				"Title": "Non-Standard Questions",
				"Label": "<p>This page shows results to questions that do not use the standard 5-point response scale measuring favourability.</p>\n<p>Select a question from the dropdown to view the distribution of results.</p>"
			},
			"CommentsThemes": {
				"Id": "CommentsThemes",
				"Title": "Comment Themes",
				"Label": "<p>Comments provide helpful context in understanding your survey results and can be an additional source of action planning ideas. To make the best use of your comments in your interpretation and action planning, review your survey scores first and then your group's comments.</p>\n<p>This chart ranks comment themes in order of selection by the respondents. Select the question that you want to review.</p>\n<p>Consider the topics that are of most interest based on your results so far and then explore the verbatims further.</p>"
			},
			"OpenComments": {
				"Id": "OpenComments",
				"Title": "Open Comments",
				"Label": "<p>Comments provide helpful context in understanding your survey results and can be an additional source of action planning ideas. To make the best use of your comments in your interpretation and action planning, review your survey scores first and then your group's comments.</p>\n<p>Select the comment question, then you can focus on a specific theme or even search for a specific term. The filter options allow you to highlight specific demographic groups.</p>\n<p>Export the comments to share them with others.</p>"
			},
			"ENPSScore": {
				"Id": "ENPSScore",
				"Title": "ENPS Score",
				"Label": "<p>Use your Employee Net Promoter Score (ENPS) as a key measure of your employees' overall perception of your organisation. ENPS provides an anchor for your employee experience management.</p>\n<p>A positive score means you have a higher proportion of employees that are strong advocates of the organization, whereas a negative score suggests you need to dig deeper to understand why people are less likely to recommend the organization as a place to work.</p>\n<p>Flip the card to understand more about the scoring methodology.</p>"
			},
			"ENPSBreakdown": {
				"Id": "ENPSBreakdown",
				"Title": "ENPS Breakdown",
				"Label": "<p>Use the ENPS Break By to identify differences across demographic and organisational groups, and quickly understand best practice areas and where action is most needed.</p>\n<p>Select the different demographics from the dropdown at the top of the page and focus on groups that include high volume of either promoters or detractors.</p>"
			},
			"ResponseRates": {
				"Id": "ResponseRates",
				"Title": "Response Rates",
				"Label": "<p>A Response Rate of 90% or above is considered good.</p>"
			},
			"ActionsFocusAreas": {
				"Id": "ActionsFocusAreas",
				"Title": "Areas for Focus",
				"Label": "<p>These are the areas you selected for focus from your survey results.</p>\n<p>Prioritise two or three areas, deleting those you no longer need, and open out each one to build out a plan of action. Select from our recommended actions tailored to your focus areas or create your own, providing an owner and planned competion date. Finally, give each plan a name and a timescale.</p>\n<p>Be sure to revisit your action plans as you work to improve your team perceptions, editing the content as necessary and updating the status as you progress.</p>"
			},
			"ActionsSummaries": {
				"Id": "ActionsSummaries",
				"Title": "Summaries",
				"Label": "<p>This page gives you an overview of action plans in your area and allows you to monitor their progress.</p><p>Define the view you want, with options to:<ul class=\"left-pane-list\"><li>Choose whether you look at plans for a single question / dimension or all of them.</li><li>View your own plans, all plans in your area or all plans that have been shared by your colleagues.</li><li>Toggle between plan overviews and individual plan actions.</li><li>Export the table to different formats.</li></ul></p>"
			},
			"ActionsAllPlans": {"Id": "ActionsAllPlans", "Title": "All Plans", "Label": "All Plans"},
			"ActionsSharedPlans": {"Id": "ActionsSharedPlans", "Title": "Shared Plans", "Label": "Shared Plans"},
			"ActionsStatistics": {
				"Id": "ActionsStatistics",
				"Title": "Statistics",
				"Label": "<p>Monitor plans, actions and their progress through these statistical representations of action planning activity in your area.</p>"
			},
			"SLIDE_ENG": {"Id": "SLIDE_ENG", "Title": "Employee Engagement: Results Details", "Label": ""},
			"SLIDE_ENG.info_0": {"Label": "Engagement measures commitment to the company and extra effort employees are willing to put in for the good of the organization"},
			"SLIDE_ENG.info_1": {"Label": "The Engagement score is calculated as an average of the favourable scores from questions shown below"},
			"SLIDE_ENA": {"Id": "SLIDE_ENA", "Title": "Employee Enablement: Results Details", "Label": ""},
			"SLIDE_ENA.info_0": {"Label": "Enablement measures the extent to which employee skills and abilities are fully utilized and the support received in getting work done."},
			"SLIDE_ENA.info_1": {"Label": "The Enablement score is calculated as an average of the favourable scores from questions shown below."},
			"SLIDE_STRENGTHS": {"Id": "SLIDE_STRENGTHS", "Title": "Team Strengths: Areas to Celebrate", "Label": ""},
			"SLIDE_STRENGTHS.info_0": {"Label": "This page helps you focus on come of the most important survey results for your work group. Keep doing these well."},
			"SLIDE_STRENGTHS.info_1": {"Label": "Questions are categorised as 'strengths' based on an algorithm combining a number of factors, such as the percentage favourable, percentage unfavourable and how those scores compare to other internal groups and external benchmarks."},
			"SLIDE_OPPORTUNITIES": {
				"Id": "SLIDE_OPPORTUNITIES",
				"Title": "Team Opportunities: Areas to Focus",
				"Label": ""
			},
			"SLIDE_OPPORTUNITIES.info_0": {"Label": "This page helps you focus on come of the most important survey results for your work group. Focus on improving these."},
			"SLIDE_OPPORTUNITIES.info_1": {"Label": "Questions are categorised as 'opportunities' based on an algorithm combining a number of factors, such as the percentage favourable, percentage unfavourable and how those scores compare to other internal groups and external benchmarks."},
			"SLIDE_DIMS": {"Id": "SLIDE_DIMS", "Title": "Dimension Overview", "Label": ""},
			"SLIDE_DIMS.info_0": {"Label": "Here is an overview of the most favourable and least favourable dimensions"},
			"SLIDE_TOP5": {"Id": "SLIDE_TOP5", "Title": "Top 5 Questions", "Label": ""},
			"SLIDE_TOP5.info_0": {"Label": ""},
			"SLIDE_BOTTOM5": {"Id": "SLIDE_BOTTOM5", "Title": "Bottom 5 Questions", "Label": ""},
			"SLIDE_BOTTOM5.info_0": {"Label": ""},
			"SLIDE_COMMENTS": {"Id": "SLIDE_COMMENTS", "Title": "Open-Ended Comment Themes", "Label": ""},
			"SLIDE_COMMENTS.info_0": {"Label": ""},
			"SLIDE_KEYINDICES": {"Id": "SLIDE_KEYINDICES", "Title": "Key Indices", "Label": ""},
			"SLIDE_KEYINDICES.info_0": {"Label": "These metrics are what drive success in your organisation."},
			"SLIDE_KEYINDICES.info_1": {"Label": "See the summary below for your teams performance on these metrics."},
			"SLIDE_KEYDRIVERS": {"Id": "SLIDE_KEYDRIVERS", "Title": "Key Drivers", "Label": ""},
			"SLIDE_KEYDRIVERS.info_0": {"Label": "Key Driver Analysis determines which question items within a survey questionnaire most strongly influence or predict a dependent variable (in this case, the dependent variables are [ENG] and [ENA])."},
			"SLIDE_KEYDRIVERS.info_1": {"Label": "Using key driver analysis, we can help answer the question: &quot;Where should I focus attention first in order to have the best chance of improving engagement and enablement in my organisation?&quot;"},
			"SLIDE_KEYDRIVERS.info_2": {"Label": "Results can give managers an alternative lens for understanding the culture of their organisations."},
			"SLIDE_KEYDRIVERS.info_3": {"Label": "Key Driver Analysis results can be used to drive targeted Action Planning process."},
			"SLIDE_KEYDRIVERS.LabelEmployeeEngagement": {"Label": "Employee Engagement"},
			"SLIDE_KEYDRIVERS.LabelEmployeeEnablement": {"Label": "Employee Enablement"},
			"SLIDE_KEYDRIVERS.LabelTop2KeyDriversOf": {"Label": "Top 2 Key Drivers of"},
			"SLIDE_EPSEGMENTATION": {
				"Id": "SLIDE_EPSEGMENTATION",
				"Title": "Effectiveness Profile - Segmentation",
				"Label": ""
			},
			"SLIDE_EPSEGMENTATION.info_0": {"Label": "The [ENGFRAMEWORK] clusters employees into four distinct segments, based on relative levels of Engagement and Enablement in comparison to Korn Ferry&#39;s global benchmark."},
			"SLIDE_EPSEGMENTATION.info_1": {"Label": "The segmentation is designed to guide targeted action efforts."},
			"SLIDE_EPSEGMENTATION.info_2": {"Label": "For example, when employees are [FRUSTRATED] action should focus on implementing counter measures to organizational barriers that hinder performance and productivity."},
			"SLIDE_EPSEGMENTATION.info_3": {"Label": "When [DETACHMENT] is present, employees are likely to be disconnected for the organizations mission and purpose and question their long term prospects at the company."},
			"SLIDE_EPSEGMENTATION.LabelHigh": {"Label": "High"},
			"SLIDE_EPSEGMENTATION.LabelLow": {"Label": "Low"},
			"SLIDE_EPSEGMENTATION.LabelDetachedExplanation": {"Label": "Enabled, but not engaged"},
			"SLIDE_EPSEGMENTATION.LabelMostEffectiveExplanation": {"Label": "Engaged and enabled"},
			"SLIDE_EPSEGMENTATION.LabelLeastEffectiveExplanation": {"Label": "Neither engaged nor enabled"},
			"SLIDE_EPSEGMENTATION.LabelFrustratedExplanation": {"Label": "Engaged, but not enabled"},
			"SLIDE_EPSEGMENTATION.LabelDetachment": {"Label": "Detachment"},
			"SLIDE_EPSEGMENTATION.LabelEngagedPerformanceFramework": {"Label": "Engaged Performance[TM] Framework"},
			"SLIDE_EPDETAIL": {"Id": "SLIDE_EPDETAIL", "Title": "Effectiveness Profile: Detail", "Label": ""},
			"SLIDE_EPDETAIL.info_0": {"Label": "These metrics are what drive success in your organisation."},
			"SLIDE_RESSUMMARY": {"Id": "SLIDE_RESSUMMARY", "Title": "Results Summary", "Label": ""},
			"SLIDE_RESSUMMARY.info_0": {"Label": ""},
			"SLIDE_RESDETAIL": {"Id": "SLIDE_RESDETAIL", "Title": "Results in Detail", "Label": ""},
			"SLIDE_RESDETAIL.info_0": {"Label": ""},
			"SLIDE_ENGFRAMEWORK": {
				"Id": "SLIDE_ENGFRAMEWORK",
				"Title": "Engaged Performance[TM] Framework",
				"Label": ""
			},
			"SLIDE_ENGFRAMEWORK.info_0": {"Label": "1. Clear and promising direction"},
			"SLIDE_ENGFRAMEWORK.info_1": {"Label": "2. Confidence in leaders"},
			"SLIDE_ENGFRAMEWORK.info_2": {"Label": "3. Quality and customer focus"},
			"SLIDE_ENGFRAMEWORK.info_3": {"Label": "4. Respect and recognition"},
			"SLIDE_ENGFRAMEWORK.info_4": {"Label": "5. Development opportunities"},
			"SLIDE_ENGFRAMEWORK.info_5": {"Label": "6. Pay and benefits"},
			"SLIDE_ENGFRAMEWORK.info_6": {"Label": "7. Performance management"},
			"SLIDE_ENGFRAMEWORK.info_7": {"Label": "8. Authority and empowerment"},
			"SLIDE_ENGFRAMEWORK.info_8": {"Label": "9. Resources"},
			"SLIDE_ENGFRAMEWORK.info_9": {"Label": "10. Training"},
			"SLIDE_ENGFRAMEWORK.info_10": {"Label": "11. Collaboration"},
			"SLIDE_ENGFRAMEWORK.info_11": {"Label": "12. Work, structure and process"},
			"SLIDE_ENGFRAMEWORK.LabelPerformanceDrivers": {"Label": "Performance drivers configured to each client&#39;s business priorities"},
			"SLIDE_ENGFRAMEWORK.LabelEngagedPerformance": {"Label": "Engaged Performance"},
			"SLIDE_ENGFRAMEWORK.LabelEngagementInfo": {"Label": "Committed and loyal people, willing to go the extra mile"},
			"SLIDE_ENGFRAMEWORK.LabelEnablementInfo": {"Label": "The right people in the right roles, in an enabling work environment"},
			"SLIDE_ENGFRAMEWORK.LabelOperationalExcellence": {"Label": "Operational excellence"},
			"SLIDE_ENGFRAMEWORK.LabelCustomerLoyalty": {"Label": "Customer loyalty"},
			"SLIDE_ENGFRAMEWORK.LabelFinancialPerformance": {"Label": "Financial performance"},
			"SLIDE_ENGFRAMEWORK.LabelAttractTalent": {"Label": "Attract and retain talent"},
			"SLIDE_ENGFRAMEWORK.LabelStrongBrand": {"Label": "Strong employer brand"},
			"SLIDE_SURVEYBACKGROUND": {"Id": "SLIDE_SURVEYBACKGROUND", "Title": "Survey Background", "Label": ""},
			"SLIDE_SURVEYBACKGROUND.info_0": {"Label": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
			"SLIDE_SURVEYBACKGROUND.info_1": {"Label": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
			"SLIDE_SURVEYBACKGROUND.info_2": {"Label": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
			"SLIDE_SURVEYBACKGROUND.info_3": {"Label": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
			"SLIDE_SURVEYBACKGROUND.LabelNoResponses": {"Label": "No. responses:"},
			"SLIDE_SURVEYBACKGROUND.LabelRespRate": {"Label": "Response rate:"},
			"SLIDE_TAKEACTION": {"Id": "SLIDE_TAKEACTION", "Title": "Taking Action", "Label": ""},
			"SLIDE_TAKEACTION.LeftSideContent": {"Label": "\"Organizations rated the highest by employees for acting on survey feedback outperform others on financial performance.\""},
			"SLIDE_TAKEACTION.RightSideContent_0": {"Label": "To drive effective change through your results..."},
			"SLIDE_TAKEACTION.RightSideContent_1": {"Label": "Be realistic, focus on [2-3 areas of action] only to increase your chances of success"},
			"SLIDE_TAKEACTION.RightSideContent_2": {"Label": "[Do not overlook strengths] - sometimes a good action plan can be about maintaining a strong score"},
			"SLIDE_TAKEACTION.RightSideContent_3": {"Label": "Focus on high priority areas that are [within your control]"},
			"SLIDE_TAKEACTION.RightSideContent_4": {"Label": "Make sure the actions address the [root cause] - think about the reasons why this issue has come about"},
			"SLIDE_HOWTOREAD": {"Id": "SLIDE_HOWTOREAD", "Title": "How to Read Your Results", "Label": ""},
			"SLIDE_HOWTOREAD.info_0": {"Label": "The five-point scale is classified into favourable, neutral and unfavourable"},
			"SLIDE_HOWTOREAD.info_1": {"Label": "Example table:"},
			"SLIDE_HOWTOREAD.info_2": {"Label": "A star denotes statistically significant difference vs comparison (green font for positive; red font for negative)"},
			"SLIDE_HOWTOREAD.LabelStronglyAgree": {"Label": "Strongly agree"},
			"SLIDE_HOWTOREAD.LabelAgree": {"Label": "Agree"},
			"SLIDE_HOWTOREAD.LabelNeither": {"Label": "Neither agree nor disagree"},
			"SLIDE_HOWTOREAD.LabelDisagree": {"Label": "Disagree"},
			"SLIDE_HOWTOREAD.LabelStronglyDisagree": {"Label": "Strongly disagree"},
			"SLIDE_HOWTOREAD.LabelClearStrength": {"Label": "Clear strength"},
			"SLIDE_HOWTOREAD.LabelModerateStrength": {"Label": "Moderate strength"},
			"SLIDE_HOWTOREAD.LabelWarningSign": {"Label": "Warning sign"},
			"SLIDE_HOWTOREAD.LabelRedFlag": {"Label": "Red flag"},
			"SLIDE_HOWTOREAD.LabelClearStrengthPercent": {"Label": ">80% favourable"},
			"SLIDE_HOWTOREAD.LabelModerateStrengthPercent": {"Label": "65-80% favourable"},
			"SLIDE_HOWTOREAD.LabelWarningSignPercent": {"Label": "<60% favourable or >20% unfavourable"},
			"SLIDE_HOWTOREAD.LabelRedFlagPercent": {"Label": "<50% favourable or >30% unfavourable"},
			"SLIDE_TITLE": {"Id": "SLIDE_TITLE", "Title": "Title Slide", "Label": ""},
			"SLIDE_TITLE.info_0": {"Label": "#survey name#"},
			"SLIDE_TITLE.info_1": {"Label": "#client#"},
			"SLIDE_TITLE.info_2": {"Label": "Results for: #team name#"},
			"SLIDE_WELCOME": {
				"Id": "SLIDE_WELCOME",
				"Title": "Welcome to your team survey results summary",
				"Label": ""
			},
			"SLIDE_WELCOME.info_0": {"Label": "This slideshow feature allows you to get a first look at your team survey results. In this summary you will get a chance to understand..."},
			"SLIDE_WELCOME.info_1": {"Label": "How your team is performing in the areas your organisation feels are most important"},
			"SLIDE_WELCOME.info_2": {"Label": "The areas your team responses have indicated as 'areas to celebrate'"},
			"SLIDE_WELCOME.info_3": {"Label": "The areas your team responses have indicated as 'areas for future focus'"},
			"SLIDE_WELCOME.info_4": {"Label": "An overview of your team's responses by category or dimension"},
			"SLIDE_WELCOME.info_5": {"Label": "Some ideas on what to do next"},
			"SLIDE_NEXTSTEPS": {"Id": "SLIDE_NEXTSTEPS", "Title": "Next Steps", "Label": ""},
			"SLIDE_NEXTSTEPS.info_0": {"Label": "Making the best use of this useful feedback..."},
			"SLIDE_NEXTSTEPS.info_1": {"Label": "Take the time to <b>get deeper into your results using the online dashboard</b>, taking note of any questions you might have and adding questions or dimensions to your Actions as focus areas."},
			"SLIDE_NEXTSTEPS.info_2": {"Label": "<b>Download the PowerPoint summary</b> as a tool to share the results with your team - running through the results and eliciting their thoughts on the data will increase engagement with the process and inspire ideas for action."},
			"SLIDE_NEXTSTEPS.info_3": {"Label": "Build out your <b>action plan using the online tool</b> and be sure to see the actions through."},
			"Actions_TR04": {"Id": "Actions_TR04", "Title": "", "Label": ""},
			"Actions_TR04.title_0": {"Label": "Seek guidance"},
			"Actions_TR04.text_0": {"Label": "Seek internal guidance from Human Resources about external training programme."},
			"Actions_TR04.title_1": {"Label": "Make it personal"},
			"Actions_TR04.text_1": {"Label": "Have a one-on-one conversation with your team members to assess what training has been most valuable and what future training they need and why."},
			"Actions_SD03": {"Id": "Actions_SD03", "Title": "", "Label": ""},
			"Actions_SD03.title_0": {"Label": "Share the big picture"},
			"Actions_SD03.text_0": {"Label": "Set frequent team meetings and start with a Strategy Section in the agenda.<br>Explain the current strategy and goals of the company and relate the larger strategy to your business unit and team's strategy and goals."},
			"Actions_SD03.title_1": {"Label": "Align individual and company targets"},
			"Actions_SD03.text_1": {"Label": "Check in on your team member's performance on a regular basis.<br>In the initial meeting, agree clear goals for the employee to achieve and make sure they connect to the company's overall goals and strategy."},
			"Actions_SD03.title_2": {"Label": "Stay alert"},
			"Actions_SD03.text_2": {"Label": "Whenever there are company announcements, new policies or programs, press releases, etc., make sure to spend time with your employees as soon as possible to discuss them.<br>Encourage a healthy discussion about what has changed, their initial reactions and what it means for each of them."},
			"Actions_PE01": {"Id": "Actions_PE01", "Title": "", "Label": ""},
			"Actions_PE01.title_0": {"Label": "Align individual and company targets"},
			"Actions_PE01.text_0": {"Label": "Check in on your team member's performance on a regular basis.<br>In the initial meeting, agree clear goals for the employee to achieve and make sure they connect to the company's overall goals and strategy."},
			"Actions_PE01.title_1": {"Label": "Tell good stories"},
			"Actions_PE01.text_1": {"Label": "Communicate successes on a regular basis. Choose a format (Friday newsletters, weekly quizzes, 1-2-1, intranet communication) and include financial successes but don't focus exclusively on them.<br>Invite members of the team to talk about what they've done well recently."},
			"Actions_PE01.title_2": {"Label": "Be the change"},
			"Actions_PE01.text_2": {"Label": "Download and read Korn Ferry's thought leadership piece urging leaders to <a href='https://infokf.kornferry.com/Be_the_change.html?utm_source=website&utm_medium=banner&utm_term=&utm_content=%20&utm_campaign=19-11-GBL-Culture-Transformation' target='_blank'>Be the Change</a>"}
		},

		Buttons: {
			"Apply": {
				"Label": "Apply"
			},
			"Cancel": {
				"Label": "Cancel"
			},
			"Clear": {
				"Label": "Clear"
			},
			"Download": {
				"Label": "Download"
			},
			"Slideshow": {
				"Label": "Slideshow"
			},
			"Start": {
				"Label": "Start Exploring"
			},
			"More": {
				"Label": "More"
			},
			"Maintain": {
				"Label": "Take Action to Maintain"
			},
			"Improve": {
				"Label": "Take Action to Improve"
			},


			"TakeAction": {
				"Label": "Take Action"
			},
			"WorkOnThis": {
				"Label": "Work on this >>"
			},
			"AddToActionPlan": {
				"Label": "+ Add to Action Plan"
			},
			"AddOwnAction": {
				"Label": "+ Add Own Action"
			},
			"RemoveFromActionPlan": {
				"Label": "- Remove from Action Plan"
			},
			"Submit": {
				"Label": "Submit"
			},
			"Close": {
				"Label": "Close"
			}
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
			"ENPSCardFrontTitle": {
				"Label": "Your ENPS Score"
			},
			"ENPSCardBackTitle": {
				"Label": "Number of ENPS respondents"
			},
			"ENPSQuestionLabel": {
				"Label": "How likely is it that you would recommend our products / services to a friend or colleague?"
			},
			"ENPSPromotersDesc": {
				"Label": "Employees who are likely to recommend you"
			},
			"ENPSPassivesDesc": {
				"Label": "Employees with no strong feelings one way or the other"
			},
			"ENPSDetractorsDesc": {
				"Label": "Employees who are unwilling to recommend you or will possibly speak unfavorably about you"
			},
			"ENPSPromotersScale": {
				"Label": "Extremely likely"
			},
			"ENPSPassivesScale": {
				"Label": "Neutral"
			},
			"ENPSDetractorsScale": {
				"Label": "Not at all likely"
			},
			"ENPSPromotersScaleDesc": {
				"Label": "i.e. 9 & 10 scores"
			},
			"ENPSDetractorsScaleDesc": {
				"Label": "i.e. 0 & 6 scores"
			},
		},

		SlideTexts: {

			'SLIDE_WELCOME': {
				'title': 'Welcome to your team survey results summary',
				'info': [
					'This slideshow feature allows you to get a first look at your team survey results. In this summary you will get a chance to understand...',
					'How your team is performing in the areas your organisation feels are most important',
					"The areas your team responses have indicated as 'areas to celebrate'",
					"The areas your team responses have indicated as 'areas for future focus'",
					"An overview of your team's responses by category or dimension",
					'Some ideas on what to do next'
				]
			},
			'SLIDE_NEXTSTEPS': {
				'title': 'Next Steps',
				'info': [
					'Making the best use of this useful feedback...',
					'Take the time to <b>get deeper into your results using the online dashboard</b>, taking note of any questions you might have and adding questions or dimensions to your Actions as focus areas.',
					'<b>Download the PowerPoint summary</b> as a tool to share the results with your team - running through the results and eliciting their thoughts on the data will increase engagement with the process and inspire ideas for action.',
					'Build out your <b>action plan using the online tool</b> and be sure to see the actions through.'
				]
			},




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
				'info': [
					"Here is an overview of the most favourable and least favourable dimensions"
				],
				"LabelMostFav": "Most favourable dimensions",
				"LabelLeastFav": "Least favourable dimensions"
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

	}
}


if (data == null && !Main_IsProduction() ) {
	data = {

		// COMMENT CATEGORIES
		"COMCAT.2020.389.0": {
			"Comm1": {
				"N": 7734,
				"Dist": {
					"1": 552,
					"2": 510,
					"3": 563,
					"4": 598,
					"5": 536,
					"6": 544,
					"7": 591,
					"8": 512,
					"9": 533,
					"10": 586,
					"11": 530,
					"12": 541,
					"13": 596,
					"14": 542
				}
			},
			"Comm2": {
				"N": 11669,
				"Dist": {
					"1": 840,
					"2": 811,
					"3": 783,
					"4": 869,
					"5": 817,
					"6": 825,
					"7": 839,
					"8": 848,
					"9": 802,
					"10": 874,
					"11": 819,
					"12": 828,
					"13": 877,
					"14": 837
				}
			}
		},

		// NORMS
		"NORMS.AllCompany_A_17TO19_Avg.0": {
			"AG03": {
				"N": 43440,
				"Dist": {
					"Fav": 59
				}
			},
			"AG07": {
				"N": 548333,
				"Dist": {
					"Fav": 71
				}
			},
			"AG08": {
				"N": 42786,
				"Dist": {
					"Fav": 73
				}
			},
			"AG09": {
				"N": 160479,
				"Dist": {
					"Fav": 77
				}
			},
			"AG11": {
				"N": 73278,
				"Dist": {
					"Fav": 53
				}
			},
			"AL06": {
				"N": 65146,
				"Dist": {
					"Fav": 73
				}
			},
			"AL07": {
				"N": 228332,
				"Dist": {
					"Fav": 72
				}
			},
			"AV01": {
				"N": 1302045,
				"Dist": {
					"Fav": 51
				}
			},
			"AV02": {
				"N": 441793,
				"Dist": {
					"Fav": 58
				}
			},
			"AV05": {
				"N": 600787,
				"Dist": {
					"Fav": 42
				}
			},
			"AV08": {
				"N": 997242,
				"Dist": {
					"Fav": 55
				}
			},
			"AV09": {
				"N": 4961155,
				"Dist": {
					"Fav": 63
				}
			},
			"AV13": {
				"N": 80085,
				"Dist": {
					"Fav": 66
				}
			},
			"AV15": {
				"N": 3797924,
				"Dist": {
					"Fav": 56
				}
			},
			"BN01": {
				"N": 3969635,
				"Dist": {
					"Fav": 64
				}
			},
			"BN02": {
				"N": 104937,
				"Dist": {
					"Fav": 81
				}
			},
			"BN04": {
				"N": 565996,
				"Dist": {
					"Fav": 54
				}
			},
			"BN09": {
				"N": 75256,
				"Dist": {
					"Fav": 62
				}
			},
			"CF01": {
				"N": 78151,
				"Dist": {
					"Fav": 71
				}
			},
			"CF04": {
				"N": 109718,
				"Dist": {
					"Fav": 79
				}
			},
			"CF12": {
				"N": 101868,
				"Dist": {
					"Fav": 74
				}
			},
			"CF13": {
				"N": 92507,
				"Dist": {
					"Fav": 84
				}
			},
			"CM04": {
				"N": 79340,
				"Dist": {
					"Fav": 66
				}
			},
			"CM11": {
				"N": 29028,
				"Dist": {
					"Fav": 68
				}
			},
			"CM13": {
				"N": 134815,
				"Dist": {
					"Fav": 61
				}
			},
			"CM17": {
				"N": 25618,
				"Dist": {
					"Fav": 61
				}
			},
			"CP01": {
				"N": 23782,
				"Dist": {
					"Fav": 53
				}
			},
			"CP11": {
				"N": 3696043,
				"Dist": {
					"Fav": 49
				}
			},
			"CP12": {
				"N": 3094373,
				"Dist": {
					"Fav": 43
				}
			},
			"CP14": {
				"N": 2855522,
				"Dist": {
					"Fav": 45
				}
			},
			"CP16": {
				"N": 875250,
				"Dist": {
					"Fav": 61
				}
			},
			"CP19": {
				"N": 172273,
				"Dist": {
					"Fav": 70
				}
			},
			"CP26": {
				"N": 214333,
				"Dist": {
					"Fav": 51
				}
			},
			"CS05": {
				"N": 263008,
				"Dist": {
					"Fav": 74
				}
			},
			"CS13": {
				"N": 175205,
				"Dist": {
					"Fav": 81
				}
			},
			"CS25": {
				"N": 29523,
				"Dist": {
					"Fav": 81
				}
			},
			"DC01": {
				"N": 197211,
				"Dist": {
					"Fav": 65
				}
			},
			"DC03": {
				"N": 499349,
				"Dist": {
					"Fav": 67
				}
			},
			"DC08": {
				"N": 680334,
				"Dist": {
					"Fav": 45
				}
			},
			"DC09": {
				"N": 1468202,
				"Dist": {
					"Fav": 55
				}
			},
			"DC11": {
				"N": 3546444,
				"Dist": {
					"Fav": 72
				}
			},
			"DC21": {
				"N": 589084,
				"Dist": {
					"Fav": 57
				}
			},
			"DC29": {
				"N": 285317,
				"Dist": {
					"Fav": 72
				}
			},
			"DG01": {
				"N": 156137,
				"Dist": {
					"Fav": 60
				}
			},
			"DG07": {
				"N": 122359,
				"Dist": {
					"Fav": 61
				}
			},
			"DI01": {
				"N": 372980,
				"Dist": {
					"Fav": 74
				}
			},
			"DI03": {
				"N": 2336605,
				"Dist": {
					"Fav": 72
				}
			},
			"DI04": {
				"N": 1529157,
				"Dist": {
					"Fav": 76
				}
			},
			"DI09": {
				"N": 696917,
				"Dist": {
					"Fav": 64
				}
			},
			"DI10": {
				"N": 197293,
				"Dist": {
					"Fav": 78
				}
			},
			"DI11": {
				"N": 26243,
				"Dist": {
					"Fav": 63
				}
			},
			"DI12": {
				"N": 40824,
				"Dist": {
					"Fav": 78
				}
			},
			"DI13": {
				"N": 25576,
				"Dist": {
					"Fav": 80
				}
			},
			"DI14": {
				"N": 27386,
				"Dist": {
					"Fav": 62
				}
			},
			"DI15": {
				"N": 25954,
				"Dist": {
					"Fav": 90
				}
			},
			"DI16": {
				"N": 41328,
				"Dist": {
					"Fav": 90
				}
			},
			"DI17": {
				"N": 32469,
				"Dist": {
					"Fav": 79
				}
			},
			"DI18": {
				"N": 22708,
				"Dist": {
					"Fav": 54
				}
			},
			"DI19": {
				"N": 51529,
				"Dist": {
					"Fav": 76
				}
			},
			"DI20": {
				"N": 80124,
				"Dist": {
					"Fav": 69
				}
			},
			"DI21": {
				"N": 24385,
				"Dist": {
					"Fav": 55
				}
			},
			"DI22": {
				"N": 39219,
				"Dist": {
					"Fav": 71
				}
			},
			"DI23": {
				"N": 27130,
				"Dist": {
					"Fav": 82
				}
			},
			"DI24": {
				"N": 24377,
				"Dist": {
					"Fav": 63
				}
			},
			"DI25": {
				"N": 25098,
				"Dist": {
					"Fav": 58
				}
			},
			"DI26": {
				"N": 22241,
				"Dist": {
					"Fav": 60
				}
			},
			"DI27": {
				"N": 24803,
				"Dist": {
					"Fav": 68
				}
			},
			"DI28": {
				"N": 25544,
				"Dist": {
					"Fav": 59
				}
			},
			"DI29": {
				"N": 42067,
				"Dist": {
					"Fav": 66
				}
			},
			"DI30": {
				"N": 24779,
				"Dist": {
					"Fav": 58
				}
			},
			"DI31": {
				"N": 28896,
				"Dist": {
					"Fav": 50
				}
			},
			"DI32": {
				"N": 106999,
				"Dist": {
					"Fav": 79
				}
			},
			"DI33": {
				"N": 23210,
				"Dist": {
					"Fav": 69
				}
			},
			"DI34": {
				"N": 25095,
				"Dist": {
					"Fav": 52
				}
			},
			"DI35": {
				"N": 25542,
				"Dist": {
					"Fav": 69
				}
			},
			"DI36": {
				"N": 24014,
				"Dist": {
					"Fav": 58
				}
			},
			"DI37": {
				"N": 24058,
				"Dist": {
					"Fav": 61
				}
			},
			"DI38": {
				"N": 24430,
				"Dist": {
					"Fav": 76
				}
			},
			"DI39": {
				"N": 23617,
				"Dist": {
					"Fav": 58
				}
			},
			"DI40": {
				"N": 36688,
				"Dist": {
					"Fav": 57
				}
			},
			"DM01": {
				"N": 330143,
				"Dist": {
					"Fav": 67
				}
			},
			"DM02": {
				"N": 4029109,
				"Dist": {
					"Fav": 73
				}
			},
			"DM04": {
				"N": 1987892,
				"Dist": {
					"Fav": 46
				}
			},
			"DM05": {
				"N": 91310,
				"Dist": {
					"Fav": 64
				}
			},
			"DM18": {
				"N": 1212067,
				"Dist": {
					"Fav": 38
				}
			},
			"DM20": {
				"N": 391868,
				"Dist": {
					"Fav": 69
				}
			},
			"EC01": {
				"N": 181821,
				"Dist": {
					"Fav": 68
				}
			},
			"EC08": {
				"N": 123222,
				"Dist": {
					"Fav": 73
				}
			},
			"EC09": {
				"N": 407773,
				"Dist": {
					"Fav": 80
				}
			},
			"EC12": {
				"N": 234963,
				"Dist": {
					"Fav": 86
				}
			},
			"EC13": {
				"N": 110735,
				"Dist": {
					"Fav": 77
				}
			},
			"EQ01": {
				"N": 347105,
				"Dist": {
					"Fav": 73
				}
			},
			"ER01": {
				"N": 4146678,
				"Dist": {
					"Fav": 79
				}
			},
			"ER02": {
				"N": 94175,
				"Dist": {
					"Fav": 73
				}
			},
			"ER03": {
				"N": 182444,
				"Dist": {
					"Fav": 67
				}
			},
			"ER05": {
				"N": 132137,
				"Dist": {
					"Fav": 58
				}
			},
			"ER08": {
				"N": 222792,
				"Dist": {
					"Fav": 70
				}
			},
			"GP02": {
				"N": 20389,
				"Dist": {
					"Fav": 53
				}
			},
			"GP03": {
				"N": 1178337,
				"Dist": {
					"Fav": 60
				}
			},
			"GP06": {
				"N": 151971,
				"Dist": {
					"Fav": 82
				}
			},
			"GP07": {
				"N": 1422808,
				"Dist": {
					"Fav": 72
				}
			},
			"GP08": {
				"N": 327022,
				"Dist": {
					"Fav": 61
				}
			},
			"GP09": {
				"N": 3079710,
				"Dist": {
					"Fav": 54
				}
			},
			"GP10": {
				"N": 2796260,
				"Dist": {
					"Fav": 64
				}
			},
			"GP11": {
				"N": 110105,
				"Dist": {
					"Fav": 75
				}
			},
			"GP12": {
				"N": 4779267,
				"Dist": {
					"Fav": 57
				}
			},
			"GP13": {
				"N": 59234,
				"Dist": {
					"Fav": 72
				}
			},
			"GP18": {
				"N": 272497,
				"Dist": {
					"Fav": 61
				}
			},
			"GP19": {
				"N": 118255,
				"Dist": {
					"Fav": 49
				}
			},
			"GP20": {
				"N": 158235,
				"Dist": {
					"Fav": 79
				}
			},
			"GP21": {
				"N": 63507,
				"Dist": {
					"Fav": 65
				}
			},
			"GP22": {
				"N": 805263,
				"Dist": {
					"Fav": 79
				}
			},
			"IV02": {
				"N": 2838315,
				"Dist": {
					"Fav": 58
				}
			},
			"IV03": {
				"N": 479086,
				"Dist": {
					"Fav": 64
				}
			},
			"IV04": {
				"N": 3816491,
				"Dist": {
					"Fav": 70
				}
			},
			"IV05": {
				"N": 630820,
				"Dist": {
					"Fav": 61
				}
			},
			"js01": {
				"N": 98350,
				"Dist": {
					"Fav": 73
				}
			},
			"JS02": {
				"N": 5765012,
				"Dist": {
					"Fav": 74
				}
			},
			"JS03": {
				"N": 178696,
				"Dist": {
					"Fav": 75
				}
			},
			"JS05": {
				"N": 5595093,
				"Dist": {
					"Fav": 74
				}
			},
			"JS07": {
				"N": 215884,
				"Dist": {
					"Fav": 71
				}
			},
			"JS09": {
				"N": 248669,
				"Dist": {
					"Fav": 79
				}
			},
			"LD01": {
				"N": 23323,
				"Dist": {
					"Fav": 74
				}
			},
			"LD04": {
				"N": 1537253,
				"Dist": {
					"Fav": 57
				}
			},
			"LD05": {
				"N": 28508,
				"Dist": {
					"Fav": 70
				}
			},
			"LD07": {
				"N": 60220,
				"Dist": {
					"Fav": 67
				}
			},
			"LD09": {
				"N": 3830535,
				"Dist": {
					"Fav": 63
				}
			},
			"LD10": {
				"N": 918383,
				"Dist": {
					"Fav": 66
				}
			},
			"LD11": {
				"N": 750564,
				"Dist": {
					"Fav": 61
				}
			},
			"LD20": {
				"N": 958705,
				"Dist": {
					"Fav": 77
				}
			},
			"MV02": {
				"N": 10276,
				"Dist": {
					"Fav": 92
				}
			},
			"MV04": {
				"N": 677615,
				"Dist": {
					"Fav": 77
				}
			},
			"MV06": {
				"N": 457194,
				"Dist": {
					"Fav": 85
				}
			},
			"MV07": {
				"N": 1037281,
				"Dist": {
					"Fav": 71
				}
			},
			"MV08": {
				"N": 542554,
				"Dist": {
					"Fav": 80
				}
			},
			"NP01": {
				"N": 956988,
				"Dist": {
					"Fav": 47
				}
			},
			"OM01": {
				"N": 6755670,
				"Dist": {
					"Fav": 69
				}
			},
			"OM02": {
				"N": 36473,
				"Dist": {
					"Fav": 89
				}
			},
			"OM04": {
				"N": 814268,
				"Dist": {
					"Fav": 80
				}
			},
			"OM05": {
				"N": 86697,
				"Dist": {
					"Fav": 60
				}
			},
			"OM06": {
				"N": 5130392,
				"Dist": {
					"Fav": 57
				}
			},
			"OM10": {
				"N": 106582,
				"Dist": {
					"Fav": 67
				}
			},
			"OM11": {
				"N": 5643128,
				"Dist": {
					"Fav": 68
				}
			},
			"OM12": {
				"N": 5901263,
				"Dist": {
					"Fav": 57
				}
			},
			"OM13": {
				"N": 40868,
				"Dist": {
					"Fav": 56
				}
			},
			"OM16": {
				"N": 5883,
				"Dist": {
					"Fav": 73
				}
			},
			"OS01": {
				"N": 486488,
				"Dist": {
					"Fav": 69
				}
			},
			"OS02": {
				"N": 6878814,
				"Dist": {
					"Fav": 77
				}
			},
			"OS03": {
				"N": 104486,
				"Dist": {
					"Fav": 77
				}
			},
			"PE01": {
				"N": 1295899,
				"Dist": {
					"Fav": 85
				}
			},
			"PE02": {
				"N": 167070,
				"Dist": {
					"Fav": 78
				}
			},
			"PE03": {
				"N": 4104995,
				"Dist": {
					"Fav": 87
				}
			},
			"PE04": {
				"N": 6545,
				"Dist": {
					"Fav": 90
				}
			},
			"PE05": {
				"N": 407064,
				"Dist": {
					"Fav": 68
				}
			},
			"PE06": {
				"N": 1378015,
				"Dist": {
					"Fav": 87
				}
			},
			"PE07": {
				"N": 61390,
				"Dist": {
					"Fav": 75
				}
			},
			"PE08": {
				"N": 508527,
				"Dist": {
					"Fav": 78
				}
			},
			"PE09": {
				"N": 3854479,
				"Dist": {
					"Fav": 59
				}
			},
			"PE10": {
				"N": 1062375,
				"Dist": {
					"Fav": 47
				}
			},
			"PE11": {
				"N": 211593,
				"Dist": {
					"Fav": 48
				}
			},
			"PE14": {
				"N": 103344,
				"Dist": {
					"Fav": 67
				}
			},
			"PE21": {
				"N": 1075519,
				"Dist": {
					"Fav": 63
				}
			},
			"PE23": {
				"N": 220609,
				"Dist": {
					"Fav": 76
				}
			},
			"QS01": {
				"N": 3855178,
				"Dist": {
					"Fav": 76
				}
			},
			"QS02": {
				"N": 3475371,
				"Dist": {
					"Fav": 77
				}
			},
			"QS03": {
				"N": 1149564,
				"Dist": {
					"Fav": 69
				}
			},
			"QS04": {
				"N": 49826,
				"Dist": {
					"Fav": 85
				}
			},
			"QS09": {
				"N": 654609,
				"Dist": {
					"Fav": 71
				}
			},
			"QS10": {
				"N": 16552,
				"Dist": {
					"Fav": 78
				}
			},
			"QS16": {
				"N": 2133185,
				"Dist": {
					"Fav": 82
				}
			},
			"RC01": {
				"N": 4796063,
				"Dist": {
					"Fav": 63
				}
			},
			"RC03": {
				"N": 23584,
				"Dist": {
					"Fav": 58
				}
			},
			"RE01": {
				"N": 4303709,
				"Dist": {
					"Fav": 69
				}
			},
			"SD01": {
				"N": 508991,
				"Dist": {
					"Fav": 68
				}
			},
			"SD02": {
				"N": 178718,
				"Dist": {
					"Fav": 70
				}
			},
			"SD03": {
				"N": 2851599,
				"Dist": {
					"Fav": 76
				}
			},
			"SD04": {
				"N": 2853230,
				"Dist": {
					"Fav": 67
				}
			},
			"SD05": {
				"N": 4360474,
				"Dist": {
					"Fav": 83
				}
			},
			"SD06": {
				"N": 100735,
				"Dist": {
					"Fav": 74
				}
			},
			"SD12": {
				"N": 19218,
				"Dist": {
					"Fav": 58
				}
			},
			"SD14": {
				"N": 11106,
				"Dist": {
					"Fav": 72
				}
			},
			"SP02": {
				"N": 374438,
				"Dist": {
					"Fav": 74
				}
			},
			"SP03": {
				"N": 1642554,
				"Dist": {
					"Fav": 69
				}
			},
			"SP04": {
				"N": 1196674,
				"Dist": {
					"Fav": 83
				}
			},
			"SP06": {
				"N": 178802,
				"Dist": {
					"Fav": 78
				}
			},
			"SP07": {
				"N": 542390,
				"Dist": {
					"Fav": 85
				}
			},
			"SP08": {
				"N": 1149313,
				"Dist": {
					"Fav": 79
				}
			},
			"SP09": {
				"N": 148849,
				"Dist": {
					"Fav": 77
				}
			},
			"SP12": {
				"N": 4271868,
				"Dist": {
					"Fav": 70
				}
			},
			"SP13": {
				"N": 437096,
				"Dist": {
					"Fav": 74
				}
			},
			"SP16": {
				"N": 100023,
				"Dist": {
					"Fav": 78
				}
			},
			"SP20": {
				"N": 287216,
				"Dist": {
					"Fav": 73
				}
			},
			"SP22": {
				"N": 98925,
				"Dist": {
					"Fav": 70
				}
			},
			"SP24": {
				"N": 263299,
				"Dist": {
					"Fav": 85
				}
			},
			"SP37": {
				"N": 205136,
				"Dist": {
					"Fav": 86
				}
			},
			"SP40": {
				"N": 320221,
				"Dist": {
					"Fav": 80
				}
			},
			"SP41": {
				"N": 860600,
				"Dist": {
					"Fav": 75
				}
			},
			"SP45": {
				"N": 3049935,
				"Dist": {
					"Fav": 77
				}
			},
			"SP47": {
				"N": 1221622,
				"Dist": {
					"Fav": 66
				}
			},
			"SP48": {
				"N": 232302,
				"Dist": {
					"Fav": 85
				}
			},
			"SP49": {
				"N": 41344,
				"Dist": {
					"Fav": 70
				}
			},
			"SP50": {
				"N": 132216,
				"Dist": {
					"Fav": 78
				}
			},
			"SP53": {
				"N": 226401,
				"Dist": {
					"Fav": 83
				}
			},
			"SP57": {
				"N": 175209,
				"Dist": {
					"Fav": 75
				}
			},
			"SP58": {
				"N": 76513,
				"Dist": {
					"Fav": 68
				}
			},
			"SP62": {
				"N": 111118,
				"Dist": {
					"Fav": 73
				}
			},
			"SP65": {
				"N": 239772,
				"Dist": {
					"Fav": 78
				}
			},
			"SP67": {
				"N": 209613,
				"Dist": {
					"Fav": 80
				}
			},
			"SP68": {
				"N": 468938,
				"Dist": {
					"Fav": 80
				}
			},
			"SP72": {
				"N": 386774,
				"Dist": {
					"Fav": 76
				}
			},
			"SR01": {
				"N": 314693,
				"Dist": {
					"Fav": 81
				}
			},
			"SR03": {
				"N": 2298539,
				"Dist": {
					"Fav": 79
				}
			},
			"SR05": {
				"N": 1419704,
				"Dist": {
					"Fav": 79
				}
			},
			"SR07": {
				"N": 821789,
				"Dist": {
					"Fav": 75
				}
			},
			"SR08": {
				"N": 437778,
				"Dist": {
					"Fav": 84
				}
			},
			"SR09": {
				"N": 426879,
				"Dist": {
					"Fav": 76
				}
			},
			"ST01": {
				"N": 2570325,
				"Dist": {
					"Fav": 52
				}
			},
			"ST05": {
				"N": 261889,
				"Dist": {
					"Fav": 69
				}
			},
			"SV02": {
				"N": 2219995,
				"Dist": {
					"Fav": 53
				}
			},
			"SV03": {
				"N": 1717158,
				"Dist": {
					"Fav": 61
				}
			},
			"SV04": {
				"N": 476435,
				"Dist": {
					"Fav": 60
				}
			},
			"SV05": {
				"N": 395878,
				"Dist": {
					"Fav": 59
				}
			},
			"SY01": {
				"N": 356062,
				"Dist": {
					"Fav": 74
				}
			},
			"TR01": {
				"N": 4416830,
				"Dist": {
					"Fav": 60
				}
			},
			"TR02": {
				"N": 43160,
				"Dist": {
					"Fav": 59
				}
			},
			"TR04": {
				"N": 1551188,
				"Dist": {
					"Fav": 58
				}
			},
			"TR06": {
				"N": 209703,
				"Dist": {
					"Fav": 58
				}
			},
			"TR09": {
				"N": 1760961,
				"Dist": {
					"Fav": 50
				}
			},
			"TW02": {
				"N": 2219111,
				"Dist": {
					"Fav": 52
				}
			},
			"TW03": {
				"N": 146141,
				"Dist": {
					"Fav": 72
				}
			},
			"TW04": {
				"N": 3725842,
				"Dist": {
					"Fav": 80
				}
			},
			"TW06": {
				"N": 3270915,
				"Dist": {
					"Fav": 52
				}
			},
			"VC01": {
				"N": 145789,
				"Dist": {
					"Fav": 66
				}
			},
			"VC02": {
				"N": 112513,
				"Dist": {
					"Fav": 62
				}
			},
			"VC04": {
				"N": 2267181,
				"Dist": {
					"Fav": 66
				}
			},
			"VC07": {
				"N": 415349,
				"Dist": {
					"Fav": 73
				}
			},
			"VC10": {
				"N": 1542321,
				"Dist": {
					"Fav": 64
				}
			},
			"WB01": {
				"N": 17971,
				"Dist": {
					"Fav": 71
				}
			},
			"WB04": {
				"N": 20856,
				"Dist": {
					"Fav": 65
				}
			},
			"WB07": {
				"N": 121650,
				"Dist": {
					"Fav": 82
				}
			},
			"WE01": {
				"N": 3205296,
				"Dist": {
					"Fav": 65
				}
			},
			"WE02": {
				"N": 181341,
				"Dist": {
					"Fav": 39
				}
			},
			"WE06": {
				"N": 4795,
				"Dist": {
					"Fav": 66
				}
			},
			"WE07": {
				"N": 127590,
				"Dist": {
					"Fav": 73
				}
			},
			"WE08": {
				"N": 5733140,
				"Dist": {
					"Fav": 62
				}
			},
			"WE12": {
				"N": 5684312,
				"Dist": {
					"Fav": 58
				}
			},
			"WK01": {
				"N": 1361098,
				"Dist": {
					"Fav": 72
				}
			},
			"WK02": {
				"N": 870538,
				"Dist": {
					"Fav": 84
				}
			},
			"WK03": {
				"N": 192396,
				"Dist": {
					"Fav": 90
				}
			},
			"WK04": {
				"N": 404449,
				"Dist": {
					"Fav": 81
				}
			},
			"WK05": {
				"N": 102185,
				"Dist": {
					"Fav": 79
				}
			},
			"WK06": {
				"N": 262963,
				"Dist": {
					"Fav": 81
				}
			},
			"WK09": {
				"N": 17566,
				"Dist": {
					"Fav": 70
				}
			},
			"WL01": {
				"N": 3227147,
				"Dist": {
					"Fav": 63
				}
			},
			"WL02": {
				"N": 154592,
				"Dist": {
					"Fav": 77
				}
			},
			"WL03": {
				"N": 1098090,
				"Dist": {
					"Fav": 68
				}
			},
			"WS01": {
				"N": 1064106,
				"Dist": {
					"Fav": 63
				}
			},
			"WS03": {
				"N": 2210249,
				"Dist": {
					"Fav": 48
				}
			},
			"WS04": {
				"N": 297053,
				"Dist": {
					"Fav": 49
				}
			}
		},
		"NORMS.HP_A_17TO19_Avg.0": {
			"AV01": {
				"N": 35168,
				"Dist": {
					"Fav": 59
				}
			},
			"AV08": {
				"N": 39519,
				"Dist": {
					"Fav": 61
				}
			},
			"AV09": {
				"N": 333120,
				"Dist": {
					"Fav": 70
				}
			},
			"AV15": {
				"N": 423988,
				"Dist": {
					"Fav": 63
				}
			},
			"BN01": {
				"N": 432581,
				"Dist": {
					"Fav": 71
				}
			},
			"BN04": {
				"N": 19205,
				"Dist": {
					"Fav": 64
				}
			},
			"CP11": {
				"N": 357017,
				"Dist": {
					"Fav": 54
				}
			},
			"CP12": {
				"N": 416394,
				"Dist": {
					"Fav": 48
				}
			},
			"CP14": {
				"N": 472573,
				"Dist": {
					"Fav": 54
				}
			},
			"CP16": {
				"N": 241911,
				"Dist": {
					"Fav": 71
				}
			},
			"DC08": {
				"N": 64493,
				"Dist": {
					"Fav": 57
				}
			},
			"DC09": {
				"N": 161312,
				"Dist": {
					"Fav": 66
				}
			},
			"DC11": {
				"N": 316783,
				"Dist": {
					"Fav": 78
				}
			},
			"DC21": {
				"N": 269114,
				"Dist": {
					"Fav": 57
				}
			},
			"DI01": {
				"N": 47707,
				"Dist": {
					"Fav": 82
				}
			},
			"DI03": {
				"N": 276912,
				"Dist": {
					"Fav": 78
				}
			},
			"DI04": {
				"N": 42893,
				"Dist": {
					"Fav": 79
				}
			},
			"DM02": {
				"N": 317861,
				"Dist": {
					"Fav": 78
				}
			},
			"DM04": {
				"N": 434054,
				"Dist": {
					"Fav": 59
				}
			},
			"DM18": {
				"N": 306047,
				"Dist": {
					"Fav": 54
				}
			},
			"ER01": {
				"N": 371159,
				"Dist": {
					"Fav": 84
				}
			},
			"GP03": {
				"N": 203171,
				"Dist": {
					"Fav": 74
				}
			},
			"GP07": {
				"N": 111832,
				"Dist": {
					"Fav": 83
				}
			},
			"GP09": {
				"N": 265198,
				"Dist": {
					"Fav": 63
				}
			},
			"GP10": {
				"N": 195637,
				"Dist": {
					"Fav": 74
				}
			},
			"GP12": {
				"N": 341319,
				"Dist": {
					"Fav": 67
				}
			},
			"GP22": {
				"N": 44433,
				"Dist": {
					"Fav": 89
				}
			},
			"IV02": {
				"N": 246881,
				"Dist": {
					"Fav": 68
				}
			},
			"IV03": {
				"N": 268946,
				"Dist": {
					"Fav": 76
				}
			},
			"IV04": {
				"N": 393732,
				"Dist": {
					"Fav": 75
				}
			},
			"IV05": {
				"N": 100374,
				"Dist": {
					"Fav": 65
				}
			},
			"JS02": {
				"N": 511304,
				"Dist": {
					"Fav": 78
				}
			},
			"JS05": {
				"N": 497219,
				"Dist": {
					"Fav": 78
				}
			},
			"LD04": {
				"N": 129758,
				"Dist": {
					"Fav": 69
				}
			},
			"LD09": {
				"N": 355863,
				"Dist": {
					"Fav": 74
				}
			},
			"LD10": {
				"N": 67077,
				"Dist": {
					"Fav": 73
				}
			},
			"OM01": {
				"N": 691438,
				"Dist": {
					"Fav": 78
				}
			},
			"OM04": {
				"N": 95500,
				"Dist": {
					"Fav": 88
				}
			},
			"OM06": {
				"N": 633607,
				"Dist": {
					"Fav": 65
				}
			},
			"OM11": {
				"N": 688246,
				"Dist": {
					"Fav": 74
				}
			},
			"OM12": {
				"N": 663954,
				"Dist": {
					"Fav": 65
				}
			},
			"OS02": {
				"N": 692055,
				"Dist": {
					"Fav": 84
				}
			},
			"PE01": {
				"N": 187454,
				"Dist": {
					"Fav": 89
				}
			},
			"PE03": {
				"N": 303468,
				"Dist": {
					"Fav": 91
				}
			},
			"PE06": {
				"N": 69011,
				"Dist": {
					"Fav": 91
				}
			},
			"PE08": {
				"N": 75980,
				"Dist": {
					"Fav": 84
				}
			},
			"PE09": {
				"N": 346624,
				"Dist": {
					"Fav": 67
				}
			},
			"PE10": {
				"N": 94823,
				"Dist": {
					"Fav": 57
				}
			},
			"PE21": {
				"N": 109283,
				"Dist": {
					"Fav": 73
				}
			},
			"QS01": {
				"N": 463658,
				"Dist": {
					"Fav": 83
				}
			},
			"QS02": {
				"N": 416316,
				"Dist": {
					"Fav": 86
				}
			},
			"QS03": {
				"N": 135832,
				"Dist": {
					"Fav": 80
				}
			},
			"QS09": {
				"N": 120460,
				"Dist": {
					"Fav": 80
				}
			},
			"QS16": {
				"N": 80811,
				"Dist": {
					"Fav": 86
				}
			},
			"RC01": {
				"N": 408345,
				"Dist": {
					"Fav": 69
				}
			},
			"RE01": {
				"N": 348199,
				"Dist": {
					"Fav": 75
				}
			},
			"SD03": {
				"N": 302177,
				"Dist": {
					"Fav": 81
				}
			},
			"SD04": {
				"N": 227600,
				"Dist": {
					"Fav": 78
				}
			},
			"SD05": {
				"N": 373438,
				"Dist": {
					"Fav": 88
				}
			},
			"SP04": {
				"N": 120389,
				"Dist": {
					"Fav": 88
				}
			},
			"SP08": {
				"N": 40744,
				"Dist": {
					"Fav": 81
				}
			},
			"SP12": {
				"N": 323007,
				"Dist": {
					"Fav": 75
				}
			},
			"SP45": {
				"N": 353524,
				"Dist": {
					"Fav": 81
				}
			},
			"SP47": {
				"N": 121811,
				"Dist": {
					"Fav": 73
				}
			},
			"SR03": {
				"N": 129483,
				"Dist": {
					"Fav": 86
				}
			},
			"SR05": {
				"N": 94646,
				"Dist": {
					"Fav": 87
				}
			},
			"ST01": {
				"N": 190299,
				"Dist": {
					"Fav": 65
				}
			},
			"SV02": {
				"N": 116503,
				"Dist": {
					"Fav": 58
				}
			},
			"SV03": {
				"N": 67355,
				"Dist": {
					"Fav": 70
				}
			},
			"TR01": {
				"N": 590701,
				"Dist": {
					"Fav": 68
				}
			},
			"TR04": {
				"N": 136878,
				"Dist": {
					"Fav": 67
				}
			},
			"TR09": {
				"N": 101859,
				"Dist": {
					"Fav": 54
				}
			},
			"TW02": {
				"N": 308975,
				"Dist": {
					"Fav": 64
				}
			},
			"TW04": {
				"N": 394248,
				"Dist": {
					"Fav": 82
				}
			},
			"TW06": {
				"N": 246869,
				"Dist": {
					"Fav": 60
				}
			},
			"VC04": {
				"N": 165017,
				"Dist": {
					"Fav": 71
				}
			},
			"VC10": {
				"N": 193722,
				"Dist": {
					"Fav": 69
				}
			},
			"WE01": {
				"N": 261685,
				"Dist": {
					"Fav": 71
				}
			},
			"WE08": {
				"N": 654526,
				"Dist": {
					"Fav": 70
				}
			},
			"WE12": {
				"N": 679327,
				"Dist": {
					"Fav": 65
				}
			},
			"WK01": {
				"N": 236814,
				"Dist": {
					"Fav": 80
				}
			},
			"WK02": {
				"N": 138149,
				"Dist": {
					"Fav": 87
				}
			},
			"WK04": {
				"N": 103782,
				"Dist": {
					"Fav": 85
				}
			},
			"WK06": {
				"N": 59427,
				"Dist": {
					"Fav": 83
				}
			},
			"WL01": {
				"N": 206917,
				"Dist": {
					"Fav": 69
				}
			},
			"WL03": {
				"N": 284527,
				"Dist": {
					"Fav": 69
				}
			},
			"WS01": {
				"N": 183013,
				"Dist": {
					"Fav": 69
				}
			},
			"WS03": {
				"N": 145974,
				"Dist": {
					"Fav": 52
				}
			}
		},


		"NORMDIMS.AllCompany_A_17TO19_Avg.0": {
			"DIM_ENG": {
				"Dist": {
					"Fav": 66
				},
				"N": 6878814
			},
			"DIM_ENA": {
				"Dist": {
					"Fav": 67
				},
				"N": 5765012
			},
			"DIM_N64": {
				"Dist": {
					"Fav": 69
				},
				"N": 4303709
			},
			"DIM_N50": {
				"Dist": {
					"Fav": 62
				},
				"N": 4029109
			},
			"DIM_N65": {
				"Dist": {
					"Fav": 71
				},
				"N": 4796063
			},
			"DIM_N52": {
				"Dist": {
					"Fav": 57
				},
				"N": 3725842
			},
			"DIM_N63": {
				"Dist": {
					"Fav": 76
				},
				"N": 3855178
			},
			"DIM_N61": {
				"Dist": {
					"Fav": 65
				},
				"N": 4104995
			},
			"DIM_N54": {
				"Dist": {
					"Fav": 59
				},
				"N": 4961155
			},
			"DIM_N53": {
				"Dist": {
					"Fav": 68
				},
				"N": 4779267
			},
			"DIM_N66": {
				"Dist": {
					"Fav": 59
				},
				"N": 4416830
			},
			"DIM_N51": {
				"Dist": {
					"Fav": 74
				},
				"N": 4360474
			},
			"DIM_N67": {
				"Dist": {
					"Fav": 57
				},
				"N": 3205296
			},
			"DIM_N60": {
				"Dist": {
					"Fav": 54
				},
				"N": 3969635
			},
			"DIM_NPS": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": null
			}
		},
		"NORMDIMS.HP_A_17TO19_Avg.0": {
			"DIM_ENG": {
				"Dist": {
					"Fav": 73
				},
				"N": 692055
			},
			"DIM_ENA": {
				"Dist": {
					"Fav": 73
				},
				"N": 679327
			},
			"DIM_N64": {
				"Dist": {
					"Fav": 75
				},
				"N": 348199
			},
			"DIM_N50": {
				"Dist": {
					"Fav": 70
				},
				"N": 393732
			},
			"DIM_N65": {
				"Dist": {
					"Fav": 77
				},
				"N": 408345
			},
			"DIM_N52": {
				"Dist": {
					"Fav": 65
				},
				"N": 394248
			},
			"DIM_N63": {
				"Dist": {
					"Fav": 84
				},
				"N": 463658
			},
			"DIM_N61": {
				"Dist": {
					"Fav": 72
				},
				"N": 472573
			},
			"DIM_N54": {
				"Dist": {
					"Fav": 66
				},
				"N": 423988
			},
			"DIM_N53": {
				"Dist": {
					"Fav": 76
				},
				"N": 355863
			},
			"DIM_N66": {
				"Dist": {
					"Fav": 66
				},
				"N": 590701
			},
			"DIM_N51": {
				"Dist": {
					"Fav": 82
				},
				"N": 373438
			},
			"DIM_N67": {
				"Dist": {
					"Fav": 66
				},
				"N": 434054
			},
			"DIM_N60": {
				"Dist": {
					"Fav": 62
				},
				"N": 432581
			},
			"DIM_NPS": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": null
			}
		},

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
		"ITEMS.2018.389.0": {
			"RE01": {
				"Dist": {
					"Fav": 9027,
					"Neu": 1550,
					"Unfav": 1237
				},
				"N": 11814
			},
			"DM02": {
				"Dist": {
					"Fav": 8960,
					"Neu": 1452,
					"Unfav": 1403
				},
				"N": 11815
			},
			"RC01": {
				"Dist": {
					"Fav": 1828,
					"Neu": 574,
					"Unfav": 509
				},
				"N": 2911
			},
			"TW06": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": null
			},
			"QS01": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": null
			},
			"PE09": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": null
			},
			"AV15": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": null
			},
			"LD04": {
				"Dist": {
					"Fav": 9138,
					"Neu": 1519,
					"Unfav": 1157
				},
				"N": 11814
			},
			"WS03": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": null
			},
			"TR09": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": null
			},
			"PE06": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": null
			},
			"SD04": {
				"Dist": {
					"Fav": 1133,
					"Neu": 417,
					"Unfav": 409
				},
				"N": 1959
			},
			"PE03": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": null
			},
			"OM12": {
				"Dist": {
					"Fav": 719,
					"Neu": 117,
					"Unfav": 100
				},
				"N": 936
			},
			"QS16": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": null
			},
			"LD09": {
				"Dist": {
					"Fav": 1581,
					"Neu": 160,
					"Unfav": 210
				},
				"N": 1951
			},
			"TR01": {
				"Dist": {
					"Fav": 1397,
					"Neu": 303,
					"Unfav": 258
				},
				"N": 1958
			},
			"VC04": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": null
			},
			"GP07": {
				"Dist": {
					"Fav": 476,
					"Neu": 226,
					"Unfav": 230
				},
				"N": 932
			},
			"ER01": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": null
			},
			"IV02": {
				"Dist": {
					"Fav": 1129,
					"Neu": 330,
					"Unfav": 489
				},
				"N": 1948
			},
			"CP14": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": null
			},
			"GP12": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": null
			},
			"CP11": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": null
			},
			"WE01": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": null
			},
			"IV04": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": null
			},
			"WE12": {
				"Dist": {
					"Fav": 3150,
					"Neu": 971,
					"Unfav": 709
				},
				"N": 4830
			},
			"SP12": {
				"Dist": {
					"Fav": 7667,
					"Neu": 2464,
					"Unfav": 1684
				},
				"N": 11815
			},
			"AV09": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": null
			},
			"TW04": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": null
			},
			"CP12": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": null
			},
			"DC11": {
				"Dist": {
					"Fav": 9584,
					"Neu": 1736,
					"Unfav": 486
				},
				"N": 11806
			},
			"BN01": {
				"Dist": {
					"Fav": 8987,
					"Neu": 1757,
					"Unfav": 1048
				},
				"N": 11792
			},
			"GP09": {
				"Dist": {
					"Fav": 6542,
					"Neu": 2222,
					"Unfav": 3047
				},
				"N": 11811
			},
			"QS03": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": null
			},
			"OM01": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": null
			},
			"TR04": {
				"Dist": {
					"Fav": 5742,
					"Neu": 2290,
					"Unfav": 3780
				},
				"N": 11812
			},
			"QS02": {
				"Dist": {
					"Fav": 3626,
					"Neu": 1791,
					"Unfav": 3611
				},
				"N": 9028
			},
			"JS05": {
				"Dist": {
					"Fav": 3610,
					"Neu": 1837,
					"Unfav": 3626
				},
				"N": 9073
			},
			"OM11": {
				"Dist": {
					"Fav": 3615,
					"Neu": 1883,
					"Unfav": 3644
				},
				"N": 9142
			},
			"SD05": {
				"Dist": {
					"Fav": 3694,
					"Neu": 1859,
					"Unfav": 3565
				},
				"N": 9118
			},
			"SD03": {
				"Dist": {
					"Fav": 3650,
					"Neu": 1825,
					"Unfav": 3634
				},
				"N": 9109
			},
			"OS02": {
				"Dist": {
					"Fav": 3670,
					"Neu": 1852,
					"Unfav": 3588
				},
				"N": 9110
			},
			"JS02": {
				"Dist": {
					"Fav": 3694,
					"Neu": 1763,
					"Unfav": 3638
				},
				"N": 9095
			},
			"ST01": {
				"Dist": {
					"Fav": 3611,
					"Neu": 1836,
					"Unfav": 3677
				},
				"N": 9124
			},
			"WL01": {
				"Dist": {
					"Fav": 3591,
					"Neu": 1871,
					"Unfav": 3647
				},
				"N": 9109
			},
			"GP10": {
				"Dist": {
					"Fav": 3552,
					"Neu": 1800,
					"Unfav": 3774
				},
				"N": 9126
			},
			"WE08": {
				"Dist": {
					"Fav": 3626,
					"Neu": 1854,
					"Unfav": 3652
				},
				"N": 9132
			},
			"DM04": {
				"Dist": {
					"Fav": 3640,
					"Neu": 1768,
					"Unfav": 3716
				},
				"N": 9124
			},
			"DM18": {
				"Dist": {
					"Fav": 3661,
					"Neu": 1750,
					"Unfav": 3614
				},
				"N": 9025
			},
			"SP45": {
				"Dist": {
					"Fav": 3628,
					"Neu": 1846,
					"Unfav": 3612
				},
				"N": 9086
			},
			"SV03": {
				"Dist": {
					"Fav": 3575,
					"Neu": 1789,
					"Unfav": 3647
				},
				"N": 9011
			},
			"SR05": {
				"Dist": {
					"Fav": 3662,
					"Neu": 1789,
					"Unfav": 3657
				},
				"N": 9108
			},
			"SR03": {
				"Dist": {
					"Fav": 3631,
					"Neu": 1798,
					"Unfav": 3667
				},
				"N": 9096
			},
			"TW02": {
				"Dist": {
					"Fav": 3652,
					"Neu": 1906,
					"Unfav": 3555
				},
				"N": 9113
			},
			"DC08": {
				"Dist": {
					"Fav": 3600,
					"Neu": 1781,
					"Unfav": 3724
				},
				"N": 9105
			},
			"GP03": {
				"Dist": {
					"Fav": 3728,
					"Neu": 1829,
					"Unfav": 3519
				},
				"N": 9076
			},
			"PE01": {
				"Dist": {
					"Fav": 3657,
					"Neu": 1841,
					"Unfav": 3678
				},
				"N": 9176
			},
			"AV01": {
				"Dist": {
					"Fav": 3657,
					"Neu": 1793,
					"Unfav": 3612
				},
				"N": 9062
			},
			"AV08": {
				"Dist": {
					"Fav": 3605,
					"Neu": 1818,
					"Unfav": 3699
				},
				"N": 9122
			},
			"BN04": {
				"Dist": {
					"Fav": 3665,
					"Neu": 1821,
					"Unfav": 3601
				},
				"N": 9087
			},
			"CP16": {
				"Dist": {
					"Fav": 3632,
					"Neu": 1807,
					"Unfav": 3659
				},
				"N": 9098
			},
			"PE10": {
				"Dist": {
					"Fav": 3617,
					"Neu": 1866,
					"Unfav": 3615
				},
				"N": 9098
			},
			"PE21": {
				"Dist": {
					"Fav": 3624,
					"Neu": 1816,
					"Unfav": 3618
				},
				"N": 9058
			},
			"OM04": {
				"Dist": {
					"Fav": 3628,
					"Neu": 1773,
					"Unfav": 3693
				},
				"N": 9094
			},
			"QS09": {
				"Dist": {
					"Fav": 3595,
					"Neu": 1836,
					"Unfav": 3676
				},
				"N": 9107
			},
			"SP04": {
				"Dist": {
					"Fav": 3594,
					"Neu": 1875,
					"Unfav": 3596
				},
				"N": 9065
			},
			"WK01": {
				"Dist": {
					"Fav": 3620,
					"Neu": 1704,
					"Unfav": 3711
				},
				"N": 9035
			},
			"DI03": {
				"Dist": {
					"Fav": 3612,
					"Neu": 1828,
					"Unfav": 3665
				},
				"N": 9105
			},
			"WK02": {
				"Dist": {
					"Fav": 3617,
					"Neu": 1780,
					"Unfav": 3680
				},
				"N": 9077
			},
			"SP47": {
				"Dist": {
					"Fav": 3565,
					"Neu": 1881,
					"Unfav": 3653
				},
				"N": 9099
			},
			"WS01": {
				"Dist": {
					"Fav": 3735,
					"Neu": 1822,
					"Unfav": 3566
				},
				"N": 9123
			},
			"DC09": {
				"Dist": {
					"Fav": 3668,
					"Neu": 1813,
					"Unfav": 3664
				},
				"N": 9145
			},
			"AV02": {
				"Dist": {
					"Fav": 9027,
					"Neu": 1550,
					"Unfav": 1237
				},
				"N": 11814
			},
			"DI04": {
				"Dist": {
					"Fav": 8960,
					"Neu": 1452,
					"Unfav": 1403
				},
				"N": 11815
			},
			"IV05": {
				"Dist": {
					"Fav": 1828,
					"Neu": 574,
					"Unfav": 509
				},
				"N": 2911
			},
			"OM06": {
				"Dist": {
					"Fav": 2171,
					"Neu": 2186,
					"Unfav": 4432
				},
				"N": 8789
			},
			"NSQ1": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": null
			}
		},
		"ITEMS.2019.389.0": {
			"RE01": {
				"Dist": {
					"Fav": 10622,
					"Neu": 1380,
					"Unfav": 1083
				},
				"N": 13085
			},
			"DM02": {
				"Dist": {
					"Fav": 10932,
					"Neu": 1106,
					"Unfav": 1046
				},
				"N": 13084
			},
			"RC01": {
				"Dist": {
					"Fav": 9407,
					"Neu": 2020,
					"Unfav": 1641
				},
				"N": 13068
			},
			"TW06": {
				"Dist": {
					"Fav": 10638,
					"Neu": 1367,
					"Unfav": 1076
				},
				"N": 13081
			},
			"QS01": {
				"Dist": {
					"Fav": 9858,
					"Neu": 1921,
					"Unfav": 1304
				},
				"N": 13083
			},
			"PE09": {
				"Dist": {
					"Fav": 9858,
					"Neu": 1921,
					"Unfav": 1304
				},
				"N": 13083
			},
			"AV15": {
				"Dist": {
					"Fav": 11507,
					"Neu": 892,
					"Unfav": 682
				},
				"N": 13081
			},
			"LD04": {
				"Dist": {
					"Fav": 9530,
					"Neu": 1887,
					"Unfav": 1656
				},
				"N": 13073
			},
			"WS03": {
				"Dist": {
					"Fav": 11058,
					"Neu": 1096,
					"Unfav": 919
				},
				"N": 13073
			},
			"TR09": {
				"Dist": {
					"Fav": 10385,
					"Neu": 1640,
					"Unfav": 1047
				},
				"N": 13072
			},
			"PE06": {
				"Dist": {
					"Fav": 10992,
					"Neu": 1238,
					"Unfav": 755
				},
				"N": 12985
			},
			"SD04": {
				"Dist": {
					"Fav": 9654,
					"Neu": 1830,
					"Unfav": 1579
				},
				"N": 13063
			},
			"PE03": {
				"Dist": {
					"Fav": 10231,
					"Neu": 1721,
					"Unfav": 1065
				},
				"N": 13017
			},
			"OM12": {
				"Dist": {
					"Fav": 10153,
					"Neu": 1618,
					"Unfav": 1123
				},
				"N": 12894
			},
			"QS16": {
				"Dist": {
					"Fav": 8703,
					"Neu": 2589,
					"Unfav": 1712
				},
				"N": 13004
			},
			"LD09": {
				"Dist": {
					"Fav": 10185,
					"Neu": 1528,
					"Unfav": 1351
				},
				"N": 13064
			},
			"TR01": {
				"Dist": {
					"Fav": 11107,
					"Neu": 1273,
					"Unfav": 681
				},
				"N": 13061
			},
			"VC04": {
				"Dist": {
					"Fav": 11121,
					"Neu": 1416,
					"Unfav": 517
				},
				"N": 13054
			},
			"GP07": {
				"Dist": {
					"Fav": 7355,
					"Neu": 2751,
					"Unfav": 2697
				},
				"N": 12803
			},
			"ER01": {
				"Dist": {
					"Fav": 8852,
					"Neu": 2238,
					"Unfav": 1960
				},
				"N": 13050
			},
			"IV02": {
				"Dist": {
					"Fav": 7914,
					"Neu": 2672,
					"Unfav": 2420
				},
				"N": 13006
			},
			"CP14": {
				"Dist": {
					"Fav": 7059,
					"Neu": 2714,
					"Unfav": 3150
				},
				"N": 12923
			},
			"GP12": {
				"Dist": {
					"Fav": 10218,
					"Neu": 1716,
					"Unfav": 976
				},
				"N": 12910
			},
			"CP11": {
				"Dist": {
					"Fav": 10813,
					"Neu": 1331,
					"Unfav": 318
				},
				"N": 12462
			},
			"WE01": {
				"Dist": {
					"Fav": 10820,
					"Neu": 1432,
					"Unfav": 809
				},
				"N": 13061
			},
			"IV04": {
				"Dist": {
					"Fav": 10051,
					"Neu": 2158,
					"Unfav": 498
				},
				"N": 12707
			},
			"WE12": {
				"Dist": {
					"Fav": 9284,
					"Neu": 2383,
					"Unfav": 1207
				},
				"N": 12874
			},
			"SP12": {
				"Dist": {
					"Fav": 8985,
					"Neu": 2605,
					"Unfav": 1460
				},
				"N": 13050
			},
			"AV09": {
				"Dist": {
					"Fav": 10982,
					"Neu": 1511,
					"Unfav": 319
				},
				"N": 12812
			},
			"TW04": {
				"Dist": {
					"Fav": 5985,
					"Neu": 3732,
					"Unfav": 1069
				},
				"N": 10786
			},
			"CP12": {
				"Dist": {
					"Fav": 9717,
					"Neu": 2107,
					"Unfav": 1157
				},
				"N": 12981
			},
			"DC11": {
				"Dist": {
					"Fav": 10884,
					"Neu": 1744,
					"Unfav": 439
				},
				"N": 13067
			},
			"BN01": {
				"Dist": {
					"Fav": 10393,
					"Neu": 1704,
					"Unfav": 952
				},
				"N": 13049
			},
			"GP09": {
				"Dist": {
					"Fav": 8965,
					"Neu": 1921,
					"Unfav": 2191
				},
				"N": 13077
			},
			"QS03": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": null
			},
			"OM01": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": null
			},
			"TR04": {
				"Dist": {
					"Fav": 7940,
					"Neu": 2307,
					"Unfav": 2830
				},
				"N": 13077
			},
			"QS02": {
				"Dist": {
					"Fav": 4322,
					"Neu": 2138,
					"Unfav": 4291
				},
				"N": 10751
			},
			"JS05": {
				"Dist": {
					"Fav": 4358,
					"Neu": 2223,
					"Unfav": 4167
				},
				"N": 10748
			},
			"OM11": {
				"Dist": {
					"Fav": 4371,
					"Neu": 2123,
					"Unfav": 4278
				},
				"N": 10772
			},
			"SD05": {
				"Dist": {
					"Fav": 4344,
					"Neu": 2214,
					"Unfav": 4189
				},
				"N": 10747
			},
			"SD03": {
				"Dist": {
					"Fav": 4331,
					"Neu": 2153,
					"Unfav": 4304
				},
				"N": 10788
			},
			"OS02": {
				"Dist": {
					"Fav": 4332,
					"Neu": 2186,
					"Unfav": 4264
				},
				"N": 10782
			},
			"JS02": {
				"Dist": {
					"Fav": 4279,
					"Neu": 2175,
					"Unfav": 4319
				},
				"N": 10773
			},
			"ST01": {
				"Dist": {
					"Fav": 4252,
					"Neu": 2174,
					"Unfav": 4395
				},
				"N": 10821
			},
			"WL01": {
				"Dist": {
					"Fav": 4312,
					"Neu": 2184,
					"Unfav": 4318
				},
				"N": 10814
			},
			"GP10": {
				"Dist": {
					"Fav": 4242,
					"Neu": 2216,
					"Unfav": 4300
				},
				"N": 10758
			},
			"WE08": {
				"Dist": {
					"Fav": 4246,
					"Neu": 2190,
					"Unfav": 4384
				},
				"N": 10820
			},
			"DM04": {
				"Dist": {
					"Fav": 4297,
					"Neu": 2187,
					"Unfav": 4299
				},
				"N": 10783
			},
			"DM18": {
				"Dist": {
					"Fav": 4289,
					"Neu": 2164,
					"Unfav": 4271
				},
				"N": 10724
			},
			"SP45": {
				"Dist": {
					"Fav": 4341,
					"Neu": 2183,
					"Unfav": 4215
				},
				"N": 10739
			},
			"SV03": {
				"Dist": {
					"Fav": 4300,
					"Neu": 2079,
					"Unfav": 4340
				},
				"N": 10719
			},
			"SR05": {
				"Dist": {
					"Fav": 4383,
					"Neu": 2086,
					"Unfav": 4275
				},
				"N": 10744
			},
			"SR03": {
				"Dist": {
					"Fav": 4324,
					"Neu": 2108,
					"Unfav": 4295
				},
				"N": 10727
			},
			"TW02": {
				"Dist": {
					"Fav": 4343,
					"Neu": 2240,
					"Unfav": 4205
				},
				"N": 10788
			},
			"DC08": {
				"Dist": {
					"Fav": 4293,
					"Neu": 2153,
					"Unfav": 4325
				},
				"N": 10771
			},
			"GP03": {
				"Dist": {
					"Fav": 4357,
					"Neu": 2166,
					"Unfav": 4285
				},
				"N": 10808
			},
			"PE01": {
				"Dist": {
					"Fav": 4312,
					"Neu": 2144,
					"Unfav": 4343
				},
				"N": 10799
			},
			"AV01": {
				"Dist": {
					"Fav": 4334,
					"Neu": 2220,
					"Unfav": 4220
				},
				"N": 10774
			},
			"AV08": {
				"Dist": {
					"Fav": 4351,
					"Neu": 2098,
					"Unfav": 4319
				},
				"N": 10768
			},
			"BN04": {
				"Dist": {
					"Fav": 4335,
					"Neu": 2105,
					"Unfav": 4266
				},
				"N": 10706
			},
			"CP16": {
				"Dist": {
					"Fav": 4200,
					"Neu": 2145,
					"Unfav": 4292
				},
				"N": 10637
			},
			"PE10": {
				"Dist": {
					"Fav": 4355,
					"Neu": 2190,
					"Unfav": 4226
				},
				"N": 10771
			},
			"PE21": {
				"Dist": {
					"Fav": 4318,
					"Neu": 2182,
					"Unfav": 4318
				},
				"N": 10818
			},
			"OM04": {
				"Dist": {
					"Fav": 4277,
					"Neu": 2158,
					"Unfav": 4269
				},
				"N": 10704
			},
			"QS09": {
				"Dist": {
					"Fav": 4199,
					"Neu": 2229,
					"Unfav": 4292
				},
				"N": 10720
			},
			"SP04": {
				"Dist": {
					"Fav": 4242,
					"Neu": 2239,
					"Unfav": 4246
				},
				"N": 10727
			},
			"WK01": {
				"Dist": {
					"Fav": 4229,
					"Neu": 2164,
					"Unfav": 4286
				},
				"N": 10679
			},
			"DI03": {
				"Dist": {
					"Fav": 4236,
					"Neu": 2108,
					"Unfav": 4383
				},
				"N": 10727
			},
			"WK02": {
				"Dist": {
					"Fav": 4257,
					"Neu": 2151,
					"Unfav": 4316
				},
				"N": 10724
			},
			"SP47": {
				"Dist": {
					"Fav": 4307,
					"Neu": 2111,
					"Unfav": 4300
				},
				"N": 10718
			},
			"WS01": {
				"Dist": {
					"Fav": 4295,
					"Neu": 2144,
					"Unfav": 4272
				},
				"N": 10711
			},
			"DC09": {
				"Dist": {
					"Fav": 4308,
					"Neu": 2156,
					"Unfav": 4310
				},
				"N": 10774
			},
			"AV02": {
				"Dist": {
					"Fav": 10622,
					"Neu": 1380,
					"Unfav": 1083
				},
				"N": 13085
			},
			"DI04": {
				"Dist": {
					"Fav": 10932,
					"Neu": 1106,
					"Unfav": 1046
				},
				"N": 13084
			},
			"IV05": {
				"Dist": {
					"Fav": 9407,
					"Neu": 2020,
					"Unfav": 1641
				},
				"N": 13068
			},
			"OM06": {
				"Dist": {
					"Fav": 2614,
					"Neu": 2556,
					"Unfav": 5166
				},
				"N": 10336
			},
			"NSQ1": {
				"Dist": {
					"Fav": 5905,
					"Neu": 4482,
					"Unfav": 2707
				},
				"N": 13094
			}
		},
		"ITEMS.2020.389.0": {
			"RE01": {
				"Dist": {
					"Fav": 12736,
					"Neu": 1667,
					"Unfav": 1402
				},
				"N": 15805
			},
			"DM02": {
				"Dist": {
					"Fav": 12898,
					"Neu": 1479,
					"Unfav": 1427
				},
				"N": 15804
			},
			"RC01": {
				"Dist": {
					"Fav": 11402,
					"Neu": 2445,
					"Unfav": 1938
				},
				"N": 15785
			},
			"TW06": {
				"Dist": {
					"Fav": 12663,
					"Neu": 1773,
					"Unfav": 1353
				},
				"N": 15789
			},
			"QS01": {
				"Dist": {
					"Fav": 11756,
					"Neu": 2356,
					"Unfav": 1689
				},
				"N": 15801
			},
			"PE09": {
				"Dist": {
					"Fav": 11756,
					"Neu": 2356,
					"Unfav": 1689
				},
				"N": 15801
			},
			"AV15": {
				"Dist": {
					"Fav": 13713,
					"Neu": 1129,
					"Unfav": 952
				},
				"N": 15794
			},
			"LD04": {
				"Dist": {
					"Fav": 11597,
					"Neu": 2185,
					"Unfav": 2017
				},
				"N": 15799
			},
			"WS03": {
				"Dist": {
					"Fav": 13086,
					"Neu": 1485,
					"Unfav": 1221
				},
				"N": 15792
			},
			"TR09": {
				"Dist": {
					"Fav": 12518,
					"Neu": 1980,
					"Unfav": 1297
				},
				"N": 15795
			},
			"PE06": {
				"Dist": {
					"Fav": 13325,
					"Neu": 1451,
					"Unfav": 909
				},
				"N": 15685
			},
			"SD04": {
				"Dist": {
					"Fav": 11495,
					"Neu": 2271,
					"Unfav": 2014
				},
				"N": 15780
			},
			"PE03": {
				"Dist": {
					"Fav": 12227,
					"Neu": 2181,
					"Unfav": 1313
				},
				"N": 15721
			},
			"OM12": {
				"Dist": {
					"Fav": 12045,
					"Neu": 2117,
					"Unfav": 1399
				},
				"N": 15561
			},
			"QS16": {
				"Dist": {
					"Fav": 10409,
					"Neu": 3276,
					"Unfav": 2027
				},
				"N": 15712
			},
			"LD09": {
				"Dist": {
					"Fav": 12136,
					"Neu": 1981,
					"Unfav": 1642
				},
				"N": 15759
			},
			"TR01": {
				"Dist": {
					"Fav": 13425,
					"Neu": 1545,
					"Unfav": 806
				},
				"N": 15776
			},
			"VC04": {
				"Dist": {
					"Fav": 13514,
					"Neu": 1695,
					"Unfav": 558
				},
				"N": 15767
			},
			"GP07": {
				"Dist": {
					"Fav": 8416,
					"Neu": 3531,
					"Unfav": 3545
				},
				"N": 15492
			},
			"ER01": {
				"Dist": {
					"Fav": 10246,
					"Neu": 3013,
					"Unfav": 2496
				},
				"N": 15755
			},
			"IV02": {
				"Dist": {
					"Fav": 9895,
					"Neu": 3299,
					"Unfav": 2527
				},
				"N": 15721
			},
			"CP14": {
				"Dist": {
					"Fav": 8337,
					"Neu": 3462,
					"Unfav": 3809
				},
				"N": 15608
			},
			"GP12": {
				"Dist": {
					"Fav": 12119,
					"Neu": 2188,
					"Unfav": 1294
				},
				"N": 15601
			},
			"CP11": {
				"Dist": {
					"Fav": 13253,
					"Neu": 1547,
					"Unfav": 351
				},
				"N": 15151
			},
			"WE01": {
				"Dist": {
					"Fav": 13253,
					"Neu": 1610,
					"Unfav": 931
				},
				"N": 15794
			},
			"IV04": {
				"Dist": {
					"Fav": 12107,
					"Neu": 2677,
					"Unfav": 615
				},
				"N": 15399
			},
			"WE12": {
				"Dist": {
					"Fav": 11299,
					"Neu": 2798,
					"Unfav": 1516
				},
				"N": 15613
			},
			"SP12": {
				"Dist": {
					"Fav": 10742,
					"Neu": 3123,
					"Unfav": 1921
				},
				"N": 15786
			},
			"AV09": {
				"Dist": {
					"Fav": 13110,
					"Neu": 1995,
					"Unfav": 384
				},
				"N": 15489
			},
			"TW04": {
				"Dist": {
					"Fav": 8515,
					"Neu": 4251,
					"Unfav": 1425
				},
				"N": 14191
			},
			"CP12": {
				"Dist": {
					"Fav": 11640,
					"Neu": 2649,
					"Unfav": 1424
				},
				"N": 15713
			},
			"DC11": {
				"Dist": {
					"Fav": 13060,
					"Neu": 2157,
					"Unfav": 575
				},
				"N": 15792
			},
			"BN01": {
				"Dist": {
					"Fav": 12103,
					"Neu": 2407,
					"Unfav": 1248
				},
				"N": 15758
			},
			"GP09": {
				"Dist": {
					"Fav": 10323,
					"Neu": 2610,
					"Unfav": 2862
				},
				"N": 15795
			},
			"QS03": {
				"Dist": {
					"Fav": 13382,
					"Neu": 1670,
					"Unfav": 566
				},
				"N": 15618
			},
			"OM01": {
				"Dist": {
					"Fav": 12838,
					"Neu": 1849,
					"Unfav": 730
				},
				"N": 15417
			},
			"TR04": {
				"Dist": {
					"Fav": 8539,
					"Neu": 3804,
					"Unfav": 3441
				},
				"N": 15784
			},
			"QS02": {
				"Dist": {
					"Fav": 5230,
					"Neu": 2567,
					"Unfav": 5166
				},
				"N": 12963
			},
			"JS05": {
				"Dist": {
					"Fav": 5222,
					"Neu": 2610,
					"Unfav": 5069
				},
				"N": 12901
			},
			"OM11": {
				"Dist": {
					"Fav": 5252,
					"Neu": 2596,
					"Unfav": 5166
				},
				"N": 13014
			},
			"SD05": {
				"Dist": {
					"Fav": 5298,
					"Neu": 2643,
					"Unfav": 5030
				},
				"N": 12971
			},
			"SD03": {
				"Dist": {
					"Fav": 5207,
					"Neu": 2622,
					"Unfav": 5216
				},
				"N": 13045
			},
			"OS02": {
				"Dist": {
					"Fav": 5250,
					"Neu": 2624,
					"Unfav": 5130
				},
				"N": 13004
			},
			"JS02": {
				"Dist": {
					"Fav": 5225,
					"Neu": 2556,
					"Unfav": 5229
				},
				"N": 13010
			},
			"ST01": {
				"Dist": {
					"Fav": 5127,
					"Neu": 2636,
					"Unfav": 5252
				},
				"N": 13015
			},
			"WL01": {
				"Dist": {
					"Fav": 5137,
					"Neu": 2675,
					"Unfav": 5179
				},
				"N": 12991
			},
			"GP10": {
				"Dist": {
					"Fav": 5100,
					"Neu": 2568,
					"Unfav": 5356
				},
				"N": 13024
			},
			"WE08": {
				"Dist": {
					"Fav": 5220,
					"Neu": 2618,
					"Unfav": 5204
				},
				"N": 13042
			},
			"DM04": {
				"Dist": {
					"Fav": 5193,
					"Neu": 2605,
					"Unfav": 5191
				},
				"N": 12989
			},
			"DM18": {
				"Dist": {
					"Fav": 5158,
					"Neu": 2562,
					"Unfav": 5173
				},
				"N": 12893
			},
			"SP45": {
				"Dist": {
					"Fav": 5247,
					"Neu": 2663,
					"Unfav": 5031
				},
				"N": 12941
			},
			"SV03": {
				"Dist": {
					"Fav": 5163,
					"Neu": 2542,
					"Unfav": 5217
				},
				"N": 12922
			},
			"SR05": {
				"Dist": {
					"Fav": 5267,
					"Neu": 2531,
					"Unfav": 5230
				},
				"N": 13028
			},
			"SR03": {
				"Dist": {
					"Fav": 5197,
					"Neu": 2562,
					"Unfav": 5180
				},
				"N": 12939
			},
			"TW02": {
				"Dist": {
					"Fav": 5153,
					"Neu": 2736,
					"Unfav": 5108
				},
				"N": 12997
			},
			"DC08": {
				"Dist": {
					"Fav": 5135,
					"Neu": 2534,
					"Unfav": 5275
				},
				"N": 12944
			},
			"GP03": {
				"Dist": {
					"Fav": 5315,
					"Neu": 2579,
					"Unfav": 5108
				},
				"N": 13002
			},
			"PE01": {
				"Dist": {
					"Fav": 5233,
					"Neu": 2571,
					"Unfav": 5197
				},
				"N": 13001
			},
			"AV01": {
				"Dist": {
					"Fav": 5259,
					"Neu": 2661,
					"Unfav": 5116
				},
				"N": 13036
			},
			"AV08": {
				"Dist": {
					"Fav": 5168,
					"Neu": 2550,
					"Unfav": 5250
				},
				"N": 12968
			},
			"BN04": {
				"Dist": {
					"Fav": 5278,
					"Neu": 2558,
					"Unfav": 5097
				},
				"N": 12933
			},
			"CP16": {
				"Dist": {
					"Fav": 5094,
					"Neu": 2546,
					"Unfav": 5205
				},
				"N": 12845
			},
			"PE10": {
				"Dist": {
					"Fav": 5220,
					"Neu": 2594,
					"Unfav": 5117
				},
				"N": 12931
			},
			"PE21": {
				"Dist": {
					"Fav": 5204,
					"Neu": 2612,
					"Unfav": 5184
				},
				"N": 13000
			},
			"OM04": {
				"Dist": {
					"Fav": 5149,
					"Neu": 2605,
					"Unfav": 5204
				},
				"N": 12958
			},
			"QS09": {
				"Dist": {
					"Fav": 5120,
					"Neu": 2597,
					"Unfav": 5232
				},
				"N": 12949
			},
			"SP04": {
				"Dist": {
					"Fav": 5112,
					"Neu": 2664,
					"Unfav": 5142
				},
				"N": 12918
			},
			"WK01": {
				"Dist": {
					"Fav": 5103,
					"Neu": 2608,
					"Unfav": 5215
				},
				"N": 12926
			},
			"DI03": {
				"Dist": {
					"Fav": 5126,
					"Neu": 2606,
					"Unfav": 5280
				},
				"N": 13012
			},
			"WK02": {
				"Dist": {
					"Fav": 5088,
					"Neu": 2637,
					"Unfav": 5176
				},
				"N": 12901
			},
			"SP47": {
				"Dist": {
					"Fav": 5160,
					"Neu": 2620,
					"Unfav": 5097
				},
				"N": 12877
			},
			"WS01": {
				"Dist": {
					"Fav": 5232,
					"Neu": 2544,
					"Unfav": 5096
				},
				"N": 12872
			},
			"DC09": {
				"Dist": {
					"Fav": 5222,
					"Neu": 2529,
					"Unfav": 5218
				},
				"N": 12969
			},
			"AV02": {
				"Dist": {
					"Fav": 12736,
					"Neu": 1667,
					"Unfav": 1402
				},
				"N": 15805
			},
			"DI04": {
				"Dist": {
					"Fav": 12898,
					"Neu": 1479,
					"Unfav": 1427
				},
				"N": 15804
			},
			"IV05": {
				"Dist": {
					"Fav": 11402,
					"Neu": 2445,
					"Unfav": 1938
				},
				"N": 15785
			},
			"OM06": {
				"Dist": {
					"Fav": 3103,
					"Neu": 3152,
					"Unfav": 6226
				},
				"N": 12481
			},
			"NSQ1": {
				"Dist": {
					"Fav": 6905,
					"Neu": 5489,
					"Unfav": 3420
				},
				"N": 15814
			}
		},

		//test for null
		//"ITEMS.2020.389.0": {"RE01":{"Dist":{"Fav":null,"Neu":null,"Unfav":null},"N":null},"DM02":{"Dist":{"Fav":12898,"Neu":1479,"Unfav":1427},"N":15804},"RC01":{"Dist":{"Fav":11402,"Neu":2445,"Unfav":1938},"N":15785},"TW06":{"Dist":{"Fav":12663,"Neu":1773,"Unfav":1353},"N":15789},"QS01":{"Dist":{"Fav":11756,"Neu":2356,"Unfav":1689},"N":15801},"PE09":{"Dist":{"Fav":11756,"Neu":2356,"Unfav":1689},"N":15801},"AV15":{"Dist":{"Fav":13713,"Neu":1129,"Unfav":952},"N":15794},"LD04":{"Dist":{"Fav":11597,"Neu":2185,"Unfav":2017},"N":15799},"WS03":{"Dist":{"Fav":13086,"Neu":1485,"Unfav":1221},"N":15792},"TR09":{"Dist":{"Fav":12518,"Neu":1980,"Unfav":1297},"N":15795},"PE06":{"Dist":{"Fav":13325,"Neu":1451,"Unfav":909},"N":15685},"SD04":{"Dist":{"Fav":11495,"Neu":2271,"Unfav":2014},"N":15780},"PE03":{"Dist":{"Fav":12227,"Neu":2181,"Unfav":1313},"N":15721},"OM12":{"Dist":{"Fav":null,"Neu":2117,"Unfav":null},"N":15561},"QS16":{"Dist":{"Fav":10409,"Neu":3276,"Unfav":2027},"N":15712},"LD09":{"Dist":{"Fav":12136,"Neu":1981,"Unfav":1642},"N":15759},"TR01":{"Dist":{"Fav":13425,"Neu":1545,"Unfav":806},"N":15776},"VC04":{"Dist":{"Fav":13514,"Neu":1695,"Unfav":558},"N":15767},"GP07":{"Dist":{"Fav":8416,"Neu":3531,"Unfav":3545},"N":15492},"ER01":{"Dist":{"Fav":10246,"Neu":3013,"Unfav":2496},"N":15755},"IV02":{"Dist":{"Fav":9895,"Neu":3299,"Unfav":2527},"N":15721},"CP14":{"Dist":{"Fav":8337,"Neu":3462,"Unfav":3809},"N":15608},"GP12":{"Dist":{"Fav":12119,"Neu":2188,"Unfav":1294},"N":15601},"CP11":{"Dist":{"Fav":13253,"Neu":1547,"Unfav":351},"N":15151},"WE01":{"Dist":{"Fav":13253,"Neu":1610,"Unfav":931},"N":15794},"IV04":{"Dist":{"Fav":12107,"Neu":2677,"Unfav":615},"N":15399},"WE12":{"Dist":{"Fav":11299,"Neu":2798,"Unfav":1516},"N":15613},"SP12":{"Dist":{"Fav":10742,"Neu":3123,"Unfav":1921},"N":15786},"AV09":{"Dist":{"Fav":13110,"Neu":1995,"Unfav":384},"N":15489},"TW04":{"Dist":{"Fav":8515,"Neu":4251,"Unfav":1425},"N":14191},"CP12":{"Dist":{"Fav":11640,"Neu":2649,"Unfav":1424},"N":15713},"DC11":{"Dist":{"Fav":13060,"Neu":2157,"Unfav":575},"N":15792},"BN01":{"Dist":{"Fav":12103,"Neu":2407,"Unfav":1248},"N":15758},"GP09":{"Dist":{"Fav":10323,"Neu":2610,"Unfav":2862},"N":15795},"QS03":{"Dist":{"Fav":13382,"Neu":1670,"Unfav":566},"N":15618},"OM01":{"Dist":{"Fav":12838,"Neu":1849,"Unfav":730},"N":15417},"TR04":{"Dist":{"Fav":8539,"Neu":3804,"Unfav":3441},"N":15784},"QS02":{"Dist":{"Fav":5230,"Neu":2567,"Unfav":5166},"N":12963},"JS05":{"Dist":{"Fav":5222,"Neu":2610,"Unfav":5069},"N":12901},"OM11":{"Dist":{"Fav":5252,"Neu":2596,"Unfav":5166},"N":13014},"SD05":{"Dist":{"Fav":5298,"Neu":2643,"Unfav":5030},"N":12971},"SD03":{"Dist":{"Fav":5207,"Neu":2622,"Unfav":5216},"N":13045},"OS02":{"Dist":{"Fav":5250,"Neu":2624,"Unfav":5130},"N":13004},"JS02":{"Dist":{"Fav":5225,"Neu":2556,"Unfav":5229},"N":13010},"ST01":{"Dist":{"Fav":5127,"Neu":2636,"Unfav":5252},"N":13015},"WL01":{"Dist":{"Fav":5137,"Neu":2675,"Unfav":5179},"N":12991},"GP10":{"Dist":{"Fav":5100,"Neu":2568,"Unfav":5356},"N":13024},"WE08":{"Dist":{"Fav":5220,"Neu":2618,"Unfav":5204},"N":13042},"DM04":{"Dist":{"Fav":5193,"Neu":2605,"Unfav":5191},"N":12989},"DM18":{"Dist":{"Fav":5158,"Neu":2562,"Unfav":5173},"N":12893},"SP45":{"Dist":{"Fav":5247,"Neu":2663,"Unfav":5031},"N":12941},"SV03":{"Dist":{"Fav":5163,"Neu":2542,"Unfav":5217},"N":12922},"SR05":{"Dist":{"Fav":5267,"Neu":2531,"Unfav":5230},"N":13028},"SR03":{"Dist":{"Fav":5197,"Neu":2562,"Unfav":5180},"N":12939},"TW02":{"Dist":{"Fav":5153,"Neu":2736,"Unfav":5108},"N":12997},"DC08":{"Dist":{"Fav":5135,"Neu":2534,"Unfav":5275},"N":12944},"GP03":{"Dist":{"Fav":5315,"Neu":2579,"Unfav":5108},"N":13002},"PE01":{"Dist":{"Fav":5233,"Neu":2571,"Unfav":5197},"N":13001},"AV01":{"Dist":{"Fav":5259,"Neu":2661,"Unfav":5116},"N":13036},"AV08":{"Dist":{"Fav":5168,"Neu":2550,"Unfav":5250},"N":12968},"BN04":{"Dist":{"Fav":5278,"Neu":2558,"Unfav":5097},"N":12933},"CP16":{"Dist":{"Fav":5094,"Neu":2546,"Unfav":5205},"N":12845},"PE10":{"Dist":{"Fav":5220,"Neu":2594,"Unfav":5117},"N":12931},"PE21":{"Dist":{"Fav":5204,"Neu":2612,"Unfav":5184},"N":13000},"OM04":{"Dist":{"Fav":5149,"Neu":2605,"Unfav":5204},"N":12958},"QS09":{"Dist":{"Fav":5120,"Neu":2597,"Unfav":5232},"N":12949},"SP04":{"Dist":{"Fav":5112,"Neu":2664,"Unfav":5142},"N":12918},"WK01":{"Dist":{"Fav":5103,"Neu":2608,"Unfav":5215},"N":12926},"DI03":{"Dist":{"Fav":5126,"Neu":2606,"Unfav":5280},"N":13012},"WK02":{"Dist":{"Fav":5088,"Neu":2637,"Unfav":5176},"N":12901},"SP47":{"Dist":{"Fav":5160,"Neu":2620,"Unfav":5097},"N":12877},"WS01":{"Dist":{"Fav":5232,"Neu":2544,"Unfav":5096},"N":12872},"DC09":{"Dist":{"Fav":5222,"Neu":2529,"Unfav":5218},"N":12969},"AV02":{"Dist":{"Fav":12736,"Neu":1667,"Unfav":1402},"N":15805},"DI04":{"Dist":{"Fav":12898,"Neu":1479,"Unfav":1427},"N":15804},"IV05":{"Dist":{"Fav":11402,"Neu":2445,"Unfav":1938},"N":15785},"OM06":{"Dist":{"Fav":3103,"Neu":3152,"Unfav":6226},"N":12481},"NSQ1":{"Dist":{"Fav":6905,"Neu":5489,"Unfav":3420},"N":15814}},

		// DIMENSIONS
		"DIMS.2018.389.0": {
			"DIM_ENG": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": 9142
			},
			"DIM_ENA": {
				"Dist": {
					"Fav": 47,
					"Neu": 20,
					"Unfav": 34
				},
				"N": 9132
			},
			"DIM_N64": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": 11814
			},
			"DIM_N50": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": 11815
			},
			"DIM_N65": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": 9126
			},
			"DIM_N52": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": 11811
			},
			"DIM_N63": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": 9107
			},
			"DIM_N61": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": 9098
			},
			"DIM_N54": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": 11815
			},
			"DIM_N53": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": 11814
			},
			"DIM_N66": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": 11812
			},
			"DIM_N51": {
				"Dist": {
					"Fav": 45,
					"Neu": 21,
					"Unfav": 34
				},
				"N": 9176
			},
			"DIM_N67": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": 9145
			},
			"DIM_N60": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": 11792
			},
			"DIM_NPS": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": null
			}
		},
		"DIMS.2019.389.0": {
			"DIM_ENG": {
				"Dist": {
					"Fav": 40,
					"Neu": 40,
					"Unfav": 20
				},
				"N": 12894
			},
			"DIM_ENA": {
				"Dist": {
					"Fav": 48,
					"Neu": 20,
					"Unfav": 32
				},
				"N": 12874
			},
			"DIM_N64": {
				"Dist": {
					"Fav": 66,
					"Neu": 15,
					"Unfav": 20
				},
				"N": 13085
			},
			"DIM_N50": {
				"Dist": {
					"Fav": 72,
					"Neu": 14,
					"Unfav": 14
				},
				"N": 13084
			},
			"DIM_N65": {
				"Dist": {
					"Fav": 50,
					"Neu": 19,
					"Unfav": 32
				},
				"N": 13068
			},
			"DIM_N52": {
				"Dist": {
					"Fav": 57,
					"Neu": 20,
					"Unfav": 23
				},
				"N": 13081
			},
			"DIM_N63": {
				"Dist": {
					"Fav": null,
					"Neu": null,
					"Unfav": null
				},
				"N": 13083
			},
			"DIM_N61": {
				"Dist": {
					"Fav": 62,
					"Neu": 17,
					"Unfav": 21
				},
				"N": 13083
			},
			"DIM_N54": {
				"Dist": {
					"Fav": 65,
					"Neu": 16,
					"Unfav": 19
				},
				"N": 13081
			},
			"DIM_N53": {
				"Dist": {
					"Fav": 56,
					"Neu": 17,
					"Unfav": 27
				},
				"N": 13073
			},
			"DIM_N66": {
				"Dist": {
					"Fav": 66,
					"Neu": 15,
					"Unfav": 19
				},
				"N": 13077
			},
			"DIM_N51": {
				"Dist": {
					"Fav": 49,
					"Neu": 19,
					"Unfav": 32
				},
				"N": 13063
			},
			"DIM_N67": {
				"Dist": {
					"Fav": 51,
					"Neu": 19,
					"Unfav": 31
				},
				"N": 13061
			},
			"DIM_N60": {
				"Dist": {
					"Fav": 64,
					"Neu": 16,
					"Unfav": 20
				},
				"N": 13049
			},
			"DIM_NPS": {
				"Dist": {
					"Fav": 45,
					"Neu": 34,
					"Unfav": 21
				},
				"N": 13094
			}
		},
		"DIMS.2020.389.0": {
			"DIM_ENG": {
				"Dist": {
					"Fav": 53,
					"Neu": 18,
					"Unfav": 29
				},
				"N": 15561
			},
			"DIM_ENA": {
				"Dist": {
					"Fav": 48,
					"Neu": 20,
					"Unfav": 32
				},
				"N": 15613
			},
			"DIM_N64": {
				"Dist": {
					"Fav": 65,
					"Neu": 15,
					"Unfav": 20
				},
				"N": 15805
			},
			"DIM_N50": {
				"Dist": {
					"Fav": 72,
					"Neu": 14,
					"Unfav": 14
				},
				"N": 15804
			},
			"DIM_N65": {
				"Dist": {
					"Fav": 49,
					"Neu": 19,
					"Unfav": 32
				},
				"N": 15785
			},
			"DIM_N52": {
				"Dist": {
					"Fav": 57,
					"Neu": 20,
					"Unfav": 23
				},
				"N": 15795
			},
			"DIM_N63": {
				"Dist": {
					"Fav": 58,
					"Neu": 18,
					"Unfav": 25
				},
				"N": 15801
			},
			"DIM_N61": {
				"Dist": {
					"Fav": 62,
					"Neu": 17,
					"Unfav": 22
				},
				"N": 15801
			},
			"DIM_N54": {
				"Dist": {
					"Fav": 64,
					"Neu": 16,
					"Unfav": 20
				},
				"N": 15794
			},
			"DIM_N53": {
				"Dist": {
					"Fav": 56,
					"Neu": 17,
					"Unfav": 27
				},
				"N": 15799
			},
			"DIM_N66": {
				"Dist": {
					"Fav": 65,
					"Neu": 17,
					"Unfav": 19
				},
				"N": 15795
			},
			"DIM_N51": {
				"Dist": {
					"Fav": 48,
					"Neu": 20,
					"Unfav": 32
				},
				"N": 15780
			},
			"DIM_N67": {
				"Dist": {
					"Fav": 51,
					"Neu": 19,
					"Unfav": 30
				},
				"N": 15794
			},
			"DIM_N60": {
				"Dist": {
					"Fav": 64,
					"Neu": 16,
					"Unfav": 20
				},
				"N": 15758
			},
			"DIM_NPS": {
				"Dist": {
					"Fav": 44,
					"Neu": 35,
					"Unfav": 22
				},
				"N": 15814
			}
		},

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

	// User
	var user = {
		FirstName: 'FirstName',
		LastName: 'LastName',
		Username: 'username',
		Email: 'email',
		Roles: ['role1', 'role2'],
		PersonalizedReportBase: 389,
		PersonalizedReportBaseText: "Company Overall"
	};

	data.User = user;
	data.User.IsTestData = true;

	// Report
	var report = {
		CurrentLanguage: '9', // English
		ReportBase: 'TestReportBaseId',
		IsTestData: true
	}

	data.Report = report;

	// RRX

	var tmp = {
		'RRX.2020.389': {"OrgCode":{"1":{"N":3,"C":3},"2":{"N":24,"C":23},"3":{"N":58,"C":55},"4":{"N":6,"C":5},"5":{"N":11,"C":11},"6":{"N":8,"C":6},"7":{"N":4,"C":4},"8":{"N":4,"C":3},"9":{"N":1,"C":1},"10":{"N":10,"C":8},"11":{"N":3,"C":3},"12":{"N":6,"C":4},"13":{"N":58,"C":58},"14":{"N":5,"C":4},"15":{"N":19,"C":19},"16":{"N":30,"C":24},"17":{"N":84,"C":68},"18":{"N":6,"C":6},"19":{"N":5,"C":5},"20":{"N":25,"C":23},"21":{"N":3,"C":2},"22":{"N":0,"C":0},"23":{"N":4,"C":4},"24":{"N":4,"C":4},"25":{"N":7,"C":5},"26":{"N":39,"C":34},"27":{"N":1,"C":1},"28":{"N":2,"C":1},"29":{"N":0,"C":0},"30":{"N":3,"C":2},"31":{"N":1,"C":1},"32":{"N":3,"C":3},"33":{"N":0,"C":0},"34":{"N":3,"C":2},"35":{"N":3,"C":3},"36":{"N":2,"C":2},"37":{"N":21,"C":21},"38":{"N":20,"C":18},"39":{"N":11,"C":8},"40":{"N":4,"C":4},"41":{"N":5,"C":4},"42":{"N":31,"C":28},"43":{"N":5,"C":4},"44":{"N":3,"C":3},"45":{"N":4,"C":3},"46":{"N":7,"C":7},"47":{"N":4,"C":3},"48":{"N":70,"C":57},"49":{"N":1,"C":1},"50":{"N":3,"C":3},"51":{"N":6,"C":6},"52":{"N":3,"C":3},"53":{"N":5,"C":5},"54":{"N":5,"C":4},"55":{"N":0,"C":0},"56":{"N":2,"C":2},"57":{"N":2,"C":1},"58":{"N":3,"C":3},"59":{"N":10,"C":10},"60":{"N":2,"C":1},"61":{"N":19,"C":19},"62":{"N":77,"C":67},"63":{"N":18,"C":16},"64":{"N":161,"C":161},"65":{"N":17,"C":17},"66":{"N":167,"C":143},"67":{"N":0,"C":0},"68":{"N":10,"C":10},"69":{"N":2,"C":2},"70":{"N":176,"C":176},"71":{"N":13,"C":12},"72":{"N":4,"C":3},"73":{"N":2,"C":2},"74":{"N":1,"C":1},"75":{"N":4,"C":3},"76":{"N":4,"C":4},"77":{"N":7,"C":7},"78":{"N":2,"C":1},"79":{"N":58,"C":48},"80":{"N":25,"C":24},"81":{"N":3,"C":3},"82":{"N":10,"C":10},"83":{"N":14,"C":14},"84":{"N":15,"C":15},"85":{"N":5,"C":4},"86":{"N":17,"C":16},"87":{"N":7,"C":6},"88":{"N":7,"C":5},"89":{"N":47,"C":45},"90":{"N":0,"C":0},"91":{"N":3,"C":2},"92":{"N":0,"C":0},"93":{"N":1,"C":1},"94":{"N":2,"C":1},"95":{"N":1,"C":1},"96":{"N":2,"C":1},"97":{"N":5,"C":5},"98":{"N":2,"C":2},"99":{"N":0,"C":0},"100":{"N":3,"C":3},"101":{"N":0,"C":0},"102":{"N":1,"C":1},"103":{"N":3,"C":3},"104":{"N":10,"C":8},"105":{"N":132,"C":115},"106":{"N":2,"C":1},"107":{"N":144,"C":143},"108":{"N":22,"C":19},"109":{"N":123,"C":111},"110":{"N":14,"C":12},"111":{"N":7,"C":6},"112":{"N":0,"C":0},"113":{"N":17,"C":15},"114":{"N":9,"C":8},"115":{"N":252,"C":215},"116":{"N":23,"C":21},"117":{"N":8,"C":8},"118":{"N":1,"C":1},"119":{"N":4,"C":3},"120":{"N":11,"C":9},"121":{"N":14,"C":14},"122":{"N":6,"C":6},"123":{"N":3,"C":2},"124":{"N":6,"C":6},"125":{"N":3,"C":3},"126":{"N":3,"C":3},"127":{"N":6,"C":6},"128":{"N":6,"C":6},"129":{"N":2,"C":1},"130":{"N":16,"C":16},"131":{"N":0,"C":0},"132":{"N":18,"C":16},"133":{"N":8,"C":8},"134":{"N":2,"C":1},"135":{"N":2,"C":2},"136":{"N":3,"C":2},"137":{"N":1,"C":1},"138":{"N":0,"C":0},"139":{"N":2,"C":2},"140":{"N":2,"C":1},"141":{"N":21,"C":20},"142":{"N":2,"C":2},"143":{"N":0,"C":0},"144":{"N":0,"C":0},"145":{"N":2,"C":1},"146":{"N":3,"C":3},"147":{"N":1,"C":1},"148":{"N":2,"C":2},"149":{"N":4,"C":3},"150":{"N":8,"C":7},"151":{"N":14,"C":11},"152":{"N":2,"C":2},"153":{"N":3,"C":2},"154":{"N":4,"C":4},"155":{"N":6,"C":5},"156":{"N":3,"C":3},"157":{"N":21,"C":21},"158":{"N":12,"C":12},"159":{"N":10,"C":10},"160":{"N":3,"C":3},"161":{"N":3,"C":3},"162":{"N":0,"C":0},"163":{"N":2,"C":2},"164":{"N":3,"C":2},"165":{"N":8,"C":7},"166":{"N":10,"C":10},"167":{"N":4,"C":4},"168":{"N":12,"C":10},"169":{"N":4,"C":4},"170":{"N":23,"C":20},"171":{"N":3,"C":2},"172":{"N":1,"C":1},"173":{"N":2,"C":1},"174":{"N":6,"C":6},"175":{"N":29,"C":26},"176":{"N":6,"C":5},"177":{"N":4,"C":3},"178":{"N":7,"C":5},"179":{"N":5,"C":5},"180":{"N":11,"C":10},"181":{"N":4,"C":4},"182":{"N":4,"C":3},"183":{"N":1,"C":1},"184":{"N":2,"C":1},"185":{"N":1,"C":1},"186":{"N":0,"C":0},"187":{"N":1,"C":1},"188":{"N":6,"C":4},"189":{"N":6,"C":6},"190":{"N":12,"C":9},"191":{"N":4,"C":4},"192":{"N":13,"C":11},"193":{"N":2,"C":1},"194":{"N":2,"C":2},"195":{"N":0,"C":0},"196":{"N":2,"C":2},"197":{"N":2,"C":1},"198":{"N":1,"C":1},"199":{"N":6,"C":4},"200":{"N":1,"C":1},"201":{"N":14,"C":12},"202":{"N":2,"C":1},"203":{"N":1,"C":1},"204":{"N":2,"C":2},"205":{"N":2,"C":1},"206":{"N":2,"C":1},"207":{"N":3,"C":3},"208":{"N":14,"C":14},"209":{"N":7,"C":7},"210":{"N":0,"C":0},"211":{"N":1,"C":1},"212":{"N":2,"C":1},"213":{"N":0,"C":0},"214":{"N":3,"C":3},"215":{"N":10,"C":10},"216":{"N":0,"C":0},"217":{"N":11,"C":9},"218":{"N":8,"C":8},"219":{"N":1,"C":1},"220":{"N":90,"C":81},"221":{"N":26,"C":23},"222":{"N":13,"C":11},"223":{"N":3,"C":3},"224":{"N":22,"C":16},"225":{"N":1,"C":1},"226":{"N":3,"C":2},"227":{"N":6,"C":5},"228":{"N":28,"C":24},"229":{"N":8,"C":7},"230":{"N":52,"C":45},"231":{"N":5,"C":5},"232":{"N":10,"C":8},"233":{"N":27,"C":26},"234":{"N":7,"C":7},"235":{"N":6,"C":4},"236":{"N":3,"C":3},"237":{"N":5,"C":5},"238":{"N":2,"C":2},"239":{"N":8,"C":8},"240":{"N":3,"C":3},"241":{"N":11,"C":9},"242":{"N":18,"C":18},"243":{"N":23,"C":23},"244":{"N":13,"C":12},"245":{"N":15,"C":14},"246":{"N":0,"C":0},"247":{"N":1,"C":1},"248":{"N":3,"C":2},"249":{"N":1,"C":1},"250":{"N":0,"C":0},"251":{"N":5,"C":4},"252":{"N":11,"C":8},"253":{"N":0,"C":0},"254":{"N":3,"C":3},"255":{"N":79,"C":79},"256":{"N":229,"C":214},"257":{"N":9,"C":9},"258":{"N":720,"C":672},"259":{"N":184,"C":172},"260":{"N":197,"C":197},"261":{"N":128,"C":118},"262":{"N":465,"C":411},"263":{"N":43,"C":43},"264":{"N":174,"C":164},"265":{"N":308,"C":258},"266":{"N":388,"C":388},"267":{"N":180,"C":159},"268":{"N":562,"C":489},"269":{"N":0,"C":0},"270":{"N":20,"C":20},"271":{"N":0,"C":0},"272":{"N":28,"C":22},"273":{"N":3,"C":3},"274":{"N":3,"C":2},"275":{"N":1,"C":1},"276":{"N":2,"C":1},"277":{"N":0,"C":0},"278":{"N":0,"C":0},"279":{"N":4,"C":4},"280":{"N":61,"C":53},"281":{"N":560,"C":442},"282":{"N":134,"C":134},"283":{"N":25,"C":22},"284":{"N":303,"C":240},"285":{"N":165,"C":149},"286":{"N":156,"C":130},"287":{"N":55,"C":42},"288":{"N":327,"C":327},"289":{"N":20,"C":20},"290":{"N":74,"C":66},"291":{"N":66,"C":62},"292":{"N":165,"C":143},"293":{"N":26,"C":22},"294":{"N":339,"C":305},"295":{"N":9,"C":8},"296":{"N":17,"C":14},"297":{"N":4,"C":4},"298":{"N":149,"C":140},"299":{"N":0,"C":0},"300":{"N":44,"C":38},"301":{"N":14,"C":11},"302":{"N":76,"C":75},"303":{"N":7,"C":7},"304":{"N":23,"C":20},"305":{"N":20,"C":20},"306":{"N":24,"C":21},"307":{"N":0,"C":0},"308":{"N":0,"C":0},"309":{"N":156,"C":137},"310":{"N":543,"C":495},"311":{"N":1,"C":1},"312":{"N":0,"C":0},"313":{"N":0,"C":0},"314":{"N":5,"C":4},"315":{"N":6,"C":5},"316":{"N":3,"C":3},"317":{"N":3,"C":2},"318":{"N":26,"C":24},"319":{"N":0,"C":0},"320":{"N":4,"C":4},"321":{"N":3,"C":2},"322":{"N":8,"C":8},"323":{"N":2,"C":1},"324":{"N":5,"C":4},"325":{"N":8,"C":6},"326":{"N":21,"C":20},"327":{"N":1,"C":1},"328":{"N":4,"C":3},"329":{"N":5,"C":4},"330":{"N":0,"C":0},"331":{"N":3,"C":3},"332":{"N":2,"C":1},"333":{"N":2,"C":2},"334":{"N":2,"C":1},"335":{"N":0,"C":0},"336":{"N":0,"C":0},"337":{"N":3,"C":3},"338":{"N":4,"C":3},"339":{"N":6,"C":6},"340":{"N":0,"C":0},"341":{"N":1,"C":1},"342":{"N":2,"C":2},"343":{"N":0,"C":0},"344":{"N":2,"C":1},"345":{"N":1,"C":1},"346":{"N":2,"C":1},"347":{"N":5,"C":5},"348":{"N":13,"C":12},"349":{"N":319,"C":319},"350":{"N":58,"C":58},"351":{"N":71,"C":65},"352":{"N":8,"C":8},"353":{"N":22,"C":20},"354":{"N":11,"C":11},"355":{"N":3,"C":3},"356":{"N":128,"C":128},"357":{"N":7,"C":5},"358":{"N":2,"C":2},"359":{"N":3,"C":3},"360":{"N":6,"C":5},"361":{"N":1,"C":1},"362":{"N":423,"C":347},"363":{"N":18,"C":17},"364":{"N":39,"C":31},"365":{"N":23,"C":21},"366":{"N":139,"C":139},"367":{"N":25,"C":25},"368":{"N":3,"C":2},"369":{"N":94,"C":94},"370":{"N":13,"C":12},"371":{"N":53,"C":41},"372":{"N":52,"C":49},"373":{"N":111,"C":101},"374":{"N":191,"C":191},"375":{"N":37,"C":37},"376":{"N":1355,"C":1190},"377":{"N":91,"C":87},"378":{"N":220,"C":215},"379":{"N":156,"C":137},"380":{"N":630,"C":630},"381":{"N":33,"C":32},"382":{"N":276,"C":245},"383":{"N":3,"C":3},"384":{"N":490,"C":478},"385":{"N":792,"C":759},"386":{"N":142,"C":142},"387":{"N":115,"C":111},"388":{"N":962,"C":901},"389":{"N":17275,"C":15814},"390":{"N":1583,"C":1446},"391":{"N":196,"C":184},"392":{"N":231,"C":198},"393":{"N":16,"C":13},"394":{"N":187,"C":162},"395":{"N":10,"C":10},"396":{"N":30,"C":28},"397":{"N":666,"C":627},"398":{"N":11,"C":10},"399":{"N":217,"C":198},"400":{"N":3,"C":2},"401":{"N":11,"C":9},"402":{"N":5,"C":5},"403":{"N":5401,"C":4922},"404":{"N":4,"C":4},"405":{"N":763,"C":682},"406":{"N":81,"C":76},"407":{"N":59,"C":53},"408":{"N":7,"C":6},"409":{"N":3,"C":3},"410":{"N":41,"C":34},"411":{"N":91,"C":87},"412":{"N":78,"C":68},"413":{"N":60,"C":50},"414":{"N":47,"C":39},"415":{"N":5,"C":4},"416":{"N":2,"C":1},"417":{"N":42,"C":40},"418":{"N":0,"C":0},"419":{"N":272,"C":236},"420":{"N":128,"C":121},"421":{"N":49,"C":42},"422":{"N":3,"C":3},"423":{"N":3666,"C":3373},"424":{"N":3130,"C":2749},"425":{"N":2415,"C":2104},"426":{"N":83,"C":74},"427":{"N":22,"C":18},"428":{"N":7161,"C":6697},"429":{"N":18,"C":15},"430":{"N":647,"C":636},"431":{"N":892,"C":787},"432":{"N":5604,"C":5259}}}
	};
	for (var key in tmp) data[key] = tmp[key];

	// NSQ
	var tmp = {"NSQ.2020.389.0":{"NSQ1":{"N":15814,"Dist":{"1":{"N":243},"2":{"N":86},"3":{"N":127},"4":{"N":253},"5":{"N":354},"6":{"N":1239},"7":{"N":1118},"8":{"N":2476},"9":{"N":3013},"10":{"N":1869},"11":{"N":5036}}},"NSQ2":{"CAT":{"1":{"N":782,"C":419},"2":{"N":2540,"C":503},"3":{"N":9510,"C":3815},"4":{"N":3009,"C":808},"5":{"N":4096,"C":499},"6":{"N":1952,"C":280},"7":{"N":5886,"C":1033},"8":{"N":13613,"C":7342},"9":{"N":6054,"C":1115}}},"NSQ3":{"CAT":{"1":{"N":11578,"C":4079},"2":{"N":11578,"C":2147},"3":{"N":11578,"C":2131},"4":{"N":11578,"C":2155},"5":{"N":11578,"C":223},"6":{"N":11578,"C":2361},"7":{"N":11578,"C":244},"8":{"N":11578,"C":214},"9":{"N":11578,"C":0},"10":{"N":11578,"C":428},"11":{"N":11578,"C":226}}},"NSQ4":{"CAT":{"1":{"N":10613,"C":1699},"2":{"N":10613,"C":1287},"3":{"N":10613,"C":1405},"4":{"N":10613,"C":796},"5":{"N":10613,"C":1599},"6":{"N":10613,"C":873},"7":{"N":10613,"C":1027},"8":{"N":10613,"C":963},"9":{"N":10613,"C":1321},"10":{"N":10613,"C":877},"11":{"N":10613,"C":861},"12":{"N":10613,"C":1226},"13":{"N":10613,"C":852},"14":{"N":10613,"C":1432},"15":{"N":10613,"C":1810},"16":{"N":10613,"C":1623},"17":{"N":10613,"C":1531},"18":{"N":10613,"C":1952},"19":{"N":10613,"C":916},"20":{"N":10613,"C":1459},"21":{"N":10613,"C":1876},"22":{"N":10613,"C":1962},"23":{"N":10613,"C":1280},"24":{"N":10613,"C":1183},"25":{"N":10613,"C":1476},"26":{"N":10613,"C":1645},"27":{"N":10613,"C":1246},"28":{"N":10613,"C":1547},"29":{"N":10613,"C":987}}},"NSQ5":{"CAT":{"1":{"N":13795,"C":3319},"2":{"N":13795,"C":3291},"3":{"N":13795,"C":4278},"4":{"N":13795,"C":2189},"5":{"N":13795,"C":4450},"6":{"N":13795,"C":3250},"7":{"N":13795,"C":1113},"8":{"N":13795,"C":2207},"9":{"N":13795,"C":4387},"10":{"N":13795,"C":6633},"11":{"N":13795,"C":3182},"12":{"N":13795,"C":3214}}},"NSQ6":{"N":14873,"Dist":{"1":{"N":6550},"2":{"N":1884},"3":{"N":5493},"4":{"N":946}}}}};
	for (var key in tmp) data[key] = tmp[key];


	// SO

	data['SO.2020.389.0'] = {
		"S": ["CP11", "AV15", "WS03", "TR01", "AV09"],
		"O": ["PE01", "WK02", "OM06", "SP04", "OM04"]
	};


	//Dimensions Breakdown
	var tmp = {
		"DIMSX.2020.389.0.GENDER": {
			"410": {
				"DIM_ENG": {
					"Dist": {
						"Fav": 54,
						"Neu": 18,
						"Unfav": 28
					},
					"N": 3924
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 48,
						"Neu": 20,
						"Unfav": 32
					},
					"N": 3930
				},
				"DIM_N64": {
					"Dist": {
						"Fav": 65,
						"Neu": 15,
						"Unfav": 20
					},
					"N": 3984
				},
				"DIM_N50": {
					"Dist": {
						"Fav": 71,
						"Neu": 14,
						"Unfav": 15
					},
					"N": 3985
				},
				"DIM_N65": {
					"Dist": {
						"Fav": 49,
						"Neu": 19,
						"Unfav": 32
					},
					"N": 3980
				},
				"DIM_N52": {
					"Dist": {
						"Fav": 56,
						"Neu": 19,
						"Unfav": 24
					},
					"N": 3979
				},
				"DIM_N63": {
					"Dist": {
						"Fav": 58,
						"Neu": 18,
						"Unfav": 25
					},
					"N": 3985
				},
				"DIM_N61": {
					"Dist": {
						"Fav": 62,
						"Neu": 17,
						"Unfav": 22
					},
					"N": 3985
				},
				"DIM_N54": {
					"Dist": {
						"Fav": 63,
						"Neu": 16,
						"Unfav": 20
					},
					"N": 3980
				},
				"DIM_N53": {
					"Dist": {
						"Fav": 56,
						"Neu": 17,
						"Unfav": 27
					},
					"N": 3981
				},
				"DIM_N66": {
					"Dist": {
						"Fav": 65,
						"Neu": 16,
						"Unfav": 19
					},
					"N": 3979
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 48,
						"Neu": 20,
						"Unfav": 33
					},
					"N": 3975
				},
				"DIM_N67": {
					"Dist": {
						"Fav": 52,
						"Neu": 18,
						"Unfav": 31
					},
					"N": 3984
				},
				"DIM_N60": {
					"Dist": {
						"Fav": 63,
						"Neu": 17,
						"Unfav": 20
					},
					"N": 3969
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": 43,
						"Neu": 36,
						"Unfav": 22
					},
					"N": 3986
				}
			},
			"420": {
				"DIM_ENG": {
					"Dist": {
						"Fav": 53,
						"Neu": 18,
						"Unfav": 28
					},
					"N": 3897
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 48,
						"Neu": 20,
						"Unfav": 33
					},
					"N": 3918
				},
				"DIM_N64": {
					"Dist": {
						"Fav": 65,
						"Neu": 15,
						"Unfav": 21
					},
					"N": 3965
				},
				"DIM_N50": {
					"Dist": {
						"Fav": 71,
						"Neu": 15,
						"Unfav": 14
					},
					"N": 3964
				},
				"DIM_N65": {
					"Dist": {
						"Fav": 49,
						"Neu": 20,
						"Unfav": 31
					},
					"N": 3959
				},
				"DIM_N52": {
					"Dist": {
						"Fav": 57,
						"Neu": 20,
						"Unfav": 23
					},
					"N": 3962
				},
				"DIM_N63": {
					"Dist": {
						"Fav": 57,
						"Neu": 18,
						"Unfav": 25
					},
					"N": 3964
				},
				"DIM_N61": {
					"Dist": {
						"Fav": 61,
						"Neu": 17,
						"Unfav": 22
					},
					"N": 3964
				},
				"DIM_N54": {
					"Dist": {
						"Fav": 64,
						"Neu": 16,
						"Unfav": 20
					},
					"N": 3964
				},
				"DIM_N53": {
					"Dist": {
						"Fav": 55,
						"Neu": 17,
						"Unfav": 28
					},
					"N": 3963
				},
				"DIM_N66": {
					"Dist": {
						"Fav": 64,
						"Neu": 17,
						"Unfav": 19
					},
					"N": 3961
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 49,
						"Neu": 19,
						"Unfav": 32
					},
					"N": 3961
				},
				"DIM_N67": {
					"Dist": {
						"Fav": 51,
						"Neu": 18,
						"Unfav": 31
					},
					"N": 3960
				},
				"DIM_N60": {
					"Dist": {
						"Fav": 63,
						"Neu": 17,
						"Unfav": 20
					},
					"N": 3952
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": 43,
						"Neu": 34,
						"Unfav": 23
					},
					"N": 3967
				}
			},
			"430": {
				"DIM_ENG": {
					"Dist": {
						"Fav": 53,
						"Neu": 18,
						"Unfav": 29
					},
					"N": 3854
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 49,
						"Neu": 19,
						"Unfav": 32
					},
					"N": 3876
				},
				"DIM_N64": {
					"Dist": {
						"Fav": 66,
						"Neu": 15,
						"Unfav": 20
					},
					"N": 3920
				},
				"DIM_N50": {
					"Dist": {
						"Fav": 72,
						"Neu": 14,
						"Unfav": 14
					},
					"N": 3922
				},
				"DIM_N65": {
					"Dist": {
						"Fav": 50,
						"Neu": 19,
						"Unfav": 31
					},
					"N": 3919
				},
				"DIM_N52": {
					"Dist": {
						"Fav": 58,
						"Neu": 19,
						"Unfav": 23
					},
					"N": 3918
				},
				"DIM_N63": {
					"Dist": {
						"Fav": 59,
						"Neu": 18,
						"Unfav": 24
					},
					"N": 3919
				},
				"DIM_N61": {
					"Dist": {
						"Fav": 63,
						"Neu": 16,
						"Unfav": 21
					},
					"N": 3919
				},
				"DIM_N54": {
					"Dist": {
						"Fav": 64,
						"Neu": 16,
						"Unfav": 20
					},
					"N": 3919
				},
				"DIM_N53": {
					"Dist": {
						"Fav": 56,
						"Neu": 17,
						"Unfav": 27
					},
					"N": 3919
				},
				"DIM_N66": {
					"Dist": {
						"Fav": 65,
						"Neu": 18,
						"Unfav": 18
					},
					"N": 3921
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 48,
						"Neu": 20,
						"Unfav": 32
					},
					"N": 3913
				},
				"DIM_N67": {
					"Dist": {
						"Fav": 51,
						"Neu": 19,
						"Unfav": 30
					},
					"N": 3920
				},
				"DIM_N60": {
					"Dist": {
						"Fav": 65,
						"Neu": 16,
						"Unfav": 20
					},
					"N": 3910
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": 45,
						"Neu": 35,
						"Unfav": 20
					},
					"N": 3923
				}
			},
			"440": {
				"DIM_ENG": {
					"Dist": {
						"Fav": 53,
						"Neu": 18,
						"Unfav": 29
					},
					"N": 3886
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 48,
						"Neu": 19,
						"Unfav": 33
					},
					"N": 3889
				},
				"DIM_N64": {
					"Dist": {
						"Fav": 65,
						"Neu": 15,
						"Unfav": 20
					},
					"N": 3936
				},
				"DIM_N50": {
					"Dist": {
						"Fav": 71,
						"Neu": 15,
						"Unfav": 14
					},
					"N": 3933
				},
				"DIM_N65": {
					"Dist": {
						"Fav": 49,
						"Neu": 19,
						"Unfav": 32
					},
					"N": 3927
				},
				"DIM_N52": {
					"Dist": {
						"Fav": 57,
						"Neu": 20,
						"Unfav": 24
					},
					"N": 3937
				},
				"DIM_N63": {
					"Dist": {
						"Fav": 58,
						"Neu": 17,
						"Unfav": 25
					},
					"N": 3933
				},
				"DIM_N61": {
					"Dist": {
						"Fav": 62,
						"Neu": 17,
						"Unfav": 21
					},
					"N": 3933
				},
				"DIM_N54": {
					"Dist": {
						"Fav": 64,
						"Neu": 16,
						"Unfav": 20
					},
					"N": 3932
				},
				"DIM_N53": {
					"Dist": {
						"Fav": 55,
						"Neu": 17,
						"Unfav": 27
					},
					"N": 3936
				},
				"DIM_N66": {
					"Dist": {
						"Fav": 65,
						"Neu": 16,
						"Unfav": 19
					},
					"N": 3934
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 48,
						"Neu": 20,
						"Unfav": 32
					},
					"N": 3931
				},
				"DIM_N67": {
					"Dist": {
						"Fav": 51,
						"Neu": 19,
						"Unfav": 30
					},
					"N": 3930
				},
				"DIM_N60": {
					"Dist": {
						"Fav": 64,
						"Neu": 16,
						"Unfav": 20
					},
					"N": 3927
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": 44,
						"Neu": 34,
						"Unfav": 22
					},
					"N": 3938
				}
			}
		},
		"DIMSX.2018.389.0.GENDER": {
			"410": {
				"DIM_ENG": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 47,
						"Neu": 20,
						"Unfav": 34
					},
					"N": 2321
				},
				"DIM_N64": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N50": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N65": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N52": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N63": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N61": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N54": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N53": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N66": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 45,
						"Neu": 21,
						"Unfav": 34
					},
					"N": 2338
				},
				"DIM_N67": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N60": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				}
			},
			"420": {
				"DIM_ENG": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 46,
						"Neu": 20,
						"Unfav": 34
					},
					"N": 2319
				},
				"DIM_N64": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N50": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N65": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N52": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N63": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N61": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N54": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N53": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N66": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 46,
						"Neu": 20,
						"Unfav": 34
					},
					"N": 2335
				},
				"DIM_N67": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N60": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				}
			},
			"430": {
				"DIM_ENG": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 47,
						"Neu": 20,
						"Unfav": 33
					},
					"N": 2254
				},
				"DIM_N64": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N50": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N65": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N52": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N63": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N61": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N54": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N53": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N66": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 45,
						"Neu": 21,
						"Unfav": 34
					},
					"N": 2254
				},
				"DIM_N67": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N60": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				}
			},
			"440": {
				"DIM_ENG": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 46,
						"Neu": 21,
						"Unfav": 33
					},
					"N": 2262
				},
				"DIM_N64": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N50": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N65": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N52": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N63": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N61": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N54": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N53": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N66": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 45,
						"Neu": 22,
						"Unfav": 34
					},
					"N": 2303
				},
				"DIM_N67": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N60": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				}
			}
		},
		"DIMSX.2019.389.0.GENDER": {
			"410": {
				"DIM_ENG": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 48,
						"Neu": 20,
						"Unfav": 33
					},
					"N": 3234
				},
				"DIM_N64": {
					"Dist": {
						"Fav": 65,
						"Neu": 15,
						"Unfav": 21
					},
					"N": 3288
				},
				"DIM_N50": {
					"Dist": {
						"Fav": 72,
						"Neu": 15,
						"Unfav": 14
					},
					"N": 3286
				},
				"DIM_N65": {
					"Dist": {
						"Fav": 50,
						"Neu": 19,
						"Unfav": 32
					},
					"N": 3281
				},
				"DIM_N52": {
					"Dist": {
						"Fav": 57,
						"Neu": 20,
						"Unfav": 23
					},
					"N": 3287
				},
				"DIM_N63": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N61": {
					"Dist": {
						"Fav": 63,
						"Neu": 16,
						"Unfav": 21
					},
					"N": 3286
				},
				"DIM_N54": {
					"Dist": {
						"Fav": 65,
						"Neu": 16,
						"Unfav": 19
					},
					"N": 3287
				},
				"DIM_N53": {
					"Dist": {
						"Fav": 56,
						"Neu": 17,
						"Unfav": 27
					},
					"N": 3282
				},
				"DIM_N66": {
					"Dist": {
						"Fav": 66,
						"Neu": 15,
						"Unfav": 19
					},
					"N": 3286
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 49,
						"Neu": 19,
						"Unfav": 32
					},
					"N": 3280
				},
				"DIM_N67": {
					"Dist": {
						"Fav": 51,
						"Neu": 18,
						"Unfav": 31
					},
					"N": 3278
				},
				"DIM_N60": {
					"Dist": {
						"Fav": 64,
						"Neu": 16,
						"Unfav": 20
					},
					"N": 3278
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": 45,
						"Neu": 34,
						"Unfav": 21
					},
					"N": 3289
				}
			},
			"420": {
				"DIM_ENG": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 48,
						"Neu": 20,
						"Unfav": 32
					},
					"N": 3238
				},
				"DIM_N64": {
					"Dist": {
						"Fav": 65,
						"Neu": 15,
						"Unfav": 20
					},
					"N": 3298
				},
				"DIM_N50": {
					"Dist": {
						"Fav": 72,
						"Neu": 14,
						"Unfav": 14
					},
					"N": 3298
				},
				"DIM_N65": {
					"Dist": {
						"Fav": 49,
						"Neu": 20,
						"Unfav": 32
					},
					"N": 3295
				},
				"DIM_N52": {
					"Dist": {
						"Fav": 57,
						"Neu": 21,
						"Unfav": 23
					},
					"N": 3296
				},
				"DIM_N63": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N61": {
					"Dist": {
						"Fav": 62,
						"Neu": 17,
						"Unfav": 21
					},
					"N": 3297
				},
				"DIM_N54": {
					"Dist": {
						"Fav": 65,
						"Neu": 16,
						"Unfav": 19
					},
					"N": 3296
				},
				"DIM_N53": {
					"Dist": {
						"Fav": 56,
						"Neu": 17,
						"Unfav": 27
					},
					"N": 3295
				},
				"DIM_N66": {
					"Dist": {
						"Fav": 66,
						"Neu": 15,
						"Unfav": 19
					},
					"N": 3296
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 49,
						"Neu": 19,
						"Unfav": 32
					},
					"N": 3291
				},
				"DIM_N67": {
					"Dist": {
						"Fav": 50,
						"Neu": 19,
						"Unfav": 31
					},
					"N": 3293
				},
				"DIM_N60": {
					"Dist": {
						"Fav": 64,
						"Neu": 16,
						"Unfav": 20
					},
					"N": 3290
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": 45,
						"Neu": 34,
						"Unfav": 21
					},
					"N": 3300
				}
			},
			"430": {
				"DIM_ENG": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 48,
						"Neu": 20,
						"Unfav": 32
					},
					"N": 3162
				},
				"DIM_N64": {
					"Dist": {
						"Fav": 66,
						"Neu": 15,
						"Unfav": 20
					},
					"N": 3213
				},
				"DIM_N50": {
					"Dist": {
						"Fav": 72,
						"Neu": 15,
						"Unfav": 14
					},
					"N": 3212
				},
				"DIM_N65": {
					"Dist": {
						"Fav": 50,
						"Neu": 19,
						"Unfav": 31
					},
					"N": 3211
				},
				"DIM_N52": {
					"Dist": {
						"Fav": 57,
						"Neu": 20,
						"Unfav": 23
					},
					"N": 3213
				},
				"DIM_N63": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N61": {
					"Dist": {
						"Fav": 63,
						"Neu": 17,
						"Unfav": 21
					},
					"N": 3212
				},
				"DIM_N54": {
					"Dist": {
						"Fav": 64,
						"Neu": 16,
						"Unfav": 20
					},
					"N": 3213
				},
				"DIM_N53": {
					"Dist": {
						"Fav": 56,
						"Neu": 17,
						"Unfav": 27
					},
					"N": 3211
				},
				"DIM_N66": {
					"Dist": {
						"Fav": 66,
						"Neu": 16,
						"Unfav": 19
					},
					"N": 3210
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 48,
						"Neu": 20,
						"Unfav": 33
					},
					"N": 3209
				},
				"DIM_N67": {
					"Dist": {
						"Fav": 50,
						"Neu": 19,
						"Unfav": 31
					},
					"N": 3211
				},
				"DIM_N60": {
					"Dist": {
						"Fav": 64,
						"Neu": 16,
						"Unfav": 20
					},
					"N": 3207
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": 43,
						"Neu": 36,
						"Unfav": 21
					},
					"N": 3214
				}
			},
			"440": {
				"DIM_ENG": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 48,
						"Neu": 20,
						"Unfav": 32
					},
					"N": 3240
				},
				"DIM_N64": {
					"Dist": {
						"Fav": 66,
						"Neu": 14,
						"Unfav": 19
					},
					"N": 3286
				},
				"DIM_N50": {
					"Dist": {
						"Fav": 73,
						"Neu": 14,
						"Unfav": 14
					},
					"N": 3288
				},
				"DIM_N65": {
					"Dist": {
						"Fav": 50,
						"Neu": 18,
						"Unfav": 32
					},
					"N": 3281
				},
				"DIM_N52": {
					"Dist": {
						"Fav": 58,
						"Neu": 20,
						"Unfav": 23
					},
					"N": 3286
				},
				"DIM_N63": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N61": {
					"Dist": {
						"Fav": 63,
						"Neu": 17,
						"Unfav": 21
					},
					"N": 3288
				},
				"DIM_N54": {
					"Dist": {
						"Fav": 65,
						"Neu": 16,
						"Unfav": 19
					},
					"N": 3285
				},
				"DIM_N53": {
					"Dist": {
						"Fav": 57,
						"Neu": 16,
						"Unfav": 27
					},
					"N": 3285
				},
				"DIM_N66": {
					"Dist": {
						"Fav": 67,
						"Neu": 14,
						"Unfav": 19
					},
					"N": 3286
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 49,
						"Neu": 19,
						"Unfav": 32
					},
					"N": 3283
				},
				"DIM_N67": {
					"Dist": {
						"Fav": 51,
						"Neu": 18,
						"Unfav": 31
					},
					"N": 3279
				},
				"DIM_N60": {
					"Dist": {
						"Fav": 65,
						"Neu": 16,
						"Unfav": 20
					},
					"N": 3274
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": 47,
						"Neu": 34,
						"Unfav": 20
					},
					"N": 3291
				}
			}
		}
	};
	for (var key in tmp) data[key] = tmp[key];

	var tmp = {
		"DIMSX.2020.389.0.AGE": {
			"651": {
				"DIM_ENG": {
					"Dist": {
						"Fav": 53,
						"Neu": 18,
						"Unfav": 28
					},
					"N": 2633
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 48,
						"Neu": 20,
						"Unfav": 33
					},
					"N": 2635
				},
				"DIM_N64": {
					"Dist": {
						"Fav": 66,
						"Neu": 14,
						"Unfav": 20
					},
					"N": 2675
				},
				"DIM_N50": {
					"Dist": {
						"Fav": 72,
						"Neu": 15,
						"Unfav": 14
					},
					"N": 2675
				},
				"DIM_N65": {
					"Dist": {
						"Fav": 49,
						"Neu": 19,
						"Unfav": 32
					},
					"N": 2675
				},
				"DIM_N52": {
					"Dist": {
						"Fav": 57,
						"Neu": 19,
						"Unfav": 23
					},
					"N": 2673
				},
				"DIM_N63": {
					"Dist": {
						"Fav": 58,
						"Neu": 18,
						"Unfav": 25
					},
					"N": 2674
				},
				"DIM_N61": {
					"Dist": {
						"Fav": 62,
						"Neu": 17,
						"Unfav": 21
					},
					"N": 2674
				},
				"DIM_N54": {
					"Dist": {
						"Fav": 64,
						"Neu": 16,
						"Unfav": 20
					},
					"N": 2675
				},
				"DIM_N53": {
					"Dist": {
						"Fav": 56,
						"Neu": 17,
						"Unfav": 27
					},
					"N": 2674
				},
				"DIM_N66": {
					"Dist": {
						"Fav": 65,
						"Neu": 17,
						"Unfav": 19
					},
					"N": 2674
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 49,
						"Neu": 19,
						"Unfav": 32
					},
					"N": 2671
				},
				"DIM_N67": {
					"Dist": {
						"Fav": 51,
						"Neu": 18,
						"Unfav": 30
					},
					"N": 2675
				},
				"DIM_N60": {
					"Dist": {
						"Fav": 64,
						"Neu": 17,
						"Unfav": 20
					},
					"N": 2667
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": 44,
						"Neu": 34,
						"Unfav": 22
					},
					"N": 2678
				}
			},
			"652": {
				"DIM_ENG": {
					"Dist": {
						"Fav": 54,
						"Neu": 18,
						"Unfav": 28
					},
					"N": 2588
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 48,
						"Neu": 19,
						"Unfav": 33
					},
					"N": 2605
				},
				"DIM_N64": {
					"Dist": {
						"Fav": 65,
						"Neu": 15,
						"Unfav": 21
					},
					"N": 2642
				},
				"DIM_N50": {
					"Dist": {
						"Fav": 71,
						"Neu": 14,
						"Unfav": 15
					},
					"N": 2640
				},
				"DIM_N65": {
					"Dist": {
						"Fav": 49,
						"Neu": 19,
						"Unfav": 32
					},
					"N": 2638
				},
				"DIM_N52": {
					"Dist": {
						"Fav": 58,
						"Neu": 20,
						"Unfav": 22
					},
					"N": 2639
				},
				"DIM_N63": {
					"Dist": {
						"Fav": 57,
						"Neu": 18,
						"Unfav": 25
					},
					"N": 2641
				},
				"DIM_N61": {
					"Dist": {
						"Fav": 62,
						"Neu": 17,
						"Unfav": 22
					},
					"N": 2641
				},
				"DIM_N54": {
					"Dist": {
						"Fav": 64,
						"Neu": 16,
						"Unfav": 20
					},
					"N": 2638
				},
				"DIM_N53": {
					"Dist": {
						"Fav": 56,
						"Neu": 17,
						"Unfav": 27
					},
					"N": 2637
				},
				"DIM_N66": {
					"Dist": {
						"Fav": 64,
						"Neu": 17,
						"Unfav": 19
					},
					"N": 2638
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 48,
						"Neu": 20,
						"Unfav": 32
					},
					"N": 2634
				},
				"DIM_N67": {
					"Dist": {
						"Fav": 51,
						"Neu": 18,
						"Unfav": 30
					},
					"N": 2639
				},
				"DIM_N60": {
					"Dist": {
						"Fav": 63,
						"Neu": 17,
						"Unfav": 20
					},
					"N": 2631
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": 44,
						"Neu": 34,
						"Unfav": 22
					},
					"N": 2642
				}
			},
			"653": {
				"DIM_ENG": {
					"Dist": {
						"Fav": 53,
						"Neu": 19,
						"Unfav": 28
					},
					"N": 2662
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 48,
						"Neu": 20,
						"Unfav": 32
					},
					"N": 2660
				},
				"DIM_N64": {
					"Dist": {
						"Fav": 65,
						"Neu": 15,
						"Unfav": 20
					},
					"N": 2695
				},
				"DIM_N50": {
					"Dist": {
						"Fav": 71,
						"Neu": 14,
						"Unfav": 14
					},
					"N": 2695
				},
				"DIM_N65": {
					"Dist": {
						"Fav": 50,
						"Neu": 19,
						"Unfav": 31
					},
					"N": 2692
				},
				"DIM_N52": {
					"Dist": {
						"Fav": 56,
						"Neu": 20,
						"Unfav": 24
					},
					"N": 2696
				},
				"DIM_N63": {
					"Dist": {
						"Fav": 58,
						"Neu": 18,
						"Unfav": 25
					},
					"N": 2695
				},
				"DIM_N61": {
					"Dist": {
						"Fav": 61,
						"Neu": 17,
						"Unfav": 22
					},
					"N": 2695
				},
				"DIM_N54": {
					"Dist": {
						"Fav": 64,
						"Neu": 16,
						"Unfav": 20
					},
					"N": 2695
				},
				"DIM_N53": {
					"Dist": {
						"Fav": 56,
						"Neu": 17,
						"Unfav": 27
					},
					"N": 2694
				},
				"DIM_N66": {
					"Dist": {
						"Fav": 65,
						"Neu": 17,
						"Unfav": 19
					},
					"N": 2695
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 48,
						"Neu": 20,
						"Unfav": 32
					},
					"N": 2690
				},
				"DIM_N67": {
					"Dist": {
						"Fav": 51,
						"Neu": 19,
						"Unfav": 30
					},
					"N": 2694
				},
				"DIM_N60": {
					"Dist": {
						"Fav": 64,
						"Neu": 16,
						"Unfav": 20
					},
					"N": 2687
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": 43,
						"Neu": 37,
						"Unfav": 20
					},
					"N": 2697
				}
			},
			"654": {
				"DIM_ENG": {
					"Dist": {
						"Fav": 53,
						"Neu": 18,
						"Unfav": 29
					},
					"N": 2575
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 48,
						"Neu": 19,
						"Unfav": 32
					},
					"N": 2581
				},
				"DIM_N64": {
					"Dist": {
						"Fav": 65,
						"Neu": 15,
						"Unfav": 20
					},
					"N": 2614
				},
				"DIM_N50": {
					"Dist": {
						"Fav": 72,
						"Neu": 14,
						"Unfav": 14
					},
					"N": 2614
				},
				"DIM_N65": {
					"Dist": {
						"Fav": 49,
						"Neu": 20,
						"Unfav": 32
					},
					"N": 2610
				},
				"DIM_N52": {
					"Dist": {
						"Fav": 57,
						"Neu": 20,
						"Unfav": 24
					},
					"N": 2614
				},
				"DIM_N63": {
					"Dist": {
						"Fav": 58,
						"Neu": 18,
						"Unfav": 25
					},
					"N": 2613
				},
				"DIM_N61": {
					"Dist": {
						"Fav": 62,
						"Neu": 17,
						"Unfav": 22
					},
					"N": 2613
				},
				"DIM_N54": {
					"Dist": {
						"Fav": 64,
						"Neu": 16,
						"Unfav": 21
					},
					"N": 2613
				},
				"DIM_N53": {
					"Dist": {
						"Fav": 56,
						"Neu": 17,
						"Unfav": 27
					},
					"N": 2615
				},
				"DIM_N66": {
					"Dist": {
						"Fav": 65,
						"Neu": 17,
						"Unfav": 18
					},
					"N": 2614
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 48,
						"Neu": 19,
						"Unfav": 33
					},
					"N": 2612
				},
				"DIM_N67": {
					"Dist": {
						"Fav": 51,
						"Neu": 19,
						"Unfav": 30
					},
					"N": 2613
				},
				"DIM_N60": {
					"Dist": {
						"Fav": 64,
						"Neu": 16,
						"Unfav": 20
					},
					"N": 2608
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": 45,
						"Neu": 32,
						"Unfav": 23
					},
					"N": 2615
				}
			},
			"655": {
				"DIM_ENG": {
					"Dist": {
						"Fav": 53,
						"Neu": 18,
						"Unfav": 29
					},
					"N": 2566
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 48,
						"Neu": 20,
						"Unfav": 32
					},
					"N": 2581
				},
				"DIM_N64": {
					"Dist": {
						"Fav": 65,
						"Neu": 16,
						"Unfav": 19
					},
					"N": 2604
				},
				"DIM_N50": {
					"Dist": {
						"Fav": 72,
						"Neu": 15,
						"Unfav": 13
					},
					"N": 2603
				},
				"DIM_N65": {
					"Dist": {
						"Fav": 49,
						"Neu": 19,
						"Unfav": 32
					},
					"N": 2599
				},
				"DIM_N52": {
					"Dist": {
						"Fav": 57,
						"Neu": 20,
						"Unfav": 23
					},
					"N": 2601
				},
				"DIM_N63": {
					"Dist": {
						"Fav": 58,
						"Neu": 18,
						"Unfav": 24
					},
					"N": 2602
				},
				"DIM_N61": {
					"Dist": {
						"Fav": 62,
						"Neu": 17,
						"Unfav": 21
					},
					"N": 2602
				},
				"DIM_N54": {
					"Dist": {
						"Fav": 65,
						"Neu": 16,
						"Unfav": 20
					},
					"N": 2600
				},
				"DIM_N53": {
					"Dist": {
						"Fav": 55,
						"Neu": 17,
						"Unfav": 28
					},
					"N": 2603
				},
				"DIM_N66": {
					"Dist": {
						"Fav": 65,
						"Neu": 17,
						"Unfav": 18
					},
					"N": 2602
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 49,
						"Neu": 20,
						"Unfav": 32
					},
					"N": 2601
				},
				"DIM_N67": {
					"Dist": {
						"Fav": 51,
						"Neu": 18,
						"Unfav": 30
					},
					"N": 2599
				},
				"DIM_N60": {
					"Dist": {
						"Fav": 64,
						"Neu": 16,
						"Unfav": 20
					},
					"N": 2595
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": 44,
						"Neu": 35,
						"Unfav": 21
					},
					"N": 2604
				}
			},
			"656": {
				"DIM_ENG": {
					"Dist": {
						"Fav": 53,
						"Neu": 18,
						"Unfav": 29
					},
					"N": 2537
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 50,
						"Neu": 19,
						"Unfav": 32
					},
					"N": 2551
				},
				"DIM_N64": {
					"Dist": {
						"Fav": 65,
						"Neu": 15,
						"Unfav": 21
					},
					"N": 2576
				},
				"DIM_N50": {
					"Dist": {
						"Fav": 71,
						"Neu": 15,
						"Unfav": 15
					},
					"N": 2577
				},
				"DIM_N65": {
					"Dist": {
						"Fav": 49,
						"Neu": 20,
						"Unfav": 32
					},
					"N": 2572
				},
				"DIM_N52": {
					"Dist": {
						"Fav": 57,
						"Neu": 20,
						"Unfav": 24
					},
					"N": 2577
				},
				"DIM_N63": {
					"Dist": {
						"Fav": 58,
						"Neu": 18,
						"Unfav": 24
					},
					"N": 2576
				},
				"DIM_N61": {
					"Dist": {
						"Fav": 62,
						"Neu": 17,
						"Unfav": 22
					},
					"N": 2576
				},
				"DIM_N54": {
					"Dist": {
						"Fav": 64,
						"Neu": 16,
						"Unfav": 20
					},
					"N": 2574
				},
				"DIM_N53": {
					"Dist": {
						"Fav": 55,
						"Neu": 17,
						"Unfav": 28
					},
					"N": 2576
				},
				"DIM_N66": {
					"Dist": {
						"Fav": 65,
						"Neu": 17,
						"Unfav": 19
					},
					"N": 2574
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 48,
						"Neu": 20,
						"Unfav": 33
					},
					"N": 2572
				},
				"DIM_N67": {
					"Dist": {
						"Fav": 51,
						"Neu": 19,
						"Unfav": 30
					},
					"N": 2574
				},
				"DIM_N60": {
					"Dist": {
						"Fav": 64,
						"Neu": 16,
						"Unfav": 20
					},
					"N": 2570
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": 42,
						"Neu": 35,
						"Unfav": 23
					},
					"N": 2578
				}
			}
		},
		"DIMSX.2018.389.0.AGE": {
			"651": {
				"DIM_ENG": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 47,
						"Neu": 19,
						"Unfav": 34
					},
					"N": 1543
				},
				"DIM_N64": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N50": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N65": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N52": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N63": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N61": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N54": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N53": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N66": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 46,
						"Neu": 20,
						"Unfav": 34
					},
					"N": 1553
				},
				"DIM_N67": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N60": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				}
			},
			"652": {
				"DIM_ENG": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 47,
						"Neu": 21,
						"Unfav": 33
					},
					"N": 1579
				},
				"DIM_N64": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N50": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N65": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N52": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N63": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N61": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N54": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N53": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N66": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 45,
						"Neu": 21,
						"Unfav": 34
					},
					"N": 1627
				},
				"DIM_N67": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N60": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				}
			},
			"653": {
				"DIM_ENG": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 46,
						"Neu": 20,
						"Unfav": 34
					},
					"N": 1547
				},
				"DIM_N64": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N50": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N65": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N52": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N63": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N61": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N54": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N53": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N66": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 46,
						"Neu": 22,
						"Unfav": 33
					},
					"N": 1552
				},
				"DIM_N67": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N60": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				}
			},
			"654": {
				"DIM_ENG": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 46,
						"Neu": 20,
						"Unfav": 34
					},
					"N": 1499
				},
				"DIM_N64": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N50": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N65": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N52": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N63": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N61": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N54": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N53": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N66": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 45,
						"Neu": 22,
						"Unfav": 34
					},
					"N": 1488
				},
				"DIM_N67": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N60": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				}
			},
			"655": {
				"DIM_ENG": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 47,
						"Neu": 20,
						"Unfav": 34
					},
					"N": 1523
				},
				"DIM_N64": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N50": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N65": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N52": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N63": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N61": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N54": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N53": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N66": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 46,
						"Neu": 20,
						"Unfav": 34
					},
					"N": 1522
				},
				"DIM_N67": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N60": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				}
			},
			"656": {
				"DIM_ENG": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 47,
						"Neu": 20,
						"Unfav": 34
					},
					"N": 1497
				},
				"DIM_N64": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N50": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N65": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N52": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N63": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N61": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N54": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N53": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N66": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 43,
						"Neu": 22,
						"Unfav": 35
					},
					"N": 1478
				},
				"DIM_N67": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N60": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				}
			}
		},
		"DIMSX.2019.389.0.AGE": {
			"651": {
				"DIM_ENG": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 49,
						"Neu": 20,
						"Unfav": 32
					},
					"N": 2157
				},
				"DIM_N64": {
					"Dist": {
						"Fav": 67,
						"Neu": 14,
						"Unfav": 20
					},
					"N": 2194
				},
				"DIM_N50": {
					"Dist": {
						"Fav": 72,
						"Neu": 14,
						"Unfav": 14
					},
					"N": 2193
				},
				"DIM_N65": {
					"Dist": {
						"Fav": 50,
						"Neu": 19,
						"Unfav": 31
					},
					"N": 2193
				},
				"DIM_N52": {
					"Dist": {
						"Fav": 57,
						"Neu": 20,
						"Unfav": 23
					},
					"N": 2194
				},
				"DIM_N63": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N61": {
					"Dist": {
						"Fav": 63,
						"Neu": 16,
						"Unfav": 21
					},
					"N": 2192
				},
				"DIM_N54": {
					"Dist": {
						"Fav": 65,
						"Neu": 15,
						"Unfav": 20
					},
					"N": 2193
				},
				"DIM_N53": {
					"Dist": {
						"Fav": 56,
						"Neu": 17,
						"Unfav": 27
					},
					"N": 2191
				},
				"DIM_N66": {
					"Dist": {
						"Fav": 66,
						"Neu": 15,
						"Unfav": 19
					},
					"N": 2193
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 49,
						"Neu": 19,
						"Unfav": 32
					},
					"N": 2189
				},
				"DIM_N67": {
					"Dist": {
						"Fav": 51,
						"Neu": 19,
						"Unfav": 31
					},
					"N": 2188
				},
				"DIM_N60": {
					"Dist": {
						"Fav": 64,
						"Neu": 16,
						"Unfav": 20
					},
					"N": 2188
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": 46,
						"Neu": 34,
						"Unfav": 20
					},
					"N": 2195
				}
			},
			"652": {
				"DIM_ENG": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 48,
						"Neu": 19,
						"Unfav": 33
					},
					"N": 2113
				},
				"DIM_N64": {
					"Dist": {
						"Fav": 66,
						"Neu": 14,
						"Unfav": 19
					},
					"N": 2156
				},
				"DIM_N50": {
					"Dist": {
						"Fav": 72,
						"Neu": 14,
						"Unfav": 14
					},
					"N": 2154
				},
				"DIM_N65": {
					"Dist": {
						"Fav": 49,
						"Neu": 19,
						"Unfav": 32
					},
					"N": 2150
				},
				"DIM_N52": {
					"Dist": {
						"Fav": 58,
						"Neu": 20,
						"Unfav": 22
					},
					"N": 2155
				},
				"DIM_N63": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N61": {
					"Dist": {
						"Fav": 61,
						"Neu": 17,
						"Unfav": 22
					},
					"N": 2153
				},
				"DIM_N54": {
					"Dist": {
						"Fav": 64,
						"Neu": 16,
						"Unfav": 20
					},
					"N": 2153
				},
				"DIM_N53": {
					"Dist": {
						"Fav": 56,
						"Neu": 17,
						"Unfav": 27
					},
					"N": 2154
				},
				"DIM_N66": {
					"Dist": {
						"Fav": 66,
						"Neu": 15,
						"Unfav": 19
					},
					"N": 2152
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 48,
						"Neu": 19,
						"Unfav": 32
					},
					"N": 2154
				},
				"DIM_N67": {
					"Dist": {
						"Fav": 51,
						"Neu": 18,
						"Unfav": 31
					},
					"N": 2150
				},
				"DIM_N60": {
					"Dist": {
						"Fav": 64,
						"Neu": 16,
						"Unfav": 20
					},
					"N": 2149
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": 45,
						"Neu": 35,
						"Unfav": 21
					},
					"N": 2156
				}
			},
			"653": {
				"DIM_ENG": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 47,
						"Neu": 20,
						"Unfav": 32
					},
					"N": 2181
				},
				"DIM_N64": {
					"Dist": {
						"Fav": 65,
						"Neu": 15,
						"Unfav": 20
					},
					"N": 2203
				},
				"DIM_N50": {
					"Dist": {
						"Fav": 72,
						"Neu": 15,
						"Unfav": 14
					},
					"N": 2204
				},
				"DIM_N65": {
					"Dist": {
						"Fav": 50,
						"Neu": 19,
						"Unfav": 31
					},
					"N": 2201
				},
				"DIM_N52": {
					"Dist": {
						"Fav": 58,
						"Neu": 20,
						"Unfav": 23
					},
					"N": 2203
				},
				"DIM_N63": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N61": {
					"Dist": {
						"Fav": 62,
						"Neu": 16,
						"Unfav": 22
					},
					"N": 2203
				},
				"DIM_N54": {
					"Dist": {
						"Fav": 64,
						"Neu": 16,
						"Unfav": 19
					},
					"N": 2201
				},
				"DIM_N53": {
					"Dist": {
						"Fav": 57,
						"Neu": 17,
						"Unfav": 27
					},
					"N": 2202
				},
				"DIM_N66": {
					"Dist": {
						"Fav": 66,
						"Neu": 15,
						"Unfav": 19
					},
					"N": 2203
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 48,
						"Neu": 19,
						"Unfav": 32
					},
					"N": 2196
				},
				"DIM_N67": {
					"Dist": {
						"Fav": 51,
						"Neu": 19,
						"Unfav": 30
					},
					"N": 2203
				},
				"DIM_N60": {
					"Dist": {
						"Fav": 64,
						"Neu": 16,
						"Unfav": 20
					},
					"N": 2195
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": 45,
						"Neu": 33,
						"Unfav": 22
					},
					"N": 2205
				}
			},
			"654": {
				"DIM_ENG": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 47,
						"Neu": 21,
						"Unfav": 33
					},
					"N": 2145
				},
				"DIM_N64": {
					"Dist": {
						"Fav": 66,
						"Neu": 14,
						"Unfav": 20
					},
					"N": 2181
				},
				"DIM_N50": {
					"Dist": {
						"Fav": 73,
						"Neu": 14,
						"Unfav": 14
					},
					"N": 2181
				},
				"DIM_N65": {
					"Dist": {
						"Fav": 49,
						"Neu": 19,
						"Unfav": 32
					},
					"N": 2179
				},
				"DIM_N52": {
					"Dist": {
						"Fav": 58,
						"Neu": 20,
						"Unfav": 22
					},
					"N": 2182
				},
				"DIM_N63": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N61": {
					"Dist": {
						"Fav": 63,
						"Neu": 17,
						"Unfav": 21
					},
					"N": 2181
				},
				"DIM_N54": {
					"Dist": {
						"Fav": 65,
						"Neu": 16,
						"Unfav": 19
					},
					"N": 2180
				},
				"DIM_N53": {
					"Dist": {
						"Fav": 56,
						"Neu": 17,
						"Unfav": 27
					},
					"N": 2178
				},
				"DIM_N66": {
					"Dist": {
						"Fav": 67,
						"Neu": 15,
						"Unfav": 19
					},
					"N": 2180
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 49,
						"Neu": 19,
						"Unfav": 32
					},
					"N": 2180
				},
				"DIM_N67": {
					"Dist": {
						"Fav": 51,
						"Neu": 19,
						"Unfav": 31
					},
					"N": 2175
				},
				"DIM_N60": {
					"Dist": {
						"Fav": 65,
						"Neu": 16,
						"Unfav": 19
					},
					"N": 2172
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": 46,
						"Neu": 34,
						"Unfav": 20
					},
					"N": 2182
				}
			},
			"655": {
				"DIM_ENG": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 48,
						"Neu": 20,
						"Unfav": 33
					},
					"N": 2147
				},
				"DIM_N64": {
					"Dist": {
						"Fav": 65,
						"Neu": 15,
						"Unfav": 20
					},
					"N": 2188
				},
				"DIM_N50": {
					"Dist": {
						"Fav": 72,
						"Neu": 14,
						"Unfav": 14
					},
					"N": 2190
				},
				"DIM_N65": {
					"Dist": {
						"Fav": 50,
						"Neu": 18,
						"Unfav": 32
					},
					"N": 2186
				},
				"DIM_N52": {
					"Dist": {
						"Fav": 56,
						"Neu": 20,
						"Unfav": 23
					},
					"N": 2187
				},
				"DIM_N63": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N61": {
					"Dist": {
						"Fav": 63,
						"Neu": 17,
						"Unfav": 20
					},
					"N": 2189
				},
				"DIM_N54": {
					"Dist": {
						"Fav": 64,
						"Neu": 16,
						"Unfav": 20
					},
					"N": 2190
				},
				"DIM_N53": {
					"Dist": {
						"Fav": 56,
						"Neu": 17,
						"Unfav": 27
					},
					"N": 2188
				},
				"DIM_N66": {
					"Dist": {
						"Fav": 67,
						"Neu": 16,
						"Unfav": 18
					},
					"N": 2188
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 49,
						"Neu": 20,
						"Unfav": 32
					},
					"N": 2184
				},
				"DIM_N67": {
					"Dist": {
						"Fav": 50,
						"Neu": 19,
						"Unfav": 31
					},
					"N": 2184
				},
				"DIM_N60": {
					"Dist": {
						"Fav": 64,
						"Neu": 16,
						"Unfav": 20
					},
					"N": 2185
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": 45,
						"Neu": 35,
						"Unfav": 20
					},
					"N": 2191
				}
			},
			"656": {
				"DIM_ENG": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_ENA": {
					"Dist": {
						"Fav": 49,
						"Neu": 20,
						"Unfav": 31
					},
					"N": 2131
				},
				"DIM_N64": {
					"Dist": {
						"Fav": 65,
						"Neu": 15,
						"Unfav": 20
					},
					"N": 2165
				},
				"DIM_N50": {
					"Dist": {
						"Fav": 72,
						"Neu": 14,
						"Unfav": 14
					},
					"N": 2162
				},
				"DIM_N65": {
					"Dist": {
						"Fav": 50,
						"Neu": 19,
						"Unfav": 31
					},
					"N": 2160
				},
				"DIM_N52": {
					"Dist": {
						"Fav": 56,
						"Neu": 20,
						"Unfav": 24
					},
					"N": 2165
				},
				"DIM_N63": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DIM_N61": {
					"Dist": {
						"Fav": 62,
						"Neu": 17,
						"Unfav": 21
					},
					"N": 2165
				},
				"DIM_N54": {
					"Dist": {
						"Fav": 65,
						"Neu": 16,
						"Unfav": 19
					},
					"N": 2164
				},
				"DIM_N53": {
					"Dist": {
						"Fav": 56,
						"Neu": 17,
						"Unfav": 27
					},
					"N": 2161
				},
				"DIM_N66": {
					"Dist": {
						"Fav": 67,
						"Neu": 15,
						"Unfav": 19
					},
					"N": 2164
				},
				"DIM_N51": {
					"Dist": {
						"Fav": 49,
						"Neu": 19,
						"Unfav": 32
					},
					"N": 2160
				},
				"DIM_N67": {
					"Dist": {
						"Fav": 51,
						"Neu": 19,
						"Unfav": 31
					},
					"N": 2161
				},
				"DIM_N60": {
					"Dist": {
						"Fav": 64,
						"Neu": 16,
						"Unfav": 20
					},
					"N": 2160
				},
				"DIM_NPS": {
					"Dist": {
						"Fav": 44,
						"Neu": 34,
						"Unfav": 22
					},
					"N": 2165
				}
			}
		}
	};
	for (var key in tmp) data[key] = tmp[key];


	// ITEMSX Breakdown

	var tmp = {
		"ITEMSX.2020.389.0.AGE": {
			"651": {
				"RE01": {
					"Dist": {
						"Fav": 2164,
						"Neu": 273,
						"Unfav": 238
					},
					"N": 2675
				},
				"DM02": {
					"Dist": {
						"Fav": 2189,
						"Neu": 244,
						"Unfav": 242
					},
					"N": 2675
				},
				"RC01": {
					"Dist": {
						"Fav": 1934,
						"Neu": 405,
						"Unfav": 336
					},
					"N": 2675
				},
				"TW06": {
					"Dist": {
						"Fav": 2171,
						"Neu": 272,
						"Unfav": 229
					},
					"N": 2672
				},
				"QS01": {
					"Dist": {
						"Fav": 2004,
						"Neu": 390,
						"Unfav": 280
					},
					"N": 2674
				},
				"PE09": {
					"Dist": {
						"Fav": 2004,
						"Neu": 390,
						"Unfav": 280
					},
					"N": 2674
				},
				"AV15": {
					"Dist": {
						"Fav": 2314,
						"Neu": 213,
						"Unfav": 148
					},
					"N": 2675
				},
				"LD04": {
					"Dist": {
						"Fav": 1973,
						"Neu": 368,
						"Unfav": 333
					},
					"N": 2674
				},
				"WS03": {
					"Dist": {
						"Fav": 2220,
						"Neu": 244,
						"Unfav": 207
					},
					"N": 2671
				},
				"TR09": {
					"Dist": {
						"Fav": 2137,
						"Neu": 304,
						"Unfav": 233
					},
					"N": 2674
				},
				"PE06": {
					"Dist": {
						"Fav": 2273,
						"Neu": 244,
						"Unfav": 139
					},
					"N": 2656
				},
				"SD04": {
					"Dist": {
						"Fav": 1946,
						"Neu": 375,
						"Unfav": 350
					},
					"N": 2671
				},
				"PE03": {
					"Dist": {
						"Fav": 2090,
						"Neu": 371,
						"Unfav": 201
					},
					"N": 2662
				},
				"OM12": {
					"Dist": {
						"Fav": 2038,
						"Neu": 360,
						"Unfav": 235
					},
					"N": 2633
				},
				"QS16": {
					"Dist": {
						"Fav": 1739,
						"Neu": 551,
						"Unfav": 372
					},
					"N": 2662
				},
				"LD09": {
					"Dist": {
						"Fav": 2074,
						"Neu": 322,
						"Unfav": 270
					},
					"N": 2666
				},
				"TR01": {
					"Dist": {
						"Fav": 2241,
						"Neu": 289,
						"Unfav": 142
					},
					"N": 2672
				},
				"VC04": {
					"Dist": {
						"Fav": 2269,
						"Neu": 303,
						"Unfav": 97
					},
					"N": 2669
				},
				"GP07": {
					"Dist": {
						"Fav": 1411,
						"Neu": 585,
						"Unfav": 634
					},
					"N": 2630
				},
				"ER01": {
					"Dist": {
						"Fav": 1723,
						"Neu": 535,
						"Unfav": 409
					},
					"N": 2667
				},
				"IV02": {
					"Dist": {
						"Fav": 1673,
						"Neu": 553,
						"Unfav": 437
					},
					"N": 2663
				},
				"CP14": {
					"Dist": {
						"Fav": 1409,
						"Neu": 598,
						"Unfav": 631
					},
					"N": 2638
				},
				"GP12": {
					"Dist": {
						"Fav": 2075,
						"Neu": 368,
						"Unfav": 195
					},
					"N": 2638
				},
				"CP11": {
					"Dist": {
						"Fav": 2264,
						"Neu": 255,
						"Unfav": 48
					},
					"N": 2567
				},
				"WE01": {
					"Dist": {
						"Fav": 2259,
						"Neu": 264,
						"Unfav": 152
					},
					"N": 2675
				},
				"IV04": {
					"Dist": {
						"Fav": 2047,
						"Neu": 458,
						"Unfav": 101
					},
					"N": 2606
				},
				"WE12": {
					"Dist": {
						"Fav": 1881,
						"Neu": 491,
						"Unfav": 263
					},
					"N": 2635
				},
				"SP12": {
					"Dist": {
						"Fav": 1835,
						"Neu": 518,
						"Unfav": 319
					},
					"N": 2672
				},
				"AV09": {
					"Dist": {
						"Fav": 2194,
						"Neu": 355,
						"Unfav": 63
					},
					"N": 2612
				},
				"TW04": {
					"Dist": {
						"Fav": 1433,
						"Neu": 733,
						"Unfav": 229
					},
					"N": 2395
				},
				"CP12": {
					"Dist": {
						"Fav": 1960,
						"Neu": 469,
						"Unfav": 237
					},
					"N": 2666
				},
				"DC11": {
					"Dist": {
						"Fav": 2221,
						"Neu": 349,
						"Unfav": 104
					},
					"N": 2674
				},
				"BN01": {
					"Dist": {
						"Fav": 2071,
						"Neu": 386,
						"Unfav": 210
					},
					"N": 2667
				},
				"GP09": {
					"Dist": {
						"Fav": 1771,
						"Neu": 421,
						"Unfav": 481
					},
					"N": 2673
				},
				"QS03": {
					"Dist": {
						"Fav": 2253,
						"Neu": 285,
						"Unfav": 98
					},
					"N": 2636
				},
				"OM01": {
					"Dist": {
						"Fav": 2191,
						"Neu": 293,
						"Unfav": 126
					},
					"N": 2610
				},
				"TR04": {
					"Dist": {
						"Fav": 1445,
						"Neu": 640,
						"Unfav": 588
					},
					"N": 2673
				},
				"QS02": {
					"Dist": {
						"Fav": 893,
						"Neu": 441,
						"Unfav": 846
					},
					"N": 2180
				},
				"JS05": {
					"Dist": {
						"Fav": 860,
						"Neu": 438,
						"Unfav": 875
					},
					"N": 2173
				},
				"OM11": {
					"Dist": {
						"Fav": 938,
						"Neu": 433,
						"Unfav": 839
					},
					"N": 2210
				},
				"SD05": {
					"Dist": {
						"Fav": 941,
						"Neu": 436,
						"Unfav": 838
					},
					"N": 2215
				},
				"SD03": {
					"Dist": {
						"Fav": 884,
						"Neu": 440,
						"Unfav": 847
					},
					"N": 2171
				},
				"OS02": {
					"Dist": {
						"Fav": 871,
						"Neu": 463,
						"Unfav": 874
					},
					"N": 2208
				},
				"JS02": {
					"Dist": {
						"Fav": 882,
						"Neu": 444,
						"Unfav": 893
					},
					"N": 2219
				},
				"ST01": {
					"Dist": {
						"Fav": 861,
						"Neu": 453,
						"Unfav": 866
					},
					"N": 2180
				},
				"WL01": {
					"Dist": {
						"Fav": 891,
						"Neu": 436,
						"Unfav": 875
					},
					"N": 2202
				},
				"GP10": {
					"Dist": {
						"Fav": 859,
						"Neu": 440,
						"Unfav": 905
					},
					"N": 2204
				},
				"WE08": {
					"Dist": {
						"Fav": 888,
						"Neu": 426,
						"Unfav": 895
					},
					"N": 2209
				},
				"DM04": {
					"Dist": {
						"Fav": 884,
						"Neu": 437,
						"Unfav": 885
					},
					"N": 2206
				},
				"DM18": {
					"Dist": {
						"Fav": 884,
						"Neu": 431,
						"Unfav": 874
					},
					"N": 2189
				},
				"SP45": {
					"Dist": {
						"Fav": 891,
						"Neu": 447,
						"Unfav": 861
					},
					"N": 2199
				},
				"SV03": {
					"Dist": {
						"Fav": 882,
						"Neu": 430,
						"Unfav": 887
					},
					"N": 2199
				},
				"SR05": {
					"Dist": {
						"Fav": 880,
						"Neu": 407,
						"Unfav": 894
					},
					"N": 2181
				},
				"SR03": {
					"Dist": {
						"Fav": 887,
						"Neu": 421,
						"Unfav": 883
					},
					"N": 2191
				},
				"TW02": {
					"Dist": {
						"Fav": 866,
						"Neu": 459,
						"Unfav": 873
					},
					"N": 2198
				},
				"DC08": {
					"Dist": {
						"Fav": 882,
						"Neu": 428,
						"Unfav": 885
					},
					"N": 2195
				},
				"GP03": {
					"Dist": {
						"Fav": 889,
						"Neu": 432,
						"Unfav": 878
					},
					"N": 2199
				},
				"PE01": {
					"Dist": {
						"Fav": 921,
						"Neu": 405,
						"Unfav": 892
					},
					"N": 2218
				},
				"AV01": {
					"Dist": {
						"Fav": 917,
						"Neu": 429,
						"Unfav": 863
					},
					"N": 2209
				},
				"AV08": {
					"Dist": {
						"Fav": 862,
						"Neu": 424,
						"Unfav": 910
					},
					"N": 2196
				},
				"BN04": {
					"Dist": {
						"Fav": 914,
						"Neu": 461,
						"Unfav": 832
					},
					"N": 2207
				},
				"CP16": {
					"Dist": {
						"Fav": 823,
						"Neu": 469,
						"Unfav": 888
					},
					"N": 2180
				},
				"PE10": {
					"Dist": {
						"Fav": 869,
						"Neu": 429,
						"Unfav": 901
					},
					"N": 2199
				},
				"PE21": {
					"Dist": {
						"Fav": 886,
						"Neu": 436,
						"Unfav": 861
					},
					"N": 2183
				},
				"OM04": {
					"Dist": {
						"Fav": 848,
						"Neu": 425,
						"Unfav": 882
					},
					"N": 2155
				},
				"QS09": {
					"Dist": {
						"Fav": 867,
						"Neu": 407,
						"Unfav": 912
					},
					"N": 2186
				},
				"SP04": {
					"Dist": {
						"Fav": 925,
						"Neu": 431,
						"Unfav": 840
					},
					"N": 2196
				},
				"WK01": {
					"Dist": {
						"Fav": 881,
						"Neu": 397,
						"Unfav": 906
					},
					"N": 2184
				},
				"DI03": {
					"Dist": {
						"Fav": 884,
						"Neu": 455,
						"Unfav": 882
					},
					"N": 2221
				},
				"WK02": {
					"Dist": {
						"Fav": 874,
						"Neu": 410,
						"Unfav": 884
					},
					"N": 2168
				},
				"SP47": {
					"Dist": {
						"Fav": 885,
						"Neu": 435,
						"Unfav": 881
					},
					"N": 2201
				},
				"WS01": {
					"Dist": {
						"Fav": 902,
						"Neu": 438,
						"Unfav": 849
					},
					"N": 2189
				},
				"DC09": {
					"Dist": {
						"Fav": 887,
						"Neu": 400,
						"Unfav": 908
					},
					"N": 2195
				},
				"AV02": {
					"Dist": {
						"Fav": 2164,
						"Neu": 273,
						"Unfav": 238
					},
					"N": 2675
				},
				"DI04": {
					"Dist": {
						"Fav": 2189,
						"Neu": 244,
						"Unfav": 242
					},
					"N": 2675
				},
				"IV05": {
					"Dist": {
						"Fav": 1934,
						"Neu": 405,
						"Unfav": 336
					},
					"N": 2675
				},
				"OM06": {
					"Dist": {
						"Fav": 529,
						"Neu": 529,
						"Unfav": 1036
					},
					"N": 2094
				},
				"NSQ1": {
					"Dist": {
						"Fav": 1172,
						"Neu": 921,
						"Unfav": 585
					},
					"N": 2678
				}
			},
			"652": {
				"RE01": {
					"Dist": {
						"Fav": 2117,
						"Neu": 284,
						"Unfav": 241
					},
					"N": 2642
				},
				"DM02": {
					"Dist": {
						"Fav": 2151,
						"Neu": 249,
						"Unfav": 240
					},
					"N": 2640
				},
				"RC01": {
					"Dist": {
						"Fav": 1910,
						"Neu": 403,
						"Unfav": 325
					},
					"N": 2638
				},
				"TW06": {
					"Dist": {
						"Fav": 2131,
						"Neu": 287,
						"Unfav": 221
					},
					"N": 2639
				},
				"QS01": {
					"Dist": {
						"Fav": 1945,
						"Neu": 411,
						"Unfav": 285
					},
					"N": 2641
				},
				"PE09": {
					"Dist": {
						"Fav": 1945,
						"Neu": 411,
						"Unfav": 285
					},
					"N": 2641
				},
				"AV15": {
					"Dist": {
						"Fav": 2279,
						"Neu": 186,
						"Unfav": 173
					},
					"N": 2638
				},
				"LD04": {
					"Dist": {
						"Fav": 1940,
						"Neu": 364,
						"Unfav": 333
					},
					"N": 2637
				},
				"WS03": {
					"Dist": {
						"Fav": 2196,
						"Neu": 219,
						"Unfav": 225
					},
					"N": 2640
				},
				"TR09": {
					"Dist": {
						"Fav": 2136,
						"Neu": 292,
						"Unfav": 210
					},
					"N": 2638
				},
				"PE06": {
					"Dist": {
						"Fav": 2216,
						"Neu": 233,
						"Unfav": 170
					},
					"N": 2619
				},
				"SD04": {
					"Dist": {
						"Fav": 1916,
						"Neu": 398,
						"Unfav": 320
					},
					"N": 2634
				},
				"PE03": {
					"Dist": {
						"Fav": 2049,
						"Neu": 363,
						"Unfav": 208
					},
					"N": 2620
				},
				"OM12": {
					"Dist": {
						"Fav": 2017,
						"Neu": 351,
						"Unfav": 220
					},
					"N": 2588
				},
				"QS16": {
					"Dist": {
						"Fav": 1733,
						"Neu": 546,
						"Unfav": 343
					},
					"N": 2622
				},
				"LD09": {
					"Dist": {
						"Fav": 2034,
						"Neu": 326,
						"Unfav": 271
					},
					"N": 2631
				},
				"TR01": {
					"Dist": {
						"Fav": 2205,
						"Neu": 285,
						"Unfav": 146
					},
					"N": 2636
				},
				"VC04": {
					"Dist": {
						"Fav": 2235,
						"Neu": 290,
						"Unfav": 109
					},
					"N": 2634
				},
				"GP07": {
					"Dist": {
						"Fav": 1421,
						"Neu": 574,
						"Unfav": 590
					},
					"N": 2585
				},
				"ER01": {
					"Dist": {
						"Fav": 1693,
						"Neu": 505,
						"Unfav": 432
					},
					"N": 2630
				},
				"IV02": {
					"Dist": {
						"Fav": 1634,
						"Neu": 560,
						"Unfav": 433
					},
					"N": 2627
				},
				"CP14": {
					"Dist": {
						"Fav": 1411,
						"Neu": 567,
						"Unfav": 627
					},
					"N": 2605
				},
				"GP12": {
					"Dist": {
						"Fav": 2015,
						"Neu": 382,
						"Unfav": 213
					},
					"N": 2610
				},
				"CP11": {
					"Dist": {
						"Fav": 2223,
						"Neu": 270,
						"Unfav": 42
					},
					"N": 2535
				},
				"WE01": {
					"Dist": {
						"Fav": 2217,
						"Neu": 268,
						"Unfav": 154
					},
					"N": 2639
				},
				"IV04": {
					"Dist": {
						"Fav": 2009,
						"Neu": 471,
						"Unfav": 98
					},
					"N": 2578
				},
				"WE12": {
					"Dist": {
						"Fav": 1883,
						"Neu": 468,
						"Unfav": 254
					},
					"N": 2605
				},
				"SP12": {
					"Dist": {
						"Fav": 1791,
						"Neu": 540,
						"Unfav": 306
					},
					"N": 2637
				},
				"AV09": {
					"Dist": {
						"Fav": 2197,
						"Neu": 336,
						"Unfav": 62
					},
					"N": 2595
				},
				"TW04": {
					"Dist": {
						"Fav": 1435,
						"Neu": 713,
						"Unfav": 200
					},
					"N": 2348
				},
				"CP12": {
					"Dist": {
						"Fav": 1939,
						"Neu": 434,
						"Unfav": 250
					},
					"N": 2623
				},
				"DC11": {
					"Dist": {
						"Fav": 2163,
						"Neu": 377,
						"Unfav": 96
					},
					"N": 2636
				},
				"BN01": {
					"Dist": {
						"Fav": 1983,
						"Neu": 433,
						"Unfav": 215
					},
					"N": 2631
				},
				"GP09": {
					"Dist": {
						"Fav": 1706,
						"Neu": 454,
						"Unfav": 479
					},
					"N": 2639
				},
				"QS03": {
					"Dist": {
						"Fav": 2248,
						"Neu": 271,
						"Unfav": 97
					},
					"N": 2616
				},
				"OM01": {
					"Dist": {
						"Fav": 2129,
						"Neu": 317,
						"Unfav": 127
					},
					"N": 2573
				},
				"TR04": {
					"Dist": {
						"Fav": 1410,
						"Neu": 634,
						"Unfav": 592
					},
					"N": 2636
				},
				"QS02": {
					"Dist": {
						"Fav": 851,
						"Neu": 447,
						"Unfav": 892
					},
					"N": 2190
				},
				"JS05": {
					"Dist": {
						"Fav": 881,
						"Neu": 418,
						"Unfav": 858
					},
					"N": 2157
				},
				"OM11": {
					"Dist": {
						"Fav": 889,
						"Neu": 444,
						"Unfav": 832
					},
					"N": 2165
				},
				"SD05": {
					"Dist": {
						"Fav": 889,
						"Neu": 454,
						"Unfav": 823
					},
					"N": 2166
				},
				"SD03": {
					"Dist": {
						"Fav": 867,
						"Neu": 432,
						"Unfav": 888
					},
					"N": 2187
				},
				"OS02": {
					"Dist": {
						"Fav": 878,
						"Neu": 414,
						"Unfav": 874
					},
					"N": 2166
				},
				"JS02": {
					"Dist": {
						"Fav": 851,
						"Neu": 417,
						"Unfav": 893
					},
					"N": 2161
				},
				"ST01": {
					"Dist": {
						"Fav": 851,
						"Neu": 450,
						"Unfav": 912
					},
					"N": 2213
				},
				"WL01": {
					"Dist": {
						"Fav": 870,
						"Neu": 442,
						"Unfav": 872
					},
					"N": 2184
				},
				"GP10": {
					"Dist": {
						"Fav": 851,
						"Neu": 432,
						"Unfav": 876
					},
					"N": 2159
				},
				"WE08": {
					"Dist": {
						"Fav": 877,
						"Neu": 443,
						"Unfav": 865
					},
					"N": 2185
				},
				"DM04": {
					"Dist": {
						"Fav": 849,
						"Neu": 420,
						"Unfav": 898
					},
					"N": 2167
				},
				"DM18": {
					"Dist": {
						"Fav": 860,
						"Neu": 403,
						"Unfav": 907
					},
					"N": 2170
				},
				"SP45": {
					"Dist": {
						"Fav": 885,
						"Neu": 464,
						"Unfav": 850
					},
					"N": 2199
				},
				"SV03": {
					"Dist": {
						"Fav": 883,
						"Neu": 414,
						"Unfav": 875
					},
					"N": 2172
				},
				"SR05": {
					"Dist": {
						"Fav": 898,
						"Neu": 440,
						"Unfav": 839
					},
					"N": 2177
				},
				"SR03": {
					"Dist": {
						"Fav": 835,
						"Neu": 455,
						"Unfav": 860
					},
					"N": 2150
				},
				"TW02": {
					"Dist": {
						"Fav": 876,
						"Neu": 483,
						"Unfav": 811
					},
					"N": 2170
				},
				"DC08": {
					"Dist": {
						"Fav": 891,
						"Neu": 403,
						"Unfav": 860
					},
					"N": 2154
				},
				"GP03": {
					"Dist": {
						"Fav": 878,
						"Neu": 444,
						"Unfav": 885
					},
					"N": 2207
				},
				"PE01": {
					"Dist": {
						"Fav": 879,
						"Neu": 448,
						"Unfav": 860
					},
					"N": 2187
				},
				"AV01": {
					"Dist": {
						"Fav": 901,
						"Neu": 442,
						"Unfav": 842
					},
					"N": 2185
				},
				"AV08": {
					"Dist": {
						"Fav": 862,
						"Neu": 392,
						"Unfav": 912
					},
					"N": 2166
				},
				"BN04": {
					"Dist": {
						"Fav": 866,
						"Neu": 463,
						"Unfav": 870
					},
					"N": 2199
				},
				"CP16": {
					"Dist": {
						"Fav": 842,
						"Neu": 415,
						"Unfav": 876
					},
					"N": 2133
				},
				"PE10": {
					"Dist": {
						"Fav": 854,
						"Neu": 455,
						"Unfav": 857
					},
					"N": 2166
				},
				"PE21": {
					"Dist": {
						"Fav": 856,
						"Neu": 441,
						"Unfav": 885
					},
					"N": 2182
				},
				"OM04": {
					"Dist": {
						"Fav": 815,
						"Neu": 457,
						"Unfav": 913
					},
					"N": 2185
				},
				"QS09": {
					"Dist": {
						"Fav": 869,
						"Neu": 438,
						"Unfav": 891
					},
					"N": 2198
				},
				"SP04": {
					"Dist": {
						"Fav": 859,
						"Neu": 467,
						"Unfav": 877
					},
					"N": 2203
				},
				"WK01": {
					"Dist": {
						"Fav": 851,
						"Neu": 420,
						"Unfav": 869
					},
					"N": 2140
				},
				"DI03": {
					"Dist": {
						"Fav": 844,
						"Neu": 422,
						"Unfav": 921
					},
					"N": 2187
				},
				"WK02": {
					"Dist": {
						"Fav": 846,
						"Neu": 471,
						"Unfav": 871
					},
					"N": 2188
				},
				"SP47": {
					"Dist": {
						"Fav": 849,
						"Neu": 447,
						"Unfav": 875
					},
					"N": 2171
				},
				"WS01": {
					"Dist": {
						"Fav": 885,
						"Neu": 433,
						"Unfav": 837
					},
					"N": 2155
				},
				"DC09": {
					"Dist": {
						"Fav": 900,
						"Neu": 419,
						"Unfav": 852
					},
					"N": 2171
				},
				"AV02": {
					"Dist": {
						"Fav": 2117,
						"Neu": 284,
						"Unfav": 241
					},
					"N": 2642
				},
				"DI04": {
					"Dist": {
						"Fav": 2151,
						"Neu": 249,
						"Unfav": 240
					},
					"N": 2640
				},
				"IV05": {
					"Dist": {
						"Fav": 1910,
						"Neu": 403,
						"Unfav": 325
					},
					"N": 2638
				},
				"OM06": {
					"Dist": {
						"Fav": 520,
						"Neu": 550,
						"Unfav": 1032
					},
					"N": 2102
				},
				"NSQ1": {
					"Dist": {
						"Fav": 1163,
						"Neu": 906,
						"Unfav": 573
					},
					"N": 2642
				}
			},
			"653": {
				"RE01": {
					"Dist": {
						"Fav": 2151,
						"Neu": 305,
						"Unfav": 239
					},
					"N": 2695
				},
				"DM02": {
					"Dist": {
						"Fav": 2192,
						"Neu": 251,
						"Unfav": 252
					},
					"N": 2695
				},
				"RC01": {
					"Dist": {
						"Fav": 1909,
						"Neu": 458,
						"Unfav": 325
					},
					"N": 2692
				},
				"TW06": {
					"Dist": {
						"Fav": 2131,
						"Neu": 311,
						"Unfav": 254
					},
					"N": 2696
				},
				"QS01": {
					"Dist": {
						"Fav": 1991,
						"Neu": 406,
						"Unfav": 298
					},
					"N": 2695
				},
				"PE09": {
					"Dist": {
						"Fav": 1991,
						"Neu": 406,
						"Unfav": 298
					},
					"N": 2695
				},
				"AV15": {
					"Dist": {
						"Fav": 2334,
						"Neu": 190,
						"Unfav": 171
					},
					"N": 2695
				},
				"LD04": {
					"Dist": {
						"Fav": 1990,
						"Neu": 362,
						"Unfav": 342
					},
					"N": 2694
				},
				"WS03": {
					"Dist": {
						"Fav": 2220,
						"Neu": 264,
						"Unfav": 205
					},
					"N": 2689
				},
				"TR09": {
					"Dist": {
						"Fav": 2121,
						"Neu": 354,
						"Unfav": 220
					},
					"N": 2695
				},
				"PE06": {
					"Dist": {
						"Fav": 2269,
						"Neu": 266,
						"Unfav": 140
					},
					"N": 2675
				},
				"SD04": {
					"Dist": {
						"Fav": 1949,
						"Neu": 392,
						"Unfav": 349
					},
					"N": 2690
				},
				"PE03": {
					"Dist": {
						"Fav": 2061,
						"Neu": 391,
						"Unfav": 233
					},
					"N": 2685
				},
				"OM12": {
					"Dist": {
						"Fav": 2067,
						"Neu": 370,
						"Unfav": 225
					},
					"N": 2662
				},
				"QS16": {
					"Dist": {
						"Fav": 1762,
						"Neu": 564,
						"Unfav": 351
					},
					"N": 2677
				},
				"LD09": {
					"Dist": {
						"Fav": 2064,
						"Neu": 358,
						"Unfav": 271
					},
					"N": 2693
				},
				"TR01": {
					"Dist": {
						"Fav": 2317,
						"Neu": 230,
						"Unfav": 144
					},
					"N": 2691
				},
				"VC04": {
					"Dist": {
						"Fav": 2311,
						"Neu": 276,
						"Unfav": 101
					},
					"N": 2688
				},
				"GP07": {
					"Dist": {
						"Fav": 1434,
						"Neu": 615,
						"Unfav": 584
					},
					"N": 2633
				},
				"ER01": {
					"Dist": {
						"Fav": 1765,
						"Neu": 507,
						"Unfav": 410
					},
					"N": 2682
				},
				"IV02": {
					"Dist": {
						"Fav": 1681,
						"Neu": 561,
						"Unfav": 439
					},
					"N": 2681
				},
				"CP14": {
					"Dist": {
						"Fav": 1426,
						"Neu": 602,
						"Unfav": 646
					},
					"N": 2674
				},
				"GP12": {
					"Dist": {
						"Fav": 2064,
						"Neu": 363,
						"Unfav": 234
					},
					"N": 2661
				},
				"CP11": {
					"Dist": {
						"Fav": 2239,
						"Neu": 263,
						"Unfav": 76
					},
					"N": 2578
				},
				"WE01": {
					"Dist": {
						"Fav": 2257,
						"Neu": 281,
						"Unfav": 156
					},
					"N": 2694
				},
				"IV04": {
					"Dist": {
						"Fav": 2071,
						"Neu": 449,
						"Unfav": 106
					},
					"N": 2626
				},
				"WE12": {
					"Dist": {
						"Fav": 1921,
						"Neu": 487,
						"Unfav": 252
					},
					"N": 2660
				},
				"SP12": {
					"Dist": {
						"Fav": 1799,
						"Neu": 550,
						"Unfav": 344
					},
					"N": 2693
				},
				"AV09": {
					"Dist": {
						"Fav": 2242,
						"Neu": 340,
						"Unfav": 64
					},
					"N": 2646
				},
				"TW04": {
					"Dist": {
						"Fav": 1394,
						"Neu": 770,
						"Unfav": 267
					},
					"N": 2431
				},
				"CP12": {
					"Dist": {
						"Fav": 2005,
						"Neu": 432,
						"Unfav": 240
					},
					"N": 2677
				},
				"DC11": {
					"Dist": {
						"Fav": 2225,
						"Neu": 368,
						"Unfav": 101
					},
					"N": 2694
				},
				"BN01": {
					"Dist": {
						"Fav": 2084,
						"Neu": 395,
						"Unfav": 208
					},
					"N": 2687
				},
				"GP09": {
					"Dist": {
						"Fav": 1724,
						"Neu": 456,
						"Unfav": 515
					},
					"N": 2695
				},
				"QS03": {
					"Dist": {
						"Fav": 2280,
						"Neu": 284,
						"Unfav": 99
					},
					"N": 2663
				},
				"OM01": {
					"Dist": {
						"Fav": 2214,
						"Neu": 304,
						"Unfav": 115
					},
					"N": 2633
				},
				"TR04": {
					"Dist": {
						"Fav": 1450,
						"Neu": 644,
						"Unfav": 598
					},
					"N": 2692
				},
				"QS02": {
					"Dist": {
						"Fav": 900,
						"Neu": 401,
						"Unfav": 931
					},
					"N": 2232
				},
				"JS05": {
					"Dist": {
						"Fav": 883,
						"Neu": 466,
						"Unfav": 841
					},
					"N": 2190
				},
				"OM11": {
					"Dist": {
						"Fav": 847,
						"Neu": 467,
						"Unfav": 878
					},
					"N": 2192
				},
				"SD05": {
					"Dist": {
						"Fav": 874,
						"Neu": 472,
						"Unfav": 851
					},
					"N": 2197
				},
				"SD03": {
					"Dist": {
						"Fav": 891,
						"Neu": 446,
						"Unfav": 907
					},
					"N": 2244
				},
				"OS02": {
					"Dist": {
						"Fav": 888,
						"Neu": 484,
						"Unfav": 856
					},
					"N": 2228
				},
				"JS02": {
					"Dist": {
						"Fav": 897,
						"Neu": 436,
						"Unfav": 903
					},
					"N": 2236
				},
				"ST01": {
					"Dist": {
						"Fav": 847,
						"Neu": 456,
						"Unfav": 909
					},
					"N": 2212
				},
				"WL01": {
					"Dist": {
						"Fav": 946,
						"Neu": 442,
						"Unfav": 825
					},
					"N": 2213
				},
				"GP10": {
					"Dist": {
						"Fav": 874,
						"Neu": 427,
						"Unfav": 925
					},
					"N": 2226
				},
				"WE08": {
					"Dist": {
						"Fav": 878,
						"Neu": 485,
						"Unfav": 877
					},
					"N": 2240
				},
				"DM04": {
					"Dist": {
						"Fav": 908,
						"Neu": 452,
						"Unfav": 855
					},
					"N": 2215
				},
				"DM18": {
					"Dist": {
						"Fav": 861,
						"Neu": 440,
						"Unfav": 882
					},
					"N": 2183
				},
				"SP45": {
					"Dist": {
						"Fav": 889,
						"Neu": 447,
						"Unfav": 846
					},
					"N": 2182
				},
				"SV03": {
					"Dist": {
						"Fav": 873,
						"Neu": 423,
						"Unfav": 879
					},
					"N": 2175
				},
				"SR05": {
					"Dist": {
						"Fav": 912,
						"Neu": 430,
						"Unfav": 898
					},
					"N": 2240
				},
				"SR03": {
					"Dist": {
						"Fav": 925,
						"Neu": 420,
						"Unfav": 869
					},
					"N": 2214
				},
				"TW02": {
					"Dist": {
						"Fav": 875,
						"Neu": 432,
						"Unfav": 875
					},
					"N": 2182
				},
				"DC08": {
					"Dist": {
						"Fav": 882,
						"Neu": 425,
						"Unfav": 895
					},
					"N": 2202
				},
				"GP03": {
					"Dist": {
						"Fav": 897,
						"Neu": 451,
						"Unfav": 849
					},
					"N": 2197
				},
				"PE01": {
					"Dist": {
						"Fav": 879,
						"Neu": 441,
						"Unfav": 903
					},
					"N": 2223
				},
				"AV01": {
					"Dist": {
						"Fav": 888,
						"Neu": 468,
						"Unfav": 877
					},
					"N": 2233
				},
				"AV08": {
					"Dist": {
						"Fav": 879,
						"Neu": 433,
						"Unfav": 872
					},
					"N": 2184
				},
				"BN04": {
					"Dist": {
						"Fav": 880,
						"Neu": 418,
						"Unfav": 874
					},
					"N": 2172
				},
				"CP16": {
					"Dist": {
						"Fav": 869,
						"Neu": 435,
						"Unfav": 906
					},
					"N": 2210
				},
				"PE10": {
					"Dist": {
						"Fav": 868,
						"Neu": 425,
						"Unfav": 922
					},
					"N": 2215
				},
				"PE21": {
					"Dist": {
						"Fav": 855,
						"Neu": 429,
						"Unfav": 899
					},
					"N": 2183
				},
				"OM04": {
					"Dist": {
						"Fav": 909,
						"Neu": 467,
						"Unfav": 851
					},
					"N": 2227
				},
				"QS09": {
					"Dist": {
						"Fav": 835,
						"Neu": 485,
						"Unfav": 869
					},
					"N": 2189
				},
				"SP04": {
					"Dist": {
						"Fav": 883,
						"Neu": 447,
						"Unfav": 893
					},
					"N": 2223
				},
				"WK01": {
					"Dist": {
						"Fav": 889,
						"Neu": 462,
						"Unfav": 889
					},
					"N": 2240
				},
				"DI03": {
					"Dist": {
						"Fav": 870,
						"Neu": 432,
						"Unfav": 895
					},
					"N": 2197
				},
				"WK02": {
					"Dist": {
						"Fav": 868,
						"Neu": 458,
						"Unfav": 863
					},
					"N": 2189
				},
				"SP47": {
					"Dist": {
						"Fav": 865,
						"Neu": 435,
						"Unfav": 884
					},
					"N": 2184
				},
				"WS01": {
					"Dist": {
						"Fav": 858,
						"Neu": 489,
						"Unfav": 858
					},
					"N": 2205
				},
				"DC09": {
					"Dist": {
						"Fav": 888,
						"Neu": 446,
						"Unfav": 905
					},
					"N": 2239
				},
				"AV02": {
					"Dist": {
						"Fav": 2151,
						"Neu": 305,
						"Unfav": 239
					},
					"N": 2695
				},
				"DI04": {
					"Dist": {
						"Fav": 2192,
						"Neu": 251,
						"Unfav": 252
					},
					"N": 2695
				},
				"IV05": {
					"Dist": {
						"Fav": 1909,
						"Neu": 458,
						"Unfav": 325
					},
					"N": 2692
				},
				"OM06": {
					"Dist": {
						"Fav": 547,
						"Neu": 534,
						"Unfav": 1070
					},
					"N": 2151
				},
				"NSQ1": {
					"Dist": {
						"Fav": 1149,
						"Neu": 999,
						"Unfav": 549
					},
					"N": 2697
				}
			},
			"654": {
				"RE01": {
					"Dist": {
						"Fav": 2116,
						"Neu": 251,
						"Unfav": 247
					},
					"N": 2614
				},
				"DM02": {
					"Dist": {
						"Fav": 2135,
						"Neu": 236,
						"Unfav": 243
					},
					"N": 2614
				},
				"RC01": {
					"Dist": {
						"Fav": 1878,
						"Neu": 393,
						"Unfav": 339
					},
					"N": 2610
				},
				"TW06": {
					"Dist": {
						"Fav": 2077,
						"Neu": 307,
						"Unfav": 225
					},
					"N": 2609
				},
				"QS01": {
					"Dist": {
						"Fav": 1955,
						"Neu": 377,
						"Unfav": 281
					},
					"N": 2613
				},
				"PE09": {
					"Dist": {
						"Fav": 1955,
						"Neu": 377,
						"Unfav": 281
					},
					"N": 2613
				},
				"AV15": {
					"Dist": {
						"Fav": 2268,
						"Neu": 178,
						"Unfav": 166
					},
					"N": 2612
				},
				"LD04": {
					"Dist": {
						"Fav": 1926,
						"Neu": 351,
						"Unfav": 338
					},
					"N": 2615
				},
				"WS03": {
					"Dist": {
						"Fav": 2151,
						"Neu": 268,
						"Unfav": 195
					},
					"N": 2614
				},
				"TR09": {
					"Dist": {
						"Fav": 2055,
						"Neu": 341,
						"Unfav": 218
					},
					"N": 2614
				},
				"PE06": {
					"Dist": {
						"Fav": 2221,
						"Neu": 224,
						"Unfav": 148
					},
					"N": 2593
				},
				"SD04": {
					"Dist": {
						"Fav": 1915,
						"Neu": 355,
						"Unfav": 342
					},
					"N": 2612
				},
				"PE03": {
					"Dist": {
						"Fav": 2009,
						"Neu": 351,
						"Unfav": 242
					},
					"N": 2602
				},
				"OM12": {
					"Dist": {
						"Fav": 1978,
						"Neu": 339,
						"Unfav": 258
					},
					"N": 2575
				},
				"QS16": {
					"Dist": {
						"Fav": 1713,
						"Neu": 549,
						"Unfav": 340
					},
					"N": 2602
				},
				"LD09": {
					"Dist": {
						"Fav": 1983,
						"Neu": 330,
						"Unfav": 295
					},
					"N": 2608
				},
				"TR01": {
					"Dist": {
						"Fav": 2256,
						"Neu": 237,
						"Unfav": 116
					},
					"N": 2609
				},
				"VC04": {
					"Dist": {
						"Fav": 2269,
						"Neu": 262,
						"Unfav": 76
					},
					"N": 2607
				},
				"GP07": {
					"Dist": {
						"Fav": 1393,
						"Neu": 588,
						"Unfav": 585
					},
					"N": 2566
				},
				"ER01": {
					"Dist": {
						"Fav": 1697,
						"Neu": 491,
						"Unfav": 420
					},
					"N": 2608
				},
				"IV02": {
					"Dist": {
						"Fav": 1643,
						"Neu": 550,
						"Unfav": 413
					},
					"N": 2606
				},
				"CP14": {
					"Dist": {
						"Fav": 1367,
						"Neu": 577,
						"Unfav": 632
					},
					"N": 2576
				},
				"GP12": {
					"Dist": {
						"Fav": 2005,
						"Neu": 366,
						"Unfav": 204
					},
					"N": 2575
				},
				"CP11": {
					"Dist": {
						"Fav": 2213,
						"Neu": 233,
						"Unfav": 66
					},
					"N": 2512
				},
				"WE01": {
					"Dist": {
						"Fav": 2189,
						"Neu": 263,
						"Unfav": 161
					},
					"N": 2613
				},
				"IV04": {
					"Dist": {
						"Fav": 2001,
						"Neu": 431,
						"Unfav": 102
					},
					"N": 2534
				},
				"WE12": {
					"Dist": {
						"Fav": 1880,
						"Neu": 458,
						"Unfav": 243
					},
					"N": 2581
				},
				"SP12": {
					"Dist": {
						"Fav": 1769,
						"Neu": 509,
						"Unfav": 335
					},
					"N": 2613
				},
				"AV09": {
					"Dist": {
						"Fav": 2193,
						"Neu": 308,
						"Unfav": 67
					},
					"N": 2568
				},
				"TW04": {
					"Dist": {
						"Fav": 1406,
						"Neu": 713,
						"Unfav": 233
					},
					"N": 2352
				},
				"CP12": {
					"Dist": {
						"Fav": 1929,
						"Neu": 424,
						"Unfav": 245
					},
					"N": 2598
				},
				"DC11": {
					"Dist": {
						"Fav": 2161,
						"Neu": 370,
						"Unfav": 82
					},
					"N": 2613
				},
				"BN01": {
					"Dist": {
						"Fav": 2009,
						"Neu": 386,
						"Unfav": 213
					},
					"N": 2608
				},
				"GP09": {
					"Dist": {
						"Fav": 1712,
						"Neu": 412,
						"Unfav": 490
					},
					"N": 2614
				},
				"QS03": {
					"Dist": {
						"Fav": 2218,
						"Neu": 281,
						"Unfav": 88
					},
					"N": 2587
				},
				"OM01": {
					"Dist": {
						"Fav": 2099,
						"Neu": 315,
						"Unfav": 126
					},
					"N": 2540
				},
				"TR04": {
					"Dist": {
						"Fav": 1428,
						"Neu": 634,
						"Unfav": 551
					},
					"N": 2613
				},
				"QS02": {
					"Dist": {
						"Fav": 833,
						"Neu": 434,
						"Unfav": 866
					},
					"N": 2133
				},
				"JS05": {
					"Dist": {
						"Fav": 867,
						"Neu": 406,
						"Unfav": 841
					},
					"N": 2114
				},
				"OM11": {
					"Dist": {
						"Fav": 826,
						"Neu": 434,
						"Unfav": 872
					},
					"N": 2132
				},
				"SD05": {
					"Dist": {
						"Fav": 893,
						"Neu": 410,
						"Unfav": 832
					},
					"N": 2135
				},
				"SD03": {
					"Dist": {
						"Fav": 862,
						"Neu": 434,
						"Unfav": 873
					},
					"N": 2169
				},
				"OS02": {
					"Dist": {
						"Fav": 914,
						"Neu": 418,
						"Unfav": 835
					},
					"N": 2167
				},
				"JS02": {
					"Dist": {
						"Fav": 850,
						"Neu": 435,
						"Unfav": 873
					},
					"N": 2158
				},
				"ST01": {
					"Dist": {
						"Fav": 864,
						"Neu": 421,
						"Unfav": 839
					},
					"N": 2124
				},
				"WL01": {
					"Dist": {
						"Fav": 833,
						"Neu": 444,
						"Unfav": 874
					},
					"N": 2151
				},
				"GP10": {
					"Dist": {
						"Fav": 833,
						"Neu": 455,
						"Unfav": 884
					},
					"N": 2172
				},
				"WE08": {
					"Dist": {
						"Fav": 860,
						"Neu": 422,
						"Unfav": 871
					},
					"N": 2153
				},
				"DM04": {
					"Dist": {
						"Fav": 841,
						"Neu": 450,
						"Unfav": 851
					},
					"N": 2142
				},
				"DM18": {
					"Dist": {
						"Fav": 870,
						"Neu": 419,
						"Unfav": 850
					},
					"N": 2139
				},
				"SP45": {
					"Dist": {
						"Fav": 847,
						"Neu": 452,
						"Unfav": 842
					},
					"N": 2141
				},
				"SV03": {
					"Dist": {
						"Fav": 850,
						"Neu": 430,
						"Unfav": 852
					},
					"N": 2132
				},
				"SR05": {
					"Dist": {
						"Fav": 877,
						"Neu": 435,
						"Unfav": 840
					},
					"N": 2152
				},
				"SR03": {
					"Dist": {
						"Fav": 900,
						"Neu": 413,
						"Unfav": 846
					},
					"N": 2159
				},
				"TW02": {
					"Dist": {
						"Fav": 877,
						"Neu": 450,
						"Unfav": 831
					},
					"N": 2158
				},
				"DC08": {
					"Dist": {
						"Fav": 828,
						"Neu": 425,
						"Unfav": 901
					},
					"N": 2154
				},
				"GP03": {
					"Dist": {
						"Fav": 864,
						"Neu": 423,
						"Unfav": 861
					},
					"N": 2148
				},
				"PE01": {
					"Dist": {
						"Fav": 862,
						"Neu": 424,
						"Unfav": 850
					},
					"N": 2136
				},
				"AV01": {
					"Dist": {
						"Fav": 865,
						"Neu": 420,
						"Unfav": 867
					},
					"N": 2152
				},
				"AV08": {
					"Dist": {
						"Fav": 848,
						"Neu": 441,
						"Unfav": 878
					},
					"N": 2167
				},
				"BN04": {
					"Dist": {
						"Fav": 867,
						"Neu": 408,
						"Unfav": 838
					},
					"N": 2113
				},
				"CP16": {
					"Dist": {
						"Fav": 877,
						"Neu": 424,
						"Unfav": 860
					},
					"N": 2161
				},
				"PE10": {
					"Dist": {
						"Fav": 866,
						"Neu": 422,
						"Unfav": 832
					},
					"N": 2120
				},
				"PE21": {
					"Dist": {
						"Fav": 852,
						"Neu": 459,
						"Unfav": 863
					},
					"N": 2174
				},
				"OM04": {
					"Dist": {
						"Fav": 859,
						"Neu": 423,
						"Unfav": 901
					},
					"N": 2183
				},
				"QS09": {
					"Dist": {
						"Fav": 878,
						"Neu": 435,
						"Unfav": 852
					},
					"N": 2165
				},
				"SP04": {
					"Dist": {
						"Fav": 810,
						"Neu": 431,
						"Unfav": 864
					},
					"N": 2105
				},
				"WK01": {
					"Dist": {
						"Fav": 861,
						"Neu": 455,
						"Unfav": 844
					},
					"N": 2160
				},
				"DI03": {
					"Dist": {
						"Fav": 868,
						"Neu": 450,
						"Unfav": 852
					},
					"N": 2170
				},
				"WK02": {
					"Dist": {
						"Fav": 847,
						"Neu": 436,
						"Unfav": 856
					},
					"N": 2139
				},
				"SP47": {
					"Dist": {
						"Fav": 855,
						"Neu": 429,
						"Unfav": 839
					},
					"N": 2123
				},
				"WS01": {
					"Dist": {
						"Fav": 897,
						"Neu": 399,
						"Unfav": 818
					},
					"N": 2114
				},
				"DC09": {
					"Dist": {
						"Fav": 808,
						"Neu": 428,
						"Unfav": 864
					},
					"N": 2100
				},
				"AV02": {
					"Dist": {
						"Fav": 2116,
						"Neu": 251,
						"Unfav": 247
					},
					"N": 2614
				},
				"DI04": {
					"Dist": {
						"Fav": 2135,
						"Neu": 236,
						"Unfav": 243
					},
					"N": 2614
				},
				"IV05": {
					"Dist": {
						"Fav": 1878,
						"Neu": 393,
						"Unfav": 339
					},
					"N": 2610
				},
				"OM06": {
					"Dist": {
						"Fav": 495,
						"Neu": 524,
						"Unfav": 1061
					},
					"N": 2080
				},
				"NSQ1": {
					"Dist": {
						"Fav": 1179,
						"Neu": 838,
						"Unfav": 598
					},
					"N": 2615
				}
			},
			"655": {
				"RE01": {
					"Dist": {
						"Fav": 2138,
						"Neu": 281,
						"Unfav": 184
					},
					"N": 2603
				},
				"DM02": {
					"Dist": {
						"Fav": 2150,
						"Neu": 241,
						"Unfav": 212
					},
					"N": 2603
				},
				"RC01": {
					"Dist": {
						"Fav": 1918,
						"Neu": 392,
						"Unfav": 288
					},
					"N": 2598
				},
				"TW06": {
					"Dist": {
						"Fav": 2100,
						"Neu": 292,
						"Unfav": 204
					},
					"N": 2596
				},
				"QS01": {
					"Dist": {
						"Fav": 1972,
						"Neu": 389,
						"Unfav": 241
					},
					"N": 2602
				},
				"PE09": {
					"Dist": {
						"Fav": 1972,
						"Neu": 389,
						"Unfav": 241
					},
					"N": 2602
				},
				"AV15": {
					"Dist": {
						"Fav": 2279,
						"Neu": 180,
						"Unfav": 141
					},
					"N": 2600
				},
				"LD04": {
					"Dist": {
						"Fav": 1903,
						"Neu": 378,
						"Unfav": 322
					},
					"N": 2603
				},
				"WS03": {
					"Dist": {
						"Fav": 2155,
						"Neu": 247,
						"Unfav": 202
					},
					"N": 2604
				},
				"TR09": {
					"Dist": {
						"Fav": 2035,
						"Neu": 365,
						"Unfav": 202
					},
					"N": 2602
				},
				"PE06": {
					"Dist": {
						"Fav": 2187,
						"Neu": 252,
						"Unfav": 150
					},
					"N": 2589
				},
				"SD04": {
					"Dist": {
						"Fav": 1912,
						"Neu": 377,
						"Unfav": 312
					},
					"N": 2601
				},
				"PE03": {
					"Dist": {
						"Fav": 2022,
						"Neu": 360,
						"Unfav": 208
					},
					"N": 2590
				},
				"OM12": {
					"Dist": {
						"Fav": 2006,
						"Neu": 340,
						"Unfav": 220
					},
					"N": 2566
				},
				"QS16": {
					"Dist": {
						"Fav": 1757,
						"Neu": 522,
						"Unfav": 306
					},
					"N": 2585
				},
				"LD09": {
					"Dist": {
						"Fav": 2032,
						"Neu": 304,
						"Unfav": 259
					},
					"N": 2595
				},
				"TR01": {
					"Dist": {
						"Fav": 2225,
						"Neu": 240,
						"Unfav": 129
					},
					"N": 2594
				},
				"VC04": {
					"Dist": {
						"Fav": 2237,
						"Neu": 279,
						"Unfav": 80
					},
					"N": 2596
				},
				"GP07": {
					"Dist": {
						"Fav": 1429,
						"Neu": 580,
						"Unfav": 548
					},
					"N": 2557
				},
				"ER01": {
					"Dist": {
						"Fav": 1714,
						"Neu": 476,
						"Unfav": 409
					},
					"N": 2599
				},
				"IV02": {
					"Dist": {
						"Fav": 1665,
						"Neu": 548,
						"Unfav": 375
					},
					"N": 2588
				},
				"CP14": {
					"Dist": {
						"Fav": 1373,
						"Neu": 553,
						"Unfav": 648
					},
					"N": 2574
				},
				"GP12": {
					"Dist": {
						"Fav": 2006,
						"Neu": 343,
						"Unfav": 232
					},
					"N": 2581
				},
				"CP11": {
					"Dist": {
						"Fav": 2185,
						"Neu": 255,
						"Unfav": 62
					},
					"N": 2502
				},
				"WE01": {
					"Dist": {
						"Fav": 2195,
						"Neu": 263,
						"Unfav": 141
					},
					"N": 2599
				},
				"IV04": {
					"Dist": {
						"Fav": 1999,
						"Neu": 448,
						"Unfav": 92
					},
					"N": 2539
				},
				"WE12": {
					"Dist": {
						"Fav": 1883,
						"Neu": 454,
						"Unfav": 244
					},
					"N": 2581
				},
				"SP12": {
					"Dist": {
						"Fav": 1799,
						"Neu": 483,
						"Unfav": 317
					},
					"N": 2599
				},
				"AV09": {
					"Dist": {
						"Fav": 2167,
						"Neu": 322,
						"Unfav": 60
					},
					"N": 2549
				},
				"TW04": {
					"Dist": {
						"Fav": 1437,
						"Neu": 676,
						"Unfav": 232
					},
					"N": 2345
				},
				"CP12": {
					"Dist": {
						"Fav": 1936,
						"Neu": 444,
						"Unfav": 209
					},
					"N": 2589
				},
				"DC11": {
					"Dist": {
						"Fav": 2154,
						"Neu": 361,
						"Unfav": 88
					},
					"N": 2603
				},
				"BN01": {
					"Dist": {
						"Fav": 2008,
						"Neu": 392,
						"Unfav": 195
					},
					"N": 2595
				},
				"GP09": {
					"Dist": {
						"Fav": 1731,
						"Neu": 425,
						"Unfav": 445
					},
					"N": 2601
				},
				"QS03": {
					"Dist": {
						"Fav": 2205,
						"Neu": 284,
						"Unfav": 82
					},
					"N": 2571
				},
				"OM01": {
					"Dist": {
						"Fav": 2154,
						"Neu": 292,
						"Unfav": 113
					},
					"N": 2559
				},
				"TR04": {
					"Dist": {
						"Fav": 1436,
						"Neu": 622,
						"Unfav": 540
					},
					"N": 2598
				},
				"QS02": {
					"Dist": {
						"Fav": 875,
						"Neu": 429,
						"Unfav": 837
					},
					"N": 2141
				},
				"JS05": {
					"Dist": {
						"Fav": 844,
						"Neu": 459,
						"Unfav": 810
					},
					"N": 2113
				},
				"OM11": {
					"Dist": {
						"Fav": 861,
						"Neu": 419,
						"Unfav": 886
					},
					"N": 2166
				},
				"SD05": {
					"Dist": {
						"Fav": 846,
						"Neu": 428,
						"Unfav": 874
					},
					"N": 2148
				},
				"SD03": {
					"Dist": {
						"Fav": 828,
						"Neu": 463,
						"Unfav": 845
					},
					"N": 2136
				},
				"OS02": {
					"Dist": {
						"Fav": 851,
						"Neu": 429,
						"Unfav": 874
					},
					"N": 2154
				},
				"JS02": {
					"Dist": {
						"Fav": 850,
						"Neu": 446,
						"Unfav": 828
					},
					"N": 2124
				},
				"ST01": {
					"Dist": {
						"Fav": 898,
						"Neu": 408,
						"Unfav": 859
					},
					"N": 2165
				},
				"WL01": {
					"Dist": {
						"Fav": 790,
						"Neu": 454,
						"Unfav": 882
					},
					"N": 2126
				},
				"GP10": {
					"Dist": {
						"Fav": 868,
						"Neu": 389,
						"Unfav": 899
					},
					"N": 2156
				},
				"WE08": {
					"Dist": {
						"Fav": 841,
						"Neu": 428,
						"Unfav": 886
					},
					"N": 2155
				},
				"DM04": {
					"Dist": {
						"Fav": 825,
						"Neu": 436,
						"Unfav": 892
					},
					"N": 2153
				},
				"DM18": {
					"Dist": {
						"Fav": 859,
						"Neu": 436,
						"Unfav": 805
					},
					"N": 2100
				},
				"SP45": {
					"Dist": {
						"Fav": 866,
						"Neu": 433,
						"Unfav": 817
					},
					"N": 2116
				},
				"SV03": {
					"Dist": {
						"Fav": 818,
						"Neu": 425,
						"Unfav": 884
					},
					"N": 2127
				},
				"SR05": {
					"Dist": {
						"Fav": 872,
						"Neu": 393,
						"Unfav": 879
					},
					"N": 2144
				},
				"SR03": {
					"Dist": {
						"Fav": 830,
						"Neu": 444,
						"Unfav": 861
					},
					"N": 2135
				},
				"TW02": {
					"Dist": {
						"Fav": 853,
						"Neu": 455,
						"Unfav": 870
					},
					"N": 2178
				},
				"DC08": {
					"Dist": {
						"Fav": 821,
						"Neu": 442,
						"Unfav": 891
					},
					"N": 2154
				},
				"GP03": {
					"Dist": {
						"Fav": 924,
						"Neu": 414,
						"Unfav": 819
					},
					"N": 2157
				},
				"PE01": {
					"Dist": {
						"Fav": 872,
						"Neu": 420,
						"Unfav": 839
					},
					"N": 2131
				},
				"AV01": {
					"Dist": {
						"Fav": 839,
						"Neu": 449,
						"Unfav": 843
					},
					"N": 2131
				},
				"AV08": {
					"Dist": {
						"Fav": 896,
						"Neu": 405,
						"Unfav": 830
					},
					"N": 2131
				},
				"BN04": {
					"Dist": {
						"Fav": 886,
						"Neu": 403,
						"Unfav": 831
					},
					"N": 2120
				},
				"CP16": {
					"Dist": {
						"Fav": 834,
						"Neu": 410,
						"Unfav": 848
					},
					"N": 2092
				},
				"PE10": {
					"Dist": {
						"Fav": 883,
						"Neu": 423,
						"Unfav": 809
					},
					"N": 2115
				},
				"PE21": {
					"Dist": {
						"Fav": 888,
						"Neu": 441,
						"Unfav": 814
					},
					"N": 2143
				},
				"OM04": {
					"Dist": {
						"Fav": 855,
						"Neu": 398,
						"Unfav": 859
					},
					"N": 2112
				},
				"QS09": {
					"Dist": {
						"Fav": 829,
						"Neu": 445,
						"Unfav": 856
					},
					"N": 2130
				},
				"SP04": {
					"Dist": {
						"Fav": 816,
						"Neu": 455,
						"Unfav": 820
					},
					"N": 2091
				},
				"WK01": {
					"Dist": {
						"Fav": 808,
						"Neu": 478,
						"Unfav": 849
					},
					"N": 2135
				},
				"DI03": {
					"Dist": {
						"Fav": 825,
						"Neu": 409,
						"Unfav": 895
					},
					"N": 2129
				},
				"WK02": {
					"Dist": {
						"Fav": 827,
						"Neu": 427,
						"Unfav": 835
					},
					"N": 2089
				},
				"SP47": {
					"Dist": {
						"Fav": 838,
						"Neu": 456,
						"Unfav": 808
					},
					"N": 2102
				},
				"WS01": {
					"Dist": {
						"Fav": 859,
						"Neu": 377,
						"Unfav": 898
					},
					"N": 2134
				},
				"DC09": {
					"Dist": {
						"Fav": 878,
						"Neu": 435,
						"Unfav": 834
					},
					"N": 2147
				},
				"AV02": {
					"Dist": {
						"Fav": 2138,
						"Neu": 281,
						"Unfav": 184
					},
					"N": 2603
				},
				"DI04": {
					"Dist": {
						"Fav": 2150,
						"Neu": 241,
						"Unfav": 212
					},
					"N": 2603
				},
				"IV05": {
					"Dist": {
						"Fav": 1918,
						"Neu": 392,
						"Unfav": 288
					},
					"N": 2598
				},
				"OM06": {
					"Dist": {
						"Fav": 518,
						"Neu": 516,
						"Unfav": 1012
					},
					"N": 2046
				},
				"NSQ1": {
					"Dist": {
						"Fav": 1153,
						"Neu": 917,
						"Unfav": 534
					},
					"N": 2604
				}
			},
			"656": {
				"RE01": {
					"Dist": {
						"Fav": 2050,
						"Neu": 273,
						"Unfav": 253
					},
					"N": 2576
				},
				"DM02": {
					"Dist": {
						"Fav": 2081,
						"Neu": 258,
						"Unfav": 238
					},
					"N": 2577
				},
				"RC01": {
					"Dist": {
						"Fav": 1853,
						"Neu": 394,
						"Unfav": 325
					},
					"N": 2572
				},
				"TW06": {
					"Dist": {
						"Fav": 2053,
						"Neu": 304,
						"Unfav": 220
					},
					"N": 2577
				},
				"QS01": {
					"Dist": {
						"Fav": 1889,
						"Neu": 383,
						"Unfav": 304
					},
					"N": 2576
				},
				"PE09": {
					"Dist": {
						"Fav": 1889,
						"Neu": 383,
						"Unfav": 304
					},
					"N": 2576
				},
				"AV15": {
					"Dist": {
						"Fav": 2239,
						"Neu": 182,
						"Unfav": 153
					},
					"N": 2574
				},
				"LD04": {
					"Dist": {
						"Fav": 1865,
						"Neu": 362,
						"Unfav": 349
					},
					"N": 2576
				},
				"WS03": {
					"Dist": {
						"Fav": 2144,
						"Neu": 243,
						"Unfav": 187
					},
					"N": 2574
				},
				"TR09": {
					"Dist": {
						"Fav": 2034,
						"Neu": 324,
						"Unfav": 214
					},
					"N": 2572
				},
				"PE06": {
					"Dist": {
						"Fav": 2159,
						"Neu": 232,
						"Unfav": 162
					},
					"N": 2553
				},
				"SD04": {
					"Dist": {
						"Fav": 1857,
						"Neu": 374,
						"Unfav": 341
					},
					"N": 2572
				},
				"PE03": {
					"Dist": {
						"Fav": 1996,
						"Neu": 345,
						"Unfav": 221
					},
					"N": 2562
				},
				"OM12": {
					"Dist": {
						"Fav": 1939,
						"Neu": 357,
						"Unfav": 241
					},
					"N": 2537
				},
				"QS16": {
					"Dist": {
						"Fav": 1705,
						"Neu": 544,
						"Unfav": 315
					},
					"N": 2564
				},
				"LD09": {
					"Dist": {
						"Fav": 1949,
						"Neu": 341,
						"Unfav": 276
					},
					"N": 2566
				},
				"TR01": {
					"Dist": {
						"Fav": 2181,
						"Neu": 264,
						"Unfav": 129
					},
					"N": 2574
				},
				"VC04": {
					"Dist": {
						"Fav": 2193,
						"Neu": 285,
						"Unfav": 95
					},
					"N": 2573
				},
				"GP07": {
					"Dist": {
						"Fav": 1328,
						"Neu": 589,
						"Unfav": 604
					},
					"N": 2521
				},
				"ER01": {
					"Dist": {
						"Fav": 1654,
						"Neu": 499,
						"Unfav": 416
					},
					"N": 2569
				},
				"IV02": {
					"Dist": {
						"Fav": 1599,
						"Neu": 527,
						"Unfav": 430
					},
					"N": 2556
				},
				"CP14": {
					"Dist": {
						"Fav": 1351,
						"Neu": 565,
						"Unfav": 625
					},
					"N": 2541
				},
				"GP12": {
					"Dist": {
						"Fav": 1954,
						"Neu": 366,
						"Unfav": 216
					},
					"N": 2536
				},
				"CP11": {
					"Dist": {
						"Fav": 2129,
						"Neu": 271,
						"Unfav": 57
					},
					"N": 2457
				},
				"WE01": {
					"Dist": {
						"Fav": 2136,
						"Neu": 271,
						"Unfav": 167
					},
					"N": 2574
				},
				"IV04": {
					"Dist": {
						"Fav": 1980,
						"Neu": 420,
						"Unfav": 116
					},
					"N": 2516
				},
				"WE12": {
					"Dist": {
						"Fav": 1851,
						"Neu": 440,
						"Unfav": 260
					},
					"N": 2551
				},
				"SP12": {
					"Dist": {
						"Fav": 1749,
						"Neu": 523,
						"Unfav": 300
					},
					"N": 2572
				},
				"AV09": {
					"Dist": {
						"Fav": 2117,
						"Neu": 334,
						"Unfav": 68
					},
					"N": 2519
				},
				"TW04": {
					"Dist": {
						"Fav": 1410,
						"Neu": 646,
						"Unfav": 264
					},
					"N": 2320
				},
				"CP12": {
					"Dist": {
						"Fav": 1871,
						"Neu": 446,
						"Unfav": 243
					},
					"N": 2560
				},
				"DC11": {
					"Dist": {
						"Fav": 2136,
						"Neu": 332,
						"Unfav": 104
					},
					"N": 2572
				},
				"BN01": {
					"Dist": {
						"Fav": 1948,
						"Neu": 415,
						"Unfav": 207
					},
					"N": 2570
				},
				"GP09": {
					"Dist": {
						"Fav": 1679,
						"Neu": 442,
						"Unfav": 452
					},
					"N": 2573
				},
				"QS03": {
					"Dist": {
						"Fav": 2178,
						"Neu": 265,
						"Unfav": 102
					},
					"N": 2545
				},
				"OM01": {
					"Dist": {
						"Fav": 2051,
						"Neu": 328,
						"Unfav": 123
					},
					"N": 2502
				},
				"TR04": {
					"Dist": {
						"Fav": 1370,
						"Neu": 630,
						"Unfav": 572
					},
					"N": 2572
				},
				"QS02": {
					"Dist": {
						"Fav": 878,
						"Neu": 415,
						"Unfav": 794
					},
					"N": 2087
				},
				"JS05": {
					"Dist": {
						"Fav": 887,
						"Neu": 423,
						"Unfav": 844
					},
					"N": 2154
				},
				"OM11": {
					"Dist": {
						"Fav": 891,
						"Neu": 399,
						"Unfav": 859
					},
					"N": 2149
				},
				"SD05": {
					"Dist": {
						"Fav": 855,
						"Neu": 443,
						"Unfav": 812
					},
					"N": 2110
				},
				"SD03": {
					"Dist": {
						"Fav": 875,
						"Neu": 407,
						"Unfav": 856
					},
					"N": 2138
				},
				"OS02": {
					"Dist": {
						"Fav": 848,
						"Neu": 416,
						"Unfav": 817
					},
					"N": 2081
				},
				"JS02": {
					"Dist": {
						"Fav": 895,
						"Neu": 378,
						"Unfav": 839
					},
					"N": 2112
				},
				"ST01": {
					"Dist": {
						"Fav": 806,
						"Neu": 448,
						"Unfav": 867
					},
					"N": 2121
				},
				"WL01": {
					"Dist": {
						"Fav": 807,
						"Neu": 457,
						"Unfav": 851
					},
					"N": 2115
				},
				"GP10": {
					"Dist": {
						"Fav": 815,
						"Neu": 425,
						"Unfav": 867
					},
					"N": 2107
				},
				"WE08": {
					"Dist": {
						"Fav": 876,
						"Neu": 414,
						"Unfav": 810
					},
					"N": 2100
				},
				"DM04": {
					"Dist": {
						"Fav": 886,
						"Neu": 410,
						"Unfav": 810
					},
					"N": 2106
				},
				"DM18": {
					"Dist": {
						"Fav": 824,
						"Neu": 433,
						"Unfav": 855
					},
					"N": 2112
				},
				"SP45": {
					"Dist": {
						"Fav": 869,
						"Neu": 420,
						"Unfav": 815
					},
					"N": 2104
				},
				"SV03": {
					"Dist": {
						"Fav": 857,
						"Neu": 420,
						"Unfav": 840
					},
					"N": 2117
				},
				"SR05": {
					"Dist": {
						"Fav": 828,
						"Neu": 426,
						"Unfav": 880
					},
					"N": 2134
				},
				"SR03": {
					"Dist": {
						"Fav": 820,
						"Neu": 409,
						"Unfav": 861
					},
					"N": 2090
				},
				"TW02": {
					"Dist": {
						"Fav": 806,
						"Neu": 457,
						"Unfav": 848
					},
					"N": 2111
				},
				"DC08": {
					"Dist": {
						"Fav": 831,
						"Neu": 411,
						"Unfav": 843
					},
					"N": 2085
				},
				"GP03": {
					"Dist": {
						"Fav": 863,
						"Neu": 415,
						"Unfav": 816
					},
					"N": 2094
				},
				"PE01": {
					"Dist": {
						"Fav": 820,
						"Neu": 433,
						"Unfav": 853
					},
					"N": 2106
				},
				"AV01": {
					"Dist": {
						"Fav": 849,
						"Neu": 453,
						"Unfav": 824
					},
					"N": 2126
				},
				"AV08": {
					"Dist": {
						"Fav": 821,
						"Neu": 455,
						"Unfav": 848
					},
					"N": 2124
				},
				"BN04": {
					"Dist": {
						"Fav": 865,
						"Neu": 405,
						"Unfav": 852
					},
					"N": 2122
				},
				"CP16": {
					"Dist": {
						"Fav": 849,
						"Neu": 393,
						"Unfav": 827
					},
					"N": 2069
				},
				"PE10": {
					"Dist": {
						"Fav": 880,
						"Neu": 440,
						"Unfav": 796
					},
					"N": 2116
				},
				"PE21": {
					"Dist": {
						"Fav": 867,
						"Neu": 406,
						"Unfav": 862
					},
					"N": 2135
				},
				"OM04": {
					"Dist": {
						"Fav": 863,
						"Neu": 435,
						"Unfav": 798
					},
					"N": 2096
				},
				"QS09": {
					"Dist": {
						"Fav": 842,
						"Neu": 387,
						"Unfav": 852
					},
					"N": 2081
				},
				"SP04": {
					"Dist": {
						"Fav": 819,
						"Neu": 433,
						"Unfav": 848
					},
					"N": 2100
				},
				"WK01": {
					"Dist": {
						"Fav": 813,
						"Neu": 396,
						"Unfav": 858
					},
					"N": 2067
				},
				"DI03": {
					"Dist": {
						"Fav": 835,
						"Neu": 438,
						"Unfav": 835
					},
					"N": 2108
				},
				"WK02": {
					"Dist": {
						"Fav": 826,
						"Neu": 435,
						"Unfav": 867
					},
					"N": 2128
				},
				"SP47": {
					"Dist": {
						"Fav": 868,
						"Neu": 418,
						"Unfav": 810
					},
					"N": 2096
				},
				"WS01": {
					"Dist": {
						"Fav": 831,
						"Neu": 408,
						"Unfav": 836
					},
					"N": 2075
				},
				"DC09": {
					"Dist": {
						"Fav": 861,
						"Neu": 401,
						"Unfav": 855
					},
					"N": 2117
				},
				"AV02": {
					"Dist": {
						"Fav": 2050,
						"Neu": 273,
						"Unfav": 253
					},
					"N": 2576
				},
				"DI04": {
					"Dist": {
						"Fav": 2081,
						"Neu": 258,
						"Unfav": 238
					},
					"N": 2577
				},
				"IV05": {
					"Dist": {
						"Fav": 1853,
						"Neu": 394,
						"Unfav": 325
					},
					"N": 2572
				},
				"OM06": {
					"Dist": {
						"Fav": 494,
						"Neu": 499,
						"Unfav": 1015
					},
					"N": 2008
				},
				"NSQ1": {
					"Dist": {
						"Fav": 1089,
						"Neu": 908,
						"Unfav": 581
					},
					"N": 2578
				}
			}
		},
		"ITEMSX.2018.389.0.AGE": {
			"651": {
				"RE01": {
					"Dist": {
						"Fav": 1549,
						"Neu": 239,
						"Unfav": 211
					},
					"N": 1999
				},
				"DM02": {
					"Dist": {
						"Fav": 1526,
						"Neu": 243,
						"Unfav": 230
					},
					"N": 1999
				},
				"RC01": {
					"Dist": {
						"Fav": 313,
						"Neu": 87,
						"Unfav": 80
					},
					"N": 480
				},
				"TW06": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"QS01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"PE09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"AV15": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"LD04": {
					"Dist": {
						"Fav": 1559,
						"Neu": 253,
						"Unfav": 184
					},
					"N": 1996
				},
				"WS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"PE06": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"SD04": {
					"Dist": {
						"Fav": 201,
						"Neu": 70,
						"Unfav": 67
					},
					"N": 338
				},
				"PE03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM12": {
					"Dist": {
						"Fav": 109,
						"Neu": 17,
						"Unfav": 15
					},
					"N": 141
				},
				"QS16": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"LD09": {
					"Dist": {
						"Fav": 276,
						"Neu": 24,
						"Unfav": 39
					},
					"N": 339
				},
				"TR01": {
					"Dist": {
						"Fav": 245,
						"Neu": 54,
						"Unfav": 39
					},
					"N": 338
				},
				"VC04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"GP07": {
					"Dist": {
						"Fav": 76,
						"Neu": 28,
						"Unfav": 36
					},
					"N": 140
				},
				"ER01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"IV02": {
					"Dist": {
						"Fav": 191,
						"Neu": 56,
						"Unfav": 92
					},
					"N": 339
				},
				"CP14": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"GP12": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"CP11": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"WE01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"IV04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"WE12": {
					"Dist": {
						"Fav": 542,
						"Neu": 156,
						"Unfav": 116
					},
					"N": 814
				},
				"SP12": {
					"Dist": {
						"Fav": 1288,
						"Neu": 426,
						"Unfav": 283
					},
					"N": 1997
				},
				"AV09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TW04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"CP12": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DC11": {
					"Dist": {
						"Fav": 1634,
						"Neu": 272,
						"Unfav": 93
					},
					"N": 1999
				},
				"BN01": {
					"Dist": {
						"Fav": 1550,
						"Neu": 278,
						"Unfav": 169
					},
					"N": 1997
				},
				"GP09": {
					"Dist": {
						"Fav": 1120,
						"Neu": 344,
						"Unfav": 535
					},
					"N": 1999
				},
				"QS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR04": {
					"Dist": {
						"Fav": 986,
						"Neu": 359,
						"Unfav": 655
					},
					"N": 2000
				},
				"QS02": {
					"Dist": {
						"Fav": 626,
						"Neu": 278,
						"Unfav": 606
					},
					"N": 1510
				},
				"JS05": {
					"Dist": {
						"Fav": 609,
						"Neu": 301,
						"Unfav": 607
					},
					"N": 1517
				},
				"OM11": {
					"Dist": {
						"Fav": 643,
						"Neu": 303,
						"Unfav": 605
					},
					"N": 1551
				},
				"SD05": {
					"Dist": {
						"Fav": 657,
						"Neu": 296,
						"Unfav": 577
					},
					"N": 1530
				},
				"SD03": {
					"Dist": {
						"Fav": 629,
						"Neu": 305,
						"Unfav": 595
					},
					"N": 1529
				},
				"OS02": {
					"Dist": {
						"Fav": 595,
						"Neu": 350,
						"Unfav": 603
					},
					"N": 1548
				},
				"JS02": {
					"Dist": {
						"Fav": 632,
						"Neu": 279,
						"Unfav": 630
					},
					"N": 1541
				},
				"ST01": {
					"Dist": {
						"Fav": 610,
						"Neu": 314,
						"Unfav": 599
					},
					"N": 1523
				},
				"WL01": {
					"Dist": {
						"Fav": 618,
						"Neu": 315,
						"Unfav": 602
					},
					"N": 1535
				},
				"GP10": {
					"Dist": {
						"Fav": 604,
						"Neu": 312,
						"Unfav": 642
					},
					"N": 1558
				},
				"WE08": {
					"Dist": {
						"Fav": 611,
						"Neu": 311,
						"Unfav": 621
					},
					"N": 1543
				},
				"DM04": {
					"Dist": {
						"Fav": 627,
						"Neu": 299,
						"Unfav": 605
					},
					"N": 1531
				},
				"DM18": {
					"Dist": {
						"Fav": 618,
						"Neu": 308,
						"Unfav": 615
					},
					"N": 1541
				},
				"SP45": {
					"Dist": {
						"Fav": 607,
						"Neu": 331,
						"Unfav": 600
					},
					"N": 1538
				},
				"SV03": {
					"Dist": {
						"Fav": 589,
						"Neu": 296,
						"Unfav": 621
					},
					"N": 1506
				},
				"SR05": {
					"Dist": {
						"Fav": 601,
						"Neu": 308,
						"Unfav": 641
					},
					"N": 1550
				},
				"SR03": {
					"Dist": {
						"Fav": 636,
						"Neu": 307,
						"Unfav": 615
					},
					"N": 1558
				},
				"TW02": {
					"Dist": {
						"Fav": 610,
						"Neu": 330,
						"Unfav": 608
					},
					"N": 1548
				},
				"DC08": {
					"Dist": {
						"Fav": 595,
						"Neu": 286,
						"Unfav": 660
					},
					"N": 1541
				},
				"GP03": {
					"Dist": {
						"Fav": 629,
						"Neu": 289,
						"Unfav": 635
					},
					"N": 1553
				},
				"PE01": {
					"Dist": {
						"Fav": 620,
						"Neu": 274,
						"Unfav": 646
					},
					"N": 1540
				},
				"AV01": {
					"Dist": {
						"Fav": 655,
						"Neu": 295,
						"Unfav": 601
					},
					"N": 1551
				},
				"AV08": {
					"Dist": {
						"Fav": 611,
						"Neu": 304,
						"Unfav": 642
					},
					"N": 1557
				},
				"BN04": {
					"Dist": {
						"Fav": 630,
						"Neu": 316,
						"Unfav": 598
					},
					"N": 1544
				},
				"CP16": {
					"Dist": {
						"Fav": 598,
						"Neu": 319,
						"Unfav": 614
					},
					"N": 1531
				},
				"PE10": {
					"Dist": {
						"Fav": 590,
						"Neu": 306,
						"Unfav": 636
					},
					"N": 1532
				},
				"PE21": {
					"Dist": {
						"Fav": 630,
						"Neu": 298,
						"Unfav": 595
					},
					"N": 1523
				},
				"OM04": {
					"Dist": {
						"Fav": 607,
						"Neu": 299,
						"Unfav": 609
					},
					"N": 1515
				},
				"QS09": {
					"Dist": {
						"Fav": 598,
						"Neu": 316,
						"Unfav": 634
					},
					"N": 1548
				},
				"SP04": {
					"Dist": {
						"Fav": 653,
						"Neu": 302,
						"Unfav": 590
					},
					"N": 1545
				},
				"WK01": {
					"Dist": {
						"Fav": 609,
						"Neu": 302,
						"Unfav": 601
					},
					"N": 1512
				},
				"DI03": {
					"Dist": {
						"Fav": 603,
						"Neu": 321,
						"Unfav": 611
					},
					"N": 1535
				},
				"WK02": {
					"Dist": {
						"Fav": 611,
						"Neu": 263,
						"Unfav": 652
					},
					"N": 1526
				},
				"SP47": {
					"Dist": {
						"Fav": 619,
						"Neu": 325,
						"Unfav": 624
					},
					"N": 1568
				},
				"WS01": {
					"Dist": {
						"Fav": 626,
						"Neu": 320,
						"Unfav": 593
					},
					"N": 1539
				},
				"DC09": {
					"Dist": {
						"Fav": 614,
						"Neu": 303,
						"Unfav": 624
					},
					"N": 1541
				},
				"AV02": {
					"Dist": {
						"Fav": 1549,
						"Neu": 239,
						"Unfav": 211
					},
					"N": 1999
				},
				"DI04": {
					"Dist": {
						"Fav": 1526,
						"Neu": 243,
						"Unfav": 230
					},
					"N": 1999
				},
				"IV05": {
					"Dist": {
						"Fav": 313,
						"Neu": 87,
						"Unfav": 80
					},
					"N": 480
				},
				"OM06": {
					"Dist": {
						"Fav": 379,
						"Neu": 357,
						"Unfav": 737
					},
					"N": 1473
				},
				"NSQ1": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				}
			},
			"652": {
				"RE01": {
					"Dist": {
						"Fav": 1548,
						"Neu": 270,
						"Unfav": 199
					},
					"N": 2017
				},
				"DM02": {
					"Dist": {
						"Fav": 1544,
						"Neu": 249,
						"Unfav": 224
					},
					"N": 2017
				},
				"RC01": {
					"Dist": {
						"Fav": 314,
						"Neu": 116,
						"Unfav": 90
					},
					"N": 520
				},
				"TW06": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"QS01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"PE09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"AV15": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"LD04": {
					"Dist": {
						"Fav": 1564,
						"Neu": 256,
						"Unfav": 199
					},
					"N": 2019
				},
				"WS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"PE06": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"SD04": {
					"Dist": {
						"Fav": 190,
						"Neu": 72,
						"Unfav": 79
					},
					"N": 341
				},
				"PE03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM12": {
					"Dist": {
						"Fav": 132,
						"Neu": 24,
						"Unfav": 17
					},
					"N": 173
				},
				"QS16": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"LD09": {
					"Dist": {
						"Fav": 266,
						"Neu": 21,
						"Unfav": 35
					},
					"N": 322
				},
				"TR01": {
					"Dist": {
						"Fav": 247,
						"Neu": 48,
						"Unfav": 46
					},
					"N": 341
				},
				"VC04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"GP07": {
					"Dist": {
						"Fav": 92,
						"Neu": 42,
						"Unfav": 42
					},
					"N": 176
				},
				"ER01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"IV02": {
					"Dist": {
						"Fav": 190,
						"Neu": 49,
						"Unfav": 83
					},
					"N": 322
				},
				"CP14": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"GP12": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"CP11": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"WE01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"IV04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"WE12": {
					"Dist": {
						"Fav": 547,
						"Neu": 179,
						"Unfav": 109
					},
					"N": 835
				},
				"SP12": {
					"Dist": {
						"Fav": 1326,
						"Neu": 414,
						"Unfav": 279
					},
					"N": 2019
				},
				"AV09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TW04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"CP12": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DC11": {
					"Dist": {
						"Fav": 1638,
						"Neu": 304,
						"Unfav": 74
					},
					"N": 2016
				},
				"BN01": {
					"Dist": {
						"Fav": 1538,
						"Neu": 310,
						"Unfav": 168
					},
					"N": 2016
				},
				"GP09": {
					"Dist": {
						"Fav": 1150,
						"Neu": 372,
						"Unfav": 494
					},
					"N": 2016
				},
				"QS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR04": {
					"Dist": {
						"Fav": 1016,
						"Neu": 393,
						"Unfav": 608
					},
					"N": 2017
				},
				"QS02": {
					"Dist": {
						"Fav": 594,
						"Neu": 312,
						"Unfav": 639
					},
					"N": 1545
				},
				"JS05": {
					"Dist": {
						"Fav": 612,
						"Neu": 323,
						"Unfav": 639
					},
					"N": 1574
				},
				"OM11": {
					"Dist": {
						"Fav": 625,
						"Neu": 328,
						"Unfav": 602
					},
					"N": 1555
				},
				"SD05": {
					"Dist": {
						"Fav": 632,
						"Neu": 325,
						"Unfav": 606
					},
					"N": 1563
				},
				"SD03": {
					"Dist": {
						"Fav": 624,
						"Neu": 303,
						"Unfav": 653
					},
					"N": 1580
				},
				"OS02": {
					"Dist": {
						"Fav": 638,
						"Neu": 301,
						"Unfav": 614
					},
					"N": 1553
				},
				"JS02": {
					"Dist": {
						"Fav": 627,
						"Neu": 326,
						"Unfav": 599
					},
					"N": 1552
				},
				"ST01": {
					"Dist": {
						"Fav": 619,
						"Neu": 330,
						"Unfav": 627
					},
					"N": 1576
				},
				"WL01": {
					"Dist": {
						"Fav": 654,
						"Neu": 286,
						"Unfav": 621
					},
					"N": 1561
				},
				"GP10": {
					"Dist": {
						"Fav": 622,
						"Neu": 319,
						"Unfav": 630
					},
					"N": 1571
				},
				"WE08": {
					"Dist": {
						"Fav": 654,
						"Neu": 324,
						"Unfav": 601
					},
					"N": 1579
				},
				"DM04": {
					"Dist": {
						"Fav": 617,
						"Neu": 270,
						"Unfav": 650
					},
					"N": 1537
				},
				"DM18": {
					"Dist": {
						"Fav": 637,
						"Neu": 303,
						"Unfav": 612
					},
					"N": 1552
				},
				"SP45": {
					"Dist": {
						"Fav": 640,
						"Neu": 341,
						"Unfav": 614
					},
					"N": 1595
				},
				"SV03": {
					"Dist": {
						"Fav": 642,
						"Neu": 293,
						"Unfav": 620
					},
					"N": 1555
				},
				"SR05": {
					"Dist": {
						"Fav": 630,
						"Neu": 315,
						"Unfav": 617
					},
					"N": 1562
				},
				"SR03": {
					"Dist": {
						"Fav": 611,
						"Neu": 327,
						"Unfav": 615
					},
					"N": 1553
				},
				"TW02": {
					"Dist": {
						"Fav": 630,
						"Neu": 357,
						"Unfav": 594
					},
					"N": 1581
				},
				"DC08": {
					"Dist": {
						"Fav": 637,
						"Neu": 288,
						"Unfav": 629
					},
					"N": 1554
				},
				"GP03": {
					"Dist": {
						"Fav": 654,
						"Neu": 323,
						"Unfav": 604
					},
					"N": 1581
				},
				"PE01": {
					"Dist": {
						"Fav": 641,
						"Neu": 361,
						"Unfav": 625
					},
					"N": 1627
				},
				"AV01": {
					"Dist": {
						"Fav": 628,
						"Neu": 297,
						"Unfav": 646
					},
					"N": 1571
				},
				"AV08": {
					"Dist": {
						"Fav": 593,
						"Neu": 308,
						"Unfav": 667
					},
					"N": 1568
				},
				"BN04": {
					"Dist": {
						"Fav": 642,
						"Neu": 319,
						"Unfav": 582
					},
					"N": 1543
				},
				"CP16": {
					"Dist": {
						"Fav": 628,
						"Neu": 311,
						"Unfav": 620
					},
					"N": 1559
				},
				"PE10": {
					"Dist": {
						"Fav": 627,
						"Neu": 316,
						"Unfav": 636
					},
					"N": 1579
				},
				"PE21": {
					"Dist": {
						"Fav": 609,
						"Neu": 328,
						"Unfav": 630
					},
					"N": 1567
				},
				"OM04": {
					"Dist": {
						"Fav": 589,
						"Neu": 304,
						"Unfav": 670
					},
					"N": 1563
				},
				"QS09": {
					"Dist": {
						"Fav": 612,
						"Neu": 329,
						"Unfav": 646
					},
					"N": 1587
				},
				"SP04": {
					"Dist": {
						"Fav": 642,
						"Neu": 313,
						"Unfav": 622
					},
					"N": 1577
				},
				"WK01": {
					"Dist": {
						"Fav": 655,
						"Neu": 275,
						"Unfav": 624
					},
					"N": 1554
				},
				"DI03": {
					"Dist": {
						"Fav": 615,
						"Neu": 302,
						"Unfav": 644
					},
					"N": 1561
				},
				"WK02": {
					"Dist": {
						"Fav": 618,
						"Neu": 335,
						"Unfav": 625
					},
					"N": 1578
				},
				"SP47": {
					"Dist": {
						"Fav": 620,
						"Neu": 322,
						"Unfav": 632
					},
					"N": 1574
				},
				"WS01": {
					"Dist": {
						"Fav": 651,
						"Neu": 307,
						"Unfav": 591
					},
					"N": 1549
				},
				"DC09": {
					"Dist": {
						"Fav": 665,
						"Neu": 298,
						"Unfav": 617
					},
					"N": 1580
				},
				"AV02": {
					"Dist": {
						"Fav": 1548,
						"Neu": 270,
						"Unfav": 199
					},
					"N": 2017
				},
				"DI04": {
					"Dist": {
						"Fav": 1544,
						"Neu": 249,
						"Unfav": 224
					},
					"N": 2017
				},
				"IV05": {
					"Dist": {
						"Fav": 314,
						"Neu": 116,
						"Unfav": 90
					},
					"N": 520
				},
				"OM06": {
					"Dist": {
						"Fav": 378,
						"Neu": 417,
						"Unfav": 733
					},
					"N": 1528
				},
				"NSQ1": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				}
			},
			"653": {
				"RE01": {
					"Dist": {
						"Fav": 1487,
						"Neu": 269,
						"Unfav": 223
					},
					"N": 1979
				},
				"DM02": {
					"Dist": {
						"Fav": 1500,
						"Neu": 246,
						"Unfav": 234
					},
					"N": 1980
				},
				"RC01": {
					"Dist": {
						"Fav": 285,
						"Neu": 102,
						"Unfav": 87
					},
					"N": 474
				},
				"TW06": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"QS01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"PE09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"AV15": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"LD04": {
					"Dist": {
						"Fav": 1539,
						"Neu": 257,
						"Unfav": 184
					},
					"N": 1980
				},
				"WS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"PE06": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"SD04": {
					"Dist": {
						"Fav": 200,
						"Neu": 64,
						"Unfav": 62
					},
					"N": 326
				},
				"PE03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM12": {
					"Dist": {
						"Fav": 125,
						"Neu": 11,
						"Unfav": 12
					},
					"N": 148
				},
				"QS16": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"LD09": {
					"Dist": {
						"Fav": 253,
						"Neu": 29,
						"Unfav": 33
					},
					"N": 315
				},
				"TR01": {
					"Dist": {
						"Fav": 234,
						"Neu": 43,
						"Unfav": 49
					},
					"N": 326
				},
				"VC04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"GP07": {
					"Dist": {
						"Fav": 78,
						"Neu": 40,
						"Unfav": 29
					},
					"N": 147
				},
				"ER01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"IV02": {
					"Dist": {
						"Fav": 180,
						"Neu": 55,
						"Unfav": 79
					},
					"N": 314
				},
				"CP14": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"GP12": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"CP11": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"WE01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"IV04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"WE12": {
					"Dist": {
						"Fav": 501,
						"Neu": 165,
						"Unfav": 119
					},
					"N": 785
				},
				"SP12": {
					"Dist": {
						"Fav": 1274,
						"Neu": 428,
						"Unfav": 279
					},
					"N": 1981
				},
				"AV09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TW04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"CP12": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DC11": {
					"Dist": {
						"Fav": 1593,
						"Neu": 303,
						"Unfav": 82
					},
					"N": 1978
				},
				"BN01": {
					"Dist": {
						"Fav": 1494,
						"Neu": 291,
						"Unfav": 189
					},
					"N": 1974
				},
				"GP09": {
					"Dist": {
						"Fav": 1082,
						"Neu": 388,
						"Unfav": 509
					},
					"N": 1979
				},
				"QS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR04": {
					"Dist": {
						"Fav": 939,
						"Neu": 412,
						"Unfav": 629
					},
					"N": 1980
				},
				"QS02": {
					"Dist": {
						"Fav": 599,
						"Neu": 265,
						"Unfav": 644
					},
					"N": 1508
				},
				"JS05": {
					"Dist": {
						"Fav": 586,
						"Neu": 300,
						"Unfav": 616
					},
					"N": 1502
				},
				"OM11": {
					"Dist": {
						"Fav": 570,
						"Neu": 326,
						"Unfav": 627
					},
					"N": 1523
				},
				"SD05": {
					"Dist": {
						"Fav": 589,
						"Neu": 329,
						"Unfav": 634
					},
					"N": 1552
				},
				"SD03": {
					"Dist": {
						"Fav": 613,
						"Neu": 311,
						"Unfav": 610
					},
					"N": 1534
				},
				"OS02": {
					"Dist": {
						"Fav": 599,
						"Neu": 318,
						"Unfav": 601
					},
					"N": 1518
				},
				"JS02": {
					"Dist": {
						"Fav": 619,
						"Neu": 270,
						"Unfav": 632
					},
					"N": 1521
				},
				"ST01": {
					"Dist": {
						"Fav": 615,
						"Neu": 295,
						"Unfav": 619
					},
					"N": 1529
				},
				"WL01": {
					"Dist": {
						"Fav": 620,
						"Neu": 343,
						"Unfav": 577
					},
					"N": 1540
				},
				"GP10": {
					"Dist": {
						"Fav": 561,
						"Neu": 317,
						"Unfav": 646
					},
					"N": 1524
				},
				"WE08": {
					"Dist": {
						"Fav": 609,
						"Neu": 328,
						"Unfav": 610
					},
					"N": 1547
				},
				"DM04": {
					"Dist": {
						"Fav": 613,
						"Neu": 288,
						"Unfav": 636
					},
					"N": 1537
				},
				"DM18": {
					"Dist": {
						"Fav": 603,
						"Neu": 298,
						"Unfav": 616
					},
					"N": 1517
				},
				"SP45": {
					"Dist": {
						"Fav": 612,
						"Neu": 274,
						"Unfav": 626
					},
					"N": 1512
				},
				"SV03": {
					"Dist": {
						"Fav": 567,
						"Neu": 306,
						"Unfav": 634
					},
					"N": 1507
				},
				"SR05": {
					"Dist": {
						"Fav": 614,
						"Neu": 290,
						"Unfav": 628
					},
					"N": 1532
				},
				"SR03": {
					"Dist": {
						"Fav": 643,
						"Neu": 300,
						"Unfav": 589
					},
					"N": 1532
				},
				"TW02": {
					"Dist": {
						"Fav": 622,
						"Neu": 290,
						"Unfav": 604
					},
					"N": 1516
				},
				"DC08": {
					"Dist": {
						"Fav": 617,
						"Neu": 301,
						"Unfav": 614
					},
					"N": 1532
				},
				"GP03": {
					"Dist": {
						"Fav": 626,
						"Neu": 327,
						"Unfav": 559
					},
					"N": 1512
				},
				"PE01": {
					"Dist": {
						"Fav": 625,
						"Neu": 307,
						"Unfav": 613
					},
					"N": 1545
				},
				"AV01": {
					"Dist": {
						"Fav": 624,
						"Neu": 292,
						"Unfav": 603
					},
					"N": 1519
				},
				"AV08": {
					"Dist": {
						"Fav": 626,
						"Neu": 311,
						"Unfav": 585
					},
					"N": 1522
				},
				"BN04": {
					"Dist": {
						"Fav": 604,
						"Neu": 290,
						"Unfav": 625
					},
					"N": 1519
				},
				"CP16": {
					"Dist": {
						"Fav": 634,
						"Neu": 313,
						"Unfav": 599
					},
					"N": 1546
				},
				"PE10": {
					"Dist": {
						"Fav": 596,
						"Neu": 287,
						"Unfav": 635
					},
					"N": 1518
				},
				"PE21": {
					"Dist": {
						"Fav": 591,
						"Neu": 294,
						"Unfav": 629
					},
					"N": 1514
				},
				"OM04": {
					"Dist": {
						"Fav": 626,
						"Neu": 318,
						"Unfav": 594
					},
					"N": 1538
				},
				"QS09": {
					"Dist": {
						"Fav": 577,
						"Neu": 304,
						"Unfav": 601
					},
					"N": 1482
				},
				"SP04": {
					"Dist": {
						"Fav": 572,
						"Neu": 319,
						"Unfav": 625
					},
					"N": 1516
				},
				"WK01": {
					"Dist": {
						"Fav": 611,
						"Neu": 299,
						"Unfav": 634
					},
					"N": 1544
				},
				"DI03": {
					"Dist": {
						"Fav": 604,
						"Neu": 287,
						"Unfav": 650
					},
					"N": 1541
				},
				"WK02": {
					"Dist": {
						"Fav": 598,
						"Neu": 301,
						"Unfav": 601
					},
					"N": 1500
				},
				"SP47": {
					"Dist": {
						"Fav": 589,
						"Neu": 306,
						"Unfav": 610
					},
					"N": 1505
				},
				"WS01": {
					"Dist": {
						"Fav": 590,
						"Neu": 340,
						"Unfav": 617
					},
					"N": 1547
				},
				"DC09": {
					"Dist": {
						"Fav": 612,
						"Neu": 302,
						"Unfav": 640
					},
					"N": 1554
				},
				"AV02": {
					"Dist": {
						"Fav": 1487,
						"Neu": 269,
						"Unfav": 223
					},
					"N": 1979
				},
				"DI04": {
					"Dist": {
						"Fav": 1500,
						"Neu": 246,
						"Unfav": 234
					},
					"N": 1980
				},
				"IV05": {
					"Dist": {
						"Fav": 285,
						"Neu": 102,
						"Unfav": 87
					},
					"N": 474
				},
				"OM06": {
					"Dist": {
						"Fav": 353,
						"Neu": 364,
						"Unfav": 765
					},
					"N": 1482
				},
				"NSQ1": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				}
			},
			"654": {
				"RE01": {
					"Dist": {
						"Fav": 1500,
						"Neu": 243,
						"Unfav": 201
					},
					"N": 1944
				},
				"DM02": {
					"Dist": {
						"Fav": 1474,
						"Neu": 248,
						"Unfav": 223
					},
					"N": 1945
				},
				"RC01": {
					"Dist": {
						"Fav": 315,
						"Neu": 83,
						"Unfav": 85
					},
					"N": 483
				},
				"TW06": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"QS01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"PE09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"AV15": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"LD04": {
					"Dist": {
						"Fav": 1515,
						"Neu": 235,
						"Unfav": 195
					},
					"N": 1945
				},
				"WS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"PE06": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"SD04": {
					"Dist": {
						"Fav": 181,
						"Neu": 73,
						"Unfav": 64
					},
					"N": 318
				},
				"PE03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM12": {
					"Dist": {
						"Fav": 123,
						"Neu": 20,
						"Unfav": 20
					},
					"N": 163
				},
				"QS16": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"LD09": {
					"Dist": {
						"Fav": 270,
						"Neu": 25,
						"Unfav": 26
					},
					"N": 321
				},
				"TR01": {
					"Dist": {
						"Fav": 240,
						"Neu": 37,
						"Unfav": 41
					},
					"N": 318
				},
				"VC04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"GP07": {
					"Dist": {
						"Fav": 78,
						"Neu": 44,
						"Unfav": 36
					},
					"N": 158
				},
				"ER01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"IV02": {
					"Dist": {
						"Fav": 179,
						"Neu": 62,
						"Unfav": 80
					},
					"N": 321
				},
				"CP14": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"GP12": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"CP11": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"WE01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"IV04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"WE12": {
					"Dist": {
						"Fav": 517,
						"Neu": 158,
						"Unfav": 119
					},
					"N": 794
				},
				"SP12": {
					"Dist": {
						"Fav": 1284,
						"Neu": 381,
						"Unfav": 278
					},
					"N": 1943
				},
				"AV09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TW04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"CP12": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DC11": {
					"Dist": {
						"Fav": 1578,
						"Neu": 302,
						"Unfav": 62
					},
					"N": 1942
				},
				"BN01": {
					"Dist": {
						"Fav": 1491,
						"Neu": 276,
						"Unfav": 172
					},
					"N": 1939
				},
				"GP09": {
					"Dist": {
						"Fav": 1068,
						"Neu": 383,
						"Unfav": 494
					},
					"N": 1945
				},
				"QS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR04": {
					"Dist": {
						"Fav": 956,
						"Neu": 369,
						"Unfav": 618
					},
					"N": 1943
				},
				"QS02": {
					"Dist": {
						"Fav": 587,
						"Neu": 310,
						"Unfav": 587
					},
					"N": 1484
				},
				"JS05": {
					"Dist": {
						"Fav": 593,
						"Neu": 303,
						"Unfav": 585
					},
					"N": 1481
				},
				"OM11": {
					"Dist": {
						"Fav": 543,
						"Neu": 320,
						"Unfav": 618
					},
					"N": 1481
				},
				"SD05": {
					"Dist": {
						"Fav": 613,
						"Neu": 292,
						"Unfav": 578
					},
					"N": 1483
				},
				"SD03": {
					"Dist": {
						"Fav": 593,
						"Neu": 288,
						"Unfav": 604
					},
					"N": 1485
				},
				"OS02": {
					"Dist": {
						"Fav": 636,
						"Neu": 273,
						"Unfav": 588
					},
					"N": 1497
				},
				"JS02": {
					"Dist": {
						"Fav": 604,
						"Neu": 301,
						"Unfav": 594
					},
					"N": 1499
				},
				"ST01": {
					"Dist": {
						"Fav": 583,
						"Neu": 307,
						"Unfav": 615
					},
					"N": 1505
				},
				"WL01": {
					"Dist": {
						"Fav": 553,
						"Neu": 326,
						"Unfav": 621
					},
					"N": 1500
				},
				"GP10": {
					"Dist": {
						"Fav": 566,
						"Neu": 306,
						"Unfav": 621
					},
					"N": 1493
				},
				"WE08": {
					"Dist": {
						"Fav": 577,
						"Neu": 298,
						"Unfav": 601
					},
					"N": 1476
				},
				"DM04": {
					"Dist": {
						"Fav": 588,
						"Neu": 316,
						"Unfav": 594
					},
					"N": 1498
				},
				"DM18": {
					"Dist": {
						"Fav": 617,
						"Neu": 275,
						"Unfav": 598
					},
					"N": 1490
				},
				"SP45": {
					"Dist": {
						"Fav": 566,
						"Neu": 310,
						"Unfav": 595
					},
					"N": 1471
				},
				"SV03": {
					"Dist": {
						"Fav": 569,
						"Neu": 312,
						"Unfav": 580
					},
					"N": 1461
				},
				"SR05": {
					"Dist": {
						"Fav": 619,
						"Neu": 304,
						"Unfav": 574
					},
					"N": 1497
				},
				"SR03": {
					"Dist": {
						"Fav": 600,
						"Neu": 285,
						"Unfav": 608
					},
					"N": 1493
				},
				"TW02": {
					"Dist": {
						"Fav": 602,
						"Neu": 319,
						"Unfav": 560
					},
					"N": 1481
				},
				"DC08": {
					"Dist": {
						"Fav": 562,
						"Neu": 316,
						"Unfav": 628
					},
					"N": 1506
				},
				"GP03": {
					"Dist": {
						"Fav": 590,
						"Neu": 305,
						"Unfav": 572
					},
					"N": 1467
				},
				"PE01": {
					"Dist": {
						"Fav": 614,
						"Neu": 292,
						"Unfav": 582
					},
					"N": 1488
				},
				"AV01": {
					"Dist": {
						"Fav": 602,
						"Neu": 305,
						"Unfav": 579
					},
					"N": 1486
				},
				"AV08": {
					"Dist": {
						"Fav": 581,
						"Neu": 310,
						"Unfav": 619
					},
					"N": 1510
				},
				"BN04": {
					"Dist": {
						"Fav": 550,
						"Neu": 303,
						"Unfav": 630
					},
					"N": 1483
				},
				"CP16": {
					"Dist": {
						"Fav": 576,
						"Neu": 319,
						"Unfav": 603
					},
					"N": 1498
				},
				"PE10": {
					"Dist": {
						"Fav": 601,
						"Neu": 309,
						"Unfav": 582
					},
					"N": 1492
				},
				"PE21": {
					"Dist": {
						"Fav": 584,
						"Neu": 316,
						"Unfav": 599
					},
					"N": 1499
				},
				"OM04": {
					"Dist": {
						"Fav": 614,
						"Neu": 264,
						"Unfav": 632
					},
					"N": 1510
				},
				"QS09": {
					"Dist": {
						"Fav": 600,
						"Neu": 316,
						"Unfav": 597
					},
					"N": 1513
				},
				"SP04": {
					"Dist": {
						"Fav": 580,
						"Neu": 306,
						"Unfav": 588
					},
					"N": 1474
				},
				"WK01": {
					"Dist": {
						"Fav": 582,
						"Neu": 292,
						"Unfav": 617
					},
					"N": 1491
				},
				"DI03": {
					"Dist": {
						"Fav": 607,
						"Neu": 307,
						"Unfav": 579
					},
					"N": 1493
				},
				"WK02": {
					"Dist": {
						"Fav": 598,
						"Neu": 301,
						"Unfav": 590
					},
					"N": 1489
				},
				"SP47": {
					"Dist": {
						"Fav": 542,
						"Neu": 327,
						"Unfav": 619
					},
					"N": 1488
				},
				"WS01": {
					"Dist": {
						"Fav": 640,
						"Neu": 279,
						"Unfav": 592
					},
					"N": 1511
				},
				"DC09": {
					"Dist": {
						"Fav": 565,
						"Neu": 298,
						"Unfav": 603
					},
					"N": 1466
				},
				"AV02": {
					"Dist": {
						"Fav": 1500,
						"Neu": 243,
						"Unfav": 201
					},
					"N": 1944
				},
				"DI04": {
					"Dist": {
						"Fav": 1474,
						"Neu": 248,
						"Unfav": 223
					},
					"N": 1945
				},
				"IV05": {
					"Dist": {
						"Fav": 315,
						"Neu": 83,
						"Unfav": 85
					},
					"N": 483
				},
				"OM06": {
					"Dist": {
						"Fav": 364,
						"Neu": 342,
						"Unfav": 732
					},
					"N": 1438
				},
				"NSQ1": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				}
			},
			"655": {
				"RE01": {
					"Dist": {
						"Fav": 1492,
						"Neu": 276,
						"Unfav": 195
					},
					"N": 1963
				},
				"DM02": {
					"Dist": {
						"Fav": 1488,
						"Neu": 237,
						"Unfav": 239
					},
					"N": 1964
				},
				"RC01": {
					"Dist": {
						"Fav": 302,
						"Neu": 102,
						"Unfav": 85
					},
					"N": 489
				},
				"TW06": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"QS01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"PE09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"AV15": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"LD04": {
					"Dist": {
						"Fav": 1518,
						"Neu": 258,
						"Unfav": 187
					},
					"N": 1963
				},
				"WS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"PE06": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"SD04": {
					"Dist": {
						"Fav": 198,
						"Neu": 62,
						"Unfav": 67
					},
					"N": 327
				},
				"PE03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM12": {
					"Dist": {
						"Fav": 119,
						"Neu": 21,
						"Unfav": 19
					},
					"N": 159
				},
				"QS16": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"LD09": {
					"Dist": {
						"Fav": 269,
						"Neu": 29,
						"Unfav": 40
					},
					"N": 338
				},
				"TR01": {
					"Dist": {
						"Fav": 222,
						"Neu": 62,
						"Unfav": 42
					},
					"N": 326
				},
				"VC04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"GP07": {
					"Dist": {
						"Fav": 82,
						"Neu": 36,
						"Unfav": 41
					},
					"N": 159
				},
				"ER01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"IV02": {
					"Dist": {
						"Fav": 202,
						"Neu": 59,
						"Unfav": 76
					},
					"N": 337
				},
				"CP14": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"GP12": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"CP11": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"WE01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"IV04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"WE12": {
					"Dist": {
						"Fav": 540,
						"Neu": 153,
						"Unfav": 130
					},
					"N": 823
				},
				"SP12": {
					"Dist": {
						"Fav": 1285,
						"Neu": 408,
						"Unfav": 270
					},
					"N": 1963
				},
				"AV09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TW04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"CP12": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DC11": {
					"Dist": {
						"Fav": 1594,
						"Neu": 279,
						"Unfav": 88
					},
					"N": 1961
				},
				"BN01": {
					"Dist": {
						"Fav": 1484,
						"Neu": 296,
						"Unfav": 179
					},
					"N": 1959
				},
				"GP09": {
					"Dist": {
						"Fav": 1083,
						"Neu": 385,
						"Unfav": 495
					},
					"N": 1963
				},
				"QS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR04": {
					"Dist": {
						"Fav": 944,
						"Neu": 366,
						"Unfav": 652
					},
					"N": 1962
				},
				"QS02": {
					"Dist": {
						"Fav": 618,
						"Neu": 316,
						"Unfav": 586
					},
					"N": 1520
				},
				"JS05": {
					"Dist": {
						"Fav": 607,
						"Neu": 312,
						"Unfav": 583
					},
					"N": 1502
				},
				"OM11": {
					"Dist": {
						"Fav": 636,
						"Neu": 305,
						"Unfav": 585
					},
					"N": 1526
				},
				"SD05": {
					"Dist": {
						"Fav": 625,
						"Neu": 294,
						"Unfav": 593
					},
					"N": 1512
				},
				"SD03": {
					"Dist": {
						"Fav": 591,
						"Neu": 348,
						"Unfav": 583
					},
					"N": 1522
				},
				"OS02": {
					"Dist": {
						"Fav": 587,
						"Neu": 313,
						"Unfav": 627
					},
					"N": 1527
				},
				"JS02": {
					"Dist": {
						"Fav": 625,
						"Neu": 301,
						"Unfav": 580
					},
					"N": 1506
				},
				"ST01": {
					"Dist": {
						"Fav": 623,
						"Neu": 256,
						"Unfav": 636
					},
					"N": 1515
				},
				"WL01": {
					"Dist": {
						"Fav": 550,
						"Neu": 308,
						"Unfav": 630
					},
					"N": 1488
				},
				"GP10": {
					"Dist": {
						"Fav": 613,
						"Neu": 268,
						"Unfav": 635
					},
					"N": 1516
				},
				"WE08": {
					"Dist": {
						"Fav": 582,
						"Neu": 289,
						"Unfav": 652
					},
					"N": 1523
				},
				"DM04": {
					"Dist": {
						"Fav": 593,
						"Neu": 297,
						"Unfav": 629
					},
					"N": 1519
				},
				"DM18": {
					"Dist": {
						"Fav": 591,
						"Neu": 290,
						"Unfav": 588
					},
					"N": 1469
				},
				"SP45": {
					"Dist": {
						"Fav": 612,
						"Neu": 312,
						"Unfav": 584
					},
					"N": 1508
				},
				"SV03": {
					"Dist": {
						"Fav": 593,
						"Neu": 302,
						"Unfav": 609
					},
					"N": 1504
				},
				"SR05": {
					"Dist": {
						"Fav": 636,
						"Neu": 279,
						"Unfav": 582
					},
					"N": 1497
				},
				"SR03": {
					"Dist": {
						"Fav": 584,
						"Neu": 305,
						"Unfav": 603
					},
					"N": 1492
				},
				"TW02": {
					"Dist": {
						"Fav": 599,
						"Neu": 305,
						"Unfav": 619
					},
					"N": 1523
				},
				"DC08": {
					"Dist": {
						"Fav": 612,
						"Neu": 300,
						"Unfav": 606
					},
					"N": 1518
				},
				"GP03": {
					"Dist": {
						"Fav": 640,
						"Neu": 281,
						"Unfav": 585
					},
					"N": 1506
				},
				"PE01": {
					"Dist": {
						"Fav": 607,
						"Neu": 288,
						"Unfav": 607
					},
					"N": 1502
				},
				"AV01": {
					"Dist": {
						"Fav": 567,
						"Neu": 306,
						"Unfav": 624
					},
					"N": 1497
				},
				"AV08": {
					"Dist": {
						"Fav": 614,
						"Neu": 287,
						"Unfav": 599
					},
					"N": 1500
				},
				"BN04": {
					"Dist": {
						"Fav": 650,
						"Neu": 298,
						"Unfav": 573
					},
					"N": 1521
				},
				"CP16": {
					"Dist": {
						"Fav": 576,
						"Neu": 296,
						"Unfav": 642
					},
					"N": 1514
				},
				"PE10": {
					"Dist": {
						"Fav": 591,
						"Neu": 335,
						"Unfav": 571
					},
					"N": 1497
				},
				"PE21": {
					"Dist": {
						"Fav": 624,
						"Neu": 286,
						"Unfav": 587
					},
					"N": 1497
				},
				"OM04": {
					"Dist": {
						"Fav": 609,
						"Neu": 277,
						"Unfav": 595
					},
					"N": 1481
				},
				"QS09": {
					"Dist": {
						"Fav": 613,
						"Neu": 293,
						"Unfav": 596
					},
					"N": 1502
				},
				"SP04": {
					"Dist": {
						"Fav": 577,
						"Neu": 327,
						"Unfav": 588
					},
					"N": 1492
				},
				"WK01": {
					"Dist": {
						"Fav": 586,
						"Neu": 288,
						"Unfav": 617
					},
					"N": 1491
				},
				"DI03": {
					"Dist": {
						"Fav": 579,
						"Neu": 312,
						"Unfav": 625
					},
					"N": 1516
				},
				"WK02": {
					"Dist": {
						"Fav": 611,
						"Neu": 275,
						"Unfav": 586
					},
					"N": 1472
				},
				"SP47": {
					"Dist": {
						"Fav": 601,
						"Neu": 315,
						"Unfav": 576
					},
					"N": 1492
				},
				"WS01": {
					"Dist": {
						"Fav": 603,
						"Neu": 298,
						"Unfav": 619
					},
					"N": 1520
				},
				"DC09": {
					"Dist": {
						"Fav": 631,
						"Neu": 313,
						"Unfav": 571
					},
					"N": 1515
				},
				"AV02": {
					"Dist": {
						"Fav": 1492,
						"Neu": 276,
						"Unfav": 195
					},
					"N": 1963
				},
				"DI04": {
					"Dist": {
						"Fav": 1488,
						"Neu": 237,
						"Unfav": 239
					},
					"N": 1964
				},
				"IV05": {
					"Dist": {
						"Fav": 302,
						"Neu": 102,
						"Unfav": 85
					},
					"N": 489
				},
				"OM06": {
					"Dist": {
						"Fav": 347,
						"Neu": 348,
						"Unfav": 756
					},
					"N": 1451
				},
				"NSQ1": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				}
			},
			"656": {
				"RE01": {
					"Dist": {
						"Fav": 1451,
						"Neu": 253,
						"Unfav": 208
					},
					"N": 1912
				},
				"DM02": {
					"Dist": {
						"Fav": 1428,
						"Neu": 229,
						"Unfav": 253
					},
					"N": 1910
				},
				"RC01": {
					"Dist": {
						"Fav": 299,
						"Neu": 84,
						"Unfav": 82
					},
					"N": 465
				},
				"TW06": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"QS01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"PE09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"AV15": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"LD04": {
					"Dist": {
						"Fav": 1443,
						"Neu": 260,
						"Unfav": 208
					},
					"N": 1911
				},
				"WS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"PE06": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"SD04": {
					"Dist": {
						"Fav": 163,
						"Neu": 76,
						"Unfav": 70
					},
					"N": 309
				},
				"PE03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM12": {
					"Dist": {
						"Fav": 111,
						"Neu": 24,
						"Unfav": 17
					},
					"N": 152
				},
				"QS16": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"LD09": {
					"Dist": {
						"Fav": 247,
						"Neu": 32,
						"Unfav": 37
					},
					"N": 316
				},
				"TR01": {
					"Dist": {
						"Fav": 209,
						"Neu": 59,
						"Unfav": 41
					},
					"N": 309
				},
				"VC04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"GP07": {
					"Dist": {
						"Fav": 70,
						"Neu": 36,
						"Unfav": 46
					},
					"N": 152
				},
				"ER01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"IV02": {
					"Dist": {
						"Fav": 187,
						"Neu": 49,
						"Unfav": 79
					},
					"N": 315
				},
				"CP14": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"GP12": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"CP11": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"WE01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"IV04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"WE12": {
					"Dist": {
						"Fav": 503,
						"Neu": 160,
						"Unfav": 116
					},
					"N": 779
				},
				"SP12": {
					"Dist": {
						"Fav": 1210,
						"Neu": 407,
						"Unfav": 295
					},
					"N": 1912
				},
				"AV09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TW04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"CP12": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DC11": {
					"Dist": {
						"Fav": 1547,
						"Neu": 276,
						"Unfav": 87
					},
					"N": 1910
				},
				"BN01": {
					"Dist": {
						"Fav": 1430,
						"Neu": 306,
						"Unfav": 171
					},
					"N": 1907
				},
				"GP09": {
					"Dist": {
						"Fav": 1039,
						"Neu": 350,
						"Unfav": 520
					},
					"N": 1909
				},
				"QS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR04": {
					"Dist": {
						"Fav": 901,
						"Neu": 391,
						"Unfav": 618
					},
					"N": 1910
				},
				"QS02": {
					"Dist": {
						"Fav": 602,
						"Neu": 310,
						"Unfav": 549
					},
					"N": 1461
				},
				"JS05": {
					"Dist": {
						"Fav": 603,
						"Neu": 298,
						"Unfav": 596
					},
					"N": 1497
				},
				"OM11": {
					"Dist": {
						"Fav": 598,
						"Neu": 301,
						"Unfav": 607
					},
					"N": 1506
				},
				"SD05": {
					"Dist": {
						"Fav": 578,
						"Neu": 323,
						"Unfav": 577
					},
					"N": 1478
				},
				"SD03": {
					"Dist": {
						"Fav": 600,
						"Neu": 270,
						"Unfav": 589
					},
					"N": 1459
				},
				"OS02": {
					"Dist": {
						"Fav": 615,
						"Neu": 297,
						"Unfav": 555
					},
					"N": 1467
				},
				"JS02": {
					"Dist": {
						"Fav": 587,
						"Neu": 286,
						"Unfav": 603
					},
					"N": 1476
				},
				"ST01": {
					"Dist": {
						"Fav": 561,
						"Neu": 334,
						"Unfav": 581
					},
					"N": 1476
				},
				"WL01": {
					"Dist": {
						"Fav": 596,
						"Neu": 293,
						"Unfav": 596
					},
					"N": 1485
				},
				"GP10": {
					"Dist": {
						"Fav": 586,
						"Neu": 278,
						"Unfav": 600
					},
					"N": 1464
				},
				"WE08": {
					"Dist": {
						"Fav": 593,
						"Neu": 304,
						"Unfav": 567
					},
					"N": 1464
				},
				"DM04": {
					"Dist": {
						"Fav": 602,
						"Neu": 298,
						"Unfav": 602
					},
					"N": 1502
				},
				"DM18": {
					"Dist": {
						"Fav": 595,
						"Neu": 276,
						"Unfav": 585
					},
					"N": 1456
				},
				"SP45": {
					"Dist": {
						"Fav": 591,
						"Neu": 278,
						"Unfav": 593
					},
					"N": 1462
				},
				"SV03": {
					"Dist": {
						"Fav": 615,
						"Neu": 280,
						"Unfav": 583
					},
					"N": 1478
				},
				"SR05": {
					"Dist": {
						"Fav": 562,
						"Neu": 293,
						"Unfav": 615
					},
					"N": 1470
				},
				"SR03": {
					"Dist": {
						"Fav": 557,
						"Neu": 274,
						"Unfav": 637
					},
					"N": 1468
				},
				"TW02": {
					"Dist": {
						"Fav": 589,
						"Neu": 305,
						"Unfav": 570
					},
					"N": 1464
				},
				"DC08": {
					"Dist": {
						"Fav": 577,
						"Neu": 290,
						"Unfav": 587
					},
					"N": 1454
				},
				"GP03": {
					"Dist": {
						"Fav": 589,
						"Neu": 304,
						"Unfav": 564
					},
					"N": 1457
				},
				"PE01": {
					"Dist": {
						"Fav": 550,
						"Neu": 319,
						"Unfav": 605
					},
					"N": 1474
				},
				"AV01": {
					"Dist": {
						"Fav": 581,
						"Neu": 298,
						"Unfav": 559
					},
					"N": 1438
				},
				"AV08": {
					"Dist": {
						"Fav": 580,
						"Neu": 298,
						"Unfav": 587
					},
					"N": 1465
				},
				"BN04": {
					"Dist": {
						"Fav": 589,
						"Neu": 295,
						"Unfav": 593
					},
					"N": 1477
				},
				"CP16": {
					"Dist": {
						"Fav": 620,
						"Neu": 249,
						"Unfav": 581
					},
					"N": 1450
				},
				"PE10": {
					"Dist": {
						"Fav": 612,
						"Neu": 313,
						"Unfav": 555
					},
					"N": 1480
				},
				"PE21": {
					"Dist": {
						"Fav": 586,
						"Neu": 294,
						"Unfav": 578
					},
					"N": 1458
				},
				"OM04": {
					"Dist": {
						"Fav": 583,
						"Neu": 311,
						"Unfav": 593
					},
					"N": 1487
				},
				"QS09": {
					"Dist": {
						"Fav": 595,
						"Neu": 278,
						"Unfav": 602
					},
					"N": 1475
				},
				"SP04": {
					"Dist": {
						"Fav": 570,
						"Neu": 308,
						"Unfav": 583
					},
					"N": 1461
				},
				"WK01": {
					"Dist": {
						"Fav": 577,
						"Neu": 248,
						"Unfav": 618
					},
					"N": 1443
				},
				"DI03": {
					"Dist": {
						"Fav": 604,
						"Neu": 299,
						"Unfav": 556
					},
					"N": 1459
				},
				"WK02": {
					"Dist": {
						"Fav": 581,
						"Neu": 305,
						"Unfav": 626
					},
					"N": 1512
				},
				"SP47": {
					"Dist": {
						"Fav": 594,
						"Neu": 286,
						"Unfav": 592
					},
					"N": 1472
				},
				"WS01": {
					"Dist": {
						"Fav": 625,
						"Neu": 278,
						"Unfav": 554
					},
					"N": 1457
				},
				"DC09": {
					"Dist": {
						"Fav": 581,
						"Neu": 299,
						"Unfav": 609
					},
					"N": 1489
				},
				"AV02": {
					"Dist": {
						"Fav": 1451,
						"Neu": 253,
						"Unfav": 208
					},
					"N": 1912
				},
				"DI04": {
					"Dist": {
						"Fav": 1428,
						"Neu": 229,
						"Unfav": 253
					},
					"N": 1910
				},
				"IV05": {
					"Dist": {
						"Fav": 299,
						"Neu": 84,
						"Unfav": 82
					},
					"N": 465
				},
				"OM06": {
					"Dist": {
						"Fav": 350,
						"Neu": 358,
						"Unfav": 709
					},
					"N": 1417
				},
				"NSQ1": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				}
			}
		},
		"ITEMSX.2019.389.0.AGE": {
			"651": {
				"RE01": {
					"Dist": {
						"Fav": 1792,
						"Neu": 220,
						"Unfav": 181
					},
					"N": 2193
				},
				"DM02": {
					"Dist": {
						"Fav": 1834,
						"Neu": 186,
						"Unfav": 173
					},
					"N": 2193
				},
				"RC01": {
					"Dist": {
						"Fav": 1572,
						"Neu": 345,
						"Unfav": 276
					},
					"N": 2193
				},
				"TW06": {
					"Dist": {
						"Fav": 1784,
						"Neu": 242,
						"Unfav": 163
					},
					"N": 2189
				},
				"QS01": {
					"Dist": {
						"Fav": 1682,
						"Neu": 291,
						"Unfav": 219
					},
					"N": 2192
				},
				"PE09": {
					"Dist": {
						"Fav": 1682,
						"Neu": 291,
						"Unfav": 219
					},
					"N": 2192
				},
				"AV15": {
					"Dist": {
						"Fav": 1928,
						"Neu": 148,
						"Unfav": 117
					},
					"N": 2193
				},
				"LD04": {
					"Dist": {
						"Fav": 1595,
						"Neu": 307,
						"Unfav": 289
					},
					"N": 2191
				},
				"WS03": {
					"Dist": {
						"Fav": 1875,
						"Neu": 173,
						"Unfav": 144
					},
					"N": 2192
				},
				"TR09": {
					"Dist": {
						"Fav": 1749,
						"Neu": 270,
						"Unfav": 173
					},
					"N": 2192
				},
				"PE06": {
					"Dist": {
						"Fav": 1874,
						"Neu": 194,
						"Unfav": 107
					},
					"N": 2175
				},
				"SD04": {
					"Dist": {
						"Fav": 1620,
						"Neu": 315,
						"Unfav": 254
					},
					"N": 2189
				},
				"PE03": {
					"Dist": {
						"Fav": 1716,
						"Neu": 288,
						"Unfav": 173
					},
					"N": 2177
				},
				"OM12": {
					"Dist": {
						"Fav": 1701,
						"Neu": 269,
						"Unfav": 180
					},
					"N": 2150
				},
				"QS16": {
					"Dist": {
						"Fav": 1459,
						"Neu": 433,
						"Unfav": 285
					},
					"N": 2177
				},
				"LD09": {
					"Dist": {
						"Fav": 1708,
						"Neu": 265,
						"Unfav": 213
					},
					"N": 2186
				},
				"TR01": {
					"Dist": {
						"Fav": 1852,
						"Neu": 220,
						"Unfav": 121
					},
					"N": 2193
				},
				"VC04": {
					"Dist": {
						"Fav": 1856,
						"Neu": 237,
						"Unfav": 98
					},
					"N": 2191
				},
				"GP07": {
					"Dist": {
						"Fav": 1239,
						"Neu": 454,
						"Unfav": 453
					},
					"N": 2146
				},
				"ER01": {
					"Dist": {
						"Fav": 1494,
						"Neu": 365,
						"Unfav": 330
					},
					"N": 2189
				},
				"IV02": {
					"Dist": {
						"Fav": 1347,
						"Neu": 440,
						"Unfav": 393
					},
					"N": 2180
				},
				"CP14": {
					"Dist": {
						"Fav": 1180,
						"Neu": 472,
						"Unfav": 515
					},
					"N": 2167
				},
				"GP12": {
					"Dist": {
						"Fav": 1739,
						"Neu": 281,
						"Unfav": 143
					},
					"N": 2163
				},
				"CP11": {
					"Dist": {
						"Fav": 1835,
						"Neu": 204,
						"Unfav": 59
					},
					"N": 2098
				},
				"WE01": {
					"Dist": {
						"Fav": 1821,
						"Neu": 230,
						"Unfav": 137
					},
					"N": 2188
				},
				"IV04": {
					"Dist": {
						"Fav": 1695,
						"Neu": 347,
						"Unfav": 98
					},
					"N": 2140
				},
				"WE12": {
					"Dist": {
						"Fav": 1569,
						"Neu": 396,
						"Unfav": 192
					},
					"N": 2157
				},
				"SP12": {
					"Dist": {
						"Fav": 1518,
						"Neu": 426,
						"Unfav": 243
					},
					"N": 2187
				},
				"AV09": {
					"Dist": {
						"Fav": 1848,
						"Neu": 250,
						"Unfav": 48
					},
					"N": 2146
				},
				"TW04": {
					"Dist": {
						"Fav": 1033,
						"Neu": 608,
						"Unfav": 169
					},
					"N": 1810
				},
				"CP12": {
					"Dist": {
						"Fav": 1632,
						"Neu": 348,
						"Unfav": 193
					},
					"N": 2173
				},
				"DC11": {
					"Dist": {
						"Fav": 1853,
						"Neu": 272,
						"Unfav": 69
					},
					"N": 2194
				},
				"BN01": {
					"Dist": {
						"Fav": 1755,
						"Neu": 290,
						"Unfav": 143
					},
					"N": 2188
				},
				"GP09": {
					"Dist": {
						"Fav": 1500,
						"Neu": 321,
						"Unfav": 373
					},
					"N": 2194
				},
				"QS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR04": {
					"Dist": {
						"Fav": 1328,
						"Neu": 410,
						"Unfav": 454
					},
					"N": 2192
				},
				"QS02": {
					"Dist": {
						"Fav": 743,
						"Neu": 349,
						"Unfav": 686
					},
					"N": 1778
				},
				"JS05": {
					"Dist": {
						"Fav": 739,
						"Neu": 361,
						"Unfav": 704
					},
					"N": 1804
				},
				"OM11": {
					"Dist": {
						"Fav": 769,
						"Neu": 368,
						"Unfav": 650
					},
					"N": 1787
				},
				"SD05": {
					"Dist": {
						"Fav": 740,
						"Neu": 384,
						"Unfav": 687
					},
					"N": 1811
				},
				"SD03": {
					"Dist": {
						"Fav": 755,
						"Neu": 349,
						"Unfav": 688
					},
					"N": 1792
				},
				"OS02": {
					"Dist": {
						"Fav": 712,
						"Neu": 393,
						"Unfav": 721
					},
					"N": 1826
				},
				"JS02": {
					"Dist": {
						"Fav": 738,
						"Neu": 365,
						"Unfav": 711
					},
					"N": 1814
				},
				"ST01": {
					"Dist": {
						"Fav": 717,
						"Neu": 363,
						"Unfav": 707
					},
					"N": 1787
				},
				"WL01": {
					"Dist": {
						"Fav": 723,
						"Neu": 355,
						"Unfav": 731
					},
					"N": 1809
				},
				"GP10": {
					"Dist": {
						"Fav": 717,
						"Neu": 390,
						"Unfav": 717
					},
					"N": 1824
				},
				"WE08": {
					"Dist": {
						"Fav": 727,
						"Neu": 371,
						"Unfav": 712
					},
					"N": 1810
				},
				"DM04": {
					"Dist": {
						"Fav": 717,
						"Neu": 372,
						"Unfav": 712
					},
					"N": 1801
				},
				"DM18": {
					"Dist": {
						"Fav": 740,
						"Neu": 361,
						"Unfav": 693
					},
					"N": 1794
				},
				"SP45": {
					"Dist": {
						"Fav": 724,
						"Neu": 360,
						"Unfav": 727
					},
					"N": 1811
				},
				"SV03": {
					"Dist": {
						"Fav": 727,
						"Neu": 350,
						"Unfav": 718
					},
					"N": 1795
				},
				"SR05": {
					"Dist": {
						"Fav": 709,
						"Neu": 355,
						"Unfav": 727
					},
					"N": 1791
				},
				"SR03": {
					"Dist": {
						"Fav": 733,
						"Neu": 334,
						"Unfav": 718
					},
					"N": 1785
				},
				"TW02": {
					"Dist": {
						"Fav": 706,
						"Neu": 365,
						"Unfav": 737
					},
					"N": 1808
				},
				"DC08": {
					"Dist": {
						"Fav": 725,
						"Neu": 364,
						"Unfav": 719
					},
					"N": 1808
				},
				"GP03": {
					"Dist": {
						"Fav": 716,
						"Neu": 359,
						"Unfav": 729
					},
					"N": 1804
				},
				"PE01": {
					"Dist": {
						"Fav": 745,
						"Neu": 331,
						"Unfav": 742
					},
					"N": 1818
				},
				"AV01": {
					"Dist": {
						"Fav": 760,
						"Neu": 350,
						"Unfav": 700
					},
					"N": 1810
				},
				"AV08": {
					"Dist": {
						"Fav": 705,
						"Neu": 336,
						"Unfav": 748
					},
					"N": 1789
				},
				"BN04": {
					"Dist": {
						"Fav": 732,
						"Neu": 351,
						"Unfav": 728
					},
					"N": 1811
				},
				"CP16": {
					"Dist": {
						"Fav": 687,
						"Neu": 396,
						"Unfav": 728
					},
					"N": 1811
				},
				"PE10": {
					"Dist": {
						"Fav": 729,
						"Neu": 355,
						"Unfav": 721
					},
					"N": 1805
				},
				"PE21": {
					"Dist": {
						"Fav": 714,
						"Neu": 368,
						"Unfav": 734
					},
					"N": 1816
				},
				"OM04": {
					"Dist": {
						"Fav": 729,
						"Neu": 356,
						"Unfav": 687
					},
					"N": 1772
				},
				"QS09": {
					"Dist": {
						"Fav": 707,
						"Neu": 353,
						"Unfav": 744
					},
					"N": 1804
				},
				"SP04": {
					"Dist": {
						"Fav": 758,
						"Neu": 359,
						"Unfav": 688
					},
					"N": 1805
				},
				"WK01": {
					"Dist": {
						"Fav": 702,
						"Neu": 335,
						"Unfav": 755
					},
					"N": 1792
				},
				"DI03": {
					"Dist": {
						"Fav": 751,
						"Neu": 372,
						"Unfav": 685
					},
					"N": 1808
				},
				"WK02": {
					"Dist": {
						"Fav": 731,
						"Neu": 339,
						"Unfav": 722
					},
					"N": 1792
				},
				"SP47": {
					"Dist": {
						"Fav": 732,
						"Neu": 362,
						"Unfav": 717
					},
					"N": 1811
				},
				"WS01": {
					"Dist": {
						"Fav": 716,
						"Neu": 380,
						"Unfav": 708
					},
					"N": 1804
				},
				"DC09": {
					"Dist": {
						"Fav": 717,
						"Neu": 341,
						"Unfav": 748
					},
					"N": 1806
				},
				"AV02": {
					"Dist": {
						"Fav": 1792,
						"Neu": 220,
						"Unfav": 181
					},
					"N": 2193
				},
				"DI04": {
					"Dist": {
						"Fav": 1834,
						"Neu": 186,
						"Unfav": 173
					},
					"N": 2193
				},
				"IV05": {
					"Dist": {
						"Fav": 1572,
						"Neu": 345,
						"Unfav": 276
					},
					"N": 2193
				},
				"OM06": {
					"Dist": {
						"Fav": 458,
						"Neu": 418,
						"Unfav": 843
					},
					"N": 1719
				},
				"NSQ1": {
					"Dist": {
						"Fav": 1013,
						"Neu": 747,
						"Unfav": 435
					},
					"N": 2195
				}
			},
			"652": {
				"RE01": {
					"Dist": {
						"Fav": 1741,
						"Neu": 236,
						"Unfav": 178
					},
					"N": 2155
				},
				"DM02": {
					"Dist": {
						"Fav": 1802,
						"Neu": 194,
						"Unfav": 158
					},
					"N": 2154
				},
				"RC01": {
					"Dist": {
						"Fav": 1532,
						"Neu": 337,
						"Unfav": 281
					},
					"N": 2150
				},
				"TW06": {
					"Dist": {
						"Fav": 1750,
						"Neu": 240,
						"Unfav": 165
					},
					"N": 2155
				},
				"QS01": {
					"Dist": {
						"Fav": 1595,
						"Neu": 347,
						"Unfav": 211
					},
					"N": 2153
				},
				"PE09": {
					"Dist": {
						"Fav": 1595,
						"Neu": 347,
						"Unfav": 211
					},
					"N": 2153
				},
				"AV15": {
					"Dist": {
						"Fav": 1887,
						"Neu": 150,
						"Unfav": 116
					},
					"N": 2153
				},
				"LD04": {
					"Dist": {
						"Fav": 1557,
						"Neu": 308,
						"Unfav": 289
					},
					"N": 2154
				},
				"WS03": {
					"Dist": {
						"Fav": 1830,
						"Neu": 174,
						"Unfav": 152
					},
					"N": 2156
				},
				"TR09": {
					"Dist": {
						"Fav": 1703,
						"Neu": 288,
						"Unfav": 157
					},
					"N": 2148
				},
				"PE06": {
					"Dist": {
						"Fav": 1799,
						"Neu": 206,
						"Unfav": 133
					},
					"N": 2138
				},
				"SD04": {
					"Dist": {
						"Fav": 1576,
						"Neu": 289,
						"Unfav": 289
					},
					"N": 2154
				},
				"PE03": {
					"Dist": {
						"Fav": 1691,
						"Neu": 262,
						"Unfav": 191
					},
					"N": 2144
				},
				"OM12": {
					"Dist": {
						"Fav": 1658,
						"Neu": 268,
						"Unfav": 204
					},
					"N": 2130
				},
				"QS16": {
					"Dist": {
						"Fav": 1440,
						"Neu": 412,
						"Unfav": 292
					},
					"N": 2144
				},
				"LD09": {
					"Dist": {
						"Fav": 1663,
						"Neu": 254,
						"Unfav": 236
					},
					"N": 2153
				},
				"TR01": {
					"Dist": {
						"Fav": 1775,
						"Neu": 257,
						"Unfav": 116
					},
					"N": 2148
				},
				"VC04": {
					"Dist": {
						"Fav": 1798,
						"Neu": 253,
						"Unfav": 92
					},
					"N": 2143
				},
				"GP07": {
					"Dist": {
						"Fav": 1180,
						"Neu": 465,
						"Unfav": 458
					},
					"N": 2103
				},
				"ER01": {
					"Dist": {
						"Fav": 1449,
						"Neu": 353,
						"Unfav": 347
					},
					"N": 2149
				},
				"IV02": {
					"Dist": {
						"Fav": 1318,
						"Neu": 435,
						"Unfav": 391
					},
					"N": 2144
				},
				"CP14": {
					"Dist": {
						"Fav": 1169,
						"Neu": 440,
						"Unfav": 521
					},
					"N": 2130
				},
				"GP12": {
					"Dist": {
						"Fav": 1678,
						"Neu": 306,
						"Unfav": 144
					},
					"N": 2128
				},
				"CP11": {
					"Dist": {
						"Fav": 1764,
						"Neu": 214,
						"Unfav": 46
					},
					"N": 2024
				},
				"WE01": {
					"Dist": {
						"Fav": 1776,
						"Neu": 235,
						"Unfav": 139
					},
					"N": 2150
				},
				"IV04": {
					"Dist": {
						"Fav": 1652,
						"Neu": 366,
						"Unfav": 72
					},
					"N": 2090
				},
				"WE12": {
					"Dist": {
						"Fav": 1557,
						"Neu": 346,
						"Unfav": 210
					},
					"N": 2113
				},
				"SP12": {
					"Dist": {
						"Fav": 1448,
						"Neu": 445,
						"Unfav": 258
					},
					"N": 2151
				},
				"AV09": {
					"Dist": {
						"Fav": 1811,
						"Neu": 231,
						"Unfav": 59
					},
					"N": 2101
				},
				"TW04": {
					"Dist": {
						"Fav": 957,
						"Neu": 604,
						"Unfav": 194
					},
					"N": 1755
				},
				"CP12": {
					"Dist": {
						"Fav": 1581,
						"Neu": 353,
						"Unfav": 204
					},
					"N": 2138
				},
				"DC11": {
					"Dist": {
						"Fav": 1772,
						"Neu": 308,
						"Unfav": 69
					},
					"N": 2149
				},
				"BN01": {
					"Dist": {
						"Fav": 1712,
						"Neu": 268,
						"Unfav": 169
					},
					"N": 2149
				},
				"GP09": {
					"Dist": {
						"Fav": 1472,
						"Neu": 324,
						"Unfav": 359
					},
					"N": 2155
				},
				"QS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR04": {
					"Dist": {
						"Fav": 1329,
						"Neu": 357,
						"Unfav": 466
					},
					"N": 2152
				},
				"QS02": {
					"Dist": {
						"Fav": 709,
						"Neu": 357,
						"Unfav": 729
					},
					"N": 1795
				},
				"JS05": {
					"Dist": {
						"Fav": 715,
						"Neu": 379,
						"Unfav": 707
					},
					"N": 1801
				},
				"OM11": {
					"Dist": {
						"Fav": 734,
						"Neu": 356,
						"Unfav": 674
					},
					"N": 1764
				},
				"SD05": {
					"Dist": {
						"Fav": 719,
						"Neu": 367,
						"Unfav": 669
					},
					"N": 1755
				},
				"SD03": {
					"Dist": {
						"Fav": 699,
						"Neu": 361,
						"Unfav": 715
					},
					"N": 1775
				},
				"OS02": {
					"Dist": {
						"Fav": 712,
						"Neu": 337,
						"Unfav": 716
					},
					"N": 1765
				},
				"JS02": {
					"Dist": {
						"Fav": 694,
						"Neu": 339,
						"Unfav": 728
					},
					"N": 1761
				},
				"ST01": {
					"Dist": {
						"Fav": 704,
						"Neu": 356,
						"Unfav": 759
					},
					"N": 1819
				},
				"WL01": {
					"Dist": {
						"Fav": 706,
						"Neu": 360,
						"Unfav": 705
					},
					"N": 1771
				},
				"GP10": {
					"Dist": {
						"Fav": 693,
						"Neu": 369,
						"Unfav": 678
					},
					"N": 1740
				},
				"WE08": {
					"Dist": {
						"Fav": 691,
						"Neu": 373,
						"Unfav": 718
					},
					"N": 1782
				},
				"DM04": {
					"Dist": {
						"Fav": 688,
						"Neu": 342,
						"Unfav": 734
					},
					"N": 1764
				},
				"DM18": {
					"Dist": {
						"Fav": 719,
						"Neu": 330,
						"Unfav": 735
					},
					"N": 1784
				},
				"SP45": {
					"Dist": {
						"Fav": 717,
						"Neu": 365,
						"Unfav": 700
					},
					"N": 1782
				},
				"SV03": {
					"Dist": {
						"Fav": 715,
						"Neu": 337,
						"Unfav": 705
					},
					"N": 1757
				},
				"SR05": {
					"Dist": {
						"Fav": 738,
						"Neu": 341,
						"Unfav": 692
					},
					"N": 1771
				},
				"SR03": {
					"Dist": {
						"Fav": 688,
						"Neu": 362,
						"Unfav": 703
					},
					"N": 1753
				},
				"TW02": {
					"Dist": {
						"Fav": 740,
						"Neu": 386,
						"Unfav": 649
					},
					"N": 1775
				},
				"DC08": {
					"Dist": {
						"Fav": 732,
						"Neu": 345,
						"Unfav": 673
					},
					"N": 1750
				},
				"GP03": {
					"Dist": {
						"Fav": 718,
						"Neu": 359,
						"Unfav": 725
					},
					"N": 1802
				},
				"PE01": {
					"Dist": {
						"Fav": 712,
						"Neu": 349,
						"Unfav": 721
					},
					"N": 1782
				},
				"AV01": {
					"Dist": {
						"Fav": 733,
						"Neu": 369,
						"Unfav": 688
					},
					"N": 1790
				},
				"AV08": {
					"Dist": {
						"Fav": 691,
						"Neu": 330,
						"Unfav": 761
					},
					"N": 1782
				},
				"BN04": {
					"Dist": {
						"Fav": 706,
						"Neu": 362,
						"Unfav": 724
					},
					"N": 1792
				},
				"CP16": {
					"Dist": {
						"Fav": 684,
						"Neu": 354,
						"Unfav": 690
					},
					"N": 1728
				},
				"PE10": {
					"Dist": {
						"Fav": 691,
						"Neu": 367,
						"Unfav": 713
					},
					"N": 1771
				},
				"PE21": {
					"Dist": {
						"Fav": 667,
						"Neu": 389,
						"Unfav": 737
					},
					"N": 1793
				},
				"OM04": {
					"Dist": {
						"Fav": 684,
						"Neu": 353,
						"Unfav": 737
					},
					"N": 1774
				},
				"QS09": {
					"Dist": {
						"Fav": 691,
						"Neu": 379,
						"Unfav": 715
					},
					"N": 1785
				},
				"SP04": {
					"Dist": {
						"Fav": 715,
						"Neu": 372,
						"Unfav": 697
					},
					"N": 1784
				},
				"WK01": {
					"Dist": {
						"Fav": 724,
						"Neu": 317,
						"Unfav": 705
					},
					"N": 1746
				},
				"DI03": {
					"Dist": {
						"Fav": 677,
						"Neu": 350,
						"Unfav": 751
					},
					"N": 1778
				},
				"WK02": {
					"Dist": {
						"Fav": 718,
						"Neu": 342,
						"Unfav": 714
					},
					"N": 1774
				},
				"SP47": {
					"Dist": {
						"Fav": 687,
						"Neu": 341,
						"Unfav": 737
					},
					"N": 1765
				},
				"WS01": {
					"Dist": {
						"Fav": 710,
						"Neu": 326,
						"Unfav": 702
					},
					"N": 1738
				},
				"DC09": {
					"Dist": {
						"Fav": 729,
						"Neu": 353,
						"Unfav": 697
					},
					"N": 1779
				},
				"AV02": {
					"Dist": {
						"Fav": 1741,
						"Neu": 236,
						"Unfav": 178
					},
					"N": 2155
				},
				"DI04": {
					"Dist": {
						"Fav": 1802,
						"Neu": 194,
						"Unfav": 158
					},
					"N": 2154
				},
				"IV05": {
					"Dist": {
						"Fav": 1532,
						"Neu": 337,
						"Unfav": 281
					},
					"N": 2150
				},
				"OM06": {
					"Dist": {
						"Fav": 388,
						"Neu": 459,
						"Unfav": 855
					},
					"N": 1702
				},
				"NSQ1": {
					"Dist": {
						"Fav": 964,
						"Neu": 745,
						"Unfav": 447
					},
					"N": 2156
				}
			},
			"653": {
				"RE01": {
					"Dist": {
						"Fav": 1787,
						"Neu": 226,
						"Unfav": 190
					},
					"N": 2203
				},
				"DM02": {
					"Dist": {
						"Fav": 1830,
						"Neu": 201,
						"Unfav": 173
					},
					"N": 2204
				},
				"RC01": {
					"Dist": {
						"Fav": 1596,
						"Neu": 333,
						"Unfav": 272
					},
					"N": 2201
				},
				"TW06": {
					"Dist": {
						"Fav": 1801,
						"Neu": 219,
						"Unfav": 183
					},
					"N": 2203
				},
				"QS01": {
					"Dist": {
						"Fav": 1670,
						"Neu": 296,
						"Unfav": 237
					},
					"N": 2203
				},
				"PE09": {
					"Dist": {
						"Fav": 1670,
						"Neu": 296,
						"Unfav": 237
					},
					"N": 2203
				},
				"AV15": {
					"Dist": {
						"Fav": 1936,
						"Neu": 149,
						"Unfav": 116
					},
					"N": 2201
				},
				"LD04": {
					"Dist": {
						"Fav": 1614,
						"Neu": 327,
						"Unfav": 261
					},
					"N": 2202
				},
				"WS03": {
					"Dist": {
						"Fav": 1874,
						"Neu": 181,
						"Unfav": 144
					},
					"N": 2199
				},
				"TR09": {
					"Dist": {
						"Fav": 1764,
						"Neu": 260,
						"Unfav": 177
					},
					"N": 2201
				},
				"PE06": {
					"Dist": {
						"Fav": 1842,
						"Neu": 208,
						"Unfav": 131
					},
					"N": 2181
				},
				"SD04": {
					"Dist": {
						"Fav": 1631,
						"Neu": 294,
						"Unfav": 271
					},
					"N": 2196
				},
				"PE03": {
					"Dist": {
						"Fav": 1718,
						"Neu": 304,
						"Unfav": 168
					},
					"N": 2190
				},
				"OM12": {
					"Dist": {
						"Fav": 1735,
						"Neu": 264,
						"Unfav": 170
					},
					"N": 2169
				},
				"QS16": {
					"Dist": {
						"Fav": 1477,
						"Neu": 422,
						"Unfav": 287
					},
					"N": 2186
				},
				"LD09": {
					"Dist": {
						"Fav": 1723,
						"Neu": 241,
						"Unfav": 235
					},
					"N": 2199
				},
				"TR01": {
					"Dist": {
						"Fav": 1881,
						"Neu": 202,
						"Unfav": 118
					},
					"N": 2201
				},
				"VC04": {
					"Dist": {
						"Fav": 1887,
						"Neu": 232,
						"Unfav": 81
					},
					"N": 2200
				},
				"GP07": {
					"Dist": {
						"Fav": 1229,
						"Neu": 476,
						"Unfav": 457
					},
					"N": 2162
				},
				"ER01": {
					"Dist": {
						"Fav": 1484,
						"Neu": 393,
						"Unfav": 320
					},
					"N": 2197
				},
				"IV02": {
					"Dist": {
						"Fav": 1350,
						"Neu": 436,
						"Unfav": 405
					},
					"N": 2191
				},
				"CP14": {
					"Dist": {
						"Fav": 1188,
						"Neu": 452,
						"Unfav": 532
					},
					"N": 2172
				},
				"GP12": {
					"Dist": {
						"Fav": 1716,
						"Neu": 283,
						"Unfav": 178
					},
					"N": 2177
				},
				"CP11": {
					"Dist": {
						"Fav": 1825,
						"Neu": 225,
						"Unfav": 52
					},
					"N": 2102
				},
				"WE01": {
					"Dist": {
						"Fav": 1854,
						"Neu": 226,
						"Unfav": 123
					},
					"N": 2203
				},
				"IV04": {
					"Dist": {
						"Fav": 1677,
						"Neu": 380,
						"Unfav": 86
					},
					"N": 2143
				},
				"WE12": {
					"Dist": {
						"Fav": 1541,
						"Neu": 440,
						"Unfav": 200
					},
					"N": 2181
				},
				"SP12": {
					"Dist": {
						"Fav": 1503,
						"Neu": 458,
						"Unfav": 238
					},
					"N": 2199
				},
				"AV09": {
					"Dist": {
						"Fav": 1849,
						"Neu": 251,
						"Unfav": 50
					},
					"N": 2150
				},
				"TW04": {
					"Dist": {
						"Fav": 1027,
						"Neu": 616,
						"Unfav": 158
					},
					"N": 1801
				},
				"CP12": {
					"Dist": {
						"Fav": 1646,
						"Neu": 368,
						"Unfav": 174
					},
					"N": 2188
				},
				"DC11": {
					"Dist": {
						"Fav": 1830,
						"Neu": 297,
						"Unfav": 72
					},
					"N": 2199
				},
				"BN01": {
					"Dist": {
						"Fav": 1743,
						"Neu": 292,
						"Unfav": 160
					},
					"N": 2195
				},
				"GP09": {
					"Dist": {
						"Fav": 1515,
						"Neu": 322,
						"Unfav": 366
					},
					"N": 2203
				},
				"QS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR04": {
					"Dist": {
						"Fav": 1324,
						"Neu": 378,
						"Unfav": 501
					},
					"N": 2203
				},
				"QS02": {
					"Dist": {
						"Fav": 729,
						"Neu": 328,
						"Unfav": 761
					},
					"N": 1818
				},
				"JS05": {
					"Dist": {
						"Fav": 705,
						"Neu": 398,
						"Unfav": 689
					},
					"N": 1792
				},
				"OM11": {
					"Dist": {
						"Fav": 689,
						"Neu": 365,
						"Unfav": 743
					},
					"N": 1797
				},
				"SD05": {
					"Dist": {
						"Fav": 711,
						"Neu": 357,
						"Unfav": 709
					},
					"N": 1777
				},
				"SD03": {
					"Dist": {
						"Fav": 720,
						"Neu": 373,
						"Unfav": 727
					},
					"N": 1820
				},
				"OS02": {
					"Dist": {
						"Fav": 745,
						"Neu": 374,
						"Unfav": 689
					},
					"N": 1808
				},
				"JS02": {
					"Dist": {
						"Fav": 728,
						"Neu": 336,
						"Unfav": 749
					},
					"N": 1813
				},
				"ST01": {
					"Dist": {
						"Fav": 696,
						"Neu": 391,
						"Unfav": 728
					},
					"N": 1815
				},
				"WL01": {
					"Dist": {
						"Fav": 762,
						"Neu": 377,
						"Unfav": 686
					},
					"N": 1825
				},
				"GP10": {
					"Dist": {
						"Fav": 723,
						"Neu": 364,
						"Unfav": 723
					},
					"N": 1810
				},
				"WE08": {
					"Dist": {
						"Fav": 701,
						"Neu": 371,
						"Unfav": 739
					},
					"N": 1811
				},
				"DM04": {
					"Dist": {
						"Fav": 713,
						"Neu": 378,
						"Unfav": 713
					},
					"N": 1804
				},
				"DM18": {
					"Dist": {
						"Fav": 710,
						"Neu": 364,
						"Unfav": 728
					},
					"N": 1802
				},
				"SP45": {
					"Dist": {
						"Fav": 739,
						"Neu": 343,
						"Unfav": 692
					},
					"N": 1774
				},
				"SV03": {
					"Dist": {
						"Fav": 742,
						"Neu": 347,
						"Unfav": 699
					},
					"N": 1788
				},
				"SR05": {
					"Dist": {
						"Fav": 734,
						"Neu": 358,
						"Unfav": 730
					},
					"N": 1822
				},
				"SR03": {
					"Dist": {
						"Fav": 774,
						"Neu": 340,
						"Unfav": 698
					},
					"N": 1812
				},
				"TW02": {
					"Dist": {
						"Fav": 753,
						"Neu": 344,
						"Unfav": 703
					},
					"N": 1800
				},
				"DC08": {
					"Dist": {
						"Fav": 737,
						"Neu": 364,
						"Unfav": 719
					},
					"N": 1820
				},
				"GP03": {
					"Dist": {
						"Fav": 711,
						"Neu": 372,
						"Unfav": 702
					},
					"N": 1785
				},
				"PE01": {
					"Dist": {
						"Fav": 702,
						"Neu": 366,
						"Unfav": 754
					},
					"N": 1822
				},
				"AV01": {
					"Dist": {
						"Fav": 718,
						"Neu": 400,
						"Unfav": 704
					},
					"N": 1822
				},
				"AV08": {
					"Dist": {
						"Fav": 721,
						"Neu": 364,
						"Unfav": 717
					},
					"N": 1802
				},
				"BN04": {
					"Dist": {
						"Fav": 720,
						"Neu": 346,
						"Unfav": 699
					},
					"N": 1765
				},
				"CP16": {
					"Dist": {
						"Fav": 677,
						"Neu": 360,
						"Unfav": 749
					},
					"N": 1786
				},
				"PE10": {
					"Dist": {
						"Fav": 724,
						"Neu": 344,
						"Unfav": 753
					},
					"N": 1821
				},
				"PE21": {
					"Dist": {
						"Fav": 720,
						"Neu": 333,
						"Unfav": 736
					},
					"N": 1789
				},
				"OM04": {
					"Dist": {
						"Fav": 717,
						"Neu": 385,
						"Unfav": 699
					},
					"N": 1801
				},
				"QS09": {
					"Dist": {
						"Fav": 686,
						"Neu": 389,
						"Unfav": 712
					},
					"N": 1787
				},
				"SP04": {
					"Dist": {
						"Fav": 709,
						"Neu": 376,
						"Unfav": 734
					},
					"N": 1819
				},
				"WK01": {
					"Dist": {
						"Fav": 708,
						"Neu": 393,
						"Unfav": 717
					},
					"N": 1818
				},
				"DI03": {
					"Dist": {
						"Fav": 700,
						"Neu": 343,
						"Unfav": 749
					},
					"N": 1792
				},
				"WK02": {
					"Dist": {
						"Fav": 718,
						"Neu": 369,
						"Unfav": 722
					},
					"N": 1809
				},
				"SP47": {
					"Dist": {
						"Fav": 710,
						"Neu": 351,
						"Unfav": 730
					},
					"N": 1791
				},
				"WS01": {
					"Dist": {
						"Fav": 696,
						"Neu": 399,
						"Unfav": 711
					},
					"N": 1806
				},
				"DC09": {
					"Dist": {
						"Fav": 740,
						"Neu": 366,
						"Unfav": 719
					},
					"N": 1825
				},
				"AV02": {
					"Dist": {
						"Fav": 1787,
						"Neu": 226,
						"Unfav": 190
					},
					"N": 2203
				},
				"DI04": {
					"Dist": {
						"Fav": 1830,
						"Neu": 201,
						"Unfav": 173
					},
					"N": 2204
				},
				"IV05": {
					"Dist": {
						"Fav": 1596,
						"Neu": 333,
						"Unfav": 272
					},
					"N": 2201
				},
				"OM06": {
					"Dist": {
						"Fav": 460,
						"Neu": 438,
						"Unfav": 871
					},
					"N": 1769
				},
				"NSQ1": {
					"Dist": {
						"Fav": 993,
						"Neu": 730,
						"Unfav": 482
					},
					"N": 2205
				}
			},
			"654": {
				"RE01": {
					"Dist": {
						"Fav": 1788,
						"Neu": 231,
						"Unfav": 162
					},
					"N": 2181
				},
				"DM02": {
					"Dist": {
						"Fav": 1827,
						"Neu": 179,
						"Unfav": 175
					},
					"N": 2181
				},
				"RC01": {
					"Dist": {
						"Fav": 1571,
						"Neu": 335,
						"Unfav": 273
					},
					"N": 2179
				},
				"TW06": {
					"Dist": {
						"Fav": 1791,
						"Neu": 212,
						"Unfav": 179
					},
					"N": 2182
				},
				"QS01": {
					"Dist": {
						"Fav": 1652,
						"Neu": 335,
						"Unfav": 194
					},
					"N": 2181
				},
				"PE09": {
					"Dist": {
						"Fav": 1652,
						"Neu": 335,
						"Unfav": 194
					},
					"N": 2181
				},
				"AV15": {
					"Dist": {
						"Fav": 1924,
						"Neu": 153,
						"Unfav": 103
					},
					"N": 2180
				},
				"LD04": {
					"Dist": {
						"Fav": 1613,
						"Neu": 294,
						"Unfav": 271
					},
					"N": 2178
				},
				"WS03": {
					"Dist": {
						"Fav": 1845,
						"Neu": 178,
						"Unfav": 154
					},
					"N": 2177
				},
				"TR09": {
					"Dist": {
						"Fav": 1735,
						"Neu": 268,
						"Unfav": 176
					},
					"N": 2179
				},
				"PE06": {
					"Dist": {
						"Fav": 1838,
						"Neu": 192,
						"Unfav": 131
					},
					"N": 2161
				},
				"SD04": {
					"Dist": {
						"Fav": 1621,
						"Neu": 299,
						"Unfav": 260
					},
					"N": 2180
				},
				"PE03": {
					"Dist": {
						"Fav": 1696,
						"Neu": 297,
						"Unfav": 177
					},
					"N": 2170
				},
				"OM12": {
					"Dist": {
						"Fav": 1715,
						"Neu": 253,
						"Unfav": 183
					},
					"N": 2151
				},
				"QS16": {
					"Dist": {
						"Fav": 1436,
						"Neu": 450,
						"Unfav": 281
					},
					"N": 2167
				},
				"LD09": {
					"Dist": {
						"Fav": 1712,
						"Neu": 253,
						"Unfav": 212
					},
					"N": 2177
				},
				"TR01": {
					"Dist": {
						"Fav": 1876,
						"Neu": 196,
						"Unfav": 107
					},
					"N": 2179
				},
				"VC04": {
					"Dist": {
						"Fav": 1878,
						"Neu": 217,
						"Unfav": 80
					},
					"N": 2175
				},
				"GP07": {
					"Dist": {
						"Fav": 1242,
						"Neu": 453,
						"Unfav": 445
					},
					"N": 2140
				},
				"ER01": {
					"Dist": {
						"Fav": 1470,
						"Neu": 383,
						"Unfav": 320
					},
					"N": 2173
				},
				"IV02": {
					"Dist": {
						"Fav": 1303,
						"Neu": 455,
						"Unfav": 408
					},
					"N": 2166
				},
				"CP14": {
					"Dist": {
						"Fav": 1206,
						"Neu": 426,
						"Unfav": 515
					},
					"N": 2147
				},
				"GP12": {
					"Dist": {
						"Fav": 1716,
						"Neu": 276,
						"Unfav": 159
					},
					"N": 2151
				},
				"CP11": {
					"Dist": {
						"Fav": 1794,
						"Neu": 238,
						"Unfav": 51
					},
					"N": 2083
				},
				"WE01": {
					"Dist": {
						"Fav": 1796,
						"Neu": 252,
						"Unfav": 127
					},
					"N": 2175
				},
				"IV04": {
					"Dist": {
						"Fav": 1672,
						"Neu": 352,
						"Unfav": 82
					},
					"N": 2106
				},
				"WE12": {
					"Dist": {
						"Fav": 1540,
						"Neu": 421,
						"Unfav": 184
					},
					"N": 2145
				},
				"SP12": {
					"Dist": {
						"Fav": 1546,
						"Neu": 417,
						"Unfav": 212
					},
					"N": 2175
				},
				"AV09": {
					"Dist": {
						"Fav": 1821,
						"Neu": 260,
						"Unfav": 60
					},
					"N": 2141
				},
				"TW04": {
					"Dist": {
						"Fav": 1030,
						"Neu": 622,
						"Unfav": 171
					},
					"N": 1823
				},
				"CP12": {
					"Dist": {
						"Fav": 1645,
						"Neu": 328,
						"Unfav": 190
					},
					"N": 2163
				},
				"DC11": {
					"Dist": {
						"Fav": 1823,
						"Neu": 277,
						"Unfav": 79
					},
					"N": 2179
				},
				"BN01": {
					"Dist": {
						"Fav": 1733,
						"Neu": 283,
						"Unfav": 156
					},
					"N": 2172
				},
				"GP09": {
					"Dist": {
						"Fav": 1530,
						"Neu": 308,
						"Unfav": 340
					},
					"N": 2178
				},
				"QS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR04": {
					"Dist": {
						"Fav": 1338,
						"Neu": 362,
						"Unfav": 480
					},
					"N": 2180
				},
				"QS02": {
					"Dist": {
						"Fav": 686,
						"Neu": 368,
						"Unfav": 739
					},
					"N": 1793
				},
				"JS05": {
					"Dist": {
						"Fav": 716,
						"Neu": 347,
						"Unfav": 702
					},
					"N": 1765
				},
				"OM11": {
					"Dist": {
						"Fav": 711,
						"Neu": 364,
						"Unfav": 700
					},
					"N": 1775
				},
				"SD05": {
					"Dist": {
						"Fav": 732,
						"Neu": 348,
						"Unfav": 714
					},
					"N": 1794
				},
				"SD03": {
					"Dist": {
						"Fav": 697,
						"Neu": 366,
						"Unfav": 737
					},
					"N": 1800
				},
				"OS02": {
					"Dist": {
						"Fav": 724,
						"Neu": 357,
						"Unfav": 711
					},
					"N": 1792
				},
				"JS02": {
					"Dist": {
						"Fav": 666,
						"Neu": 396,
						"Unfav": 723
					},
					"N": 1785
				},
				"ST01": {
					"Dist": {
						"Fav": 709,
						"Neu": 344,
						"Unfav": 738
					},
					"N": 1791
				},
				"WL01": {
					"Dist": {
						"Fav": 708,
						"Neu": 374,
						"Unfav": 735
					},
					"N": 1817
				},
				"GP10": {
					"Dist": {
						"Fav": 701,
						"Neu": 385,
						"Unfav": 717
					},
					"N": 1803
				},
				"WE08": {
					"Dist": {
						"Fav": 697,
						"Neu": 348,
						"Unfav": 734
					},
					"N": 1779
				},
				"DM04": {
					"Dist": {
						"Fav": 713,
						"Neu": 378,
						"Unfav": 709
					},
					"N": 1800
				},
				"DM18": {
					"Dist": {
						"Fav": 735,
						"Neu": 372,
						"Unfav": 702
					},
					"N": 1809
				},
				"SP45": {
					"Dist": {
						"Fav": 727,
						"Neu": 370,
						"Unfav": 697
					},
					"N": 1794
				},
				"SV03": {
					"Dist": {
						"Fav": 685,
						"Neu": 348,
						"Unfav": 758
					},
					"N": 1791
				},
				"SR05": {
					"Dist": {
						"Fav": 714,
						"Neu": 353,
						"Unfav": 708
					},
					"N": 1775
				},
				"SR03": {
					"Dist": {
						"Fav": 744,
						"Neu": 324,
						"Unfav": 716
					},
					"N": 1784
				},
				"TW02": {
					"Dist": {
						"Fav": 731,
						"Neu": 379,
						"Unfav": 679
					},
					"N": 1789
				},
				"DC08": {
					"Dist": {
						"Fav": 698,
						"Neu": 369,
						"Unfav": 727
					},
					"N": 1794
				},
				"GP03": {
					"Dist": {
						"Fav": 716,
						"Neu": 364,
						"Unfav": 727
					},
					"N": 1807
				},
				"PE01": {
					"Dist": {
						"Fav": 724,
						"Neu": 354,
						"Unfav": 702
					},
					"N": 1780
				},
				"AV01": {
					"Dist": {
						"Fav": 729,
						"Neu": 351,
						"Unfav": 718
					},
					"N": 1798
				},
				"AV08": {
					"Dist": {
						"Fav": 729,
						"Neu": 369,
						"Unfav": 685
					},
					"N": 1783
				},
				"BN04": {
					"Dist": {
						"Fav": 703,
						"Neu": 349,
						"Unfav": 692
					},
					"N": 1744
				},
				"CP16": {
					"Dist": {
						"Fav": 731,
						"Neu": 351,
						"Unfav": 701
					},
					"N": 1783
				},
				"PE10": {
					"Dist": {
						"Fav": 725,
						"Neu": 365,
						"Unfav": 688
					},
					"N": 1778
				},
				"PE21": {
					"Dist": {
						"Fav": 728,
						"Neu": 373,
						"Unfav": 704
					},
					"N": 1805
				},
				"OM04": {
					"Dist": {
						"Fav": 719,
						"Neu": 351,
						"Unfav": 757
					},
					"N": 1827
				},
				"QS09": {
					"Dist": {
						"Fav": 688,
						"Neu": 365,
						"Unfav": 717
					},
					"N": 1770
				},
				"SP04": {
					"Dist": {
						"Fav": 662,
						"Neu": 357,
						"Unfav": 742
					},
					"N": 1761
				},
				"WK01": {
					"Dist": {
						"Fav": 739,
						"Neu": 359,
						"Unfav": 699
					},
					"N": 1797
				},
				"DI03": {
					"Dist": {
						"Fav": 695,
						"Neu": 365,
						"Unfav": 729
					},
					"N": 1789
				},
				"WK02": {
					"Dist": {
						"Fav": 699,
						"Neu": 351,
						"Unfav": 724
					},
					"N": 1774
				},
				"SP47": {
					"Dist": {
						"Fav": 741,
						"Neu": 350,
						"Unfav": 698
					},
					"N": 1789
				},
				"WS01": {
					"Dist": {
						"Fav": 745,
						"Neu": 346,
						"Unfav": 700
					},
					"N": 1791
				},
				"DC09": {
					"Dist": {
						"Fav": 665,
						"Neu": 376,
						"Unfav": 719
					},
					"N": 1760
				},
				"AV02": {
					"Dist": {
						"Fav": 1788,
						"Neu": 231,
						"Unfav": 162
					},
					"N": 2181
				},
				"DI04": {
					"Dist": {
						"Fav": 1827,
						"Neu": 179,
						"Unfav": 175
					},
					"N": 2181
				},
				"IV05": {
					"Dist": {
						"Fav": 1571,
						"Neu": 335,
						"Unfav": 273
					},
					"N": 2179
				},
				"OM06": {
					"Dist": {
						"Fav": 425,
						"Neu": 432,
						"Unfav": 875
					},
					"N": 1732
				},
				"NSQ1": {
					"Dist": {
						"Fav": 1002,
						"Neu": 745,
						"Unfav": 435
					},
					"N": 2182
				}
			},
			"655": {
				"RE01": {
					"Dist": {
						"Fav": 1765,
						"Neu": 229,
						"Unfav": 194
					},
					"N": 2188
				},
				"DM02": {
					"Dist": {
						"Fav": 1841,
						"Neu": 169,
						"Unfav": 180
					},
					"N": 2190
				},
				"RC01": {
					"Dist": {
						"Fav": 1588,
						"Neu": 323,
						"Unfav": 274
					},
					"N": 2185
				},
				"TW06": {
					"Dist": {
						"Fav": 1788,
						"Neu": 227,
						"Unfav": 172
					},
					"N": 2187
				},
				"QS01": {
					"Dist": {
						"Fav": 1648,
						"Neu": 318,
						"Unfav": 223
					},
					"N": 2189
				},
				"PE09": {
					"Dist": {
						"Fav": 1648,
						"Neu": 318,
						"Unfav": 223
					},
					"N": 2189
				},
				"AV15": {
					"Dist": {
						"Fav": 1936,
						"Neu": 141,
						"Unfav": 113
					},
					"N": 2190
				},
				"LD04": {
					"Dist": {
						"Fav": 1584,
						"Neu": 322,
						"Unfav": 282
					},
					"N": 2188
				},
				"WS03": {
					"Dist": {
						"Fav": 1824,
						"Neu": 202,
						"Unfav": 161
					},
					"N": 2187
				},
				"TR09": {
					"Dist": {
						"Fav": 1725,
						"Neu": 284,
						"Unfav": 179
					},
					"N": 2188
				},
				"PE06": {
					"Dist": {
						"Fav": 1850,
						"Neu": 215,
						"Unfav": 112
					},
					"N": 2177
				},
				"SD04": {
					"Dist": {
						"Fav": 1620,
						"Neu": 323,
						"Unfav": 241
					},
					"N": 2184
				},
				"PE03": {
					"Dist": {
						"Fav": 1739,
						"Neu": 281,
						"Unfav": 162
					},
					"N": 2182
				},
				"OM12": {
					"Dist": {
						"Fav": 1706,
						"Neu": 286,
						"Unfav": 167
					},
					"N": 2159
				},
				"QS16": {
					"Dist": {
						"Fav": 1465,
						"Neu": 429,
						"Unfav": 286
					},
					"N": 2180
				},
				"LD09": {
					"Dist": {
						"Fav": 1722,
						"Neu": 247,
						"Unfav": 219
					},
					"N": 2188
				},
				"TR01": {
					"Dist": {
						"Fav": 1871,
						"Neu": 204,
						"Unfav": 109
					},
					"N": 2184
				},
				"VC04": {
					"Dist": {
						"Fav": 1856,
						"Neu": 243,
						"Unfav": 87
					},
					"N": 2186
				},
				"GP07": {
					"Dist": {
						"Fav": 1221,
						"Neu": 443,
						"Unfav": 467
					},
					"N": 2131
				},
				"ER01": {
					"Dist": {
						"Fav": 1474,
						"Neu": 371,
						"Unfav": 341
					},
					"N": 2186
				},
				"IV02": {
					"Dist": {
						"Fav": 1311,
						"Neu": 447,
						"Unfav": 420
					},
					"N": 2178
				},
				"CP14": {
					"Dist": {
						"Fav": 1187,
						"Neu": 458,
						"Unfav": 525
					},
					"N": 2170
				},
				"GP12": {
					"Dist": {
						"Fav": 1709,
						"Neu": 271,
						"Unfav": 177
					},
					"N": 2157
				},
				"CP11": {
					"Dist": {
						"Fav": 1820,
						"Neu": 219,
						"Unfav": 54
					},
					"N": 2093
				},
				"WE01": {
					"Dist": {
						"Fav": 1797,
						"Neu": 259,
						"Unfav": 128
					},
					"N": 2184
				},
				"IV04": {
					"Dist": {
						"Fav": 1692,
						"Neu": 354,
						"Unfav": 70
					},
					"N": 2116
				},
				"WE12": {
					"Dist": {
						"Fav": 1566,
						"Neu": 367,
						"Unfav": 214
					},
					"N": 2147
				},
				"SP12": {
					"Dist": {
						"Fav": 1496,
						"Neu": 434,
						"Unfav": 253
					},
					"N": 2183
				},
				"AV09": {
					"Dist": {
						"Fav": 1830,
						"Neu": 258,
						"Unfav": 60
					},
					"N": 2148
				},
				"TW04": {
					"Dist": {
						"Fav": 956,
						"Neu": 647,
						"Unfav": 182
					},
					"N": 1785
				},
				"CP12": {
					"Dist": {
						"Fav": 1637,
						"Neu": 350,
						"Unfav": 184
					},
					"N": 2171
				},
				"DC11": {
					"Dist": {
						"Fav": 1818,
						"Neu": 294,
						"Unfav": 75
					},
					"N": 2187
				},
				"BN01": {
					"Dist": {
						"Fav": 1739,
						"Neu": 282,
						"Unfav": 164
					},
					"N": 2185
				},
				"GP09": {
					"Dist": {
						"Fav": 1484,
						"Neu": 325,
						"Unfav": 376
					},
					"N": 2185
				},
				"QS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR04": {
					"Dist": {
						"Fav": 1333,
						"Neu": 406,
						"Unfav": 447
					},
					"N": 2186
				},
				"QS02": {
					"Dist": {
						"Fav": 713,
						"Neu": 377,
						"Unfav": 697
					},
					"N": 1787
				},
				"JS05": {
					"Dist": {
						"Fav": 727,
						"Neu": 377,
						"Unfav": 669
					},
					"N": 1773
				},
				"OM11": {
					"Dist": {
						"Fav": 721,
						"Neu": 348,
						"Unfav": 765
					},
					"N": 1834
				},
				"SD05": {
					"Dist": {
						"Fav": 711,
						"Neu": 376,
						"Unfav": 725
					},
					"N": 1812
				},
				"SD03": {
					"Dist": {
						"Fav": 723,
						"Neu": 377,
						"Unfav": 706
					},
					"N": 1806
				},
				"OS02": {
					"Dist": {
						"Fav": 720,
						"Neu": 364,
						"Unfav": 749
					},
					"N": 1833
				},
				"JS02": {
					"Dist": {
						"Fav": 693,
						"Neu": 381,
						"Unfav": 726
					},
					"N": 1800
				},
				"ST01": {
					"Dist": {
						"Fav": 745,
						"Neu": 352,
						"Unfav": 727
					},
					"N": 1824
				},
				"WL01": {
					"Dist": {
						"Fav": 716,
						"Neu": 364,
						"Unfav": 736
					},
					"N": 1816
				},
				"GP10": {
					"Dist": {
						"Fav": 717,
						"Neu": 347,
						"Unfav": 750
					},
					"N": 1814
				},
				"WE08": {
					"Dist": {
						"Fav": 713,
						"Neu": 345,
						"Unfav": 764
					},
					"N": 1822
				},
				"DM04": {
					"Dist": {
						"Fav": 710,
						"Neu": 373,
						"Unfav": 739
					},
					"N": 1822
				},
				"DM18": {
					"Dist": {
						"Fav": 712,
						"Neu": 360,
						"Unfav": 699
					},
					"N": 1771
				},
				"SP45": {
					"Dist": {
						"Fav": 722,
						"Neu": 373,
						"Unfav": 709
					},
					"N": 1804
				},
				"SV03": {
					"Dist": {
						"Fav": 687,
						"Neu": 359,
						"Unfav": 755
					},
					"N": 1801
				},
				"SR05": {
					"Dist": {
						"Fav": 750,
						"Neu": 350,
						"Unfav": 695
					},
					"N": 1795
				},
				"SR03": {
					"Dist": {
						"Fav": 694,
						"Neu": 387,
						"Unfav": 718
					},
					"N": 1799
				},
				"TW02": {
					"Dist": {
						"Fav": 710,
						"Neu": 388,
						"Unfav": 725
					},
					"N": 1823
				},
				"DC08": {
					"Dist": {
						"Fav": 707,
						"Neu": 368,
						"Unfav": 765
					},
					"N": 1840
				},
				"GP03": {
					"Dist": {
						"Fav": 772,
						"Neu": 357,
						"Unfav": 696
					},
					"N": 1825
				},
				"PE01": {
					"Dist": {
						"Fav": 733,
						"Neu": 362,
						"Unfav": 720
					},
					"N": 1815
				},
				"AV01": {
					"Dist": {
						"Fav": 672,
						"Neu": 391,
						"Unfav": 721
					},
					"N": 1784
				},
				"AV08": {
					"Dist": {
						"Fav": 764,
						"Neu": 334,
						"Unfav": 717
					},
					"N": 1815
				},
				"BN04": {
					"Dist": {
						"Fav": 754,
						"Neu": 365,
						"Unfav": 680
					},
					"N": 1799
				},
				"CP16": {
					"Dist": {
						"Fav": 680,
						"Neu": 342,
						"Unfav": 758
					},
					"N": 1780
				},
				"PE10": {
					"Dist": {
						"Fav": 730,
						"Neu": 368,
						"Unfav": 674
					},
					"N": 1772
				},
				"PE21": {
					"Dist": {
						"Fav": 762,
						"Neu": 367,
						"Unfav": 691
					},
					"N": 1820
				},
				"OM04": {
					"Dist": {
						"Fav": 700,
						"Neu": 329,
						"Unfav": 740
					},
					"N": 1769
				},
				"QS09": {
					"Dist": {
						"Fav": 722,
						"Neu": 390,
						"Unfav": 696
					},
					"N": 1808
				},
				"SP04": {
					"Dist": {
						"Fav": 701,
						"Neu": 390,
						"Unfav": 686
					},
					"N": 1777
				},
				"WK01": {
					"Dist": {
						"Fav": 672,
						"Neu": 388,
						"Unfav": 712
					},
					"N": 1772
				},
				"DI03": {
					"Dist": {
						"Fav": 700,
						"Neu": 323,
						"Unfav": 748
					},
					"N": 1771
				},
				"WK02": {
					"Dist": {
						"Fav": 702,
						"Neu": 374,
						"Unfav": 713
					},
					"N": 1789
				},
				"SP47": {
					"Dist": {
						"Fav": 715,
						"Neu": 367,
						"Unfav": 704
					},
					"N": 1786
				},
				"WS01": {
					"Dist": {
						"Fav": 720,
						"Neu": 345,
						"Unfav": 749
					},
					"N": 1814
				},
				"DC09": {
					"Dist": {
						"Fav": 715,
						"Neu": 370,
						"Unfav": 713
					},
					"N": 1798
				},
				"AV02": {
					"Dist": {
						"Fav": 1765,
						"Neu": 229,
						"Unfav": 194
					},
					"N": 2188
				},
				"DI04": {
					"Dist": {
						"Fav": 1841,
						"Neu": 169,
						"Unfav": 180
					},
					"N": 2190
				},
				"IV05": {
					"Dist": {
						"Fav": 1588,
						"Neu": 323,
						"Unfav": 274
					},
					"N": 2185
				},
				"OM06": {
					"Dist": {
						"Fav": 431,
						"Neu": 418,
						"Unfav": 852
					},
					"N": 1701
				},
				"NSQ1": {
					"Dist": {
						"Fav": 979,
						"Neu": 772,
						"Unfav": 440
					},
					"N": 2191
				}
			},
			"656": {
				"RE01": {
					"Dist": {
						"Fav": 1749,
						"Neu": 238,
						"Unfav": 178
					},
					"N": 2165
				},
				"DM02": {
					"Dist": {
						"Fav": 1798,
						"Neu": 177,
						"Unfav": 187
					},
					"N": 2162
				},
				"RC01": {
					"Dist": {
						"Fav": 1548,
						"Neu": 347,
						"Unfav": 265
					},
					"N": 2160
				},
				"TW06": {
					"Dist": {
						"Fav": 1724,
						"Neu": 227,
						"Unfav": 214
					},
					"N": 2165
				},
				"QS01": {
					"Dist": {
						"Fav": 1611,
						"Neu": 334,
						"Unfav": 220
					},
					"N": 2165
				},
				"PE09": {
					"Dist": {
						"Fav": 1611,
						"Neu": 334,
						"Unfav": 220
					},
					"N": 2165
				},
				"AV15": {
					"Dist": {
						"Fav": 1896,
						"Neu": 151,
						"Unfav": 117
					},
					"N": 2164
				},
				"LD04": {
					"Dist": {
						"Fav": 1567,
						"Neu": 329,
						"Unfav": 264
					},
					"N": 2160
				},
				"WS03": {
					"Dist": {
						"Fav": 1810,
						"Neu": 188,
						"Unfav": 164
					},
					"N": 2162
				},
				"TR09": {
					"Dist": {
						"Fav": 1709,
						"Neu": 270,
						"Unfav": 185
					},
					"N": 2164
				},
				"PE06": {
					"Dist": {
						"Fav": 1789,
						"Neu": 223,
						"Unfav": 141
					},
					"N": 2153
				},
				"SD04": {
					"Dist": {
						"Fav": 1586,
						"Neu": 310,
						"Unfav": 264
					},
					"N": 2160
				},
				"PE03": {
					"Dist": {
						"Fav": 1671,
						"Neu": 289,
						"Unfav": 194
					},
					"N": 2154
				},
				"OM12": {
					"Dist": {
						"Fav": 1638,
						"Neu": 278,
						"Unfav": 219
					},
					"N": 2135
				},
				"QS16": {
					"Dist": {
						"Fav": 1426,
						"Neu": 443,
						"Unfav": 281
					},
					"N": 2150
				},
				"LD09": {
					"Dist": {
						"Fav": 1657,
						"Neu": 268,
						"Unfav": 236
					},
					"N": 2161
				},
				"TR01": {
					"Dist": {
						"Fav": 1852,
						"Neu": 194,
						"Unfav": 110
					},
					"N": 2156
				},
				"VC04": {
					"Dist": {
						"Fav": 1846,
						"Neu": 234,
						"Unfav": 79
					},
					"N": 2159
				},
				"GP07": {
					"Dist": {
						"Fav": 1244,
						"Neu": 460,
						"Unfav": 417
					},
					"N": 2121
				},
				"ER01": {
					"Dist": {
						"Fav": 1481,
						"Neu": 373,
						"Unfav": 302
					},
					"N": 2156
				},
				"IV02": {
					"Dist": {
						"Fav": 1285,
						"Neu": 459,
						"Unfav": 403
					},
					"N": 2147
				},
				"CP14": {
					"Dist": {
						"Fav": 1129,
						"Neu": 466,
						"Unfav": 542
					},
					"N": 2137
				},
				"GP12": {
					"Dist": {
						"Fav": 1660,
						"Neu": 299,
						"Unfav": 175
					},
					"N": 2134
				},
				"CP11": {
					"Dist": {
						"Fav": 1775,
						"Neu": 231,
						"Unfav": 56
					},
					"N": 2062
				},
				"WE01": {
					"Dist": {
						"Fav": 1776,
						"Neu": 230,
						"Unfav": 155
					},
					"N": 2161
				},
				"IV04": {
					"Dist": {
						"Fav": 1663,
						"Neu": 359,
						"Unfav": 90
					},
					"N": 2112
				},
				"WE12": {
					"Dist": {
						"Fav": 1511,
						"Neu": 413,
						"Unfav": 207
					},
					"N": 2131
				},
				"SP12": {
					"Dist": {
						"Fav": 1474,
						"Neu": 425,
						"Unfav": 256
					},
					"N": 2155
				},
				"AV09": {
					"Dist": {
						"Fav": 1823,
						"Neu": 261,
						"Unfav": 42
					},
					"N": 2126
				},
				"TW04": {
					"Dist": {
						"Fav": 982,
						"Neu": 635,
						"Unfav": 195
					},
					"N": 1812
				},
				"CP12": {
					"Dist": {
						"Fav": 1576,
						"Neu": 360,
						"Unfav": 212
					},
					"N": 2148
				},
				"DC11": {
					"Dist": {
						"Fav": 1788,
						"Neu": 296,
						"Unfav": 75
					},
					"N": 2159
				},
				"BN01": {
					"Dist": {
						"Fav": 1711,
						"Neu": 289,
						"Unfav": 160
					},
					"N": 2160
				},
				"GP09": {
					"Dist": {
						"Fav": 1464,
						"Neu": 321,
						"Unfav": 377
					},
					"N": 2162
				},
				"QS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR04": {
					"Dist": {
						"Fav": 1288,
						"Neu": 394,
						"Unfav": 482
					},
					"N": 2164
				},
				"QS02": {
					"Dist": {
						"Fav": 742,
						"Neu": 359,
						"Unfav": 679
					},
					"N": 1780
				},
				"JS05": {
					"Dist": {
						"Fav": 756,
						"Neu": 361,
						"Unfav": 696
					},
					"N": 1813
				},
				"OM11": {
					"Dist": {
						"Fav": 747,
						"Neu": 322,
						"Unfav": 746
					},
					"N": 1815
				},
				"SD05": {
					"Dist": {
						"Fav": 731,
						"Neu": 382,
						"Unfav": 685
					},
					"N": 1798
				},
				"SD03": {
					"Dist": {
						"Fav": 737,
						"Neu": 327,
						"Unfav": 731
					},
					"N": 1795
				},
				"OS02": {
					"Dist": {
						"Fav": 719,
						"Neu": 361,
						"Unfav": 678
					},
					"N": 1758
				},
				"JS02": {
					"Dist": {
						"Fav": 760,
						"Neu": 358,
						"Unfav": 682
					},
					"N": 1800
				},
				"ST01": {
					"Dist": {
						"Fav": 681,
						"Neu": 368,
						"Unfav": 736
					},
					"N": 1785
				},
				"WL01": {
					"Dist": {
						"Fav": 697,
						"Neu": 354,
						"Unfav": 725
					},
					"N": 1776
				},
				"GP10": {
					"Dist": {
						"Fav": 691,
						"Neu": 361,
						"Unfav": 715
					},
					"N": 1767
				},
				"WE08": {
					"Dist": {
						"Fav": 717,
						"Neu": 382,
						"Unfav": 717
					},
					"N": 1816
				},
				"DM04": {
					"Dist": {
						"Fav": 756,
						"Neu": 344,
						"Unfav": 692
					},
					"N": 1792
				},
				"DM18": {
					"Dist": {
						"Fav": 673,
						"Neu": 377,
						"Unfav": 714
					},
					"N": 1764
				},
				"SP45": {
					"Dist": {
						"Fav": 712,
						"Neu": 372,
						"Unfav": 690
					},
					"N": 1774
				},
				"SV03": {
					"Dist": {
						"Fav": 744,
						"Neu": 338,
						"Unfav": 705
					},
					"N": 1787
				},
				"SR05": {
					"Dist": {
						"Fav": 738,
						"Neu": 329,
						"Unfav": 723
					},
					"N": 1790
				},
				"SR03": {
					"Dist": {
						"Fav": 691,
						"Neu": 361,
						"Unfav": 742
					},
					"N": 1794
				},
				"TW02": {
					"Dist": {
						"Fav": 703,
						"Neu": 378,
						"Unfav": 712
					},
					"N": 1793
				},
				"DC08": {
					"Dist": {
						"Fav": 694,
						"Neu": 343,
						"Unfav": 722
					},
					"N": 1759
				},
				"GP03": {
					"Dist": {
						"Fav": 724,
						"Neu": 355,
						"Unfav": 706
					},
					"N": 1785
				},
				"PE01": {
					"Dist": {
						"Fav": 696,
						"Neu": 382,
						"Unfav": 704
					},
					"N": 1782
				},
				"AV01": {
					"Dist": {
						"Fav": 722,
						"Neu": 359,
						"Unfav": 689
					},
					"N": 1770
				},
				"AV08": {
					"Dist": {
						"Fav": 741,
						"Neu": 365,
						"Unfav": 691
					},
					"N": 1797
				},
				"BN04": {
					"Dist": {
						"Fav": 720,
						"Neu": 332,
						"Unfav": 743
					},
					"N": 1795
				},
				"CP16": {
					"Dist": {
						"Fav": 741,
						"Neu": 342,
						"Unfav": 666
					},
					"N": 1749
				},
				"PE10": {
					"Dist": {
						"Fav": 756,
						"Neu": 391,
						"Unfav": 677
					},
					"N": 1824
				},
				"PE21": {
					"Dist": {
						"Fav": 727,
						"Neu": 352,
						"Unfav": 716
					},
					"N": 1795
				},
				"OM04": {
					"Dist": {
						"Fav": 728,
						"Neu": 384,
						"Unfav": 649
					},
					"N": 1761
				},
				"QS09": {
					"Dist": {
						"Fav": 705,
						"Neu": 353,
						"Unfav": 708
					},
					"N": 1766
				},
				"SP04": {
					"Dist": {
						"Fav": 697,
						"Neu": 385,
						"Unfav": 699
					},
					"N": 1781
				},
				"WK01": {
					"Dist": {
						"Fav": 684,
						"Neu": 372,
						"Unfav": 698
					},
					"N": 1754
				},
				"DI03": {
					"Dist": {
						"Fav": 713,
						"Neu": 355,
						"Unfav": 721
					},
					"N": 1789
				},
				"WK02": {
					"Dist": {
						"Fav": 689,
						"Neu": 376,
						"Unfav": 721
					},
					"N": 1786
				},
				"SP47": {
					"Dist": {
						"Fav": 722,
						"Neu": 340,
						"Unfav": 714
					},
					"N": 1776
				},
				"WS01": {
					"Dist": {
						"Fav": 708,
						"Neu": 348,
						"Unfav": 702
					},
					"N": 1758
				},
				"DC09": {
					"Dist": {
						"Fav": 742,
						"Neu": 350,
						"Unfav": 714
					},
					"N": 1806
				},
				"AV02": {
					"Dist": {
						"Fav": 1749,
						"Neu": 238,
						"Unfav": 178
					},
					"N": 2165
				},
				"DI04": {
					"Dist": {
						"Fav": 1798,
						"Neu": 177,
						"Unfav": 187
					},
					"N": 2162
				},
				"IV05": {
					"Dist": {
						"Fav": 1548,
						"Neu": 347,
						"Unfav": 265
					},
					"N": 2160
				},
				"OM06": {
					"Dist": {
						"Fav": 452,
						"Neu": 391,
						"Unfav": 870
					},
					"N": 1713
				},
				"NSQ1": {
					"Dist": {
						"Fav": 954,
						"Neu": 743,
						"Unfav": 468
					},
					"N": 2165
				}
			}
		}
	};
	for (var key in tmp) data[key] = tmp[key];

	var tmp = {
		"ITEMSX.2020.389.0.GENDER": {
			"410": {
				"RE01": {
					"Dist": {
						"Fav": 3233,
						"Neu": 383,
						"Unfav": 368
					},
					"N": 3984
				},
				"DM02": {
					"Dist": {
						"Fav": 3258,
						"Neu": 364,
						"Unfav": 363
					},
					"N": 3985
				},
				"RC01": {
					"Dist": {
						"Fav": 2865,
						"Neu": 609,
						"Unfav": 506
					},
					"N": 3980
				},
				"TW06": {
					"Dist": {
						"Fav": 3202,
						"Neu": 438,
						"Unfav": 339
					},
					"N": 3979
				},
				"QS01": {
					"Dist": {
						"Fav": 2976,
						"Neu": 585,
						"Unfav": 424
					},
					"N": 3985
				},
				"PE09": {
					"Dist": {
						"Fav": 2976,
						"Neu": 585,
						"Unfav": 424
					},
					"N": 3985
				},
				"AV15": {
					"Dist": {
						"Fav": 3477,
						"Neu": 274,
						"Unfav": 229
					},
					"N": 3980
				},
				"LD04": {
					"Dist": {
						"Fav": 2923,
						"Neu": 518,
						"Unfav": 540
					},
					"N": 3981
				},
				"WS03": {
					"Dist": {
						"Fav": 3300,
						"Neu": 361,
						"Unfav": 320
					},
					"N": 3981
				},
				"TR09": {
					"Dist": {
						"Fav": 3159,
						"Neu": 482,
						"Unfav": 338
					},
					"N": 3979
				},
				"PE06": {
					"Dist": {
						"Fav": 3359,
						"Neu": 362,
						"Unfav": 235
					},
					"N": 3956
				},
				"SD04": {
					"Dist": {
						"Fav": 2885,
						"Neu": 560,
						"Unfav": 530
					},
					"N": 3975
				},
				"PE03": {
					"Dist": {
						"Fav": 3100,
						"Neu": 545,
						"Unfav": 323
					},
					"N": 3968
				},
				"OM12": {
					"Dist": {
						"Fav": 3035,
						"Neu": 523,
						"Unfav": 366
					},
					"N": 3924
				},
				"QS16": {
					"Dist": {
						"Fav": 2619,
						"Neu": 820,
						"Unfav": 520
					},
					"N": 3959
				},
				"LD09": {
					"Dist": {
						"Fav": 3045,
						"Neu": 517,
						"Unfav": 415
					},
					"N": 3977
				},
				"TR01": {
					"Dist": {
						"Fav": 3399,
						"Neu": 360,
						"Unfav": 215
					},
					"N": 3974
				},
				"VC04": {
					"Dist": {
						"Fav": 3412,
						"Neu": 384,
						"Unfav": 174
					},
					"N": 3970
				},
				"GP07": {
					"Dist": {
						"Fav": 2112,
						"Neu": 918,
						"Unfav": 868
					},
					"N": 3898
				},
				"ER01": {
					"Dist": {
						"Fav": 2528,
						"Neu": 784,
						"Unfav": 657
					},
					"N": 3969
				},
				"IV02": {
					"Dist": {
						"Fav": 2494,
						"Neu": 827,
						"Unfav": 643
					},
					"N": 3964
				},
				"CP14": {
					"Dist": {
						"Fav": 2059,
						"Neu": 867,
						"Unfav": 1012
					},
					"N": 3938
				},
				"GP12": {
					"Dist": {
						"Fav": 3039,
						"Neu": 542,
						"Unfav": 343
					},
					"N": 3924
				},
				"CP11": {
					"Dist": {
						"Fav": 3310,
						"Neu": 410,
						"Unfav": 102
					},
					"N": 3822
				},
				"WE01": {
					"Dist": {
						"Fav": 3314,
						"Neu": 415,
						"Unfav": 255
					},
					"N": 3984
				},
				"IV04": {
					"Dist": {
						"Fav": 2999,
						"Neu": 697,
						"Unfav": 180
					},
					"N": 3876
				},
				"WE12": {
					"Dist": {
						"Fav": 2818,
						"Neu": 706,
						"Unfav": 406
					},
					"N": 3930
				},
				"SP12": {
					"Dist": {
						"Fav": 2682,
						"Neu": 776,
						"Unfav": 517
					},
					"N": 3975
				},
				"AV09": {
					"Dist": {
						"Fav": 3258,
						"Neu": 531,
						"Unfav": 112
					},
					"N": 3901
				},
				"TW04": {
					"Dist": {
						"Fav": 2144,
						"Neu": 1081,
						"Unfav": 385
					},
					"N": 3610
				},
				"CP12": {
					"Dist": {
						"Fav": 2887,
						"Neu": 680,
						"Unfav": 384
					},
					"N": 3951
				},
				"DC11": {
					"Dist": {
						"Fav": 3283,
						"Neu": 541,
						"Unfav": 158
					},
					"N": 3982
				},
				"BN01": {
					"Dist": {
						"Fav": 3040,
						"Neu": 584,
						"Unfav": 345
					},
					"N": 3969
				},
				"GP09": {
					"Dist": {
						"Fav": 2603,
						"Neu": 630,
						"Unfav": 745
					},
					"N": 3978
				},
				"QS03": {
					"Dist": {
						"Fav": 3357,
						"Neu": 441,
						"Unfav": 147
					},
					"N": 3945
				},
				"OM01": {
					"Dist": {
						"Fav": 3235,
						"Neu": 470,
						"Unfav": 183
					},
					"N": 3888
				},
				"TR04": {
					"Dist": {
						"Fav": 2170,
						"Neu": 927,
						"Unfav": 880
					},
					"N": 3977
				},
				"QS02": {
					"Dist": {
						"Fav": 1296,
						"Neu": 661,
						"Unfav": 1316
					},
					"N": 3273
				},
				"JS05": {
					"Dist": {
						"Fav": 1288,
						"Neu": 658,
						"Unfav": 1266
					},
					"N": 3212
				},
				"OM11": {
					"Dist": {
						"Fav": 1377,
						"Neu": 635,
						"Unfav": 1284
					},
					"N": 3296
				},
				"SD05": {
					"Dist": {
						"Fav": 1332,
						"Neu": 676,
						"Unfav": 1269
					},
					"N": 3277
				},
				"SD03": {
					"Dist": {
						"Fav": 1367,
						"Neu": 613,
						"Unfav": 1293
					},
					"N": 3273
				},
				"OS02": {
					"Dist": {
						"Fav": 1333,
						"Neu": 671,
						"Unfav": 1284
					},
					"N": 3288
				},
				"JS02": {
					"Dist": {
						"Fav": 1286,
						"Neu": 689,
						"Unfav": 1318
					},
					"N": 3293
				},
				"ST01": {
					"Dist": {
						"Fav": 1337,
						"Neu": 620,
						"Unfav": 1347
					},
					"N": 3304
				},
				"WL01": {
					"Dist": {
						"Fav": 1334,
						"Neu": 654,
						"Unfav": 1274
					},
					"N": 3262
				},
				"GP10": {
					"Dist": {
						"Fav": 1285,
						"Neu": 663,
						"Unfav": 1365
					},
					"N": 3313
				},
				"WE08": {
					"Dist": {
						"Fav": 1303,
						"Neu": 663,
						"Unfav": 1310
					},
					"N": 3276
				},
				"DM04": {
					"Dist": {
						"Fav": 1327,
						"Neu": 603,
						"Unfav": 1322
					},
					"N": 3252
				},
				"DM18": {
					"Dist": {
						"Fav": 1272,
						"Neu": 649,
						"Unfav": 1269
					},
					"N": 3190
				},
				"SP45": {
					"Dist": {
						"Fav": 1294,
						"Neu": 678,
						"Unfav": 1303
					},
					"N": 3275
				},
				"SV03": {
					"Dist": {
						"Fav": 1301,
						"Neu": 646,
						"Unfav": 1315
					},
					"N": 3262
				},
				"SR05": {
					"Dist": {
						"Fav": 1360,
						"Neu": 658,
						"Unfav": 1290
					},
					"N": 3308
				},
				"SR03": {
					"Dist": {
						"Fav": 1353,
						"Neu": 631,
						"Unfav": 1294
					},
					"N": 3278
				},
				"TW02": {
					"Dist": {
						"Fav": 1265,
						"Neu": 688,
						"Unfav": 1304
					},
					"N": 3257
				},
				"DC08": {
					"Dist": {
						"Fav": 1278,
						"Neu": 623,
						"Unfav": 1342
					},
					"N": 3243
				},
				"GP03": {
					"Dist": {
						"Fav": 1294,
						"Neu": 669,
						"Unfav": 1329
					},
					"N": 3292
				},
				"PE01": {
					"Dist": {
						"Fav": 1296,
						"Neu": 628,
						"Unfav": 1314
					},
					"N": 3238
				},
				"AV01": {
					"Dist": {
						"Fav": 1329,
						"Neu": 680,
						"Unfav": 1291
					},
					"N": 3300
				},
				"AV08": {
					"Dist": {
						"Fav": 1281,
						"Neu": 627,
						"Unfav": 1346
					},
					"N": 3254
				},
				"BN04": {
					"Dist": {
						"Fav": 1310,
						"Neu": 677,
						"Unfav": 1264
					},
					"N": 3251
				},
				"CP16": {
					"Dist": {
						"Fav": 1296,
						"Neu": 630,
						"Unfav": 1287
					},
					"N": 3213
				},
				"PE10": {
					"Dist": {
						"Fav": 1343,
						"Neu": 660,
						"Unfav": 1255
					},
					"N": 3258
				},
				"PE21": {
					"Dist": {
						"Fav": 1301,
						"Neu": 646,
						"Unfav": 1293
					},
					"N": 3240
				},
				"OM04": {
					"Dist": {
						"Fav": 1314,
						"Neu": 668,
						"Unfav": 1258
					},
					"N": 3240
				},
				"QS09": {
					"Dist": {
						"Fav": 1258,
						"Neu": 639,
						"Unfav": 1355
					},
					"N": 3252
				},
				"SP04": {
					"Dist": {
						"Fav": 1280,
						"Neu": 654,
						"Unfav": 1338
					},
					"N": 3272
				},
				"WK01": {
					"Dist": {
						"Fav": 1308,
						"Neu": 655,
						"Unfav": 1306
					},
					"N": 3269
				},
				"DI03": {
					"Dist": {
						"Fav": 1312,
						"Neu": 574,
						"Unfav": 1360
					},
					"N": 3246
				},
				"WK02": {
					"Dist": {
						"Fav": 1262,
						"Neu": 685,
						"Unfav": 1311
					},
					"N": 3258
				},
				"SP47": {
					"Dist": {
						"Fav": 1295,
						"Neu": 660,
						"Unfav": 1262
					},
					"N": 3217
				},
				"WS01": {
					"Dist": {
						"Fav": 1352,
						"Neu": 624,
						"Unfav": 1241
					},
					"N": 3217
				},
				"DC09": {
					"Dist": {
						"Fav": 1295,
						"Neu": 631,
						"Unfav": 1337
					},
					"N": 3263
				},
				"AV02": {
					"Dist": {
						"Fav": 3233,
						"Neu": 383,
						"Unfav": 368
					},
					"N": 3984
				},
				"DI04": {
					"Dist": {
						"Fav": 3258,
						"Neu": 364,
						"Unfav": 363
					},
					"N": 3985
				},
				"IV05": {
					"Dist": {
						"Fav": 2865,
						"Neu": 609,
						"Unfav": 506
					},
					"N": 3980
				},
				"OM06": {
					"Dist": {
						"Fav": 798,
						"Neu": 832,
						"Unfav": 1523
					},
					"N": 3153
				},
				"NSQ1": {
					"Dist": {
						"Fav": 1695,
						"Neu": 1417,
						"Unfav": 874
					},
					"N": 3986
				}
			},
			"420": {
				"RE01": {
					"Dist": {
						"Fav": 3143,
						"Neu": 443,
						"Unfav": 379
					},
					"N": 3965
				},
				"DM02": {
					"Dist": {
						"Fav": 3198,
						"Neu": 405,
						"Unfav": 361
					},
					"N": 3964
				},
				"RC01": {
					"Dist": {
						"Fav": 2805,
						"Neu": 649,
						"Unfav": 505
					},
					"N": 3959
				},
				"TW06": {
					"Dist": {
						"Fav": 3142,
						"Neu": 474,
						"Unfav": 344
					},
					"N": 3960
				},
				"QS01": {
					"Dist": {
						"Fav": 2881,
						"Neu": 630,
						"Unfav": 453
					},
					"N": 3964
				},
				"PE09": {
					"Dist": {
						"Fav": 2881,
						"Neu": 630,
						"Unfav": 453
					},
					"N": 3964
				},
				"AV15": {
					"Dist": {
						"Fav": 3397,
						"Neu": 307,
						"Unfav": 260
					},
					"N": 3964
				},
				"LD04": {
					"Dist": {
						"Fav": 2874,
						"Neu": 555,
						"Unfav": 534
					},
					"N": 3963
				},
				"WS03": {
					"Dist": {
						"Fav": 3270,
						"Neu": 380,
						"Unfav": 311
					},
					"N": 3961
				},
				"TR09": {
					"Dist": {
						"Fav": 3097,
						"Neu": 512,
						"Unfav": 352
					},
					"N": 3961
				},
				"PE06": {
					"Dist": {
						"Fav": 3299,
						"Neu": 391,
						"Unfav": 248
					},
					"N": 3938
				},
				"SD04": {
					"Dist": {
						"Fav": 2864,
						"Neu": 585,
						"Unfav": 512
					},
					"N": 3961
				},
				"PE03": {
					"Dist": {
						"Fav": 3029,
						"Neu": 546,
						"Unfav": 365
					},
					"N": 3940
				},
				"OM12": {
					"Dist": {
						"Fav": 2994,
						"Neu": 538,
						"Unfav": 365
					},
					"N": 3897
				},
				"QS16": {
					"Dist": {
						"Fav": 2595,
						"Neu": 820,
						"Unfav": 526
					},
					"N": 3941
				},
				"LD09": {
					"Dist": {
						"Fav": 3002,
						"Neu": 490,
						"Unfav": 457
					},
					"N": 3949
				},
				"TR01": {
					"Dist": {
						"Fav": 3332,
						"Neu": 411,
						"Unfav": 213
					},
					"N": 3956
				},
				"VC04": {
					"Dist": {
						"Fav": 3362,
						"Neu": 470,
						"Unfav": 122
					},
					"N": 3954
				},
				"GP07": {
					"Dist": {
						"Fav": 2100,
						"Neu": 868,
						"Unfav": 912
					},
					"N": 3880
				},
				"ER01": {
					"Dist": {
						"Fav": 2611,
						"Neu": 735,
						"Unfav": 604
					},
					"N": 3950
				},
				"IV02": {
					"Dist": {
						"Fav": 2475,
						"Neu": 810,
						"Unfav": 655
					},
					"N": 3940
				},
				"CP14": {
					"Dist": {
						"Fav": 2063,
						"Neu": 875,
						"Unfav": 969
					},
					"N": 3907
				},
				"GP12": {
					"Dist": {
						"Fav": 3065,
						"Neu": 538,
						"Unfav": 310
					},
					"N": 3913
				},
				"CP11": {
					"Dist": {
						"Fav": 3327,
						"Neu": 390,
						"Unfav": 79
					},
					"N": 3796
				},
				"WE01": {
					"Dist": {
						"Fav": 3330,
						"Neu": 414,
						"Unfav": 216
					},
					"N": 3960
				},
				"IV04": {
					"Dist": {
						"Fav": 3063,
						"Neu": 652,
						"Unfav": 152
					},
					"N": 3867
				},
				"WE12": {
					"Dist": {
						"Fav": 2825,
						"Neu": 697,
						"Unfav": 396
					},
					"N": 3918
				},
				"SP12": {
					"Dist": {
						"Fav": 2676,
						"Neu": 798,
						"Unfav": 486
					},
					"N": 3960
				},
				"AV09": {
					"Dist": {
						"Fav": 3295,
						"Neu": 504,
						"Unfav": 90
					},
					"N": 3889
				},
				"TW04": {
					"Dist": {
						"Fav": 2127,
						"Neu": 1068,
						"Unfav": 351
					},
					"N": 3546
				},
				"CP12": {
					"Dist": {
						"Fav": 2897,
						"Neu": 697,
						"Unfav": 349
					},
					"N": 3943
				},
				"DC11": {
					"Dist": {
						"Fav": 3247,
						"Neu": 569,
						"Unfav": 142
					},
					"N": 3958
				},
				"BN01": {
					"Dist": {
						"Fav": 3004,
						"Neu": 625,
						"Unfav": 323
					},
					"N": 3952
				},
				"GP09": {
					"Dist": {
						"Fav": 2551,
						"Neu": 666,
						"Unfav": 745
					},
					"N": 3962
				},
				"QS03": {
					"Dist": {
						"Fav": 3357,
						"Neu": 412,
						"Unfav": 143
					},
					"N": 3912
				},
				"OM01": {
					"Dist": {
						"Fav": 3183,
						"Neu": 498,
						"Unfav": 195
					},
					"N": 3876
				},
				"TR04": {
					"Dist": {
						"Fav": 2125,
						"Neu": 980,
						"Unfav": 855
					},
					"N": 3960
				},
				"QS02": {
					"Dist": {
						"Fav": 1290,
						"Neu": 636,
						"Unfav": 1357
					},
					"N": 3283
				},
				"JS05": {
					"Dist": {
						"Fav": 1323,
						"Neu": 691,
						"Unfav": 1266
					},
					"N": 3280
				},
				"OM11": {
					"Dist": {
						"Fav": 1333,
						"Neu": 656,
						"Unfav": 1283
					},
					"N": 3272
				},
				"SD05": {
					"Dist": {
						"Fav": 1379,
						"Neu": 594,
						"Unfav": 1266
					},
					"N": 3239
				},
				"SD03": {
					"Dist": {
						"Fav": 1308,
						"Neu": 679,
						"Unfav": 1310
					},
					"N": 3297
				},
				"OS02": {
					"Dist": {
						"Fav": 1335,
						"Neu": 662,
						"Unfav": 1278
					},
					"N": 3275
				},
				"JS02": {
					"Dist": {
						"Fav": 1332,
						"Neu": 618,
						"Unfav": 1304
					},
					"N": 3254
				},
				"ST01": {
					"Dist": {
						"Fav": 1296,
						"Neu": 654,
						"Unfav": 1285
					},
					"N": 3235
				},
				"WL01": {
					"Dist": {
						"Fav": 1261,
						"Neu": 715,
						"Unfav": 1269
					},
					"N": 3245
				},
				"GP10": {
					"Dist": {
						"Fav": 1279,
						"Neu": 631,
						"Unfav": 1313
					},
					"N": 3223
				},
				"WE08": {
					"Dist": {
						"Fav": 1291,
						"Neu": 665,
						"Unfav": 1347
					},
					"N": 3303
				},
				"DM04": {
					"Dist": {
						"Fav": 1294,
						"Neu": 649,
						"Unfav": 1335
					},
					"N": 3278
				},
				"DM18": {
					"Dist": {
						"Fav": 1302,
						"Neu": 617,
						"Unfav": 1360
					},
					"N": 3279
				},
				"SP45": {
					"Dist": {
						"Fav": 1338,
						"Neu": 647,
						"Unfav": 1233
					},
					"N": 3218
				},
				"SV03": {
					"Dist": {
						"Fav": 1272,
						"Neu": 655,
						"Unfav": 1327
					},
					"N": 3254
				},
				"SR05": {
					"Dist": {
						"Fav": 1304,
						"Neu": 660,
						"Unfav": 1320
					},
					"N": 3284
				},
				"SR03": {
					"Dist": {
						"Fav": 1276,
						"Neu": 643,
						"Unfav": 1324
					},
					"N": 3243
				},
				"TW02": {
					"Dist": {
						"Fav": 1310,
						"Neu": 699,
						"Unfav": 1243
					},
					"N": 3252
				},
				"DC08": {
					"Dist": {
						"Fav": 1331,
						"Neu": 655,
						"Unfav": 1296
					},
					"N": 3282
				},
				"GP03": {
					"Dist": {
						"Fav": 1394,
						"Neu": 626,
						"Unfav": 1245
					},
					"N": 3265
				},
				"PE01": {
					"Dist": {
						"Fav": 1338,
						"Neu": 662,
						"Unfav": 1298
					},
					"N": 3298
				},
				"AV01": {
					"Dist": {
						"Fav": 1376,
						"Neu": 635,
						"Unfav": 1267
					},
					"N": 3278
				},
				"AV08": {
					"Dist": {
						"Fav": 1294,
						"Neu": 661,
						"Unfav": 1293
					},
					"N": 3248
				},
				"BN04": {
					"Dist": {
						"Fav": 1291,
						"Neu": 662,
						"Unfav": 1296
					},
					"N": 3249
				},
				"CP16": {
					"Dist": {
						"Fav": 1287,
						"Neu": 622,
						"Unfav": 1305
					},
					"N": 3214
				},
				"PE10": {
					"Dist": {
						"Fav": 1297,
						"Neu": 643,
						"Unfav": 1318
					},
					"N": 3258
				},
				"PE21": {
					"Dist": {
						"Fav": 1269,
						"Neu": 677,
						"Unfav": 1321
					},
					"N": 3267
				},
				"OM04": {
					"Dist": {
						"Fav": 1267,
						"Neu": 649,
						"Unfav": 1304
					},
					"N": 3220
				},
				"QS09": {
					"Dist": {
						"Fav": 1281,
						"Neu": 634,
						"Unfav": 1314
					},
					"N": 3229
				},
				"SP04": {
					"Dist": {
						"Fav": 1270,
						"Neu": 687,
						"Unfav": 1297
					},
					"N": 3254
				},
				"WK01": {
					"Dist": {
						"Fav": 1281,
						"Neu": 622,
						"Unfav": 1339
					},
					"N": 3242
				},
				"DI03": {
					"Dist": {
						"Fav": 1285,
						"Neu": 705,
						"Unfav": 1279
					},
					"N": 3269
				},
				"WK02": {
					"Dist": {
						"Fav": 1262,
						"Neu": 688,
						"Unfav": 1300
					},
					"N": 3250
				},
				"SP47": {
					"Dist": {
						"Fav": 1297,
						"Neu": 645,
						"Unfav": 1300
					},
					"N": 3242
				},
				"WS01": {
					"Dist": {
						"Fav": 1276,
						"Neu": 641,
						"Unfav": 1282
					},
					"N": 3199
				},
				"DC09": {
					"Dist": {
						"Fav": 1336,
						"Neu": 618,
						"Unfav": 1318
					},
					"N": 3272
				},
				"AV02": {
					"Dist": {
						"Fav": 3143,
						"Neu": 443,
						"Unfav": 379
					},
					"N": 3965
				},
				"DI04": {
					"Dist": {
						"Fav": 3198,
						"Neu": 405,
						"Unfav": 361
					},
					"N": 3964
				},
				"IV05": {
					"Dist": {
						"Fav": 2805,
						"Neu": 649,
						"Unfav": 505
					},
					"N": 3959
				},
				"OM06": {
					"Dist": {
						"Fav": 776,
						"Neu": 794,
						"Unfav": 1592
					},
					"N": 3162
				},
				"NSQ1": {
					"Dist": {
						"Fav": 1709,
						"Neu": 1364,
						"Unfav": 894
					},
					"N": 3967
				}
			},
			"430": {
				"RE01": {
					"Dist": {
						"Fav": 3201,
						"Neu": 417,
						"Unfav": 302
					},
					"N": 3920
				},
				"DM02": {
					"Dist": {
						"Fav": 3254,
						"Neu": 335,
						"Unfav": 333
					},
					"N": 3922
				},
				"RC01": {
					"Dist": {
						"Fav": 2914,
						"Neu": 577,
						"Unfav": 428
					},
					"N": 3919
				},
				"TW06": {
					"Dist": {
						"Fav": 3175,
						"Neu": 408,
						"Unfav": 333
					},
					"N": 3916
				},
				"QS01": {
					"Dist": {
						"Fav": 2962,
						"Neu": 565,
						"Unfav": 392
					},
					"N": 3919
				},
				"PE09": {
					"Dist": {
						"Fav": 2962,
						"Neu": 565,
						"Unfav": 392
					},
					"N": 3919
				},
				"AV15": {
					"Dist": {
						"Fav": 3422,
						"Neu": 278,
						"Unfav": 218
					},
					"N": 3918
				},
				"LD04": {
					"Dist": {
						"Fav": 2895,
						"Neu": 585,
						"Unfav": 439
					},
					"N": 3919
				},
				"WS03": {
					"Dist": {
						"Fav": 3259,
						"Neu": 367,
						"Unfav": 291
					},
					"N": 3917
				},
				"TR09": {
					"Dist": {
						"Fav": 3131,
						"Neu": 491,
						"Unfav": 299
					},
					"N": 3921
				},
				"PE06": {
					"Dist": {
						"Fav": 3329,
						"Neu": 330,
						"Unfav": 225
					},
					"N": 3884
				},
				"SD04": {
					"Dist": {
						"Fav": 2887,
						"Neu": 565,
						"Unfav": 461
					},
					"N": 3913
				},
				"PE03": {
					"Dist": {
						"Fav": 3057,
						"Neu": 522,
						"Unfav": 319
					},
					"N": 3898
				},
				"OM12": {
					"Dist": {
						"Fav": 3017,
						"Neu": 509,
						"Unfav": 328
					},
					"N": 3854
				},
				"QS16": {
					"Dist": {
						"Fav": 2605,
						"Neu": 849,
						"Unfav": 448
					},
					"N": 3902
				},
				"LD09": {
					"Dist": {
						"Fav": 3058,
						"Neu": 485,
						"Unfav": 366
					},
					"N": 3909
				},
				"TR01": {
					"Dist": {
						"Fav": 3353,
						"Neu": 382,
						"Unfav": 180
					},
					"N": 3915
				},
				"VC04": {
					"Dist": {
						"Fav": 3367,
						"Neu": 421,
						"Unfav": 126
					},
					"N": 3914
				},
				"GP07": {
					"Dist": {
						"Fav": 2128,
						"Neu": 861,
						"Unfav": 864
					},
					"N": 3853
				},
				"ER01": {
					"Dist": {
						"Fav": 2591,
						"Neu": 728,
						"Unfav": 592
					},
					"N": 3911
				},
				"IV02": {
					"Dist": {
						"Fav": 2501,
						"Neu": 820,
						"Unfav": 584
					},
					"N": 3905
				},
				"CP14": {
					"Dist": {
						"Fav": 2121,
						"Neu": 867,
						"Unfav": 880
					},
					"N": 3868
				},
				"GP12": {
					"Dist": {
						"Fav": 3001,
						"Neu": 548,
						"Unfav": 328
					},
					"N": 3877
				},
				"CP11": {
					"Dist": {
						"Fav": 3291,
						"Neu": 382,
						"Unfav": 81
					},
					"N": 3754
				},
				"WE01": {
					"Dist": {
						"Fav": 3338,
						"Neu": 371,
						"Unfav": 211
					},
					"N": 3920
				},
				"IV04": {
					"Dist": {
						"Fav": 3058,
						"Neu": 654,
						"Unfav": 118
					},
					"N": 3830
				},
				"WE12": {
					"Dist": {
						"Fav": 2845,
						"Neu": 704,
						"Unfav": 327
					},
					"N": 3876
				},
				"SP12": {
					"Dist": {
						"Fav": 2674,
						"Neu": 793,
						"Unfav": 452
					},
					"N": 3919
				},
				"AV09": {
					"Dist": {
						"Fav": 3277,
						"Neu": 478,
						"Unfav": 88
					},
					"N": 3843
				},
				"TW04": {
					"Dist": {
						"Fav": 2133,
						"Neu": 1018,
						"Unfav": 338
					},
					"N": 3489
				},
				"CP12": {
					"Dist": {
						"Fav": 2955,
						"Neu": 632,
						"Unfav": 308
					},
					"N": 3895
				},
				"DC11": {
					"Dist": {
						"Fav": 3283,
						"Neu": 497,
						"Unfav": 138
					},
					"N": 3918
				},
				"BN01": {
					"Dist": {
						"Fav": 3032,
						"Neu": 595,
						"Unfav": 283
					},
					"N": 3910
				},
				"GP09": {
					"Dist": {
						"Fav": 2611,
						"Neu": 675,
						"Unfav": 632
					},
					"N": 3918
				},
				"QS03": {
					"Dist": {
						"Fav": 3348,
						"Neu": 410,
						"Unfav": 118
					},
					"N": 3876
				},
				"OM01": {
					"Dist": {
						"Fav": 3211,
						"Neu": 421,
						"Unfav": 174
					},
					"N": 3806
				},
				"TR04": {
					"Dist": {
						"Fav": 2134,
						"Neu": 980,
						"Unfav": 804
					},
					"N": 3918
				},
				"QS02": {
					"Dist": {
						"Fav": 1339,
						"Neu": 621,
						"Unfav": 1244
					},
					"N": 3204
				},
				"JS05": {
					"Dist": {
						"Fav": 1320,
						"Neu": 624,
						"Unfav": 1278
					},
					"N": 3222
				},
				"OM11": {
					"Dist": {
						"Fav": 1260,
						"Neu": 654,
						"Unfav": 1307
					},
					"N": 3221
				},
				"SD05": {
					"Dist": {
						"Fav": 1273,
						"Neu": 695,
						"Unfav": 1293
					},
					"N": 3261
				},
				"SD03": {
					"Dist": {
						"Fav": 1246,
						"Neu": 691,
						"Unfav": 1279
					},
					"N": 3216
				},
				"OS02": {
					"Dist": {
						"Fav": 1323,
						"Neu": 641,
						"Unfav": 1271
					},
					"N": 3235
				},
				"JS02": {
					"Dist": {
						"Fav": 1317,
						"Neu": 628,
						"Unfav": 1292
					},
					"N": 3237
				},
				"ST01": {
					"Dist": {
						"Fav": 1245,
						"Neu": 679,
						"Unfav": 1317
					},
					"N": 3241
				},
				"WL01": {
					"Dist": {
						"Fav": 1277,
						"Neu": 659,
						"Unfav": 1302
					},
					"N": 3238
				},
				"GP10": {
					"Dist": {
						"Fav": 1294,
						"Neu": 637,
						"Unfav": 1316
					},
					"N": 3247
				},
				"WE08": {
					"Dist": {
						"Fav": 1329,
						"Neu": 647,
						"Unfav": 1262
					},
					"N": 3238
				},
				"DM04": {
					"Dist": {
						"Fav": 1294,
						"Neu": 695,
						"Unfav": 1218
					},
					"N": 3207
				},
				"DM18": {
					"Dist": {
						"Fav": 1288,
						"Neu": 643,
						"Unfav": 1280
					},
					"N": 3211
				},
				"SP45": {
					"Dist": {
						"Fav": 1316,
						"Neu": 668,
						"Unfav": 1220
					},
					"N": 3204
				},
				"SV03": {
					"Dist": {
						"Fav": 1287,
						"Neu": 600,
						"Unfav": 1269
					},
					"N": 3156
				},
				"SR05": {
					"Dist": {
						"Fav": 1301,
						"Neu": 587,
						"Unfav": 1304
					},
					"N": 3192
				},
				"SR03": {
					"Dist": {
						"Fav": 1314,
						"Neu": 638,
						"Unfav": 1258
					},
					"N": 3210
				},
				"TW02": {
					"Dist": {
						"Fav": 1293,
						"Neu": 658,
						"Unfav": 1263
					},
					"N": 3214
				},
				"DC08": {
					"Dist": {
						"Fav": 1265,
						"Neu": 619,
						"Unfav": 1349
					},
					"N": 3233
				},
				"GP03": {
					"Dist": {
						"Fav": 1303,
						"Neu": 655,
						"Unfav": 1258
					},
					"N": 3216
				},
				"PE01": {
					"Dist": {
						"Fav": 1320,
						"Neu": 615,
						"Unfav": 1317
					},
					"N": 3252
				},
				"AV01": {
					"Dist": {
						"Fav": 1292,
						"Neu": 675,
						"Unfav": 1252
					},
					"N": 3219
				},
				"AV08": {
					"Dist": {
						"Fav": 1302,
						"Neu": 618,
						"Unfav": 1301
					},
					"N": 3221
				},
				"BN04": {
					"Dist": {
						"Fav": 1321,
						"Neu": 597,
						"Unfav": 1265
					},
					"N": 3183
				},
				"CP16": {
					"Dist": {
						"Fav": 1241,
						"Neu": 657,
						"Unfav": 1293
					},
					"N": 3191
				},
				"PE10": {
					"Dist": {
						"Fav": 1279,
						"Neu": 642,
						"Unfav": 1280
					},
					"N": 3201
				},
				"PE21": {
					"Dist": {
						"Fav": 1334,
						"Neu": 612,
						"Unfav": 1290
					},
					"N": 3236
				},
				"OM04": {
					"Dist": {
						"Fav": 1284,
						"Neu": 651,
						"Unfav": 1286
					},
					"N": 3221
				},
				"QS09": {
					"Dist": {
						"Fav": 1301,
						"Neu": 678,
						"Unfav": 1269
					},
					"N": 3248
				},
				"SP04": {
					"Dist": {
						"Fav": 1323,
						"Neu": 640,
						"Unfav": 1239
					},
					"N": 3202
				},
				"WK01": {
					"Dist": {
						"Fav": 1273,
						"Neu": 668,
						"Unfav": 1281
					},
					"N": 3222
				},
				"DI03": {
					"Dist": {
						"Fav": 1227,
						"Neu": 670,
						"Unfav": 1352
					},
					"N": 3249
				},
				"WK02": {
					"Dist": {
						"Fav": 1285,
						"Neu": 654,
						"Unfav": 1262
					},
					"N": 3201
				},
				"SP47": {
					"Dist": {
						"Fav": 1256,
						"Neu": 688,
						"Unfav": 1246
					},
					"N": 3190
				},
				"WS01": {
					"Dist": {
						"Fav": 1304,
						"Neu": 620,
						"Unfav": 1306
					},
					"N": 3230
				},
				"DC09": {
					"Dist": {
						"Fav": 1277,
						"Neu": 631,
						"Unfav": 1289
					},
					"N": 3197
				},
				"AV02": {
					"Dist": {
						"Fav": 3201,
						"Neu": 417,
						"Unfav": 302
					},
					"N": 3920
				},
				"DI04": {
					"Dist": {
						"Fav": 3254,
						"Neu": 335,
						"Unfav": 333
					},
					"N": 3922
				},
				"IV05": {
					"Dist": {
						"Fav": 2914,
						"Neu": 577,
						"Unfav": 428
					},
					"N": 3919
				},
				"OM06": {
					"Dist": {
						"Fav": 754,
						"Neu": 757,
						"Unfav": 1549
					},
					"N": 3060
				},
				"NSQ1": {
					"Dist": {
						"Fav": 1760,
						"Neu": 1361,
						"Unfav": 802
					},
					"N": 3923
				}
			},
			"440": {
				"RE01": {
					"Dist": {
						"Fav": 3159,
						"Neu": 424,
						"Unfav": 353
					},
					"N": 3936
				},
				"DM02": {
					"Dist": {
						"Fav": 3188,
						"Neu": 375,
						"Unfav": 370
					},
					"N": 3933
				},
				"RC01": {
					"Dist": {
						"Fav": 2818,
						"Neu": 610,
						"Unfav": 499
					},
					"N": 3927
				},
				"TW06": {
					"Dist": {
						"Fav": 3144,
						"Neu": 453,
						"Unfav": 337
					},
					"N": 3934
				},
				"QS01": {
					"Dist": {
						"Fav": 2937,
						"Neu": 576,
						"Unfav": 420
					},
					"N": 3933
				},
				"PE09": {
					"Dist": {
						"Fav": 2937,
						"Neu": 576,
						"Unfav": 420
					},
					"N": 3933
				},
				"AV15": {
					"Dist": {
						"Fav": 3417,
						"Neu": 270,
						"Unfav": 245
					},
					"N": 3932
				},
				"LD04": {
					"Dist": {
						"Fav": 2905,
						"Neu": 527,
						"Unfav": 504
					},
					"N": 3936
				},
				"WS03": {
					"Dist": {
						"Fav": 3257,
						"Neu": 377,
						"Unfav": 299
					},
					"N": 3933
				},
				"TR09": {
					"Dist": {
						"Fav": 3131,
						"Neu": 495,
						"Unfav": 308
					},
					"N": 3934
				},
				"PE06": {
					"Dist": {
						"Fav": 3338,
						"Neu": 368,
						"Unfav": 201
					},
					"N": 3907
				},
				"SD04": {
					"Dist": {
						"Fav": 2859,
						"Neu": 561,
						"Unfav": 511
					},
					"N": 3931
				},
				"PE03": {
					"Dist": {
						"Fav": 3041,
						"Neu": 568,
						"Unfav": 306
					},
					"N": 3915
				},
				"OM12": {
					"Dist": {
						"Fav": 2999,
						"Neu": 547,
						"Unfav": 340
					},
					"N": 3886
				},
				"QS16": {
					"Dist": {
						"Fav": 2590,
						"Neu": 787,
						"Unfav": 533
					},
					"N": 3910
				},
				"LD09": {
					"Dist": {
						"Fav": 3031,
						"Neu": 489,
						"Unfav": 404
					},
					"N": 3924
				},
				"TR01": {
					"Dist": {
						"Fav": 3341,
						"Neu": 392,
						"Unfav": 198
					},
					"N": 3931
				},
				"VC04": {
					"Dist": {
						"Fav": 3373,
						"Neu": 420,
						"Unfav": 136
					},
					"N": 3929
				},
				"GP07": {
					"Dist": {
						"Fav": 2076,
						"Neu": 884,
						"Unfav": 901
					},
					"N": 3861
				},
				"ER01": {
					"Dist": {
						"Fav": 2516,
						"Neu": 766,
						"Unfav": 643
					},
					"N": 3925
				},
				"IV02": {
					"Dist": {
						"Fav": 2425,
						"Neu": 842,
						"Unfav": 645
					},
					"N": 3912
				},
				"CP14": {
					"Dist": {
						"Fav": 2094,
						"Neu": 853,
						"Unfav": 948
					},
					"N": 3895
				},
				"GP12": {
					"Dist": {
						"Fav": 3014,
						"Neu": 560,
						"Unfav": 313
					},
					"N": 3887
				},
				"CP11": {
					"Dist": {
						"Fav": 3325,
						"Neu": 365,
						"Unfav": 89
					},
					"N": 3779
				},
				"WE01": {
					"Dist": {
						"Fav": 3271,
						"Neu": 410,
						"Unfav": 249
					},
					"N": 3930
				},
				"IV04": {
					"Dist": {
						"Fav": 2987,
						"Neu": 674,
						"Unfav": 165
					},
					"N": 3826
				},
				"WE12": {
					"Dist": {
						"Fav": 2811,
						"Neu": 691,
						"Unfav": 387
					},
					"N": 3889
				},
				"SP12": {
					"Dist": {
						"Fav": 2710,
						"Neu": 756,
						"Unfav": 466
					},
					"N": 3932
				},
				"AV09": {
					"Dist": {
						"Fav": 3280,
						"Neu": 482,
						"Unfav": 94
					},
					"N": 3856
				},
				"TW04": {
					"Dist": {
						"Fav": 2111,
						"Neu": 1084,
						"Unfav": 351
					},
					"N": 3546
				},
				"CP12": {
					"Dist": {
						"Fav": 2901,
						"Neu": 640,
						"Unfav": 383
					},
					"N": 3924
				},
				"DC11": {
					"Dist": {
						"Fav": 3247,
						"Neu": 550,
						"Unfav": 137
					},
					"N": 3934
				},
				"BN01": {
					"Dist": {
						"Fav": 3027,
						"Neu": 603,
						"Unfav": 297
					},
					"N": 3927
				},
				"GP09": {
					"Dist": {
						"Fav": 2558,
						"Neu": 639,
						"Unfav": 740
					},
					"N": 3937
				},
				"QS03": {
					"Dist": {
						"Fav": 3320,
						"Neu": 407,
						"Unfav": 158
					},
					"N": 3885
				},
				"OM01": {
					"Dist": {
						"Fav": 3209,
						"Neu": 460,
						"Unfav": 178
					},
					"N": 3847
				},
				"TR04": {
					"Dist": {
						"Fav": 2110,
						"Neu": 917,
						"Unfav": 902
					},
					"N": 3929
				},
				"QS02": {
					"Dist": {
						"Fav": 1305,
						"Neu": 649,
						"Unfav": 1249
					},
					"N": 3203
				},
				"JS05": {
					"Dist": {
						"Fav": 1291,
						"Neu": 637,
						"Unfav": 1259
					},
					"N": 3187
				},
				"OM11": {
					"Dist": {
						"Fav": 1282,
						"Neu": 651,
						"Unfav": 1292
					},
					"N": 3225
				},
				"SD05": {
					"Dist": {
						"Fav": 1314,
						"Neu": 678,
						"Unfav": 1202
					},
					"N": 3194
				},
				"SD03": {
					"Dist": {
						"Fav": 1286,
						"Neu": 639,
						"Unfav": 1334
					},
					"N": 3259
				},
				"OS02": {
					"Dist": {
						"Fav": 1259,
						"Neu": 650,
						"Unfav": 1297
					},
					"N": 3206
				},
				"JS02": {
					"Dist": {
						"Fav": 1290,
						"Neu": 621,
						"Unfav": 1315
					},
					"N": 3226
				},
				"ST01": {
					"Dist": {
						"Fav": 1249,
						"Neu": 683,
						"Unfav": 1303
					},
					"N": 3235
				},
				"WL01": {
					"Dist": {
						"Fav": 1265,
						"Neu": 647,
						"Unfav": 1334
					},
					"N": 3246
				},
				"GP10": {
					"Dist": {
						"Fav": 1242,
						"Neu": 637,
						"Unfav": 1362
					},
					"N": 3241
				},
				"WE08": {
					"Dist": {
						"Fav": 1297,
						"Neu": 643,
						"Unfav": 1285
					},
					"N": 3225
				},
				"DM04": {
					"Dist": {
						"Fav": 1278,
						"Neu": 658,
						"Unfav": 1316
					},
					"N": 3252
				},
				"DM18": {
					"Dist": {
						"Fav": 1296,
						"Neu": 653,
						"Unfav": 1264
					},
					"N": 3213
				},
				"SP45": {
					"Dist": {
						"Fav": 1299,
						"Neu": 670,
						"Unfav": 1275
					},
					"N": 3244
				},
				"SV03": {
					"Dist": {
						"Fav": 1303,
						"Neu": 641,
						"Unfav": 1306
					},
					"N": 3250
				},
				"SR05": {
					"Dist": {
						"Fav": 1302,
						"Neu": 626,
						"Unfav": 1316
					},
					"N": 3244
				},
				"SR03": {
					"Dist": {
						"Fav": 1254,
						"Neu": 650,
						"Unfav": 1304
					},
					"N": 3208
				},
				"TW02": {
					"Dist": {
						"Fav": 1285,
						"Neu": 691,
						"Unfav": 1298
					},
					"N": 3274
				},
				"DC08": {
					"Dist": {
						"Fav": 1261,
						"Neu": 637,
						"Unfav": 1288
					},
					"N": 3186
				},
				"GP03": {
					"Dist": {
						"Fav": 1324,
						"Neu": 629,
						"Unfav": 1276
					},
					"N": 3229
				},
				"PE01": {
					"Dist": {
						"Fav": 1279,
						"Neu": 666,
						"Unfav": 1268
					},
					"N": 3213
				},
				"AV01": {
					"Dist": {
						"Fav": 1262,
						"Neu": 671,
						"Unfav": 1306
					},
					"N": 3239
				},
				"AV08": {
					"Dist": {
						"Fav": 1291,
						"Neu": 644,
						"Unfav": 1310
					},
					"N": 3245
				},
				"BN04": {
					"Dist": {
						"Fav": 1356,
						"Neu": 622,
						"Unfav": 1272
					},
					"N": 3250
				},
				"CP16": {
					"Dist": {
						"Fav": 1270,
						"Neu": 637,
						"Unfav": 1320
					},
					"N": 3227
				},
				"PE10": {
					"Dist": {
						"Fav": 1301,
						"Neu": 649,
						"Unfav": 1264
					},
					"N": 3214
				},
				"PE21": {
					"Dist": {
						"Fav": 1300,
						"Neu": 677,
						"Unfav": 1280
					},
					"N": 3257
				},
				"OM04": {
					"Dist": {
						"Fav": 1284,
						"Neu": 637,
						"Unfav": 1356
					},
					"N": 3277
				},
				"QS09": {
					"Dist": {
						"Fav": 1280,
						"Neu": 646,
						"Unfav": 1294
					},
					"N": 3220
				},
				"SP04": {
					"Dist": {
						"Fav": 1239,
						"Neu": 683,
						"Unfav": 1268
					},
					"N": 3190
				},
				"WK01": {
					"Dist": {
						"Fav": 1241,
						"Neu": 663,
						"Unfav": 1289
					},
					"N": 3193
				},
				"DI03": {
					"Dist": {
						"Fav": 1302,
						"Neu": 657,
						"Unfav": 1289
					},
					"N": 3248
				},
				"WK02": {
					"Dist": {
						"Fav": 1279,
						"Neu": 610,
						"Unfav": 1303
					},
					"N": 3192
				},
				"SP47": {
					"Dist": {
						"Fav": 1312,
						"Neu": 627,
						"Unfav": 1289
					},
					"N": 3228
				},
				"WS01": {
					"Dist": {
						"Fav": 1300,
						"Neu": 659,
						"Unfav": 1267
					},
					"N": 3226
				},
				"DC09": {
					"Dist": {
						"Fav": 1314,
						"Neu": 649,
						"Unfav": 1274
					},
					"N": 3237
				},
				"AV02": {
					"Dist": {
						"Fav": 3159,
						"Neu": 424,
						"Unfav": 353
					},
					"N": 3936
				},
				"DI04": {
					"Dist": {
						"Fav": 3188,
						"Neu": 375,
						"Unfav": 370
					},
					"N": 3933
				},
				"IV05": {
					"Dist": {
						"Fav": 2818,
						"Neu": 610,
						"Unfav": 499
					},
					"N": 3927
				},
				"OM06": {
					"Dist": {
						"Fav": 775,
						"Neu": 769,
						"Unfav": 1562
					},
					"N": 3106
				},
				"NSQ1": {
					"Dist": {
						"Fav": 1741,
						"Neu": 1347,
						"Unfav": 850
					},
					"N": 3938
				}
			}
		},
		"ITEMSX.2018.389.0.GENDER": {
			"410": {
				"RE01": {
					"Dist": {
						"Fav": 2269,
						"Neu": 388,
						"Unfav": 356
					},
					"N": 3013
				},
				"DM02": {
					"Dist": {
						"Fav": 2263,
						"Neu": 365,
						"Unfav": 384
					},
					"N": 3012
				},
				"RC01": {
					"Dist": {
						"Fav": 457,
						"Neu": 148,
						"Unfav": 153
					},
					"N": 758
				},
				"TW06": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"QS01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"PE09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"AV15": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"LD04": {
					"Dist": {
						"Fav": 2303,
						"Neu": 367,
						"Unfav": 341
					},
					"N": 3011
				},
				"WS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"PE06": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"SD04": {
					"Dist": {
						"Fav": 292,
						"Neu": 113,
						"Unfav": 107
					},
					"N": 512
				},
				"PE03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM12": {
					"Dist": {
						"Fav": 181,
						"Neu": 34,
						"Unfav": 27
					},
					"N": 242
				},
				"QS16": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"LD09": {
					"Dist": {
						"Fav": 389,
						"Neu": 29,
						"Unfav": 50
					},
					"N": 468
				},
				"TR01": {
					"Dist": {
						"Fav": 364,
						"Neu": 86,
						"Unfav": 63
					},
					"N": 513
				},
				"VC04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"GP07": {
					"Dist": {
						"Fav": 121,
						"Neu": 59,
						"Unfav": 58
					},
					"N": 238
				},
				"ER01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"IV02": {
					"Dist": {
						"Fav": 285,
						"Neu": 67,
						"Unfav": 116
					},
					"N": 468
				},
				"CP14": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"GP12": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"CP11": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"WE01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"IV04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"WE12": {
					"Dist": {
						"Fav": 799,
						"Neu": 227,
						"Unfav": 189
					},
					"N": 1215
				},
				"SP12": {
					"Dist": {
						"Fav": 1927,
						"Neu": 605,
						"Unfav": 479
					},
					"N": 3011
				},
				"AV09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TW04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"CP12": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DC11": {
					"Dist": {
						"Fav": 2414,
						"Neu": 450,
						"Unfav": 147
					},
					"N": 3011
				},
				"BN01": {
					"Dist": {
						"Fav": 2242,
						"Neu": 475,
						"Unfav": 288
					},
					"N": 3005
				},
				"GP09": {
					"Dist": {
						"Fav": 1660,
						"Neu": 555,
						"Unfav": 797
					},
					"N": 3012
				},
				"QS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR04": {
					"Dist": {
						"Fav": 1440,
						"Neu": 618,
						"Unfav": 956
					},
					"N": 3014
				},
				"QS02": {
					"Dist": {
						"Fav": 924,
						"Neu": 425,
						"Unfav": 957
					},
					"N": 2306
				},
				"JS05": {
					"Dist": {
						"Fav": 917,
						"Neu": 462,
						"Unfav": 915
					},
					"N": 2294
				},
				"OM11": {
					"Dist": {
						"Fav": 931,
						"Neu": 464,
						"Unfav": 909
					},
					"N": 2304
				},
				"SD05": {
					"Dist": {
						"Fav": 943,
						"Neu": 480,
						"Unfav": 915
					},
					"N": 2338
				},
				"SD03": {
					"Dist": {
						"Fav": 938,
						"Neu": 434,
						"Unfav": 921
					},
					"N": 2293
				},
				"OS02": {
					"Dist": {
						"Fav": 921,
						"Neu": 496,
						"Unfav": 911
					},
					"N": 2328
				},
				"JS02": {
					"Dist": {
						"Fav": 947,
						"Neu": 468,
						"Unfav": 906
					},
					"N": 2321
				},
				"ST01": {
					"Dist": {
						"Fav": 935,
						"Neu": 464,
						"Unfav": 933
					},
					"N": 2332
				},
				"WL01": {
					"Dist": {
						"Fav": 967,
						"Neu": 447,
						"Unfav": 917
					},
					"N": 2331
				},
				"GP10": {
					"Dist": {
						"Fav": 892,
						"Neu": 460,
						"Unfav": 982
					},
					"N": 2334
				},
				"WE08": {
					"Dist": {
						"Fav": 924,
						"Neu": 449,
						"Unfav": 946
					},
					"N": 2319
				},
				"DM04": {
					"Dist": {
						"Fav": 938,
						"Neu": 452,
						"Unfav": 925
					},
					"N": 2315
				},
				"DM18": {
					"Dist": {
						"Fav": 939,
						"Neu": 427,
						"Unfav": 904
					},
					"N": 2270
				},
				"SP45": {
					"Dist": {
						"Fav": 870,
						"Neu": 481,
						"Unfav": 951
					},
					"N": 2302
				},
				"SV03": {
					"Dist": {
						"Fav": 912,
						"Neu": 441,
						"Unfav": 943
					},
					"N": 2296
				},
				"SR05": {
					"Dist": {
						"Fav": 957,
						"Neu": 452,
						"Unfav": 914
					},
					"N": 2323
				},
				"SR03": {
					"Dist": {
						"Fav": 927,
						"Neu": 448,
						"Unfav": 942
					},
					"N": 2317
				},
				"TW02": {
					"Dist": {
						"Fav": 891,
						"Neu": 474,
						"Unfav": 932
					},
					"N": 2297
				},
				"DC08": {
					"Dist": {
						"Fav": 888,
						"Neu": 450,
						"Unfav": 975
					},
					"N": 2313
				},
				"GP03": {
					"Dist": {
						"Fav": 954,
						"Neu": 468,
						"Unfav": 904
					},
					"N": 2326
				},
				"PE01": {
					"Dist": {
						"Fav": 909,
						"Neu": 468,
						"Unfav": 925
					},
					"N": 2302
				},
				"AV01": {
					"Dist": {
						"Fav": 923,
						"Neu": 455,
						"Unfav": 923
					},
					"N": 2301
				},
				"AV08": {
					"Dist": {
						"Fav": 914,
						"Neu": 437,
						"Unfav": 969
					},
					"N": 2320
				},
				"BN04": {
					"Dist": {
						"Fav": 943,
						"Neu": 464,
						"Unfav": 896
					},
					"N": 2303
				},
				"CP16": {
					"Dist": {
						"Fav": 924,
						"Neu": 452,
						"Unfav": 943
					},
					"N": 2319
				},
				"PE10": {
					"Dist": {
						"Fav": 948,
						"Neu": 469,
						"Unfav": 903
					},
					"N": 2320
				},
				"PE21": {
					"Dist": {
						"Fav": 950,
						"Neu": 423,
						"Unfav": 949
					},
					"N": 2322
				},
				"OM04": {
					"Dist": {
						"Fav": 950,
						"Neu": 430,
						"Unfav": 913
					},
					"N": 2293
				},
				"QS09": {
					"Dist": {
						"Fav": 895,
						"Neu": 464,
						"Unfav": 926
					},
					"N": 2285
				},
				"SP04": {
					"Dist": {
						"Fav": 904,
						"Neu": 465,
						"Unfav": 963
					},
					"N": 2332
				},
				"WK01": {
					"Dist": {
						"Fav": 930,
						"Neu": 428,
						"Unfav": 935
					},
					"N": 2293
				},
				"DI03": {
					"Dist": {
						"Fav": 901,
						"Neu": 433,
						"Unfav": 964
					},
					"N": 2298
				},
				"WK02": {
					"Dist": {
						"Fav": 918,
						"Neu": 443,
						"Unfav": 937
					},
					"N": 2298
				},
				"SP47": {
					"Dist": {
						"Fav": 865,
						"Neu": 488,
						"Unfav": 949
					},
					"N": 2302
				},
				"WS01": {
					"Dist": {
						"Fav": 954,
						"Neu": 431,
						"Unfav": 907
					},
					"N": 2292
				},
				"DC09": {
					"Dist": {
						"Fav": 947,
						"Neu": 440,
						"Unfav": 951
					},
					"N": 2338
				},
				"AV02": {
					"Dist": {
						"Fav": 2269,
						"Neu": 388,
						"Unfav": 356
					},
					"N": 3013
				},
				"DI04": {
					"Dist": {
						"Fav": 2263,
						"Neu": 365,
						"Unfav": 384
					},
					"N": 3012
				},
				"IV05": {
					"Dist": {
						"Fav": 457,
						"Neu": 148,
						"Unfav": 153
					},
					"N": 758
				},
				"OM06": {
					"Dist": {
						"Fav": 594,
						"Neu": 573,
						"Unfav": 1081
					},
					"N": 2248
				},
				"NSQ1": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				}
			},
			"420": {
				"RE01": {
					"Dist": {
						"Fav": 2307,
						"Neu": 399,
						"Unfav": 280
					},
					"N": 2986
				},
				"DM02": {
					"Dist": {
						"Fav": 2281,
						"Neu": 372,
						"Unfav": 335
					},
					"N": 2988
				},
				"RC01": {
					"Dist": {
						"Fav": 474,
						"Neu": 143,
						"Unfav": 119
					},
					"N": 736
				},
				"TW06": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"QS01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"PE09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"AV15": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"LD04": {
					"Dist": {
						"Fav": 2326,
						"Neu": 388,
						"Unfav": 272
					},
					"N": 2986
				},
				"WS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"PE06": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"SD04": {
					"Dist": {
						"Fav": 310,
						"Neu": 97,
						"Unfav": 103
					},
					"N": 510
				},
				"PE03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM12": {
					"Dist": {
						"Fav": 171,
						"Neu": 29,
						"Unfav": 26
					},
					"N": 226
				},
				"QS16": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"LD09": {
					"Dist": {
						"Fav": 415,
						"Neu": 39,
						"Unfav": 61
					},
					"N": 515
				},
				"TR01": {
					"Dist": {
						"Fav": 364,
						"Neu": 77,
						"Unfav": 69
					},
					"N": 510
				},
				"VC04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"GP07": {
					"Dist": {
						"Fav": 114,
						"Neu": 52,
						"Unfav": 58
					},
					"N": 224
				},
				"ER01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"IV02": {
					"Dist": {
						"Fav": 281,
						"Neu": 87,
						"Unfav": 148
					},
					"N": 516
				},
				"CP14": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"GP12": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"CP11": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"WE01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"IV04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"WE12": {
					"Dist": {
						"Fav": 797,
						"Neu": 264,
						"Unfav": 189
					},
					"N": 1250
				},
				"SP12": {
					"Dist": {
						"Fav": 1953,
						"Neu": 625,
						"Unfav": 410
					},
					"N": 2988
				},
				"AV09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TW04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"CP12": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DC11": {
					"Dist": {
						"Fav": 2412,
						"Neu": 447,
						"Unfav": 126
					},
					"N": 2985
				},
				"BN01": {
					"Dist": {
						"Fav": 2283,
						"Neu": 445,
						"Unfav": 253
					},
					"N": 2981
				},
				"GP09": {
					"Dist": {
						"Fav": 1644,
						"Neu": 563,
						"Unfav": 780
					},
					"N": 2987
				},
				"QS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR04": {
					"Dist": {
						"Fav": 1435,
						"Neu": 566,
						"Unfav": 983
					},
					"N": 2984
				},
				"QS02": {
					"Dist": {
						"Fav": 915,
						"Neu": 447,
						"Unfav": 932
					},
					"N": 2294
				},
				"JS05": {
					"Dist": {
						"Fav": 929,
						"Neu": 453,
						"Unfav": 936
					},
					"N": 2318
				},
				"OM11": {
					"Dist": {
						"Fav": 939,
						"Neu": 476,
						"Unfav": 899
					},
					"N": 2314
				},
				"SD05": {
					"Dist": {
						"Fav": 948,
						"Neu": 438,
						"Unfav": 913
					},
					"N": 2299
				},
				"SD03": {
					"Dist": {
						"Fav": 914,
						"Neu": 483,
						"Unfav": 907
					},
					"N": 2304
				},
				"OS02": {
					"Dist": {
						"Fav": 932,
						"Neu": 458,
						"Unfav": 931
					},
					"N": 2321
				},
				"JS02": {
					"Dist": {
						"Fav": 916,
						"Neu": 432,
						"Unfav": 942
					},
					"N": 2290
				},
				"ST01": {
					"Dist": {
						"Fav": 927,
						"Neu": 453,
						"Unfav": 920
					},
					"N": 2300
				},
				"WL01": {
					"Dist": {
						"Fav": 885,
						"Neu": 488,
						"Unfav": 920
					},
					"N": 2293
				},
				"GP10": {
					"Dist": {
						"Fav": 894,
						"Neu": 437,
						"Unfav": 950
					},
					"N": 2281
				},
				"WE08": {
					"Dist": {
						"Fav": 895,
						"Neu": 477,
						"Unfav": 947
					},
					"N": 2319
				},
				"DM04": {
					"Dist": {
						"Fav": 891,
						"Neu": 464,
						"Unfav": 970
					},
					"N": 2325
				},
				"DM18": {
					"Dist": {
						"Fav": 927,
						"Neu": 424,
						"Unfav": 949
					},
					"N": 2300
				},
				"SP45": {
					"Dist": {
						"Fav": 925,
						"Neu": 442,
						"Unfav": 929
					},
					"N": 2296
				},
				"SV03": {
					"Dist": {
						"Fav": 899,
						"Neu": 458,
						"Unfav": 937
					},
					"N": 2294
				},
				"SR05": {
					"Dist": {
						"Fav": 885,
						"Neu": 483,
						"Unfav": 916
					},
					"N": 2284
				},
				"SR03": {
					"Dist": {
						"Fav": 913,
						"Neu": 478,
						"Unfav": 929
					},
					"N": 2320
				},
				"TW02": {
					"Dist": {
						"Fav": 926,
						"Neu": 469,
						"Unfav": 886
					},
					"N": 2281
				},
				"DC08": {
					"Dist": {
						"Fav": 940,
						"Neu": 467,
						"Unfav": 900
					},
					"N": 2307
				},
				"GP03": {
					"Dist": {
						"Fav": 950,
						"Neu": 458,
						"Unfav": 874
					},
					"N": 2282
				},
				"PE01": {
					"Dist": {
						"Fav": 931,
						"Neu": 475,
						"Unfav": 929
					},
					"N": 2335
				},
				"AV01": {
					"Dist": {
						"Fav": 922,
						"Neu": 445,
						"Unfav": 930
					},
					"N": 2297
				},
				"AV08": {
					"Dist": {
						"Fav": 919,
						"Neu": 471,
						"Unfav": 909
					},
					"N": 2299
				},
				"BN04": {
					"Dist": {
						"Fav": 908,
						"Neu": 481,
						"Unfav": 914
					},
					"N": 2303
				},
				"CP16": {
					"Dist": {
						"Fav": 957,
						"Neu": 453,
						"Unfav": 884
					},
					"N": 2294
				},
				"PE10": {
					"Dist": {
						"Fav": 914,
						"Neu": 464,
						"Unfav": 939
					},
					"N": 2317
				},
				"PE21": {
					"Dist": {
						"Fav": 881,
						"Neu": 472,
						"Unfav": 912
					},
					"N": 2265
				},
				"OM04": {
					"Dist": {
						"Fav": 893,
						"Neu": 466,
						"Unfav": 936
					},
					"N": 2295
				},
				"QS09": {
					"Dist": {
						"Fav": 891,
						"Neu": 462,
						"Unfav": 949
					},
					"N": 2302
				},
				"SP04": {
					"Dist": {
						"Fav": 925,
						"Neu": 462,
						"Unfav": 906
					},
					"N": 2293
				},
				"WK01": {
					"Dist": {
						"Fav": 944,
						"Neu": 424,
						"Unfav": 938
					},
					"N": 2306
				},
				"DI03": {
					"Dist": {
						"Fav": 898,
						"Neu": 482,
						"Unfav": 916
					},
					"N": 2296
				},
				"WK02": {
					"Dist": {
						"Fav": 913,
						"Neu": 452,
						"Unfav": 926
					},
					"N": 2291
				},
				"SP47": {
					"Dist": {
						"Fav": 882,
						"Neu": 464,
						"Unfav": 946
					},
					"N": 2292
				},
				"WS01": {
					"Dist": {
						"Fav": 925,
						"Neu": 452,
						"Unfav": 905
					},
					"N": 2282
				},
				"DC09": {
					"Dist": {
						"Fav": 941,
						"Neu": 443,
						"Unfav": 941
					},
					"N": 2325
				},
				"AV02": {
					"Dist": {
						"Fav": 2307,
						"Neu": 399,
						"Unfav": 280
					},
					"N": 2986
				},
				"DI04": {
					"Dist": {
						"Fav": 2281,
						"Neu": 372,
						"Unfav": 335
					},
					"N": 2988
				},
				"IV05": {
					"Dist": {
						"Fav": 474,
						"Neu": 143,
						"Unfav": 119
					},
					"N": 736
				},
				"OM06": {
					"Dist": {
						"Fav": 521,
						"Neu": 548,
						"Unfav": 1155
					},
					"N": 2224
				},
				"NSQ1": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				}
			},
			"430": {
				"RE01": {
					"Dist": {
						"Fav": 2217,
						"Neu": 374,
						"Unfav": 295
					},
					"N": 2886
				},
				"DM02": {
					"Dist": {
						"Fav": 2188,
						"Neu": 381,
						"Unfav": 319
					},
					"N": 2888
				},
				"RC01": {
					"Dist": {
						"Fav": 450,
						"Neu": 143,
						"Unfav": 111
					},
					"N": 704
				},
				"TW06": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"QS01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"PE09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"AV15": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"LD04": {
					"Dist": {
						"Fav": 2251,
						"Neu": 383,
						"Unfav": 254
					},
					"N": 2888
				},
				"WS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"PE06": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"SD04": {
					"Dist": {
						"Fav": 256,
						"Neu": 110,
						"Unfav": 99
					},
					"N": 465
				},
				"PE03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM12": {
					"Dist": {
						"Fav": 173,
						"Neu": 31,
						"Unfav": 28
					},
					"N": 232
				},
				"QS16": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"LD09": {
					"Dist": {
						"Fav": 384,
						"Neu": 39,
						"Unfav": 53
					},
					"N": 476
				},
				"TR01": {
					"Dist": {
						"Fav": 329,
						"Neu": 76,
						"Unfav": 59
					},
					"N": 464
				},
				"VC04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"GP07": {
					"Dist": {
						"Fav": 127,
						"Neu": 50,
						"Unfav": 55
					},
					"N": 232
				},
				"ER01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"IV02": {
					"Dist": {
						"Fav": 274,
						"Neu": 90,
						"Unfav": 110
					},
					"N": 474
				},
				"CP14": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"GP12": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"CP11": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"WE01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"IV04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"WE12": {
					"Dist": {
						"Fav": 785,
						"Neu": 226,
						"Unfav": 160
					},
					"N": 1171
				},
				"SP12": {
					"Dist": {
						"Fav": 1899,
						"Neu": 602,
						"Unfav": 386
					},
					"N": 2887
				},
				"AV09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TW04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"CP12": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DC11": {
					"Dist": {
						"Fav": 2355,
						"Neu": 429,
						"Unfav": 101
					},
					"N": 2885
				},
				"BN01": {
					"Dist": {
						"Fav": 2207,
						"Neu": 425,
						"Unfav": 251
					},
					"N": 2883
				},
				"GP09": {
					"Dist": {
						"Fav": 1635,
						"Neu": 530,
						"Unfav": 720
					},
					"N": 2885
				},
				"QS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR04": {
					"Dist": {
						"Fav": 1427,
						"Neu": 548,
						"Unfav": 911
					},
					"N": 2886
				},
				"QS02": {
					"Dist": {
						"Fav": 908,
						"Neu": 462,
						"Unfav": 836
					},
					"N": 2206
				},
				"JS05": {
					"Dist": {
						"Fav": 894,
						"Neu": 459,
						"Unfav": 898
					},
					"N": 2251
				},
				"OM11": {
					"Dist": {
						"Fav": 859,
						"Neu": 460,
						"Unfav": 926
					},
					"N": 2245
				},
				"SD05": {
					"Dist": {
						"Fav": 916,
						"Neu": 468,
						"Unfav": 870
					},
					"N": 2254
				},
				"SD03": {
					"Dist": {
						"Fav": 893,
						"Neu": 455,
						"Unfav": 877
					},
					"N": 2225
				},
				"OS02": {
					"Dist": {
						"Fav": 935,
						"Neu": 454,
						"Unfav": 831
					},
					"N": 2220
				},
				"JS02": {
					"Dist": {
						"Fav": 944,
						"Neu": 390,
						"Unfav": 888
					},
					"N": 2222
				},
				"ST01": {
					"Dist": {
						"Fav": 861,
						"Neu": 458,
						"Unfav": 930
					},
					"N": 2249
				},
				"WL01": {
					"Dist": {
						"Fav": 877,
						"Neu": 468,
						"Unfav": 893
					},
					"N": 2238
				},
				"GP10": {
					"Dist": {
						"Fav": 884,
						"Neu": 467,
						"Unfav": 913
					},
					"N": 2264
				},
				"WE08": {
					"Dist": {
						"Fav": 904,
						"Neu": 471,
						"Unfav": 879
					},
					"N": 2254
				},
				"DM04": {
					"Dist": {
						"Fav": 908,
						"Neu": 433,
						"Unfav": 865
					},
					"N": 2206
				},
				"DM18": {
					"Dist": {
						"Fav": 854,
						"Neu": 434,
						"Unfav": 896
					},
					"N": 2184
				},
				"SP45": {
					"Dist": {
						"Fav": 931,
						"Neu": 445,
						"Unfav": 844
					},
					"N": 2220
				},
				"SV03": {
					"Dist": {
						"Fav": 870,
						"Neu": 436,
						"Unfav": 854
					},
					"N": 2160
				},
				"SR05": {
					"Dist": {
						"Fav": 889,
						"Neu": 425,
						"Unfav": 924
					},
					"N": 2238
				},
				"SR03": {
					"Dist": {
						"Fav": 890,
						"Neu": 437,
						"Unfav": 873
					},
					"N": 2200
				},
				"TW02": {
					"Dist": {
						"Fav": 901,
						"Neu": 477,
						"Unfav": 883
					},
					"N": 2261
				},
				"DC08": {
					"Dist": {
						"Fav": 874,
						"Neu": 408,
						"Unfav": 952
					},
					"N": 2234
				},
				"GP03": {
					"Dist": {
						"Fav": 878,
						"Neu": 447,
						"Unfav": 879
					},
					"N": 2204
				},
				"PE01": {
					"Dist": {
						"Fav": 892,
						"Neu": 428,
						"Unfav": 916
					},
					"N": 2236
				},
				"AV01": {
					"Dist": {
						"Fav": 884,
						"Neu": 436,
						"Unfav": 887
					},
					"N": 2207
				},
				"AV08": {
					"Dist": {
						"Fav": 913,
						"Neu": 439,
						"Unfav": 890
					},
					"N": 2242
				},
				"BN04": {
					"Dist": {
						"Fav": 894,
						"Neu": 427,
						"Unfav": 878
					},
					"N": 2199
				},
				"CP16": {
					"Dist": {
						"Fav": 865,
						"Neu": 447,
						"Unfav": 921
					},
					"N": 2233
				},
				"PE10": {
					"Dist": {
						"Fav": 855,
						"Neu": 458,
						"Unfav": 875
					},
					"N": 2188
				},
				"PE21": {
					"Dist": {
						"Fav": 894,
						"Neu": 443,
						"Unfav": 888
					},
					"N": 2225
				},
				"OM04": {
					"Dist": {
						"Fav": 868,
						"Neu": 460,
						"Unfav": 907
					},
					"N": 2235
				},
				"QS09": {
					"Dist": {
						"Fav": 904,
						"Neu": 480,
						"Unfav": 881
					},
					"N": 2265
				},
				"SP04": {
					"Dist": {
						"Fav": 896,
						"Neu": 444,
						"Unfav": 874
					},
					"N": 2214
				},
				"WK01": {
					"Dist": {
						"Fav": 871,
						"Neu": 427,
						"Unfav": 913
					},
					"N": 2211
				},
				"DI03": {
					"Dist": {
						"Fav": 899,
						"Neu": 455,
						"Unfav": 901
					},
					"N": 2255
				},
				"WK02": {
					"Dist": {
						"Fav": 894,
						"Neu": 471,
						"Unfav": 876
					},
					"N": 2241
				},
				"SP47": {
					"Dist": {
						"Fav": 879,
						"Neu": 458,
						"Unfav": 898
					},
					"N": 2235
				},
				"WS01": {
					"Dist": {
						"Fav": 946,
						"Neu": 462,
						"Unfav": 855
					},
					"N": 2263
				},
				"DC09": {
					"Dist": {
						"Fav": 891,
						"Neu": 448,
						"Unfav": 877
					},
					"N": 2216
				},
				"AV02": {
					"Dist": {
						"Fav": 2217,
						"Neu": 374,
						"Unfav": 295
					},
					"N": 2886
				},
				"DI04": {
					"Dist": {
						"Fav": 2188,
						"Neu": 381,
						"Unfav": 319
					},
					"N": 2888
				},
				"IV05": {
					"Dist": {
						"Fav": 450,
						"Neu": 143,
						"Unfav": 111
					},
					"N": 704
				},
				"OM06": {
					"Dist": {
						"Fav": 525,
						"Neu": 525,
						"Unfav": 1077
					},
					"N": 2127
				},
				"NSQ1": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				}
			},
			"440": {
				"RE01": {
					"Dist": {
						"Fav": 2234,
						"Neu": 389,
						"Unfav": 306
					},
					"N": 2929
				},
				"DM02": {
					"Dist": {
						"Fav": 2228,
						"Neu": 334,
						"Unfav": 365
					},
					"N": 2927
				},
				"RC01": {
					"Dist": {
						"Fav": 447,
						"Neu": 140,
						"Unfav": 126
					},
					"N": 713
				},
				"TW06": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"QS01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"PE09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"AV15": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"LD04": {
					"Dist": {
						"Fav": 2258,
						"Neu": 381,
						"Unfav": 290
					},
					"N": 2929
				},
				"WS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"PE06": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"SD04": {
					"Dist": {
						"Fav": 275,
						"Neu": 97,
						"Unfav": 100
					},
					"N": 472
				},
				"PE03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM12": {
					"Dist": {
						"Fav": 194,
						"Neu": 23,
						"Unfav": 19
					},
					"N": 236
				},
				"QS16": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"LD09": {
					"Dist": {
						"Fav": 393,
						"Neu": 53,
						"Unfav": 46
					},
					"N": 492
				},
				"TR01": {
					"Dist": {
						"Fav": 340,
						"Neu": 64,
						"Unfav": 67
					},
					"N": 471
				},
				"VC04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"GP07": {
					"Dist": {
						"Fav": 114,
						"Neu": 65,
						"Unfav": 59
					},
					"N": 238
				},
				"ER01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"IV02": {
					"Dist": {
						"Fav": 289,
						"Neu": 86,
						"Unfav": 115
					},
					"N": 490
				},
				"CP14": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"GP12": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"CP11": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"WE01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"IV04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"WE12": {
					"Dist": {
						"Fav": 769,
						"Neu": 254,
						"Unfav": 171
					},
					"N": 1194
				},
				"SP12": {
					"Dist": {
						"Fav": 1888,
						"Neu": 632,
						"Unfav": 409
					},
					"N": 2929
				},
				"AV09": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TW04": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"CP12": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"DC11": {
					"Dist": {
						"Fav": 2403,
						"Neu": 410,
						"Unfav": 112
					},
					"N": 2925
				},
				"BN01": {
					"Dist": {
						"Fav": 2255,
						"Neu": 412,
						"Unfav": 256
					},
					"N": 2923
				},
				"GP09": {
					"Dist": {
						"Fav": 1603,
						"Neu": 574,
						"Unfav": 750
					},
					"N": 2927
				},
				"QS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR04": {
					"Dist": {
						"Fav": 1440,
						"Neu": 558,
						"Unfav": 930
					},
					"N": 2928
				},
				"QS02": {
					"Dist": {
						"Fav": 879,
						"Neu": 457,
						"Unfav": 886
					},
					"N": 2222
				},
				"JS05": {
					"Dist": {
						"Fav": 870,
						"Neu": 463,
						"Unfav": 877
					},
					"N": 2210
				},
				"OM11": {
					"Dist": {
						"Fav": 886,
						"Neu": 483,
						"Unfav": 910
					},
					"N": 2279
				},
				"SD05": {
					"Dist": {
						"Fav": 887,
						"Neu": 473,
						"Unfav": 867
					},
					"N": 2227
				},
				"SD03": {
					"Dist": {
						"Fav": 905,
						"Neu": 453,
						"Unfav": 929
					},
					"N": 2287
				},
				"OS02": {
					"Dist": {
						"Fav": 882,
						"Neu": 444,
						"Unfav": 915
					},
					"N": 2241
				},
				"JS02": {
					"Dist": {
						"Fav": 887,
						"Neu": 473,
						"Unfav": 902
					},
					"N": 2262
				},
				"ST01": {
					"Dist": {
						"Fav": 888,
						"Neu": 461,
						"Unfav": 894
					},
					"N": 2243
				},
				"WL01": {
					"Dist": {
						"Fav": 862,
						"Neu": 468,
						"Unfav": 917
					},
					"N": 2247
				},
				"GP10": {
					"Dist": {
						"Fav": 882,
						"Neu": 436,
						"Unfav": 929
					},
					"N": 2247
				},
				"WE08": {
					"Dist": {
						"Fav": 903,
						"Neu": 457,
						"Unfav": 880
					},
					"N": 2240
				},
				"DM04": {
					"Dist": {
						"Fav": 903,
						"Neu": 419,
						"Unfav": 956
					},
					"N": 2278
				},
				"DM18": {
					"Dist": {
						"Fav": 941,
						"Neu": 465,
						"Unfav": 865
					},
					"N": 2271
				},
				"SP45": {
					"Dist": {
						"Fav": 902,
						"Neu": 478,
						"Unfav": 888
					},
					"N": 2268
				},
				"SV03": {
					"Dist": {
						"Fav": 894,
						"Neu": 454,
						"Unfav": 913
					},
					"N": 2261
				},
				"SR05": {
					"Dist": {
						"Fav": 931,
						"Neu": 429,
						"Unfav": 903
					},
					"N": 2263
				},
				"SR03": {
					"Dist": {
						"Fav": 901,
						"Neu": 435,
						"Unfav": 923
					},
					"N": 2259
				},
				"TW02": {
					"Dist": {
						"Fav": 934,
						"Neu": 486,
						"Unfav": 854
					},
					"N": 2274
				},
				"DC08": {
					"Dist": {
						"Fav": 898,
						"Neu": 456,
						"Unfav": 897
					},
					"N": 2251
				},
				"GP03": {
					"Dist": {
						"Fav": 946,
						"Neu": 456,
						"Unfav": 862
					},
					"N": 2264
				},
				"PE01": {
					"Dist": {
						"Fav": 925,
						"Neu": 470,
						"Unfav": 908
					},
					"N": 2303
				},
				"AV01": {
					"Dist": {
						"Fav": 928,
						"Neu": 457,
						"Unfav": 872
					},
					"N": 2257
				},
				"AV08": {
					"Dist": {
						"Fav": 859,
						"Neu": 471,
						"Unfav": 931
					},
					"N": 2261
				},
				"BN04": {
					"Dist": {
						"Fav": 920,
						"Neu": 449,
						"Unfav": 913
					},
					"N": 2282
				},
				"CP16": {
					"Dist": {
						"Fav": 886,
						"Neu": 455,
						"Unfav": 911
					},
					"N": 2252
				},
				"PE10": {
					"Dist": {
						"Fav": 900,
						"Neu": 475,
						"Unfav": 898
					},
					"N": 2273
				},
				"PE21": {
					"Dist": {
						"Fav": 899,
						"Neu": 478,
						"Unfav": 869
					},
					"N": 2246
				},
				"OM04": {
					"Dist": {
						"Fav": 917,
						"Neu": 417,
						"Unfav": 937
					},
					"N": 2271
				},
				"QS09": {
					"Dist": {
						"Fav": 905,
						"Neu": 430,
						"Unfav": 920
					},
					"N": 2255
				},
				"SP04": {
					"Dist": {
						"Fav": 869,
						"Neu": 504,
						"Unfav": 853
					},
					"N": 2226
				},
				"WK01": {
					"Dist": {
						"Fav": 875,
						"Neu": 425,
						"Unfav": 925
					},
					"N": 2225
				},
				"DI03": {
					"Dist": {
						"Fav": 914,
						"Neu": 458,
						"Unfav": 884
					},
					"N": 2256
				},
				"WK02": {
					"Dist": {
						"Fav": 892,
						"Neu": 414,
						"Unfav": 941
					},
					"N": 2247
				},
				"SP47": {
					"Dist": {
						"Fav": 939,
						"Neu": 471,
						"Unfav": 860
					},
					"N": 2270
				},
				"WS01": {
					"Dist": {
						"Fav": 910,
						"Neu": 477,
						"Unfav": 899
					},
					"N": 2286
				},
				"DC09": {
					"Dist": {
						"Fav": 889,
						"Neu": 482,
						"Unfav": 895
					},
					"N": 2266
				},
				"AV02": {
					"Dist": {
						"Fav": 2234,
						"Neu": 389,
						"Unfav": 306
					},
					"N": 2929
				},
				"DI04": {
					"Dist": {
						"Fav": 2228,
						"Neu": 334,
						"Unfav": 365
					},
					"N": 2927
				},
				"IV05": {
					"Dist": {
						"Fav": 447,
						"Neu": 140,
						"Unfav": 126
					},
					"N": 713
				},
				"OM06": {
					"Dist": {
						"Fav": 531,
						"Neu": 540,
						"Unfav": 1119
					},
					"N": 2190
				},
				"NSQ1": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				}
			}
		},
		"ITEMSX.2019.389.0.GENDER": {
			"410": {
				"RE01": {
					"Dist": {
						"Fav": 2640,
						"Neu": 360,
						"Unfav": 288
					},
					"N": 3288
				},
				"DM02": {
					"Dist": {
						"Fav": 2709,
						"Neu": 295,
						"Unfav": 282
					},
					"N": 3286
				},
				"RC01": {
					"Dist": {
						"Fav": 2367,
						"Neu": 495,
						"Unfav": 419
					},
					"N": 3281
				},
				"TW06": {
					"Dist": {
						"Fav": 2647,
						"Neu": 346,
						"Unfav": 294
					},
					"N": 3287
				},
				"QS01": {
					"Dist": {
						"Fav": 2457,
						"Neu": 469,
						"Unfav": 360
					},
					"N": 3286
				},
				"PE09": {
					"Dist": {
						"Fav": 2457,
						"Neu": 469,
						"Unfav": 360
					},
					"N": 3286
				},
				"AV15": {
					"Dist": {
						"Fav": 2898,
						"Neu": 217,
						"Unfav": 172
					},
					"N": 3287
				},
				"LD04": {
					"Dist": {
						"Fav": 2370,
						"Neu": 475,
						"Unfav": 437
					},
					"N": 3282
				},
				"WS03": {
					"Dist": {
						"Fav": 2740,
						"Neu": 292,
						"Unfav": 249
					},
					"N": 3281
				},
				"TR09": {
					"Dist": {
						"Fav": 2588,
						"Neu": 430,
						"Unfav": 264
					},
					"N": 3282
				},
				"PE06": {
					"Dist": {
						"Fav": 2745,
						"Neu": 325,
						"Unfav": 182
					},
					"N": 3252
				},
				"SD04": {
					"Dist": {
						"Fav": 2436,
						"Neu": 467,
						"Unfav": 377
					},
					"N": 3280
				},
				"PE03": {
					"Dist": {
						"Fav": 2587,
						"Neu": 385,
						"Unfav": 293
					},
					"N": 3265
				},
				"OM12": {
					"Dist": {
						"Fav": 2562,
						"Neu": 401,
						"Unfav": 275
					},
					"N": 3238
				},
				"QS16": {
					"Dist": {
						"Fav": 2182,
						"Neu": 625,
						"Unfav": 456
					},
					"N": 3263
				},
				"LD09": {
					"Dist": {
						"Fav": 2536,
						"Neu": 399,
						"Unfav": 344
					},
					"N": 3279
				},
				"TR01": {
					"Dist": {
						"Fav": 2785,
						"Neu": 330,
						"Unfav": 169
					},
					"N": 3284
				},
				"VC04": {
					"Dist": {
						"Fav": 2769,
						"Neu": 369,
						"Unfav": 142
					},
					"N": 3280
				},
				"GP07": {
					"Dist": {
						"Fav": 1849,
						"Neu": 711,
						"Unfav": 649
					},
					"N": 3209
				},
				"ER01": {
					"Dist": {
						"Fav": 2219,
						"Neu": 563,
						"Unfav": 495
					},
					"N": 3277
				},
				"IV02": {
					"Dist": {
						"Fav": 2035,
						"Neu": 642,
						"Unfav": 588
					},
					"N": 3265
				},
				"CP14": {
					"Dist": {
						"Fav": 1812,
						"Neu": 654,
						"Unfav": 784
					},
					"N": 3250
				},
				"GP12": {
					"Dist": {
						"Fav": 2540,
						"Neu": 465,
						"Unfav": 251
					},
					"N": 3256
				},
				"CP11": {
					"Dist": {
						"Fav": 2691,
						"Neu": 354,
						"Unfav": 89
					},
					"N": 3134
				},
				"WE01": {
					"Dist": {
						"Fav": 2701,
						"Neu": 376,
						"Unfav": 201
					},
					"N": 3278
				},
				"IV04": {
					"Dist": {
						"Fav": 2540,
						"Neu": 528,
						"Unfav": 120
					},
					"N": 3188
				},
				"WE12": {
					"Dist": {
						"Fav": 2357,
						"Neu": 589,
						"Unfav": 288
					},
					"N": 3234
				},
				"SP12": {
					"Dist": {
						"Fav": 2233,
						"Neu": 643,
						"Unfav": 399
					},
					"N": 3275
				},
				"AV09": {
					"Dist": {
						"Fav": 2772,
						"Neu": 381,
						"Unfav": 68
					},
					"N": 3221
				},
				"TW04": {
					"Dist": {
						"Fav": 1531,
						"Neu": 904,
						"Unfav": 276
					},
					"N": 2711
				},
				"CP12": {
					"Dist": {
						"Fav": 2426,
						"Neu": 550,
						"Unfav": 288
					},
					"N": 3264
				},
				"DC11": {
					"Dist": {
						"Fav": 2717,
						"Neu": 450,
						"Unfav": 115
					},
					"N": 3282
				},
				"BN01": {
					"Dist": {
						"Fav": 2588,
						"Neu": 442,
						"Unfav": 248
					},
					"N": 3278
				},
				"GP09": {
					"Dist": {
						"Fav": 2237,
						"Neu": 506,
						"Unfav": 540
					},
					"N": 3283
				},
				"QS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR04": {
					"Dist": {
						"Fav": 1990,
						"Neu": 583,
						"Unfav": 713
					},
					"N": 3286
				},
				"QS02": {
					"Dist": {
						"Fav": 1052,
						"Neu": 578,
						"Unfav": 1083
					},
					"N": 2713
				},
				"JS05": {
					"Dist": {
						"Fav": 1055,
						"Neu": 554,
						"Unfav": 1061
					},
					"N": 2670
				},
				"OM11": {
					"Dist": {
						"Fav": 1158,
						"Neu": 523,
						"Unfav": 1057
					},
					"N": 2738
				},
				"SD05": {
					"Dist": {
						"Fav": 1089,
						"Neu": 562,
						"Unfav": 1040
					},
					"N": 2691
				},
				"SD03": {
					"Dist": {
						"Fav": 1117,
						"Neu": 499,
						"Unfav": 1064
					},
					"N": 2680
				},
				"OS02": {
					"Dist": {
						"Fav": 1090,
						"Neu": 581,
						"Unfav": 1061
					},
					"N": 2732
				},
				"JS02": {
					"Dist": {
						"Fav": 1087,
						"Neu": 565,
						"Unfav": 1074
					},
					"N": 2726
				},
				"ST01": {
					"Dist": {
						"Fav": 1088,
						"Neu": 524,
						"Unfav": 1110
					},
					"N": 2722
				},
				"WL01": {
					"Dist": {
						"Fav": 1135,
						"Neu": 525,
						"Unfav": 1059
					},
					"N": 2719
				},
				"GP10": {
					"Dist": {
						"Fav": 1057,
						"Neu": 563,
						"Unfav": 1109
					},
					"N": 2729
				},
				"WE08": {
					"Dist": {
						"Fav": 1019,
						"Neu": 534,
						"Unfav": 1138
					},
					"N": 2691
				},
				"DM04": {
					"Dist": {
						"Fav": 1099,
						"Neu": 511,
						"Unfav": 1089
					},
					"N": 2699
				},
				"DM18": {
					"Dist": {
						"Fav": 1055,
						"Neu": 548,
						"Unfav": 1067
					},
					"N": 2670
				},
				"SP45": {
					"Dist": {
						"Fav": 1098,
						"Neu": 543,
						"Unfav": 1084
					},
					"N": 2725
				},
				"SV03": {
					"Dist": {
						"Fav": 1101,
						"Neu": 501,
						"Unfav": 1110
					},
					"N": 2712
				},
				"SR05": {
					"Dist": {
						"Fav": 1103,
						"Neu": 550,
						"Unfav": 1062
					},
					"N": 2715
				},
				"SR03": {
					"Dist": {
						"Fav": 1102,
						"Neu": 539,
						"Unfav": 1078
					},
					"N": 2719
				},
				"TW02": {
					"Dist": {
						"Fav": 1094,
						"Neu": 546,
						"Unfav": 1064
					},
					"N": 2704
				},
				"DC08": {
					"Dist": {
						"Fav": 1092,
						"Neu": 537,
						"Unfav": 1073
					},
					"N": 2702
				},
				"GP03": {
					"Dist": {
						"Fav": 1082,
						"Neu": 549,
						"Unfav": 1121
					},
					"N": 2752
				},
				"PE01": {
					"Dist": {
						"Fav": 1087,
						"Neu": 514,
						"Unfav": 1117
					},
					"N": 2718
				},
				"AV01": {
					"Dist": {
						"Fav": 1070,
						"Neu": 567,
						"Unfav": 1066
					},
					"N": 2703
				},
				"AV08": {
					"Dist": {
						"Fav": 1099,
						"Neu": 528,
						"Unfav": 1061
					},
					"N": 2688
				},
				"BN04": {
					"Dist": {
						"Fav": 1077,
						"Neu": 541,
						"Unfav": 1102
					},
					"N": 2720
				},
				"CP16": {
					"Dist": {
						"Fav": 1082,
						"Neu": 530,
						"Unfav": 1056
					},
					"N": 2668
				},
				"PE10": {
					"Dist": {
						"Fav": 1103,
						"Neu": 579,
						"Unfav": 1028
					},
					"N": 2710
				},
				"PE21": {
					"Dist": {
						"Fav": 1069,
						"Neu": 547,
						"Unfav": 1086
					},
					"N": 2702
				},
				"OM04": {
					"Dist": {
						"Fav": 1096,
						"Neu": 550,
						"Unfav": 1033
					},
					"N": 2679
				},
				"QS09": {
					"Dist": {
						"Fav": 1029,
						"Neu": 585,
						"Unfav": 1075
					},
					"N": 2689
				},
				"SP04": {
					"Dist": {
						"Fav": 1066,
						"Neu": 531,
						"Unfav": 1105
					},
					"N": 2702
				},
				"WK01": {
					"Dist": {
						"Fav": 1062,
						"Neu": 555,
						"Unfav": 1107
					},
					"N": 2724
				},
				"DI03": {
					"Dist": {
						"Fav": 1079,
						"Neu": 503,
						"Unfav": 1088
					},
					"N": 2670
				},
				"WK02": {
					"Dist": {
						"Fav": 1056,
						"Neu": 552,
						"Unfav": 1084
					},
					"N": 2692
				},
				"SP47": {
					"Dist": {
						"Fav": 1080,
						"Neu": 534,
						"Unfav": 1087
					},
					"N": 2701
				},
				"WS01": {
					"Dist": {
						"Fav": 1072,
						"Neu": 539,
						"Unfav": 1070
					},
					"N": 2681
				},
				"DC09": {
					"Dist": {
						"Fav": 1056,
						"Neu": 529,
						"Unfav": 1100
					},
					"N": 2685
				},
				"AV02": {
					"Dist": {
						"Fav": 2640,
						"Neu": 360,
						"Unfav": 288
					},
					"N": 3288
				},
				"DI04": {
					"Dist": {
						"Fav": 2709,
						"Neu": 295,
						"Unfav": 282
					},
					"N": 3286
				},
				"IV05": {
					"Dist": {
						"Fav": 2367,
						"Neu": 495,
						"Unfav": 419
					},
					"N": 3281
				},
				"OM06": {
					"Dist": {
						"Fav": 658,
						"Neu": 687,
						"Unfav": 1252
					},
					"N": 2597
				},
				"NSQ1": {
					"Dist": {
						"Fav": 1486,
						"Neu": 1115,
						"Unfav": 688
					},
					"N": 3289
				}
			},
			"420": {
				"RE01": {
					"Dist": {
						"Fav": 2682,
						"Neu": 355,
						"Unfav": 261
					},
					"N": 3298
				},
				"DM02": {
					"Dist": {
						"Fav": 2762,
						"Neu": 272,
						"Unfav": 264
					},
					"N": 3298
				},
				"RC01": {
					"Dist": {
						"Fav": 2349,
						"Neu": 524,
						"Unfav": 422
					},
					"N": 3295
				},
				"TW06": {
					"Dist": {
						"Fav": 2656,
						"Neu": 375,
						"Unfav": 264
					},
					"N": 3295
				},
				"QS01": {
					"Dist": {
						"Fav": 2493,
						"Neu": 502,
						"Unfav": 302
					},
					"N": 3297
				},
				"PE09": {
					"Dist": {
						"Fav": 2493,
						"Neu": 502,
						"Unfav": 302
					},
					"N": 3297
				},
				"AV15": {
					"Dist": {
						"Fav": 2901,
						"Neu": 217,
						"Unfav": 178
					},
					"N": 3296
				},
				"LD04": {
					"Dist": {
						"Fav": 2423,
						"Neu": 460,
						"Unfav": 412
					},
					"N": 3295
				},
				"WS03": {
					"Dist": {
						"Fav": 2808,
						"Neu": 263,
						"Unfav": 227
					},
					"N": 3298
				},
				"TR09": {
					"Dist": {
						"Fav": 2633,
						"Neu": 397,
						"Unfav": 266
					},
					"N": 3296
				},
				"PE06": {
					"Dist": {
						"Fav": 2786,
						"Neu": 319,
						"Unfav": 174
					},
					"N": 3279
				},
				"SD04": {
					"Dist": {
						"Fav": 2420,
						"Neu": 469,
						"Unfav": 402
					},
					"N": 3291
				},
				"PE03": {
					"Dist": {
						"Fav": 2584,
						"Neu": 446,
						"Unfav": 254
					},
					"N": 3284
				},
				"OM12": {
					"Dist": {
						"Fav": 2572,
						"Neu": 421,
						"Unfav": 264
					},
					"N": 3257
				},
				"QS16": {
					"Dist": {
						"Fav": 2175,
						"Neu": 663,
						"Unfav": 434
					},
					"N": 3272
				},
				"LD09": {
					"Dist": {
						"Fav": 2588,
						"Neu": 376,
						"Unfav": 330
					},
					"N": 3294
				},
				"TR01": {
					"Dist": {
						"Fav": 2786,
						"Neu": 326,
						"Unfav": 176
					},
					"N": 3288
				},
				"VC04": {
					"Dist": {
						"Fav": 2801,
						"Neu": 355,
						"Unfav": 129
					},
					"N": 3285
				},
				"GP07": {
					"Dist": {
						"Fav": 1827,
						"Neu": 703,
						"Unfav": 698
					},
					"N": 3228
				},
				"ER01": {
					"Dist": {
						"Fav": 2213,
						"Neu": 583,
						"Unfav": 498
					},
					"N": 3294
				},
				"IV02": {
					"Dist": {
						"Fav": 1964,
						"Neu": 685,
						"Unfav": 632
					},
					"N": 3281
				},
				"CP14": {
					"Dist": {
						"Fav": 1747,
						"Neu": 684,
						"Unfav": 809
					},
					"N": 3240
				},
				"GP12": {
					"Dist": {
						"Fav": 2559,
						"Neu": 441,
						"Unfav": 241
					},
					"N": 3241
				},
				"CP11": {
					"Dist": {
						"Fav": 2708,
						"Neu": 349,
						"Unfav": 67
					},
					"N": 3124
				},
				"WE01": {
					"Dist": {
						"Fav": 2727,
						"Neu": 365,
						"Unfav": 201
					},
					"N": 3293
				},
				"IV04": {
					"Dist": {
						"Fav": 2499,
						"Neu": 572,
						"Unfav": 122
					},
					"N": 3193
				},
				"WE12": {
					"Dist": {
						"Fav": 2311,
						"Neu": 616,
						"Unfav": 311
					},
					"N": 3238
				},
				"SP12": {
					"Dist": {
						"Fav": 2252,
						"Neu": 669,
						"Unfav": 364
					},
					"N": 3285
				},
				"AV09": {
					"Dist": {
						"Fav": 2759,
						"Neu": 383,
						"Unfav": 76
					},
					"N": 3218
				},
				"TW04": {
					"Dist": {
						"Fav": 1461,
						"Neu": 977,
						"Unfav": 272
					},
					"N": 2710
				},
				"CP12": {
					"Dist": {
						"Fav": 2447,
						"Neu": 520,
						"Unfav": 305
					},
					"N": 3272
				},
				"DC11": {
					"Dist": {
						"Fav": 2736,
						"Neu": 454,
						"Unfav": 100
					},
					"N": 3290
				},
				"BN01": {
					"Dist": {
						"Fav": 2625,
						"Neu": 423,
						"Unfav": 242
					},
					"N": 3290
				},
				"GP09": {
					"Dist": {
						"Fav": 2258,
						"Neu": 486,
						"Unfav": 552
					},
					"N": 3296
				},
				"QS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR04": {
					"Dist": {
						"Fav": 1991,
						"Neu": 619,
						"Unfav": 685
					},
					"N": 3295
				},
				"QS02": {
					"Dist": {
						"Fav": 1073,
						"Neu": 543,
						"Unfav": 1101
					},
					"N": 2717
				},
				"JS05": {
					"Dist": {
						"Fav": 1150,
						"Neu": 586,
						"Unfav": 1018
					},
					"N": 2754
				},
				"OM11": {
					"Dist": {
						"Fav": 1078,
						"Neu": 554,
						"Unfav": 1088
					},
					"N": 2720
				},
				"SD05": {
					"Dist": {
						"Fav": 1115,
						"Neu": 536,
						"Unfav": 1071
					},
					"N": 2722
				},
				"SD03": {
					"Dist": {
						"Fav": 1082,
						"Neu": 552,
						"Unfav": 1103
					},
					"N": 2737
				},
				"OS02": {
					"Dist": {
						"Fav": 1111,
						"Neu": 530,
						"Unfav": 1069
					},
					"N": 2710
				},
				"JS02": {
					"Dist": {
						"Fav": 1102,
						"Neu": 516,
						"Unfav": 1078
					},
					"N": 2696
				},
				"ST01": {
					"Dist": {
						"Fav": 1069,
						"Neu": 555,
						"Unfav": 1099
					},
					"N": 2723
				},
				"WL01": {
					"Dist": {
						"Fav": 1060,
						"Neu": 613,
						"Unfav": 1073
					},
					"N": 2746
				},
				"GP10": {
					"Dist": {
						"Fav": 1059,
						"Neu": 546,
						"Unfav": 1071
					},
					"N": 2676
				},
				"WE08": {
					"Dist": {
						"Fav": 1040,
						"Neu": 574,
						"Unfav": 1138
					},
					"N": 2752
				},
				"DM04": {
					"Dist": {
						"Fav": 1087,
						"Neu": 537,
						"Unfav": 1099
					},
					"N": 2723
				},
				"DM18": {
					"Dist": {
						"Fav": 1117,
						"Neu": 493,
						"Unfav": 1113
					},
					"N": 2723
				},
				"SP45": {
					"Dist": {
						"Fav": 1095,
						"Neu": 535,
						"Unfav": 1046
					},
					"N": 2676
				},
				"SV03": {
					"Dist": {
						"Fav": 1067,
						"Neu": 577,
						"Unfav": 1066
					},
					"N": 2710
				},
				"SR05": {
					"Dist": {
						"Fav": 1075,
						"Neu": 535,
						"Unfav": 1124
					},
					"N": 2734
				},
				"SR03": {
					"Dist": {
						"Fav": 1087,
						"Neu": 499,
						"Unfav": 1103
					},
					"N": 2689
				},
				"TW02": {
					"Dist": {
						"Fav": 1080,
						"Neu": 576,
						"Unfav": 1049
					},
					"N": 2705
				},
				"DC08": {
					"Dist": {
						"Fav": 1113,
						"Neu": 538,
						"Unfav": 1076
					},
					"N": 2727
				},
				"GP03": {
					"Dist": {
						"Fav": 1118,
						"Neu": 548,
						"Unfav": 1033
					},
					"N": 2699
				},
				"PE01": {
					"Dist": {
						"Fav": 1085,
						"Neu": 559,
						"Unfav": 1087
					},
					"N": 2731
				},
				"AV01": {
					"Dist": {
						"Fav": 1144,
						"Neu": 550,
						"Unfav": 1023
					},
					"N": 2717
				},
				"AV08": {
					"Dist": {
						"Fav": 1109,
						"Neu": 512,
						"Unfav": 1088
					},
					"N": 2709
				},
				"BN04": {
					"Dist": {
						"Fav": 1089,
						"Neu": 547,
						"Unfav": 1052
					},
					"N": 2688
				},
				"CP16": {
					"Dist": {
						"Fav": 1032,
						"Neu": 535,
						"Unfav": 1099
					},
					"N": 2666
				},
				"PE10": {
					"Dist": {
						"Fav": 1097,
						"Neu": 539,
						"Unfav": 1087
					},
					"N": 2723
				},
				"PE21": {
					"Dist": {
						"Fav": 1040,
						"Neu": 565,
						"Unfav": 1133
					},
					"N": 2738
				},
				"OM04": {
					"Dist": {
						"Fav": 1046,
						"Neu": 551,
						"Unfav": 1104
					},
					"N": 2701
				},
				"QS09": {
					"Dist": {
						"Fav": 1052,
						"Neu": 540,
						"Unfav": 1089
					},
					"N": 2681
				},
				"SP04": {
					"Dist": {
						"Fav": 1031,
						"Neu": 617,
						"Unfav": 1081
					},
					"N": 2729
				},
				"WK01": {
					"Dist": {
						"Fav": 1063,
						"Neu": 540,
						"Unfav": 1073
					},
					"N": 2676
				},
				"DI03": {
					"Dist": {
						"Fav": 1033,
						"Neu": 567,
						"Unfav": 1099
					},
					"N": 2699
				},
				"WK02": {
					"Dist": {
						"Fav": 1051,
						"Neu": 540,
						"Unfav": 1104
					},
					"N": 2695
				},
				"SP47": {
					"Dist": {
						"Fav": 1069,
						"Neu": 513,
						"Unfav": 1098
					},
					"N": 2680
				},
				"WS01": {
					"Dist": {
						"Fav": 1063,
						"Neu": 561,
						"Unfav": 1071
					},
					"N": 2695
				},
				"DC09": {
					"Dist": {
						"Fav": 1111,
						"Neu": 539,
						"Unfav": 1079
					},
					"N": 2729
				},
				"AV02": {
					"Dist": {
						"Fav": 2682,
						"Neu": 355,
						"Unfav": 261
					},
					"N": 3298
				},
				"DI04": {
					"Dist": {
						"Fav": 2762,
						"Neu": 272,
						"Unfav": 264
					},
					"N": 3298
				},
				"IV05": {
					"Dist": {
						"Fav": 2349,
						"Neu": 524,
						"Unfav": 422
					},
					"N": 3295
				},
				"OM06": {
					"Dist": {
						"Fav": 661,
						"Neu": 650,
						"Unfav": 1297
					},
					"N": 2608
				},
				"NSQ1": {
					"Dist": {
						"Fav": 1495,
						"Neu": 1108,
						"Unfav": 697
					},
					"N": 3300
				}
			},
			"430": {
				"RE01": {
					"Dist": {
						"Fav": 2606,
						"Neu": 341,
						"Unfav": 266
					},
					"N": 3213
				},
				"DM02": {
					"Dist": {
						"Fav": 2684,
						"Neu": 273,
						"Unfav": 255
					},
					"N": 3212
				},
				"RC01": {
					"Dist": {
						"Fav": 2296,
						"Neu": 514,
						"Unfav": 401
					},
					"N": 3211
				},
				"TW06": {
					"Dist": {
						"Fav": 2618,
						"Neu": 337,
						"Unfav": 258
					},
					"N": 3213
				},
				"QS01": {
					"Dist": {
						"Fav": 2394,
						"Neu": 481,
						"Unfav": 337
					},
					"N": 3212
				},
				"PE09": {
					"Dist": {
						"Fav": 2394,
						"Neu": 481,
						"Unfav": 337
					},
					"N": 3212
				},
				"AV15": {
					"Dist": {
						"Fav": 2805,
						"Neu": 242,
						"Unfav": 166
					},
					"N": 3213
				},
				"LD04": {
					"Dist": {
						"Fav": 2321,
						"Neu": 476,
						"Unfav": 414
					},
					"N": 3211
				},
				"WS03": {
					"Dist": {
						"Fav": 2699,
						"Neu": 287,
						"Unfav": 225
					},
					"N": 3211
				},
				"TR09": {
					"Dist": {
						"Fav": 2547,
						"Neu": 404,
						"Unfav": 257
					},
					"N": 3208
				},
				"PE06": {
					"Dist": {
						"Fav": 2700,
						"Neu": 289,
						"Unfav": 204
					},
					"N": 3193
				},
				"SD04": {
					"Dist": {
						"Fav": 2349,
						"Neu": 459,
						"Unfav": 401
					},
					"N": 3209
				},
				"PE03": {
					"Dist": {
						"Fav": 2490,
						"Neu": 444,
						"Unfav": 261
					},
					"N": 3195
				},
				"OM12": {
					"Dist": {
						"Fav": 2470,
						"Neu": 392,
						"Unfav": 304
					},
					"N": 3166
				},
				"QS16": {
					"Dist": {
						"Fav": 2122,
						"Neu": 658,
						"Unfav": 414
					},
					"N": 3194
				},
				"LD09": {
					"Dist": {
						"Fav": 2480,
						"Neu": 391,
						"Unfav": 337
					},
					"N": 3208
				},
				"TR01": {
					"Dist": {
						"Fav": 2710,
						"Neu": 331,
						"Unfav": 165
					},
					"N": 3206
				},
				"VC04": {
					"Dist": {
						"Fav": 2720,
						"Neu": 366,
						"Unfav": 121
					},
					"N": 3207
				},
				"GP07": {
					"Dist": {
						"Fav": 1794,
						"Neu": 662,
						"Unfav": 689
					},
					"N": 3145
				},
				"ER01": {
					"Dist": {
						"Fav": 2146,
						"Neu": 573,
						"Unfav": 484
					},
					"N": 3203
				},
				"IV02": {
					"Dist": {
						"Fav": 1908,
						"Neu": 679,
						"Unfav": 603
					},
					"N": 3190
				},
				"CP14": {
					"Dist": {
						"Fav": 1715,
						"Neu": 689,
						"Unfav": 770
					},
					"N": 3174
				},
				"GP12": {
					"Dist": {
						"Fav": 2501,
						"Neu": 414,
						"Unfav": 246
					},
					"N": 3161
				},
				"CP11": {
					"Dist": {
						"Fav": 2671,
						"Neu": 319,
						"Unfav": 77
					},
					"N": 3067
				},
				"WE01": {
					"Dist": {
						"Fav": 2621,
						"Neu": 365,
						"Unfav": 225
					},
					"N": 3211
				},
				"IV04": {
					"Dist": {
						"Fav": 2433,
						"Neu": 552,
						"Unfav": 129
					},
					"N": 3114
				},
				"WE12": {
					"Dist": {
						"Fav": 2247,
						"Neu": 608,
						"Unfav": 307
					},
					"N": 3162
				},
				"SP12": {
					"Dist": {
						"Fav": 2186,
						"Neu": 640,
						"Unfav": 382
					},
					"N": 3208
				},
				"AV09": {
					"Dist": {
						"Fav": 2661,
						"Neu": 394,
						"Unfav": 97
					},
					"N": 3152
				},
				"TW04": {
					"Dist": {
						"Fav": 1433,
						"Neu": 942,
						"Unfav": 271
					},
					"N": 2646
				},
				"CP12": {
					"Dist": {
						"Fav": 2359,
						"Neu": 525,
						"Unfav": 293
					},
					"N": 3177
				},
				"DC11": {
					"Dist": {
						"Fav": 2654,
						"Neu": 431,
						"Unfav": 124
					},
					"N": 3209
				},
				"BN01": {
					"Dist": {
						"Fav": 2564,
						"Neu": 416,
						"Unfav": 227
					},
					"N": 3207
				},
				"GP09": {
					"Dist": {
						"Fav": 2216,
						"Neu": 448,
						"Unfav": 548
					},
					"N": 3212
				},
				"QS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR04": {
					"Dist": {
						"Fav": 1930,
						"Neu": 562,
						"Unfav": 718
					},
					"N": 3210
				},
				"QS02": {
					"Dist": {
						"Fav": 1087,
						"Neu": 489,
						"Unfav": 1048
					},
					"N": 2624
				},
				"JS05": {
					"Dist": {
						"Fav": 1068,
						"Neu": 535,
						"Unfav": 1036
					},
					"N": 2639
				},
				"OM11": {
					"Dist": {
						"Fav": 1065,
						"Neu": 528,
						"Unfav": 1035
					},
					"N": 2628
				},
				"SD05": {
					"Dist": {
						"Fav": 1045,
						"Neu": 545,
						"Unfav": 1057
					},
					"N": 2647
				},
				"SD03": {
					"Dist": {
						"Fav": 1013,
						"Neu": 576,
						"Unfav": 1054
					},
					"N": 2643
				},
				"OS02": {
					"Dist": {
						"Fav": 1054,
						"Neu": 525,
						"Unfav": 1058
					},
					"N": 2637
				},
				"JS02": {
					"Dist": {
						"Fav": 1067,
						"Neu": 536,
						"Unfav": 1052
					},
					"N": 2655
				},
				"ST01": {
					"Dist": {
						"Fav": 1050,
						"Neu": 543,
						"Unfav": 1083
					},
					"N": 2676
				},
				"WL01": {
					"Dist": {
						"Fav": 1068,
						"Neu": 515,
						"Unfav": 1045
					},
					"N": 2628
				},
				"GP10": {
					"Dist": {
						"Fav": 1072,
						"Neu": 530,
						"Unfav": 1043
					},
					"N": 2645
				},
				"WE08": {
					"Dist": {
						"Fav": 1059,
						"Neu": 518,
						"Unfav": 1057
					},
					"N": 2634
				},
				"DM04": {
					"Dist": {
						"Fav": 1042,
						"Neu": 586,
						"Unfav": 1003
					},
					"N": 2631
				},
				"DM18": {
					"Dist": {
						"Fav": 1042,
						"Neu": 579,
						"Unfav": 1014
					},
					"N": 2635
				},
				"SP45": {
					"Dist": {
						"Fav": 1037,
						"Neu": 555,
						"Unfav": 1038
					},
					"N": 2630
				},
				"SV03": {
					"Dist": {
						"Fav": 1031,
						"Neu": 492,
						"Unfav": 1069
					},
					"N": 2592
				},
				"SR05": {
					"Dist": {
						"Fav": 1098,
						"Neu": 482,
						"Unfav": 1016
					},
					"N": 2596
				},
				"SR03": {
					"Dist": {
						"Fav": 1084,
						"Neu": 527,
						"Unfav": 1027
					},
					"N": 2638
				},
				"TW02": {
					"Dist": {
						"Fav": 1068,
						"Neu": 535,
						"Unfav": 1032
					},
					"N": 2635
				},
				"DC08": {
					"Dist": {
						"Fav": 1033,
						"Neu": 523,
						"Unfav": 1101
					},
					"N": 2657
				},
				"GP03": {
					"Dist": {
						"Fav": 1063,
						"Neu": 536,
						"Unfav": 1049
					},
					"N": 2648
				},
				"PE01": {
					"Dist": {
						"Fav": 1076,
						"Neu": 503,
						"Unfav": 1087
					},
					"N": 2666
				},
				"AV01": {
					"Dist": {
						"Fav": 1048,
						"Neu": 541,
						"Unfav": 1043
					},
					"N": 2632
				},
				"AV08": {
					"Dist": {
						"Fav": 1035,
						"Neu": 525,
						"Unfav": 1099
					},
					"N": 2659
				},
				"BN04": {
					"Dist": {
						"Fav": 1067,
						"Neu": 504,
						"Unfav": 1011
					},
					"N": 2582
				},
				"CP16": {
					"Dist": {
						"Fav": 1026,
						"Neu": 550,
						"Unfav": 1054
					},
					"N": 2630
				},
				"PE10": {
					"Dist": {
						"Fav": 1068,
						"Neu": 520,
						"Unfav": 1049
					},
					"N": 2637
				},
				"PE21": {
					"Dist": {
						"Fav": 1118,
						"Neu": 497,
						"Unfav": 1048
					},
					"N": 2663
				},
				"OM04": {
					"Dist": {
						"Fav": 1068,
						"Neu": 505,
						"Unfav": 1039
					},
					"N": 2612
				},
				"QS09": {
					"Dist": {
						"Fav": 1071,
						"Neu": 554,
						"Unfav": 1030
					},
					"N": 2655
				},
				"SP04": {
					"Dist": {
						"Fav": 1069,
						"Neu": 532,
						"Unfav": 1025
					},
					"N": 2626
				},
				"WK01": {
					"Dist": {
						"Fav": 1060,
						"Neu": 525,
						"Unfav": 1036
					},
					"N": 2621
				},
				"DI03": {
					"Dist": {
						"Fav": 1016,
						"Neu": 511,
						"Unfav": 1125
					},
					"N": 2652
				},
				"WK02": {
					"Dist": {
						"Fav": 1067,
						"Neu": 537,
						"Unfav": 1042
					},
					"N": 2646
				},
				"SP47": {
					"Dist": {
						"Fav": 1037,
						"Neu": 546,
						"Unfav": 1050
					},
					"N": 2633
				},
				"WS01": {
					"Dist": {
						"Fav": 1064,
						"Neu": 504,
						"Unfav": 1079
					},
					"N": 2647
				},
				"DC09": {
					"Dist": {
						"Fav": 1040,
						"Neu": 541,
						"Unfav": 1050
					},
					"N": 2631
				},
				"AV02": {
					"Dist": {
						"Fav": 2606,
						"Neu": 341,
						"Unfav": 266
					},
					"N": 3213
				},
				"DI04": {
					"Dist": {
						"Fav": 2684,
						"Neu": 273,
						"Unfav": 255
					},
					"N": 3212
				},
				"IV05": {
					"Dist": {
						"Fav": 2296,
						"Neu": 514,
						"Unfav": 401
					},
					"N": 3211
				},
				"OM06": {
					"Dist": {
						"Fav": 661,
						"Neu": 610,
						"Unfav": 1280
					},
					"N": 2551
				},
				"NSQ1": {
					"Dist": {
						"Fav": 1392,
						"Neu": 1146,
						"Unfav": 676
					},
					"N": 3214
				}
			},
			"440": {
				"RE01": {
					"Dist": {
						"Fav": 2694,
						"Neu": 324,
						"Unfav": 268
					},
					"N": 3286
				},
				"DM02": {
					"Dist": {
						"Fav": 2777,
						"Neu": 266,
						"Unfav": 245
					},
					"N": 3288
				},
				"RC01": {
					"Dist": {
						"Fav": 2395,
						"Neu": 487,
						"Unfav": 399
					},
					"N": 3281
				},
				"TW06": {
					"Dist": {
						"Fav": 2717,
						"Neu": 309,
						"Unfav": 260
					},
					"N": 3286
				},
				"QS01": {
					"Dist": {
						"Fav": 2514,
						"Neu": 469,
						"Unfav": 305
					},
					"N": 3288
				},
				"PE09": {
					"Dist": {
						"Fav": 2514,
						"Neu": 469,
						"Unfav": 305
					},
					"N": 3288
				},
				"AV15": {
					"Dist": {
						"Fav": 2903,
						"Neu": 216,
						"Unfav": 166
					},
					"N": 3285
				},
				"LD04": {
					"Dist": {
						"Fav": 2416,
						"Neu": 476,
						"Unfav": 393
					},
					"N": 3285
				},
				"WS03": {
					"Dist": {
						"Fav": 2811,
						"Neu": 254,
						"Unfav": 218
					},
					"N": 3283
				},
				"TR09": {
					"Dist": {
						"Fav": 2617,
						"Neu": 409,
						"Unfav": 260
					},
					"N": 3286
				},
				"PE06": {
					"Dist": {
						"Fav": 2761,
						"Neu": 305,
						"Unfav": 195
					},
					"N": 3261
				},
				"SD04": {
					"Dist": {
						"Fav": 2449,
						"Neu": 435,
						"Unfav": 399
					},
					"N": 3283
				},
				"PE03": {
					"Dist": {
						"Fav": 2570,
						"Neu": 446,
						"Unfav": 257
					},
					"N": 3273
				},
				"OM12": {
					"Dist": {
						"Fav": 2549,
						"Neu": 404,
						"Unfav": 280
					},
					"N": 3233
				},
				"QS16": {
					"Dist": {
						"Fav": 2224,
						"Neu": 643,
						"Unfav": 408
					},
					"N": 3275
				},
				"LD09": {
					"Dist": {
						"Fav": 2581,
						"Neu": 362,
						"Unfav": 340
					},
					"N": 3283
				},
				"TR01": {
					"Dist": {
						"Fav": 2826,
						"Neu": 286,
						"Unfav": 171
					},
					"N": 3283
				},
				"VC04": {
					"Dist": {
						"Fav": 2831,
						"Neu": 326,
						"Unfav": 125
					},
					"N": 3282
				},
				"GP07": {
					"Dist": {
						"Fav": 1885,
						"Neu": 675,
						"Unfav": 661
					},
					"N": 3221
				},
				"ER01": {
					"Dist": {
						"Fav": 2274,
						"Neu": 519,
						"Unfav": 483
					},
					"N": 3276
				},
				"IV02": {
					"Dist": {
						"Fav": 2007,
						"Neu": 666,
						"Unfav": 597
					},
					"N": 3270
				},
				"CP14": {
					"Dist": {
						"Fav": 1785,
						"Neu": 687,
						"Unfav": 787
					},
					"N": 3259
				},
				"GP12": {
					"Dist": {
						"Fav": 2618,
						"Neu": 396,
						"Unfav": 238
					},
					"N": 3252
				},
				"CP11": {
					"Dist": {
						"Fav": 2743,
						"Neu": 309,
						"Unfav": 85
					},
					"N": 3137
				},
				"WE01": {
					"Dist": {
						"Fav": 2771,
						"Neu": 326,
						"Unfav": 182
					},
					"N": 3279
				},
				"IV04": {
					"Dist": {
						"Fav": 2579,
						"Neu": 506,
						"Unfav": 127
					},
					"N": 3212
				},
				"WE12": {
					"Dist": {
						"Fav": 2369,
						"Neu": 570,
						"Unfav": 301
					},
					"N": 3240
				},
				"SP12": {
					"Dist": {
						"Fav": 2314,
						"Neu": 653,
						"Unfav": 315
					},
					"N": 3282
				},
				"AV09": {
					"Dist": {
						"Fav": 2790,
						"Neu": 353,
						"Unfav": 78
					},
					"N": 3221
				},
				"TW04": {
					"Dist": {
						"Fav": 1560,
						"Neu": 909,
						"Unfav": 250
					},
					"N": 2719
				},
				"CP12": {
					"Dist": {
						"Fav": 2485,
						"Neu": 512,
						"Unfav": 271
					},
					"N": 3268
				},
				"DC11": {
					"Dist": {
						"Fav": 2777,
						"Neu": 409,
						"Unfav": 100
					},
					"N": 3286
				},
				"BN01": {
					"Dist": {
						"Fav": 2616,
						"Neu": 423,
						"Unfav": 235
					},
					"N": 3274
				},
				"GP09": {
					"Dist": {
						"Fav": 2254,
						"Neu": 481,
						"Unfav": 551
					},
					"N": 3286
				},
				"QS03": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"OM01": {
					"Dist": {
						"Fav": null,
						"Neu": null,
						"Unfav": null
					},
					"N": null
				},
				"TR04": {
					"Dist": {
						"Fav": 2029,
						"Neu": 543,
						"Unfav": 714
					},
					"N": 3286
				},
				"QS02": {
					"Dist": {
						"Fav": 1110,
						"Neu": 528,
						"Unfav": 1059
					},
					"N": 2697
				},
				"JS05": {
					"Dist": {
						"Fav": 1085,
						"Neu": 548,
						"Unfav": 1052
					},
					"N": 2685
				},
				"OM11": {
					"Dist": {
						"Fav": 1070,
						"Neu": 518,
						"Unfav": 1098
					},
					"N": 2686
				},
				"SD05": {
					"Dist": {
						"Fav": 1095,
						"Neu": 571,
						"Unfav": 1021
					},
					"N": 2687
				},
				"SD03": {
					"Dist": {
						"Fav": 1119,
						"Neu": 526,
						"Unfav": 1083
					},
					"N": 2728
				},
				"OS02": {
					"Dist": {
						"Fav": 1077,
						"Neu": 550,
						"Unfav": 1076
					},
					"N": 2703
				},
				"JS02": {
					"Dist": {
						"Fav": 1023,
						"Neu": 558,
						"Unfav": 1115
					},
					"N": 2696
				},
				"ST01": {
					"Dist": {
						"Fav": 1045,
						"Neu": 552,
						"Unfav": 1103
					},
					"N": 2700
				},
				"WL01": {
					"Dist": {
						"Fav": 1049,
						"Neu": 531,
						"Unfav": 1141
					},
					"N": 2721
				},
				"GP10": {
					"Dist": {
						"Fav": 1054,
						"Neu": 577,
						"Unfav": 1077
					},
					"N": 2708
				},
				"WE08": {
					"Dist": {
						"Fav": 1128,
						"Neu": 564,
						"Unfav": 1051
					},
					"N": 2743
				},
				"DM04": {
					"Dist": {
						"Fav": 1069,
						"Neu": 553,
						"Unfav": 1108
					},
					"N": 2730
				},
				"DM18": {
					"Dist": {
						"Fav": 1075,
						"Neu": 544,
						"Unfav": 1077
					},
					"N": 2696
				},
				"SP45": {
					"Dist": {
						"Fav": 1111,
						"Neu": 550,
						"Unfav": 1047
					},
					"N": 2708
				},
				"SV03": {
					"Dist": {
						"Fav": 1101,
						"Neu": 509,
						"Unfav": 1095
					},
					"N": 2705
				},
				"SR05": {
					"Dist": {
						"Fav": 1107,
						"Neu": 519,
						"Unfav": 1073
					},
					"N": 2699
				},
				"SR03": {
					"Dist": {
						"Fav": 1051,
						"Neu": 543,
						"Unfav": 1087
					},
					"N": 2681
				},
				"TW02": {
					"Dist": {
						"Fav": 1101,
						"Neu": 583,
						"Unfav": 1060
					},
					"N": 2744
				},
				"DC08": {
					"Dist": {
						"Fav": 1055,
						"Neu": 555,
						"Unfav": 1075
					},
					"N": 2685
				},
				"GP03": {
					"Dist": {
						"Fav": 1094,
						"Neu": 533,
						"Unfav": 1082
					},
					"N": 2709
				},
				"PE01": {
					"Dist": {
						"Fav": 1064,
						"Neu": 568,
						"Unfav": 1052
					},
					"N": 2684
				},
				"AV01": {
					"Dist": {
						"Fav": 1072,
						"Neu": 562,
						"Unfav": 1088
					},
					"N": 2722
				},
				"AV08": {
					"Dist": {
						"Fav": 1108,
						"Neu": 533,
						"Unfav": 1071
					},
					"N": 2712
				},
				"BN04": {
					"Dist": {
						"Fav": 1102,
						"Neu": 513,
						"Unfav": 1101
					},
					"N": 2716
				},
				"CP16": {
					"Dist": {
						"Fav": 1060,
						"Neu": 530,
						"Unfav": 1083
					},
					"N": 2673
				},
				"PE10": {
					"Dist": {
						"Fav": 1087,
						"Neu": 552,
						"Unfav": 1062
					},
					"N": 2701
				},
				"PE21": {
					"Dist": {
						"Fav": 1091,
						"Neu": 573,
						"Unfav": 1051
					},
					"N": 2715
				},
				"OM04": {
					"Dist": {
						"Fav": 1067,
						"Neu": 552,
						"Unfav": 1093
					},
					"N": 2712
				},
				"QS09": {
					"Dist": {
						"Fav": 1047,
						"Neu": 550,
						"Unfav": 1098
					},
					"N": 2695
				},
				"SP04": {
					"Dist": {
						"Fav": 1076,
						"Neu": 559,
						"Unfav": 1035
					},
					"N": 2670
				},
				"WK01": {
					"Dist": {
						"Fav": 1044,
						"Neu": 544,
						"Unfav": 1070
					},
					"N": 2658
				},
				"DI03": {
					"Dist": {
						"Fav": 1108,
						"Neu": 527,
						"Unfav": 1071
					},
					"N": 2706
				},
				"WK02": {
					"Dist": {
						"Fav": 1083,
						"Neu": 522,
						"Unfav": 1086
					},
					"N": 2691
				},
				"SP47": {
					"Dist": {
						"Fav": 1121,
						"Neu": 518,
						"Unfav": 1065
					},
					"N": 2704
				},
				"WS01": {
					"Dist": {
						"Fav": 1096,
						"Neu": 540,
						"Unfav": 1052
					},
					"N": 2688
				},
				"DC09": {
					"Dist": {
						"Fav": 1101,
						"Neu": 547,
						"Unfav": 1081
					},
					"N": 2729
				},
				"AV02": {
					"Dist": {
						"Fav": 2694,
						"Neu": 324,
						"Unfav": 268
					},
					"N": 3286
				},
				"DI04": {
					"Dist": {
						"Fav": 2777,
						"Neu": 266,
						"Unfav": 245
					},
					"N": 3288
				},
				"IV05": {
					"Dist": {
						"Fav": 2395,
						"Neu": 487,
						"Unfav": 399
					},
					"N": 3281
				},
				"OM06": {
					"Dist": {
						"Fav": 634,
						"Neu": 609,
						"Unfav": 1337
					},
					"N": 2580
				},
				"NSQ1": {
					"Dist": {
						"Fav": 1532,
						"Neu": 1113,
						"Unfav": 646
					},
					"N": 3291
				}
			}
		}
	};
	for (var key in tmp) data[key] = tmp[key];


	// ENPSX Breakdown

	var tmp = {
		"ENPSX.2020.389.0.AGE": {
			"651": {
				"Dist": {
					"Detractors": 585,
					"Neutrals": 921,
					"Promoters": 1172
				},
				"N": 2678
			},
			"652": {
				"Dist": {
					"Detractors": 573,
					"Neutrals": 906,
					"Promoters": 1163
				},
				"N": 2642
			},
			"653": {
				"Dist": {
					"Detractors": 549,
					"Neutrals": 999,
					"Promoters": 1149
				},
				"N": 2697
			},
			"654": {
				"Dist": {
					"Detractors": 598,
					"Neutrals": 838,
					"Promoters": 1179
				},
				"N": 2615
			},
			"655": {
				"Dist": {
					"Detractors": 534,
					"Neutrals": 917,
					"Promoters": 1153
				},
				"N": 2604
			},
			"656": {
				"Dist": {
					"Detractors": 581,
					"Neutrals": 908,
					"Promoters": 1089
				},
				"N": 2578
			}
		},
		"ENPSX.2018.389.0.AGE": {
			"651": {
				"Dist": {
					"Detractors": 0,
					"Neutrals": 0,
					"Promoters": 0
				}
			},
			"652": {
				"Dist": {
					"Detractors": 0,
					"Neutrals": 0,
					"Promoters": 0
				}
			},
			"653": {
				"Dist": {
					"Detractors": 0,
					"Neutrals": 0,
					"Promoters": 0
				}
			},
			"654": {
				"Dist": {
					"Detractors": 0,
					"Neutrals": 0,
					"Promoters": 0
				}
			},
			"655": {
				"Dist": {
					"Detractors": 0,
					"Neutrals": 0,
					"Promoters": 0
				}
			},
			"656": {
				"Dist": {
					"Detractors": 0,
					"Neutrals": 0,
					"Promoters": 0
				}
			}
		},
		"ENPSX.2019.389.0.AGE": {
			"651": {
				"Dist": {
					"Detractors": 435,
					"Neutrals": 747,
					"Promoters": 1013
				}
			},
			"652": {
				"Dist": {
					"Detractors": 447,
					"Neutrals": 745,
					"Promoters": 964
				}
			},
			"653": {
				"Dist": {
					"Detractors": 482,
					"Neutrals": 730,
					"Promoters": 993
				}
			},
			"654": {
				"Dist": {
					"Detractors": 435,
					"Neutrals": 745,
					"Promoters": 1002
				}
			},
			"655": {
				"Dist": {
					"Detractors": 440,
					"Neutrals": 772,
					"Promoters": 979
				}
			},
			"656": {
				"Dist": {
					"Detractors": 468,
					"Neutrals": 743,
					"Promoters": 954
				}
			}
		}
	};
	for (var key in tmp) data[key] = tmp[key];

	var tmp = {
		"ENPSX.2020.389.0.GENDER": {
			"410": {
				"Dist": {
					"Detractors": 874,
					"Neutrals": 1417,
					"Promoters": 1695
				},
				"N": 3986
			},
			"420": {
				"Dist": {
					"Detractors": 894,
					"Neutrals": 1364,
					"Promoters": 1709
				},
				"N": 3967
			},
			"430": {
				"Dist": {
					"Detractors": 802,
					"Neutrals": 1361,
					"Promoters": 1760
				},
				"N": 3923
			},
			"440": {
				"Dist": {
					"Detractors": 850,
					"Neutrals": 1347,
					"Promoters": 1741
				},
				"N": 3938
			}
		},
		"ENPSX.2018.389.0.GENDER": {
			"410": {
				"Dist": {
					"Detractors": 0,
					"Neutrals": 0,
					"Promoters": 0
				}
			},
			"420": {
				"Dist": {
					"Detractors": 0,
					"Neutrals": 0,
					"Promoters": 0
				}
			},
			"430": {
				"Dist": {
					"Detractors": 0,
					"Neutrals": 0,
					"Promoters": 0
				}
			},
			"440": {
				"Dist": {
					"Detractors": 0,
					"Neutrals": 0,
					"Promoters": 0
				}
			}
		},
		"ENPSX.2019.389.0.GENDER": {
			"410": {
				"Dist": {
					"Detractors": 688,
					"Neutrals": 1115,
					"Promoters": 1486
				}
			},
			"420": {
				"Dist": {
					"Detractors": 697,
					"Neutrals": 1108,
					"Promoters": 1495
				}
			},
			"430": {
				"Dist": {
					"Detractors": 676,
					"Neutrals": 1146,
					"Promoters": 1392
				}
			},
			"440": {
				"Dist": {
					"Detractors": 646,
					"Neutrals": 1113,
					"Promoters": 1532
				}
			}
		}
	};
	for (var key in tmp) data[key] = tmp[key];

	// EPX Breakdown

	var tmp = {
		"EPX.2020.389.0.GENDER": {
			"410": {
				"Dist": {
					"MostEffective": 2392,
					"Frustrated": 549,
					"Detached": 388,
					"LeastEffective": 1047
				},
				"N": 4376
			},
			"420": {
				"Dist": {
					"MostEffective": 2331,
					"Frustrated": 587,
					"Detached": 405,
					"LeastEffective": 1024
				},
				"N": 4347
			},
			"430": {
				"Dist": {
					"MostEffective": 2412,
					"Frustrated": 545,
					"Detached": 386,
					"LeastEffective": 941
				},
				"N": 4284
			},
			"440": {
				"Dist": {
					"MostEffective": 2327,
					"Frustrated": 575,
					"Detached": 359,
					"LeastEffective": 1006
				},
				"N": 4267
			}
		},
		"EPX.2018.389.0.GENDER": {
			"410": {
				"Dist": {
					"MostEffective": 1394,
					"Frustrated": 576,
					"Detached": 199,
					"LeastEffective": 845
				}
			},
			"420": {
				"Dist": {
					"MostEffective": 1399,
					"Frustrated": 609,
					"Detached": 204,
					"LeastEffective": 776
				}
			},
			"430": {
				"Dist": {
					"MostEffective": 1396,
					"Frustrated": 558,
					"Detached": 176,
					"LeastEffective": 759
				}
			},
			"440": {
				"Dist": {
					"MostEffective": 1357,
					"Frustrated": 614,
					"Detached": 210,
					"LeastEffective": 748
				}
			}
		},
		"EPX.2019.389.0.GENDER": {
			"410": {
				"Dist": {
					"MostEffective": 1863,
					"Frustrated": 377,
					"Detached": 322,
					"LeastEffective": 726
				}
			},
			"420": {
				"Dist": {
					"MostEffective": 1942,
					"Frustrated": 331,
					"Detached": 316,
					"LeastEffective": 711
				}
			},
			"430": {
				"Dist": {
					"MostEffective": 1893,
					"Frustrated": 313,
					"Detached": 312,
					"LeastEffective": 696
				}
			},
			"440": {
				"Dist": {
					"MostEffective": 1927,
					"Frustrated": 356,
					"Detached": 335,
					"LeastEffective": 672
				}
			}
		}
	};
	for (var key in tmp) data[key] = tmp[key];

	var tmp = {
		"EPX.2020.389.0.AGE": {
			"651": {
				"Dist": {
					"MostEffective": 1612,
					"Frustrated": 382,
					"Detached": 275,
					"LeastEffective": 656
				},
				"N": 2925
			},
			"652": {
				"Dist": {
					"MostEffective": 1563,
					"Frustrated": 391,
					"Detached": 247,
					"LeastEffective": 683
				},
				"N": 2884
			},
			"653": {
				"Dist": {
					"MostEffective": 1577,
					"Frustrated": 392,
					"Detached": 242,
					"LeastEffective": 717
				},
				"N": 2928
			},
			"654": {
				"Dist": {
					"MostEffective": 1581,
					"Frustrated": 388,
					"Detached": 245,
					"LeastEffective": 665
				},
				"N": 2879
			},
			"655": {
				"Dist": {
					"MostEffective": 1593,
					"Frustrated": 368,
					"Detached": 277,
					"LeastEffective": 608
				},
				"N": 2846
			},
			"656": {
				"Dist": {
					"MostEffective": 1536,
					"Frustrated": 335,
					"Detached": 252,
					"LeastEffective": 689
				},
				"N": 2812
			}
		},
		"EPX.2018.389.0.AGE": {
			"651": {
				"Dist": {
					"MostEffective": 964,
					"Frustrated": 380,
					"Detached": 135,
					"LeastEffective": 521
				}
			},
			"652": {
				"Dist": {
					"MostEffective": 982,
					"Frustrated": 390,
					"Detached": 125,
					"LeastEffective": 522
				}
			},
			"653": {
				"Dist": {
					"MostEffective": 920,
					"Frustrated": 385,
					"Detached": 127,
					"LeastEffective": 548
				}
			},
			"654": {
				"Dist": {
					"MostEffective": 898,
					"Frustrated": 412,
					"Detached": 126,
					"LeastEffective": 509
				}
			},
			"655": {
				"Dist": {
					"MostEffective": 917,
					"Frustrated": 403,
					"Detached": 137,
					"LeastEffective": 507
				}
			},
			"656": {
				"Dist": {
					"MostEffective": 865,
					"Frustrated": 387,
					"Detached": 139,
					"LeastEffective": 521
				}
			}
		},
		"EPX.2019.389.0.AGE": {
			"651": {
				"Dist": {
					"MostEffective": 1280,
					"Frustrated": 240,
					"Detached": 213,
					"LeastEffective": 462
				}
			},
			"652": {
				"Dist": {
					"MostEffective": 1264,
					"Frustrated": 205,
					"Detached": 214,
					"LeastEffective": 473
				}
			},
			"653": {
				"Dist": {
					"MostEffective": 1266,
					"Frustrated": 231,
					"Detached": 230,
					"LeastEffective": 477
				}
			},
			"654": {
				"Dist": {
					"MostEffective": 1282,
					"Frustrated": 243,
					"Detached": 224,
					"LeastEffective": 433
				}
			},
			"655": {
				"Dist": {
					"MostEffective": 1278,
					"Frustrated": 227,
					"Detached": 212,
					"LeastEffective": 473
				}
			},
			"656": {
				"Dist": {
					"MostEffective": 1255,
					"Frustrated": 231,
					"Detached": 192,
					"LeastEffective": 487
				}
			}
		}
	};
	for (var key in tmp) data[key] = tmp[key];


	// NX
	var tmp = {"NX.2020.389.0.GENDER":{"410":{"N":3986},"420":{"N":3967},"430":{"N":3923},"440":{"N":3938}}};
	for (var key in tmp) data[key] = tmp[key];

	var tmp = {"NX.2020.389.0.AGE":{"651":{"N":2678},"652":{"N":2642},"653":{"N":2697},"654":{"N":2615},"655":{"N":2604},"656":{"N":2578}}};
	for (var key in tmp) data[key] = tmp[key];

	// N
	var tmp = {"N.2020.389.0":{"N":15814}};
	for (var key in tmp) data[key] = tmp[key];

	// Metrics
	var metrics = ['DIM_ENG', 'DIM_ENA', 'DIM_N65'];
	data.Metrics = metrics;

	// KDA
	data['KDA.2020.389'] = {
		"DIM_ENG": ["AV15", "SD03", "VC04", "SR05", "SD05"],
		"DIM_ENA": ["AV15", "DM02", "RC01", "AV09", "VC04"]
	};


	// Filters
	data.Filters = {
		Items: {
			"Gender": {
				"Label": "Gender",
				"Answers": [{
					"Code": "410",
					"Label": "Male"
				},
					{
						"Code": "420",
						"Label": "Female"
					},
					{
						"Code": "430",
						"Label": "Other/non-binary"
					},
					{
						"Code": "440",
						"Label": "Prefer not to say"
					}
				]
			},
			"Age": {
				"Label": "Age",
				"Answers": [{
					"Code": "651",
					"Label": "Under 20"
				},
					{
						"Code": "652",
						"Label": "20 to 29"
					},
					{
						"Code": "653",
						"Label": "30 to 39"
					},
					{
						"Code": "654",
						"Label": "40 to 49"
					},
					{
						"Code": "655",
						"Label": "50 to 59"
					},
					{
						"Code": "656",
						"Label": "Over 59"
					}
				]
			},
			"Tenure": {
				"Label": "Tenure",
				"Answers": [{
					"Code": "701",
					"Label": "Less than 1 year"
				},
					{
						"Code": "702",
						"Label": "1 year to less than 2 years"
					},
					{
						"Code": "703",
						"Label": "2 years to less than 5 years"
					},
					{
						"Code": "704",
						"Label": "5 years to less than 10 years"
					},
					{
						"Code": "705",
						"Label": "10 years or more"
					}
				]
			},
			"UnionNon": {
				"Label": "Union/Non-Union",
				"Answers": [{
					"Code": "631",
					"Label": "Union"
				},
					{
						"Code": "632",
						"Label": "Non-Union"
					}
				]
			},
			"Wage_Status": {
				"Label": "Wage Status",
				"Answers": [{
					"Code": "641",
					"Label": "Hourly"
				},
					{
						"Code": "642",
						"Label": "Salaried"
					}
				]
			}
		},
		"IsTestData": true
	};

	data.Filters.IsTestData = true;

}


var config = {

	ActionPlannerUrl: 'https://survey.us.confirmit.com/wix/p429903166529.aspx',

	Norms: {
		Codes: [
			'AllCompany_A_17TO19_Avg',
			'HP_A_17TO19_Avg'
		]
	},

	CurrentWave: '2020',
	PreviousWave: '2019',

	SigTest: {
		Threshold: 1.96,
		BackgroundColor: {
			Enabled: true
		},
		Suffix: ' *'
	},

	comparators: [
		'Internal.Wave:2019',
		'External.IndustryBenchmark',
		'External.HighPerformers'
	],


	EngagementDimensionId: "DIM_ENG",
	EnablementDimensionId: "DIM_ENA",

	styles: {
		DistributionChartEnps: {
			bgcolors: ['#77bc1f', 'orange', '#d30f1d'],
			colors: ['white', 'black', 'white']
		},
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
		}
	},

	ActionPlannerDateFormat: "yy-mm-dd",
	LimitActionsPerPlan: 10
};

// Designates which comparators should be checked by default
if (!('comparators' in state.Parameters)) {
	State_Set('comparators', config.comparators);
}