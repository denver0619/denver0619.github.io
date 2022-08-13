var navigationOpen = document.querySelector('.nav-open');
var navigationClose = document.querySelector('.nav-close');
var navigationList = document.querySelector('#nav-list');

function toggleMenu() {
    navigationList.classList.toggle('visible');
};

navigationOpen.addEventListener('click', toggleMenu);
navigationClose.addEventListener('click', toggleMenu)