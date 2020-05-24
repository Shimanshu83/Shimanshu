console.log("this is logic part of note making websites ");
// what i am gonna do is i will try to implement a add note fucntionality 
let addText = document.getElementById("addText");
let addButton = document.getElementById("addButton");
displayNotes();
addButton.addEventListener("click", function (e) {
    if (localStorage.getItem("notes") == null) {
        localStorage.setItem("notes", JSON.stringify([]));
    }
    else {
        let noteObj = JSON.parse(localStorage.getItem("notes"));
        noteObj.push(addText.value);
        console.log(noteObj);
        localStorage.setItem("notes", JSON.stringify(noteObj))
        addText.value = ""
        displayNotes();
    }

    // console.log(noteObj);
})
function displayNotes() {
    noteContainer = document.getElementById("noteContainer");
    let noteObj = JSON.parse(localStorage.getItem("notes"));
    let html = ""
    for (i in noteObj) {
        html += `
        <div class="card mx-3 my-3 cardClass" id="${i}" style="width: 18rem;">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
            <h5 class="card-title">Note no ${i + 1}</h5>
            <p class="card-text">${noteObj[i]}</p>
            <button id="${i}" onclick="deletNote(this.id)" class="btn btn-primary">DELETE</button>
        </div>
    </div>
        `
    }
    // console.log(html);
    noteContainer.innerHTML = html;
}
function deletNote(idName){
    let elem = document.getElementById(idName);
    //elem.remove();
    //console.log("delete this id name",idName);
    let noteObj = JSON.parse(localStorage.getItem("notes"));
    noteObj.splice(idName ,1);
    localStorage.setItem("notes", JSON.stringify(noteObj))
    displayNotes();

}
let search = document.getElementById("search1");
search.addEventListener("input",function(){
    let inputValue = search.value.toLowerCase();
    console.log("input ",inputValue);
    let cardClass  = document.getElementsByClassName("cardClass");
    for(elem of cardClass){
        let p = elem.getElementsByTagName("p");
        console.log(p.length)
        pText = p[0].innerText;
        if (pText.includes(inputValue)){
            elem.style.display = "block";

        }
        else{
            elem.style.display = "none";
        }
    }

})

// seach functionality is really important 



















// further feature 1title setter mark as 1.important
//sync and host with web server

