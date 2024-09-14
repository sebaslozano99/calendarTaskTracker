import { indexOfDayName, getAllDaysInTheMonth } from "./otherFunc.js";





// ----- DOM ELEMENTS -----

export const mainEl = document.querySelector("main");
export const monthAndYear = document.querySelector(".header__title");
export const prevBtn = document.querySelector(".prevtBtn");
export const nextBtn = document.querySelector(".nextBtn");
export const calendarContainer = document.querySelector(".calendarContainer__dayNumbers");
export const modalEl = document.querySelector(".modal");



// ----- STATE VARIABLES -----

export const currentDate = new Date(); // We get current date   
export let year = currentDate.getFullYear(); // current year 
export let month = currentDate.getMonth(); // current month
export let day = currentDate.getDate();
export let dateToDisplay = new Date(year, month); // current date starting from the 1st day of the month based on the currentDate above
export let currentMonthFirstDayName = dateToDisplay.toDateString().split(" ")[0]; //first 3 letters of the current day "Sun" for "Sunday"
export let indexOfDay = indexOfDayName(currentMonthFirstDayName); // number associated to name of the first day of the month
export let daysCurrentMonth = getAllDaysInTheMonth(); //we track how many days are in the current months
export let todosContainer = []; // Array of arrays (tasks), that contains the todo list of each day
export let todosContainerIndexToChange; 


// ----- SETTER FUNCTIONS ----- 

export function fillTodosContainer(newTodoList){
    todosContainer.push(newTodoList);
}

export function addTaskTodosContainer(newTaskObj, index){
    todosContainer[index].push(newTaskObj);
}

export function deleteTaskTodosContainer(index, textOfElement){
    todosContainer[index] = todosContainer[index].filter(task => task.paragraph !== textOfElement);
}

export function markAsCompletedTodosContainer(index, textOfElement){
    todosContainer[index].forEach(task => {
        if(task.paragraph === textOfElement){
            if(task.isCompleted){
                task.isCompleted = false;
            }
            else{
                task.isCompleted = true;
            }
        }
    });
}





export function setTodosContainerIndexToChange(newIndex){
    todosContainerIndexToChange = newIndex;
}





export function setMonth(newMonth) {
    month = newMonth;
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