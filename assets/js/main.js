let pageContainer = document.getElementById("page");
let menuExpandBtn = document.getElementById("menuExpand");
let menuCollapseBtn = document.getElementById("menuCollapse");
let mobileMenu = document.getElementById("mobileMenu");
let scrollUp = document.getElementById("scrollUp");

const pageLoaded = () => {
    document.getElementById("loader").style.opacity = "0";
    document.getElementById("loader").style.zIndex = "-1";
};

scrollUp.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
}

menuExpandBtn.onclick = () => {
    document.body.style.backgroundColor = "#f6a21c";
    pageContainer.style.backgroundColor = "#fff";
    pageContainer.style.transform = "translateX(300px) scale(0.8)";
    pageContainer.style.position = "fixed";
    mobileMenu.style.opacity = "100%";
    menuCollapseBtn.style.opacity = "100%";
};

menuCollapseBtn.onclick = () => {
    document.body.style.backgroundColor = "#fff";
    pageContainer.style.backgroundColor = "transparent";
    pageContainer.style.transform = "none";
    pageContainer.style.position = "relative";
    mobileMenu.style.opacity = "0";
    menuCollapseBtn.style.opacity = "0";
};

let lastKnownScrollPosition = window.scrollY;
document.addEventListener("scroll", () => {
    if (window.scrollY > lastKnownScrollPosition) {
        document.getElementsByTagName("nav")[0].style.transform = "translateY(-100%)";
    }
    else {
        document.getElementsByTagName("nav")[0].style.transform = "translateY(0)";
    }

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
    if(window.scrollY > 300){
        scrollUp.style.transform = "translateY(0)";
    }
    else{
        
        scrollUp.style.transform = "translateY(100px)";
    }
});