function validateForm(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Check if any field is empty using trim()
    if(name.trim() === "" || email.trim() === "" || password.trim() === "") {
        alert("Please fill in all fields bro");
        return false;
    }

    let nameError = document.getElementById("name-error");
    let emailError = document.getElementById("email-error");
    let passwordError = document.getElementById("password-error");
    
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    
    let valid = true;

    if(name.trim() === "") {
        nameError.innerHTML = "Enter Your Name";
        valid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if(email.trim() === "") {
        emailError.innerHTML = "Email is required.";
        valid = false;
    } else if(!emailPattern.test(email)) {
        emailError.innerHTML = "Enter a Valid Email id.";
        valid = false;
    }

    if(password.trim() === "") {
        passwordError.innerHTML = "Password is required.";
        valid = false;
    } else if(password.length < 6) {
        passwordError.innerHTML = "Password must be at least 6 characters.";
        valid = false;
    }

    if(valid) {
        console.log("Form submitted successfully");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
        alert(`Registration Successful!\nName: ${name}\nEmail: ${email}\nPassword: ${password}`);
        document.getElementById("registrationForm").reset();
    }

    return false;
}
