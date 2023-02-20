var Main = document.getElementById("container")
var body = document.getElementsByClassName("bgc")
var ButtonRed = document.createElement("button")
var ButtonBlue = document.createElement("button")
body[0].style.backgroundColor = "gray"
var ButtonGreen = document.createElement("button")

Main.appendChild(ButtonRed)
Main.appendChild(ButtonBlue)
Main.appendChild(ButtonGreen)
Main.style.backgroundColor = "white"
Main.style.borderRadius = "30px"
Main.style.width = "350px"
Main.style.height = "50px"
Main.style.display = "flex"
Main.style.alignSelf = "center"
Main.style.alignItems = "center"
Main.style.justifyContent = "center"
body[0].style.display = "flex"
body[0].style.justifyContent = "center"

ButtonRed.innerText = "A cool button"
ButtonRed.style.backgroundColor = "red"
ButtonBlue.innerText = "A cooler button"
ButtonBlue.style.backgroundColor = "blue"
ButtonGreen.innerText = "The coolest button"
ButtonGreen.style.backgroundColor = 'green'
ButtonRed.onclick = function(){document.body.style.backgroundColor = "red"}
ButtonBlue.onclick = function(){document.body.style.backgroundColor = "blue"}
ButtonGreen.onclick = function(){document.body.style.backgroundColor = "green"}