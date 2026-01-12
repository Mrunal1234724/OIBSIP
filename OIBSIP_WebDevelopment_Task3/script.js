function convertTemp() {
  const tempValue = document.getElementById("tempInput").value;
  const unit = document.getElementById("unit").value;
  const result = document.getElementById("result");
  const leftPanel = document.getElementById("leftPanel");
  const statusText = document.getElementById("statusText");

  if (tempValue === "") {
    result.innerHTML = "❌ Please enter a temperature";
    return;
  }

  let celsius;

  if (unit === "c") {
    celsius = parseFloat(tempValue);
  } else if (unit === "f") {
    celsius = (tempValue - 32) * 5 / 9;
  } else {
    celsius = tempValue - 273.15;
  }

  // 🎨 LIVE INDICATOR
  if (celsius < 10) {
    leftPanel.style.background = "#00bcd4";
    statusText.innerText = "❄️ Cold";
  } else if (celsius <= 30) {
    leftPanel.style.background = "#00c389";
    statusText.innerText = "🌿 Normal";
  } else {
    leftPanel.style.background = "#ff5252";
    statusText.innerText = "🔥 Hot";
  }

  // Conversion results
  const f = (celsius * 9 / 5) + 32;
  const k = celsius + 273.15;

  result.innerHTML = `
    Celsius: ${celsius.toFixed(2)} °C <br>
    Fahrenheit: ${f.toFixed(2)} °F <br>
    Kelvin: ${k.toFixed(2)} K
  `;
}
