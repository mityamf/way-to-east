import {disableScrolling} from '../utils/scroll-lock';

const REG_NAME = /^[a-z ]+$/i;
const REG_EMAIL = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)+(?:[a-z]{2,})$/;
const REG_MESSAGE = /^[^\u0400-\u04FF]+$/;
const MIN_LENGTH = 0;
const MAX_TEL_LENGTH = 16;

const loadForm = () => {

  const form = document.querySelector('.form');

  if (!form) {
    return;
  }

  const address = form.getAttribute('action');
  const method = form.getAttribute('method');
  const noConnection = form.getAttribute('data-noConnect');

  const sendFormButton = form.querySelector('.form__button');
  const modalSuccess = document.querySelector('.modal-success');
  const errorMessage = form.querySelector('.form__error-message');
  const wrapper = document.querySelector('.wrapper');
  const nameField = document.getElementById('name-field');
  const emailField = document.getElementById('email-field');
  const phoneField = document.getElementById('phone-field');
  const messageField = document.getElementById('message-field');
  const agreement = document.getElementById('accept');

  const checkInput = function (field, condition) {
    if (field === nameField) {
      field.value = field.value.replace(/\d/, '');
    }
    if (!condition) {
      field.classList.add('invalid');
      field.classList.remove('valid');
      errorMessage.classList.remove('hidden');
      errorMessage.innerHTML = field.dataset.error;
      return false;
    } else {
      field.classList.remove('invalid');
      field.classList.add('valid');
      errorMessage.classList.add('hidden');
      return true;
    }
  };

  function validate() {
    if (checkInput(nameField, nameField.value.length >= MIN_LENGTH && REG_NAME.test(String(nameField.value))) &&
        checkInput(emailField, (emailField.value.length >= MIN_LENGTH) && REG_EMAIL.test(String(emailField.value).toLowerCase())) &&
        checkInput(phoneField, (phoneField.value.replace(/\D+/g, '').length < MAX_TEL_LENGTH && phoneField.value !== '')) &&
        checkInput(messageField, messageField.value.length >= MIN_LENGTH && REG_MESSAGE.test(String(messageField.value))) &&
        checkInput(agreement, (agreement.checked))
    ) {
      return true;
    } else {
      return false;
    }
  }

  function sendForm() {
    if (!validate()) {
      return;
    }
    let data = new FormData(form);
    load(address, onSuccess, onError, data);
  }

  function iterateFields(evt) {
    if (evt.target.value.length !== 0) {
      switch (evt.target.id) {
        case 'name-field': checkInput(nameField, nameField.value.length >= MIN_LENGTH && REG_NAME.test(String(nameField.value.replace(/\d/, ''))));
          break;
        case 'email-field': checkInput(emailField, (emailField.value.length >= MIN_LENGTH) && REG_EMAIL.test(String(emailField.value).toLowerCase()));
          break;
        case 'phone-field': checkInput(phoneField, checkInput(phoneField.value.replace(/\D+/g, '').length < MAX_TEL_LENGTH && phoneField.value !== ''));
          break;
        case 'message-field': checkInput(messageField, messageField.value.length >= MIN_LENGTH && REG_MESSAGE.test(String(messageField.value)));
          break;
      }
    }
  }

  sendFormButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    sendForm();
  });

  form.addEventListener('blur', iterateFields, true);

  form.addEventListener('focus', iterateFields, true);

  form.addEventListener('input', iterateFields, true);

  agreement.addEventListener('change', function () {
    checkInput(agreement, (agreement.checked));
  });

  const load = (url, onSuccess, onError, sent) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', () => {
      let result = xhr.response;
      if (xhr.status === 200 && result.status === true) {
        onSuccess(result.status);
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
    // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send(sent);
  };

  const onSuccess = (responseSuccess) => {
    if (responseSuccess) {
      openModalSuccess();
      form.reset();
    }
  };

  const onError = (message) => {
    errorMessage.classList.remove('hidden');
    errorMessage.innerHTML = message;
  };

  const openModalSuccess = () => {
    modalSuccess.classList.add('modal--active');
    wrapper.classList.add('wrapper--blur');
    disableScrolling();
  };
};

export {loadForm};
