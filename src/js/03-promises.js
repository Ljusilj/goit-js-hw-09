const buttonElem = document.querySelector('button');
const formElem = document.querySelector('.form');
const inputDel = formElem.querySelector('[name="delay"]');
const inputDelStep = formElem.querySelector('[name="step"]');
const inputAmount = formElem.querySelector('[name="amount"]');

buttonElem.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();

  let delay = Number(inputDel.value);
  const step = Number(inputDelStep.value);
  const amount = Number(inputAmount.value);
  let position;
  for (let i = 1; i <= amount; i += 1) {
    position = i;
    createPromise(position, delay);
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  promise
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
