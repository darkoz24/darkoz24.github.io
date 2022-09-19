window.addEventListener("scroll", () => {
	if (window.scrollY > 400) {
		document.getElementById('nav_bar').style.background = 'rgba(22, 34, 75, 0.90)'
		document.getElementById('nav_bar').style.opacity = '1'
		document.getElementById('nav_bar').style.transition = '0.5s'
	} else  {
		document.getElementById('nav_bar').style.background = 'transparent'
	}
})