// This file contains JavaScript code for any interactivity needed on the site, such as handling navigation or dynamic content updates. 

document.addEventListener('DOMContentLoaded', () => {
    // Example of handling navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetPage = event.target.getAttribute('href');
            window.location.href = targetPage;
        });
    });

    // Example of dynamic content updates can be added here
});