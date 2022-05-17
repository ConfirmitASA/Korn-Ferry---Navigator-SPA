function Component_Dropdown ( param_name, label, id, default_text, param_values ) {

    var current_value = State_Get( param_name );

    var o = [];

    o.push ( '<div class="selector-row">');
    o.push ( '<div class="selector-label">' + label + '</div>');
    o.push ( '<select id="' + id + '" name="' + id + '">' );

    if (!!default_text) {
        o.push ( '<option value="-1">' + default_text + '</option>' );
    } else {
        if (current_value==null) {
                current_value = (param_values.length>0) ? param_values[0].Code : null;
        }
    }

    for (var i=0; i<param_values.length; ++i)
        o.push ( '<option ' + (param_values[i].Code == current_value ? 'selected=true' : '') + ' value="' + param_values[i].Code + '">' + param_values[i].Label + '</option>' );

    o.push('</select>');
    o.push ('</div>');

    State_Set ( param_name, current_value );

    return o.join('');
}
