var swiper = new Swiper(".imageSlider", {
  slidesPerView: "auto",
  spaceBetween: 5,
  loop: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  direction: "horizontal"
});

if(window.innerWidth > 576){
    const detailsImage = document.getElementById("details-image");
    detailsImage.style.opacity = "0";
    window.addEventListener("scroll", () => {
      if (isScrolledIntoView(detailsImage)) {
        detailsImage.style.opacity = "100%";
        detailsImage.classList.add("animate__fadeIn");
      }
    });
    
  }