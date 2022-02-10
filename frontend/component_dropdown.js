function Component_Dropdown ( label, id, default_text, param_values, current_value ) {

    var o = [];
    
    o.push ( label );
    o.push ( '<select id="' + id + '" name="' + id + '" style="margin-bottom: 50px">' );
    o.push ( '<option value="-1">' + default_text + '</option>' );


    for (var i=0; i<param_values.length; ++i)
        o.push ( '<option ' + (param_values[i].Code == current_value ? 'selected=true' : '') + ' value="' + param_values[i].Code + '">' + param_values[i].Label + '</option>' );
    
    o.push('</select>');

    return o.join('');
}