function imgSlider(anything){
    document.querySelector('.pepsi').src = anything;
}

function chnangeBgColor(color){
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}

function menuToggle(){
    const toggleMenu = document.querySelector('.toggleMenu');
    const nevigation = document.querySelector('.nevigation');
    toggleMenu.classList.toggle('active')
    nevigation.classList.toggle('active')
}