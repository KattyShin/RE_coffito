// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};




document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".con-sales-btn button");
    const tables = document.querySelectorAll(".con-table");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove("active"));
            // Hide all tables
            tables.forEach(table => table.style.display = "none");

            // Add active class to clicked button
            button.classList.add("active");
            // Show the corresponding table
            tables[index].style.display = "block";
        });
    });

  // add modal
    const addModal = document.querySelector('.add-prod-modal');
    const addButton = document.querySelector('.add-prod-btn');

    addButton.addEventListener('click', () => {
      addModal.style.display = 'flex';
    });

    const cancelButton = document.querySelector('.cancel-btn');
    if(cancelButton){
      cancelButton.addEventListener('click', () => {
        addModal.style.display = 'none';
      });
    }


    // update modal
    const udModal = document.querySelector('.ud-prod-modal');
    const udButton = document.querySelector('.upd-prod-btn');

    udButton.addEventListener('click', () => {
      udModal.style.display = ('flex');
    });

    const udCancelButton = document.querySelector('.ud-cancel-btn');
    if(udCancelButton){
      udCancelButton.addEventListener('click', () => {
        udModal.style.display = 'none';
      });
    }
});

