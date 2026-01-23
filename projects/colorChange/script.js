const background= document.getElementById("background")
const colorBtn = document.getElementById("change-btn")

function randColor(){
    return Math.floor(Math.random()*257)
}


colorBtn.addEventListener("click", change)

function change(){
    background.style.backgroundColor = `rgb(${randColor()}, ${randColor()}, ${randColor()})`
    console.log(background.style.backgroundColor)
}


