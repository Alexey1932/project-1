// Nav icon
const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav')
const menuIcon = document.querySelector('.menu-icon');



navBtn.onclick = function () {
	nav.classList.toggle('nav--mobile')
	menuIcon.classList.toggle('menu-icon--active');
	document.body.classList.toggle('no-scroll');
};

$('.nav-link').click(function () {
	nav.classList.remove('nav--mobile')
	menuIcon.classList.remove('menu-icon--active');
	document.body.classList.remove('no-scroll');
})