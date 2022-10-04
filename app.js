const form = document.querySelector('.numForm');
const range = document.querySelector('.rangeInput');
const inputNum = form.querySelector('.inputNum');
const maxNum = document.querySelector('.maxNum');
const paintChose = document.querySelector('.paintChose');
const paintResult = document.querySelector('.paintResult');

function result(myNum, randNum){
    paintChose.innerText = `You chose: ${myNum}, the machine chose ${randNum}`;
    myNum = parseInt(myNum);
    if (myNum === randNum){
        paintResult.innerText = `You won!`;
    } else if (myNum > randNum || myNum < 0){
        paintResult.innerText = `This is wrong number.`;
    } else {
        paintResult.innerText = ` You lose!`;
    };
};

function makeRandNum(e){
    e.preventDefault(); // D!!!!!!
    const myNum = inputNum.value;
    const maxValue = range.value;
    const randNum = Math.ceil(Math.random() * maxValue);

    result(myNum, randNum);
};

function handleInput(){
    const maxNumValue = range.value;

    maxNum.innerText = `${maxNumValue}`;
    form.addEventListener("submit", makeRandNum);
};

function init(){
    range.oninput = handleInput;
};
init();