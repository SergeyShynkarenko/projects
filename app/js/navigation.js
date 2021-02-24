document.addEventListener('DOMContentLoaded', () => {

	const open = document.getElementById('open')
	const close = document.getElementById('close')
	const navigationContainer = document.querySelector('.navigation-container')

	open.addEventListener('click', () => navigationContainer.classList.add('show-nav'))

	close.addEventListener('click', () => navigationContainer.classList.remove('show-nav'))

})
