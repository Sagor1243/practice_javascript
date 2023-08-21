const startbtn = document.querySelector('.start-btn')
const popupinfo = document.querySelector('.popuop-info')
const exitbtn = document.querySelector('.exit-btn')
const main = document.querySelector('.main')
  
startbtn.onclick = () => {
    popupinfo.classList.add('active')
    main.classList.add('active')

}
exitbtn.onclick = () => {
    popupinfo.classList.remove('active')
    main.classList.remove('active')
} 