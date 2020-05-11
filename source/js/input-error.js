var form = document.querySelector('.form');
var catname = document.querySelector('.cat-name');
var weight = document.querySelector('.cat-weight');
var tel = document.querySelector('.form__input--tel');
var email = document.querySelector('.form__input--email');

console.log(catname);
form.addEventListener('submit', function(evt){
  evt.preventDefault();
	if (!catname.value) {
		catname.classList.add('form__input--error');
	} else if (!weight.value) {
    weight.classList.add('form__input--error');
  } else if (!email.value) {
    email.classList.add('form__input--error');
  } else if (!tel.value) {
    tel.classList.add('form__input--error');
  } else {form.submit();}
});
