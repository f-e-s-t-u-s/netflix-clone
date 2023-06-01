const signinForm = document.querySelector(".signinForm");
const loginForm = document.querySelector(".loginForm");
const passErr = document.querySelector(".pass_error");
const emailErr = document.querySelector(".email_error");

// const validate_email=(email_address) => {


// }


console.log(...loginForm);
loginForm.onsubmit = (e) =>{
    e.preventDefault();

const formdetails = new FormData(loginForm);
console.log(...formdetails);

//Get the email and password from form
const email_address = formdetails.get('email_address');
const password = formdetails.get('password');


//Store as objects
const loginDetails = {
    email: email_address,
    password: password
};
console.log(email_address)
console.log(password);

//Validate email and password
const emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passformat =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
if(email_address === ''){
    return emailErr.innerHTML = "Required!"
    
}else if(!email_address.match(emailformat)){
    return emailErr.innerHTML = "Invalid Email";
}else if(!password.match(passformat)){
    const invalidpass = "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character."
    return passErr.innerHTML = invalidpass;
}else{
    return passErr.innerHTML = "";
}




    
}