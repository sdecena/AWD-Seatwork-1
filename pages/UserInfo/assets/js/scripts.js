
document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector("form");
    const firstNameInput = document.querySelector("#firstName");
    const lastNameInput = document.querySelector("#lastName");
    const contactNumberInput = document.querySelector("#contactNumber");
    const addressInput = document.querySelector("#address");

    // Check if there's data already in local storage
    if (localStorage.getItem("userInfo")) {
        const userInfoArray = JSON.parse(localStorage.getItem("userInfo"));
        if (userInfoArray.length > 0) {
            const lastUser = userInfoArray[userInfoArray.length - 1];  // Get the last user info
            firstNameInput.value = lastUser.firstName;
            lastNameInput.value = lastUser.lastName;
            contactNumberInput.value = lastUser.contactNumber;
            addressInput.value = lastUser.address;
        }
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const userInfo = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            contactNumber: contactNumberInput.value,
            address: addressInput.value
        };

        const userInfoArray = JSON.parse(localStorage.getItem("userInfo")) || [];

        // Add new user info to the array
        userInfoArray.push(userInfo);

        localStorage.setItem("userInfo", JSON.stringify(userInfoArray));

        setTimeout(function() {
            window.location.href = "../Payment/index.html";
        }, 500);

        // Alert to the user
        alert("Proceed to payment");
    });
    

    const backButton = document.querySelector(".nav-design");

    // Add event listener to clear only the selected rented car when navigating back
    backButton.addEventListener("click", function() {

        let rentedCars = JSON.parse(localStorage.getItem("rentedCars")) || [];


        const carName = localStorage.getItem("currentRentedCar");

        // Remove only the selected rented car
        if (carName) {
            rentedCars = rentedCars.filter(car => car !== carName);
            localStorage.setItem("rentedCars", JSON.stringify(rentedCars));

            // Remove the specific car from localStorage
            localStorage.removeItem("currentRentedCar");
        }
    });
});
