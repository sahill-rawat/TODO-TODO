showTasks();

$("#adder-btn").click( ()=> 
{
    $(".task-adder").toggleClass("hide");
    $("#content").toggleClass("blur");
});

$(".cl").click( ()=> 
{
    $(".task-adder").toggleClass("hide");
    $("#content").toggleClass("blur");
});


function searchfor()
{
    let str = $(".searchBar").val().trim().toLowerCase();
    if(str.length == 0) {showTasks();}
    let array = document.querySelectorAll('.card');

        array.forEach(function(element) {
        let temp = element.getElementsByTagName("p")[0];
        let txt2 = temp.innerText.toLowerCase();
        if(!txt2.includes(str))
        {
            element.style.display = "none";
        }
    });
}


$(".add-to-storage").click(()=>
{
    let task = $("#tsk").val().trim();
    $("#tsk").val("");
    let tasks = localStorage.getItem("tasks");
    if(tasks == null)   { obj = [] }
    else    { obj = JSON.parse(tasks); }
    
    if(task.length > 0) 
    {
        obj.push(task);
        localStorage.setItem("tasks", JSON.stringify(obj));
        showTasks();
    }
    
});


function showTasks()
{
    let tasks = localStorage.getItem("tasks");
    if(tasks == null)   { obj = [] }
    else    { obj = JSON.parse(tasks); }
    let html = "";
    obj.forEach(function(element, index) {

        html += `<div class="col-5 card w-25 justify-content-start">
        <div class="card-header font-bold">
        Task ${index+1}
        <button class="btn del btn-primary" onclick = "removeTask(${index})">X</button>
        </div>
        <div class="card-body">
        <p class="card-text">${element}</p>
        </div>
        </div>`;
    });
    $(".row").html(html);
}

function removeTask(index)
{
    let tasks = localStorage.getItem("tasks");
    obj = JSON.parse(tasks);
    obj.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(obj));
    showTasks();
}