// ----- DOM ELEMENTS -----


const mainEl = document.querySelector("main");
const monthAndYear = document.querySelector(".monthAndYear");
const prevBtn = document.querySelector(".prevtBtn");
const nextBtn = document.querySelector(".nextBtn");
const calendarContainer = document.querySelector(".calendarContainer__dayNumbers");


// ----- STATE VARIABLES -----

const currentDate = new Date(); // We get current date
let year = currentDate.getFullYear(); // current year 
let month = currentDate.getMonth(); // current month
let dateToDisplay = new Date(year, month); // current date starting from the 1st day of the month based on the currentDate above

let currentMonthFirstDayName = dateToDisplay.toDateString().split(" ")[0]; //first 3 letters of the current day "Sun" for "Sunday"
let daysCurrentMonth = getAllDaysInTheMonth(); //we track how many days are in the current months


console.log("currentDate: ", currentDate);
console.log("year: ", year);
console.log("month: ", month);
console.log("dateToDisplay: ", dateToDisplay);
console.log("current month first day name: ", currentMonthFirstDayName);
console.log("number of days in current month: ", daysCurrentMonth);


// While the dateToDisplay's month is equal to month, we will increase the day of the "dateToDisplay" until it changes to the next month
function getAllDaysInTheMonth(){
    const numberOfName = numberOfDayName(currentMonthFirstDayName); // number associated to name of the day
    const array = [];
    let index = 0;

    console.log("current month first day name is :", currentMonthFirstDayName, "and it's index is: " ,numberOfName);
    if(numberOfName > 0) {
        for(let i = 0; i < numberOfName; i++){
            array.push("");
        }
    }

    while(dateToDisplay.getMonth() === month){
        dateToDisplay.setDate(dateToDisplay.getDate() + 1);
        index++;
        array.push(index);
    }


    return array;
}


function numberOfDayName(dayName){
    const names = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    return names.indexOf(dayName.toLowerCase());

}


// ----- EVENT LISTENERS -----

window.addEventListener("DOMContentLoaded", renderUI);
nextBtn.addEventListener("click", nextMonth);
prevBtn.addEventListener("click", prevMonth);




// ----- HELPER FUNCTIONS -----

function renderMonthYear(){
    const monthToDisplay = displayCorrectMonth(month);
    monthAndYear.textContent = `${monthToDisplay} ${year}`;
}

function renderUI(){
    renderMonthYear();
    calendarContainer.innerHTML = "";
    let html = "";
    for(let i = 0; i < daysCurrentMonth.length; i++){
        const segment = `
            <div class="dayNumbers__day">${daysCurrentMonth[i]}</div>
        `;
        html += segment;
        calendarContainer.innerHTML = html;
    }
}

function nextMonth(){
    if(month < 11){
        month++;
    }
    else{
        month = 0;
        year++;
    }


    let daysCurrentMonth = getAllDaysInTheMonth(); //we track how many days are in the current months
    let currentMonthFirstDayName = dateToDisplay.toDateString().split(" ")[0]; //first 3 letters of the current day "Sun" for "Sunday"
    renderUI();
    dateToDisplay = new Date(year, month);
    

    console.log("currentDate: ", currentDate);
    console.log("year: ", year);
    console.log("month: ", month);
    console.log("dateToDisplay: ", dateToDisplay);
    console.log("current month first day name: ", currentMonthFirstDayName);
    console.log("number of days in current month: ", daysCurrentMonth);

}

function prevMonth(){
    if(month > 0){
        month--;
    }
    else{
        month = 11;
        year--;
    }
    // renderMonthYear();
    renderUI();
    dateToDisplay = new Date(year, month);
    console.log(dateToDisplay);
}





// ----- OTHER FUNCTIONS -----

function displayCorrectMonth(numberOfMonth = 0){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"];

    return months[numberOfMonth];
}

