const form = document.querySelector('.header__form');
const input = document.querySelector('.form__input');

input.addEventListener('focus', function () {
	form.classList.add('header__form--active');
})

input.addEventListener('blur', function () {
	form.classList.remove('header__form--active');
})








const toggle = document.getElementById('nav__toggle')
for (let i = 0; i < 5; i++) {
	const navLinks = {
		link: document.getElementById('nav-link-' + i)
	}
	navLinks.link.onclick = function () {
		toggle.click();
	}
}


