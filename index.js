document.addEventListener('DOMContentLoaded', function() {
    // Get the menu elements
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            console.log('Menu clicked'); // Debug line
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navLinks && navLinks.classList.contains('active')) {
            if (!navLinks.contains(e.target) && !mobileMenu.contains(e.target)) {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        }
    });
}); 