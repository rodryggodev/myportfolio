let hamburguer = document.querySelector('.hamburguer');
hamburguer.addEventListner('click', () => {
	 document.querySelector('.sidebar').classList.toggle('show-menu');
});

