// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the form and input elements
    const form = document.querySelector("form");
    const firstNameInput = document.querySelector("#firstName");
    const lastNameInput = document.querySelector("#lastName");
    const contactNumberInput = document.querySelector("#contactNumber");
    const addressInput = document.querySelector("#address");

    // Check if there's data already in local storage and populate the form
    if (localStorage.getItem("userInfo")) {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        firstNameInput.value = userInfo.firstName;
        lastNameInput.value = userInfo.lastName;
        contactNumberInput.value = userInfo.contactNumber;
        addressInput.value = userInfo.address;
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

        // Save the data in local storage
        localStorage.setItem("userInfo", JSON.stringify(userInfo));

        setTimeout(function() {
            window.location.href = "../page1/index.html";
        }, 500);

        // Show an alert to the user
        alert("CAR RENTED");
    });
});
