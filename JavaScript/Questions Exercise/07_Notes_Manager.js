// The Local Storage Manager: You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.
let div = document.createElement('div')
document.body.append(div)
let button1 = document.createElement('button')
button1.className = "btn1"
button1.innerText = " Add New Note"
document.body.append(button1)

let button2 = document.createElement('button')
button2.className = "btn2"
button2.innerText = " Clear Notes"
document.body.append(button2)


let btn1=document.querySelector('.btn1')
btn1.addEventListener("click",saveNoteToLocalStorage)
let btn2 = document.querySelector('.btn2')
btn2.addEventListener("click",clearNotes)

function saveNoteToLocalStorage(){
    let note = prompt("type your note")
    localStorage.setItem(note,note)
    let list = document.createElement('li')
    document.querySelector('div').append(list)
    list.innerText = `${note}`


}

function clearNotes(){
    document.querySelector('div').innerHTML = ''
    localStorage.clear()
}

window.onload = ()=>{
    const notes = Object.keys(localStorage)
    for (const entry of notes) {
        let list = document.createElement('li')
        document.querySelector('div').append(list)
        list.innerText = `${entry}`
        
    }

    
}