if(window.innerWidth > 576){
  const creativeServices = document.getElementsByClassName("creative-service-container");
  const creativeServiceAnimations = document.getElementsByClassName(
    "creative-service-animate"
  );
  for (let index = 0; index < creativeServices.length; index++) {
    creativeServices[index].style.opacity = "0";
  }
  const trustedContainer = document.getElementById("trusted-by");
  trustedContainer.style.opacity = "0";
  const services = document.getElementsByClassName("service-box");
  for (let index = 0; index < services.length; index++) {
    services[index].style.opacity = "0";
  }
  const ventures = document.getElementsByClassName("venture-box");
  for (let index = 0; index < ventures.length; index++) {
    ventures[index].style.opacity = "0";
  }
  const contactUsText = document.getElementById("contact-us-text");
  const contactUsImage = document.getElementById("contact-us-image");
  contactUsText.style.opacity = "0";
  contactUsImage.style.opacity = "0";
  const imageCollection = document.getElementById("image-collection");
  imageCollection.style.opacity = "0";
  window.addEventListener("scroll", () => {
    for (let index = 0; index < creativeServices.length; index++) {
      if (isScrolledIntoView(creativeServices[index])) {
        creativeServices[index].style.opacity = "100%";
        creativeServiceAnimations[index].classList.add("animate__rotateIn");
      }
    }
  
    for (let index = 0; index < services.length; index++) {
      if (isScrolledIntoView(services[index])) {
        services[index].style.opacity = "100%";
        services[index].classList.add("animate__fadeInUp");
      }
    }
  
    for (let index = 0; index < ventures.length; index++) {
      if (isScrolledIntoView(ventures[index])) {
        ventures[index].style.opacity = "100%";
        ventures[index].classList.add("animate__fadeIn");
      }
    }
  
    if (isScrolledIntoView(imageCollection)) {
      imageCollection.style.opacity = "100%";
      imageCollection.classList.add("animate__fadeInUp");
    }
  
    if (isScrolledIntoView(contactUsImage)) {
      contactUsImage.style.opacity = "100%";
      contactUsImage.classList.add("animate__fadeInRight");
      contactUsText.style.opacity = "100%";
      contactUsText.classList.add("animate__fadeInLeft");
    }
  
    if (isScrolledIntoView(trustedContainer)) {
      trustedContainer.style.opacity = "100%";
      trustedContainer.classList.add("animate__slideInLeft");
    }
  });
  
}