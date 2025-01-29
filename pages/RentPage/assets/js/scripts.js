// Select all "Rent Now" buttons
document.querySelectorAll('.rent-button').forEach((button) => {
  button.addEventListener('click', (event) => {
    // Prevent default behavior of anchor tag
    event.preventDefault();

    // Check if the user information exists in local storage
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));



    // Get the car name from the corresponding parent element
    const carElement = button.closest('div');
    const carName = carElement.querySelector('h3').textContent;

    // Check if the car is already rented
    const rentedCars = JSON.parse(localStorage.getItem('rentedCars')) || [];
    if (rentedCars.includes(carName)) {
      alert(`The "${carName}" has just been rented! Try another vehicle.`);
    } else {
      // Add the car to the rented list and store it in local storage
      rentedCars.push(carName);
      localStorage.setItem('rentedCars', JSON.stringify(rentedCars));

      // Store the current rented car separately to track which car should be removed if the user goes back
      localStorage.setItem('currentRentedCar', carName);

      alert(`Proceed to customer information to successfully rent "${carName}"`);
      // Redirect to the next page (if necessary)
      window.location.href = button.parentElement.getAttribute('href');
    }
  });
});

// Disable "Rented" buttons to avoid interaction
document.querySelectorAll('.unavailable-button').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    alert('This car is already rented!');
  });
});
