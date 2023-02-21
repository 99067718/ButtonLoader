var colors = ["red", "purple", "blue", "black", "vanish"]
while (true){
    var MainDiv = document.getElementById("container");
    var aantal = prompt("Hoeveel buttons wil jij hebben? (zeg 69 pls)");
    MainDiv.style.width = "500px";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    MainDiv.style.backgroundColor = "gray";
    if (isNaN(aantal)){
        alert("Helaas is dit geen getal...");
    }
    else{
        break;
    };
};
;
if (aantal == 69){;
    alert("Yay, thanks!");
    document.body.style.backgroundColor = "red";
};
;
for (i = 0; i< aantal; i++){
    var newButton = document.createElement("button");
    newButton.innerText = i + 1;
    newButton.style.backgroundColor = "green";
    newButton.value = 0
    newButton.onclick = function() {
        console.log(this.value)
        if (this.value >= colors.length - 1){
            MainDiv.removeChild(this)
        }
        else{
            this.style.backgroundColor = colors[this.value]
            this.value = parseInt(this.value) + 1 
        }
};
    newButton.style.marginLeft = "20px";
    newButton.style.marginTop = "10px";
    newButton.style.marginBottom = "10px";
    newButton.style.height = "40px";
    newButton.style.width = "40px";
    MainDiv.appendChild(newButton);
};