function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const scale = document.getElementById('scale').value;
    let convertedTemperature;
  
    if (scale === 'celsius') {
      convertedTemperature = (temperatureInput - 32) * (5 / 9);
    } else {
      convertedTemperature = (temperatureInput * 9 / 5) + 32;
    }
  
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Converted temperature: ${convertedTemperature.toFixed(2)} ${scale === 'celsius' ? 'Celsius' : 'Fahrenheit'}`;
  }
  