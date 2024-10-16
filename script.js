const textbox =document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask(){
    if(textbox.value === ''){
        alert("You must enter something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = textbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        // close icon
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    textbox.value = '';
    saveData();

}

//tag name should be in capital
// click for selected
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); // select the task
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove(); //delete the task
        saveData();
    }
},false);


function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}

showTask();