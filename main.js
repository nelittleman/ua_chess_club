// === Global site interactions ===
document.addEventListener("DOMContentLoaded", () => {
    // --- Auto-update footer year ---
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
 
    // --- FAQ Accordion ---
    const accordionHeaders = document.querySelectorAll(".accordion-header");
  
    accordionHeaders.forEach((header) => {
      header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const openItem = document.querySelector(".accordion-item.active");
  
        // Close previously open item
        if (openItem && openItem !== accordionItem) {
          openItem.classList.remove("active");
        }
  
        // Toggle the clicked item
        accordionItem.classList.toggle("active");
      });
    });
  
    // --- Basic form validation ---
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
      form.addEventListener("submit", e => {
        e.preventDefault(); // stops actual submission
        alert("✅ Your membership form was submitted successfully!");
        form.reset(); // optional: clears the form
        let valid = true;
        form.querySelectorAll("[required]").forEach(input => {
          if (!input.value.trim()) {
            valid = false;
            input.style.border = "2px solid #ab0520"; // red highlight
          } else {
            input.style.border = "1px solid #ccc";
          }
        });
        if (!valid) {
          e.preventDefault();
          alert("Please fill in all required fields.");
        }
      });
    });
  });
  