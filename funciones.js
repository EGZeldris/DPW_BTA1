      // Funciones para modales
      function openModal(modalId) {
        document.getElementById(modalId).style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    function switchModal(fromId, toId) {
        closeModal(fromId);
        openModal(toId);
    }

    // Cerrar modal al hacer clic fuera del contenido
    window.onclick = function(event) {
        if (event.target.className === 'modal') {
            event.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // Manejo de formularios
    document.getElementById('login-form').onsubmit = function(e) {
        e.preventDefault();
        alert('Inicio de sesión exitoso!');
        closeModal('login-modal');
    }

    document.getElementById('register-form').onsubmit = function(e) {
        e.preventDefault();
        alert('Registro exitoso! Por favor inicia sesión.');
        switchModal('register-modal', 'login-modal');
    }

    document.getElementById('appointment-form').onsubmit = function(e) {
        e.preventDefault();
        alert('Cita agendada correctamente. Nos pondremos en contacto contigo para confirmar.');
        this.reset();
    }

    document.getElementById('modal-appointment-form').onsubmit = function(e) {
        e.preventDefault();
        alert('Cita agendada correctamente. Nos pondremos en contacto contigo para confirmar.');
        closeModal('appointment-modal');
        this.reset();
    }

    // Función simulada para añadir al carrito
    function addToCart(productId) {
        alert('Producto añadido al carrito!');
        // Aquí iría la lógica real para añadir al carrito
    }