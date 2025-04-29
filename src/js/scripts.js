document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form validation for contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Email validation regex
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            if (!name || !email || !message) {
                e.preventDefault();
                alert('Please fill in all fields before submitting.');
            } else if (!emailPattern.test(email)) {
                e.preventDefault();
                alert('Please enter a valid email address.');
            } else {
                // You can add form submission logic here or provide feedback
                alert('Form submitted successfully!');
            }
        });
    }
});
