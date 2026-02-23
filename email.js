document.querySelectorAll(".email-submit").forEach((form) => {
    form.addEventListener("submit", async (event) => {
        event.preventDefault(); 
        const success = validateInputs(form);

        const status = form.querySelector(".email-status");
        const status_style = getComputedStyle(status);
        const firstNameInput = form.querySelector('input[data-field="firstName"]');
        const lastNameInput = form.querySelector('input[data-field="lastName"]');
        const emailInput = form.querySelector('input[data-field="email"]');

        const post_request_data = {
            name: firstNameInput.value.trim().concat(lastNameInput.value.trim()),
            email: emailInput.value.trim()
        };

        try {
            console.log("Sending message");
            
            const response = await fetch("https://mudfoot.doc.stu.mmu.ac.uk/ash/api/mailinglist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(post_request_data) 
            });

            const result = await response.text();
            console.log(result);

            console.log("respond received!");

            // if (response.status == 200) { 
            //     status.innerText = "Successful post";
            //     status.style.color = status_style.getPropertyValue("--success-colour");
            //     return;
            // }
            //
            // status.innerText = response.errors;
            // status.style.color = status_style.getPropertyValue("--failure-colour");
            //
        } catch (err) {
            console.log("Failed: ", err);
            //
            // status.innerText = err;
            // status.style.color = status_style.getPropertyValue("--failure-colour");
        }

    })
});

function validateInputs(form) { 
    const status = form.querySelector(".email-status");
    const status_style = getComputedStyle(status);

    const firstNameInput = form.querySelector('input[data-field="firstName"]');
    const lastNameInput = form.querySelector('input[data-field="lastName"]');
    const emailInput = form.querySelector('input[data-field="email"]');

    let errors = [];

    ([firstNameInput, lastNameInput, emailInput]).forEach((item) => {
        item.classList.remove("form-invalid");
    });

    const name_regex = /^[A-Z]{1}[a-z]+$/;
    // https://emailregex.com/index.html
    const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!firstNameInput.value.trim().match(name_regex)) {
        errors.push("Please enter a First Name");
        firstNameInput.classList.add("form-invalid");
    }

    if (!lastNameInput.value.trim().match(name_regex)) {
        errors.push("Please enter a Surname");
        lastNameInput.classList.add("form-invalid");
    }

    if (!emailInput.value.trim().match(email_regex)) {
        errors.push("Please enter a valid email");
        emailInput.classList.add("form-invalid");
    }

    status.innerText = errors.length ? errors.join("\n") : "Form submitted successfully!";
    status.style.color = errors.length ? status_style.getPropertyValue("--failure-colour") : status_style.getPropertyValue("--success-colour");

    return errors.length ? false : true;
}
