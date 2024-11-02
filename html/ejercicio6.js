document.addEventListener('mousemove', function(event) {
    const x = event.clientX;
    const y = event.clientY;
    document.getElementById('mousePosition').textContent = `Posición del ratón: X: ${x}, Y: ${y}`;
});