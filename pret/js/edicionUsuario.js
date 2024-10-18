const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const username = document.getElementById('username').value.trim(); // Obtiene el nombre de usuario

    // Verificar si el nombre de usuario es "Patito 24"
    if (username === 'Patito 24') {
        if (confirm("El usuario 'Patito 24' existe, ¿desea modificarlo?")) {
            // Aquí puedes agregar la lógica para modificar el usuario
            alert("Usuario modificado.");
        }
    } else {
        if (confirm("El usuario no existe, ¿desea crearlo?")) {
            // Aquí puedes agregar la lógica para crear el nuevo usuario
            alert("Usuario creado.");
        }
    }
});
