const slots = document.querySelectorAll('.slot');
const classes = ['pos-arriba', 'pos-centro', 'pos-abajo'];

document.getElementById('nextBtn').addEventListener('click', () => {
    // Rotamos el array de clases hacia adelante
    classes.push(classes.shift()); 
    actualizarPosiciones();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    // Rotamos el array de clases hacia atrás
    classes.unshift(classes.pop());
    actualizarPosiciones();
});

function actualizarPosiciones() {
    slots.forEach((slot, i) => {
        // Quitamos todas las posiciones viejas
        slot.classList.remove('pos-arriba', 'pos-centro', 'pos-abajo', 'active');
        // Ponemos la nueva
        slot.classList.add(classes[i]);
        
        // El que queda en el centro se activa
        if (classes[i] === 'pos-centro') {
            slot.classList.add('active');
            // Aquí puedes llamar a tu función para cambiar el texto del proyecto
        }
    });
}