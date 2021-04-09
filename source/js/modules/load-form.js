const loadForm = () => {

  let form = document.querySelector('.form');
  let address = form.getAttribute('action');
  let method = form.getAttribute('method');
  let noConnection = form.getAttribute('data-noConnect');
  let sendFormButton = form.querySelector('.form__button');
  let modalSuccess = document.querySelector('.modal-success');
  let errorMessage = form.querySelector('.form__error-message');

  const load = (url, onSuccess, onError, sent) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError(noConnection);
      }
    });

    xhr.addEventListener('error', () => {
      onError(noConnection);
    });
    xhr.addEventListener('timeout', () => {
      onError(noConnection);
    });

    xhr.timeout = 5000;

    xhr.open(method, url, true);
    xhr.setRequestHeader(`Content-Type`, `application/x-www-form-urlencoded`);
    xhr.setRequestHeader(`X-Requested-With`, `XMLHttpRequest`);
    xhr.send(sent);
  };

  const onSuccess = (responseSuccess) => {
    if (responseSuccess.success) {
      modalSuccess.classList.add('modal--active');
    }
  };

  const onError = (message) => {
    errorMessage.classList.remove('hidden');
    errorMessage.textContent = message;
  };

  function sendForm() {
    load(address, onSuccess, onError);
  }

  sendFormButton.addEventListener('click', sendForm());
};

export {loadForm};
