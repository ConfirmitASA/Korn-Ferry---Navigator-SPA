// MAIN FRAMEWORK

var item_map;

var images_preloaded_count = 0;
var images_preload = [
	"https://upload.wikimedia.org/wikipedia/commons/9/9e/Korn-ferry-logo.jpg",
	"https://survey.us.confirmit.com/isa/BDJPFRDMEYBPBKLVADAYFQCDAVIOEQJR/KornFerryPOC2/KFW_Homepage_banner_1680x995.jpg"
];

function Main_PreloadImages(e) {
	for (var i=0; i <images_preload.length; ++i) {
		var tempImage = new Image();
		tempImage.addEventListener("load", Main_PreloadImageProgress, true);
		tempImage.src = images_preload[i];
	}
}

function Main_PreloadImageProgress() {
	images_preloaded_count++;

	if (images_preloaded_count == images_preload.length) {
		//ALL Images have been loaded, perform the desired action
		Main_PreloadComplete();
	}
}

function Main_Menitem_Click() {
	console.log ('menuitem.click - ' + $(this).attr('id') + ' BEGIN');

	Main_ScrollToTop();

	var id = $(this).attr('id');

	// Don't update current page reference if we're clicking the Filters link
	if ( id != 'menuitem-Filters') {

		// Also, don't update the current page if this is the parent of an active page
		State_SetCurrentPageId ( $(this).attr('id') );
	}

	// Get the id of the menu item that was clicked (1, 2, 3, ...)
	var id = $(this).attr('id').split('-')[1];

	switch ( id ) {

		case 'Filters':
			return;

		case 'Home':
		case 'Slideshow':
			// Re-render this page		
			var codeblock = "$('#page-" + id + "').html (" + id + "_Render());";
			Main_IncrementClickCount ( id );

			try {
				eval ( codeblock );
			}
			catch (e) {
				console.log ( 'Could not re-render page: ' + codeblock );
			}
			break;

		default:
	}

	// Remove ActiveItem indicators
	$('.menuitem.active-item').removeClass('active-item');

	// Add ActiveItem indicator to selected item
	$(this).addClass('active-item');

	// Hide All Pages
	$('.page').css('display', 'none');
	$('.page').css('visibility', 'hidden');

	// Update body with the page specific class
	$('body').attr('class', '');
	$('body').addClass('page-' + id + '-body');

	// Show the page that was clicked
	var page_id = 'page-' + id;
	var page = $('#' + page_id);

	page.css('visibility', 'visible');
	page.velocity('fadeIn');

	// Fade In text
	$('.greenareatext').velocity({
		opacity: 1
	}, {
		duration: 500,
		delay: 500
	});

	// example: Click on [menuitem-Comments] -> Click the first [submenuitem-Comments-*]
	var id = 'sub' + $(this).attr('id');
	var found = false;

	$('.submenuitem').each (
		function () {
			if (!found) {
				var sub_id = $(this).attr('id');
				if (sub_id.substr(0, id.length) == id) {
					$(this).click();
					found = true;
				}
			}
		}
	);

	console.log ('menuitem.click - ' + $(this).attr('id') + ' END');

}

function Main_ResetClickCount ( id ) {
	stats[id] = 0;
}

function Main_IncrementClickCount( id ) {
	if (stats[id] == null) stats[id] = 0;
	stats[id]++;
}

function Main_IsFirstClick( id ) {
	return stats[id] == null || stats[id] == 0;
}

