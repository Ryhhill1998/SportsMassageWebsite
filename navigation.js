const servicesDropdown = document.getElementById("services-dropdown");
const servicesButton = document.getElementById("services-button");
const buttonAndDropdown = document.querySelector("li.dropdown");

const showServices = () => {
    console.log(buttonAndDropdown);
    servicesDropdown.classList.remove("hidden");
}

const hideServices = () => {
    servicesDropdown.classList.add("hidden");
}

servicesButton.addEventListener("mouseenter", showServices);
buttonAndDropdown.addEventListener("mouseleave", hideServices);
