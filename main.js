const buttonT = document.getElementById('buttonTest');
buttonT.addEventListener('click' , AddTest)
  // type in your code here
function AddTest(){
  
const input = document.getElementById('input');
  const list = document.getElementById('list');
  const newItem = document.createElement('li');
  if(input ==''){
    alert ('Please enter a task')
  }
  else{
    newItem.innerText = input.value;
    list.append(newItem);
    console.log('test')

  }  
}

