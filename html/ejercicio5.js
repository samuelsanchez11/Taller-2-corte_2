
document.getElementById('hideSection').addEventListener('click', function() {
    const paragraph = document.getElementById('paragraph');
    paragraph.style.display = 'none';
});

document.addEventListener('mousemove', function(event) {
    const x = event.clientX;
    const y = event.clientY;
    document.getElementById('mousePosition').textContent = `Posición del ratón: X: ${x}, Y: ${y}`;
});
