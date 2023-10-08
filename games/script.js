//game consttans and valiablee
let inputDir = {x:0, y:0};
let foodSound = new Audio('food.mp3')
let gameOverSound = new Audio('gameover.mp3')
let moveSound = new Audio('move.mp3')
let musicSound = new Audio('music.mp3')
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {x: 13, y: 15}
]
  food = {x:6,y:7};
//game function

function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
    
}

function isCollide(sarr) {
    return false;
}

function gameEngine() {
    //part 1 : updating the snake array
if(isCollide(snakeArr)) {
    gameOverSound.play();
    musicSound.pause();
    inputDir = {x:0, y:0};
    alert("Game Over .Press any key to play again");
    snakeArr ={x: 13, y: 15};
    musicSound.play();
    score = 0;
}

if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
      snakeArr.unshift({x:snakeArr[0].x + inputDir.x ,y:snakeArr[0].y + inputDir.y})
      let a = 2;
      let b = 16;
      food  = {x: Math.round(a+(b-a)* Math.random()), y: Math.round(a+(b-a)* Math.random())}
}
//moving snake

for ( let i = snakeArr.length -2; i>=0; i--) {
    //  const element = array[i];
     snakeArr[i + 1] = {...snakeArr[i]}
}
snakeArr[0].x += inputDir.x;
snakeArr[0].y += inputDir.y;

    //display the snake and food
   board.innerHTML = "";
   snakeArr.forEach ((e,index) => {
    snakeELement = document.createElement('div');
    snakeELement.style.girdColumStart = e.y;
    snakeELement.style.girdColumStart = e.x;
    // snakeELement.classList.add('snake')
    if(index === 0) {
        snakeELement.classList.add('head');
    } else{
        snakeELement.classList.add('snake')
    }
    
    board.appendChild(snakeELement);
   });

   //display the food
   foodElement = document.createElement('div');
   foodElement.style.girdColumStart = food.y;
   foodElement.style.girdColumStart = food.x;
   foodElement.classList.add('food')

   board.appendChild(foodElement)
    //part 2 : display the snake and food
}










//main login start here
window.requestAnimationFrame(main);
window.addEventListener('keydown',e => {
    inputDir = {x:0, y:1}
    moveSound.play();
    switch(e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
             break;
        case "ArrowDown":
        console.log("ArrowDown");
        inputDir.x = 0;
        inputDir.y = 1;

        break;
        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;
            case "ArrowRight":
                console.log("ArrowRight");
                inputDir.x = 1;
                inputDir.y = 0;
                default:
                break;    

    }
})