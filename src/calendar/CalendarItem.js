import { mainEl, calendarContainer, year,month } from "../common.js";
import generateTodoList from "./TodoList.js";


calendarContainer.addEventListener("click", clickHandler);



function clickHandler(e){
    
    const target = e.target;

    //we proceed with the func only if it was a day in the calendar clicked
    if(!target.matches(".dayNumbers")) return;

    //generate HTML markup
    const todoListHTML = generateTodoList(year, month, +target.textContent);

    //append it to the mainEl
    mainEl.insertAdjacentHTML("beforeend", todoListHTML);



}