import { mainEl, modalEl, todosContainer, todosContainerIndexToChange, year, month, setTodosContainer } from "../common.js";
import { displayCorrectMonth } from "../otherFunc.js";




// EVENT LISTENERS 
mainEl.addEventListener("click", closeModal);
mainEl.addEventListener("submit", submitHandler);
mainEl.addEventListener("click", deleteTaskHandler);





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
    // const listTasksContainer = mainEl.querySelector(".modal__todo-list__ul");

    if(!inputEl.value) return;

    const newTaskObj = {
        paragraph: inputEl.value,
        isCompleted: false,
    }

    setTodosContainer(newTaskObj, todosContainerIndexToChange);
    console.log(todosContainer);

    renderTodoList(17);

    // const newTaskMarkUp = generateNewTaskHTML(newTaskObj);
    // listTasksContainer.insertAdjacentHTML("beforeend", newTaskMarkUp);

    inputEl.value ="";
    inputEl.focus();
}


function deleteTaskHandler(e){
    const target = e.target;
    if(!target.matches(".delete-item")) return;
    target.parentElement.remove();
}



// MODAL HTML GENERATOR FUNCTION

function renderTodoList(day){

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
                    `<li class="list-item" >
                        <input type="checkbox" name="isCompleted" class="isCompleted" ${element.isCompleted ? "checked" : ""} >
                        <p>${element.paragraph}</p>
                        <button class="delete-item" >delete</button>
                    </li>`).join("")

                    :

                    `<p>No tasks found!</p>`
                }
            </ul>

        </div>
    `;

    //append it to the mainEl
    modalEl.innerHTML = todoListLayout;

    // return todoListLayout;
}

export default renderTodoList;
