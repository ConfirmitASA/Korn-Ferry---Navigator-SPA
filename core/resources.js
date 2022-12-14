// Resources
var file_library_path = 'https://survey.us.confirmit.com/isa/BDJPFRDMEYBPBKLVADAYFQCDAVIOEQJR/KornFerryPOC2/';
var local_img_path = 'img/';


function ImgPath() {
    return Main_IsProduction() ? file_library_path : local_img_path;
}

function FilterIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>`;
}

function Resources_EngagementIcon() {
	return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="icon_7434221" x="0px" y="0px" viewBox="0 0 90.7 85" style="enable-background:new 0 0 90.7 85;" xml:space="preserve"><style type="text/css">	.st0{fill:#006C54;}</style><g id="Layer_2_1_">	<g id="Layer_1-2">		<path class="st0" d="M39.2,85c-4.9,0-8.9-3.9-9-8.8c0-0.5,0-0.9,0.1-1.4l1.1-11l3,0.3l-1.1,11c0,0.3-0.1,0.7-0.1,1    c0.1,3.3,2.8,5.9,6.1,5.9h1.5c4-0.1,7.4-3.2,7.9-7.2l1.1-10.9l3,0.3l-1.2,11c-0.7,5.5-5.3,9.7-10.9,9.9h-1.5    C39.3,85,39.2,85,39.2,85z"></path>		<path class="st0" d="M44.7,66.5h-5.3c-8,0-15.2-3.1-20.2-8.7c-5.1-5.7-7.5-13.2-6.6-21.3l0.7-6.8C14.9,13.3,29.6,0,46,0h5.4    c8,0,15.2,3.1,20.2,8.8c5.1,5.7,7.5,13.2,6.6,21.3l-0.7,6.9C75.8,53.2,61.1,66.5,44.7,66.5z M46,3C31.1,3,17.7,15.1,16.2,30    l-0.7,6.8c-0.8,7.2,1.3,13.9,5.9,18.9c4.5,5,10.9,7.8,18,7.8h5.3c14.9,0,28.3-12.1,29.8-27v0l0.7-6.9c0.8-7.2-1.3-13.9-5.9-18.9    c-4.5-5-10.9-7.8-18-7.8H46z"></path>		<rect x="28.8" y="52" transform="matrix(0.1042 -0.9946 0.9946 0.1042 -16.9185 88.1167)" class="st0" width="23.3" height="3"></rect>		<path class="st0" d="M35.5,43.4c-1.7,0-3.4-0.7-4.7-1.9c-1.3-1.3-2.1-2.9-2.1-4.7c0-0.4,0-0.7,0.1-1.1c0.5-4.1,4-7.2,8.1-7.3    c1.8,0,3.5,0.6,4.8,1.9s2,2.9,2.1,4.8c0,0.4,0,0.7-0.1,1.1L43,43.4h-7.4C35.6,43.4,35.6,43.4,35.5,43.4z M37,31.3    C37,31.3,37,31.3,37,31.3c-2.7,0.1-4.9,2.1-5.2,4.7c0,0.2,0,0.4,0,0.6c0,1,0.4,1.9,1.2,2.6c0.7,0.7,1.7,1,2.7,1l4.7,0l0.5-4.6    c0-0.3,0-0.5,0-0.6c0-1-0.4-2-1.2-2.6C38.9,31.7,38,31.3,37,31.3z"></path>					<rect x="34.4" y="51.9" transform="matrix(0.1048 -0.9945 0.9945 0.1048 -11.9502 93.6239)" class="st0" width="23.3" height="3"></rect>		<path class="st0" d="M47.2,43.4h-1.7l0.8-7.7c0.5-4.1,4-7.2,8.1-7.3c0.4,0,0.7,0,1.1,0.1c1.8,0.2,3.4,1.2,4.5,2.6    c1.1,1.4,1.6,3.2,1.3,5c-0.5,4.1-3.9,7.2-8.1,7.3L47.2,43.4z M48.9,40.4h4.3c2.6-0.1,4.8-2.1,5.1-4.7c0.1-1-0.1-2-0.7-2.8    c-0.6-0.8-1.5-1.3-2.5-1.5c-0.2,0-0.4,0-0.6,0c-2.6,0.1-4.8,2.1-5.2,4.7L48.9,40.4z"></path>		<rect x="41.7" y="40.4" class="st0" width="5.6" height="3"></rect>		<rect x="8.7" y="0.5" transform="matrix(0.7451 -0.6669 0.6669 0.7451 -0.2735 7.9045)" class="st0" width="3" height="7.5"></rect>		<rect x="1.1" y="34.4" class="st0" width="7.9" height="3"></rect>		<rect x="80.2" y="34.4" class="st0" width="7.9" height="3"></rect>		<rect x="82.4" y="2.8" transform="matrix(0.7414 -0.6711 0.6711 0.7414 19.5052 59.2339)" class="st0" width="8.4" height="3"></rect>		<rect x="79" y="58.5" transform="matrix(0.7458 -0.6661 0.6661 0.7458 -21.0439 69.4672)" class="st0" width="3" height="7.5"></rect>		<rect x="-0.1" y="60.8" transform="matrix(0.7415 -0.6709 0.6709 0.7415 -40.7406 18.8652)" class="st0" width="8.4" height="3"></rect>		<rect x="31.6" y="71.7" class="st0" width="18" height="3"></rect>	</g></g><defs><style>#icon_7434221 *{stroke:#77bc1f; fill:#77bc1f;}.whatWeDoSection .whatWeDoWrapper .cardWrapperArea .cardWrapper .hoverList:hover #icon_7434221 *{stroke:#77bc1f; fill:#77bc1f;}</style></defs></svg>';
}

function Resources_EnablementIcon() {
	return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="icon_1868759" x="0px" y="0px" viewBox="0 0 102.1 78.4" style="enable-background:new 0 0 102.1 78.4;" xml:space="preserve"><style type="text/css">	.st0{fill:#006C54;}</style><g id="Layer_2_1_">	<g id="Layer_1-2">					<rect x="14.1" y="54.4" transform="matrix(0.1048 -0.9945 0.9945 0.1048 -24.0288 85.0349)" class="st0" width="42.3" height="3"></rect>					<rect x="32.4" y="44.2" transform="matrix(0.1041 -0.9946 0.9946 0.1041 11.6471 104.3103)" class="st0" width="62.7" height="3"></rect>		<path class="st0" d="M5.9,78.4H4.2l2.3-22.1l3,0.3l-2,18.8h64.4c8.3,0,15.3-6.3,16.1-14.5l3.4-32l3,0.3l-3.4,32    c-1,9.8-9.2,17.2-19.1,17.2H5.9z"></path>		<path class="st0" d="M7.6,58c-4.1,0-7.5-3.3-7.6-7.5c0-0.4,0-0.8,0.1-1.1c0.6-4.6,4.5-8.1,9.1-8.2c2,0,3.9,0.7,5.4,2.1    c1.5,1.4,2.3,3.3,2.4,5.3c0,0.4,0,0.8-0.1,1.2c-0.6,4.6-4.5,8.1-9.1,8.2C7.7,58,7.7,58,7.6,58z M9.3,44.1c0,0-0.1,0-0.1,0    c-3.1,0.1-5.8,2.5-6.2,5.6l0,0c0,0.2,0,0.5,0,0.7C3,53,5.2,55.1,7.7,55c3.1-0.1,5.8-2.5,6.2-5.6c0-0.3,0-0.5,0-0.8    c0-1.2-0.5-2.4-1.4-3.2C11.6,44.6,10.5,44.1,9.3,44.1z"></path>		<path class="st0" d="M37.2,37.2c-4.1,0-7.5-3.3-7.6-7.5c0-0.4,0-0.8,0.1-1.1l0,0c0.6-4.6,4.5-8.1,9.1-8.2c2-0.1,4,0.7,5.4,2.1    c1.5,1.4,2.3,3.3,2.4,5.3c0,0.4,0,0.8-0.1,1.2c-0.6,4.6-4.5,8.1-9.1,8.2C37.3,37.2,37.3,37.2,37.2,37.2z M31.4,28.8l1.3,0.2    c0,0.2,0,0.5,0,0.7c0.1,2.5,2.2,4.6,4.7,4.5c3.1-0.1,5.8-2.5,6.2-5.6c0-0.3,0-0.5,0-0.7c0-1.2-0.5-2.4-1.4-3.2    c-0.9-0.8-2.1-1.3-3.3-1.3c-3.2,0.1-5.8,2.5-6.2,5.6L31.4,28.8z"></path>		<path class="st0" d="M66.8,16.8c-2,0-3.8-0.8-5.3-2.1c-1.5-1.4-2.3-3.3-2.3-5.3c0-0.4,0-0.8,0.1-1.1c0.6-4.6,4.5-8.1,9.1-8.2    c4.2-0.1,7.7,3.2,7.8,7.4c0,0.4,0,0.8-0.1,1.2c-0.6,4.6-4.5,8.1-9.1,8.2C66.9,16.8,66.8,16.8,66.8,16.8z M68.5,3c0,0-0.1,0-0.1,0    c-3.1,0.1-5.8,2.5-6.2,5.6l0,0c0,0.2,0,0.5,0,0.7c0,1.2,0.5,2.4,1.4,3.2c0.9,0.9,2.1,1.3,3.3,1.3c3.1-0.1,5.8-2.5,6.2-5.6    c0-0.2,0-0.5,0-0.7C73.1,5,71,3,68.5,3z"></path>		<path class="st0" d="M92.8,30.5c-4.1,0-7.5-3.3-7.6-7.4c0-0.4,0-0.8,0.1-1.2l0,0c0.6-4.6,4.5-8.1,9.1-8.2c2-0.1,4,0.7,5.4,2.1    c1.5,1.4,2.3,3.3,2.3,5.3c0,0.4,0,0.8-0.1,1.2c-0.6,4.6-4.4,8.1-9.1,8.2C92.9,30.5,92.8,30.5,92.8,30.5z M88.2,22.3    c0,0.2,0,0.5,0,0.7c0.1,2.5,2.1,4.6,4.7,4.5c3.2-0.1,5.8-2.4,6.2-5.6c0-0.2,0-0.5,0-0.7c0-1.2-0.5-2.4-1.4-3.2    c-0.9-0.9-2.1-1.3-3.3-1.3C91.2,16.8,88.6,19.2,88.2,22.3L88.2,22.3z"></path>		<rect x="79.1" y="7" transform="matrix(0.4667 -0.8844 0.8844 0.4667 29.4969 79.376)" class="st0" width="3" height="16.5"></rect>		<rect x="42.1" y="17.1" transform="matrix(0.8236 -0.5671 0.5671 0.8236 -1.2416 33.2375)" class="st0" width="21.4" height="3"></rect>					<rect x="12.5" y="37.8" transform="matrix(0.8184 -0.5746 0.5746 0.8184 -18.3534 20.4168)" class="st0" width="21.3" height="3"></rect>	</g></g><defs><style>#icon_1868759 *{stroke:#77bc1f; fill:#77bc1f;}.whatWeDoSection .whatWeDoWrapper .cardWrapperArea .cardWrapper .hoverList:hover #icon_1868759 *{stroke:#77bc1f; fill:#77bc1f;}</style></defs></svg>';
}

function Resources_EffectivenessIcon() {
	return '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 120.9 107.7" viewBox="0 0 120.9 107.7" id="icon_3539117"><g fill="#006c54"><path d="m91 46h-5.8v-3h5.8c8.3 0 15.2-6.2 16.1-14.5l.8-7.1 3 .3-.8 7.1c-1 9.8-9.2 17.2-19.1 17.2z"></path><path d="m109.4 23.1c-6.4 0-11.5-5.2-11.5-11.5-.1-6.4 5.1-11.6 11.5-11.6s11.5 5.2 11.5 11.5c0 6.4-5.2 11.6-11.5 11.6zm0-20.1c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5z"></path><path d="m88.9 107.7c-6.4 0-11.5-5.2-11.5-11.5s5.2-11.5 11.5-11.5 11.5 5.2 11.5 11.5-5.1 11.5-11.5 11.5zm0-20.1c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5z"></path><path d="m11.5 56.8c-6.3 0-11.5-5.2-11.5-11.6s5.2-11.5 11.5-11.5c6.4 0 11.5 5.2 11.5 11.5s-5.1 11.6-11.5 11.6zm0-20.1c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5z"></path><path d="m79.1 97.6-7.1-.7c-9.8-1-17.2-9.2-17.2-19.1v-5.8h3v5.8c0 8.3 6.3 15.2 14.5 16.1l7.1.7z"></path><path d="m66.9 72.9h-35.7l3.8-35.6c1.1-8.8 8.5-15.6 17.4-15.8h35.6l-3.7 35.7c-1.1 8.7-8.6 15.5-17.4 15.7zm-32.3-3h32.3c7.3-.2 13.5-5.8 14.5-13l3.4-32.3h-32.4c-7.3.2-13.5 5.8-14.4 13.1z"></path><path d="m21.5 43.5h14.1v3h-14.1z"></path></g><defs><style>#icon_3539117 *{stroke:#77bc1f; fill:#77bc1f;}.whatWeDoSection .whatWeDoWrapper .cardWrapperArea .cardWrapper .hoverList:hover #icon_3539117 *{stroke:#77bc1f; fill:#77bc1f;}</style></defs></svg>';
}

function Resources_Icon2() {
    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="icon_4619848" x="0px" y="0px" viewBox="0 0 128.3 77.7" style="enable-background:new 0 0 128.3 77.7;" xml:space="preserve">
    <style type="text/css">
        .st0 {
            fill: #006C54;
        }
    </style>
    <g id="Layer_2_1_">
        <g id="Layer_1-2">
            <path class="st0" d="M24.7,77.7c-0.1,0-0.2,0-0.4,0c-0.8-0.2-1.3-1-1.1-1.8C23.7,74,27.7,58.1,34.9,55c2.7-1.2,5.6-2,8.4-2.7    c7.6-2.1,12.4-3.7,12.9-9.2c0.1-0.8,0.8-1.4,1.6-1.3c0.8,0.1,1.4,0.8,1.3,1.6c-0.8,7.9-8.1,9.9-15.1,11.8c-2.7,0.7-5.5,1.5-8,2.6    c-4.9,2.1-8.8,14.3-9.9,18.8C26,77.2,25.4,77.7,24.7,77.7z"></path>
            <path class="st0" d="M99,77.7c-0.8,0-1.5-0.6-1.5-1.5c-0.2-6.2-1.9-16.7-5.7-18.5c-2.3-1.1-4.9-1.8-7.4-2.6    c-6.4-1.9-13.7-4-12.9-12.1c0.1-0.8,0.8-1.4,1.6-1.3c0.8,0.1,1.4,0.8,1.3,1.6c-0.6,5.4,3.5,6.8,10.7,8.9c2.6,0.8,5.4,1.6,7.9,2.7    c6.7,3.2,7.4,19.3,7.4,21.1C100.5,77,99.9,77.7,99,77.7C99,77.7,99,77.7,99,77.7z"></path>
            <path class="st0" d="M65.2,47.3c-3.6,0-7-1.6-9.7-4.7c-4.5-5.1-6.9-13.6-6.1-21.7C50.7,8.6,59.1,0,69.8,0c4.8,0,9.1,1.8,12.1,5.1    c3.5,3.9,5,9.5,4.3,16.1l0,0C84.6,36.6,73.8,47.3,65.2,47.3z M69.8,3c-9.2,0-16.3,7.5-17.5,18.2c-0.8,7.3,1.3,15,5.3,19.4    c2.2,2.4,4.8,3.7,7.5,3.7c8,0,16.8-11.4,18-23.4l0,0c0.6-5.8-0.6-10.5-3.5-13.8C77.2,4.4,73.8,3,69.8,3z"></path>
            <path class="st0" d="M55.3,66.6c-0.8,0-1.6-0.3-2.2-1c-0.3-0.3-0.5-0.7-0.7-1.2l-3.2-12.6C49,51,49.5,50.2,50.3,50    c0.8-0.2,1.6,0.3,1.8,1.1l3.1,12.5l4.6-4.5L61,58l-1.1,1.1l-7-6.9c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0l7,6.9    c1.2,1.2,1.2,3.1,0,4.3c0,0,0,0,0,0l-4.6,4.5C56.8,66.3,56,66.6,55.3,66.6z"></path>
            <path class="st0" d="M71.2,66.7c-0.1,0-0.2,0-0.3,0c-0.8-0.1-1.5-0.5-2.1-1.1l-3.6-4.3C64.1,60,64.3,58,65.6,57l8.6-7    c0.6-0.5,1.6-0.4,2.1,0.2c0.5,0.6,0.4,1.6-0.2,2.1l-8.6,7l3.6,4.4l6.3-12.5c0.4-0.7,1.3-1,2-0.7c0.7,0.4,1,1.3,0.7,2L73.9,65    c-0.2,0.4-0.4,0.7-0.8,0.9C72.6,66.4,71.9,66.7,71.2,66.7z"></path>
            <path class="st0" d="M1.5,62.7c-0.1,0-0.3,0-0.4-0.1c-0.8-0.2-1.2-1.1-1-1.9l0.3-1c0.1-0.3,2.1-8,7.3-10.3    c1.9-0.8,3.9-1.4,5.9-1.9c5-1.4,8.1-2.4,8.5-5.9c0.1-0.8,0.8-1.4,1.6-1.3c0.8,0.1,1.4,0.8,1.3,1.6c-0.6,5.7-5.7,7.1-10.7,8.5    c-1.9,0.5-3.8,1-5.5,1.8c-3.2,1.4-5.1,6.5-5.6,8.4l-0.3,1.1C2.7,62.3,2.1,62.7,1.5,62.7z"></path>
            <path class="st0" d="M38.5,49.3c-0.2,0-0.4,0-0.5-0.1c-2.6-1-6-2.9-5.5-7.6c0.1-0.8,0.8-1.4,1.6-1.3c0.8,0.1,1.4,0.8,1.3,1.6    c-0.2,2.2,0.7,3.4,3.5,4.5c0.8,0.3,1.2,1.2,0.9,1.9C39.7,49,39.1,49.3,38.5,49.3z"></path>
            <path class="st0" d="M28.7,45.1c-2.6,0-5-1.2-7-3.3c-3.3-3.6-4.9-9.5-4.3-15.3c0.9-8.7,6.8-14.8,14.5-14.8c3.4,0,6.5,1.3,8.7,3.7    c2.5,2.8,3.6,6.8,3.1,11.4C42.7,35.4,36.3,45.1,28.7,45.1z M31.8,14.6c-6.1,0-10.8,5-11.5,12.1c-0.5,5,0.9,10.1,3.6,13    c1,1.1,2.6,2.4,4.8,2.4c5.3,0,11.1-7.6,11.9-15.7l0,0c0.4-3.8-0.4-6.9-2.3-9.1C36.7,15.6,34.4,14.6,31.8,14.6z"></path>
            <path class="st0" d="M90,50c-0.7,0-1.3-0.4-1.4-1.1c-0.2-0.8,0.2-1.6,1-1.9c4.2-1.2,6.5-2.4,6.8-5.5c0.1-0.8,0.8-1.4,1.6-1.3    c0.8,0.1,1.4,0.8,1.3,1.6c-0.5,5.2-4.9,6.9-9,8C90.3,50,90.1,50,90,50z"></path>
            <path class="st0" d="M126.8,62c-0.8,0-1.5-0.7-1.5-1.5v-0.2c0-1.5-0.3-2.9-0.9-4.2c-0.7-1.7-1.9-3.1-3.5-4c-1.5-0.7-3.3-1.2-5-1.7    c-4.6-1.3-9.8-2.9-9.1-8.8c0.1-0.8,0.8-1.4,1.6-1.3c0.8,0.1,1.4,0.8,1.3,1.6c-0.3,3.2,1.8,4.1,7,5.6c1.9,0.5,3.8,1.1,5.5,1.9    c2.3,1.2,4,3.2,4.9,5.5c0.7,1.7,1.1,3.5,1.1,5.4v0.2C128.3,61.4,127.7,62,126.8,62z"></path>
            <path class="st0" d="M103,45.1c-2.6,0-5-1.2-7-3.4c-3.2-3.6-4.9-9.6-4.3-15.3c0.9-8.7,6.9-14.8,14.5-14.8c3.4,0,6.5,1.3,8.6,3.7    c2.5,2.8,3.6,6.8,3.1,11.4C116.8,37.6,109.1,45.1,103,45.1z M106.2,14.6c-6,0-10.8,5-11.5,12.1c-0.5,4.9,0.9,10,3.5,13    c1,1.1,2.6,2.4,4.8,2.4c5.3,0,11.1-7.6,11.9-15.7l0,0c0.4-3.8-0.4-6.9-2.3-9.1C111,15.6,108.8,14.6,106.2,14.6z"></path>
        </g>
    </g>
    <defs>
        <style>
            #icon_4619848 * {
                stroke: #77bc1f;
                fill: #77bc1f;
            }

            .whatWeDoSection .whatWeDoWrapper .cardWrapperArea .cardWrapper .hoverList:hover #icon_4619848 * {
                stroke: #77bc1f;
                fill: #77bc1f;
            }
        </style>
    </defs>
</svg>`;
}

