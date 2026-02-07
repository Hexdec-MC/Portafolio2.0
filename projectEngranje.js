let rotacionActual = 0;
const anillo = document.getElementById('anillo');

document.querySelectorAll('.item-proyecto').forEach((item, index) => {
    item.addEventListener('click', () => {
        // Cada clic rota el anillo para centrar el seleccionado
        // Ajustamos los grados dependiendo de la separación
        rotacionActual = index * -25; 
        anillo.style.transform = `rotate(${rotacionActual}deg)`;
        
        // Aquí puedes cambiar el texto y fondo
        actualizarInfo(index);
    });
});