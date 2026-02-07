// 1. Base de datos de proyectos
const proyectos = [
    {
        titulo: "Aplicativo Web de Mantenimientos",
        descripcion: "Aplicativo web para mantenimientos programados de Maquinarias Pesadas u otros autos. Hecho con Next.js y Firebase",
        img: "apli1.webp",
        repo: "maquinarias-7rp6.vercel.app",
        demo: "maquinarias-7rp6.vercel.app"
    },
    {
        titulo: "Aplicativo Web para Costos",
        descripcion: "Aplicativo web para poder calcular costos, especializado para tiendas pequeñas y medianas, además de un comparador de precios. Hecho con React.js y Supabase",
        img: "cost.webp",
        repo: "costos-rouge.vercel.app",
        demo: "https://github.com/Hexdec-MC/Costos"
    },
    {
        titulo: "Diseño de Pagina Web 1",
        descripcion: "Diseño de Pagina web hecha con html, css y javascript.",
        img: "pag2.webp",
        repo: "https://github.com/Hexdec-MC/landing",
        demo: "https://hexdec-mc.github.io/landing/Landig2/"
    },
    {
        titulo: "Diseño de Pagina Web 2",
        descripcion: "Diseño de Pagina web hecha con html, css y javascript. Inspirado en Nevados.",
        img: "pag3.webp",
        repo: "https://github.com/Hexdec-MC/landing",
        demo: "https://hexdec-mc.github.io/landing/isa/"
    },
    {
        titulo: "Diseño de Pagina Web 3",
        descripcion: " Diseño de Pagina web 3D hecha con html, css y javascript",
        img: "pag1.webp",
        repo: "https://github.com/Hexdec-MC/landing",
        demo: "https://hexdec-mc.github.io/landing/Landing1/"
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