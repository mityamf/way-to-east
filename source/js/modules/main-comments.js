const createComments = () => {

  const commentsSlider = document.querySelector('.comments__slider');

  if (!commentsSlider) {
    return;
  }

  const commentThumbsProperties = {
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
  };
  const commentsThumbsContainer = document.querySelector('.comments .gallery-thumbs');
  const commentsTopContainer = document.querySelector('.comments .gallery-top');

  const createCommentsSwiper = (thumbsContainer, topContainer) => {
    let galleryThumbs = new window.Swiper(thumbsContainer, commentThumbsProperties);

    let galleryTop = new window.Swiper(topContainer, {
      spaceBetween: 0,
      observer: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        el: '.comments .swiper-pagination',
        clickable: true,
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });

    window.addEventListener('resize', function () {
      galleryThumbs.destroy();
      galleryThumbs = new window.Swiper(thumbsContainer, commentThumbsProperties);
      galleryTop.destroy();
      galleryTop = new window.Swiper(topContainer, {
        spaceBetween: 0,
        observer: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
        pagination: {
          el: '.comments .swiper-pagination',
          clickable: true,
        },
        thumbs: {
          swiper: galleryThumbs,
        },
      });
    });
  };

  createCommentsSwiper(commentsThumbsContainer, commentsTopContainer);

};

export {createComments};
/*
galleryThumbs.addEventListener('slideChange', function () {
  if (window.innerWidth < 768) {
    const commentsAvatars = commentsSlider.querySelectorAll('.comments__top');
    const commentsTexts = commentsSlider.querySelectorAll('.comments__bottom');

    const visibleSlide = commentsSlider.querySelector('.swiper-slide-visible');
    visibleSlide.classList.add('swiper-slide-active');

    console.log(commentsAvatars);
    console.log(commentsTexts);
    console.log(visibleSlide);
  }
});

*/

