
document.getElementById('temperatureForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const celsius = document.getElementById('celsius').value;
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheit').textContent = `La temperatura en Fahrenheit es: ${fahrenheit.toFixed(2)} °F`;
});
