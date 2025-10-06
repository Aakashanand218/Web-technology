function validateForm(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let nameError = document.getElementById("name-error");
    let emailError = document.getElementById("email-error");
    let passwordError = document.getElementById("password-error");
    
    // Reset error messages
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    
    let valid = true;

    // Name validation
    if(name.trim() === "") {
        nameError.innerHTML = "Enter Your Name";
        valid = false;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if(email.trim() === "") {
        emailError.innerHTML = "Email is required.";
        valid = false;
    } else if(!emailPattern.test(email)) {
        emailError.innerHTML = "Enter a Valid Email id.";
        valid = false;
    }

    // Password validation
    if(password.trim() === "") {
        passwordError.innerHTML = "Password is required.";
        valid = false;
    } else if(password.length < 6) {
        passwordError.innerHTML = "Password must be at least 6 characters.";
        valid = false;
    }

    // Display data if validation passes
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
