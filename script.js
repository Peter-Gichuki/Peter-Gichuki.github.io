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