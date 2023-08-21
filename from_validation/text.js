submitBtn.addEventListener('click' ,(e) => {
    e.preventDefault();
    
})


function validateName() {
let name = document.getElementById('name').value;
    if(name.length == 0) {
        nameerror.innerHTML = "ji code vul";
        nameerror.innerHTML.previousELementstibling.classList.add('fa-xmark')
        return false;

    }
    if(!name.match(/[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameerror.innerHTML = "name is requires";
        nameerror.previousElementSibling.classList.add('fa-xmark')
        return false;
    }
    nameerror.innerHTML = ""
    nameerror.previousElementSibling.classList.add('fa-check')
    return true;
}