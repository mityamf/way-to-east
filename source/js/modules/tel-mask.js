import IMask from 'imask';

const setInputMask = () => {
  const inputsTel = document.querySelectorAll('[type="tel"]');

  const setTelMask = () => {
    if (inputsTel.length > 0) {
      inputsTel.forEach((input) => {

        const chooseMask = () => {

          let dispatchMask = {};

          const setMask = () => {
            dispatchMask = new IMask(input, {
              mask: [
                {
                  min: 11,
                  mask: '8 (000) 000-00-00',
                  startsWith: '8',
                  lazy: true,
                },
                {
                  min: 11,
                  mask: '+7 (000) 000-00-00',
                  startsWith: '7',
                  lazy: true,
                }
              ],
              dispatch: function (appended, dynamicMasked) {
                let number = (dynamicMasked.value + appended).replace(/\D/g, '');
                return dynamicMasked.compiledMasks.find(function (m) {
                  return number.indexOf(m.startsWith) === 0;
                });
              },
            });
          };

          const destroyMask = () => {
            dispatchMask.destroy();
            if (dispatchMask.unmaskedValue === '*') {
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

        chooseMask();
      });
    }
  };

  setTelMask();
};

export default setInputMask;
