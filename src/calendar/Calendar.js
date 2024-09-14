import { 
    calendarContainer, 
    monthAndYear, 
    prevBtn, 
    nextBtn,
    currentDate, 
    year, 
    month, 
    day, 
    daysCurrentMonth,
    setMonth,
    setYear,
    fillTodosContainer,
} from "../common.js";
import { displayCorrectMonth, updateUI } from "../otherFunc.js";





// ----- EVENT LISTENERS -----

window.addEventListener("DOMContentLoaded", renderUI);
nextBtn.addEventListener("click", nextMonth);
prevBtn.addEventListener("click", prevMonth);





// ----- HELPER FUNCTIONS -----

export function renderUI(){

    console.log(daysCurrentMonth);

    const monthToDisplay = displayCorrectMonth(month);
    monthAndYear.textContent = `${monthToDisplay} ${year}`;

    // clear previous HTML code
    calendarContainer.innerHTML = "";
    
    let html = "";

    daysCurrentMonth.forEach((element, i) => {

        const isCurrentTime = element === day && month === currentDate.getMonth() && year === currentDate.getFullYear();
        const isPast = year < currentDate.getFullYear() || month < currentDate.getMonth() && year <= currentDate.getFullYear() || element < currentDate.getDate() && month <= currentDate.getMonth() && year <= currentDate.getFullYear(); 
        
        //For each one the the days in the month, we add a todoList array to our TodoLists container
        fillTodosContainer([]);
        
        
        const segment = `
            <div id="${i+1}" class="dayNumbers ${isCurrentTime ? "dayNumbers--currentDay" : ""}  ${isPast ? "dayNumbers--invalid" : ""}" >${element}</div>
        `;

        html += segment;
    })

    calendarContainer.innerHTML = html;
    html = ""; 
}





function nextMonth(){
    if(month < 11){
        setMonth(month + 1)
    }
    else{
        setMonth(0);
        setYear(year + 1);
    }

    updateUI();
}





function prevMonth(){
    if(month > 0){
        setMonth(month - 1);
    }
    else{
        setMonth(11);
        setYear(year - 1);
    }

    updateUI();
}



