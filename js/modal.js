// Function to handle modal opening and closing logic
function setupModal(modalId, buttonId, spanClass) {
  let modal = document.getElementById(modalId);
  let btn = document.getElementById(buttonId);
  let span = document.querySelector(`#${modalId} .${spanClass}`);
  
  // Open the modal when the button is clicked
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  // Close the modal when the close button (span) is clicked
  span.onclick = function() {
    modal.style.display = "none";
  }

  // Close the modal when clicking outside of it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

// Setup modals for each project
setupModal("myModal2", "btn2", "close");
setupModal("myModal3", "btn3", "close");
setupModal("myModal4", "btn4", "close");
setupModal("myModal5", "btn5", "close");
setupModal("myModal6", "btn6", "close");
setupModal("myModal7", "btn7", "close");
setupModal("myModal_poe", "btn_poe", "close");
setupModal("myModal_poe1", "btn_poe1", "close");
setupModal("myModal_poe2", "btn_poe2", "close");
setupModal("myModal_ocr", "btn_ocr", "close");
setupModal("myModal_skilleos", "btn_skilleos", "close");
setupModal("myModal_vueschool", "btn_vueschool", "close");
setupModal("myModal_autres", "btn_autres", "close");