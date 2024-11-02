const exchangeRate = 4500; // Ejemplo de tasa de cambio

document.getElementById('conversionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const usdAmount = document.getElementById('usdAmount').value;
    const result = usdAmount * exchangeRate;
    document.getElementById('result').textContent = `El monto en pesos es: $${result.toFixed(2)}`;
});
