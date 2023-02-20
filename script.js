var Main = document.getElementById("container")
var ButtonRed = document.createElement("button")

var ButtonBlue = document.createElement("button")

var ButtonGreen = document.createElement("button")


Main.appendChild(ButtonRed)
Main.appendChild(ButtonBlue)
Main.appendChild(ButtonGreen)
ButtonRed.innerText = "A cool button"
ButtonBlue.innerText = "A cooler button"
ButtonGreen.innerText = "The coolest button"
ButtonRed.onclick = function(){document.body.style.backgroundColor = "red"}
ButtonBlue.onclick = function(){document.body.style.backgroundColor = "blue"}
ButtonGreen.onclick = function(){document.body.style.backgroundColor = "green"}