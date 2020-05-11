var form = document.querySelector(".form");
var name = form.querySelector(".cat-name");
var weight = form.querySelector(".cat-weight");
var tel = form.querySelector(".form__input--tel");
var email = form.querySelector(".form__input--email");

form.addEventListener("submit", function(evt){
  evt.preventDefault();
	if (!name.value) {
		name.classList.add("form__input--error");
	}
});

