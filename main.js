let container = document.querySelector(".container")
let keyButton = document.querySelector("#key-button")
window.addEventListener("keydown", function(e){
    keyButton.style.display = "none"
    console.log(e)
    let eventKey = document.createElement("button");
    eventKey.innerHTML = e.key
    container.appendChild(eventKey)
    let eventKeyCode = document.createElement("button");
    eventKeyCode.innerHTML = e.code
    container.appendChild(eventKeyCode);
    let eventKeyLocation = document.createElement("button");
    eventKeyLocation.innerHTML = e.location;
    container.appendChild(eventKeyLocation);
    eventKey.classList.add("event-buttons");
    eventKeyCode.classList.add("event-buttons");
    eventKeyLocation.classList.add("event-buttons");
})