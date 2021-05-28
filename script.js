// Capturando elementos do DOM
const inputTask = document.querySelector('.inputContainer input')
const btnAdd = document.querySelector('.btnAdd')
const listContainer = document.querySelector('.listContainer')

// Criando ArrayList
let list = []

//Adicionando Tarefas
btnAdd.onclick = () => {
    if (inputTask.value.trim() != 0) {
        list.push(inputTask.value)
        showTasks()
    } else {
        alert("Digite uma tarefa")
    }
}

// Renderizar as Tarefas
function showTasks() {
    listContainer.innerHTML = ''
    list.forEach((task, index) => {
        listContainer.innerHTML +=`<li>${task} <span class="btnRemove" onclick="deleteTask(${index})">Remover</span></li>`
    })
    inputTask.value = ''
}

function deleteTask(task) {
    list.shift(task)
    showTasks()
}

