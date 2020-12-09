const body = document.querySelector("body");
const nav = document.querySelector("nav");

const navbarSlideFromTheSide = () => {
  const burger = document.querySelector(".nav__burger");
  const navLinksList = document.querySelector(".nav__links");
  const navLinks = document.querySelectorAll(".nav__links li");

  burger.addEventListener("click", () => {
    body.classList.toggle("body--preventScrolling");
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

window.onscroll = () => {
  const scrollingPosition = Math.ceil(window.scrollY);

  if (scrollingPosition > 100) {
    nav.classList.add("nav--fill");
  } else {
    nav.classList.remove("nav--fill");
  }
};

const footer = document.querySelector(".footer");
footer.innerHTML = footerHTML;
