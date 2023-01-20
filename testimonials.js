const leftArrow = document.querySelector(".arrow--left");
const rightArrow = document.querySelector(".arrow--right");
const testimonials = document.querySelectorAll(".testimonial");
let currentTestimonialIndex = 0;

const changeSlideKeyDown = ({key}) => {
    if (key === "ArrowRight") {
        changeSlideRight();
    } else if (key === "ArrowLeft") {
        changeSlideLeft();
    }
}

const changeSlide = (change) => {
    hideTestimonial(currentTestimonialIndex);
    change < 0 ? decrementSlideIndex() : incrementSlideIndex();
    showTestimonial(currentTestimonialIndex);
}

const changeSlideLeft = () => {
    changeSlide(-1);
}

const changeSlideRight = () => {
    changeSlide(1);
}

const decrementSlideIndex = () => {
    if (currentTestimonialIndex === 0) {
        currentTestimonialIndex = 2;
    } else {
        currentTestimonialIndex--;
    }
}

const incrementSlideIndex = () => {
    if (currentTestimonialIndex === 2) {
        currentTestimonialIndex = 0;
    } else {
        currentTestimonialIndex++;
    }
}

const showTestimonial = (index) => {
    testimonials[index].classList.remove("hidden");
}

const hideTestimonial = (index) => {
    testimonials[index].classList.add("hidden");
}

leftArrow.addEventListener("click", changeSlideLeft);
rightArrow.addEventListener("click", changeSlideRight);

document.addEventListener("keydown", changeSlideKeyDown);