// index.js - Commit 4
// Previous code
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Form submission prevented. Ready to process inputs.');

  // Text inputs
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;

  console.log('Text inputs:', { name, email, phone });

  // Radio button inputs
  const porridge = document.querySelector('input[name="porridge"]:checked').value;
  const beds = document.querySelector('input[name="beds"]:checked').value;

  console.log('Radio selections:', { porridge, beds });

  // Checkbox inputs (multiple selections)
  const chairs = Array.from(document.querySelectorAll('input[name="chairs"]:checked'))
                      .map(cb => cb.value);

  console.log('Checkbox selections:', chairs);
});
