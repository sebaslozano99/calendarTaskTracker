import { mainEl, modalEl, todosContainer, todosContainerIndexToChange, year, month, addTaskTodosContainer, deleteTaskTodosContainer, markAsCompletedTodosContainer, updatingTaskTodosContainer, setAllFalseIsUpdatingTodosContainer } from "../common.js";
import { displayCorrectMonth } from "../otherFunc.js";



// EVENT LISTENERS 
mainEl.addEventListener("submit", submitHandler);
mainEl.addEventListener("click", closeModal);
mainEl.addEventListener("click", deleteTaskHandler);
mainEl.addEventListener("click", markAsCompleted);
mainEl.addEventListener("click", updateTaskHandler);




// HELPER FUNCTIONS

function closeModal(e){
    
    const target = e.target;
    if(!target.matches(".close-modal")) return;
    modalEl.classList.remove("appear");

}



function submitHandler(e){

    e.preventDefault();
    const target = e.target;

    if(!target.matches(".modal__todo-list__form")) return;

    //select DOM elements that were generated dynamically 
    const inputEl = mainEl.querySelector(".form__input");

    //Submit only if something typed in in the input field
    if(!inputEl.value) return;

    const newTaskObj = {
        paragraph: inputEl.value,
        isCompleted: false,
        isUpdating: false,
    }

    // add new task to the specific array by passing the index
    addTaskTodosContainer(newTaskObj, todosContainerIndexToChange); 

    // after new task added to the specified day's todo list, re-render the UI 
    renderTodoList(todosContainerIndexToChange);

    const inputAfterRerenderEl = mainEl.querySelector(".form__input");

    inputAfterRerenderEl.focus();
}


function deleteTaskHandler(e){

    const target = e.target;
    
    if(!target.matches(".delete-item")) return;
    
    const usersTask = target.parentElement.previousElementSibling.innerText;
    
    deleteTaskTodosContainer(todosContainerIndexToChange, usersTask);
    
    renderTodoList(todosContainerIndexToChange);
    
}


function updateTaskHandler(e){

    const target = e.target;
    
    if(!target.matches(".update-task")) return;
    
    const usersTask = target.parentElement.previousElementSibling.innerText;

    updatingTaskTodosContainer(todosContainerIndexToChange, usersTask);

    // set all tasks's isUpdating property to false in case there is already a task that is being updated
    // if(document.querySelectorAll(".isUpdating").length >= 1){
    //     setAllFalseIsUpdatingTodosContainer(todosContainerIndexToChange);
    // }

    renderTodoList(todosContainerIndexToChange);

    console.log(document.querySelectorAll(".isUpdating").length);
    
}


function markAsCompleted(e){

    const target = e.target;

    if(!target.matches(".isCompleted")) return;

    const usersTask = target.nextElementSibling.innerText;

    markAsCompletedTodosContainer(todosContainerIndexToChange, usersTask);

    renderTodoList(todosContainerIndexToChange);

    console.log(todosContainer[todosContainerIndexToChange]);

}



// MODAL HTML GENERATOR FUNCTION

function renderTodoList(day){
    console.log("renmdered!");

    //get correct array to display todolist of specific day
    const todoListThisDay = todosContainer[todosContainerIndexToChange];
    
    const todoListLayout = `
        <button class="close-modal">x</button>

        <div  class="modal__date-info" >
            <h3 class="date-info" >${displayCorrectMonth(month)} ${day} ${year}</h3>
        </div>

        <div class="modal__todo-list" >

            <form class="modal__todo-list__form">
                <input type="text" placeholder="add new task" class="form__input" >
            </form>

            <ul class="modal__todo-list__ul" >
                ${todoListThisDay.length ?
                    todoListThisDay.map(element => 

                    `<li class="list-item ${element.isUpdating && "isUpdating"}" >
                        <input type="checkbox" name="isCompleted" class="isCompleted" ${element.isCompleted ? "checked" : ""} >
                        <p class="${element.isCompleted ? "paragraph-completed" : ""}" >${element.paragraph}</p>

                        <div class="list-item__buttons-container" >
                            <button class="tasks-button delete-item" >delete</button>    
                            <button class="tasks-button update-task">update</button>
                       </div> 
                    </li>`).join("")

                    :

                    `<p>Add some tasks!</p>`
                }
            </ul> 

        </div>
    `;

    //append it to the mainEl
    modalEl.innerHTML = todoListLayout;

}

export default renderTodoList;