function Resources_Icon1() {
    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="icon_5090258" x="0px" y="0px" viewBox="0 0 87.8 79.4" style="enable-background:new 0 0 87.8 79.4;" xml:space="preserve">
    <style type="text/css">
        .st0 {
            fill: #006C54;
        }
    </style>
    <g id="Layer_2_1_">
        <g id="Layer_1-2">
            <path class="st0" d="M55.3,79.5H0l5.8-55.4C7.2,10.8,19.2,0,32.5,0h55.3L82,55.3C80.6,68.7,68.6,79.5,55.3,79.5z M3.3,76.5h52    c11.8,0,22.4-9.6,23.7-21.5l5.5-52h-52C20.7,3,10,12.6,8.8,24.4L3.3,76.5z"></path>
            <path class="st0" d="M19.5,57.1l3.4-32.6l22.2,16.6L19.5,57.1z M25.3,30.1l-2.2,21.3l16.7-10.4L25.3,30.1z"></path>
            <path class="st0" d="M44.6,57.1L48,24.5l22.2,16.6L44.6,57.1z M50.4,30.1l-2.2,21.3l16.7-10.4L50.4,30.1z"></path>
        </g>
    </g>
    <defs>
        <style>
            #icon_5090258 * {
                stroke: #77bc1f;
                fill: #77bc1f;
            }

            .whatWeDoSection .whatWeDoWrapper .cardWrapperArea .cardWrapper .hoverList:hover #icon_5090258 * {
                stroke: #77bc1f;
                fill: #77bc1f;
            }
        </style>
    </defs>
