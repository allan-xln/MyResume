import "./theme-switcher.js";
import "./sidebar.js";

// Nav buttons array
const navButtons = document.querySelectorAll("#nav-scroll");

const scrollToElem = (element) => {
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

navButtons.forEach(button => {
    const name = button.getAttribute("name");
    const scrollTo = document.getElementById(name);
    button.addEventListener('click', () => scrollToElem(scrollTo))
});