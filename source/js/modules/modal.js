const modal = () => {

  const modals = document.querySelector('.modal');

  if (!modals) {
    return;
  }

  const modalVideo = document.querySelector('.modal-video');
  const modalSuccess = document.querySelector('.modal-success');
  const modalVideoLink = document.querySelector('.hotel-card__link--video');
  const buttonVideoClose = modalVideo.querySelector('.modal__close-btn');
  const modalVideoOverlay = modalVideo.querySelector('.modal__overlay');
  const buttonSuccessClose = modalSuccess.querySelector('.modal__close-btn');
  const modalSuccessOverlay = modalSuccess.querySelector('.modal__overlay');
  const modalSuccessButton = modalSuccess.querySelector('.modal-success__button');
  const form = document.querySelector('.form');


  buttonVideoClose.addEventListener('click', function () {
    modalVideo.classList.remove('modal--active');
  });

  modalVideoLink.addEventListener('click', function () {
    modalVideo.classList.add('modal--active');
  });

  modalVideoOverlay.addEventListener('click', function () {
    modalVideo.classList.remove('modal--active');
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      modalVideo.classList.remove('modal--active');
      modalSuccess.classList.remove('modal--active');
    }
  })

  form.addEventListener('submit', function () {
    modalSuccess.classList.add('modal--active');
  });

  buttonSuccessClose.addEventListener('click', function () {
    modalSuccess.classList.remove('modal--active');
  });

  modalSuccessOverlay.addEventListener('click', function () {
    modalSuccess.classList.remove('modal--active');
  });

  modalSuccessButton.addEventListener('click', function () {
    modalSuccess.classList.remove('modal--active');
  });

};

export {modal};
