const TheTODOS = [
    { content: 'Sample todo', completed: false },
    { content: 'Sample completed todo', completed: true },
]

function saveTodosToStore(todos) {
    if (typeof (Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        return localStorage.setItem("theTodos", JSON.stringify(todos));
    } else {
        // Sorry! No Web Storage support..
        alert('Cant store your todos....')
    }
}


function getTodosFromStore() {
    if (typeof (Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        return JSON.parse(localStorage.getItem("theTodos") || '[]');
    } else {
        // Sorry! No Web Storage support..
        alert('Cant read')
        return []
    }
}