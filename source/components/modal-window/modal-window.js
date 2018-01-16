let hamburgerBtn = document.getElementById('hamburger-menu'),
  windowModal = document.getElementById('window-modal'),
  closeBtn = document.getElementById('window-modal__close-btn'),
  modalFlag = false;

const closeModalWindow = () => {
  windowModal.style.top = '-999px';
  setTimeout(() => {
    windowModal.style.display = 'none';
    modalFlag = false;
    return modalFlag;
  }, 500);
};

const openModalWindow = () => {
  windowModal.style.display = 'flex';
  setTimeout(() => {
    windowModal.style.top = '0';
    modalFlag = true;
    return modalFlag;
  }, 100);
};

hamburgerBtn.addEventListener('click', openModalWindow);
closeBtn.addEventListener('click', closeModalWindow);

window.addEventListener('scroll', () => {
  if (modalFlag) {
    closeModalWindow();
  }
});

export {hamburgerBtn, windowModal, closeBtn, modalFlag, closeModalWindow, openModalWindow};
