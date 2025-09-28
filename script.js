// 🔄 Slideshow Logic
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// ⏱️ Auto-slide every 5 seconds
setInterval(() => {
  plusSlides(1);
}, 5000);

// ✅ Driver ID Validation
function validateDriverId(id) {
  const pattern = /^D\d{7}$/;
  return pattern.test(id);
}

// 🔐 Login Function
function Login() {
  const idDriver = document.getElementById('driver-id').value.trim();
  const driverName = document.getElementById('driver-name').value.trim();
  const password = document.getElementById('driver-password').value.trim();
  const Result = document.getElementById('result');

  if (!idDriver || !driverName || !password) {
    Result.textContent = 'Please enter all your information!';
    Result.style.color = 'red';
  } else if (!validateDriverId(idDriver)) {
    Result.textContent = 'Invalid Driver ID. Must start with "D" and have 7 digits.';
    Result.style.color = 'red';
  } else if (password !== "1234") {
    Result.textContent = 'Incorrect password';
    Result.style.color = 'red';
  } else {
    Result.textContent = '✅ Login successful!';
    Result.style.color = 'green';
  }
}

// 🌡️ Temperature Check Function
function checkTemperatureStatus() {
  const product = document.getElementById('products').value;
  const currentTemp = parseFloat(prompt("Enter current temperature (°C):"));
  const Result = document.getElementById('result');

  let minTemp, maxTemp;

  switch (product) {
    case 'dairy': minTemp = 1; maxTemp = 4; break;
    case 'veggies': minTemp = 4; maxTemp = 7; break;
    case 'meat': minTemp = 0; maxTemp = 4; break;
    case 'seafood': minTemp = -1; maxTemp = 2; break;
    case 'fruits': minTemp = 4; maxTemp = 8; break;
    default:
      Result.textContent = 'Unknown product category';
      Result.style.color = 'red';
      return;
  }

  if (isNaN(currentTemp)) {
    Result.textContent = 'Invalid temperature input';
    Result.style.color = 'red';
  } else if (currentTemp >= minTemp && currentTemp <= maxTemp) {
    Result.textContent = `✅ Temperature is safe for ${product} (${currentTemp}°C)`;
    Result.style.color = 'green';
  } else {
    Result.textContent = `⚠️ Temperature out of range for ${product}! (${currentTemp}°C)\nRecommended: ${minTemp}°C to ${maxTemp}°C`;
    Result.style.color = 'red';
  }
}

// 🚪 Sign Out Function
function signOut() {
  document.getElementById('driver-id').value = '';
  document.getElementById('driver-name').value = '';
  document.getElementById('driver-password').value = '';
  document.getElementById('result').textContent = 'Signed out successfully.';
  document.getElementById('result').style.color = 'blue';
}

// 🔓 Forgot Password Function
function forgotPassword() {
  const driverName = document.getElementById('driver-name').value.trim();
  const Result = document.getElementById('result');

  if (!driverName) {
    Result.textContent = 'Please enter your name to recover password.';
    Result.style.color = 'red';
  } else {
    Result.textContent = `🔐 Password recovery link sent to ${driverName}'s registered email.`;
    Result.style.color = 'blue';
  }
}