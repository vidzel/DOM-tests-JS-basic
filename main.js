const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculus1');
const input2 = document.querySelector('#calculus2');
const btn = document.querySelector('#btnCalculate');
const result = document.querySelector('#result');

form.addEventListener('click', listenForm);

function listenForm () {
/*     console.log({event});
    event.preventDefault(); */
    const total = parseInt(input1.value) + parseInt(input2.value);
    result.innerHTML = "Sum total is: " + total;
}

