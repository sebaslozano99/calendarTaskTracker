import { indexOfDay, dateToDisplay, month, year, currentMonthFirstDayName, setCurrentMonthFirstDayName, setIndexOfDay, setDaysCurrentMonth, setDateToDisplay } from "./common.js ";

import { renderUI } from "../src/calendar/Calendar.js";




// ----- OTHER FUNCTIONS -----


export function updateUI(){
    // update this based on changes on year and/or month
    
    setDateToDisplay(new Date(year, month));

    //get the name of the first day on the new month
    setCurrentMonthFirstDayName(dateToDisplay.toDateString().split(" ")[0]); //first 3 letters of the current day "Sun" for "Sunday"

    // turn the name of the first day on the new month to an index
    setIndexOfDay(indexOfDayName(currentMonthFirstDayName));

    //count how many days are in the current month
    setDaysCurrentMonth(getAllDaysInTheMonth())

    //render UI
    renderUI();

}



export function displayCorrectMonth(numberOfMonth = 0){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"];

    return months[numberOfMonth];
}





// While the dateToDisplay's month is equal to month, we will increase the day of the "dateToDisplay" until it changes to the next month -----

export function getAllDaysInTheMonth(){
    const array = [];
    let index = 0;
    

    //If the index of the day's name is greater than 0, it means the 1st day of the month fall after sunday. Thus, tho display it correctly in the UI, we'll add en empty string, so that in the UI that will reflect as an empty box. 
    if(indexOfDay > 0) {
        for(let i = 0; i < indexOfDay; i++){
            // console.log("--", i);
            array.push("");
        }
    }

    while(dateToDisplay.getMonth() === month){
        dateToDisplay.setDate(dateToDisplay.getDate() + 1);
        index++;
        array.push(index);
    }
    dateToDisplay.setMonth(month);
    return array;
}





//We associate the name of the day with an index -----

export function indexOfDayName(dayName){
    const names = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    return names.indexOf(dayName.toLowerCase());

}

