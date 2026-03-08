window.addEventListener("scroll", function() {

  const arrow = document.querySelector(".scroll-down");

  if (window.scrollY > 50) {
    arrow.classList.add("hide");
  } else {
    arrow.classList.remove("hide");
  }

});
