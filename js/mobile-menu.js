(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    stopBackground: document.querySelector('[data-body-stop]'),
  };
  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.menu.classList.toggle('is-open');
    refs.stopBackground.classList.toggle('is-stop');
  }
})();
