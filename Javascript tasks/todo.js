const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#user-input");
const listContainer = document.querySelector("#list-container");

let tasks = [];

const storedTasks = localStorage.getItem("tasks");
if(storedTasks){
 tasks = JSON.parse(storedTasks);
 renderTasks();
};

taskForm.addEventListener("submit", (e) => {
    e.preventDefault(); // hindrer en automatisk refresh av nettsider

    const formData = new FormData(taskForm);

    tasks.push({
        timeStamp: new Date().toLocaleString("nb-NO"),
        description: formData.get("user-input"),
        completed: false,
    });
    saveToLocalStorage();
    renderTasks();
});

function renderTasks(){

    while (listContainer.firstChild){
        listContainer.firstChild.remove();
    }

    tasks.forEach((task, index) => {
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");

        const timeStampElem = document.createElement("p");
        timeStampElem.classList.add("timestamp");
        timeStampElem.textContent = task.timeStamp;

        const descriptionElem = document.createElement("input");
        descriptionElem.classList.add("description");
        descriptionElem.type = "text";
        descriptionElem.value = task.description;
        descriptionElem.readOnly = true;

        const taskCompletedElem = document.createElement("input");
        taskCompletedElem.type = "checkbox";
        taskCompletedElem.checked = task.completed;

        if (taskCompletedElem.checked){
            descriptionElem.classList.add("checked");
            taskContainer.classList.add("checkedbg");
        } else {
            descriptionElem.classList.remove("checked");
            taskContainer.classList.remove("checkedbg");
        }
        
        taskCompletedElem.classList.add("completed-checkbox");
        taskCompletedElem.addEventListener("change", () =>{
            if (taskCompletedElem.checked){
                descriptionElem.classList.add("checked");
                taskContainer.classList.add("checkedbg");
            } else {
                descriptionElem.classList.remove("checked");
                taskContainer.classList.remove("checkedbg");
            }
        })

        const editButtonElem = document.createElement("button");
        editButtonElem.textContent = "Endre";
        editButtonElem.classList.add("edit-button");
        editButtonElem.addEventListener("click",() => {
            if (descriptionElem.readOnly){
            descriptionElem.readOnly = false;
            descriptionElem.focus();
            editButtonElem.textContent = "Lagre";
            } else {
            tasks[index].description = descriptionElem.value;
            saveToLocalStorage();
            descriptionElem.readOnly = true;
            editButtonElem.textContent = "Endre";
            }
        });

        const deleteButtonElem = document.createElement("button");
        deleteButtonElem.classList.add("delete-button");
        deleteButtonElem.textContent = "Slett";
        deleteButtonElem.addEventListener("click",(e) => {
            tasks.splice(index, 1);
            saveToLocalStorage();
            renderTasks();
        });

        taskContainer.append(timeStampElem,descriptionElem, taskCompletedElem, editButtonElem, deleteButtonElem);
        listContainer.prepend(taskContainer);

    });
};

function saveToLocalStorage(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// console.log(taskForm, taskInput, listContainer);