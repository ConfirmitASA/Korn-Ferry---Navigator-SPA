function Component_TwoOptionSwitch ( param_name, label, id, param_values ) {

    var current_value = State_Get( param_name );

    var o = [];

    o.push ( '<div class="switch-row">');
    o.push ( '<div class="switch-label">' + label + '</div>');

    if (!!current_value == false) {
        current_value = param_values[0].Code;
    }

    o.push ( '<div id="' + id + '-' + param_name + '-switch" class="switch-component">');

    var leftAndRight = ['left', 'right'];

    for (var i = 0; i < param_values.length; i++) {
        var className = '';
        var checkedProp = '';

        if(param_values[i].Code === current_value) {
            className = 'label-checked';
            checkedProp = 'checked';
        }

        o.push( '<label for="' + id + '-' + param_name +'-' + leftAndRight[i] +'" class="' + className + '">' + param_values[i].Label + '</label>');
        o.push( '<input id="' + id + '-' + param_name + '-' + leftAndRight[i] +'" type="radio" value="' + param_values[i].Code + '" ' + checkedProp +'>');
    }
    o.push ( '</div>');

    o.push ('</div>');

    State_Set ( param_name, current_value );

    return o.join('');
}