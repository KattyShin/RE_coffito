
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".con-sales-btn button");
  const tables = document.querySelectorAll(".con-table");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      buttons.forEach((btn) => btn.classList.remove("active"));
      // Hide all tables
      tables.forEach((table) => (table.style.display = "none"));

      // Add active class to clicked button
      button.classList.add("active");
      // Show the corresponding table
      tables[index].style.display = "block";
    });
  });

  const exampleModal = document.getElementById("exampleModal");
  if (exampleModal) {
    exampleModal.addEventListener("show.bs.modal", (event) => {
      // Button that triggered the modal
      const button = event.relatedTarget;
      // Extract info from data-bs-* attributes
      const recipient = button.getAttribute("data-bs-whatever");
      // If necessary, you could initiate an Ajax request here
      // and then do the updating in a callback.

      // Update the modal's content.
      const modalTitle = exampleModal.querySelector(".modal-title");
      const modalBodyInput = exampleModal.querySelector(".modal-body input");

      modalTitle.textContent = `New message to ${recipient}`;
      modalBodyInput.value = recipient;
    });
  }
});


const saveChangesButton = document.getElementById("saveChangesButton");
  if(saveChangesButton){  
    saveChangesButton.addEventListener("click", function () {
        // Close the Update Product modal
        var updateProductModal = bootstrap.Modal.getInstance(
          document.getElementById("exampleModal")
        );
        updateProductModal.hide();

        // Show the Confirmation modal
        var confirmationModal = new bootstrap.Modal(
          document.getElementById("confirmationModal")
        );
        confirmationModal.show();
      });
  }  


 const stSaveChangesButton = document.getElementById("stSaveChangesButton");
  if(stSaveChangesButton){
    stSaveChangesButton.addEventListener("click", function () {
        // Close the Update Product modal
        var staffModal = bootstrap.Modal.getInstance(
          document.getElementById("staffModal")
        );
        staffModal.hide();

        // Show the Confirmation modal
        var confirmationModal = new bootstrap.Modal(
          document.getElementById("confirmationModal")
        );
        confirmationModal.show();
   });
  }

  const adminSaveChangesButton = document.getElementById("adminSaveChangesButton");
  if(adminSaveChangesButton){
    adminSaveChangesButton.addEventListener("click", function () {
        // Close the Update Product modal
        var adminModal = bootstrap.Modal.getInstance(
          document.getElementById("adminModal")
        );
        adminModal.hide();

        // Show the Confirmation modal
        var confirmationModal = new bootstrap.Modal(
          document.getElementById("confirmationModal")
        );
        confirmationModal.show();
   });
  }
