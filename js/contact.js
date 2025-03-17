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


// =============== Form Submission ===============
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);

    fetch('https://formspree.io/f/mrbpbaqw', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            this.reset(); // Optionally reset the form
        } else {
            alert('Oops! There was a problem submitting your form.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Oops! There was a problem submitting your form.');
    });
});

