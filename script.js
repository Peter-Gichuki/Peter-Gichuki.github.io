/* Scroll Animation */
document.addEventListener('DOMContentLoaded', () => {
    const milestones = document.querySelectorAll('.timeline-milestone');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.5 });

    milestones.forEach(milestone => {
        observer.observe(milestone);
    });
});

// Add form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all required fields');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Add your form submission logic here
    alert('Message sent successfully!');
    this.reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}