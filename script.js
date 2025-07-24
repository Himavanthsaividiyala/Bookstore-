document.addEventListener('DOMContentLoaded', function() {

  //=================================================
  // 1. SCRIPT FOR: index.html (Contact Form)
  //=================================================
  // We first check if the contact form exists on the current page.
  const contactForm = document.querySelector('.section-5 form');
  if (contactForm) {
    // If the form exists, we add an event listener for its 'submit' event.
    contactForm.addEventListener('submit', function(event) {
      // Prevent the default browser action of reloading the page on form submission.
      event.preventDefault();

      // Get the value from the 'First Name' input field.
      const firstName = document.getElementById('fname').value;

      // Simple validation: check if the first name field is not empty.
      if (firstName) {
        alert('Thank you, ' + firstName + '! Your message has been received.');
        // Clear all the fields in the form.
        contactForm.reset();
      } else {
        // If the name is missing, alert the user.
        alert('Please fill out the form before submitting.');
      }
    });
  }


  //=================================================
  // 2. SCRIPT FOR: products.html (Add to Cart)
  //=================================================
  // We check if any shopping cart icons are present on the page.
  const cartIcons = document.querySelectorAll('.fa-shopping-cart');
  if (cartIcons.length > 0) {
    // If icons are found, loop through each one.
    cartIcons.forEach(function(icon) {
      // Add a 'click' event listener to each icon.
      icon.addEventListener('click', function() {
        // When an icon is clicked, show a confirmation message.
        alert('Added to cart!');
      });
    });
  }


  //=================================================
  // 3. SCRIPT FOR: login.html (Login/Signup Logic)
  //=================================================
  // Check for elements specific to the login page.
  const enterButton = document.getElementById('enterButton');
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');

  // This block only runs if all login page elements are present.
  if (enterButton && loginForm && signupForm) {
    const libraryImage = document.getElementById('libraryImage');
    const formContainer = document.getElementById('formContainer');

    // Show the login/signup forms when the "Enter" button is clicked.
    enterButton.addEventListener('click', function() {
      libraryImage.style.display = 'none';
      formContainer.style.display = 'flex';
    });

    // Handle the login form submission.
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Stop page reload.
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;

      // Simple validation for demonstration purposes.
      if (email === 'test@example.com' && password === 'password') {
        alert('Login successful! Welcome back.');
        window.location.href = 'index.html'; // Redirect to the home page on success.
      } else {
        alert('Invalid email or password.');
      }
    });

    // Handle the signup form submission.
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Stop page reload.
      const name = document.getElementById('signupName').value;
      if (name) {
        alert('Signup successful, ' + name + '! Please log in to continue.');
        // After signup, automatically switch back to the login form.
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
      } else {
        alert('Please enter your name.');
      }
    });

    // This function is called by the "Sign Up" and "Login" links on the forms.
    // We need to make it globally accessible by attaching it to the window object.
    window.toggleForm = function() {
      const isLoginHidden = loginForm.style.display === 'none';
      loginForm.style.display = isLoginHidden ? 'block' : 'none';
      signupForm.style.display = isLoginHidden ? 'none' : 'block';
    }
  }


  //=================================================
  // 4. SCRIPT FOR: pay.html (Payment Form Validation)
  //=================================================
  // Check if the final "pay" button exists on the page.
  const submitPaymentButton = document.querySelector('.submit-now-btn');
  if (submitPaymentButton) {
    submitPaymentButton.addEventListener('click', function(event) {
      event.preventDefault(); // Stop any default button action.

      // Get the values from all payment fields.
      const cardNumber = document.querySelector('.card-number-field').value;
      const expiryDate = document.querySelector('.date-number-field').value;
      const cvv = document.querySelector('.cvv-number-field').value;
      const cardHolderName = document.querySelector('.card-name-field').value;

      // Validate that no fields are empty and CVV is 3 digits.
      if (!cardNumber || !expiryDate || !cvv || !cardHolderName) {
        alert('Please fill in all card details.');
      } else if (cvv.length !== 3) {
        alert('CVV must be 3 digits.');
      } else {
        alert('Payment successful! Thank you for your purchase.');
        window.location.href = 'index.html'; // Redirect to home page on success.
      }
    });
  }
  
  //=================================================
  // 5. SCRIPT FOR: About.html (Team Contact Buttons)
  //=================================================
  // Check if the contact buttons on the team cards exist.
  const teamContactButtons = document.querySelectorAll('.card .button');
  if (teamContactButtons.length > 0) {
      teamContactButtons.forEach(button => {
          button.addEventListener('click', function(event) {
              // Find the parent '.container' of the clicked button.
              const container = event.target.closest('.container');
              // Find the third paragraph element (the email) within that container.
              const emailElement = container.querySelector('p:nth-of-type(3)');
              if (emailElement) {
                  const email = emailElement.textContent;
                  alert('You can contact this person at: ' + email);
              }
          });
      });
  }
  
  //=================================================
  // 6. SCRIPT FOR: Register.html (Registration Form)
  //=================================================
  // Check if the registration form exists on the current page.
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
      // Prevent the form from reloading the page.
      event.preventDefault();

      // Get the values from the input fields.
      const username = document.getElementById('registerUsername').value;
      const email = document.getElementById('registerEmail').value;
      const password = document.getElementById('registerPassword').value;
      const confirmPassword = document.getElementById('confirmPassword').value;

      // --- Validation ---
      if (!username || !email || !password || !confirmPassword) {
        alert('Please fill out all fields.');
      } else if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
      } else if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
      } else {
        // If all checks pass, show a success message and redirect.
        alert('Registration successful! You can now log in.');
        window.location.href = 'login.html';
      }
    });
  }

});
