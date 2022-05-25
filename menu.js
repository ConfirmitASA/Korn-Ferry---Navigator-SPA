function Menu() {
    return [
        {Code: 'Intro', Label: 'Intro'},
        { Code: 'Home', Label: 'Home' },
        { Code: 'Slideshow', Label: 'Slideshow' },
        {
            Code: 'GroupHeadlines', Label: 'Headlines', Submenu: [
               // { Code: 'Test', Label: 'My Test Page' },					
                { Code: 'KeyMetrics', Label: 'Key Metrics' },					
                { Code: 'KeyDrivers', Label: 'Key Drivers' },
                { Code: 'StrengthsAndOpportunities', Label: 'Strengths & Opportunities' },
                { Code: 'EffectivenessProfile', Label: 'Effectiveness Profile' },
                { Code: 'EffectivenessProfileBreakdown', Label: 'Effectiveness Profile Breakdown' }
            ]
        },
        {
            Code: 'GroupExplore', Label: 'Explore', Submenu:
                [
                    { Code: 'AllResults', Label: 'All Results' },
                    { Code: 'ResultsBreakdown', Label: 'Results Breakdown' },						
                    { Code: 'DemographicHeatmap', Label: 'Heatmap' },
                    { Code: 'DemographicHighlighter', Label: 'Demographic Highlighter' },
                    { Code: 'NonStandardQuestions', Label: 'Non-standard Questions' }
                ]
        },
        {
            Code: 'GroupComments', Label: 'Comments', Submenu:
                [
                    { Code: 'CommentsThemes', Label: 'Comments Themes' },
                    { Code: 'OpenComments', Label: 'Open Comments' }
                ]
        },
        {
            Code: 'GroupEnps', Label: 'ENPS', Submenu: [
                { Code: 'ENPSScore', Label: 'ENPS Score' },
                { Code: 'ENPSBreakdown', Label: 'ENPS Breakdown' },
            ]
        },
        {
            Code: 'GroupResponse', Label: 'Response', Submenu: [
                { Code: 'ResponseRates', Label: 'Response Rates' },
            ]
        },
        {
            Code: 'GroupActions', Label: 'Actions', Submenu: [
                { Code: 'ActionsFocusAreas', Label: 'Areas to focus' },
                { Code: 'ActionsStatistics', Label: 'Statistics' },
                /*{ Code: 'ActionsPlans', Label: 'Plans' },
                { Code: 'ActionsAllPlans', Label: 'All Plans' },
                { Code: 'ActionsSharedPlans', Label: 'Shared Plans' },
                */
            ]
        },			
        { Code: 'Filters', Label: FilterIcon() }, //Filters & Comparators'},
        { Code: 'LogOut', Label: 'Log Out' }
    ];
}