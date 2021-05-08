const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


document.addEventListener("click", () => {
    if (navbarLinks.classList.contains("active")) {
        navbarLinks.classList.remove("active")
       }
    }, true);


// modal for pre-order button

const modal = document.getElementById('simpleModal');
const modalBtn = document.getElementById('btn1');
const closeBtn = document.getElementsByClassName('closeBtn')[0];

// listen for open click
modalBtn.addEventListener('click', openModal);
// listen for close click
closeBtn.addEventListener('click', closeModal);
// listen for outside click
window.addEventListener('click', outsideClick);

function openModal(){
  modal.style.display = 'block';
}


function closeModal(){
  modal.style.display = 'none';
}

function outsideClick(e){
  if(e.target == modal){
  modal.style.display = 'none';
  }
}



