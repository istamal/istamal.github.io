const button = document.getElementById('button');

let firstInput = document.getElementById("input-1"),
    secondInput = document.getElementById('input-2');

button.addEventListener('click', () => {

    let result = Number(firstInput.value) + Number(secondInput.value);
    alert(`Если сложить ${firstInput.value} и ${secondInput.value} плучается ${result.toFixed(1)}`);

});