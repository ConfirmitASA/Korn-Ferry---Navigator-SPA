// Test Page

function Test_Page() {
    return {
        Label: 'Test Page',

        // Left Pane
        LeftPane: '<p>This is the description.<p>The first paragraph is automatically bolded.<p>The following paragraphs are not, as can be seen here.',

        // Right Pane
        RightPane: `
		<div id="test-content">
		</div>
		`,

        ClassName: '',
        Style: null,
        ShowFilterSummary: true
    }
};

function Test_Render() {

    var movie_url = 'img/video.mp4';

    var o = `

    <video autoplay width="640" height="480">
    <source src="${movie_url}" type="video/mp4">
    Your browser does not support the video tag.
    </video>
    
    `;

    $('#test-content').html ( o );

}