const mobileMenu = () => {
  const header = document.querySelector('.header');

  if (header) {
    const openButton = header.querySelector('.main-nav__open-menu');
    const closeButton = header.querySelector('.main-nav__close-menu');

    openButton.addEventListener('click', function () {
      if (!header.classList.contains('header--mobile')) {
        header.classList.add('header--mobile');
      }
    });

    closeButton.addEventListener('click', function () {
      if (header.classList.contains('header--mobile')) {
        header.classList.remove('header--mobile');
      }
    });
  }
};

export {mobileMenu};
