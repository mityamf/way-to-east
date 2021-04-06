const createComments = () => {

  const commentsSlider = document.querySelector('.comments__slider');

  if (!commentsSlider) {
    return;
  }

  const commentThumbsProperties = {
    spaceBetween: 0,
    slidesPerView: 'auto',
    slidesOffsetAfter: 0,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
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
      noSwiping: true,
      noSwipingClass: 'comments__bottom',
      pagination: {
        el: '.comments .swiper-pagination',
        clickable: true,
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });

    let mobileSlider = () => {
      let thumbs = document.querySelectorAll('.gallery-thumbs .swiper-slide');
      let comments = document.querySelectorAll('.gallery-thumbs .swiper-slide');
      let removeActive = () => {
        thumbs.forEach((thumb) => {
          thumb.classList.remove('swiper-slide-thumb-active');
        });
        comments.forEach((comment) => {
          comment.classList.remove('swiper-slide-active');
        });
      };
      let showActive = (i = 0) => {
        thumbs[i].classList.add('swiper-slide-active');
        comments[i].classList.add('swiper-slide-active');
      };

      galleryThumbs.on('slideChange', function () {
        thumbs.forEach((thumb, i) => {
          if (thumb.classList.contains('swiper-slide-visible')) {
            removeActive();
            showActive(i);

            galleryTop.slideTo(i);
          }
        });
      });
    };

    if (window.innerWidth < 767) {
      mobileSlider();
    }

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
        noSwiping: true,
        noSwipingClass: 'comments__bottom',
        pagination: {
          el: '.comments .swiper-pagination',
          clickable: true,
        },
        thumbs: {
          swiper: galleryThumbs,
        },
      });
      if (window.innerWidth < 767) {
        mobileSlider();
      }
    });
  };

  createCommentsSwiper(commentsThumbsContainer, commentsTopContainer);

};

export {createComments};
