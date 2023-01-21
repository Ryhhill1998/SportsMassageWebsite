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
