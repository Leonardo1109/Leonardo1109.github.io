document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        // Obtener valores de los inputs
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        console.log(username, password);    
        
        // Comprobar si los valores son "admin"
        if (username === 'admin' && password === 'admin') {
            event.preventDefault(); // Evitar el envío del formulario
            console.log('Redireccionando...');
            window.location.href = '/html/administrador.html'; // Asegúrate de que la ruta es correcta
        } else if (username === 'cliente' && password === 'cliente') {
            event.preventDefault(); // Evitar el envío del formulario
            console.log('Redireccionando...');
            window.location.href = '/html/cliente.html'; // Asegúrate de que la ruta es correcta
        }else {
            // Evitar el envío del formulario si los datos no coinciden
            event.preventDefault();
            alert('Usuario o contraseña incorrectos');
        }
    });
});