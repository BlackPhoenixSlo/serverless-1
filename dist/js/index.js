document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Image hover effect - change image source on hover
    const hoverImages = document.querySelectorAll('.hover-image');

    hoverImages.forEach(img => {
        const originalSrc = img.src;
        const hoverSrc = img.getAttribute('data-hover');

        img.addEventListener('mouseover', function() {
            this.src = hoverSrc;
        });

        img.addEventListener('mouseout', function() {
            this.src = originalSrc;
        });
    });
});
