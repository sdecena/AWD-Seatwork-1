document.addEventListener("DOMContentLoaded", function () {
  const rentedCars = JSON.parse(localStorage.getItem('rentedCars')) || [];

  document.querySelectorAll('.rent-button').forEach(button => {
      const carElement = button.closest('div');
      const carName = carElement.querySelector('h3').textContent;

      // Disable button if car is already rented
      if (rentedCars.includes(carName)) {
          button.textContent = "Rented";
          button.classList.add("unavailable-button");
          button.disabled = true;
      }

      button.addEventListener('click', (event) => {
          event.preventDefault();

          // Check if the car is already rented
          if (rentedCars.includes(carName)) {
              alert(`This car has just been rented! Try another vehicle.`);
              return;
          }

          // Mark car as rented
          rentedCars.push(carName);
          localStorage.setItem('rentedCars', JSON.stringify(rentedCars));
          localStorage.setItem('currentRentedCar', carName);

          // Update button to indicate rental
          button.textContent = "Renting...";
          button.classList.add("unavailable-button");
          button.disabled = true;

          alert(`Proceed to customer information to successfully rent "${carName}"`);
          window.location.href = button.parentElement.getAttribute('href');
      });
  });
});
