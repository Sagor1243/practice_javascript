var point = {
    x:12,
    y:21,
    z:13
}
console.log(point)
point.a = '21'
var prop = 'x'
point[prop] = 76
console.log(point)
var prop = 'z'
point[prop] = 56
console.log(point)
var prop = 'y'
point[prop]= 54
console.log(point)
point.a = undefined
console.log(point)
delete point.a
console.log(point)  