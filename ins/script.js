var isstatus = document.querySelector('h5')
var addfriend = document.querySelector('#add')
 var click = 0

addfriend.addEventListener("click",function() {
    if(click == 0 ){
        isstatus.innerHTML = "Friend"
        isstatus.style.color = "green"
        addfriend.innerHTML = "remove Friend"
        isstatus.style.fontSize = "18px"
        click = 1
    } else{
        isstatus.innerHTML = "Stranger"
        isstatus.style.color = "red"
        isstatus.style.fontSize = "18px"
        addfriend.innerHTML = "Add friend"
        click = 0
    }

})
 