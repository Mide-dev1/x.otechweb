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


document.addEventListener('DOMContentLoaded', () => {
    const introContent = document.querySelector('.intro-content');

    const slideInOnScroll = (element, className) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            element.classList.add(className);
        }
    };

    const handleScroll = () => {
        slideInOnScroll(introContent, 'slide-in');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
});

// Handling Tech Categories sliding effect
document.addEventListener('DOMContentLoaded', function() {
    const categories = document.querySelectorAll('.tech-categories a');
    const logos = document.querySelectorAll('.tech-logos i');

    categories.forEach(category => {
        category.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Remove active class from all categories
            categories.forEach(cat => cat.classList.remove('active'));

            // Add active class to the clicked category
            this.classList.add('active');

            // Get the category to show
            const categoryToShow = this.getAttribute('data-category');

            // Show or hide logos based on the category
            logos.forEach(logo => {
                if (logo.classList.contains(categoryToShow)) {
                    logo.style.display = 'inline-block';
                } else {
                    logo.style.display = 'none';
                }
            });
        });
    });

    // Trigger click on the active category to show its logos on page load
    const activeCategory = document.querySelector('.tech-categories a.active');
    if (activeCategory) {
        activeCategory.click();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const categories = document.querySelectorAll('.tech-categories a');
    const techItems = document.querySelectorAll('.tech-item');

    categories.forEach(category => {
        category.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Remove active class from all categories
            categories.forEach(cat => cat.classList.remove('active'));

            // Add active class to the clicked category
            this.classList.add('active');

            // Get the category to show
            const categoryToShow = this.getAttribute('data-category');

            // Show or hide tech items based on the category
            techItems.forEach(item => {
                if (item.classList.contains(categoryToShow)) {
                    item.style.display = 'inline-block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Trigger click on the active category to show its items on page load
    const activeCategory = document.querySelector('.tech-categories a.active');
    if (activeCategory) {
        activeCategory.click();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const servicesIntro = document.querySelector('.services-intro');

    const slideInOnScroll = (element, className) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            element.classList.add(className);
        }
    };

    const handleScroll = () => {
        slideInOnScroll(servicesIntro, 'slide-in-left');
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


