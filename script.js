const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

// Typing Animation

const textArray = [
    "Full Stack Developer",
    "Java Programmer",
    "Web Designer",
    "Problem Solver"
];

let index = 0;
let charIndex = 0;

function typeText() {

    if (charIndex < textArray[index].length) {

        document.getElementById("typing").innerHTML +=
            textArray[index].charAt(charIndex);

        charIndex++;

        setTimeout(typeText, 100);

    } else {

        setTimeout(eraseText, 1500);

    }
}

function eraseText() {

    if (charIndex > 0) {

        document.getElementById("typing").innerHTML =
            textArray[index].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseText, 50);

    } else {

        index++;

        if (index >= textArray.length) {
            index = 0;
        }

        setTimeout(typeText, 300);
    }
}

typeText();

// Active Navigation Highlight

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }

    });

});

// Scroll Reveal Animation

function reveal() {

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(item => {

        const windowHeight = window.innerHeight;
        const elementTop = item.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            item.classList.add("active");
        }

    });

}

window.addEventListener("scroll", reveal);

// Run once when page loads
reveal();