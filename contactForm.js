const overlay = document.querySelector(".overlay");
const contactButton = document.getElementById("contact-button");
const contactForm = document.querySelector(".contact-form");

const showContactForm = () => {
    contactForm.style.display = "block";
    overlay.style.display = "block";
}

const hideContactForm = ({target}) => {
    contactForm.style.display = "none";
    overlay.style.display = "none";
}

contactButton.addEventListener("click", showContactForm);
overlay.addEventListener("click", hideContactForm);