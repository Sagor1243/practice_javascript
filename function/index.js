// var Rectangle = function(wigth,heigth) {
//     this.wigth = wigth
//     this.heigth = heigth

//     this.draw = function() {
//         console.log('i am a rectangle')
//         this.printproperties()
//         console.log(this)
//     }

//     this.printproperties = function () {
//         console.log('my Wigth is + this width')
//         console.log('my heigth is' + this.height)
//     }
// }
// var rect = new Rectangle(10,32)
// rect.draw()


// var rect = {
//     width:90,
//     height: 10,


//     draw:function() {
//         console.log('i am a rectangle')
//         console.log('My width is ' + this.width)
//         console.log('my height is ' + this.height)
//     }
// }
// rect.draw()

// rect.height = 167

//  rect.draw()

// var rect = {
//     height:10,
//     width:20,

//     draw:function() {
//         console.log('my name is sagor')
//     },

//     printproperties:function() {
//         console.log('my height is ' + this.height)
//         console.log('my wight is' + this.width )
//     } 
// }
// rect.draw()
// console.log(printproperties)


// var createRect = function(width, heigth) {
//     return {
//         width: width,
//         heigth: heigth,
//         draw: function() {
//             console.log('i am a rectranle')
//             this.printproperties()
//             console.log(this)
//         },
        
//         printproperties: function() {
//             console.log('my height is' + this.height)
//             console.log('my width is '+ this.width)
//         }
//     }
// }
// var rect1 = createRect(10,9)
// rect1.draw()

// var rect2 = createRect(23,21)
// rect2.draw()


// function myfunc(c, d) {
//     console.log(this)
//     console.log(this. a + this. b + c + d )
// } 

// myfunc.call({a:30,b:30},10,5)
// myfunc.apply({a:32,b:21},[21 ,21])

// function myfunc(c,d) {
//     console.log(this)
//     console.log(this.a +this.b + c + d)
// }
// myfunc.call({a:21,b:32},21,21)
// myfunc.apply({a:21,b:21},[21,21])

var Rectangle = function (width,heigth) {
    var position = {
        x:32,
        y:100
    }
    this.width = width
    this.height = height

    var printproperties = function () {
        console.log('my width is'+ this.width)
        console.log('my height is' + this.height)
    }.bind(this)

    this.draw = function() {
        console.log('i am a rectangle')
        printproperties()
        console.log('position:x=' + position.x + 'y=' + position.y)
    }

    
}
var Rectangle = function(width,height){
    var position = {
        x:30,
        y:32
    }
    this.width = width
    this.height = height
    var printproperties = function() {
        console.log('my width is' + this.width)
        console.log('my height is' + this.height)
    }.bind(this)
    this.draw = function() {
        console.log('i am a rectangle')
        printproperties()
        console.log('position:x' + position.x + 'y=' + position.y);
    }
}


var Rectangle = function(width,height) {
    this.width = width
    this.height = height

    var printproperties = function() {
        console.log('my width is ' + this.width)
        console.log('my height is' + this.height)
    }.bind(this)
    this.draw = function() {
        console.log('i am  a rectangle')
        printproperties()
       console.log('position.x' + position.x + 'y=' + position.y)
    }
}

 var Rectangle = function(width,height){
    var position = { 
        x : 20,
        y : 30

    }
    this.height = height
    this.width = width
    var printproperties = function() {
        console.log('my width is' + this.width)
        console.log('my height is' + this.height);
    }.bind(this)
    this.draw = function() {
        console.log('i am rectangle')
        printproperties()
        console.log('positon.x' + position.x + 'y=' + position.y);
    }
 }