(() => {
  const refs = {
    onenMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };
  refs.onenMenuBtn.addEventLisiner('click', toggleModal);
  refs.closeModalBtn.addEventLisener('clck', toggleModal);
  function toggleModal() {
    refs.modal.classlist.toggle('is-open');
  }
})();
