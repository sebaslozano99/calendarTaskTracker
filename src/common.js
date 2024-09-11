import { indexOfDayName, getAllDaysInTheMonth } from "./otherFunc.js";


// ----- DOM ELEMENTS -----

export const mainEl = document.querySelector("main");
export const monthAndYear = document.querySelector(".header__title");
export const prevBtn = document.querySelector(".prevtBtn");
export const nextBtn = document.querySelector(".nextBtn");
export const calendarContainer = document.querySelector(".calendarContainer__dayNumbers");
// export const closeModalEl = document.querySelector(".close-modal");

// ----- STATE VARIABLES -----

export const currentDate = new Date(); // We get current date   
export let year = currentDate.getFullYear(); // current year 
export let month = currentDate.getMonth(); // current month
export let day = currentDate.getDate();
export let dateToDisplay = new Date(year, month); // current date starting from the 1st day of the month based on the currentDate above
export let currentMonthFirstDayName = dateToDisplay.toDateString().split(" ")[0]; //first 3 letters of the current day "Sun" for "Sunday"
export let indexOfDay = indexOfDayName(currentMonthFirstDayName); // number associated to name of the first day of the month
export let daysCurrentMonth = getAllDaysInTheMonth(); //we track how many days are in the current months





// ----- SETTER FUNCTIONS ----- 

export function setMonth(newMonth) {
    month = newMonth;
    // console.log("year: ", year);
    // console.log("month: ", month);
    // console.log("day: ", day);
    // console.log("dateToDisplay: ", dateToDisplay);
    // console.log("currentMonthFirstDayName: ", currentMonthFirstDayName);
    // console.log("indexOfDay: ", indexOfDay);
    // console.log("daysCurrentMonth: ", daysCurrentMonth);
}

export function setYear(newYear) {
    year = newYear;
}



export function setCurrentMonthFirstDayName(newCurrentMonthFirstDayName){
    currentMonthFirstDayName = newCurrentMonthFirstDayName;
}


export function setIndexOfDay(newIndexOfDay){
    indexOfDay = newIndexOfDay;
}


export function setDaysCurrentMonth(newDaysCurrentMonth){
    daysCurrentMonth = newDaysCurrentMonth;
}


export function setDateToDisplay(newDateToDisplay){
    dateToDisplay = newDateToDisplay;
}