//background color
blue.onclick = color1;
blue.hover=color3;
green.onclick=color2;
yellow.onclick=color3;
red.onclick=color4;
pink.onclick=color5;

function color1(){
    document.body.style.backgroundColor="blue"
}

function color2(){
    document.body.style.backgroundColor="green"
}

function color3(){
    document.body.style.backgroundColor="yellow"
}
function color4(){
    document.body.style.backgroundColor="red"
}
function color5(){
    document.body.style.backgroundColor="pink"
}

// counter 
plusButton = document.getElementById('plus');
minusButton = document.getElementById('minus');
counterElement = document.getElementById('counter');
counterValue = 0;

plusButton.onclick = incr;
minusButton.onclick=decr;

function incr() {
    if( counterValue<=19){
    counterValue++;
    counterElement.textContent = counterValue;
    }
    else{
        counterElement.textContent = "max value is 20";
    }
}


function decr() {
    if( counterValue>=1){
    counterValue--;
    counterElement.textContent = counterValue;
    }
    else{
        counterElement.textContent = "min value is 0";
    }
};

// submit


    const form = document.getElementById('formm');
    const firstNameInput = document.getElementById('first');
    const lastNameInput = document.getElementById('last');
    const passwordInput = document.getElementById('pass');
    const submitButton = document.getElementById('sub');
    result= document.getElementById('result');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        if (firstNameInput.value === '') {
            firstNameInput.style.backgroundColor = 'pink';
        } 

        if (lastNameInput.value === '') {
            lastNameInput.style.backgroundColor = 'pink';
        }

        if (passwordInput.value === '') {
            passwordInput.style.backgroundColor = 'pink';
        } 

        else if(passwordInput.value !==''&& lastNameInput.value !==''&&
        firstNameInput.value !=='' ){
            form.style.display="none";
            result.innerHTML="submited successfully";
            
        }
    });

