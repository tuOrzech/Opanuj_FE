function isNumValid(value) {
  const number = Number(value);
  return (
    Number.isInteger(number) &&
    number > 0 &&
    (number < 100) && (number % 2 === 0)
  );
}

function validator() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  button.addEventListener('click', () => {
    const numCheck = isNumValid(input.value) ? 'Valid' : 'Invalid';
    result.innerHTML = numCheck;
  });


  button2.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();