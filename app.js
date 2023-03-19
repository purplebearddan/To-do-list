// form elements
const newToDoForm = document.querySelector('#newToDoForm')

// todo list
const toDoListContainer = document.querySelector('#toDoListContainer')

// completed todos
const completeToDoListContainer = document.querySelector(
    '#completeToDoListContainer',
)

// starter to do list
let toDos = []

// each todo data model
// const eachToDo = {
//     id: 0,
//     name: 'Shopping',
//     complete: false,
// }

// create each item as a DOM Object
const toDoElement = (todo) => {
    // div class="toDoItem" id="toDo-${todo.id}-Wrapper">
    const toDoItemWrapper = document.createElement('div')
    toDoItemWrapper.classList.add('toDoItem')
    toDoItemWrapper.setAttribute('id', `toDo-${todo.id}-Wrapper`)

    //   div>input type="checkbox" name="completeToDoItemCheckbox-${todo.id}" id="${todo.id}CompleteCheckbox">
    const checkboxWrapper = document.createElement('div')
    const checkboxElement = document.createElement('input')
    checkboxElement.setAttribute('type', 'checkbox')
    checkboxElement.setAttribute('name', `completeToDoItemCheckbox-${todo.id}`)
    checkboxElement.setAttribute('id', `${todo.id}CompleteCheckbox`)
    if (todo.complete) {
        checkboxElement.setAttribute('checked', true)
    }
    checkboxElement.addEventListener('change', () => completeToDo(todo))
    checkboxWrapper.appendChild(checkboxElement)

    //   div class="toDoLabel">${todo.name}
    const toDoLabel = document.createElement('div')
    toDoLabel.setAttribute('contenteditable', '')
    toDoLabel.classList.add('toDoLabel')
    toDoLabel.addEventListener('blur', () =>
        editToDo(todo, toDoLabel.textContent),
    )
    toDoLabel.textContent = todo.name

    //   div>button class="deleteButton" ❌
    const deleteButtonWrapper = document.createElement('div')
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('deleteButton')
    deleteButton.textContent = '❌'
    deleteButton.addEventListener('click', () => deleteToDo(todo))

    deleteButtonWrapper.appendChild(deleteButton)

    toDoItemWrapper.appendChild(checkboxWrapper)
    toDoItemWrapper.appendChild(toDoLabel)
    toDoItemWrapper.appendChild(deleteButtonWrapper)

    return toDoItemWrapper
}
const renderToDos = () => {
    const toDoListContainer = document.querySelector('#toDoListContainer')
    const completeToDoListContainer = document.querySelector(
        '#completeToDoListContainer',
    )

    toDoListContainer.innerHTML = ''
    toDos
        .filter((todo) => !todo.complete)
        .map((todo) => {
            toDoListContainer.appendChild(toDoElement(todo))
        })

    completeToDoListContainer.innerHTML = ''
    toDos
        .filter((todo) => todo.complete)
        .map((todo) => {
            completeToDoListContainer.appendChild(toDoElement(todo))
        })
}

const completeToDo = (todo) => {
    const checkedToDo = { ...todo, complete: !todo.complete }

    toDos = [...toDos.filter((item) => item != todo), checkedToDo]

    renderToDos()
}

const editToDo = (todo, newContent) => {
    const editedToDo = { ...todo, name: newContent }

    toDos = [editedToDo, ...toDos.filter((item) => item != todo)]

    renderToDos()
}

const deleteToDo = (todo) => {
    toDos = toDos.filter((item) => item != todo)
    renderToDos()
}

const handleFormSubmission = (event) => {
    // form elements
    const newToDoInput = document.querySelector('#newToDoInput')

    // stop page refresh
    event.preventDefault()

    // create a unique id
    const newToDoId = toDos.length | 0
    const newToDo = {
        id: newToDoId,
        name: newToDoInput.value,
        complete: false,
    }

    toDos = [newToDo, ...toDos]

    renderToDos()
}

newToDoForm.addEventListener('submit', handleFormSubmission)
