document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Create the email parameters
  const emailParams = {
      from_name: this.from_name.value,
      from_email: this.from_email.value,
      phone_number: this.phone_number.value,
      message: this.message.value,
      reply_to: this.from_email.value // Set the reply-to email
  };

  emailjs.send('service_b7euldc', 'template_owo79wr', emailParams)
      .then(function() {
          alert('Thank you for contacting us!');
          document.getElementById('contact-form').reset();
      }, function(error) {
          console.log('FAILED...', error);
          alert('An error occurred. Please try again.');
      });
