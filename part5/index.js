// index.js - Commit 5
// Previous code
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Form submission prevented. Ready to process inputs.');

  // Text inputs
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;

  // Radio button inputs
  const porridge = document.querySelector('input[name="porridge"]:checked').value;
  const beds = document.querySelector('input[name="beds"]:checked').value;

  // Checkbox inputs
  const chairs = Array.from(document.querySelectorAll('input[name="chairs"]:checked'))
                      .map(cb => cb.value);

  // Dropdown inputs
  const favoriteBear = document.querySelector('#favorite-bear').value;
  const greeting = document.querySelector('#greeting-preference').value;

  // Textarea input
  const comments = document.querySelector('#comments').value;

  // Full form data object
  const formData = {
    name,
    email,
    phone,
    porridge,
    beds,
    chairs,
    favoriteBear,
    greeting,
    comments
  };

  console.log('Full form data:', formData);
});
