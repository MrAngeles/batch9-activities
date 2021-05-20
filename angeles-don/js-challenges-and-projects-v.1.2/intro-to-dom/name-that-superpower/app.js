var justiceLeague = [
    {name: "Superman", superpower: "Super strength"}, 
    {name: "Batman", superpower: "Super rich"},
    {name: "Wonder Woman", superpower: "Super lasso"}, 
    {name: "The Flash", superpower: "Super speed"}, 
    {name: "Green Lantern", superpower: "Super ring"}
]


for (i = 0; i <justiceLeague.length; i++) {
    let hero = document.getElementById('league')
    let newList = document.createElement('li');
    newList.textContent = justiceLeague[i].name + ' - ' + justiceLeague[i].superpower;
    hero.appendChild(newList);
}


document.getElementById("input").addEventListener("keypress", myFunction);

function myFunction() {
  document.getElementById("input").style.backgroundColor = "black";
  document.getElementById("input").style.color = "white";
}

