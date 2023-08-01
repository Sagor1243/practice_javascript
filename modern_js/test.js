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



// const searchinput = document.querySelector(".search");
// const display = document.querySelector(".result");
// const thanks = document.querySelector(".thanks");



//  function show() {
//     display.innerHTML = this.value;
//     var self = this;
//     setTimeout(function() {
//         thanks.innerHTML = `you have typed ${self.value}`;
//     },1000)
//  }

// searchinput.addEventListener("keyup",show);




// var age = 11;


// var type = age >= 18 ? "adult" : age < 10 ? "childd" : "young";


// console.log(type);

// var number = [1,2,3,4,5,6,7,8]

// var result = number.find(function(currentvalue,currendIndex,arr) {
//     return currentvalue > 5;
// })
// console.log(result);


// class student{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     test() {
//         console.log("hello");
//     }
//     exampleFunction() {
//         let array = [1,2,3];
//         array.find(function() {
//             this.test();
//         },this);
//     }
    
// }

// var Student = new student("sagor",21);

// Student.exampleFunction();

// i = 0;
// for(i = 0; i < 1000; i++) {
//     console.log(`${i} puja valo na`);
// }


// var numbers = [1,2,3,4,5,6];


// var result = numbers.findIndex((currentvalue,Index,arr) => {
//     return currentvalue > 6
// })

// console.log(result);


// var numbers = [1,2,3,4,5,6,7,8,9,10];

// var result = numbers.filter((currentvalue,index,arr) => {
//     return currentvalue > 4;
// })
     

// console.log(result);
// console.log(numbers);


// var numbers = [1,2,3,4,5]

// var result = numbers.slice(1,3);

// console.log(result);


// var numbers = [1,2,3,4,5];

// var result = numbers.splice(-1,3,10,11,12,13,14,15,16);


// console.log(numbers);
// console.log(result);


// var numbers1 = [1,2,3,4,5];
// var numbers2 = [1,2,3,4,5];
// var numbers3 = [1,2,3,4,5];
// var numbers4 = [1,2,3,4,5]

// var result = numbers1.concat(numbers2,numbers3,numbers4);

// console.log(result);


// var numbers = [1,2,3,4,5];

// numbers.push([7,8,9]);

// console.log(numbers);

// var numbers = [1,2,3,4,5];
 

// var result = numbers.map((num) => {
//     return num*num
// })

// console.log(numbers);
// console.log(result);


// var numbers = [ 180,34,5];

// var sum = numbers.reduce((prevValue,currenValue,currentIndex,arr) => {
//     return prevValue - currenValue
// },0);
// console.log(sum); 


//  const myObj = {
//     name:'javascript',
//     estd: 1995,
//     founder: "Barden Eich"
//  }


//  for(property in myObj) {
//     console.log(property);
//  }




//  const myObj = {
//     name:'javascript',
//     estd: 1995,
//     founder: "Barden Eich",
//     ranking:1
//    }

//    var keys = Object.keys(myObj);
//    var values = Object.values(myObj);
//     var entries = Object.entries(myObj);
//    console.log(values);
//    console.log(keys);
//    console.log(entries);

// function myFunc(x = 10) {
//    return x;
// }

// console.log(myFunc(20));


// function myFunc(a,...params){
//     console.log(params);
//     console.log(a);
// }

//  myFunc(4,5,6,7,8,9);




//destructuring
// const user = {
//     id:345,
//     name:"sagor",
//     age:21,

// }

// const {name} = user;

// console.log(name);


// const user = {
//     id:345,
//     name:"sagor",
//     age:21,
    // education:{
    //     degree:"masters",
    // },

// };

// const {education :{degree } = {} } = user;

//  console.log(degree);



// var number = [1,2,[300,1,200],3,4,5,6];

// var [,,[,a,b] ] = number;
// console.log(a, b);




// function modifier(strings, ...values) {
//     const m =  strings.reduce((prev,current) => {
//         return prev + current  + (values.length ? "Mr." + values.shift() : "")
//     },"")
//     return m;
// };
// var player1 = "sakib" ;
// var player2 = "Tamim";


// console.log(modifier`we have ${player1} and ${player2} in our cricket team`);



 function log(anything) {
    console.log(anything);
 }
 
//  let myArray = new Array();
//  let mySet = new Set();

//  mySet.add(5);

//  mySet.add('bangladesh').add('sagor').add('hi').clear();
//  log(mySet.has('bangladesh')) ;

//  log(mySet);


let myArray = [1,2,4];

let mySet = new Set(myArray);



for(let value of mySet) {
    log(value)
}

// log([...mySet]);