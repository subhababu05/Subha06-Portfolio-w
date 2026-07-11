
document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("subjectError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    let valid = true;

    if(name === ""){
        document.getElementById("nameError").innerHTML = "Enter your name";
        valid = false;
    }

    if(email === ""){
        document.getElementById("emailError").innerHTML = "Enter your email";
        valid = false;
    }

    if(phone === ""){
        document.getElementById("phoneError").innerHTML = "Enter mobile number";
        valid = false;
    }

    if(subject === ""){
        document.getElementById("subjectError").innerHTML = "Enter subject";
        valid = false;
    }

    if(message === ""){
        document.getElementById("messageError").innerHTML = "Enter message";
        valid = false;
    }

    if(valid){
        alert("Form Submitted Successfully!");
        document.getElementById("contactForm").reset();
    }

});
