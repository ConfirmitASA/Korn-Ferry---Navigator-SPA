// MAIN FRAMEWORK - GLOBAL VARIABLES

var data;
var meta;
var stats = {};

var item_map;
var NOT_AVAILABLE = '-';
var item_to_dimension_map;


var images_preloaded_count = 0;
var images_preload = [
	"https://upload.wikimedia.org/wikipedia/commons/9/9e/Korn-ferry-logo.jpg",
	"https://survey.us.confirmit.com/isa/BDJPFRDMEYBPBKLVADAYFQCDAVIOEQJR/KornFerryPOC2/KFW_Homepage_banner_1680x995.jpg"
];

function Main_GetDimensionIdByItemId ( item_id ) {
    if ( item_to_dimension_map == null ) {
        var map = {};        

        for (var dimension_id in meta.Dimensions) {
            var d = meta.Dimensions[dimension_id];
            for (var i=0; i<d.Items.length; ++i) {
                var id = d.Items[i];
                map[id] = dimension_id;
            }
        }        

        item_to_dimension_map = map;
    }
    return item_to_dimension_map[ item_id ];
}

function Main_GetPageLabel (id) {
	return $(id).text();
}

function Main_ExportFileName ( view_name ) {
	var o = [];

	if ( view_name != null)
		o.push ( view_name );

	o.push ( data.User.PersonalizedReportBaseText );

	var codes = ModalGetFilters();

	if ( codes.length>0) o.push ( 'Filtered Data')

	return o.join(' - ');
}

function Main_Run() {

	console.log ('Run');


	pdfMake.fonts = {

		// Arabic font
		Tajawal: {
			normal: 'https://reportal.us.confirmit.com/isa/BDJPFRDMEYBPBKLVADAYFQCDAVIOEQJR/KornFerryPOC2/Tajawal-Regular.ttf',
			bold: 'https://reportal.us.confirmit.com/isa/BDJPFRDMEYBPBKLVADAYFQCDAVIOEQJR/KornFerryPOC2/Tajawal-Bold.ttf',
			italics: 'https://reportal.us.confirmit.com/isa/BDJPFRDMEYBPBKLVADAYFQCDAVIOEQJR/KornFerryPOC2/Tajawal-Light.ttf',
			bolditalics: 'https://reportal.us.confirmit.com/isa/BDJPFRDMEYBPBKLVADAYFQCDAVIOEQJR/KornFerryPOC2/Tajawal-ExtraBold.ttf'
		},

		// download default Roboto font from cdnjs.com
		Roboto: {
		  normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
		  bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
		  italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
		  bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
		}
	};
 

	// Click the hierarchy component
	$('.dd-target-button-arrow').click();

	Main_RenderHierarchyPicker();
	Main_RenderPagesContainer();

	setTimeout ( Main_AddHierarchyEventListeners, 500 );

	if (!Main_IsProduction()) ShowWaitCloseButton(); // for intro page
}

function Main_RenderPagesContainer() {
	var menu = meta.Menu;
	var o = [];
	for (var i=0; i<menu.length; ++i) {
		var menuitem = menu[i];
		o.push ( '<!-- Page ' + (i+1)  + ': ' + menuitem.Label + ' -->' );
		o.push ( '<div class="page" id="page-' + menuitem.Code + '">' );

		var html;
		try {
			var codeblock = 'html = ' + menuitem.Code + '_Render();';
			eval ( codeblock );
		}
		catch (e) {
			html = 'Placeholder content for ' + menuitem.Label + '<br>Could not execute: ' + codeblock;
		}
		o.push ( html );
		o.push ( '</div>' );
	}
	$('#pages-container').html ( o.join('') );

}

function Main_RenderHierarchyPicker() {
	$('#hierarchy-picker-container').html ( 
		Component_HierarchyPicker()
	);

	Main_UpdateFullPath();
}

function Main_GetQuestionText ( qid ) {
	return (meta.Items[qid] == null)
		? '[Missing Question Text for: ' + qid + ']'
		: meta.Items[qid].Label;
}

function Main_GetDimensionText ( dId ) {
	return (meta.Dimensions[dId] == null)
		? '[Missing Dimension Text for: ' + dId + ']'
		: meta.Dimensions[dId].Label;
}

