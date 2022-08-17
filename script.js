var menuBtn = document.querySelector('#menu');
var navBar = document.querySelector('nav');
let isOpen = false;

menuBtn.addEventListener('click', () => {
    if(!isOpen) {
        menuBtn.classList.add('open');
        navBar.classList.add('active');
        isOpen = true;
    } else {
        menuBtn.classList.remove('open');
        navBar.classList.remove('active');
        isOpen = false;
    }
});
