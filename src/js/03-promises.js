import { Notify } from 'notiflix/build/notiflix-notify-aio';
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}

const form = document.querySelector('.form');
form.addEventListener("submit", onSubmitForm);

function onSubmitForm(element) {
  element.preventDefault();
  let { delay, step, amount } = element.currentTarget;

  amount = Number(amount.value);
  step = Number(step.value);
  delay = Number(delay.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ i, delay }) => {
        setTimeout(() => {
          Notify.success(`✅ Fulfilled promise ${i} in ${delay}ms`);
        }, delay);
      })
      .catch(({ i, delay }) => {
        setTimeout(() => {
          Notify.failure(`❌ Rejected promise ${i} in ${delay}ms`);
        }, delay);
      });
    delay += step;
  }

}