function Main_Submenuitem_Click() {

	console.log ('submenuitem.click - ' + $(this).attr('id') + ' BEGIN');

	Main_ScrollToTop();

	var id = $(this).attr('id'); // example: submenuitem-Explore-AllItems
	if ( id != 'menuitem-Filters') {
		State_SetCurrentPageId ( $(this).attr('id') );

		var parts = id.split('-');
		var section_id = parts[parts.length-1];

		Main_IncrementClickCount ( section_id );

	}

	Main_TextSubstitution();

	// Get the id of the menu item that was clicked
	var page_idx = id.split('-')[1]; // example: Explore
	var page_id = 'page-' + page_idx; // example: page-Explore

	// Upate ActiveItem indicators
	$('.submenuitem.active-item').removeClass('active-item');
	$(this).addClass('active-item');

	// Hide All Tabs on this page		
	var page = $('#' + page_id);

	var sections = page.find('.section');
	sections.css('display', 'none');
	sections.css('visibility', 'hidden');

	// Fade In active section
	var section_id = id.split('submenuitem').join('section'); // example: section-Explore-AllItems
	var section = $('#' + section_id);

	section.css('opacity', 0); // opacity = 0

	// Unhide
	section.css('display', 'unset');
	sections.css('visibility', 'unset');
	section.velocity({
		opacity: 1
	}, {
		duration: 500,
		delay: 0
	});

	console.log ('submenuitem.click - ' + $(this).attr('id') + ' END');
}

function Main_PreloadComplete() {

	console.log ("Preload complete");

	$('body').velocity('fadeIn');
	$('#master-page-container').velocity('fadeIn');


	// Click Handler: Menu Item
	$('.menuitem').click( Main_Menitem_Click );

	// Click Handler: Submenu Item
	$('.submenuitem').click( Main_Submenuitem_Click );


	// Click Handler: Filters & Comparators
	$('#menuitem-Filters').click( function(e) {
		$("#master-page-modal-filter-container").fadeIn();
		e.stopPropagation();
	});

	// Click on the first menu item
	$('.page').css('display', 'none');
	$('.menuitem').first().click();
}

function Main_ScrollToTop(){
	//console.log('scroll')
	$('body').scrollTop(-999999999999);
}

function Main_ItemMap() {
	if ( item_map == null ) {
		item_map = {};
		for (var i = 0; i < data.Items.length; ++i)
			item_map[data.Items[i].Id] = data.Items[i];
	}
	return item_map;
}

function Main_SubmitQuery ( query ) {

	try {
		Query( query );
		mySubmit();
	}
	catch (e) {
		Main_TestQuery ( query );
		WaitMessage();
	}

}

function Main_RefreshCurrentPage() {
	console.log ('MainRefreshCurrentPage: ' + State_GetCurrentPageId() );

	State_ClickCurrentPage();

	Main_ScrollToTop();
}

function Main_TextSubstitution() {
	$('.dynamic-content').each(
		function () {
			var id = $(this).attr('value');
			var value;
			eval ("value = " + id + ';');
			$(this).html( value );
		}
	);


	// Update Filter Summary
	$('.filtersummary').each( function() {
		$(this).css('display', $(this).text() == '' ? 'none' : '');
	});

}

function Main_RenderPage( item, section_id ) {

	console.log ('Main_RenderPage - ' + item.Code + ', ' + section_id);

	var p;
	var codeblock = 'p = ' + item.Code + '_Page();'; // ex: "p = Home_Page();"
	try {

		// Read page specs
		console.log ( codeblock );
		eval ( codeblock );

		// Implement page specs
		Main_Section (
			section_id, //p.SectionId,
			p.Label,
			p.LeftPane,
			p.RightPane,
			p.ClassName,
			p.Style,
			p.ShowFilterSummary
		);

		// Add Click Handler for Submenuitem 
		// This will trigger a call to _Render()
		var codeblock = `
			$('#${section_id.split('section').join('submenuitem')}').click(function(){

				console.log( '${item.Code}_Render()' );
				//stats['${item.Code}']++;
				${item.Code}_Render();
			});
		`;

		try {
			eval ( codeblock );
			//if (stats[item.Code] == null)
			//	stats[item.Code] = 0;
			//stats[item.Code]++;
		}
		catch (e) {
			//console.log ('Main_RenderPage: Error: Click : ' + codeblock );
		}
		Main_ScrollToTop();

	}
	catch (e) {
		//console.log ('Main_RenderPage: Error: Page: ' + codeblock );
	}

	// Call Render
	var codeblock = item.Code + '_Render();'; // ex: "ENPS_Render();"
	try {
		console.log ( codeblock );
		eval ( codeblock );
		//if ( stats[item.Code] == null )
		//	stats[item.Code] = 0;
		//stats[item.Code]++;
	}
	catch (e) {
		//console.log ('Main_RenderPage: Error: Render: ' + codeblock );
	}

	Main_ScrollToTop();



}

