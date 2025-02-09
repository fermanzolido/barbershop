// Aseguramos que el sitio funcione correctamente sin cookies de terceros
document.addEventListener('DOMContentLoaded', function() {
    // Verificamos si el navegador soporta almacenamiento local como alternativa a cookies
    const storageAvailable = (type) => {
        try {
            const storage = window[type];
            const x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return false;
        }
    };

    // Usamos localStorage si está disponible, sino continuamos sin almacenamiento
    const canUseStorage = storageAvailable('localStorage');
    console.log('Local storage disponible:', canUseStorage);

    // Manejo de zoom en imágenes
    const imageModal = document.getElementById('imageModal');
    const zoomImage = document.getElementById('zoomImage');
    let currentScale = 1;
    let isDragging = false;
    let startX, startY, translateX = 0, translateY = 0;

    // Evento para cargar la imagen en el modal
    document.querySelectorAll('.gallery-img').forEach(img => {
        img.addEventListener('click', function() {
            zoomImage.src = this.src;
            zoomImage.alt = this.alt;
            currentScale = 1;
            translateX = 0;
            translateY = 0;
            updateImageTransform();
        });
    });

    // Manejar el zoom con la rueda del mouse
    zoomImage.addEventListener('wheel', function(e) {
        const delta = e.deltaY;
        const scaleChange = delta > 0 ? 0.9 : 1.1;
        currentScale = Math.min(Math.max(1, currentScale * scaleChange), 4);
        updateImageTransform();
        // Prevenimos el scroll solo si hay zoom activo
        if (currentScale > 1) {
            e.preventDefault();
        }
    }, { passive: false });

    // Manejar el arrastre de la imagen
    zoomImage.addEventListener('mousedown', function(e) {
        if (currentScale > 1) {
            isDragging = true;
            startX = e.clientX - translateX;
            startY = e.clientY - translateY;
        }
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            translateX = e.clientX - startX;
            translateY = e.clientY - startY;
            updateImageTransform();
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
    });

    // Función para actualizar la transformación de la imagen
    function updateImageTransform() {
        zoomImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentScale})`;
    }

    // Reset zoom al cerrar el modal
    imageModal.addEventListener('hidden.bs.modal', function() {
        currentScale = 1;
        translateX = 0;
        translateY = 0;
        updateImageTransform();
    });

    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Cerrar menú móvil si está abierto
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });

    // Cambiar estilo de navbar al hacer scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.backgroundColor = 'rgba(44, 44, 44, 0.98)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.backgroundColor = 'rgba(44, 44, 44, 0.9)';
        }
    });

    // Animación de elementos al hacer scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.horario-card, .galeria-item, .ubicacion-info');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            
            if (elementPosition < screenPosition) {
                element.classList.add('fade-in');
            }
        });
    };

    // Ejecutar animación al cargar la página y al hacer scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // Crear directorio de imágenes al cargar
    console.log('Asegúrate de crear el directorio "img" y agregar las imágenes necesarias:');
    console.log('- hero-bg.png (imagen de fondo del hero)');
    console.log('- reservar-bg.png (imagen de fondo de la sección de reservas)');
    console.log('- corte1.png, corte2.png, corte3.png (imágenes para la galería)');
});