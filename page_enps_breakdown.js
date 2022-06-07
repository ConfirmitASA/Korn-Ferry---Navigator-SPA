function ENPSBreakdown_Page() {
    return {
        Label: meta.Labels['ENPSBreakdown'].Title,
        LeftPane: meta.Labels['ENPSBreakdown'].Label,
        RightPane: `
        <div id="enps-breakdown-details">
        </div>
        `,

        ClassName: 'enps-breakdown-container',
        Style: null,
        ShowFilterSummary: true
    };
}

function ENPSBreakdown_Render() {

    var o = [];
    var breakby_dropdown = Component_Dropdown(
        'breakby',
        meta.Labels["labels.BreakBy"].Label,
        'enps-breakdown-dropdown',
        '',
        ParamValues_BreakBy()
    );

    o.push(Component_TestDataIndicator(data.IsTestData));

    o.push(`
        <div class=enps-details-wrapper>

        <div class="enps-tables-card " id="enps-breakdown">
             <div class="selector-group">
                 ${breakby_dropdown}
            </div>
            <div class="enps-table">

    `);

    var dt = ENPSBreakdown_ItemsTable();
    o.push(dt.Html);

    o.push(`
            </div>
       </div>
       </div>
    `);

    $('#enps-breakdown-details').html(
        o.join('')
    );

    if (dt.ScriptCode != null) eval(dt.ScriptCode);

    $('#enps-breakdown-dropdown').change(function () {
        // Save Selection
        var SelectedOption = $(this).val();
        State_Set('breakby', SelectedOption);

        Main_RefreshCurrentPage();
    });


}

function ENPSBreakdown_VariableId() {
    return $('#enps-breakdown-dropdown').val();
}

function ENPSBreakdown_Key() {
    return Main_GetKeyWithFilter( 'ENPSX', config.CurrentWave, data.User.PersonalizedReportBase, ENPSBreakdown_VariableId() );
}

function ENPSBreakdown_Data() {
    var key = ENPSBreakdown_Key();
    var segments = data[key];

    return segments;
}

function ENPSBreakdown_MissingData() {
    // return true if rendering cannot happen due to missing data

    var is_missing_data = (ENPSBreakdown_Data() == null);

    return is_missing_data;
}

function ENPSBreakdown_ItemsTable() {
    // Return Value: {Html: <string>, [ScriptCode: <string>]}

    if ( ENPSBreakdown_MissingData() ) {
        return {
            Html: '<div class="loader" style="right: unset; position: relative;top: -50px; overflow: hidden; float: left;">Loading...</div>', 
            ScriptCode: "Main_SubmitQuery ( {Requester: 'ENPSBreakdown_ItemsTable', ShowWaitMessage: false, DataRequest:[{ Type: 'ENPS.Breakdown', Breakdown:'" + ENPSBreakdown_VariableId() + "'}]} );"
        };
    }

    function ColorClassName(value) {
        return value < 0 ? ' cell-red' : ' cell-green'
    }


    var breakdown_variable_label = $('#enps-breakdown-dropdown option:selected').text();

    var headers = [
        [
            { Label: "", ClassName: 'id-cell'},
            { Label: breakdown_variable_label, ClassName: 'text-cell'},
            { Label: meta.Labels['labels.ValidN'].Label, ClassName: 'numeric-cell'},
            { Label: meta.Labels['labels.Promoters'].Label, ClassName: 'numeric-cell distribution-cell' },
            { Label: meta.Labels['labels.Passives'].Label, ClassName: 'numeric-cell distribution-cell' },
            { Label: meta.Labels['labels.Detractors'].Label, ClassName: 'numeric-cell distribution-cell' },
            { Label: meta.Labels['labels.Distribution'].Label, ClassName: 'numeric-cell'},
            { Label: meta.Labels['labels.ENPS'].Label, ClassName: 'numeric-cell'}
        ]
    ];

    var table_data = [];
    var rowdata = [];

    var breakdown_variable_id = ENPSBreakdown_VariableId();

    var segments = ENPSBreakdown_Data();

    if ( segments != null ) {
        let formatter = Utils_FormatOutput;

        for (var segment_code in segments) {  // example: segment_code = "410" (for Gender>Male)
            var segment_data = segments[segment_code];

            var dist = Utils_CountsToPercents ( segment_data.Dist );
            var nps = (dist.Promoters == null || dist.Detractors == null)
                ? NOT_AVAILABLE
                : (dist.Promoters - dist.Detractors);

            var option = meta.Demographics[breakdown_variable_id].Answers[segment_code];
            var label = (option == null)
                ? NOT_AVAILABLE
                : option.Label;


            var chart_distribution = {
                Promoters: dist.Promoters,
                Neutrals: dist.Neutrals,
                Detractors: dist.Detractors
            };

			if (!segment_data.hasOwnProperty('N'))
				segment_data.N = Utils_Count ( segment_data.Dist );

            rowdata = [
                { Label: '2', ClassName: 'id-cell' },
                { Label: label, ClassName: 'text-cell' },
                { Label: formatter(segment_data.N), ClassName: 'numeric-cell' },
                { Label: formatter(dist.Promoters), ClassName: 'numeric-cell distribution-cell' },
                { Label: formatter(dist.Neutrals), ClassName: 'numeric-cell distribution-cell' },
                { Label: formatter(dist.Detractors), ClassName: 'numeric-cell distribution-cell' },
                { Label: Component_DistributionChartStacked(chart_distribution, 'DistributionChartEnps'), datasort: chart_distribution.Promoters, ClassName: 'text-cell' },
                { Label: formatter(nps), ClassName: 'numeric-cell distribution-cell' + ColorClassName(nps) }
            ];

            table_data.push(rowdata);
        }
    }
    
    var hideColumns = [0];

    var columnSettings = `
		'orderFixed': [ 0, 'asc' ],
		'order': [],
		'columnDefs': [
			{ 'targets': [ ${hideColumns.join(',')} ], 'visible': false },
			{ 'targets': [0,1], type: 'natural' },
			{ 'targets': [2,3,4,5,6,7], type: 'numsort' }
		],
	`;

    var exportColumns = [1,2,3,4,5,7];

    var view_name = [
        Main_GetPageLabel ('#submenuitem-GroupEnps-ENPSBreakdown'),  // Page Name
        $('#enps-breakdown-dropdown option:selected').text() // Selected breakdown variable label
    ].join(' - ');
   

    var buttonSettings = DataTable_ButtonSettings(exportColumns, view_name);

    // table_id, class_name, headers, data, isSortable, isSearchable, columnSettings, showButtons, buttonSettings 
    var dt = Component_DataTable(
        "enps-table-all-items",
        "enps-table",
        headers,
        table_data,
        true,
        false,
        columnSettings,
        true,
        buttonSettings
    );
    return dt;
}