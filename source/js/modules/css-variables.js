const setCssVariables = () => {
  const header = document.querySelector('.header');
  const mainContent = document.querySelector('.main__content');

  if (header && mainContent) {
    mainContent.style.setProperty('--headerHeight', header.offsetHeight + 'px');
  }
};

window.addEventListener('resize', setCssVariables);

export {setCssVariables};
