const menuItems = document.querySelector('.menu-itms'); // Make sure class name is correct
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', (e) => {
    console.log("clicked");
    menuItems.classList.toggle('active');

    // Stop the click from bubbling up to the document
    e.stopPropagation();
});

// Click outside closes the menu
document.addEventListener('click', (e) => {
    if (!menuIcon.contains(e.target) && !menuItems.contains(e.target)) {
        menuItems.classList.remove('active');
    }
});

 