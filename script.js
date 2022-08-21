var menuBtn = document.querySelector('#menu');
var navBar = document.querySelector('nav');
var navList = document.querySelector('nav ul');
var navCount = navList.childElementCount;
console.log(navCount);
let isOpen = false;

// menu animation
menuBtn.addEventListener('click', () => {
    if (!isOpen) {
        menuBtn.classList.add('open');
        navBar.classList.add('active');
        isOpen = true;
    } else {
        menuBtn.classList.remove('open');
        navBar.classList.remove('active');
        isOpen = false;
    }
});


