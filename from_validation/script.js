const submitBtn = document.getElementById('submitBtn');
const nameerror = document.getElementById('nameerror')
const emailerror = document.getElementById('emailerror')
const passworderror = document.getElementById('passworderror')

submitBtn.addEventListener('click',(e) => {
    e.preventDefault();

    if(validateName() && validatEmail() && validpassword() ) {
        alert("form Submited succesfully")
    }

});

function validateName() {
    let name = document.getElementById('name').value;
    if(name.length == 0) {
        nameerror.innerHTML = "Name Is Reuqired";
        nameerror.previousElementSibling.classList.add('fa-xmark')
        return false;
    }
    if(!name.match(/[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameerror.innerHTML = "Write a Valid Name";
        nameerror.previousElementSibling.classList.add('fa-xmark')
        return false
    }
    nameerror.innerHTML = "";
    nameerror.previousElementSibling.classList.add('fa-check')
    return true;
}

function validatEmail() {
    let email = document.getElementById('email').value;
    if(email.length == 0) {
        emailerror.innerHTML = "Email Is Reuqired";
        emailerror.previousElementSibling.classList.add('fa-xmark')
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailerror.innerHTML = "Write a Valid Email";
        emailerror.previousElementSibling.classList.add('fa-xmark')
        return false
    }
    emailerror.innerHTML = "";
    emailerror.previousElementSibling.classList.add('fa-check')
    return true;
}


function validpassword(){

    let password = document.getElementById('password').value;
    console.log(password);

    if(password == '') {
       
        passworderror.innerHTML = "Password Is Required X";
        passworderror.previousElementSibling.classList.add('fa-xmark')
    
        return false;
    } else if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){

        passworderror.innerHTML = "Whrite a Valid Password"
        passworderror.previousElementSibling.classList.add("fa-xmark")

        return false
    }

    passworderror.innerHTML = "";
    passworderror.previousElementSibling.classList.add('fa-check')
    return true;

}


const showpass = document.getElementById('showpass');

showpass.addEventListener('click',(event) => {

    let password = document.getElementById('password')

    if (password.type === "password") {
        password.type = "text";
      } else {
        password.type = "password";
      }

})
 
