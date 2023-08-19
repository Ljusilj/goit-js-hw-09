function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

document.querySelector('.form').addEventListener('submit', function(event) {
  event.preventDefault();

  const delayInput = parseInt(document.querySelector('input[name="delay"]').value);
  const stepInput = parseInt(document.querySelector('input[name="step"]').value);
  const amountInput = parseInt(document.querySelector('input[name="amount"]').value);

  const promises = [];

  for (let i = 1; i <= amountInput; i++) {
    const currentDelay = delayInput + (i - 1) * stepInput;
    promises.push(createPromise(i, currentDelay));
  }

  Promise.allSettled(promises).then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        console.log(`✅ Fulfilled promise ${result.value.position} in ${result.value.delay}ms`);
      } else {
        console.log(`❌ Rejected promise ${result.reason.position} in ${result.reason.delay}ms`);
      }
    });
  });
});