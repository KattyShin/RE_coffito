document.addEventListener("DOMContentLoaded", () => {
  // SALES NA PART NI SHA SA BUTTONS
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



  document.getElementById("save-add-prod-btn")?.addEventListener("click", () => {
    bootstrap.Modal.getInstance(document.getElementById("addModal"))?.hide();
    new bootstrap.Modal(document.getElementById("confirmationModal")).show();
  });
  
  document.getElementById("save-updated-prod-btn")?.addEventListener("click", () => {
    bootstrap.Modal.getInstance(document.getElementById("updateModal"))?.hide();
    new bootstrap.Modal(document.getElementById("confirmationModal")).show();
  });
  

  document.getElementById("adminSaveChangesButton")?.addEventListener("click", () => {
    bootstrap.Modal.getInstance(document.getElementById("adminModal"))?.hide();
    new bootstrap.Modal(document.getElementById("confirmationModal")).show();
  });
  

  document.getElementById("stSaveChangesButton")?.addEventListener("click", () => {
    bootstrap.Modal.getInstance(document.getElementById("staffModal"))?.hide();
    new bootstrap.Modal(document.getElementById("confirmationModal")).show();
  });
  

  


});
