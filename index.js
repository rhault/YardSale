//Constantes
const navbarEmailButton = document.querySelector('.navbar-email');
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const navbarShoppingCardButton = document.querySelector('.navbar-shopping-card');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetail = document.querySelector('.product-detail');
const CLASS_HIDDEN = 'hidden';

//Functions

/* This function takes an array of elements and checks whether each one of them 
contains the 'hidden' class. If the element does not contain the class, 
the function adds the 'hidden' class to it.*/

const isHiddenElemnets = (elements) => {
    elements.forEach(element => {
        let isHiddenElement = element.classList.contains(CLASS_HIDDEN);

        if(!isHiddenElement) element.classList.add(CLASS_HIDDEN); 
    })
}

/*This function takes two parameters: the first parameter to show the element,
the second parameter hidden the elements*/
const togglElement = (showElement, hiddenElement) => {
    console.log('aqui')
    showElement.classList.toggle(CLASS_HIDDEN);
    isHiddenElemnets(hiddenElement);
}

//Events buttons
navbarEmailButton.addEventListener('click', () => {togglElement(desktopMenu, [productDetail])});
navbarShoppingCardButton.addEventListener('click', () => {togglElement(productDetail, [mobileMenu, desktopMenu])});
mobileMenuButton.addEventListener('click', () => {togglElement(mobileMenu, [productDetail])});
