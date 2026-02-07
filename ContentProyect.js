// 1. Base de datos de proyectos
const proyectos = [
    {
        titulo: "Página Web 3D",
        descripcion: "Interfaz interactiva con profundidad visual utilizando JavaScript y Three.js.",
        img: "p1.webp",
        repo: "https://github.com/...",
        demo: "#"
    },
    {
        titulo: "HEX Dev Logo",
        descripcion: "Diseño de identidad visual gótica con estética vampírica para marca personal.",
        img: "p2.webp",
        repo: "https://github.com/...",
        demo: "#"
    },
    {
        titulo: "EE2 Display Fix",
        descripcion: "Optimización de motor gráfico para Empire Earth 2 en resoluciones modernas.",
        img: "p3.webp",
        repo: "https://github.com/...",
        demo: "#"
    },
    {
        titulo: "EE2 Display Fix",
        descripcion: "Optimización de motor gráfico para Empire Earth 2 en resoluciones modernas.",
        img: "p4.webp",
        repo: "https://github.com/...",
        demo: "#"
    }
];

let currentIndex = 0;
const slots = document.querySelectorAll('.slot');
const classes = ['pos-arriba', 'pos-centro', 'pos-abajo'];

// 2. Función para actualizar el texto con efecto suave
function actualizarContenido(index) {
    const contenedor = document.querySelector('.info-proyecto');
    contenedor.style.opacity = 0; // Desvanece el texto
    
    setTimeout(() => {
        document.getElementById('titulo-dinamico').innerText = proyectos[index].titulo;
        document.getElementById('descripcion-dinamica').innerText = proyectos[index].descripcion;
        document.getElementById('link-repo').href = proyectos[index].repo;
        document.getElementById('link-demo').href = proyectos[index].demo;
        contenedor.style.opacity = 1; // Aparece el texto
    }, 300);
}

// 3. Función principal de rotación
function rotar(direccion) {
    if (direccion === 'next') {
        classes.push(classes.shift());
        currentIndex = (currentIndex + 1) % proyectos.length;
    } else {
        classes.unshift(classes.pop());
        currentIndex = (currentIndex - 1 + proyectos.length) % proyectos.length;
    }

    // Calculamos índices para los círculos de arriba y abajo
    const prevIndex = (currentIndex - 1 + proyectos.length) % proyectos.length;
    const nextIndex = (currentIndex + 1) % proyectos.length;

    slots.forEach((slot, i) => {
        slot.classList.remove('pos-arriba', 'pos-centro', 'pos-abajo', 'active');
        slot.classList.add(classes[i]);
        
        // Buscamos la imagen dentro del slot
        const img = slot.querySelector('img');

        if (classes[i] === 'pos-centro') {
            slot.classList.add('active');
            img.src = proyectos[currentIndex].img; // Imagen Central
        } else if (classes[i] === 'pos-arriba') {
            img.src = proyectos[prevIndex].img;    // Imagen Arriba
        } else if (classes[i] === 'pos-abajo') {
            img.src = proyectos[nextIndex].img;   // Imagen Abajo
        }
    });

    actualizarContenido(currentIndex);
}

// 4. Eventos de los botones
document.getElementById('nextBtn').addEventListener('click', () => rotar('next'));
document.getElementById('prevBtn').addEventListener('click', () => rotar('prev'));