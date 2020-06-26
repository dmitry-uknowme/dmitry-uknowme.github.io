let introLogo = document.querySelector('.intro_logo')
let logo_hidden_list = document.querySelectorAll('.logo_hidden')









setTimeout(() => {
	introLogo.addEventListener('click', function() {
		for (let logo_hidden of logo_hidden_list) {
			logo_hidden.classList.add('.intro_logo:hover')	
			logo_hidden.classList.remove('logo_hidden', 'logo_hidden_right')	
		}
	})
}, 3000);



