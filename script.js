
// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate progress bars on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.style.width; // Trigger animation
        }
    });
});

document.querySelectorAll('.progress').forEach(bar => {
    observer.observe(bar);
});

// Simple form submission (for demo)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! (Hello!, Thank you for Messaging me.)');
});


// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked (optional for better UX)
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});