function Main_AddHierarchyEventListeners() {
	var dd = $('.dd-drilldown');
	if ( dd.length == 0 ) {
		// Not yet loaded, try again in 0.5 seconds
		setTimeout ( Main_AddHierarchyEventListeners, 500 );
	}
	else {
		// Apply button
		$('.dd-button-select').click( function () {
			console.log ('Button click: Apply Hierarchy');

			$('.dd-drilldown').addClass('displaynone');
			WaitMessage();
		});
	
		// Cancel link
		$('.dd-cancel').click( function () {
			console.log ('Button click: Cancel Hierarchy');
			$('.dd-drilldown').addClass('displaynone');
		});

		console.log ("Added Hierarchy Event Listeners")
	}
}

function Main_UpdateFullPath() {
	$('#fullpath').text ( Main_FullPath() );

}

function Main_FullPath() {

	if ( !Main_IsProduction() )
		return ['Top', 'Level 1', 'Level 2'].join(' > ');

	var node_id = data.User.PersonalizedReportBase;
	var reached_top = false;
	var labels = [];
	
	while ( !reached_top ) {
		var node = meta.Hierarchy.Map[ node_id ];
		var label = node.Label;
		labels.push (label);
		node_id = node.ParentId;
		if ( node_id == '-1') reached_top = true;
	}
	
	return ( labels.reverse().join(' > '));
}

function Main_GetKeyWithFilter( data_type, wave_id, node_id, breakdown_variable_id ) {
	// Example return value: "ENPS.2020.389.2394829847"

	var x = Main_GetKey (  data_type, wave_id, node_id  ) + '.' + Main_FilterHash();

	if ( breakdown_variable_id != null ) x+= '.' + breakdown_variable_id.toUpperCase();

	return x;
}

function Main_GetKey ( data_type, wave_id, node_id ) {
	// Example return value: "ENPS.2020.389"
	return [
		data_type,
		wave_id,
		node_id
	].join('.');	
}

function Main_HashCode ( s ) {
	var hash = 0, i, chr;
	if (s.length === 0) return hash;
	for (i = 0; i < s.length; i++) {
		chr	= s.charCodeAt(i);
		hash  = ((hash << 5) - hash) + chr;
		hash |= 0; // Convert to 32bit integer
	}
	return hash;
};

function Main_FilterHash(breakdown_variable_id, code){

	var codes = ModalGetFilters(); // state.Parameters.filter == null ? [] : state.Parameters.filter;

	if ( breakdown_variable_id != null) {

		var new_code = breakdown_variable_id + '.' + code;
		var found = false;
		for (var i=0; i<codes.length; ++i) {
			if ( codes[i] == new_code ) found = true;
		}

		if (!found)
			codes.push ( new_code ); // example: "Gender.410"
	}

	var filter = codes.join(',');
    var hash = Main_HashCode ( filter );

	return hash;
}

function Main_CurrentHashWithDemos() {

	if (typeof production === 'undefined') return TestData_Hash();

    var filters = ModalGetFilters();
	var report_base = data.User.PersonalizedReportBase;
    var hash_w_demos = Main_HashCode ( report_base + ':' + filters );

	return hash_w_demos;
}

function Main_ToggleCollapse() {
	if ($(this).hasClass('collapsed-mode-button'))
		Main_UncollapseLeftPanel();
	else
		Main_CollapseLeftPanel();
}

function Main_CollapseLeftPanel() {
	$('.left-pane').addClass('collapsed-mode-left');
	$('.right-pane').addClass('collapsed-mode-right');
	$('.collapse-button').addClass('collapsed-mode-button');
	$('.panes-background').addClass('collapsed-mode-background');
	$('.filtersummary').addClass('collapsed-mode-filter-summary');
}

function Main_UncollapseLeftPanel() {
	$('.left-pane').removeClass('collapsed-mode-left');
	$('.right-pane').removeClass('collapsed-mode-right');
	$('.collapse-button').removeClass('collapsed-mode-button');
	$('.panes-background').removeClass('collapsed-mode-background');
	$('.filtersummary').removeClass('collapsed-mode-filter-summary');
}

function Main_IsProduction() {
	return !(typeof production === "undefined");
}

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

	$('.menu').removeClass('responsive');
	$('.submenu').removeClass('responsive-submenu');
	$('#pages-container').removeClass('responsive-pages-container');

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

		case 'LogOut':
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

	// Click Handler: Log Out
	$('#menuitem-LogOut').click( function(e) {
		e.stopPropagation();
		if ( Main_IsProduction())
			LogOut(); // calls Admin Menu link
		else
			alert('Log Out'); // local mode
	});



	// Click on the first menu item
	$('.page').css('display', 'none');
	$('.menuitem').first().click();
}

