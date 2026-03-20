document.addEventListener('DOMContentLoaded', () => {
    // Inicializar Intersection Observer para animaciones de fade en el scroll
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: dejar de observar una vez que ya apareció
                // observer.unobserve(entry.target);
            }
        });
    }, options);

    // Seleccionar todos los elementos con la clase fade-in-up
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(el => observer.observe(el));
});
