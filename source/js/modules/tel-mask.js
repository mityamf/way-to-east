import IMask from 'imask';

const setInputMask = () => {
  const inputsTel = document.querySelectorAll('[type="tel"]');

  const setTelMask = () => {
    if (inputsTel.length > 0) {
      inputsTel.forEach((input) => {
        let mask = {};

        const setMask = () => {
          let maskOptions = {
            min: 11,
            mask: '+7 (000) 000-00-00',
            lazy: false,
          };
          mask = new IMask(input, maskOptions);
        };

        const destroyMask = () => {
          mask.destroy();
          if (mask.unmaskedValue === '') {
            input.value = '';
            input.parentElement.querySelector('label').classList.remove('label-active');
          }
        };

        input.addEventListener('focus', setMask);
        input.addEventListener('blur', destroyMask);

        const setCaret = (evt) => {
          if (evt.code === 'Tab') {
            const moveCaretToStart = () => {
              input.setSelectionRange(4, 4);
              input.focus();
            };
            moveCaretToStart();
          }
        };

        input.addEventListener('keyup', setCaret);
      });
    }
  };

  setTelMask();
};

export default setInputMask;
