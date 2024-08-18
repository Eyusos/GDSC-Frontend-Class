// home
const counter = document.getElementById('counterr');


const buttonOne = document.getElementById('onee');
const buttonTwo = document.getElementById('twoo');
const buttonThree = document.getElementById('thre');


let count = 0;


function updateCounter(value) {
    count += value;
    counter.textContent = count;
}


buttonOne.addEventListener('click', () => {
    updateCounter(1);
});


buttonTwo.addEventListener('click', () => {
    updateCounter(2);
});


buttonThree.addEventListener('click', () => {
    updateCounter(3);
});

// guest

const display = document.getElementById('counter');


const addButtonOne = document.getElementById('one');
const addButtonTwo = document.getElementById('two');
const addButtonThree = document.getElementById('three');


let totalCount = 0;


addButtonOne.addEventListener('click', function() {
    totalCount += 1;
    display.textContent = totalCount;
});


addButtonTwo.addEventListener('click', function() {
    totalCount += 2;
    display.textContent = totalCount;
});


addButtonThree.addEventListener('click', function() {
    totalCount += 3;
    display.textContent = totalCount;
});

