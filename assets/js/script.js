// assets/js/script.js

// Example: Handle Contact Form Submission
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you can add form validation or AJAX submission
            alert('Thank you for your message!');
            contactForm.reset();
        });
    }
});

// Example: Mobile Navigation Toggle
const nav = document.querySelector('nav ul');
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '<span></span><span></span><span></span>';
document.querySelector('header').appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
