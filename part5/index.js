// index.js - Commit 2
// Previous code
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Form submission prevented. Ready to process inputs.');

  // Collect text input values
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;

  console.log('Text inputs:', { name, email, phone });
});
