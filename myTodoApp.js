let todos=[{
    name:'get groceries',
    date:'2021-10-5',
    id:'id1'
},{
    name:'make dinner',
    date:'2021-10-6',
    id:'id2'
},{
    name:'washcar',
    date:'2021-10-7',
    id:'id3'
}]

function AddToSave(textValue,dateValue){
    let id=""+ new Date().getTime();
    todos.push({
        name:textValue,
        date:dateValue,
        id:id

    });
}

function RemoveTodo(deleteId){
    todos=todos.filter(function(todo){
        if (todo.id===deleteId){
            return false;
        }else{
            return true;
        }
    })
}

let addHere=document.getElementById('addHere');
render();


function addTodo(){
    let getText=document.getElementById('writeText');
    let textValue=getText.value;
    let getDate=document.getElementById('dueDate');
    let dateValue=getDate.value;

    
    AddToSave(textValue,dateValue);
    render();
}

function ToDelete(event){
    let DeleteBot=event.target;
    let deleteId=DeleteBot.id;
    

    RemoveTodo(deleteId)
    render();
}



function render(){
    addHere.innerHTML="";
    todos.forEach(function(todo){
        
        let todoDisplay=document.createElement('div');
        todoDisplay.innerText=todo.name+"  "+todo.date;
        todoDisplay.id="displayID"
        addHere.appendChild(todoDisplay);

        let deleteButton=document.createElement('button');
        deleteButton.innerText='Delete';
        deleteButton.id=todo.id;
        deleteButton.onclick=ToDelete;
        deleteButton.className='ChangeStyle';
        todoDisplay.appendChild(deleteButton);
    });
}