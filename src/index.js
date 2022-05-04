document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //can set form to a variable
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    // const newTask = document.getElementById('new-task-description');
    toDo(e.target['new-task-description'].value);
    // console.log(e.target)
    document.querySelector('form').reset();
  });
});


//This will take the string and create the element, plus append 
function toDo(todo){
  //create p element
  const p = document.createElement('p');
  //create btn 
  const btn = document.createElement('button')
  // btn.addEventListener('click', (e) => btn.remove())
  btn.addEventListener('click', deleteButton)
  //btn text will = x
  btn.textContent = 'x'
  //p textcontext will be equal to your todo
  p.textContent = todo;
  p.appendChild(btn);
  // append to to do list
  document.querySelector('#tasks').appendChild(p);
}

function deleteButton(e){
  e.target.parentNode.remove()
}

