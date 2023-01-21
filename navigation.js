// --------------- SERVICES DROPDOWN --------------- //
const servicesDropdown = document.getElementById("services-dropdown");
const servicesButton = document.getElementById("services-button");
const services = document.querySelector(".services");

const showServices = () => {
    console.log(services);
    servicesDropdown.classList.remove("hidden");
}

const hideServices = () => {
    servicesDropdown.classList.add("hidden");
}

servicesButton.addEventListener("mouseenter", showServices);
services.addEventListener("mouseleave", hideServices);

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
