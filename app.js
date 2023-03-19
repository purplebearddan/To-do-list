const form = document.querySelector("form");
const input = document.querySelector("#item");
const list = document.querySelector("#list");

form.addEventListener("submit", (e) => {
  //stop refreshing the page from the form submitting
  e.preventDefault();
  //get the input value
  const task = input.value;
  

  const todoList = document.createElement("div");
  todoList.className = "todo-list";

  const taskContentElement = document.createElement("div");
  taskContentElement.className = "content";
  todoList.appendChild(taskContentElement);

  //create checkbox for completedtask
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("value", task);
  checkbox.className = "todoItem";
  checkbox.addEventListener('change', completeItem)
  taskContentElement.appendChild(checkbox);

  //create input
  const taskInput = document.createElement("input");
  taskInput.className = "text";
  taskInput.setAttribute("type", "text");
  taskInput.setAttribute("value", task);
  taskInput.setAttribute("readonly", "readonly");
  taskContentElement.appendChild(taskInput);

  //edit button
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.className = "edit";
  editBtn.addEventListener('click',editItem)
  taskContentElement.appendChild(editBtn);

    //complete button
   const completeBtn = document.createElement("button");
  completeBtn.innerText = "Complete";
  completeBtn.className = "complete";
  completeBtn.addEventListener("click", completeItem3);
  taskContentElement.appendChild(completeBtn);

  //delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  deleteBtn.addEventListener("click", removeItem);
  taskContentElement.appendChild(deleteBtn);

  input.value = "";

  list.appendChild(todoList);
});


//complete event
function completeItem(event) {
  let item = this.parentNode;
  
    let parent = item.parentNode;
    let id = item.id;
    console.log(id)
  
  if(event.target.checked){
    console.log('text')
    

    let target =
    className === "todo-list"
      ? document.getElementsByClassName("todo-list")
      : document.getElementsByClassName("list-completed");
     
     parent.removeChild(item);
    
   
  }

}

//complete event2
function completeItem2() {
  
  let item = this.parentNode.parentNode;
  
  let parent = item.parentNode;
  let className = parent.className;
  
  
  console.log(parent)
  console.log(item)
  
  console.log(className)
  // check if the item should go in the completed or if it should be re-added to todo by using  operator
  let target =
    className === "todo-list"
      ? document.getElementsByClassName("todo-list")
      : document.getElementsByClassName("list-completed");
  
  parent.removeChild(item);

  
  console.log(target)

}



//EDITITEM EVENTLISTENER
function editItem (event){
  const button = event.target
  
  let parent = this.parentNode
  item=parent.children[1]
  
  if(button.innerText == 'Edit'){
    button.innerText = "Save";
    item.removeAttribute("readonly")
    item.focus()
  }else {
    button.innerText = "Edit"
    item.setAttribute("readonly", "readonly")
  }
}


//REMOVEItEM EVENTLISTENER
function removeItem() {
  let item = this.parentNode;
  console.log(item.className)
  //grab the div
  let parent = item.parentNode;
  console.log(parent.className)
   //remove child
  parent.removeChild(item);
}


