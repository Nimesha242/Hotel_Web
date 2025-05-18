    
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission for demo

  alert("Booking submitted successfully!\nWe will contact you soon.");
  
  // Optional: send data using fetch() to a backend server or email service
  // const formData = new FormData(this);
});
