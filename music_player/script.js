const progress = document.getElementById("progress")
const song = document.getElementById("song")
const ctrlicon = document.getElementById("ctrlicon")

song.onloadedmetadata = function() {
    progress.max = song.durration;
    progress.value = song.currentTime;
}

function playPause() {
    if(ctrlicon.classList.contains("fa-pause")){
        song.pause();
        ctrlicon.classList.remove("fa-pause");
        ctrlicon.classList.add("fa-play")
    } else{
        song.play();
        ctrlicon.classList.add("fa-pause")
        ctrlicon.classList.remove("fa-play")
    }
}

if(song.play()){
    setInterval(() => {
        progress.value = song.durration
    })
}

progress.onchange = function() {
    song.play();
    song.currentTime = progress.value;
    ctrlicon.classList.add("fa-pause")
    ctrlicon.classList.remove("fa-play")
}