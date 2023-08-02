var arr = [1,2,3,4,5,6,7,89,9]
function myFind(arr,cb) {
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return i
        }
    }
} 
var result = myFind(arr,function(value) {
    return value === 9
}) 

console.log(result)
