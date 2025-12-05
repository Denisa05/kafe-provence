const navToggle = document.getElementById('nav-toggle'); // Hamburger
const navClose = document.getElementById('nav-close');   // Křížek
const navMenu = document.getElementById('nav-menu');     // Panel
const navOverlay = document.getElementById('nav-overlay'); // Pozadí

// Funkce pro otevření/zavření
function toggleMenu() {
    navMenu.classList.toggle('active');    // Vysune/zasune menu
    navOverlay.classList.toggle('active'); // Zobrazí/skryje pozadí
    document.body.classList.toggle('no-scroll'); // Volitelné: Zákaz scrollu
}

// 2. Události (Kliknutí)
if (navToggle) navToggle.addEventListener('click', toggleMenu);
if (navClose) navClose.addEventListener('click', toggleMenu);
if (navOverlay) navOverlay.addEventListener('click', toggleMenu); // Kliknutí mimo zavře menu

// 3. Zavřít menu po kliknutí na odkaz
const navLinks = document.querySelectorAll('.nav__links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navOverlay.classList.remove('active');
    });
});