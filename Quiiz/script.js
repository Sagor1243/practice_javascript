const questions = [{
    'que' : 'Which Of the following is a markup language',
    'a':'HTML',
    'b' :'Css',
    'c':'javascript',
    'd': 'php',
    'correct':'a'
},
{
    'que': 'What year was Javascript Launched',
    'a': '1996',
    'b':'1995',
    'c':'1994',
    'd':'none of the above',
    'correct':'b'
},
{
    'que':"what does css stands for? ",
    'a':'sshsjhsjhs',
    'b':'bkagkgkag',
    'c':'jghaiugiueue',
    'd':'sdbhsdghsdg',
    'correct':'b'
}

]
 let index = 0;
 let total = questions.length;
 let right = 0;
 wrong = 0;
 const quesBox = document.getElementById('quesBox')
 const optionInput = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total) {
        return endQuiz()
    }
    reset()
const data = questions[index]
console.log(data);
    quesBox.innerText = `${index+1} ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a
    optionInput[1].nextElementSibling.innerText = data.b
    optionInput[2].nextElementSibling.innerText = data.c
    optionInput[3].nextElementSibling.innerText = data.d


}

const submitQuiz=() => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans === data.correct) {
        right++;
    } else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;

}
const getAnswer = () => {
    optionInput.forEach(
        (input) => {
            if(input.checked){
            return input.value;
            }  
        }
    )
}
const reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
    }
    const endQuiz = () => {
        document.getElementById('.box').innerHTML = `
        <h3> thank you for playing Quiz </h3>
        <h2> ${right } / ${total} </h2> `
    }
 
loadQuestion();   