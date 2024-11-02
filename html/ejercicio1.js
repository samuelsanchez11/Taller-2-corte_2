
const words = ["manzana", "banana", "naranja", "fresa", "uva", "mango", "melocotón", "sandía", "kiwi", "piña"];

document.getElementById('addWord').addEventListener('click', function() {
    const ul = document.getElementById('wordList');
    const li = document.createElement('li');
    const randomWord = words[Math.floor(Math.random() * words.length)];
    li.textContent = randomWord;
    ul.appendChild(li);
});

const exchangeRate = 4500; // Ejemplo de tasa de cambio

document.getElementById('conversionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const usdAmount = document.getElementById('usdAmount').value;
    const result = usdAmount * exchangeRate;
    document.getElementById('result').textContent = `El monto en pesos es: $${result.toFixed(2)}`;
});
