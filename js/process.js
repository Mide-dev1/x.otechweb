  // Trigger for navigation links fade-in
  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelector('.nav-links');
    setTimeout(() => {
        navLinks.classList.add('slide-in');
    }, 100); // Delay to ensure smooth transition
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

