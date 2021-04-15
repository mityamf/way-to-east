import IMask from 'imask';

const setInputMask = () => {
  const inputsTel = document.querySelectorAll('[type="tel"]');

  const setTelMask = () => {
    if (inputsTel.length > 0) {
      inputsTel.forEach((input) => {
        let mask = {};

        const chooseMask = (maskPattern) => {

          const setMask = () => {
            let maskOptions = {
              min: 11,
              mask: maskPattern,
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

        };

        chooseMask('+7 (000) 000-00-00');

        input.addEventListener('input', function () {
          let isChanged = false;
          if (input.value[4] === '8' && !isChanged) {
            input.value = '';
            isChanged = true;
            chooseMask('8 (000) 000-00-00');
            mask.updateValue();
          }
        });
      });
    }
  };

  setTelMask();
};

export default setInputMask;
