function get() {
    fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
    .then(res => console.log(res))
    .then(jsonData => {
        console.log(jsonData)
    })
}

function post(){
    const data = {
        title:'test',
        userId:1
    }

    fetch('https://jsonplaceholder.typicode.com/todos', {
        method:'post',
        body: JSON.stringify(data),
        headers:{
            "Content-type": "application/json; charset = UTF-8"
        }
    })
    .then(res => res.json())
    .then(jsonData => {
        console.log(jsonData)
    })
}

post();


