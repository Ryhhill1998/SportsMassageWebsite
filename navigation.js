// --------------- SERVICES DROPDOWN --------------- //
const servicesDropdown = document.getElementById("services-dropdown");
const servicesButton = document.getElementById("services-button");
const services = document.querySelector(".services");

const showServices = () => {
    servicesDropdown.classList.remove("hidden");
}

const hideServices = () => {
    servicesDropdown.classList.add("hidden");
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
    if (dropdownMenu.classList.contains("hidden")) {
        dropdownMenu.classList.remove("hidden");
    } else {
        dropdownMenu.classList.add("hidden");
    }
}

hamburgerButton.addEventListener("click", toggleDropdownMenu);
