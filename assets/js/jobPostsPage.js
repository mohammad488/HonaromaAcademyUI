var swiper = new Swiper(".imageSlider", {
  slidesPerView: "auto",
  spaceBetween: 5,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  direction: "horizontal",
});

if (window.innerWidth > 576) {
  const detailsImage = document.getElementById("details-image");
  detailsImage.style.opacity = "0";
  window.addEventListener("scroll", () => {
    if (isScrolledIntoView(detailsImage)) {
      detailsImage.style.opacity = "100%";
      detailsImage.classList.add("animate__fadeIn");
    }
  });
}
if (window.innerWidth > 576) {
  const detailsImage = document.getElementById("details-image");
  detailsImage.style.opacity = "0";
  window.addEventListener("scroll", () => {
    if (isScrolledIntoView(detailsImage)) {
      detailsImage.style.opacity = "100%";
      detailsImage.classList.add("animate__fadeIn");
    }
  });
}

let jobPosts = document.querySelectorAll("div.job-post");

jobPosts.forEach(function (jobPost) {
  jobPost.addEventListener("click", function () {
    jobPost.classList.toggle("active");

    const plusIcon = jobPost.getElementsByClassName("ri-add-line")[0];
    if (plusIcon.style.display === "none") {
      console.log("closed!");
      plusIcon.style.display = "block";
      jobPost.getElementsByClassName("ri-subtract-line")[0].style.display =
        "none";
    } else {
      console.log("opened!");
      plusIcon.style.display = "none";
      jobPost.getElementsByClassName("ri-subtract-line")[0].style.display =
        "block";
    }
  });
});
