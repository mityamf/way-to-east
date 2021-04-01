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
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      });
    };

    window.addEventListener('resize', function () {
        if(window.screen.width < 768) {
          createSliders();
        }
        if(window.screen.width >= 768) {
          location.reload();
        }
    });

  }
};

export {hotelCardSlider};
