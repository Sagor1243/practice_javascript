const startbtn = document.querySelector('.start-btn')
const popupinfo = document.querySelector('.popuop-info')
const exitbtn = document.querySelector('.exit-btn')
const main = document.querySelector('.main');
const quizSection = document.querySelector('quiz-section')
const continueBtn = document.querySelector('continue-btn')
  
startbtn.onclick = () => {
    popupinfo.classList.add('active')
    main.classList.add('active')

}
exitbtn.onclick = () => {
    popupinfo.classList.remove('active')
    main.classList.remove('active')
} 
continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popupinfo.classList.remove('active')
    main.classList.remove('active')
}