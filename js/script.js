/*function nav-bar */
function myMenuFunction() {
  let menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.classList.contains("nav-menu")) {
      menuBtn.classList.remove("nav-menu");
  } else {
      menuBtn.classList.add("nav-menu");
  }
}

/* function stilos nav-bar cuando el usuario scrollea*/
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
  ) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
  } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "80px";
      navHeader.style.lineHeight = "80px";
  }
}

/* efecto de texto que aparece y desaparece */
const typedText = document.getElementById("typed-text");
const textArray = ["Desarrolladora Front End Junior", "Apasionada por la programación"];
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textIndex].length) {
      typedText.textContent += textArray[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 50);
  } else {
      setTimeout(erase, 1000);
  }
}

function erase() {
  if (charIndex > 0) {
      typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
  } else {
      textIndex++;
      if (textIndex >= textArray.length) {
          textIndex = 0;
      }
      setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, 1000);
});

