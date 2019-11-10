

let todoList = [
    {
        id: 1,
        title: "Äta",
        expirationDate: "2019-11-10",
        category: "Fun stuff",
 
    },
    {
        id: 2,
        title: "Städa",
        expirationDate: "2019-11-10",
        category: "No fun",
    },
    {
        id: 3,
        title: "Koda",
        expirationDate:"2019-11-10",
        category: "Fun stuff",

    },
]


drawList(todoList)
document.getElementById('todoExpirationDate').valueAsDate = new Date();

function addTodo(todoTitle, todoDate, todoCategory ){
    todoList.push({
        id: todoList.length + 1,
        title: todoTitle,
        expirationDate: todoDate,
        category: todoCategory,

    })
    drawList(todoList)
}

function removeTodo(id){
    let newTodoList = todoList.filter(function(x){
        return x.id !== id
    })
    todoList = newTodoList
    drawList(newTodoList)
}


function drawList(todoList){
    const todoListElement = document.querySelector("#ul-list")
    todoListElement.innerHTML = ""

    todoList.forEach(function(todoItem) {
        const todoRow = document.createElement("li")

        const title = document.createElement("div")
        title.textContent = `- ${todoItem.title}`

        const expirationDate = document.createElement("div")
        expirationDate.textContent = todoItem.expirationDate

        const category = document.createElement("div")
        category.textContent = todoItem.category

        const removeButton = document.createElement("button")
        removeButton.addEventListener("click", function(){
            removeTodo(todoItem.id)
        })
        removeButton.textContent="X"
        removeButton.classList.add("removeButton")

        todoRow.appendChild(title)
        todoRow.appendChild(expirationDate)
        todoRow.appendChild(category)
        todoRow.appendChild(removeButton)

        todoListElement.appendChild(todoRow)
    })
}


const selectBoxCategory = document.querySelector("#categories")
const todoTitleInput = document.querySelector("#todoinput")
const submitButton = document.querySelector("#submitbtn")
submitButton.addEventListener("click", function(event){
    event.preventDefault()
    if( todoTitleInput.value === "" || selectBoxCategory.value === "default"){
        alert("Please add stuff to do and pick a category, I know you have some sh*t going on!")
    }
    else if(todoTitleInput.value !== ""){
    
    const todoTitleInput = document.querySelector("#todoinput").value
    const todoExperiationDateInput = document.querySelector("#todoExpirationDate").value
    const todoCategoryInput = document.querySelector("#categories").value
    document.querySelector("#todoinput").value = ""
    document.querySelector("#categories").value ="default"
    addTodo(todoTitleInput, todoExperiationDateInput, todoCategoryInput)
    drawList(todoList)
    
    }
})


const filterField = document.querySelector("#filterfield")
filterField.addEventListener("input", function(event){
    const searchText = event.currentTarget.value.toLowerCase()
    const filtredText = todoList.filter(function(item){
        return item.title.toLowerCase().includes(searchText)
    })

    drawList(filtredText)
})




function filterByCategory(event){
    if(event.value === "all"){
        
        drawList(todoList)
    }
    else if(event.value === "No fun"){
        const newCategoryList = todoList.filter(function(x){
            return x.category.toLowerCase().includes("no fun")
        })
        drawList(newCategoryList)
    }
    else if(event.value === "Fun stuff"){
        const newCategoryList = todoList.filter(function(x){
            return x.category.toLowerCase().includes("fun stuff") 
    })
    drawList(newCategoryList)
}
}



























/* FUNGERAR INTE, VARFÖR?! :((

function filterByCategory(categories){
        filterCategoryText = categories.toLowerCase()
        let newCategoryList = todoList.filter(function(x){
            return x.category.toLowerCase().includes(categories)
        })
        todoList = newCategoryList
        drawList(newCategoryList)
         
}


const radioOption = [document.getElementsByName("filter")[0],
                     document.getElementsByName("filter")[1],
                     document.getElementsByName("filter")[2]]

radioOption.forEach(function(option) {
option.addEventListener("click", function(){
    if( option.value === "all"){
      drawList(todoList) 
    }
    else{
        filterByCategory(option.value)  // MÅSTE VÄRDET SPARAS NER I EN VARIABEL FÖRST?!
    }
    
})
})
*/