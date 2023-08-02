var arr = [ 1,2,3,4,5,6,7,76,43,22,11,]
var filterdArr = arr.filter (function (value){
    return value < 2
})
console.log(filterdArr)


function myFilter(arr,cb) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            newArr.push(arr[i])
        } 

    }
    return newArr
} 
console.log(myFilter(arr,function (value){
    return value % 2 === 1
}))
console.log(myFilter(arr,function (value) {
    return value > 3
}))