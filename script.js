function getCrop() {
    let temp = parseFloat(document.getElementById("temp").value);
    let rain = parseFloat(document.getElementById("rain").value);
    let month = document.getElementById("month").value;

    let crop = "";
    let advice = "";
    let statusClass = "";

    // Smart Logic
    if (rain > 200 && temp > 25) {
        crop = "🌾 Rice";
        advice = "High rainfall detected. Ensure drainage and pest control.";
        statusClass = "good";
    }
    else if (rain < 100 && temp > 30) {
        crop = "🌱 Millet";
        advice = "Dry conditions. Use drip irrigation and conserve water.";
        statusClass = "warning";
    }
    else if (temp < 20) {
        crop = "🌿 Wheat";
        advice = "Cool climate suitable. Maintain moderate irrigation.";
        statusClass = "good";
    }
    else if (rain >= 100 && rain <= 200) {
        crop = "🌽 Maize";
        advice = "Balanced conditions. Maintain soil nutrients.";
        statusClass = "good";
    }
    else {
        crop = " Cotton";
        advice = "Monitor temperature and water supply carefully.";
        statusClass = "warning";
    }

    let resultBox = document.getElementById("resultBox");

    resultBox.className = "";
    resultBox.classList.add(statusClass);

    resultBox.innerHTML =
        "<h3>Recommended Crop</h3>" +
        crop + "<br><br>" +
        "<small>" + advice + "</small>";

    resultBox.classList.remove("hidden");
}