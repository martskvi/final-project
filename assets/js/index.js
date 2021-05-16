window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0 );
})

const menu = document.querySelector('.menu');
const menuOpen = () => {
    menu.classList.add('visible');
}
const menuClose = () => {
    menu.classList.remove('visible');
}