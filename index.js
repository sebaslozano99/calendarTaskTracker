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
let indexOfDay = indexOfDayName(currentMonthFirstDayName); // number associated to name of the day
let daysCurrentMonth = getAllDaysInTheMonth(); //we track how many days are in the current months


console.log("currentDate: ", currentDate);
console.log("year: ", year);
console.log("month: ", month);
console.log("dateToDisplay: ", dateToDisplay);
console.log("current month first day name: ", currentMonthFirstDayName);
console.log("number of days in current month: ", daysCurrentMonth);




// ----- EVENT LISTENERS -----

window.addEventListener("DOMContentLoaded", renderUI);
nextBtn.addEventListener("click", nextMonth);
prevBtn.addEventListener("click", prevMonth);



console.log(month, dateToDisplay.getMonth());

// ----- HELPER FUNCTIONS -----


function renderUI(){

    const monthToDisplay = displayCorrectMonth(month);
    monthAndYear.textContent = `${monthToDisplay} ${year}`;


    calendarContainer.innerHTML = "";
    let html = "";

    daysCurrentMonth.forEach(element => {
        const segment = `
            <div class="dayNumbers__day">${element}</div>
        `;
        html += segment;

    })

    calendarContainer.innerHTML = html;
    html = ""; 
}

function nextMonth(){
    if(month < 11){
        month++;
    }
    else{
        month = 0;
        year++;
    }

    console.log(month, dateToDisplay.getMonth());
    dateToDisplay = new Date(year, month);
    indexOfDay = indexOfDayName(currentMonthFirstDayName);
    daysCurrentMonth = getAllDaysInTheMonth(); //we track how many days are in the current months
    currentMonthFirstDayName = dateToDisplay.toDateString().split(" ")[0]; //first 3 letters of the current day "Sun" for "Sunday"
    renderUI();

    console.log("currentDate: ", currentDate);
    console.log("year: ", year);
    console.log("month: ", month);
    console.log("dateToDisplay: ", dateToDisplay);
    console.log("current month first day name: ", currentMonthFirstDayName);
    console.log("number of days in current month: ", daysCurrentMonth);
    console.log("index of day: ", indexOfDay);

}

function prevMonth(){
    if(month > 0){
        month--;
    }
    else{
        month = 11;
        year--;
    }
    renderUI();
    dateToDisplay = new Date(year, month);
    console.log(dateToDisplay);
}





// ----- OTHER FUNCTIONS -----

function displayCorrectMonth(numberOfMonth = 0){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"];

    return months[numberOfMonth];
}


// While the dateToDisplay's month is equal to month, we will increase the day of the "dateToDisplay" until it changes to the next month
function getAllDaysInTheMonth(){
    const array = [];
    let index = 0;
    // const indexOfDay = indexOfDayName(currentMonthFirstDayName); // number associated to name of the day
    

    //If the index of the day's name is greater than 0, it means the 1st day of the month fall after sunday. Thus, tho display it correctly in the UI, we'll add en empty string, so that in the UI that will reflect as an empty box.
    if(indexOfDay > 0) {
        for(let i = 0; i < indexOfDay; i++){
            console.log("--", i);
            array.push("");
        }
    }

    while(dateToDisplay.getMonth() === month){
        dateToDisplay.setDate(dateToDisplay.getDate() + 1);
        index++;
        array.push(index);
    }
    dateToDisplay = new Date(year, month); 
    return array;
}


//We associate the name of the day with an index
function indexOfDayName(dayName){
    const names = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    return names.indexOf(dayName.toLowerCase());

}

