
const dataFetch = new IbrahimHTTP;
const listGroup = document.querySelector('.list-group')
const addTodo = document.querySelector('.button')
const task = document.querySelector('.task')

const getTodos = () => {

    dataFetch.get('https://jsonplaceholder.typicode.com/todos')

    .then((data) => {
        console.log(data);
        let output = '';

        data.forEach(todo => {
            output += `
            <li class="list-group-1">${todo.title}</li>
            `
        })
       
        listGroup.innerHTML = output;
    })
        
         
    .catch(err => console.log(err))

}

const createTodo = () => {
    console.log(task.value);
    const formData = {
        'userId':1,
        'title':task.value,
        'completed':false,
    }
    dataFetch.post('https://jsonplaceholder.typicode.com/todos',formData)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
    getTodos();
}

// getTodos();

addTodo.addEventListener('click',createTodo)
