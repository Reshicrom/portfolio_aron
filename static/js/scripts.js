const scrollTop = document.getElementById('topbutton')
window.onload = () => {
    scrollTop.style.opacity = 0;
}
window.onscroll = () => {
    if (window.scrollY > 200) {
        scrollTop.style.opacity = 1;

    } else {
        scrollTop.style.opacity = 0;
    }
};

