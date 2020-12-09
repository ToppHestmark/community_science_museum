const body = document.querySelector("body");
const nav = document.querySelector("nav");
const arrowDown = document.querySelector(".arrow-down");

const navbarSlideFromTheSide = () => {
  const burger = document.querySelector(".nav__burger");
  const navLinksList = document.querySelector(".nav__links");
  const navLinks = document.querySelectorAll(".nav__links li");

  burger.addEventListener("click", () => {
    body.classList.toggle("body--preventScrolling");
    // arrowDown.classList.toggle("arrow-hide");
    navLinksList.classList.toggle("nav--active");

    navLinks.forEach((link, index) => {
      const easeSpeed = index / 7 + 0.2;

      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `nav--linksFade 0.5s ease forwards ${easeSpeed}s`;
      }
    });

    burger.classList.toggle("nav--burgerToggle");
  });
};
navbarSlideFromTheSide();
