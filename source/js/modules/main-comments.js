const createComments = () => {
  const comments = document.querySelector('.comments');

  if (!comments) {
    return;
  }

  let commentsSwiper;

  let breakpointChecker = function () {
    if (window.innerWidth < '768') {
      commentsSwiper = new Swiper('.comments .swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
      });
    } else {

      if (commentsSwiper) {
        commentsSwiper.destroy(true, true);
      }
    }
  };

  window.addEventListener('resize', breakpointChecker);

  breakpointChecker();
};

export {createComments};
