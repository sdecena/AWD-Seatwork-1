// Select all "Rent Now" buttons
document.querySelectorAll('.rent-button').forEach((button) => {
  button.addEventListener('click', (event) => {
    // Prevent default behavior of anchor tag
    event.preventDefault();

    // Get the car name and price from the corresponding parent element
    const carElement = button.closest('div');
    const carName = carElement.querySelector('h3').textContent;

    // Check if the car is already rented
    const rentedCars = JSON.parse(localStorage.getItem('rentedCars')) || [];
    if (rentedCars.includes(carName)) {
      alert(`The car "${carName}" is already rented!`);
    } else {
      // Add the car to the rented list and store it in local storage
      rentedCars.push(carName);
      localStorage.setItem('rentedCars', JSON.stringify(rentedCars));

      alert(`Proceed to customer information to successfully rent ${carName}`);
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

