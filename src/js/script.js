const navBtn = document.querySelector('.nav__btn');
const nav = document.querySelector('.nav');
const allNavItems = document.querySelectorAll('.nav__item');
const body = document.querySelector('body');
const sections = document.querySelectorAll('.section')


const toggleNav = () => {
	nav.classList.toggle('nav--active')
	navBtn.classList.toggle('nav--active')
	body.classList.toggle('no-scroll')
	allNavItems.forEach(item => {
		item.addEventListener('click', ()=> {
			navBtn.classList.remove('nav--active')
			nav.classList.remove('nav--active')
			body.classList.remove('no-scroll')
		})   
	})
}


const handleObserver = () => {
	const currentSection = window.scrollY

	sections.forEach(section => {

		if(section.classList.contains('white-section') && section.offsetTop <= currentSection + 100){
			navBtn.style.color = 'black'
		} else if (!section.classList.contains('white-section')&& section.offsetTop <= currentSection + 50){
			navBtn.style.color = 'rgba(255, 255, 255, 0.89)'
		}

	})
	
}




let map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 50.088230657344816, lng: 19.89288689227915 },
		zoom: 16,
	});
	marker = new google.maps.Marker({
		position: { lat: 50.088230657344816, lng: 19.89288689227915 },
		map,
		title: 'Siedziba Firmy',
		zoomControl: true,
		mapTypeControl: true,
		scaleControl: true,
		streetViewControl: true,
		rotateControl: true,
		fullscreenControl: true,
		animation: google.maps.Animation.DROP,
	});
	const contentString =
		'<div id="content">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<h1 id="firstHeading" class="firstHeading">Forest Company</h1>' +
		'<div id="bodyContent">' +
		'<p>Jasnogórska 2, 44-268 Kraków</p>' +
		'<p>czynne: Pon. - Pt.<br>od 8:00 - 16:30</p>' +
		'</div>' +
		'</div>';

	const infowindow = new google.maps.InfoWindow({
		content: contentString,
	});

	infowindow.open(map, marker);
}



navBtn.addEventListener('click', toggleNav)
window.addEventListener('scroll', handleObserver)
