const submitBtn = document.getElementById('submitBtn');
const nameerror = document.getElementById('nameerror')

submitBtn.addEventListener('click',(e) => {
    e.preventDefault();


    if(validaateName() == true) {
        alert("form Submited succesfully")
    }
});

function validaateName() {
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
    nameerror.previousElementSibling.classList.add('fa-xmark')
    return true;
}


