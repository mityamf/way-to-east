const hotelCardSlider = () => {

  const hotelsSliders = document.querySelectorAll('.hotel-card__slider');

  if (hotelsSliders.length === 0) {
    return;
  }


  if (hotelsSliders.length !== 0) {
    const createSliders = () => {
      hotelsSliders.forEach((n) => {
        const slider = new Swiper(n.querySelector('.swiper-container'), {
          loop: true,
          slidesPerView: 1,
          spaceBetween: 1,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      });
    };

    createSliders();
  }
};

export {hotelCardSlider};
