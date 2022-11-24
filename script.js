let saveEl=document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)

let count=0

console.log(saveEl)

function increment(){
    count=count+1
    countEl.innerText=count  
} 


function save(){
    let entries=count+" - "
    saveEl.innerText +=entries
    console.log(count)
    countEl.innerText=0
    count=0
}

