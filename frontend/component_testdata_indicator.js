function Component_TestDataIndicator ( is_test ) {

    return `
        <div style="
        position: fixed;
    left: 0px;
    top: 0px    ;
    background-color: #FFFFCC;
    color: black;
    padding: 3px 8px;
    z-index: 9999999999;
    border: 1px solid #d0d0d0;
    font-size: 8px;
        ">${is_test ? 'Test' : 'Real'} Data</div>    
        `;

}