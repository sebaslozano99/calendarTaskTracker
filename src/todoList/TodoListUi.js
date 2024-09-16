import { todosContainer, todosContainerIndexToChange, month, year, modalEl } from "../common.js";
import { displayCorrectMonth } from "../otherFunc.js";


// MODAL HTML GENERATOR FUNCTION

function renderTodoList(){

    //get correct array to display todolist of specific day
    const todoListThisDay = todosContainer[todosContainerIndexToChange];

    const isUserUpdating = todoListThisDay.find((element) => element.isUpdating === true);
    
    const todoListLayout = `
        <button class="close-modal">x</button>

        <div  class="modal__date-info" >
            <h3 class="date-info" >${displayCorrectMonth(month)} ${todosContainerIndexToChange} ${year}</h3>
        </div>

        <div class="modal__todo-list" >

            <form class="modal__todo-list__form">
                <input type="text" placeholder="add new task" class="form__input" >
            </form>

            <ul class="modal__todo-list__ul" >
                ${todoListThisDay.length ?
                    todoListThisDay.map(element => 

                    `<li class="list-item ${element.isUpdating && "isUpdating"}" >
                        <input type="checkbox" name="isCompleted" class="isCompleted" ${element.isCompleted ? "checked" : ""} ${isUserUpdating && "disabled"} >
                        <p class="${element.isCompleted ? "paragraph-completed" : ""}" >${element.paragraph}</p>

                        <div class="list-item__buttons-container" >
                            <button class="tasks-button delete-item">delete</button>    
                            <button class="tasks-button update-task" ${element.isCompleted && "disabled"} >update</button>
                        </div> 
                    </li>`).join("")

                    :

                    `<p>Add some tasks!</p>`
                }
            </ul> 

        </div>
    `;

    //append it to the modalEl
    modalEl.innerHTML = todoListLayout;

}

export default renderTodoList;