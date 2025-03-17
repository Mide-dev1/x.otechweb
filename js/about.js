  // Trigger for navigation links fade-in
  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelector('.nav-links');
    setTimeout(() => {
        navLinks.classList.add('slide-in');
    }, 100); // Delay to ensure smooth transition
});

document.addEventListener('DOMContentLoaded', () => {
const aboutUsSection = document.querySelector('.about-us');
const ourMissionSection = document.querySelector('.our-mission');

const fadeInOnScroll = (element, className) => {
const rect = element.getBoundingClientRect();
if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    element.classList.add(className);
}
};

const handleScroll = () => {
fadeInOnScroll(aboutUsSection, 'fade-in-left');
fadeInOnScroll(ourMissionSection, 'fade-in-right');
};

window.addEventListener('scroll', handleScroll);
handleScroll(); // Initial check
});

 // Menu Toggle
 document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const aboutUsSection = document.querySelector('.about-us');
    const ourMissionSection = document.querySelector('.our-mission');
    const ourValuesSection = document.querySelector('.our-values');

    const slideInOnScroll = (element, className) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            element.classList.add(className);
        }
    };

    const handleScroll = () => {
        slideInOnScroll(aboutUsSection, 'slide-in-right');
        slideInOnScroll(ourMissionSection, 'slide-in-left');
        slideInOnScroll(ourValuesSection, 'slide-in-right');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
});

document.addEventListener('DOMContentLoaded', function() {
    let testimonialIndex = 0;
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');

    function showTestimonial(index) {
        if (index >= testimonialSlides.length) testimonialIndex = 0;
        if (index < 0) testimonialIndex = testimonialSlides.length - 1;

        testimonialSlides.forEach((slide, i) => {
            slide.style.display = i === testimonialIndex ? 'block' : 'none';
        });
    }

    document.querySelector('.front').addEventListener('click', () => {
        testimonialIndex++;
        showTestimonial(testimonialIndex);
    });

    document.querySelector('.back').addEventListener('click', () => {
        testimonialIndex--;
        showTestimonial(testimonialIndex);
    });

    showTestimonial(testimonialIndex);
});
