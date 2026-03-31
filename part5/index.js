// index.js - Commit 1
// Prevent form from submitting and log a message

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // stop the page from reloading
  console.log('Form submission prevented. Ready to process inputs.');
});
