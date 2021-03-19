const mobileMenu = () => {
  const header = document.querySelector('.header');

  if (header) {
    const openButton = header.querySelector('.main-nav__open-menu');
    const closeButton = header.querySelector('.main-nav__close-menu');
    const wrapper = document.querySelector('.wrapper');

    openButton.addEventListener('click', function () {
      if (!header.classList.contains('header--mobile')) {
        header.classList.add('header--mobile');
        wrapper.classList.add('wrapper--no-scrollbar');
      }
    });

    closeButton.addEventListener('click', function () {
      if (header.classList.contains('header--mobile')) {
        header.classList.remove('header--mobile');
        wrapper.classList.remove('wrapper--no-scrollbar');
      }
    });
  }
};

export {mobileMenu};
