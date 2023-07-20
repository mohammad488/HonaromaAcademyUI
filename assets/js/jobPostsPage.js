var swiper = new Swiper(".imageSlider", {
  slidesPerView: "auto",
  spaceBetween: 5,
  loop: true,
  direction: "horizontal",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
// Job OnClick
let jobPosts = document.querySelectorAll("div.job-post");

jobPosts.forEach(function (jobPost) {
  jobPost.addEventListener("click", function () {
    debugger
    jobPosts.forEach(post => {
      if(post != jobPost){
        post.classList.remove("active");
        const plusIcon = post.getElementsByClassName("ri-add-line")[0];
        plusIcon.style.display = "block";
        post.getElementsByClassName("ri-subtract-line")[0].style.display =
          "none";
      }
    });
    const plusIcon = jobPost.getElementsByClassName("ri-add-line")[0];
    if (plusIcon.style.display === "none") {
      jobPost.classList.remove("active");
      console.log("closed!");
      plusIcon.style.display = "block";
      jobPost.getElementsByClassName("ri-subtract-line")[0].style.display =
        "none";
    } else {
      jobPost.classList.add("active");
      console.log("opened!");
      plusIcon.style.display = "none";
      jobPost.getElementsByClassName("ri-subtract-line")[0].style.display =
        "block";
    }
  });
});
