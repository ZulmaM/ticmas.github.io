function toggleMenu() {
  let navMenu = document.getElementById("myNavMenu");

  if (navMenu.classList.contains("responsive")) {
      navMenu.classList.remove("responsive");
  } else {
      navMenu.classList.add("responsive");
  }
}

/* ----- AGREGAMOS SOMBRA EN LA BARRA DE NAVEGACIÓN MIENTRAS SE DESPLAZA ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
  } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
  }
}

const words = ["Desarrolladora Front-End Junior"];
const typingSpeed = 50; 
const eraseSpeed = 50;  
const pauseTime = 1000;  

const typedText = document.getElementById("typedText");
let wordIndex = 0;
let charIndex = 0;
let isTyping = true;

function type() {
  if (isTyping) {
    typedText.textContent += words[wordIndex][charIndex];
    charIndex++;

    if (charIndex === words[wordIndex].length) {
      isTyping = false;
      setTimeout(erase, pauseTime);
    } else {
      setTimeout(type, typingSpeed);
    }
  }
}

function erase() {
  if (!isTyping) {
    typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isTyping = true;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, eraseSpeed);
    }
  }
}

// Iniciar el proceso de escritura
setTimeout(type, typingSpeed);




