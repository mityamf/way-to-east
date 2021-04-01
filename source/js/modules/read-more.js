const readMore = () => {

  const readMoreButton = document.querySelector('.hotel-card__button');

  if (!readMoreButton) {
    return;
  }

  const textLong = document.querySelector('.hotel-card__text-wrapper');

  readMoreButton.onclick = function () {
    textLong.classList.add('show');
    readMoreButton.classList.add('hidden');
  }
};

export {readMore};
