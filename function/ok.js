 var Rectangle = function(wight,height) {
    this.wight = wight
    this.height = height
    this.draw = function() {
        console.log('i am a rectangle')
       this.printproperties()
        console.log(this)
    }
    printproperties = function () {
        console.log('my wight is ' + this.width)
        conaole.log('my height is' + this.height)

    }
}

var rect = new Rectangle(45, 30)
rect.draw()
rect.position = {
    x: 456,
    y: -123
}
console.log(rect.position)