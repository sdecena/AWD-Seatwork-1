// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the form and input elements
    const form = document.querySelector("form");
    const firstNameInput = document.querySelector("#firstName");
    const lastNameInput = document.querySelector("#lastName");
    const contactNumberInput = document.querySelector("#contactNumber");
    const addressInput = document.querySelector("#address");

    // Check if there's data already in local storage and populate the form with the last entry
    if (localStorage.getItem("userInfo")) {
        const userInfoArray = JSON.parse(localStorage.getItem("userInfo"));
        if (userInfoArray.length > 0) {
            const lastUser = userInfoArray[userInfoArray.length - 1];  // Get the last submitted user info
            firstNameInput.value = lastUser.firstName;
            lastNameInput.value = lastUser.lastName;
            contactNumberInput.value = lastUser.contactNumber;
            addressInput.value = lastUser.address;
        }
    }

    // Add event listener to handle form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Collect the user input values
        const userInfo = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            contactNumber: contactNumberInput.value,
            address: addressInput.value
        };

        // Get the current list of userInfo from localStorage, or initialize an empty array if not yet stored
        const userInfoArray = JSON.parse(localStorage.getItem("userInfo")) || [];

        // Add the new user info to the array
        userInfoArray.push(userInfo);

        // Save the updated list back to localStorage
        localStorage.setItem("userInfo", JSON.stringify(userInfoArray));

        setTimeout(function() {
            window.location.href = "../RentPage/index.html";  // Redirect to page 1 after saving
        }, 500);

        // Show an alert to the user
        alert("Car rented successfully!");
    });

    // Select the "Back to Previous Page" link
    const backButton = document.querySelector(".nav-design");
    
    // Add event listener to clear only the selected rented car when navigating back
    backButton.addEventListener("click", function() {
        // Get the list of rented cars from localStorage
        let rentedCars = JSON.parse(localStorage.getItem("rentedCars")) || [];
        
        // Get the currently rented car from localStorage
        const carName = localStorage.getItem("currentRentedCar");

        // Remove only the selected rented car from the list
        if (carName) {
            rentedCars = rentedCars.filter(car => car !== carName);
            localStorage.setItem("rentedCars", JSON.stringify(rentedCars));

            // Remove the specific car reference from localStorage
            localStorage.removeItem("currentRentedCar");
        }
    });
});
