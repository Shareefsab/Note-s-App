const notescontainer = document.querySelector(".notes-container");
const Createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notescontainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes",notescontainer.innerHTML);
}
Createbtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "Delete.png";
    notescontainer.appendChild(inputBox).appendChild(img);
})
notescontainer.addEventListener("click",(e) => {
 if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
 }
else if(e.target.tagName === "p") {
notes = document.querySelectorAll(".input-box");
notes.forEach(nt => {
    nt.onkeyup = function () {
        updateStorage();
    }
})
}  
})
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})