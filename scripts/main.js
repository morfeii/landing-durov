'use strict';

const form = document.getElementById('form__fields');

form.addEventListener('submit', function(e) {
  document.querySelector('header').style.display = 'none';
  document.querySelector('main').style.display = 'none';
  document.getElementById('thankyou-page').style.display = 'block';
  e.preventDefault();
});
