function SendEnquiry() {
  debugger;
  if (validateForm()) {
    let Name = document.getElementById("name").value;
    let Phone = document.getElementById("phone").value;
    let Email = document.getElementById("email").value;
    let Message = document.getElementById("message").value;

    var settings = {
      url: "https://apps.microsystc.com/MePOSApi//api/service/email/sendenquiry",

      method: "POST",

      timeout: 0,

      headers: {
        Authorization:
          "9xYfbTPs3pci8hobUkzIgKgYUaLMffd8S1llmmdCZvD6CxQ6MFt2rODavGkqq7JZ",

        "Content-Type": "application/json",
      },

      data: JSON.stringify({
        Name: Name,
        Phone: Phone,
        Email: Email,
        Message: Message,
      }),
    };

    $.ajax(settings).done(function (response) {
      $("#success-message").show();
      debugger;
      console.log(response);
    });
  }
}

function validateForm() {
  let isValid = true;

  // Hide success message initially
  document.getElementById("success-message").style.display = "none";

  // Validate Name
  const name = document.getElementById("name").value;
  if (name.trim() === "") {
    document.getElementById("name-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("name-error").style.display = "none";
  }

  // Validate Code
  // const code = document.getElementById("code").value;
  // if (code === "") {
  //   document.getElementById("code-error").style.display = "block";
  //   isValid = false;
  // } else {
  //   document.getElementById("code-error").style.display = "none";
  // }

  // Validate Phone
  const phone = document.getElementById("phone").value;
  if (phone.trim() === "") {
    document.getElementById("phone-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("phone-error").style.display = "none";
  }

  // Validate Email
  const email = document.getElementById("email").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("email-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("email-error").style.display = "none";
  }

  // Validate Message
  const message = document.getElementById("message").value;
  if (message.trim() === "") {
    document.getElementById("message-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("message-error").style.display = "none";
  }

  // Validate reCAPTCHA
  const recaptchaResponse = grecaptcha.getResponse();
  if (recaptchaResponse.length === 0) {
    document.getElementById("recaptcha-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("recaptcha-error").style.display = "none";
  }

  if (isValid) {
    document.getElementById("success-message").style.display = "block";
    // Optionally, reset the form after submission
    document.querySelector("form").reset();
    grecaptcha.reset(); // Reset reCAPTCHA widget after successful submission
  }

  return isValid;
}
