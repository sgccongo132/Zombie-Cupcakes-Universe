document.addEventListener("DOMContentLoaded", function() {
    // Example: Animate hero section on scroll
    const heroSection = document.querySelector('.hero');

    window.addEventListener('scroll', function() {
        let offset = window.pageYOffset;
        heroSection.style.backgroundPositionY = offset * 0.5 + 'px';
    });
});
