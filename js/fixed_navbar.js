// Sélectionnez la barre de navigation
const navbar = document.querySelector('.main-nav');

// Obtenez la position de la navbar
const navbarOffsetTop = navbar.offsetTop;

// Fonction pour fixer la navbar lors du scroll
function fixNavbar() {
  if (window.scrollY >= navbarOffsetTop) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0; // Supprime le padding lorsque la navbar n'est plus fixe
  }
}

// Ajoutez un écouteur d'événement de scroll pour exécuter la fonction fixNavbar
window.addEventListener('scroll', fixNavbar);


