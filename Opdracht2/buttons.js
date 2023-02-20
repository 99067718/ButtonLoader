var MainDiv = document.getElementById("container")
var aantal = prompt("Hoeveel buttons wil jij hebben? (zeg 69 pls)")
MainDiv.style.width = "500px"
document.body.style.display = "flex"
document.body.style.justifyContent = "center"
MainDiv.style.backgroundColor = "gray"
if (isNaN(aantal)){
    alert("Helaas is dit geen getal...")
    alert("We gaan nu de default value gebruiken.")
    aantal = 20
}
if (aantal == 69){
    alert("Yay, thanks!")
    document.body.style.backgroundColor = "red"
}

for (i = 0; i< aantal; i++){
    var newButton = document.createElement("button")
    newButton.innerText = i + 1
    newButton.style.backgroundColor = "green"
    newButton.onclick = function() {this.style.backgroundColor = "red"}
    newButton.style.marginLeft = "20px"
    newButton.style.marginTop = "10px"
    newButton.style.marginBottom = "10px"
    newButton.style.height = "40px"
    newButton.style.width = "40px"
    MainDiv.appendChild(newButton)
}