// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

//=======================================

const form = document.querySelector('.form');
form.addEventListener('submit', createPromise);

function createPromise(e) {
  e.preventDefault();
  const state = e.target.state.value;
  const delay = e.target.delay.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(
          iziToast.success({
            title: 'Resolve',
            message: `✅ Fulfilled promise in ${delay}ms`,
            position: 'topRight',
          })
        );
      } else {
        reject(
          iziToast.error({
            title: 'Reject',
            message: `❌ Rejected promise in ${delay}ms`,
            position: 'topLeft',
          })
        );
      }
    }, delay);
  });
  console.log(e.currentTarget.delay.value);
  console.log(e.currentTarget.state.value);
}
