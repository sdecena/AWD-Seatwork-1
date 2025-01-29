
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
      alert(`The "${carName}" has just been rented! Try another vehicle.`);
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

// Unavailable buttons for rented
document.querySelectorAll('.unavailable-button').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    alert('This car is already rented!');
  });
});
