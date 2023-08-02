function somthing(greet, name) {
    function getFristName() {
        if (name) {
            return name.split('')[0]
        } else {
            return ''
        }
    }
     var message = greet + '' + getFristName()
     console.log(message)
}

somthing('good morning')