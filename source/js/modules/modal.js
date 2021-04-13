import {disableScrolling, enableScrolling} from '../utils/scroll-lock';

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
  const wrapper = document.querySelector('.wrapper');
  const video = document.getElementById('video');

 const stopVideo = (video) => {
    video.pause();
    video.currentTime = 0;
}

  buttonVideoClose.addEventListener('click', function () {
    modalVideo.classList.remove('modal--active');
    enableScrolling();
    stopVideo(video);
  });

  modalVideoLink.addEventListener('click', function () {
    modalVideo.classList.add('modal--active');
    disableScrolling();
  });

  modalVideoOverlay.addEventListener('click', function () {
    modalVideo.classList.remove('modal--active');
    enableScrolling();
    stopVideo(video);
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      modalVideo.classList.remove('modal--active');
      modalSuccess.classList.remove('modal--active');
      wrapper.classList.remove('wrapper--blur');
      enableScrolling();
      stopVideo(video);
    }
  });

  const closeModalSuccess = () => {
    modalSuccess.classList.remove('modal--active');
    wrapper.classList.remove('wrapper--blur');
    enableScrolling();
  };

  buttonSuccessClose.addEventListener('click', function () {
    closeModalSuccess();
  });

  modalSuccessOverlay.addEventListener('click', function () {
    closeModalSuccess();
  });

  modalSuccessButton.addEventListener('click', function () {
    closeModalSuccess();
  });

};

export {modal};

