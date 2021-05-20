const robot = document.querySelector('.robot')

//Challenge: Make Eve move when you click its body.
var counter = 0
function moveRobot() {
    //add code here
    counter += 150
    robot.style.marginLeft = counter;
   
}
robot.addEventListener('click', moveRobot)