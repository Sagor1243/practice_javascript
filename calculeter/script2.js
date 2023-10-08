let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click' (e) => {
        if(e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == string){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == '=') {
            string = string.substring(o,string.length -1)

        }
        else{
            string += e.target.innerHTML;
            input.value = string
        }
    })
})