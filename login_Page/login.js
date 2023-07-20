function validatePhoneNumber() {
    const phoneInput = document.getElementById('phoneInput');
    const otpBox = document.getElementById('otpBox');
    const otpInput = document.getElementById('otpInput');
    const submitBtn = document.getElementById('submitBtn');

    if (/^\d{10}$/.test(phoneInput.value)) {
      phoneInput.style.borderColor = '#ccc';
      otpBox.style.display = 'block'; // Show the OTP input box
      otpInput.style.borderColor = '#ccc'; // Reset the OTP input border color
      
    } else {
      phoneInput.style.borderColor = 'red';
      otpBox.style.display = 'none'; // Hide the OTP input box
      submitBtn.classList.remove('active');
      submitBtn.setAttribute('disabled', true);
    }
  }

  function validateOTP() {
    const otpInput = document.getElementById('otpInput');
    const submitBtn = document.getElementById('submitBtn');

    if (/^\d{6}$/.test(otpInput.value)) {
      otpInput.style.borderColor = '#ccc';
      submitBtn.classList.add('active');
      submitBtn.removeAttribute('disabled');
    } else {
      otpInput.style.borderColor = 'red';
      submitBtn.classList.remove('active');
      submitBtn.setAttribute('disabled', true);
    }
  }

  function submitForm() {
    // Add your form submission logic here.
    alert('Form submitted successfully!');
  }