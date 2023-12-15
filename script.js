// Input box gets the entered task from the user
const inputBox = document.getElementById("input-box");

// List container holds the list elements added by the user
const listContainer = document.getElementById("list-container");


function addTask(){
    if(inputBox.value === ''){
        alert("You must enter a task name before adding the task!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    // Clear inputbox of user supplied text
    inputBox.value = "";

    storeListData();
}

// Mark task completed when task li item is clicked, and remove 
// it when the "X" span tag is clicked
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        storeListData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        storeListData();
    }
}, false);

// Add task to list by pressing enter
inputBox.addEventListener("keyup", function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTask();
    }
}, false);

function storeListData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function retrieveListData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

// Get list state on page load
retrieveListData();