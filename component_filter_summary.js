function Component_FilterSummary() {

    return `
        <div class="dynamic-content filtersummary" value="FilterSummary_GetFilterSummary()">
        </div>
    `;  
}

function FilterSummary_GetFilterSummary() {
    var map = {};

    $('.inner_filter_container').find('option:selected').each(function () {
       var $this = $(this);
       if ($this.length) {
        var value = $this.attr('value').split('.')[0];
        var selText = $this.text();
        if (map[value] == null) map[value] = [];
        map[value].push ( '<div class=filteritem>' + selText + '</div>' );
       }
    });

    var o = [];
    for (var key in map)
      o.push (`
        <tr>
            <td style="vertical-align: top; padding-top: 4px;"> 
                <span class=filtervariable> 
                    ${meta.Demographics[key].Label} 
                    <span onclick='ClearFiltersIndividualDemographic("${key}")' class=miniredx></span>
                </span>
            </td> 
            <td> 
                <span class=filterselections>
                    ${map[key].join('')}
                </span>
            </td>
        </tr>
        `
    );
    
    var filter_summary = (o.length > 0)
        ?  '<table>' + o.join('') + '</table>' +
            `<div onclick="ClearFilters()" class="action action-red" style="position: absolute; right: 20px; top: 10px; width: 80px;">${meta.Labels['buttons.Clear'].Label}</div>`
        : '';

    return filter_summary;
}