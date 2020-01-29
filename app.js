

function onReady() {
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    id = id + 1;

    newToDoText.value = '' ;

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    let id = 0;

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      const deleteButton = document.createElement('button');
      deleteButton.innerText = "delete";
      deleteButton.value = id;
      id = id + 1;
      deleteButton.addEventListener('click', event => {
        toDos = toDos.filter(todo =>
            todo.id != deleteButton.value

        );
        renderTheUI();
      })

      newLi.prepend(deleteButton);
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();

}

window.onload = function() {
   // alert("The window has loaded!");
  onReady();
}
