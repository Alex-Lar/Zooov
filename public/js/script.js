// Burger Menu
const burgerBtn = document.querySelector('.nav-hamburger');

function keyboardFocus(e) {
    if (e.keyCode === 9) {
        burgerBtn.classList.add('keyboard-focus');
    }

    burgerBtn.addEventListener('keydown', removeFocus);
}

function menuBtnActive() {
    burgerBtn.classList.toggle('open');
}

function removeFocus(e) {
    if (e.keyCode === 9) {
        burgerBtn.classList.remove('keyboard-focus');
    }
    if (e.keyCode === 13) {
        burgerBtn.classList.toggle('open');
    }
}

burgerBtn.addEventListener('click', menuBtnActive);
burgerBtn.addEventListener('keyup', keyboardFocus);



// Word Wrap
window.addEventListener('load', getScreenSize);
window.addEventListener('resize', getScreenSize);

const screenSizes = {
    xs: 374.98,
    sm: 575.98,
    md: 767.98,
    lg: 991.98,
}
let isDesctop = checkDeviceType('desctop');

function getScreenSize() {
    const screenWidth = window.innerWidth;
    
    if (screenWidth >= screenSizes.md && !isDesctop) {
        isDesctop = true;
        updateTitleWrapping('desctop');
    } 
    if (screenWidth < screenSizes.md && isDesctop) {
        isDesctop = false;
        updateTitleWrapping('mobile');
    }
}

function updateTitleWrapping(type) {
    const heroTitle = document.querySelector('.hero-inner__title');
    const title = {
        desctop: 'Питание,<br> которое <span class="outline-wrapper">полюбит<br> <svg focusable="false" aria-hidden="true" class="outline" width="264" height="99" viewBox="0 0 264 99" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M162.66 7.36725C88.86 -7.73815 4.94095 17.622 2.95129 40.3787C0.845396 64.4648 57.1197 89.0632 128.644 95.3207C200.167 101.578 259.856 87.1253 261.962 63.0392C263.963 40.1533 185.696 11.2527 115.105 13.9593" stroke="#EC7973" stroke-width="4" stroke-linecap="round" /></svg></span> ваш хвостик',
        mobile: 'Питание, которое <span class="outline-wrapper">полюбит <svg focusable="false" aria-hidden="true" class="outline" width="264" height="99" viewBox="0 0 264 99" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M162.66 7.36725C88.86 -7.73815 4.94095 17.622 2.95129 40.3787C0.845396 64.4648 57.1197 89.0632 128.644 95.3207C200.167 101.578 259.856 87.1253 261.962 63.0392C263.963 40.1533 185.696 11.2527 115.105 13.9593" stroke="#EC7973" stroke-width="4" stroke-linecap="round" /></svg></span> ваш хвостик',
    }

    switch (type) {
        case 'desctop':
            heroTitle.innerHTML = title.desctop;
            break;
        case 'mobile':
            heroTitle.innerHTML = title.mobile;
            break;
        default:
            console.log('Something is not good!');
            break;
    }
}

function checkDeviceType(type) {
    switch (type) {
        case 'desctop':
            if (window.innerWidth >= screenSizes.md) return true;
            if (window.innerWidth < screenSizes.md) return false;
            break;
        case 'mobile':
            if (window.innerWidth < screenSizes.md) return true;
            if (window.innerWidth >= screenSizes.md) return false;
            break;
        default:
            console.log('Something is not good!');
            break;
    }
}