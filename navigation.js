// --------------- SERVICES DROPDOWN --------------- //
const servicesDropdown = document.getElementById("services-dropdown");
const servicesButton = document.getElementById("services-button");
const services = document.querySelector(".services");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 240) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});

const showServices = () => {
    servicesDropdown.classList.remove("no-display");
}

const hideServices = () => {
    servicesDropdown.classList.add("no-display");
}

const servicesIsHidden = () => servicesDropdown.classList.contains("hidden");

const toggleServices = () => {
    if (servicesIsHidden()) {
        showServices();
    } else {
        hideServices();
    }
}

servicesButton.addEventListener("mouseenter", showServices);
services.addEventListener("mouseleave", hideServices);

servicesButton.addEventListener("click", toggleServices);

// --------------- COLLAPSE NAVBAR DROPDOWN --------------- //
const hamburgerButton = document.getElementById("hamburger");
const dropdownMenu = document.getElementById("dropdown-menu");

const toggleDropdownMenu = () => {
    if (dropdownMenu.classList.contains("no-display")) {
        dropdownMenu.classList.remove("no-display");
    } else {
        dropdownMenu.classList.add("no-display");
    }
}

hamburgerButton.addEventListener("click", toggleDropdownMenu);
