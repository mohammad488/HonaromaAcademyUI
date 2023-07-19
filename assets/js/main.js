function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();

    var elemTop = $(elem).offset().top - $(elem).height() - 100;

    return (elemTop < docViewTop);
}


let pageContainer = document.getElementById("page");
let menuExpandBtn = document.getElementById("menuExpand");
let menuCollapseBtn = document.getElementById("menuCollapse");
let mobileMenu = document.getElementById("mobileMenu");
let scrollUp = document.getElementById("scrollUp");

const pageLoaded = () => {
    document.getElementById("loader").classList.add("animate__fadeOut");
    document.getElementById("loader").style.zIndex = "-1";
};

scrollUp.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

menuExpandBtn.onclick = () => {
    let scroll = window.scrollY;
    document.body.style.backgroundColor = "#f6a21c";
    pageContainer.style.backgroundColor = "#fff";
    pageContainer.style.height = "100vh";
    pageContainer.scrollTo({
        top: scroll
    });
    pageContainer.style.transform = "translateX(300px) scale(0.8)";
    mobileMenu.style.display = "flex";
    mobileMenu.style.opacity = "100%";
    menuCollapseBtn.style.opacity = "100%";
};

menuCollapseBtn.onclick = () => {
    let scroll = pageContainer.scrollTop;
    document.body.style.backgroundColor = "#fff";
    pageContainer.style.backgroundColor = "transparent";
    pageContainer.style.transform = "none";
    mobileMenu.style.opacity = "0";
    menuCollapseBtn.style.opacity = "0";
    setTimeout(() => {
        mobileMenu.style.display = "none";
        pageContainer.style.height = "auto";
        window.scrollTo({
            top: scroll
        });
    }, 500);
};

let lastKnownScrollPosition = window.scrollY;
window.addEventListener("scroll", () => {
    lastKnownScrollPosition = window.scrollY;
    let navLinks = document.getElementsByClassName("nav-link");
    if (window.scrollY == 0) {
        document.getElementsByTagName("nav")[0].style.backgroundColor = "transparent";
        for (let index = 0; index < navLinks.length; index++) {
            const element = navLinks[index];
            element.style.color = "#110729ad";
        }
    }
    else {
        document.getElementsByTagName("nav")[0].style.backgroundColor = "#ffffffcf";
        for (let index = 0; index < navLinks.length; index++) {
            const element = navLinks[index];
            element.style.color = "#110729";
        }
    }
    if (window.scrollY > 300) {
        scrollUp.style.transform = "translateY(0)";
    }
    else {

        scrollUp.style.transform = "translateY(100px)";
    }
});