function Main_ScrollToTop(){
	//console.log('scroll')
	$('body').scrollTop(0);
}

function Main_ItemMap() {
	if ( item_map == null ) {
		item_map = {};
		for (var i = 0; i < data.Items.length; ++i)
			item_map[data.Items[i].Id] = data.Items[i];
	}
	return item_map;
}

function Main_TrimQuery ( query ) {

	return query;

	// Removes queries for data already held in local memory

	var compact = [];
	var dr = query.DataRequest;
	var hash = Main_CurrentHash();
	var hash_w_demos = Main_CurrentHashWithDemos();

	if ( dr != null ) {
		
		for (var i=0; i<dr.length; ++i) {
			var request = dr[i];
			var exists = false;

			switch ( request.Type ) {

				// ENPS
				case 'ENPS.Overall':
					if ( data.ENPS[hash_w_demos] != null) exists = true;
					break;

				// Response Rate
				case 'ResponseRate.Overall':
					if ( data.ResponseRate[hash] != null) exists = true;
					break;

				// Items & Dimensions
				case 'ItemsAndDimensions.Overall':
					if ( data.Items[hash_w_demos] != null) exists = true;
					break;

			}

			if (!exists) compact.push ( request );
		}

	}
	query.DataRequest = compact;
}

function Main_UpdateRequest(){
	console.log ('Main_UpdateRequest');
	var q = {
		Comparators: State_Get('comparators'),
		Filters: State_Get('filter'),
		DataRequest: Main_DefaultDataRequest()
	};
	
	var query = $('#submitbutton').find('input').last();
	var s  = JSON.stringify ( q );
	query.val ( s );
	query.trigger('change');
	if (query.length != 0)
		query[0].dispatchEvent( new Event("change") );

	console.log ('Main_UpdateRequest - done');
}

function Main_DefaultDataRequest() {
	return [
		{ Type: "ResponseRate.Overall"},
		{ Type: "ItemsAndDimensions.Overall"},
		{ Type: "ENPS.Overall"},
		{ Type: "EffectivenessProfile.Overall"},
		{ Type: "CommentCategories.Overall"}
		
	];
}

function Main_GetInitialQuery() {
	return {IsInitialJsonRequest: true, IsInitialLoad: true,  DataRequest:[{ Type: "ResponseRate.Overall"}]}; 
}

function Main_SubmitInitialQuery() {
	// Happens on the intial page load only
	Main_SubmitQuery(  Main_GetInitialQuery() );
}

function Main_SubmitDefaultQuery() {
	Main_SubmitQuery({ShowWaitMessage: false});
}

function Main_SubmitQuery ( query ) {

	query.BreakBy = State_Get('breakby');
	query.Comparators = State_Get('comparators');
	query.Filters = State_Get('filter');

	if ( query.DataRequest == null || query.DataRequest.length == 0)
		query.DataRequest = Main_DefaultDataRequest();

	// Remove DataRequests we don't need
	Main_TrimQuery ( query );

	console.log ('QUERY=' + JSON.stringify( query) );

	try {
		Query( query );
		mySubmit( query.IsInitialJsonRequest, query.ShowWaitMessage );
		data.isTestData = false;
	}
	catch (e) {
		Main_TestQuery ( query );
		var p = query.parameter;
		if (p=='filterapply') WaitMessage();
		data.isTestData = true;
	}

}

