const servicesDropdown = document.getElementById("services-dropdown");
const servicesButton = document.getElementById("services-button");

const showServices = () => {
    servicesDropdown.classList.remove("hidden");
}

const hideServices = () => {
    servicesDropdown.classList.add("hidden");
}

const servicesAreHidden = () => {
    return servicesDropdown.classList.contains("hidden");
}

const toggleServices = () => {
    servicesAreHidden() ? showServices() : hideServices();
}

servicesButton.addEventListener("click", toggleServices);
