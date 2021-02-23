const collapsibles = document.querySelectorAll('.collapsible')
collapsibles.forEach(item => {
	item.addEventListener('click', function(e) {
		this.classList.toggle('collapsible--expanded')
	})
})

