
const buttonElem = document.querySelector('button');
const formElem = document.querySelector('.form');
const inputDel = formElem.querySelector('[name="delay"]');
const inputDelStep = formElem.querySelector('[name="step"]');
const inputAmount = formElem.querySelector('[name="amount"]');

buttonElem.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();

  const initialDelay = Number(inputDel.value); 
  const step = Number(inputDelStep.value);
  const amount = Number(inputAmount.value);

  async function createPromises() {
    let delay = initialDelay; 
    for (let position = 1; position <= amount; position += 1) {
      try {
        await createPromise(position, delay);
        delay += step;
      } catch (error) {
        console.error(error);
      }
    }
  }

  createPromises();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  })
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}