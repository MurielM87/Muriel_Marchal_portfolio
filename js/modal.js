// Fonction pour gérer l'ouverture et la fermeture des modales
function setupModal(modalId, buttonId, spanClass) {
  let modal = document.getElementById(modalId);  // Récupère la modal via son ID
  let btn = document.getElementById(buttonId);   // Récupère le bouton qui ouvre la modal

  // Vérifie si la modal et le bouton existent avant d'attacher les événements
  if (modal && btn) {
    let span = document.querySelector(`#${modalId} .${spanClass}`); // Bouton de fermeture (élément span)
    
    // Ouvre la modal quand le bouton est cliqué
    btn.onclick = function() {
      modal.style.display = "block";  // Affiche la modal
    };
    
    // Ferme la modal quand le bouton de fermeture (span) est cliqué
    span.onclick = function() {
      modal.style.display = "none";  // Cache la modal
    };

    // Ferme la modal quand l'utilisateur clique en dehors de la modal
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";  // Cache la modal si clic à l'extérieur
      }
    };
  } else {
    console.warn(`Modal ou bouton introuvable : ${modalId}, ${buttonId}`);  // Message d'avertissement en console
  }
}

// Initialisation des modales pour chaque projet en fonction des IDs des boutons et des modales
setupModal("myModal2", "btn2", "close");   // Setup pour le projet Booki
setupModal("myModal3", "btn3", "close");   // Setup pour le projet Ohmyfood
setupModal("myModal4", "btn4", "close");   // Setup pour le projet La Chouette Agence
setupModal("myModal5", "btn5", "close");   // Setup pour le projet Kanap
setupModal("myModal6", "btn6", "close");   // Setup pour le projet API Sauces Piquantes
setupModal("myModal7", "btn7", "close");   // Setup pour le projet Groupomania
setupModal("myModal_poe", "btn_poe", "close"); // Setup pour la formation POE
setupModal("myModal_poe1", "btn_poe1", "close"); // Setup pour le projet Spring-Boot Pokemons
setupModal("myModal_ocr", "btn_ocr", "close");  // Setup pour la formation OpenClassroom
setupModal("myModal_skilleos", "btn_skilleos", "close"); // Setup pour la formation Skilleos
setupModal("myModal_vueschool", "btn_vueschool", "close"); // Setup pour la formation VueSchool
setupModal("myModal_autres", "btn_autres", "close");  // Setup pour les autres formations