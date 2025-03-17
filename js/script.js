    document.addEventListener('DOMContentLoaded', function() {
        const servicesSection = document.querySelector('.services');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-up');
                }
            });
        }, { threshold: 0.1 });

        observer.observe(servicesSection);
    });

    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
        if (index >= slides.length) slideIndex = 0;
        if (index < 0) slideIndex = slides.length - 1;

        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${-slideIndex * 100}%)`;
            dots[i].classList.remove('active');
        });

        dots[slideIndex].classList.add('active');
    }

    document.querySelector('.next').addEventListener('click', () => {
        slideIndex++;
        showSlide(slideIndex);
    });

    document.querySelector('.prev').addEventListener('click', () => {
        slideIndex--;
        showSlide(slideIndex);
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            slideIndex = i;
            showSlide(slideIndex);
        });
    });

    showSlide(slideIndex);

    // Trigger for navigation links fade-in
    document.addEventListener('DOMContentLoaded', function() {
        const navLinks = document.querySelector('.nav-links');
        setTimeout(() => {
            navLinks.classList.add('slide-in');
        }, 100); // Delay to ensure smooth transition
    });

    // Trigger for approach items fade-up
    document.addEventListener('DOMContentLoaded', function() {
        const approachItems = document.querySelectorAll('.approach-item');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-up');
                }
            });
        }, { threshold: 0.1 });

        approachItems.forEach(item => {
            observer.observe(item);
        });
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
        let slideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
    
        function showSlide(index) {
            if (index >= totalSlides) slideIndex = 0;
            if (index < 0) slideIndex = totalSlides - 1;
    
            const offset = -slideIndex * 100;
            slides.forEach(slide => {
                slide.style.transform = `translateX(${offset}%)`;
            });
        }
    
        document.querySelector('.next').addEventListener('click', () => {
            slideIndex++;
            showSlide(slideIndex);
        });
    
        document.querySelector('.prev').addEventListener('click', () => {
            slideIndex--;
            showSlide(slideIndex);
        });
    
        showSlide(slideIndex);
    });


    document.addEventListener('DOMContentLoaded', function() {
        const heroAnimation = document.querySelector('.hero-animation');
    
        function createCube() {
            const cube = document.createElement('div');
            cube.classList.add('cube');
            cube.style.left = Math.random() * 100 + 'vw';
            cube.style.animationDuration = Math.random() * 3 + 2 + 's';
            heroAnimation.appendChild(cube);
    
            setTimeout(() => {
                cube.remove();
            }, 5000);
        }
    
        setInterval(createCube, 500);
    });
