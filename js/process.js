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