const container = document.querySelector('#container');
const changeBtn = document.querySelector('#changeBtn');
const text = document.querySelector('#text');
const input = document.querySelector('#input');

let randomNumber = Math.floor(Math.random() * 100);


changeBtn.addEventListener('click', () => {
    console.log(randomNumber);
    let inputVal = +input.value
    if (inputVal === randomNumber) {
        correctHandeler()
    } else if (inputVal > randomNumber) {
        biggerHandeler()
    } else if (inputVal < randomNumber) {
        smallerHandeler()
    } else {
        alert('Please choose a number:')
    }
    input.value = ''
})
function correctHandeler() {

    text.textContent = 'Great! you choose a right number';
    input.remove()
    container.style.backgroundColor = '#46f046'
    container.style.color = '#fff'
    changeBtn.remove()

}

function biggerHandeler() {
    text.textContent = 'Oh, your number is smaller';

}
function smallerHandeler() {
    text.textContent = 'ops, your number is smaller';

}

function randomLog(number) {
    console.log(number);
}


