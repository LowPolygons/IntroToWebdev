document.querySelectorAll(".email-submit").forEach((form) => {
  const status = form.querySelector(".email-status");
  const status_style = getComputedStyle(status);

  form.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();

    const firstNameInput = form.querySelector('input[data-field="firstName"]');
    const lastNameInput = form.querySelector('input[data-field="lastName"]');
    const emailInput = form.querySelector('input[data-field="email"]');
    
    let errors = [];

    ([firstNameInput, lastNameInput, emailInput]).forEach((item) => {
        item.classList.remove("form-invalid");
    });

    if (!firstNameInput.value.trim()) {
      errors.push("Please enter a First Name");
      firstNameInput.classList.add("form-invalid");
    }

    if (!lastNameInput.value.trim()) {
      errors.push("Please enter a Surname");
      lastNameInput.classList.add("form-invalid");
    }

    if (!emailInput.value.trim() || !emailInput.value.includes("@")) {
      errors.push("Please enter a valid email");
      emailInput.classList.add("form-invalid");
    }

    status.innerText = errors.length ? errors.join("\n") : "Form submitted successfully!";
    status.style.color = errors.length ? status_style.getPropertyValue("--failure-colour") : status_style.getPropertyValue("--success-colour");
  });
});