const hotelPreviewSlider = () => {
  document.querySelectorAll('.hotel-preview__slider').forEach((n) => {
    const slider = new Swiper(n.querySelector('.swiper-container'), {
      navigation: {
        nextEl: n.querySelector('.swiper-button-next'),
        prevEl: n.querySelector('.swiper-button-prev'),
      },
    });
  });
};

export {hotelPreviewSlider};
