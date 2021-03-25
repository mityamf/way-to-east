const createComments = () => {
  const comments = document.querySelector('.comments');

  if (!comments) {
    return;
  }

  let createSlider = () => {
    const galleryThumbs = new Swiper('.comments .gallery-thumbs', {
      spaceBetween: 28,
      slidesPerView: 'auto',
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      breakpoints: {
        320: {
          spaceBetween: 0,
          slidesPerView: 1,
        },
        768: {
          spaceBetween: 28,
          slidesPerView: 'auto',
        },
      },
    });
    const galleryTop = new Swiper('.comments .gallery-top', {
      spaceBetween: 0,
      navigation: {
        nextEl: '.comments .swiper-button-next',
        prevEl: '.comments .swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
      breakpoints: {
        320: {
          pagination: {
            el: '.comments .swiper-pagination',
          },
        },
        768: {
          navigation: {
            nextEl: '.comments .swiper-button-next',
            prevEl: '.comments .swiper-button-prev',
          },
          thumbs: {
            swiper: galleryThumbs,
          },
        },
      },
    });
  };

  window.addEventListener('resize', createSlider);

  createSlider();
};

export {createComments};
