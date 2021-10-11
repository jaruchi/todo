function getToDoItem(text) {
    const divTag = document.createElement('div');
    divTag.classList = "todo-item ";

    addCheckBox(divTag);

    const spanTag = document.createElement('span');
    spanTag.innerText = text;
    divTag.appendChild(spanTag);

    addDeleteButton(divTag);

    return divTag;
}

function addDeleteButton(divTag) {
    const deleteButton = document.createElement('button');
    const iTag = document.createElement('i');
    iTag.setAttribute('class', 'glyphicon glyphicon-trash');
    deleteButton.appendChild(iTag);
    divTag.appendChild(deleteButton);

    deleteButton.addEventListener('click', function (e) {
        divTag.remove();
    })

}

function addCheckBox(divTag) {
    const inputTag = document.createElement('input');
    inputTag.setAttribute("type", "checkbox");
    divTag.appendChild(inputTag);

    inputTag.addEventListener('change', handleInputChangeEvent)
}

function toggleCheckBoxStyle(inputTag, divTag) {
    if (inputTag.checked)
        divTag.classList.add('checked');
    else
        divTag.classList.remove('checked');
}

function handleInputChangeEvent(e) {
    const inputTag = e.target;
    const divTag = inputTag.parentNode;
    toggleCheckBoxStyle(inputTag, divTag);
}

function addItems() {
    const todos = document.querySelector(".todos");
    const textBox = document.querySelector("#new-todo");
    const todoItem = getToDoItem(textBox.value);

    
    todos.appendChild(todoItem);
    textBox.value = "";
}
function clearBox() {
    const textBox = document.querySelector("#new-todo");
    textBox.value = "";
}
function initializeSubmitButton() {
    document.querySelector("#new-todo").onclick = clearBox;
    document.querySelector('#generate-todo').onclick = addItems;

    const textBox = document.querySelector("#new-todo");
    const todoItem = getToDoItem(textBox.value);

    textBox.addEventListener("keypress", function (event) {
 
        // Checking if key pressed is ENTER or not
        // if the key pressed is ENTER
        // click listener on button is called
        if (event.keyCode == 13) {
            addItems();
        }
    });
}