document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById("loading-screen");

    // Hide loading screen initially
    loadingScreen.style.display = "none";

    // Show loading screen on link clicks
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function(event) {
            // Show loading screen
            loadingScreen.style.display = "flex";
        });
    });

    // Hide loading screen when page has fully loaded
    window.addEventListener("load", function() {
        loadingScreen.style.display = "none";
    });
});
