document.addEventListener('DOMContentLoaded', function() {
  // Get the input fields
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const messageInput = document.getElementById('message');

  // Add an event listener to the form submission event
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(event) {
    let valid = true;

    if (firstNameInput.value.trim() === '') {
      alert('First Name is required');
      valid = false;
    }

    if (lastNameInput.value.trim() === '') {
      alert('Last Name is required');
      valid = false;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value)) {
      alert('Invalid email address');
      valid = false;
    }

    if (!/^\(?([0-9]{1})\)?[-. ]?([0-9]{1})[-. ]?([0-9]{10})$/.test(phoneInput.value)) {
      alert('Invalid phone number (must be 12 numbers)');
      valid = false;
    }

    if (messageInput.value.trim() === '') {
      alert('Please enter a message');
      valid = false;
    }

    if (!valid) {
      event.preventDefault();
    }
    else{
      alert('Thank you for contacting, we will further message you via email');
    }
  });
});


function showAlert(){
  alert('You have suscribed into our newsletter');
}