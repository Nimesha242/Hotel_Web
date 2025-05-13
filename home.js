
const rooms = [
  { roomNumber: "101", type: "Single", capacity: 1 },
  { roomNumber: "102", type: "Double", capacity: 2 },
  { roomNumber: "201", type: "Family", capacity: 4 },
  { roomNumber: "202", type: "Suite", capacity: 3 }
];

function checkAvailability() {
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  const guests = parseInt(document.getElementById("guests").value);
  const result = document.getElementById("result");

  if (!checkin || !checkout || !guests) {
    result.textContent = "Please fill all fields.";
    return;
  }

  if (new Date(checkout) <= new Date(checkin)) {
    result.textContent = "Check-out must be after check-in.";
    return;
  }

  const availableRooms = rooms.filter(room => room.capacity >= guests);

  if (availableRooms.length > 0) {
    result.innerHTML = "Available Rooms:<br>" + availableRooms.map(r =>
      `Room ${r.roomNumber} - ${r.type} (Max ${r.capacity} guests)`
    ).join("<br>");
  } else {
    result.textContent = "No rooms available for that guest count.";
  }
}
 // Show login/signup forms
    function showLogin() {
      document.getElementById("signupSection").classList.add("hidden");
      document.getElementById("loginSection").classList.remove("hidden");
    }

    function showSignup() {
      document.getElementById("loginSection").classList.add("hidden");
      document.getElementById("signupSection").classList.remove("hidden");
    }

    function showBooking() {
      document.getElementById("signupSection").classList.add("hidden");
      document.getElementById("loginSection").classList.add("hidden");
      document.getElementById("bookingSection").classList.remove("hidden");
    }

    // Sign Up
    document.getElementById("signupForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("signupName").value;
      const email = document.getElementById("signupEmail").value;
      const password = document.getElementById("signupPassword").value;

      const user = { name, email, password };
      localStorage.setItem("user", JSON.stringify(user));
      alert("Account created! Please log in.");
      showLogin();
    });

    // Login
    document.getElementById("loginForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      const savedUser = JSON.parse(localStorage.getItem("user"));
      if (savedUser && savedUser.email === email && savedUser.password === password) {
        alert("Login successful!");
        showBooking();
      } else {
        alert("Invalid credentials!");
      }
    });

    // Booking
    
