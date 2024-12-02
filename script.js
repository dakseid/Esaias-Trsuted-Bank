document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.display = "none";

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function(event) {
            loadingScreen.style.display = "flex";
        });
    });

    window.addEventListener("load", function() {
        loadingScreen.style.display = "none";
    });

    // Mobile Menu Functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu') || document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav')) {
            navMenu?.classList.remove('active');
            mobileMenu?.classList.remove('active');
        }
    });

    // Close menu when window is resized
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu?.classList.remove('active');
            mobileMenu?.classList.remove('active');
        }
    });
});
