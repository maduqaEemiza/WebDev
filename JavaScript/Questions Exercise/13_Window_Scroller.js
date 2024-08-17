// You are developing a single-page application with a smooth scrolling effect. Implement a function named smoothScrollToTop that smoothly scrolls the window to the top when called.

for (let i = 0; i < 20; i++) {
    let div = document.createElement('div')
    div.className = "para"
    document.body.appendChild(div)
    div.style.padding = "10px"
}
document.querySelector(".para").id = "top"

let divs = document.querySelectorAll(".para")
for (const div of divs) {
    div.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

}


let btn = document.createElement("a")
btn.innerHTML =  "Scroll to Top!"
btn.setAttribute("href","#top")
document.body.append(btn)


document.querySelector("html").style.scrollBehavior = "smooth"