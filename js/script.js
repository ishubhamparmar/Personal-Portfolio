// Sticky Navbar
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
         
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
         
menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}
         
// Dark Mode
let darkmode = document.querySelector('#darkmode');
darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}

//Typing animation sub-heading

const typingPart = document.getElementById("typing-part");
const jobTitles = ["Web Developer", "Java Programmer", "2024-Undergrad", "Fast Learner"];
let currentIndex = 0;

function typeText() {
  const text = jobTitles[currentIndex];
  typingPart.textContent = "";
  typingPart.classList.add("typing-animation");

  let charIndex = 0;
  const typeInterval = setInterval(() => {
    typingPart.textContent += text[charIndex];
    charIndex++;
    if (charIndex >= text.length) {
      clearInterval(typeInterval);
      setTimeout(eraseText, 1500); // Show each text for 1.5 seconds before erasing
    }
  }, 100);
}

function eraseText() {
  typingPart.classList.remove("typing-animation");
  const eraseInterval = setInterval(() => {
    typingPart.textContent = typingPart.textContent.slice(0, -1);
    if (typingPart.textContent === "") {
      clearInterval(eraseInterval);
      currentIndex = (currentIndex + 1) % jobTitles.length;
      setTimeout(typeText, 500); // Delay before typing the next text
    }
  }, 50);
}

typeText(); // Start the typing animation