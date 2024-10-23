let burger = document.querySelector(".burger");
let navbarlist = document.getElementById("ullist");

burger.addEventListener("click", () => {
  navbarlist.classList.toggle("active");
});

const navbar = document.querySelector(".nav_container");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});
