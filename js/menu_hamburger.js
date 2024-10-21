document.querySelector('.hamburger').addEventListener('click', function() {
    // Sélectionner la navigation principale
    const nav = document.querySelector('.main-nav');
    
    // Basculer la classe open-menu pour afficher ou masquer le menu
    nav.classList.toggle('open-menu');
    
    // Ajouter/retirer la classe open pour animer l'icône hamburger
    this.classList.toggle('open');
  });