import { calendarContainer, year,month, day } from "../common.js";


calendarContainer.addEventListener("click", clickHandler);



function clickHandler(e){
    
    const target = e.target;
    if(!target.matches(".dayNumbers__day")) return;

    console.log(target.textContent);

    
}