
const toDoList= [
    {name:'Make dinner',
    dueDate: '2024-03-10'
},
{
    name:'Wash dishes',
    dueDate: '2024-03-10'
}  ];

renderToDoList();

function renderToDoList() {
    let toDoListHTML= '';

    toDoList.forEach((toDoObject,index)=>{
        const { name, dueDate }=toDoObject;
        const html= `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button  class="delButton Js-delete-button">Delete</button>
        `;
        toDoListHTML += html;
    });


document.querySelector('.Js-todolistHTML')
.innerHTML = toDoListHTML;

document.querySelectorAll('.Js-delete-button')
.forEach((deleteButton,index)=>{
deleteButton.addEventListener('click',()=>{
    toDoList.splice(index,1);
        renderToDoList();
})

})

}

document.querySelector('.Js-add-todo-button')
.addEventListener('click',()=>{
    addToDo();
}
)

function addToDo() {
    const inputElement= (document.querySelector('.Js-inputElement'));
    const name= inputElement.value;

    const duedateElement =(document.querySelector('.Js-duedateElement'));
    const duedate =duedateElement.value;


    //using shorthand property
        
    toDoList.push({name,
        duedate});
    

    inputElement.value = '' ;
    renderToDoList();
}