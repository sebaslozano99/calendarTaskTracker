import { modalEl, todosContainer, todosContainerIndexToChange, addTaskTodosContainer, deleteTaskTodosContainer, markAsCompletedTodosContainer, updatingTaskTodosContainer, setAllFalseIsUpdatingTodosContainer, updateTaskTodosContainer } from "../common.js";
// import { displayCorrectMonth } from "../otherFunc.js";
import renderTodoList from "./TodoListUi.js";



// EVENT LISTENERS 
modalEl.addEventListener("submit", submitHandler);
modalEl.addEventListener("click", closeModal);
modalEl.addEventListener("click", deleteTaskHandler);
modalEl.addEventListener("click", markAsCompleted);
modalEl.addEventListener("click", updateTaskHandler);




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

    // users intention - either add new task or update an existing task
    const isUserUpdating = todosContainer[todosContainerIndexToChange].find((task) => task.isUpdating === true);

    //select DOM elements that were generated dynamically 
    const inputEl = modalEl.querySelector(".form__input");

    //Submit only if something typed in in the input field
    if(!inputEl.value) return;

    if(!isUserUpdating) {
        const newTaskObj = {
            paragraph: inputEl.value,
            isCompleted: false,
            isUpdating: false,
        }
    
        // add new task to the specific array by passing the index
        addTaskTodosContainer(newTaskObj, todosContainerIndexToChange); 
    }
    else{
        updateTaskTodosContainer(todosContainerIndexToChange, isUserUpdating.paragraph, inputEl.value);
    }

    // after new task added to the specified day's todo list, re-render the UI 
    renderTodoList();

    const inputAfterRerenderEl = modalEl.querySelector(".form__input");

    inputAfterRerenderEl.focus();
}


function deleteTaskHandler(e){

    const target = e.target;
    
    if(!target.matches(".delete-item")) return;
    
    const usersTask = target.parentElement.previousElementSibling.innerText;
    
    deleteTaskTodosContainer(todosContainerIndexToChange, usersTask);
    
    renderTodoList();

    console.log(todosContainer[todosContainerIndexToChange]); 
    
}


function updateTaskHandler(e){

    const target = e.target;
    
    if(!target.matches(".update-task")) return;
    
    const usersTask = target.parentElement.previousElementSibling.innerText;

    // set all tasks's isUpdating property to false - in case user had previously one task's isUpdating property set as TRUE, and clicked on "updateBtn" before updating the previous one.
    todosContainer[todosContainerIndexToChange].forEach(task => {
        if(task.paragraph !== usersTask && task.isUpdating){
            task.isUpdating = false;
        }
    });

    updatingTaskTodosContainer(todosContainerIndexToChange, usersTask);

    renderTodoList();

    const inputEl = modalEl.querySelector(".form__input");

    const isUserUpdating = todosContainer[todosContainerIndexToChange].find((task) => task.isUpdating === true);
    
    inputEl.value = isUserUpdating ? isUserUpdating.paragraph : "";

    inputEl.focus();

}


function markAsCompleted(e){

    const target = e.target;

    if(!target.matches(".isCompleted")) return;

    const usersTask = target.nextElementSibling.innerText;

    markAsCompletedTodosContainer(todosContainerIndexToChange, usersTask);

    renderTodoList();

    console.log(todosContainer[todosContainerIndexToChange]);

}
