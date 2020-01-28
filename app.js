function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const clearButton = document.getElementById('clear');
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

    toDoList.appendChild(newLi);
    newToDoText.value = '';
  });
  
  clearButton.addEventListener('click', (event) => {
    // console.log(event)
    let everythingChecked = document.querySelectorAll('input[type=checkbox]:checked')
    // console.log(everythingChecked)
    for (var i = 0; i<everythingChecked.length; i++){
      let textBox = everythingChecked[i]
      textBox.parentNode.remove()
    }
  })

  console.log(clearButton)


}


window.onload = function() {
   alert("The window has loaded!");
  onReady();
}
