var form = document.querySelector('.form');
var catname = document.querySelector('.cat-name');
var weight = document.querySelector('.cat-weight');
var tel = document.querySelector('.form__input--tel');
var email = document.querySelector('.form__input--email');
var button = document.querySelector('.form__button');


button.addEventListener('click', function(evt){
  var inputError=false
  evt.preventDefault();
  catname.classList.remove('form__input--error');
  weight.classList.remove('form__input--error');
  email.classList.remove('form__input--error');
  tel.classList.remove('form__input--error');

  if (!catname.value) {
    catname.classList.add('form__input--error');
    inputError=true;
  }
  if (!weight.value) {
    weight.classList.add('form__input--error');
    inputError=true;
  }
  if (!email.value) {
    email.classList.add('form__input--error');
    inputError=true;
  }
  if (!tel.value) {
    tel.classList.add('form__input--error');
    inputError=true;
  }
  if (!inputError) {
    form.submit()
  }
});
