const inputBox = document.getElementById("input-box");
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

    inputBox.value = "";

    storeListData();
}

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

retrieveListData();