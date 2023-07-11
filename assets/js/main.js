let pageContainer = document.getElementById("page");
let menuExpandBtn = document.getElementById("menuExpand");
let menuCollapseBtn = document.getElementById("menuCollapse");
let mobileMenu = document.getElementById("mobileMenu");

const pageLoaded = () => {
    document.getElementById("loader").style.opacity = "0";
    document.getElementById("loader").style.zIndex = "-1";
};

menuExpandBtn.onclick = () => {
    pageContainer.style.transform = "translateX(300px) scale(0.8)";
    pageContainer.style.position = "fixed";
    mobileMenu.style.opacity = "100%";
    menuCollapseBtn.style.opacity = "100%";
};

menuCollapseBtn.onclick = () => {
    pageContainer.style.transform = "none";
    pageContainer.style.position = "relative";
    mobileMenu.style.opacity = "0";
    menuCollapseBtn.style.opacity = "0";
};