var tasks;

onload = function () {
    let btnReset = document.getElementById("reset");
    btnReset.addEventListener("click", clearTasks);

    let btnRemove = document.getElementById("remove");
    btnRemove.addEventListener("click", removeTask);

    let btnSubmit = document.getElementById("submit");
    btnSubmit.addEventListener("click", saveTask);

    console.log("Page Loaded!");

    // Checks if the memory already carries something

    if (localStorage.getItem("taskArray") === null){
        localStorage.setItem("taskArray", '{"taskArray": []}');
        console.log("Memory Set!");

        tasks = JSON.parse(localStorage.getItem("taskArray"));

        console.log(tasks);
    } else{ 
        tasks = JSON.parse(localStorage.getItem("taskArray"));

        console.log(tasks);
        showTasks(tasks.taskArray);
    }
};

function saveTask() {
    let task = document.body.children[0].children[0].children["task"].value;

    tasks.taskArray.push(task);
    localStorage.setItem("taskArray", JSON.stringify(tasks));

    console.log(tasks);
    showTasks(tasks.taskArray);
}

function removeTask() {
    let task = document.body.children[0].children[0].children["task"].value;

    let index = tasks.taskArray.indexOf(task);
    if (index === -1){
        console.log("Elemento não encontrado!");
        return;
    }
    tasks.taskArray.splice(index, 1);
    localStorage.setItem("taskArray", JSON.stringify(tasks));

    console.log(tasks);
    showTasks(tasks.taskArray);
}

function clearTasks() {
    localStorage.clear();
    console.log("Local Storage Cleared");
    location.reload();
}

function showTasks(tasks) {
    let list = document.getElementById("list-result");
    list.innerHTML = "";

    for (let task of tasks){
        list.innerHTML += `<li>${task}</li>\n`;
    }
}
