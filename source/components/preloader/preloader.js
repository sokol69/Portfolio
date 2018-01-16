const showPercent = () => {
  const percentDisplay = document.getElementById('loader__text');
  let i = 0;
  let timer = setTimeout( function go() {
    if (i <= 100) {
      percentDisplay.innerText = i + '%';
      setTimeout(go, 100);
      i += 10;
    } else {
      removeLoader();
    }
  }, 100);
};

const removeLoader = () => {
  const loaderArea = document.getElementById('loader__area');
  loaderArea.style.opacity = '0.1';
  setTimeout( () => {
    loaderArea.style.display = 'none';
  }, 1000);
};

document.addEventListener('DOMContentLoaded', showPercent);

export {showPercent, removeLoader};