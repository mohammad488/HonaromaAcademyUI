function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var elemTop = $(elem).offset().top;
    return (elemTop >= docViewTop);
}

const elements = document.getElementsByClassName('creative-service-container');
const elementsAnimations = document.getElementsByClassName('creative-service-animate');
window.addEventListener('scroll', () => {
    for (let index = 0; index < elements.length; index++) {
        if (isScrolledIntoView(elements[index])) {
            elementsAnimations[index].classList.add("animate__rotateIn");
        }
    }
})