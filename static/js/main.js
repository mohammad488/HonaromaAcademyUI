function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();

    var elemTop = $(elem).offset().top - $(elem).height() - 100;

    return (elemTop < docViewTop);
}

if (window.innerWidth > 576) {
    const animations = document.getElementsByClassName(
        "animation"
    );
    for (let index = 0; index < animations.length; index++) {
        animations[index].style.opacity = "0";
    }
    window.addEventListener("scroll", () => {
        for (let index = 0; index < animations.length; index++) {
            if (isScrolledIntoView(animations[index])) {
                animations[index].style.opacity = "100%";
                animations[index].classList.add("animate__animated");
                animations[index].classList.add(animations[index].dataset.animation);
            }
        }
    });
}


let pageContainer = document.getElementById("page");
let menuExpandBtn = document.getElementById("menuExpand");
let menuCollapseBtn = document.getElementById("menuCollapse");
let mobileMenu = document.getElementById("mobileMenu");
let navigation = document.getElementsByTagName("nav")[0];
let navWhite = false;
if (navigation.classList.contains("nav-white")) {
    navWhite = true;
}
let scrollUp = document.getElementById("scrollUp");
$(document).ready(function () {
    pageLoaded();
});
const pageLoaded = () => {
    let lastKnownScrollPosition = 0;
    let first = true;
    window.addEventListener("scroll", () => {
        if (first) {
            document.getElementsByTagName("nav")[0].style.transform = "translateY(0)";
            first = false;
        }
        else{
            if (window.scrollY > lastKnownScrollPosition) {
                document.getElementsByTagName("nav")[0].style.transform = "translateY(-100%)";
            }
            else {
                document.getElementsByTagName("nav")[0].style.transform = "translateY(0)";
            }
        }

        lastKnownScrollPosition = window.scrollY;
        let navLinks = document.getElementsByClassName("nav-link");
        if (window.scrollY == 0) {
            if (navWhite) {
                navigation.classList.add("nav-white");
            }
            document.getElementsByTagName("nav")[0].style.backgroundColor = "transparent";
            for (let index = 0; index < navLinks.length; index++) {
                const element = navLinks[index];
                element.style.removeProperty("color");
            }
        }
        else {
            if (navWhite) {
                navigation.classList.remove("nav-white");
            }
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
    document.getElementById("loader").children[0].style.visiblity = "hidden";
    setTimeout(() => {
        document.getElementById("loader").classList.add("animate__fadeOut");
        document.getElementById("loader").style.zIndex = "-1";
    }, 100);
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
        top: scroll,
        behavior: "instant"
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
            top: scroll,
            behavior: "instant"
        });
    }, 500);
};
