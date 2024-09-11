import { displayCorrectMonth } from "../otherFunc.js";
import { mainEl } from "../common.js";
import generateNewTaskHTML from "./NewTask.js";




// EVENT LISTENERS 
mainEl.addEventListener("click", closeModal);
mainEl.addEventListener("submit", submitHandler);
mainEl.addEventListener("click", deleteTaskHandler);





// HELPER FUNCTIONS

function closeModal(e){
    
    const target = e.target;
    if(!target.matches(".close-modal")) return;

    mainEl.querySelector(".modal")?.remove();

}

function submitHandler(e){

    e.preventDefault();
    const target = e.target;

    if(!target.matches(".modal__todo-list__form")) return;

    //select DOM elements that were generated dynamically 
    const listTasksContainer = mainEl.querySelector(".modal__todo-list__ul");
    const inputEl = mainEl.querySelector(".form__input");

    const usersInput = inputEl.value;
    const newTaskMarkUp = generateNewTaskHTML(usersInput);
    listTasksContainer.insertAdjacentHTML("beforeend", newTaskMarkUp);

    inputEl.value ="";
}


function deleteTaskHandler(e){
    const target = e.target;
    if(!target.matches(".delete-item")) return;
    target.parentElement.remove();
}



// MODAL HTML GENERATOR FUNCTION

function generateTodoList(year, month, day){

    const todoListLayout = `
        <section class="modal" >

            <button class="close-modal">x</button>

            <div  class="modal__date-info" >
                <h3 class="date-info" >${displayCorrectMonth(month)} ${day} ${year}</h3>
            </div>

            <div class="modal__todo-list" >

                <form class="modal__todo-list__form">
                    <input type="text" placeholder="add new task" class="form__input" >
                </form>
    
                <ul class="modal__todo-list__ul" >

                </ul>

            </div>

        </section>
    `;


    return todoListLayout;
}

export default generateTodoList;