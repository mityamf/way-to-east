const loadForm = () => {

  const form = document.querySelector('.form');
  const address = form.getAttribute('action');
  const method = form.getAttribute('method');
  const noConnection = form.getAttribute(`data-noConnect`);
  const sendFormButton = form.querySelector('.form__button');
  const modalSuccess = document.querySelector('.modal-success');
  const errorMessage = form.querySelector('.form__error-message');
  const wrapper = document.querySelector('.wrapper');

  const load = (url, onSuccess, onError, sent) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', () => {
      let result = xhr.response;
      if (xhr.status === 200 && result.status === true) {
        onSuccess(xhr.response);
      } else {
        onError(result.errors);
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
      openModalSuccess();
    }
  };

  const onError = (message) => {
    errorMessage.classList.remove('hidden');
    errorMessage.textContent = message;
  };

  function sendForm() {
    load(address, onSuccess, onError);
  }

  sendFormButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    sendForm();
  });

  const openModalSuccess = () => {
    modalSuccess.classList.add('modal--active');
    wrapper.classList.add('wrapper--blur');
    disableScrolling();
  }
};

export {loadForm};
