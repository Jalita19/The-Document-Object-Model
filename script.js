document.addEventListener('DOMContentLoaded', () => {
    // Toggle navigation menu
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Change shoe image and description
    const changeShoeButton = document.getElementById('changeShoeButton');
    const shoeImage = document.getElementById('shoeImage');
    const shoeDescription = document.getElementById('shoeDescription');

    changeShoeButton.addEventListener('click', () => {
        // Check the current image source and update it
        if (shoeImage.src.includes('images/')) {
            shoeImage.src = 'images/nike_air.jpeg'; // Update with new image
            shoeDescription.textContent = 'Now featuring a sleek blue and black design.';
        } else {
            shoeImage.src = 'images/white.jpeg'; // Revert to original image
            shoeDescription.textContent = 'This is a stylish shoe for all occasions.';
        }
    });

    // Toggle header animations
    const header = document.getElementById('header');
    const toggleButton = document.getElementById('toggleAnimation');
    
    document.addEventListener('DOMContentLoladed', () => {
        const toggleButton = document.getElementById('toggleAnimation');
        const animatedElement = document.querySelector('header');
    
        toggleButton.addEventListener('click', () => {
            if (animatedElement.classList.contains('slide-in')) {
                animatedElement.classList.remove('slide-in');
                animatedElement.classList.add('slide-out');
            } else {
                animatedElement.classList.remove('slide-out');
                animatedElement.classList.add('slide-in');
            }
        });
    });

    // Change shoe display text
    const shoeDisplay = document.getElementById('shoeDisplay');
    const shoeNames = ['Sneakers', 'Boots', 'Sandals', 'Loafers'];
    let currentIndex = 0;

    changeShoeButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % shoeNames.length;
        shoeDisplay.textContent = `Current Shoe: ${shoeNames[currentIndex]}`;
    });

    // DOM navigation and manipulation
    const item1 = document.getElementById('item1');
    const container = item1.parentNode; // .parentNode returns the <div class="container">

    // Log various navigation results
    console.log('Parent of item1:', container);
    console.log('First item in container:', container.firstElementChild);
    console.log('Last item in container:', container.lastElementChild);
    console.log('Next sibling of item1:', item1.nextElementSibling);
    console.log('Previous sibling of item2:', item1.nextElementSibling.previousElementSibling);

    // Change text content
    const box = document.getElementById('box');
    const changeTextButton = document.getElementById('changeText');

    changeTextButton.addEventListener('click', () => {
        box.textContent = 'This is the updated text content!';
    });

    // Change image source
    const img = document.getElementById('myImage');
    const changeImageButton = document.getElementById('changeImage');

    changeImageButton.addEventListener('click', () => {
        img.setAttribute('src', 'https://www.nike.com');
        img.setAttribute('alt', 'New Placeholder Image');
    });

    // Add new paragraph
    const contentDiv = document.getElementById('content');
    const addParagraphButton = document.getElementById('addParagraph');

    addParagraphButton.addEventListener('click', () => {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'This is a dynamically added paragraph!';
        newParagraph.style.color = 'blue';
        newParagraph.style.fontSize = '18px';
        contentDiv.appendChild(newParagraph);
    });

    // Add list items using DocumentFragment
    const itemList = document.getElementById('itemList');
    const addItemsButton = document.getElementById('addItems');

    addItemsButton.addEventListener('click', () => {
        const fragment = document.createDocumentFragment();
        for (let i = 1; i <= 5; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = `List item ${i}`;
            fragment.appendChild(listItem);
        }
        itemList.appendChild(fragment);
    });

    // Form validation
    const form = document.getElementById('myForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');

    form.addEventListener('submit', (event) => {
        let isValid = true;

        usernameError.textContent = '';
        emailError.textContent = '';

        if (usernameInput.value.length < 3) {
            usernameError.textContent = 'Username must be at least 3 characters long.';
            isValid = false;
        }

        if (!emailInput.value.includes('@')) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission
        }
    });

    // Navigation and highlighting
    const navigateButton = document.getElementById('navigate');
    const parentDiv = document.getElementById('parent');

    navigateButton.ad
});
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('addHighlight');
    button.addEventListener('click', () => {
        const items = document.querySelectorAll('.item');
        items.forEach(item => {
            item.classList.add('highlight');
        });
    });
});



