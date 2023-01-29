const overlay = document.querySelector(".overlay");
const contactButtons = document.querySelectorAll(".contact-button");
const contactForm = document.querySelector(".contact-form");
const closeFormButton = document.getElementById("close-form-button");

const showContactForm = () => {
    if (!dropdownMenu.classList.contains("hidden")) {
        dropdownMenu.classList.add("hidden");
    }
    contactForm.style.display = "block";
    overlay.style.display = "block";
}

const hideContactForm = ({target}) => {
    contactForm.style.display = "none";
    overlay.style.display = "none";
}

contactButtons.forEach(button => button.addEventListener("click", showContactForm));

overlay.addEventListener("click", hideContactForm);
closeFormButton.addEventListener("click", hideContactForm);