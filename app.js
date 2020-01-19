function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  // console.log(addToDoForm, newToDoText, toDoList)
  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let title = newToDoText.value;
    console.log(title);
    let newLi = document.createElement('li');
    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox"

    newLi.textContent = title;
    newLi.appendChild(checkbox);
    console.log(newLi);
    toDoList.appendChild(newLi);
    newToDoText.value = '';

    
  });
}

window.onload = function() {
   // alert("The window has loaded!");
  onReady();
}
