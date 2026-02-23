document.querySelectorAll(".email-submit").forEach((form) => {
    form.addEventListener("submit", async (event) => {
        event.preventDefault(); 

        const status = form.querySelector(".email-status");
        const status_style = getComputedStyle(status);
        
        const first_name = form.querySelector('input[data-field="firstName"]');
        const last_name = form.querySelector('input[data-field="lastName"]');
        const email = form.querySelector('input[data-field="email"]');

        const any_errors = validate_input_for_email_signup(first_name, last_name, email);

        if (any_errors.length == 0) {
            status.innerText = "Please wait.."
            status.style.color = status_style.getPropertyValue("--success-colour");
        } else {
            status.innerText = any_errors.map((err) => err.trim()).join("\n");
            status.style.color = status_style.getPropertyValue("--failure-colour");

            return;
        }

        const post_request_data = {
            name: first_name.value.trim().concat(last_name.value.trim()),
            email: email.value.trim()
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

            if (response.status == 400) {
                status.innerText = "Your inputs were rejected, please try again";
                status.style.color = status_style.getPropertyValue("--failure-colour");
                return;
            }

            if (response.ok) {
                console.log(response.status)

                const data = await response.json();

                console.log(JSON.stringify(data));

                status.innerText = data.message;
                status.style.color = status_style.getPropertyValue("--success-colour");
            }

            return;
        } catch (err) {
            console.log("Failed: ", err);
        }
    })
});

function validate_input_for_email_signup(first_name, last_name, email) {
    let errors = [];

    ([first_name, last_name, email]).forEach((item) => {
        item.classList.remove("form-invalid");
    });

    // TODO: remove this eventually, it was just for testing regexs
    const name_regex = /^[A-Z]{1}[a-z]+$/;
    // https://emailregex.com/index.html
    const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!first_name.value.trim().match(name_regex)) {
        errors.push("Please enter a First Name");
        first_name.classList.add("form-invalid");
    }

    if (!last_name.value.trim().match(name_regex)) {
        errors.push("Please enter a Surname");
        last_name.classList.add("form-invalid");
    }

    if (!email.value.trim().match(email_regex)) {
        errors.push("Please enter a valid email");
        email.classList.add("form-invalid");
    }

    return errors;
}
