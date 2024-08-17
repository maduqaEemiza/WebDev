// The Token Manager: You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.


let div = document.createElement('div')
document.body.append(div)

let button1 = document.createElement('button')
button1.innerText = "Get Authentication Token"
document.body.append(button1)
button1.setAttribute("style","padding: 10px; border: 2px solid black")

let button2 = document.createElement('button')
button2.innerText = "Check Authentication Token"
document.body.append(button2)
button2.setAttribute("style","margin: 10px;padding: 10px; border: 2px solid black")

button1.addEventListener("click",setAuthToken)
button2.addEventListener("click",checkAuthToken)

const name = prompt("Please, Enter your name before we get started!.")

function setAuthToken(){
    const token = Math.round(Math.random()*1000000)
    const time = new Date()

    

    prompt(`Your Name: ${name}\nYour Authentication Token is: ${token}\n Issued Time: ${time.toTimeString()}\n\nThis Token is Valid for exactly 60 seconds only!`)
    localStorage.setItem(token,time.getTime())
}

function checkAuthToken(){
    let token = parseInt(prompt("Enter Your Token Here."))
    let time = parseInt(localStorage.getItem(token))
    console.log(time)
    
    let curr = new Date().getTime() //getTime() is in millisec
    console.log(curr)
    
    // if((time +=(60000) )< curr ){
    //    alert("Your Token has Expired Already!")
   
    // }
    // else{
    //     alert("token active")
    // }

    try {
        localStorage.getItem(token)
        if(isNaN(token)){
            throw new Error("Your Token has Expired!");
            
        }
        else{

            alert(`Your token ${token}  is ACTIVE`)
        }
    } catch (error) {
        alert(error)
    }
}

setInterval(()=>{
    
    let keys = Object.keys(localStorage)
    let curr = new Date().getTime()

    for (const key of keys) {

        let x = parseInt(localStorage.getItem(parseInt(key)))

        if(x+60000 < curr){
            localStorage.removeItem(parseInt(key))
            console.log(`removed ${key}`)
            
        }
        
    }
    
}, 500);

