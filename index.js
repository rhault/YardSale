const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');
const mobile_menu_button = document.querySelector('.mobile-menu-button');
const mobile_menu = document.querySelector('.mobile-menu');

navbar_email.addEventListener('click', () => toggleDesktopMenu(desktop_menu));
mobile_menu_button.addEventListener('click', () =>  toggleDesktopMenu(mobile_menu));

function toggleDesktopMenu(item) {
    console.log('ok')
    item.classList.toggle('hidden');
}