let baseDrinkPrice = 8;
let baseDessertPrice = 6;

if (baseDrinkPrice > baseDessertPrice) {
  console.log("Drinks are more expensive than desserts.");
} else {
  console.log("Desserts are more expensive or equal.");
}

// Calculate Extras Total
function calculateTotal() {
  let total = 0;
  const extras = document.querySelectorAll('input[name="extras"]:checked');
  extras.forEach(() => total += 2);
  return total;
}

// Simple Loop Example
for (let i = 1; i <= 3; i++) {
  console.log("Loop item " + i);
}

// Form Handling + Validation
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop normal submission

  // Fetch values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let location = document.getElementById("location").value.trim();
  let payment = document.getElementById("payment").value.trim();
  let orderdate = document.getElementById("orderDate").value.trim();
  let extraCost = calculateTotal();

  // Clear previous errors
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("phoneError").innerText = "";
  document.getElementById("locationError").innerText = "";
  document.getElementById("paymentError").innerText = "";
  document.getElementById("orderdateError").innerText = "";

  let isValid = true;

  // Validate Name
  if (name === "") {
    document.getElementById("nameError").innerText = "Full Name is required.";
    isValid = false;
  } else if (name.length < 3) {
    document.getElementById("nameError").innerText = "Full Name must be at least 3 characters.";
    isValid = false;
  }

  // Validate Email
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").innerText = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerText = "Invalid Email format.";
    isValid = false;
  }

  // Validate Phone (only digits, at least 8 chars)
  let phonePattern = /^[0-9]{8,}$/;
  if (phone === "") {
    document.getElementById("phoneError").innerText = "Phone Number is required.";
    isValid = false;
  } else if (!phonePattern.test(phone)) {
    document.getElementById("phoneError").innerText = "Phone Number must be at least 8 digits (numbers only).";
    isValid = false;
  }

  // Validate Location
  let locationPattern = /^[A-Za-z0-9\s]{8,}$/;
  if (location === "") {
    document.getElementById("locationError").innerText = "Delivery Location is required.";
    isValid = false;
  } else if (!locationPattern.test(location)) {
    document.getElementById("locationError").innerText = "Delivery Location must be at least 8 characters (letters and numbers).";
    isValid = false;
  }

  // Validate Payment
  if (payment === "") {
    document.getElementById("paymentError").innerText = "Payment Method is required.";
    isValid = false;
  }

  // Validate Order Date
  let orderdatePattern = /^\d{4}-\d{2}-\d{2}$/;
  if (orderdate === "") {
    document.getElementById("orderdateError").innerText = "Preferred Delivery Date is required.";
    isValid = false;
  } else if (!orderdatePattern.test(orderdate)) {
    document.getElementById("orderdateError").innerText = "Preferred Delivery Date must be in format YYYY-MM-DD.";
    isValid = false;
  }

  // Final Result
  if (isValid) {
    document.getElementById("messageArea").innerText =
      `Order received, ${name}. Extra cost: $${extraCost}. ✅`;
    alert("Form submitted successfully! 🎉");
    form.reset();
  }
});

// Change Heading Color
document.querySelector("h1").style.color = "brown";