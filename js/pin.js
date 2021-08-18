function getPin() {
    const randomPin = Math.random() * 1000000;
    const roundPin = Math.round(randomPin);
    const roundPinString = roundPin + '';

    if (roundPinString.length == 6) {
        return roundPin;
    } else {
        // console.log('Call Again', roundPin);
        getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('pin-show').value = pin;
}


document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    } else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

document.getElementById('submit-btn').addEventListener('click', function () {
    const pinMatch = document.getElementById('pin-show').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('success-message');
    const failMessage = document.getElementById('fail-message');

    if (pinMatch == typedNumbers) {
        failMessage.style.display = 'none';
        successMessage.style.display = 'block';
    } else {
        successMessage.style.display = 'none';
        failMessage.style.display = 'block';
    }
})