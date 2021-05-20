let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');



// addToDoButton.addEventListener('click', function(){
//     var paragraph = document.createElement('p');
//     paragraph.classList.add('paragraph-styling');
//     paragraph.innerText = inputField.value;
//     toDoContainer.appendChild(paragraph);
//     inputField.value = "";
//     paragraph.addEventListener('click', function(){
//         paragraph.style.textDecoration = "line-through";
//         paragraph.style.color = "red";
//     })
//     paragraph.addEventListener('dblclick', function(){
//         toDoContainer.removeChild(paragraph);
//     })
// })

inputField.addEventListener('keyup', function(e){
    if(e.keyCode === 13) {
        var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
        paragraph.style.color = "red";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
    }
   
})
