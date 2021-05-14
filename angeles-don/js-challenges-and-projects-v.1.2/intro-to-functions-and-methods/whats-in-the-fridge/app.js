const downButton = document.querySelector('#down')
const upButton = document.querySelector('#up')
const buyListDisplay = document.querySelector('#first-list')
const fridgeListDisplay = document.querySelector('#second-list')

const buyList = ['chicharon', 'buko pie', 'mango', 'bacon']
const fridge = []

//Challenge: Please fill the fridge array with 5 items of your choice. 

fridge.push ('hotdog', 'chicken nuggets', 'ice tubig', 'siomai', 'beef')


//Challenge 2: You have bought some chicharon.
//Please remove it from the buyList and add it to the items in fridge.
fridge.push(buyList[0]);
buyList.shift();

//Challenge 3: Write a function that will remove an item from the fridge,
//and put it in the buyList, on the press of the moveUp button.

function moveUp(){
    //your code
    if (fridge.length !== 0) {
        buyList.push(fridge[0]);
        fridge.shift();

        buyListDisplay.innerHTML = buyList;
        fridgeListDisplay.innerHTML = fridge;
    }
    else
    {
        alert('No more items in the fridge!')
    }
}

upButton.addEventListener('click', moveUp)

//Challenge 4: Write a function that will remove the last item in the buyList, 
//and put it in the fridge.

function moveDown(){
    //your code
    if (buyList.length !== 0) {
        fridge.push(buyList[buyList.length - 1]);
        buyList.pop();

        buyListDisplay.innerHTML = buyList;
        fridgeListDisplay.innerHTML = fridge;
    }
    else
    {
        alert('No more items to put in the fridge!')
    }
}

downButton.addEventListener('click', moveDown)

buyListDisplay.innerHTML = buyList
fridgeListDisplay.innerHTML = fridge