function Main_RenderPageContents() {

	console.log ('Main_RenderPageContents - BEGIN');

	var p;
	for (var i=0; i<meta.Menu.length; ++i) {
		var item = meta.Menu[i];
		Main_RenderPage ( item, 'section-' + item.Code );

		if ( item.Submenu != null) {
			for (var j=0; j<item.Submenu.length; ++j) {
				var subitem = item.Submenu[j];
				Main_RenderPage ( subitem, 'section-' + item.Code + '-' + subitem.Code );
			}
		}
	}
	console.log ('Main_RenderPageContents - END');
}

function Main_RenderMenu() {
	var o = [];
	for (var i=0; i<meta.Menu.length; ++i) {
		var item = meta.Menu[i];
		o.push ( '<div class="menuitem" id="menuitem-' + item.Code + '">' + item.Label + '</div>' );

		if ( item.Submenu != null) {
			var o2 = [];
			var sections = [];
			for (var j=0; j<item.Submenu.length; ++j) {
				var subitem = item.Submenu[j];
				o2.push ( '<div class="submenuitem" id="submenuitem-' + item.Code + '-' + subitem.Code + '">' + subitem.Label + '</div>' );
				sections.push (
					'<div class="section" id="section-' + item.Code + '-' + subitem.Code + '"></div>\n'
				);

			}
			$('#page-' + item.Code).find('.submenu').html ( o2.join('') );
			$('#page-' + item.Code).find('.sections').html ( sections.join('') );
		}

	}
	$('.menu').html ( o.join('') );
}

function Main_Section(id, title, text, html_content, class_name, style, show_filter_summary) {
	//console.log ( id + ': show_filter_summary=' + show_filter_summary );
	var o = [];
	o.push (
		`
			<div class="page-container ${class_name}">
				<div class="bannerHomepage insightBanner">
					<div class="bannerWrapper">
						<div class="containerMax">
							<div class="bannerText">


								<div class="panes-background"></div>

								<div class=left-pane>
									<h1 class="bannerHead">${title}</h1>
									<div style="
										margin-bottom: 20px; 
										width: 300px; 
										max-width: 300px; 
										font-size: 16px; 
										font-weight: 300; 
										line-height: 24px;"
									>
										${text}
									</div>
								</div>

								<div class="right-pane" style="${style ? style : ''}">
									${show_filter_summary ? Component_FilterSummary() : ''}
									<div class="right-pane-content">
										${html_content}
									</div>
								</div>


							</div>
						</div>
					</div>
				</div>
			</div>
		`
	);

	return $('#' + id). html ( o.join('') );
}

function Main_TestQuery( query ) {

	var newdata = {};
	var newdata = {};
	if ( query.EffectivenessByDemo ) {

		var demo = query.EffectivenessByDemo.Demo;
		data.EffectivenessByDemo = TestData_EffectivenessByDemo( demo );

	}

	if(query.InternalBenchmarkingTool) {
		//Set test data for IBT here?
		var breakByVariable = query.InternalBenchmarkingTool.Demo;
		//console.log('breakByVariable ' + breakByVariable);
		TestData_fillBreakByData(breakByVariable);
	}

	Main_RefreshCurrentPage();
}

$(document).ready(function() {



	// For Mobile
	FastClick.attach(document.body);

	Main_RenderMenu();
	Main_RenderPageContents();
	Main_TextSubstitution();

	// Preload Images; upon completion will execute Main_PreloadComplete() and run Render Functions
	Main_PreloadImages();

});