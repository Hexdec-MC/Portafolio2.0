document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".presentacion");
    const iconos = document.querySelectorAll(".grid-skills figure");

    const observerOptions = {
        root: null,
        // Añadimos más puntos de control para mayor suavidad
        threshold: [0, 0.20, 0.95, 1] 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const ratio = entry.intersectionRatio;

            // 1. Bajamos la entrada al 20% para que aparezcan antes
            // 2. Subimos la salida al 95% para que no se vayan hasta que la sección casi desaparezca
            if (ratio > 0.20 && ratio < 0.95) {
                iconos.forEach((icono, index) => {
                    setTimeout(() => {
                        icono.classList.add("aparecer");
                    }, index * 60);
                });
            } else {
                // Solo se quitan si estás muy arriba o ya te pasaste casi toda la sección
                iconos.forEach((icono) => {
                    icono.classList.remove("aparecer");
                });
            }
        });
    }, observerOptions);

    observer.observe(section);
});