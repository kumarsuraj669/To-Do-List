let addBtn = document.getElementById("add-btn");
let clrBtn = document.getElementById("clr-btn");
let title;
let desc;

addBtn.addEventListener("click", ()=>{
    ttl = document.querySelector("input").value;
    description = document.querySelector("textarea").value;
    let obj = {
        title: ttl,
        desc: description
    }
    let js = JSON.stringify(obj);
    localStorage.setItem(localStorage.length+1, js);
    console.log("updating list...");
    location.reload();
});


let table = document.querySelector("table");

function listItems(){
    for(let i=0; i<localStorage.length; i++){
        
        let newRow = document.createElement("tr");
        let ov = JSON.parse(localStorage.getItem(i + 1));
        
        newRow.innerHTML = `<td>${i+1}<td>${ov.title}<td>${ov.desc}<td><button class="del-btn" onclick="delItems(${i})">Delete`;

        table.appendChild(newRow);
        
    }
}


let delBtn = document.getElementsByClassName("del-btn");
function delItems(i){
    localStorage.removeItem(i+1);
    location.reload();
}

clrBtn.addEventListener("click", ()=>{
    document.querySelector("textarea").value = "";
});

window.onload = listItems();