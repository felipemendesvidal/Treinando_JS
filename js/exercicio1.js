// exercicio 01
let temperatura = document.querySelector('#temperatura');
let celcius = document.querySelector('#celcius');
let fahrenheit = document.querySelector('#fahrenheit');
let btnConverter = document.querySelector('#btnConverter');

btnConverter.addEventListener('click', converter);// outras formas alem do click : keyup, oneChange - pesquisar addenventlistener js

function converter(event) {
    event.preventDefault();

    if (!celcius.checked && !fahrenheit.checked) {
        alert('OPS ... Informe o tipo de conversão');
    } else if (celcius.checked) {
        alert(((temperatura.value - 32) * 5) / 9);
    } else {
        alert(((temperatura.value * 9) / 5) + 32);
    }
}
// exercicio 01end