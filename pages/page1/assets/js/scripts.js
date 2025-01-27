<script>
  document.addEventListener("DOMContentLoaded", () => {
    // Add event listeners to "Rent Now" buttons
    const rentButtons = document.querySelectorAll(".rent-button");
    rentButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Store the car name in localStorage (assuming the car name is in the h3 tag)
        const carName = button.previousElementSibling.textContent;
        localStorage.setItem("selectedCar", carName);
        // Redirect to the customer info page
        window.location.href = "./customer-info.html";
      });
    });
  });
</script>
