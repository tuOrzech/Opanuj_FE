// Definicja reguł walidacji jako funkcji, które zwracają true/false
const validationRules = [
  value => Number.isInteger(Number(value)),
  value => Number(value) > 0,
  value => Number(value) < 100,
  value => Number(value) % 2 === 0,
];

// Funkcja sprawdzająca wszystkie reguły
function isNumValid(value) {
  return validationRules.every(rule => rule(value));
}

function validator() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const result = document.getElementById('result');

  button.addEventListener('click', () => {
    const isValid = isNumValid(input.value) ? 'Valid' : 'Invalid';
    result.innerHTML = isValid;
  });

  const button2 = document.getElementById('button2');
  button2.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();