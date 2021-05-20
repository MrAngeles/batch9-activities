const goal = document.getElementById('goal1');
const g = document.getElementById('goalE');


goal.addEventListener('keyup', function(e){
    if(e.keyCode === 13) {
       g.innerText = goal.value;            
       goal.style.display = "none"; 
       goal.value = "";
       g.style.display = "block";
       g.style.textDecoration = "none";
    }

    g.addEventListener('click', function(){
        g.style.textDecoration = "line-through";
    })

    g.addEventListener('dblclick', function(){
        goal.style.display = "block";
        g.style.display = "none";
    })
})