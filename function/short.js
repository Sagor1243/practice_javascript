var persons = [
    {
        name: 'A',
        age: 32
    },
    {
        name:'B',
        age:21
    },{
        name : 'C',
        age : 32
    },{
        name : 'D',
        age : 43
    }

]
var arr =   [1,2,4,0,9,8,7,6,5,4,-1]


arr.sort(function (a, b) {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    } else {
        return 0
    }
})
console.log(arr)
persons.sort(function (a,b){
    if(a.age > b.age) {
        return 1
    } else if (a.age < b.age) {
        return -1
    } else {
        return 0
    }
})
console.log(persons)



var rest2 = arr.every (function (value) {
    return value % 2 === 1
})
console.log(rest2)
var rest3 = arr.some(function(value) {
    return value % 2 === 0
}) 
console.log(rest3)
var rest4 = arr.every(function(value){
    return value <= 0
})
console.log(rest4)

var rest1 = arr.every(function (value){
    return value % 2 === 1
})
console.log(rest1)