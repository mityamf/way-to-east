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
  const form = document.querySelector('.form');
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
  })

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    modalSuccess.classList.add('modal--active');
    wrapper.classList.add('wrapper--blur');
    disableScrolling();
  });

  buttonSuccessClose.addEventListener('click', function () {
    modalSuccess.classList.remove('modal--active');
    wrapper.classList.remove('wrapper--blur');
    enableScrolling();
  });

  modalSuccessOverlay.addEventListener('click', function () {
    modalSuccess.classList.remove('modal--active');
    wrapper.classList.remove('wrapper--blur');
    enableScrolling();
  });

  modalSuccessButton.addEventListener('click', function () {
    modalSuccess.classList.remove('modal--active');
    wrapper.classList.remove('wrapper--blur');
    enableScrolling();
  });

};

export {modal};

