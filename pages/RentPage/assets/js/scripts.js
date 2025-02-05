document.querySelectorAll('.rent-button').forEach((button) => {
  button.addEventListener('click', (event) => {

    event.preventDefault();

    // Check if user information exists in local storage
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));


    const carElement = button.closest('div');
    const carName = carElement.querySelector('h3').textContent;

    // Check if the car is already rented
    const rentedCars = JSON.parse(localStorage.getItem('rentedCars')) || [];
    if (rentedCars.includes(carName)) {
      alert(`This car has just been rented! Try another vehicle.`);
    } else {

      rentedCars.push(carName);
      localStorage.setItem('rentedCars', JSON.stringify(rentedCars));

      // Store the current rented car to track which car should be removed when the user goes back
      localStorage.setItem('currentRentedCar', carName);

      alert(`Proceed to customer information to successfully rent "${carName}"`);
      // Go to the next page (if necessary)
      window.location.href = button.parentElement.getAttribute('href');
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const rentButton = document.getElementById("rentButton");

  // Check if the car has been rented
  if (localStorage.getItem("carRented") === "true") {
    rentButton.innerText = "Rented";
    rentButton.classList.add("rented-button");
    rentButton.disabled = true; // Disable the button since it's rented
  }
});

// Unavailable buttons for rented
document.querySelectorAll('.unavailable-button').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    alert('This car has just been rented! Try another vehicle.');
  });
});

document.querySelectorAll('.rent-button').forEach(button => {
  button.addEventListener('click', function() {
      const carId = button.getAttribute('data-car-id');
      localStorage.setItem('rentedCarId', carId); // Store the rented car ID
  });
});

// Update RentPage JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Function to update the RentPage and mark the rented car as unavailable
    function updateRentPage(carId) {
        // Get the rent buttons for each car
        const rentButtons = document.querySelectorAll('.rent-button');

        // Loop through each button and check if it matches the rented car
        rentButtons.forEach(button => {
            if (button.getAttribute('data-car-id') === carId) {
                // Change button class to unavailable
                button.classList.remove('rent-button');
                button.classList.add('unavailable-button');
                button.textContent = 'Car Rented'; // Update the button text
                button.disabled = true; // Optionally disable the button so it can't be clicked again
            }
        });
    }
});
