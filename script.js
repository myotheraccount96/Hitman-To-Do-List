//get access to to-do items, input box, trash icon
const toDoItems = document.getElementsByClassName("to-do-items")[0];
// add [0] because its the only class with that name
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");
const complete = document.getElementById("complete");
const finish = document.getElementById("finish");
const accomplish = document.getElementById("accomplish");

document.addEventListener("DOMContentLoaded", function time(){
    let today = new Date();
    let time = today.getHours();

    if (time < 12) {
        previousPlaceholder = "Good morning, agent. Your target is to...";
        input.placeholder = previousPlaceholder;
    } else if (time < 18) {
        previousPlaceholder = "Good afternoon, agent. Your target is to...";
        input.placeholder = previousPlaceholder;
    } else {
        previousPlaceholder = "Good evening, agent. Your target is to...";
        input.placeholder = previousPlaceholder;
    }
})

input.addEventListener("keydown", function(event) {
    if(event.key === "Enter")
    addItem();
})

function addItem() {
    var divParent = document.createElement("div");
    var divInput = document.createElement("div");
    var divChild = document.createElement("div");
    var crosshairs = document.createElement("i");
    var trashIcon = document.createElement("i");

    divParent.className = "item";
    divChild.className = "iconContainer";
    divInput.innerHTML= '<div>'+input.value+'</div>';

    crosshairs.className = "fa-solid fa-crosshairs";
    crosshairs.style.color = "#ff003b";

    crosshairs.addEventListener("click", function() {
        divInput.classList.toggle("completed");
        divParent.classList.toggle("completedCheck");

        if(crosshairs.className === "fa-solid fa-crosshairs") {
            crosshairs.className = "fa-solid fa-square-check";
            crosshairs.style.color ="#bbc0c1";
            complete.currentTime = 0;
            complete.play();
        } else {
            crosshairs.className = "fa-solid fa-crosshairs";
            crosshairs.style.color = "#ff003b";
        }
    })

    divChild.appendChild(crosshairs);

    trashIcon.className = "fa-solid fa-skull";
    trashIcon.style.color = "darkgray";

    trashIcon.addEventListener("mouseover", function() {
        trashIcon.style.color = "red";
    })
    trashIcon.addEventListener("mouseout", function() {
        trashIcon.style.color = "darkgray";
    })
    trashIcon.addEventListener("click", function() {
        divParent.remove();
    })

    divChild.appendChild(trashIcon);

    divParent.appendChild(divInput);
    divParent.appendChild(divChild);
   

    toDoItems.appendChild(divParent);

    input.value = '';

}

function deleteAllItems() {
    var divParents = document.querySelectorAll('.item');
    
    divParents.forEach(function(divParent) {
        divParent.remove();
    });
}

// Event listener for the "finish" element
finish.addEventListener("click", function() {
    let userConfirm = window.confirm("Are you sure? This will delete all tasks.");

    if (userConfirm) {
        deleteAllItems();
        accomplish.currentTime = 0;
        accomplish.play();
        input.placeholder = "Click here to stop music."

        input.addEventListener("click", function() {
            accomplish.pause();
            input.placeholder = previousPlaceholder;
        })
    } else {

    }
    
});



