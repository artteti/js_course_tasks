let todoInput //miejsce gdzie urzytkownic wpisuje tresc zadania
let errorInfo // info o braku zadan / koniecznosci wpisania tekstu
let addBtn // przycisk ADD - dodaje nowe elementy do listy
let ulList // lista zadan, tagi UL
let newTodo

let popup // popup
let popupInfo // tekst w popapie jak sie doda pusty tekst
let todoToEdit // edytowany Todo
let popupInput // input w popupie
let popupAddBtn // przycisk "zatwierdz" w popupie
let popupCloseBtn // przycisk "anuluj" w popupie

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')

    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')
}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTask)
    ulList.addEventListener('click',checkClick)
    popupCloseBtn.addEventListener('click',closePopup)
    popupAddBtn.addEventListener('click',changeTodotext)
    todoInput.addEventListener('keyup',enterKeyCheck)

}

const addNewTask = () => {
    if (todoInput.value !== ''){
        newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
        createToolsArea()
        ulList.append(newTodo)
        todoInput.value = ''
        errorInfo.textContent = ''

    }else{
        errorInfo.textContent = 'Wpisz treść zadania!'
    }
}

const createToolsArea = () => {
    const toolsPanel = document.createElement('div')
    toolsPanel.classList.add('tools')
    newTodo.append(toolsPanel)

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent = 'EDIT'

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

    toolsPanel.append(completeBtn,editBtn,deleteBtn)
}

const checkClick = (e) => {
    if(e.target.matches('.complete')){
        e.target.closest('li').classList.toggle('completed')
        e.target.classList.toggle('completed')
    } else if(e.target.matches('.edit')){
        editTodo(e)
    }else if(e.target.matches('.delete')){
        deleteTodo(e)
    }
    
    
}
const editTodo = (e) => {
    todoToEdit = e.target.closest('li')
    popupInput.value = todoToEdit.firstChild.textContent;
    popup.style.display= 'flex'
}
const closePopup = () => {
    popup.style.display= 'none'
    popupInfo.textContent = ''
}

const changeTodotext = () => {
    if (popupInput.value != ''){
        todoToEdit.firstChild.textContent = popupInput.value
        popup.style.display= 'none'
        popupInfo.textContent = ''
    }else{
        popupInfo.textContent = 'Musisz podać jakąś treść!'
    }
}

const deleteTodo = e => {
    e.target.closest('li').remove()

    const allTodos = ulList.querySelectorAll('li')
    if(allTodos.length === 0){
        errorInfo.textContent = 'Brak zadan na liście.'
    }else{
        errorInfo.textContent = ''
    }
}

const enterKeyCheck = e => {
    if (e.key === 'Enter'){
        addNewTask()
    }
}
document.addEventListener('DOMContentLoaded',main)

