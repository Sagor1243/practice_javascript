// function number() {
//     return 10;
// }
// console.log(number());


// let number = () => 10;
// console.log(number());


// let number = () => return 10; => kaj korbe na,,


// let number = (a , b) => a + b;

// console.log(number(10,20));


// let number = (a,b) => {
//       return a+b;
// }

// console.log(number(10,20));



// var javascript = {
//     name : "javascript",
//     libraries:["React","vue js","Angular js"],
//     printLibraries:function() {
//         var self = this;
//         this.libraries.forEach(function(a){
//             console.log(`${self.name} loves ${a}`);
//         })
//     }
// }

// javascript.printLibraries();


// var javascript = {
//     name: "javscript",
//     libraries:["React","vue js","Angular js"],
//     printLibraries:function() {
//      this.libraries.forEach((a) => { console.log(`${this.name} loves ${a} ` ) } )
            
//         },
//     };
 

// javascript.printLibraries();



const searchinput = document.querySelector(".search");
const display = document.querySelector(".result");
const thanks = document.querySelector(".thanks");



 function show() {
    display.innerHTML = this.value;
    var self = this;
    setTimeout(function() {
        thanks.innerHTML = `you have typed ${self.value}`;
    },1000)
 }

searchinput.addEventListener("keyup",show);