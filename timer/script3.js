document.addEventListener('DOMContentLoaded' ,() {
    setInterval(showTime, 1000)
})

const showTime = () => {
    let date = new Date()

    let hr = date.getHours();
    let min = date.getMinutes();
    let secs = date.getSeconds();

    time.innerHTML = `${hr} : ${min} : ${secs}`

    timeformate.innerHTML = hr > 12 ? 'pm' : 'am' ;
}