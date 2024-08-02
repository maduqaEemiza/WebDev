console.log("script initialiazed.")

function createCard(title,cName,views,monthsOld,timestamp,thumbnail_url){
    let card = document.createElement('div')
    card.className="card"
    let thumbnail = document.createElement('div')
    thumbnail.className="thumbnail"
    const duration = document.createElement('div')
    duration.className="duration"
    const content = document.createElement('div')
    content.className="content"
    const thumbnail_img = document.createElement('img')
    thumbnail_img.setAttribute("src",`${thumbnail_url}`)
    card.append(thumbnail,content);
    thumbnail_img.className= "img"
    
    thumbnail.appendChild(thumbnail_img)
    thumbnail.appendChild(duration)

    duration.innerHTML=`${timestamp}`
    // thumbnail.style.background= `url(${thumbnail_url})`

    const heading = document.createElement('h2')
    heading.innerHTML = `${title}`
    content.appendChild(heading)

    const channel_name = document.createElement('span')
    channel_name.className = "cName"
    channel_name.innerHTML = `${cName}`

    const sep = document.createTextNode(`|`)

    const views_count = document.createElement('span')
    views_count.className = "views"
    views_count.innerHTML = `${views}`

    const how_old = document.createElement('span')
    how_old.className = "monthsOld"
    how_old.innerHTML = `${monthsOld}`

    content.append(heading,channel_name,views_count,how_old)


    document.body.querySelector(".container").appendChild(card)

    document.body.firstElementChild.lastElementChild.children[1].querySelectorAll("span.cName, span.views").forEach((e)=>
        // e.insertAdjacentHTML("afterend","|")
        e.insertAdjacentHTML("afterend","|")
        
    )

}


createCard("Sigma Webdev course vid1","CodeWithHarry","23K","4 months","45:00","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ")


createCard("Sigma Webdev course vid2","CodeWithHarry","27K","2months","34:46","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ")

console.log("done!")

