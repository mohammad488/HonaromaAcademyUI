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