function Main_RefreshCurrentPage( prevent_click ) {
	console.log ('MainRefreshCurrentPage: ' + State_GetCurrentPageId() );

	if (prevent_click != true)
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
		}
		catch (e) {
			console.log ('Main_RenderPage: Error: Click : ' + codeblock );
		}
		Main_ScrollToTop();

	}
	catch (e) {
		console.log ('Main_RenderPage: Error: Page: ' + codeblock );
	}

	// Call Render
	var codeblock = item.Code + '_Render();'; // ex: "ENPS_Render();"
	try {
		console.log ( codeblock );
		eval ( codeblock );
	}
	catch (e) {
		console.log ('Main_RenderPage: Error: Render: ' + codeblock );
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

function Main_IsRTL() {
	return meta.RTL == true;
}

function Main_RenderMenu() {
	var o = [];

	o.push ( 
`
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<script>
function myFunction() {
	$('.menu').toggleClass('responsive');
	$('.submenu').toggleClass('responsive-submenu');
	$('#pages-container').toggleClass('responsive-pages-container');
  }
</script>
<style>

.responsive-pages-container {
	opacity: 0.1;
}

.responsive-submenu {
	display: none;
}

.menu {
	overflow: hidden;
	xbackground-color: #333;
  }
  .menu div {
	float: left;
	display: block;
	xcolor: #f2f2f2;
	text-align: center;
	padding: 14px 16px;
	xtext-decoration: none;
	xfont-size: 17px;
  }
  
  .menu responsive div:hover {
	background-color: #ddd;
	color: black;
  }
  
  .menu responsive div:hover {
	background-color: #ddd;
	color: black;
  }
  
  .menu div.active {
	background-color: #04AA6D;
	color: white;
  }
  
  .menuicon:hover {
	cursor: pointer;
  }

  .menu .menuicon {
	display: none;
  }
  

  @media screen and (max-height: 600px) {
	#home-footer {display: none}
  }

  @media screen and (max-width: 1400px) {
	.menu {position: absolute; left: 0; top: 0; padding-top: 10px; width: 100vw}
	.menu div:not(:first-child) {display: none;}
	.menu div.menuicon {
	  float: right;
	  display: block;
	}
  }
  
  @media screen and (max-width: 1400px) {

	.menuitems{
		position: unset;
		top: unset;
		display: block !important;
		flex-direction: unset;
	}	

	.menuitem {
		border-top: 1px solid #c0c0c0;
		width: 100vw;
		position: relative !important;
		top: 10px !important;
		left: -20px;
		padding-left: 30px !important;
	}

	.menuitem:hover {
		background-color: white;
	}


	.menu.responsive {
		background-color: #f2f2f2;
	}
	.menu.responsive .menuicon {
	  right: 0;
	  top: 0;
	}
	.menu.responsive div {
	  float: none;
	  display: block;
	  text-align: left;
	  position: relative;
	  top: -12px;
	}
  }
  </style>
`
		
	);


	o.push ( '<div class=menuitems>' );
	o.push ( 
		`
		<div class="menuicon" onclick="myFunction()">
			<i class="fa fa-bars"></i>
		</div>
		`		
	);


	for (var i=0; i<meta.Menu.length; ++i) {
		var item = meta.Menu[i];

		if (meta.VisiblePages.includes(item.Code)) {

			if(item.Code === 'GroupActions') {
				//add a span for focus areas counter
				let addedFocusAreas = FocusAreas_GetFocusAreas();
				let focusAreasCountSpan = `<span id="focusAreasCounter">${addedFocusAreas.length > 0 ? addedFocusAreas.length : ''}</span>`;

				o.push(`<div class="menuitem" id="menuitem-${item.Code}">${item.Label} ${focusAreasCountSpan}</div>`);
			} else {
				o.push('<div class="menuitem" id="menuitem-' + item.Code + '">' + item.Label + '</div>');
			}

			if (item.Submenu != null) {
				var o2 = [];
				var sections = [];
				for (var j = 0; j < item.Submenu.length; ++j) {
					var subitem = item.Submenu[j];

					if (meta.VisiblePages.includes(subitem.Code)) {
			   
						o2.push('<div class="submenuitem" id="submenuitem-' + item.Code + '-' + subitem.Code + '">' + subitem.Label + '</div>');
						sections.push(
							'<div class="section" id="section-' + item.Code + '-' + subitem.Code + '"></div>\n'
						);
					}

				}
				$('#page-' + item.Code).find('.submenu').html(o2.join(''));
				$('#page-' + item.Code).find('.sections').html(sections.join(''));
			}
																 
																		
		}

	}
	o.push ( '</div>' );


	$('.menu').html ( o.join('') );
}

function Main_Section(id, title, text, html_content, class_name, style, show_filter_summary) {
	//console.log ( id + ': show_filter_summary=' + show_filter_summary );
	var o = [];
	o.push (
		`
			<div class="page-container ${class_name}">
				<div id="collapse-button-${id}" class="collapse-button"><</div>
				<div class="bannerHomepage insightBanner">
					<div class="bannerWrapper">
						<div class="containerMax">
							<div class="bannerText">


								<div class="panes-background"></div>

								<div class=left-pane>
									<h1 class="bannerHead">${title}</h1>
									<div class="left-pane-content">
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
			<script>
				$("#collapse-button-${id}").click ( Main_ToggleCollapse );
			</script>
		`
	);

	return $('#' + id). html ( o.join('') );
}

function Main_CurrentItemsData_WithFilter() {
	var d = data[Main_GetKeyWithFilter('ITEMS', config.CurrentWave, data.User.PersonalizedReportBase)];

	// Make sure we have QNo set
	var qno = 0;
	for (var key in d)
		d[key].QNo = (++qno);

	return d;
}

function Main_PreviousItemsData_WithFilter() {
    return data[Main_GetKeyWithFilter('ITEMS', config.PreviousWave, data.User.PersonalizedReportBase)];
}

function Main_CurrentDimensionsData_WithFilter() {
    return data[Main_GetKeyWithFilter('DIMS', config.CurrentWave, data.User.PersonalizedReportBase)];
}

function Main_CompactComparatorSet() {
	// If parent is checked, but we're at the top node, remove that reference
	// etc

	var o = [];
	var comparators = State_Get('comparators');
	var current_id = data.User.PersonalizedReportBase;
	var map = {};

	map[current_id] = 1;

	for (var i=0; i<comparators.length; ++i) {
		var comparator = comparators[i];

		switch ( comparator ) {

			case 'Internal.parent':
				var parent_id = meta.Hierarchy.Map [ current_id ].ParentId;
				if ( parent_id == '-1' || parent_id == current_id ) {
					// exclude
				}
				else {
					// include
					map[parent_id] = 1;
					o.push ( comparator );
				}
				break;

			case 'Internal.total':
				// exclude if this node was already included, either by
				// the current node or by parent
				var top_node_id = meta.Hierarchy.TopNode.Id;
				if ( map[top_node_id] != 1) {
					o.push ( comparator );
					map[top_node_id] = 1;
				}

				break;


			default:
				o.push ( comparator );
		}
	}

	return o;
}

function Main_PreviousDimensionsData_WithFilter() {
    return data[Main_GetKeyWithFilter('DIMS', config.PreviousWave, data.User.PersonalizedReportBase)];
}

function Main_ComparatorsData_WithFilter( type, force_all, breakdown_variable_id, code ) {

	// Example: type = "ENPS", "EP". A value of null (default) will return Item and Dimension Comparators

	if (type != null) {
		console.log ( "Comparator Type: " + type);
	}

	var comparators = force_all
		? Modal_GetAllComparators()
		: Main_CompactComparatorSet(); // default

	// Look up trend data for internal comparators
	var comparators_data = {};

	for (var i=0; i<comparators.length; ++i) {
		var comparator_id = comparators[i]; // example: "Internal.Wave:2020"
		var parts = comparator_id.split('.');
		var comparator_type = parts[0]; // "Internal" or "External"
		switch ( comparator_type ) {

			case "Internal":

				// options:
				// Internal.Wave:2019 (and others)
				// Internal.parent
				// Internal.total

				var tmp = parts[1].split(':');
				var wave_id;
				var node_id;
			
				switch ( tmp.length ) {

					case 1:
						// Internal.parent
						// Internal.total
						wave_id = config.CurrentWave;
						
						switch ( tmp[0] ) {

							case 'total':
								node_id = meta.Hierarchy.TopNode.Id;
								break;

							case 'parent':
								node_id = Main_ParentNodeId();
								break;
						}

						break;

					case 2:
						// Internal.Wave:YYYY
						wave_id = tmp.pop();
						node_id = data.User.PersonalizedReportBase;
						break;

				}

				if ( node_id != null ) {
					if ( type === undefined || type == null ) {

						// Default scenario, return Items and Dimensions

						if ( breakdown_variable_id == null ) {
							var items_key = Main_GetKeyWithFilter( 'ITEMS', wave_id, node_id );
							var dimensions_key = Main_GetKeyWithFilter( 'DIMS', wave_id, node_id );

							comparators_data[ comparator_id ] = {
								Items: data[items_key],
								Dimensions: data[dimensions_key]
							}
						}
						else {
							// This is to support results breakdown views
							var suffix = '.' + breakdown_variable_id.toUpperCase(); // example: ".GENDER"
							var items_key = Main_GetKeyWithFilter( 'ITEMSX', wave_id, node_id ) + suffix;
							var dimensions_key = Main_GetKeyWithFilter( 'DIMSX', wave_id, node_id ) + suffix;

							comparators_data[ comparator_id ] = {
								Items: data[items_key][code],
								Dimensions: data[dimensions_key][code]
							}
						}
					}
					else {
						var items_key = Main_GetKeyWithFilter( type, wave_id, node_id );
						comparators_data[ comparator_id ] = data[ items_key ];
					}
				}
				break;

			case "External":

				// need to understand how this mapping is supposed to work
				var benchmark_id;
			
				switch ( parts[1] ) {

					case 'IndustryBenchmark':
						benchmark_id = Main_ExternalNorms_IndustryNormId();
						break;

					case 'HighPerformers':
						benchmark_id = Main_ExternalNorms_HighPeformersNormId();
						break;
				}

				var items_key = Main_GetNormsKeyWithFilter( benchmark_id, breakdown_variable_id, code );
				var dimensions_key = Main_GetNormDimensionsKeyWithFilter ( benchmark_id, breakdown_variable_id, code );

				// Items and Dimensions
				comparators_data [ comparator_id ] = {
					Items: data[items_key],
					Dimensions: data[dimensions_key]
				};
				break;
		}
	}
	return comparators_data;
}

function Main_ParentNodeId() {
	var parent_id = meta.Hierarchy.Map[ data.User.PersonalizedReportBase ].ParentId;
	if (parent_id == '-1') return null; // no parent as we're already at the top of the hierarchy
	return meta.Hierarchy.Map[ parent_id ].Id;
}

function Main_ExternalNorms_IndustryNormId() {
	return config.Norms.Codes[0];
}

function Main_ExternalNorms_HighPeformersNormId() {
	return config.Norms.Codes[1];
}

function Main_GetNormsKeyWithFilter( benchmark_id, breakdown_variable_id, code ) {

	return ['NORMS', benchmark_id, Main_FilterHash(breakdown_variable_id, code) ].join('.');
}

function Main_GetNormDimensionsKeyWithFilter( benchmark_id, breakdown_variable_id, code ) {
	return ['NORMDIMS', benchmark_id, Main_FilterHash(breakdown_variable_id, code) ].join('.');
}

function Main_TestQuery( query ) {

	var current_page_id = State_GetCurrentPageId();
	if ( current_page_id != null )
		current_page_id = current_page_id.split('-').pop();
	
	switch ( current_page_id ) {


		case 'EffectivenessProfileBreakdown':
			var key = EffectivenessProfileBreakdown_Key();
			if (data[key] == null) {
				var breakdown_variable_id = EffectivenessProfileBreakdown_VariableId();
				
				var tmp = {};
				var codes = meta.Demographics[breakdown_variable_id].Options;
				for (var code in codes) {
					tmp[code] = {N: 100, Dist: {MostEffective: 20, Frustrated: 10, Detached: 40, LeastEffective: 30}};				
				}

				data[key] = tmp;
			}
			break;

		case 'ENPSBreakdown':
			// Load dummy data for current selection
			var key = ENPSBreakdown_Key();
			if (data[key] == null) {
				var breakdown_variable_id = ENPSBreakdown_VariableId();
				
				var tmp = {};
				var codes = meta.Demographics[breakdown_variable_id].Options;
				for (var code in codes) {
					tmp[code] = {N: 100, Dist: {Detractors: 20, Neutrals: 10, Promoters: 70}};				
				}

				data[key] = tmp;
			}
			break;

	} 

	if (query.parameter=='breakby') {
		TestData_fillBreakByData();
		TestData_fillComparatorsData();
		data.EffectivenessByDemo = TestData_EffectivenessByDemo();
	}
	if (query.page=='Modal') {
		TestData_fillComparatorsData();
	}

	Main_RefreshCurrentPage();
}

function Main_ExtendDataTableSorting() {

	jQuery.extend(jQuery.fn.dataTableExt.oSort, {

		"numsort-asc": function (a, b) {
			if (isNaN(parseFloat(a)) && isNaN(parseFloat(b))) return 0;
			if (isNaN(parseFloat(a)) && !isNaN(parseFloat(b)) ) return 1;
			if (!isNaN(parseFloat(a)) && isNaN(parseFloat(b)) ) return -1;
			return a - b;
		},

		"numsort-desc": function (a, b) {
			if (isNaN(parseFloat(a)) && isNaN(parseFloat(b))) return 0;
			if (isNaN(parseFloat(a)) && !isNaN(parseFloat(b)) ) return 1;
			if (!isNaN(parseFloat(a)) && isNaN(parseFloat(b)) ) return -1;
			return b - a;
		},

	});
	   
}

$(document).ready(function () {

	// For Mobile
	FastClick.attach(document.body);

	Main_RenderMenu();
	Main_RenderPageContents();
	Main_TextSubstitution();
	Main_UpdateFullPath();

	Main_ExtendDataTableSorting();
	
	// Preload Images; upon completion will execute Main_PreloadComplete() and run Render Functions
	Main_PreloadImages();

});