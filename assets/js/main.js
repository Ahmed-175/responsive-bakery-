/*=============== SHOW MENU ===============*/
const navMenu  =document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose =document.getElementById('nav-close');
if(navToggle){
    navToggle.addEventListener('click' , () => {
        navMenu.classList.add('show-menu');
    })
}
if(navClose){
    navClose.addEventListener('click' , () => {
        navMenu.classList.remove('show-menu');
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
    const navMenu  =document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(x => x.addEventListener('click' , linkAction))
/*=============== ADD BLUR HEADER ===============*/
const blurHeader =() => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       :header.classList.remove('blur-header')
}
window.addEventListener('scroll' , blurHeader)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    window.scrollY >= 350
      ? scrollUp.classList.add('show-scroll')
      : scrollUp.classList.remove('show-scroll');
  };
  
  window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

