

function generateNewTaskHTML(usersInput){
    const newTaskMarkUp = `
        <li class="list-item" >
            <input type="checkbox" name="isCompleted" class="isCompleted">
            <p>${usersInput}</p>
            <button class="delete-item" >delete</button>
        </li>
    `;

    return newTaskMarkUp;
}

export default generateNewTaskHTML;