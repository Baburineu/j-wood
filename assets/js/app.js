const navLinks = document.querySelectorAll('.nav__link');


window.addEventListener("scroll", checkScroll );

window.addEventListener('DOMContentLoaded', checkScroll );

function checkScroll() {
	let scrollPos = window.scrollY;

	if (scrollPos > 0) {
		for(let navLink of navLinks) {
			navLink.classList.add('grey');
		}
	} else {
		for(let navLink of navLinks) {
			navLink.classList.remove('grey');
		}
	}
}