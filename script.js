// Event listener for the "Check" button
document.getElementById("check-btn").addEventListener("click", function () {
  const userInput = document.getElementById("user-input").value.trim();
  validateNaijaPhoneNumber(userInput);
});

// Clear button functionality
document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("results-div").textContent = "";
  document.getElementById("user-input").value = "";
});

// Nigerian phone number validator function
function validateNaijaPhoneNumber(input) {
  if (input === "") {
    alert("Abeg enter ur phone number nah😅");
    return;
  }

  const resultDiv = document.getElementById("results-div");

  // Regex for Nigerian numbers:
  // Accepts: 070xxxxxxxx, 080xxxxxxxx, 081xxxxxxxx, 090xxxxxxxx, 091xxxxxxxx
  // and international: +23470xxxxxxxx, +234-80xxxxxxxx, 2347012345678
  const regex = /^(?:\+234|234|0)(70|80|81|90|91)\d{8}$/;

  if (regex.test(input)) {
    resultDiv.textContent = `✅ Valid Naija number: ${input}`;
    resultDiv.style.color = "#00ffae";
    celebrate();
  } else {
    resultDiv.textContent = `❌ Invalid Naija number: ${input}`;
    resultDiv.style.color = "#ff5f5f";
  }
}

// Simple celebratory animation
function celebrate() {
  const originalText = document.getElementById("results-div").textContent;
  document.getElementById("results-div").textContent = "🎉 Boom! Correct Number!";
  setTimeout(() => {
    document.getElementById("results-div").textContent = originalText;
  }, 2000);
}
