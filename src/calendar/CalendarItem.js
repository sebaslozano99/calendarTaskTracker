import { modalEl, calendarContainer, setTodosContainerIndexToChange } from "../common.js";
import renderTodoList from "../todoList/TodoListUi.js";


calendarContainer.addEventListener("click", clickHandler);



function clickHandler(e){
    
    const target = e.target;

    //we proceed with the func only if it was a day in the calendar clicked
    if(!target.matches(".dayNumbers")) return;

    modalEl.classList.add("appear");

    //get specific id of the clicked item
    const id = target.getAttribute("id");

    // //set index state. This'll be handy when submitting a new task, we'll update the correct array
    setTodosContainerIndexToChange(id);

    renderTodoList();
}