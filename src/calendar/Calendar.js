import { calendarContainer, 
    monthAndYear, 
    prevBtn, 
    nextBtn,
    currentDate, 
    year, 
    month, 
    day, 
    dateToDisplay, 
    indexOfDay, 
    daysCurrentMonth,
    setMonth,
    setYear,
    currentMonthFirstDayName
} from "../common.js";

import { displayCorrectMonth, updateUI } from "../otherFunc.js";





    // console.log("year: ", year);
    // console.log("month: ", month);
    // console.log("day: ", day);
    // console.log("dateToDisplay: ", dateToDisplay);
    // console.log("currentMonthFirstDayName: ", currentMonthFirstDayName);
    // console.log("indexOfDay: ", indexOfDay);
    // console.log("daysCurrentMonth: ", daysCurrentMonth);



// ----- EVENT LISTENERS -----

window.addEventListener("DOMContentLoaded", renderUI);
nextBtn.addEventListener("click", nextMonth);
prevBtn.addEventListener("click", prevMonth);





// ----- HELPER FUNCTIONS -----


export function renderUI(){

    const monthToDisplay = displayCorrectMonth(month);
    monthAndYear.textContent = `${monthToDisplay} ${year}`;

    // clear previous HTML code
    calendarContainer.innerHTML = "";
    
    let html = "";

    daysCurrentMonth.forEach(element => {
        const segment = `
            <div class="dayNumbers__day ${element === day && month === currentDate.getMonth() && year === currentDate.getFullYear() && "currentDay"}">${element}</div>
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
    // console.log("currentMonthFirstDayName: ", currentMonthFirstDayName);
    // console.log("indexOfDay: ", indexOfDay);
    // console.log("daysCurrentMonth: ", daysCurrentMonth);
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
    // console.log("currentMonthFirstDayName: ", currentMonthFirstDayName);
    // console.log("indexOfDay: ", indexOfDay);
    // console.log("daysCurrentMonth: ", daysCurrentMonth);
}