</svg>`;
}

function Resources_GetIconUrlByDimensionId(dimensionId) {
    var iconUrl = '';
    var img_path = ImgPath();

    switch (dimensionId) {
        case 'DIM_ENG':
            iconUrl = img_path + 'engagement.png';
            break;
        case 'DIM_ENA':
            iconUrl = img_path + 'enablement.png';
            break;
        case 'DIM_N64':
            iconUrl = img_path + 'resources.png';
            break;
        case 'DIM_N50':
            iconUrl = img_path + 'authority_and_empowerement.png';
            break;
        case 'DIM_N65':
            iconUrl = img_path + 'respect_and_recognition.png';
            break;
        case 'DIM_N52':
            iconUrl = img_path + 'collaboration.png';
            break;
        case 'DIM_N63':
            iconUrl = img_path + 'quality_and_customer_focus.png';
            break;
        case 'DIM_N61':
            iconUrl = img_path + 'performance_management.png';
            break;
        case 'DIM_N54':
            iconUrl = img_path + 'development_opportunities.png';
            break;
        case 'DIM_N53':
            iconUrl = img_path + 'confidence_in_leaders.png';
            break;
        case 'DIM_N66':
            iconUrl = img_path + 'training.png';
            break;
        case 'DIM_N51':
            iconUrl = img_path + 'clear_and_promising_direction.png';
            break;
        case 'DIM_N67':
            iconUrl = img_path + 'work_structure_progress.png';
            break;
        case 'DIM_N60':
            iconUrl = img_path + 'compensation_and_benefits.png';
            break;
        default:
            iconUrl = img_path + 'engagement.png';
            break;
    }

    return iconUrl;
}

//returns {data: base64path} if local
//return {path: file library url} if reportal
function Resources_GetPictureLocationByName(pictureName) {
    let location = {
    };

    if(Main_IsProduction()) {
        location.path = file_library_path + pictureName;
    } else {
        location.data = PPT_image_storage[pictureName.split('.')[0]];
    }

    return location;
}