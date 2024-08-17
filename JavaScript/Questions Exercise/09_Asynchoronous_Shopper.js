// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.
const btn = document.createElement('button')
document.body.append(btn)
btn.innerHTML = "Place Order"
btn.setAttribute("style","padding: 10px; border: 2px solid black")

btn.addEventListener("click",placeOrder)

async function placeOrder(){
    let item = prompt("Name the item:")
    let qty = parseInt( prompt("In what Quantity?"))
    let timeout = Math.round(Math.random()*1000)

    try {
        if (isNaN(qty) == false ) {
            return new Promise((res)=>{
                setTimeout(() => {
                    alert(`Your order is confirmed for\nITEM: ${item}\nQTY: ${qty}`)
                }, timeout);
            })
        }
        else{
            throw new Error("Specified Quantity is invalid. ");
            
        }
    } catch (error) {
        alert(`Your Order is Not Placed.\n${error}`)
    }
}

