// ----- DOM ELEMENTS -----


const mainEl = document.querySelector("main");
const monthAndYear = document.querySelector(".monthAndYear");
const prevBtn = document.querySelector(".prevtBtn");
const nextBtn = document.querySelector(".nextBtn");



// ----- STATE VARIABLES -----

const currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth();
const date = currentDate.toDateString();

console.log(currentDate)

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
    const tableTemplate = `
        <table class="calendar" >
            <thead class="calendar__thead">
                <tr>   <!-- table row -->
                    <th>Sun</th>  <!-- table header -->
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                </tr>
            </thead>


            <tbody class="calendar__tbody">
                <tr>  <!-- table row -->
                    <td></td>   <!-- table data -->
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
        
                <tr>  <!-- table row -->
                    <td>  <!-- table data -->
                        
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
        
                <tr>  <!-- table row -->
                    <td>  <!-- table data -->
                        
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
        
                <tr>  <!-- table row -->
                    <td>  <!-- table data -->
                        
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>  <!-- table row -->
                    <td>  <!-- table data --
                        
                    </td>
                    <td></td>
                    <td></td>
                    <td class="outOfMonth" ></td>
                    <td class="outOfMonth" ></td>
                    <td class="outOfMonth" ></td>
                    <td class="outOfMonth" ></td>
                </tr>
            </tbody>
            
        </table>
    `;

    mainEl.insertAdjacentHTML("beforeend", tableTemplate);
}

function nextMonth(){
    console.log(currentDate);
    if(month < 11){
        month++;
    }
    else{
        month = 0;
        year++;
    }
    renderMonthYear();
}

function prevMonth(){
    console.log(currentDate);
    if(month > 0){
        month--;
    }
    else{
        month = 11;
        year--;
    }
    renderMonthYear();
}











// ----- OTHER FUNCTIONS -----


function displayCorrectMonth(numberOfMonth = 0){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"];

    return months[numberOfMonth];
}

