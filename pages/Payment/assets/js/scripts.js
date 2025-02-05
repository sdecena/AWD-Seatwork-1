document.addEventListener("DOMContentLoaded", function() {
    const paymentForm = document.getElementById("payment-form");
    const backButton = document.querySelector('.header-navigation .nav-design'); // Target the "Back to Previous Page" button

// Handle payment form submission
paymentForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const cardNumber = document.getElementById("cardNumber").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;

    // Regular expression validation (as you already have)
    const cardNumberPattern = /^[0-9]{16}$/;
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvvPattern = /^[0-9]{3}$/;

    

        // Check if inputs match the required patterns
        if (!cardNumber.match(cardNumberPattern) || !expiryDate.match(expiryDatePattern) || !cvv.match(cvvPattern)) {
            // Alert if any field is invalid
            alert("Please enter valid payment details:\n- Card number: 16 digits with no spaces\n- Expiry date: MM/YY format\n- CVV: 3 digits");
        } else {
            // Simulate a successful payment if all inputs are valid
            alert("Payment Successful! Thank you for renting with McQueen Car Rentals!");

            // Redirect after payment (after a short delay to allow alert to show)
            setTimeout(function() {
                window.location.href = "../RentPage/index.html";
            }, 500); // Redirect after 500ms
        }
    });


    backButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Check if 'userInfo' exists in localStorage
        const userInfoArray = JSON.parse(localStorage.getItem("userInfo")) || [];

        // Remove the last user info (the current one that was submitted)
        if (userInfoArray.length > 0) {
            userInfoArray.pop(); // Removes the last item in the array (current user info)
            localStorage.setItem("userInfo", JSON.stringify(userInfoArray)); // Save the updated array back to localStorage
            console.log("Current user info removed from localStorage");
        }

        // Redirect to the UserInfo page after clearing the current user info
        window.location.href = "../UserInfo/index.html";
    });


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
                button.disabled = true; 
            }
        });
    }
});
