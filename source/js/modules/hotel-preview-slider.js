const hotelPreviewSlider = () => {
  const hotelsSliders = document.querySelectorAll('.hotel-preview__slider');

  if (hotelsSliders.length === 0) {
    return;
  }

  if (hotelsSliders.length !== 0) {
    const createSliders = () => {
      hotelsSliders.forEach((n) => {
        const slider = new Swiper(n.querySelector('.swiper-container'), {
          loop: true,
          navigation: {
            nextEl: n.querySelector('.swiper-button-next'),
            prevEl: n.querySelector('.swiper-button-prev'),
          },
        });
      });
    };

    createSliders();

    window.addEventListener('resize', createSliders);

  }
};

export {hotelPreviewSlider};
