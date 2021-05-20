const btnQuotes = document.getElementById('quoteBtn');
const quoteDisplay = document.getElementById('quote');
const authorDisplay = document.getElementById('author');
const addNewQuotes = document.getElementById('add-quotes-button');

const quoteList = [
    {
        id: 0,
        author: "Amy Poehler",
        quote: "Change the world by being yourself"
    },
    {
        id: 1,
        author: "T.S Eliot",
        quote: "Every moment is a fresh beginning."
      },
      {
        id: 2,
        author: "Mark Twain",
        quote: "Never regret anything that made you smile."
      }
];

btnQuotes.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quoteList.length);
    // console.log(random);
    quoteDisplay.innerText =  ' " ' + quoteList[random].quote + ' " ' ;
    authorDisplay.innerText = ' - ' + quoteList[random].author;
}) 

addNewQuotes.addEventListener('click', function (){
    let author = document.getElementById('addauthor').value;
    let quote = document.getElementById('addquote').value;
        
    quoteList.push({
      id: quoteList.length,
      author,
      quote      
    });
    
    modal.style.display = 'none';
  
  })


//add button modal

// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#addQuote');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
