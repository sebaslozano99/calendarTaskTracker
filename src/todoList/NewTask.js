

function generateNewTaskHTML(array){
    
    const newTaskMarkUp = `
        <ul class="modal__todo-list__ul" >
            ${array.length ?
                array.map(element => 
                `<li class="list-item" >
                    <input type="checkbox" name="isCompleted" class="isCompleted" ${element.isCompleted ? "checked" : ""} >
                    <p>${element.paragraph}</p>
                    <button class="delete-item" >delete</button>
                </li>`).join("")

                :

                `<p>No tasks found!</p>`
            }
        </ul>
    `;

    return newTaskMarkUp;
}


// function generateNewTaskHTML(object){
//     const newTaskMarkUp = `
//         <li class="list-item" >
//             <input type="checkbox" name="isCompleted" class="isCompleted" ${object.isCompleted ? "checked" : ""} >
//             <p>${object.usersInput}</p>
//             <button class="delete-item" >delete</button>
//         </li>
//     `;

//     return newTaskMarkUp;
// }


export default generateNewTaskHTML;