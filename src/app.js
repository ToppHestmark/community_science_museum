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

/* ############################################################
--- <<<     Form Section     >>> ---
---############################################################ */
const contactForm = document.querySelector("#contactForm");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const passedValidation = document.querySelector("#passedValidation");

contactForm.addEventListener("submit", contactFormHandler);

function contactFormHandler(event) {
  event.preventDefault();

  subject.value.trim().length >= 10
    ? (subjectError.style.display = "none")
    : (subjectError.style.display = "block");

  message.value.trim().length >= 25
    ? (messageError.style.display = "none")
    : (messageError.style.display = "block");

  validateEmail(email.value)
    ? (emailError.style.display = "none")
    : (emailError.style.display = "block");

  subject.value.trim().length >= 10 === true &&
  message.value.trim().length >= 25 === true &&
  validateEmail(email.value) === true
    ? (passedValidation.style.display = "block")
    : (passedValidation.style.display = "none");
}

const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

const validateSubject = (subject, n) => {
  return subject.value.trim().length >= n
    ? (subjectError.style.display = "none")
    : (subjectError.style.display = "block");
};
