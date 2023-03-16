const buttonT = document.getElementById('buttonTest');
buttonT.addEventListener('click' , AddTest)
  // type in your code here
function AddTest(){
  
  const input = document.getElementById('input');
  const list = document.getElementById('list');
  const newItem = document.createElement('li');
  

  //Check box
  const checkBox = document.createElement('input');
  checkbox.setAttribute("type", "checkbox");

  //addinput which is edit
  const editInputBox = document.createElement('input')
  editInputBox.type = 'text'


  //edit button
  const editButton = document.createElement('button');
  editButton.innerText = "edit";
  editButton.className = 'edit';


  //delete button
  const deleteButton = document.createElement('button');
  deleteButton.innerText = "Delete";
  deleteButton.className = 'delete';




  if(input ==''){
    alert ('Please enter a task')
  }
  else{
    newItem.innerText = input.value;
    //editInputBox.innerText =input.value;
    list.append(checkBox)
    list.append(newItem);
    list.append(editInputBox)
    list.append(editButton)
    list.append(deleteButton)
    

  }  
}



