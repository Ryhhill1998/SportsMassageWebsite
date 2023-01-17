const dropdown = document.getElementById("dropdown");
const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".main-nav");

const toggleDropdown = () => {
    dropdown.classList.toggle("hidden");
    toggleNavbarBorderBottomRadius();
}

const dropdownIsHidden = () => {
    return dropdown.classList.contains("hidden");
}

const toggleNavbarBorderBottomRadius = () => {
    if (dropdownIsHidden()) {
        navbar.style.borderBottomRightRadius = "10px";
        navbar.style.borderBottomLeftRadius = "10px";
    } else {
        navbar.style.borderBottomRightRadius = "0";
        navbar.style.borderBottomLeftRadius = "0";
    }
}

hamburger.addEventListener("click", toggleDropdown);
