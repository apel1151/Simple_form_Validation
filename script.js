const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('useremail');
const password = document.getElementById('userpass');
const passwordcheck = document.getElementById('userpasscheck');
const successMsg = document.getElementById('success-msg');


form.addEventListener('submit',  (e) =>{
    e.preventDefault();

    checkInput();
    
})

function checkInput() {
    // get values from the inputs

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordcheckValue = passwordcheck.value.trim();


    if(usernameValue  ===""){
        //show error
        // add error class

        setErrorFor(username, "Username cannot be blank");
    }else{
        //add success class
        setSuccessFor(username);
    }

    if(emailValue === ""){
        setErrorFor(email, "Email cannot be blank");
    }else if(!isEmail(emailValue)){
        setErrorFor(email, "Email is not valid.");
    }else{
        setSuccessFor(email);
    }

    if(passwordValue === ""){
        setErrorFor(password, "Password cannot be blank");
    }else{
        setSuccessFor(password);
    }
    if(passwordcheckValue === ""){
        setErrorFor(passwordcheck, "Password cannot be blank");
    }else if(passwordValue !== passwordcheckValue){
            setErrorFor(passwordcheck, "Password does not match");
    }
    else{
        setSuccessFor(passwordcheck);
    }

    if(usernameValue !=="" && emailValue!=="" && passwordValue!=="" && passwordcheckValue!=="" && passwordValue === passwordcheckValue){
        
        successMsg.innerText = "You account has created successfully";
        document.querySelector('.success-cont .fa-check-circle').style.visibility = "visible";
 
    }else{
        successMsg.innerText = "Sorry. Something is wrong"
    }

    
    


}

function setErrorFor(input, message) {
    const  formControl = input.parentElement;  //formm-control div
    const  small = formControl.querySelector('small');

    // add  error message inside  small 
    small.innerText = message;

    //   add error class

    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isEmail(email){
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,4}$/.test(email);
}