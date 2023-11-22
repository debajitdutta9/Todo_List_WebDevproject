let todolist = [];
let str=localStorage.getItem('todoList');
todolist=JSON.parse(str);
displayElement();
function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let inpdate = document.querySelector("#todo-date");
  let tododate = inpdate.value;
  let todoItem = inputElement.value;
  let todoObj = { item: todoItem, dueDate: tododate };
  todolist.push(todoObj);
  inputElement.value = "";
  inpdate.value = "";
  localStorage.setItem('todoList',JSON.stringify(todolist));
  displayElement();
}
function displayElement() {
  let containerElement = document.querySelector(".todo-container");

  let newhtml = "";
  for (let i = 0; i < todolist.length; i++) {
    let todoItem = todolist[i].item;
    let todoDate = todolist[i].dueDate;
    todoDate=dataFormat(todoDate);
    newhtml += `
   
     <span class="item-sp">${todoItem}</span>
     <span class="item-sp">${todoDate}</span>
     <button class="btn-del" onclick="deletItem(${i});displayElement();">Delete</button>  `;
  }
  containerElement.innerHTML = newhtml;
}
function dataFormat(date){
    let arr=date.split("-");
    arr.reverse();
    str=arr.join('/');
    return str;
}
function deletItem(i) {
  todolist.splice(i, 1);
  localStorage.setItem('todoList',JSON.stringify(todolist));
}