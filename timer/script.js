const time = document.getElementById('time');
const timeformate = document.getElementById('timedormate')

document.addEventListener('DOMContentLoaded',() => {
    setInterval(showTime,1000);
});

const showTime =() => {
    let date = new Date();

    let hr = date.getHours() % 12 || 12;
    let min = date.getMinutes();
    let secs = date.getSeconds();


    hr = hr<10 ? `0${hr}` : hr;
    min = min<10 ? `0${min}` : min;
    secs = secs<10 ? `0${secs}` : secs;

time.innerHTML = `${hr} : ${min} : ${secs}`

timeformate.innerHTML =  hr> 12 ? "pM" : 'AM';
}