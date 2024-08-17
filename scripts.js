document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            document.getElementById('changeShoeButton').addEventListener('click', function () {
                // Get the image and description elements
                const shoeImage = document.getElementById('shoeImage');
                const shoeDescription = document.getElementById('shoeDescription');
    
                // Check the current image source and update it
                if (shoeImage.src.includes('redandwhite.jpeg')) {
                    shoeImage.src = 'images/blueandblack.jpeg'; // Update with new image
                    shoeDescription.textContent = 'Now featuring a sleek blue and black design.';
                } else {
                    shoeImage.src = 'images/redandwhite.jpeg'; // Revert to original image
                    shoeDescription.textContent = 'This is a stylish shoe for all occasions.';
                }
            });