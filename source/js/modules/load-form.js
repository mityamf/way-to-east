const REG = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const MIN_LENGTH = 3;
const MIN_TEL_LENGTH = 11;
const ERROR_TEXT = {
  length: '<p>Поле обязательно для заполнения и должно содержать не менее 3-х символов</p>',
  email: '<p>Адрес электронной почты должен содержать буквы или цифры до символа @, после него, затем точку и домен первого уровня.</p>',
  phone: '<p>Недостаточное количество цифр в номере телефона</p>',
  agreement: '<p>Подтвердите свое согласие на обработку данных</p>',
};

const loadForm = () => {

  const form = document.querySelector('.form');
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

  if (!form) {
    return;
  }

  const checkForMinLength = function (field) {
    if (field.value.length < MIN_LENGTH) {
      field.classList.add('invalid');
      field.classList.remove('valid');
      errorMessage.classList.remove('hidden');
      errorMessage.innerHTML = ERROR_TEXT.length;
      return false;
    } else {
      field.classList.remove('invalid');
      field.classList.add('valid');
      errorMessage.classList.add('hidden');
      return true;
    }
  };

  const validateEmail = function () {
    if (!(emailField.value.length >= MIN_LENGTH) || !REG.test(String(emailField.value).toLowerCase())) {
      emailField.classList.add('invalid');
      emailField.classList.remove('valid');
      errorMessage.classList.remove('hidden');
      errorMessage.innerHTML = ERROR_TEXT.email;
      return false;
    } else {
      emailField.classList.remove('invalid');
      emailField.classList.add('valid');
      errorMessage.classList.add('hidden');
      return ((emailField.value.length >= MIN_LENGTH) && REG.test(String(emailField.value).toLowerCase()));
    }
  };

  const validatePhone = function () {
    if (phoneField.value.replace(/\D+/g, '').length < MIN_TEL_LENGTH) {
      phoneField.classList.add('invalid');
      phoneField.classList.remove('valid');
      errorMessage.classList.remove('hidden');
      errorMessage.innerHTML = ERROR_TEXT.phone;
      return false;
    } else {
      phoneField.classList.remove('invalid');
      phoneField.classList.add('valid');
      errorMessage.classList.add('hidden');
      return (phoneField.value.replace(/\D+/g, '').length >= MIN_TEL_LENGTH);
    }
  };

  const checkAgreement = function () {
    if (!agreement.checked) {
      agreement.classList.add('invalid');
      errorMessage.classList.remove('hidden');
      errorMessage.innerHTML = ERROR_TEXT.agreement;
      return false;
    } else {
      agreement.classList.remove('invalid');
      errorMessage.classList.add('hidden');
      return true;
    }
  };

  function validate() {
    if (checkForMinLength(nameField) && validateEmail() && validatePhone() && checkForMinLength(messageField) && checkAgreement()) {
      return true;
    } else {
      return false;
    }
  }

  function sendForm() {
    if (!validate()) {
      return;
    }

    load(address, onSuccess, onError);
  }

  sendFormButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    sendForm();
  });

  nameField.addEventListener('blur', function () {
    if (nameField.value.length !== 0) {
      checkForMinLength(nameField);
    }
  });
  emailField.addEventListener('blur', function () {
    if (emailField.value.length !== 0) {
      validateEmail();
    }
  });
  phoneField.addEventListener('blur', function () {
    if (phoneField.value.length !== 0) {
      validatePhone();
    }
  });
  messageField.addEventListener('blur', function () {
    if (messageField.value.length !== 0) {
      checkForMinLength(messageField);
    }
  });
  nameField.addEventListener('focus', function () {
    if (nameField.value.length !== 0) {
      checkForMinLength(nameField);
    }
  });
  emailField.addEventListener('focus', function () {
    if (emailField.value.length !== 0) {
      validateEmail();
    }
  });
  phoneField.addEventListener('focus', function () {
    if (phoneField.value.length !== 0) {
      validatePhone();
    }
  });
  messageField.addEventListener('focus', function () {
    if (messageField.value.length !== 0) {
      checkForMinLength(messageField);
    }
  });

  nameField.addEventListener('input', function () {
    if (nameField.value.length !== 0) {
      checkForMinLength(nameField);
    }
  });
  emailField.addEventListener('input', function () {
    if (emailField.value.length !== 0) {
      validateEmail();
    }
  });
  phoneField.addEventListener('input', function () {
    if (phoneField.value.length !== 0) {
      validatePhone();
    }
  });
  messageField.addEventListener('input', function () {
    if (messageField.value.length !== 0) {
      checkForMinLength(messageField);
    }
  });
  agreement.addEventListener('change', function () {
    checkAgreement();
  });

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
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send(sent);
  };

  const onSuccess = (responseSuccess) => {
    if (responseSuccess.success) {
      openModalSuccess();
    }
  };

  const onError = (message) => {
    errorMessage.classList.remove('hidden');
    errorMessage.innerHTML = message;
  };

  const openModalSuccess = () => {
    modalSuccess.classList.add('modal--active');
    wrapper.classList.add('wrapper--blur');
    // disableScrolling();
  };
};

export {loadForm};
