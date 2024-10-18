/*document.addEventListener('DOMContentLoaded', () => {
    // Datos de ejemplo
    const projects = {
        'Proyecto A': ['Trabajador A', 'Trabajador D'],
        'Proyecto B': ['Trabajador B', 'Trabajador C']
    };

    const users = []; // Arreglo para almacenar usuarios
    const projectContainer = document.getElementById('project-container');
    const usersContainer = document.getElementById('users-container');

    // Función para crear un nuevo proyecto
    document.querySelector('.btn-new-project').addEventListener('click', () => {
        const projectName = prompt("Introduce el nombre del nuevo proyecto:");
        if (projectName && !projects[projectName]) {
            projects[projectName] = []; // Crear proyecto vacío
            addProjectToDOM(projectName);
        } else {
            alert("El proyecto ya existe o no se introdujo un nombre válido.");
        }
    });

    // Función para eliminar un proyecto
    document.querySelector('.btn-delete-project').addEventListener('click', () => {
        const projectName = prompt("Introduce el nombre del proyecto a eliminar:");
        if (projects[projectName]) {
            delete projects[projectName]; // Eliminar proyecto del objeto
            removeProjectFromDOM(projectName); // Remover del DOM
        } else {
            alert("El proyecto no existe.");
        }
    });

    // Función para añadir el proyecto al DOM
    function addProjectToDOM(projectName) {
        const projectDiv = document.createElement('div');
        projectDiv.textContent = projectName;
        projectDiv.style.cursor = 'pointer';
        projectDiv.classList.add('project-item');
        projectDiv.addEventListener('click', () => showWorkersInUserContainer(projectName));

        projectContainer.appendChild(projectDiv);
    }

    // Función para mostrar los trabajadores en el contenedor de usuarios
    function showWorkersInUserContainer(projectName) {
        // Limpiar el contenedor de usuarios
        usersContainer.innerHTML = '';

        const workers = projects[projectName];
        if (workers.length > 0) {
            workers.forEach(worker => {
                const workerDiv = document.createElement('div');
                workerDiv.textContent = worker;
                usersContainer.appendChild(workerDiv);
            });
        } else {
            usersContainer.textContent = 'No hay trabajadores asignados a este proyecto.';
        }
    }

    // Función para eliminar el proyecto del DOM
    function removeProjectFromDOM(projectName) {
        const projectDivs = document.querySelectorAll('.project-item');
        projectDivs.forEach(projectDiv => {
            if (projectDiv.textContent.trim() === projectName) {
                projectContainer.removeChild(projectDiv);
            }
        });
    }

    // Función para agregar un usuario
    document.querySelector('.btn-add-user').addEventListener('click', () => {
        const userName = prompt("Introduce el nombre del nuevo usuario:");
        if (userName) {
            users.push(userName); // Agregar usuario al arreglo
            addUserToDOM(userName); // Agregar usuario al DOM
        } else {
            alert("No se introdujo un nombre válido.");
        }
    });

    // Función para agregar un usuario al contenedor de usuarios
    function addUserToDOM(userName) {
        const userDiv = document.createElement('div');
        userDiv.textContent = userName;
        usersContainer.appendChild(userDiv);
    }

    // Función para eliminar un usuario
    document.querySelector('.btn-delete-user').addEventListener('click', () => {
        const userName = prompt("Introduce el nombre del usuario a eliminar:");
        const userIndex = users.indexOf(userName);
        if (userIndex !== -1) {
            users.splice(userIndex, 1); // Eliminar usuario del arreglo
            removeUserFromDOM(userName); // Remover del DOM
        } else {
            alert("El usuario no existe.");
        }
    });

    // Función para eliminar un usuario del contenedor de usuarios
    function removeUserFromDOM(userName) {
        const userDivs = usersContainer.children;
        for (let i = 0; i < userDivs.length; i++) {
            if (userDivs[i].textContent.trim() === userName) {
                usersContainer.removeChild(userDivs[i]);
                break;
            }
        }
    }

    // Cargar proyectos iniciales
    for (const project in projects) {
        addProjectToDOM(project);
    }
});
*/

const nuevoProyecto = document.querySelector('.btn-new-project');
const borrarProyecto = document.querySelector('.btn-delete-project');
const agregarUsuarioBtn = document.querySelector('.btn-add-user');
const eliminarUsuarioBtn = document.querySelector('.btn-delete-user');
let proyectoSeleccionadoIndex = null; // Para almacenar el índice del proyecto seleccionado
let usuarioSeleccionadoIndex = null; // Para almacenar el índice del usuario seleccionado
const proyectos = [
    ['Proyecto A', 'Usuario A', 'Usuario B'],
    ['Proyecto B', 'Usuario E', 'Usuario S']
];

registrarListener();

function registrarListener() {
    cargarProyectos();
    nuevoProyecto.addEventListener('click', agregarProyecto);
    borrarProyecto.addEventListener('click', eliminarProyecto);
    agregarUsuarioBtn.addEventListener('click', agregarUsuario);
    eliminarUsuarioBtn.addEventListener('click', eliminarUsuario);
}

// Función para cargar los nombres de los proyectos en el contenedor
function cargarProyectos() {
    const projectContainer = document.getElementById('project-container');
    
    // Limpiar el contenedor antes de agregar los proyectos (si es necesario actualizar)
    projectContainer.innerHTML = '';

    // Recorrer el array de proyectos y crear un elemento HTML para cada uno
    proyectos.forEach((proyecto, index) => {
        const projectElement = document.createElement('div');
        projectElement.textContent = proyecto[0]; // Mostrar el nombre del proyecto (columna 0)
        projectElement.classList.add('project-item'); // Añadir clase para identificar los elementos
        projectContainer.appendChild(projectElement); // Añadir el elemento al contenedor

        // Agregar evento de clic a cada proyecto
        projectElement.addEventListener('click', function() {
            console.log("Has hecho clic en el proyecto:", projectElement.textContent);
            proyectoSeleccionadoIndex = index; // Almacenar el índice del proyecto seleccionado
            usuarioSeleccionadoIndex = null; // Resetear el índice del usuario
            mostrarUsuarios(index); // Pasar el índice del proyecto clicado
        });
    });
}

function agregarProyecto() {
    const nombreProyecto = prompt("Ingresa el nombre del nuevo proyecto:");

    // Verificar si el nombre ya existe en la columna 0 (primer elemento de cada sub-array)
    const existeProyecto = proyectos.some(proyecto => proyecto[0] === nombreProyecto);

    if (existeProyecto) {
        alert("El proyecto ya existe. Intenta con un nombre diferente.");
    } else if (nombreProyecto) {
        // Agregar el nuevo proyecto si no existe
        proyectos.push([nombreProyecto]);
        console.log("Proyecto agregado:", nombreProyecto);
        muestraArreglo();
    } else {
        alert("No se agregó el proyecto. Nombre inválido.");
    }
    cargarProyectos();
}

// Función para mostrar los usuarios del proyecto seleccionado en el contenedor
function mostrarUsuarios(index) {
    const usersContainer = document.getElementById('users-container');
    
    // Limpiar el contenedor antes de agregar los usuarios (para evitar duplicados)
    usersContainer.innerHTML = '';

    const usuarios = proyectos[index].slice(1); // Obtener los usuarios del proyecto, excluyendo el nombre

    // Recorrer los usuarios y crear un elemento HTML para cada uno
    usuarios.forEach((usuario, userIndex) => {
        const userElement = document.createElement('div');
        userElement.textContent = usuario; // Mostrar el nombre del usuario
        userElement.classList.add('user-item'); // Añadir clase para identificar los usuarios
        usersContainer.appendChild(userElement); // Añadir el elemento al contenedor

        // Evento para seleccionar usuario al hacer clic
        userElement.addEventListener('click', function() {
            console.log("Has hecho clic en el usuario:", userElement.textContent);
            usuarioSeleccionadoIndex = userIndex + 1; // Almacenar el índice del usuario (sumamos 1 porque el primero es el nombre del proyecto)
        });
    });

    console.log("Usuarios del proyecto:", usuarios);
}

// Función para agregar un usuario al proyecto seleccionado
function agregarUsuario() {
    if (proyectoSeleccionadoIndex === null) {
        alert("Selecciona un proyecto antes de agregar un usuario.");
        return;
    }

    const nombreUsuario = prompt("Ingresa el nombre del nuevo usuario:");

    if (nombreUsuario) {
        // Verificar si el usuario ya existe en el proyecto seleccionado
        const usuarios = proyectos[proyectoSeleccionadoIndex].slice(1); // Obtener los usuarios, excluyendo el nombre del proyecto
        const existeUsuario = usuarios.includes(nombreUsuario);

        if (existeUsuario) {
            alert(`El usuario "${nombreUsuario}" ya existe en el proyecto ${proyectos[proyectoSeleccionadoIndex][0]}.`);
        } else {
            // Agregar el nuevo usuario al array del proyecto seleccionado
            proyectos[proyectoSeleccionadoIndex].push(nombreUsuario);
            console.log(`Usuario ${nombreUsuario} agregado al proyecto ${proyectos[proyectoSeleccionadoIndex][0]}`);
            mostrarUsuarios(proyectoSeleccionadoIndex); // Actualizar la lista de usuarios
        }
    } else {
        alert("Nombre de usuario inválido.");
    }
}

// Función para eliminar un proyecto seleccionado
function eliminarProyecto() {
    if (proyectoSeleccionadoIndex === null) {
        alert("Selecciona un proyecto antes de eliminar.");
        return;
    }

    // Eliminar el proyecto del array
    const nombreProyecto = proyectos[proyectoSeleccionadoIndex][0];
    proyectos.splice(proyectoSeleccionadoIndex, 1);
    console.log(`Proyecto ${nombreProyecto} eliminado`);
    
    // Resetear el índice del proyecto seleccionado
    proyectoSeleccionadoIndex = null;
    cargarProyectos(); // Recargar la lista de proyectos
    document.getElementById('users-container').innerHTML = ''; // Limpiar los usuarios del contenedor
}

// Función para eliminar un usuario seleccionado del proyecto actual
function eliminarUsuario() {
    if (proyectoSeleccionadoIndex === null) {
        alert("Selecciona un proyecto antes de eliminar un usuario.");
        return;
    }

    if (usuarioSeleccionadoIndex === null) {
        alert("Selecciona un usuario antes de eliminar.");
        return;
    }

    // Eliminar el usuario del array del proyecto seleccionado
    const nombreUsuario = proyectos[proyectoSeleccionadoIndex][usuarioSeleccionadoIndex];
    proyectos[proyectoSeleccionadoIndex].splice(usuarioSeleccionadoIndex, 1);
    console.log(`Usuario ${nombreUsuario} eliminado del proyecto ${proyectos[proyectoSeleccionadoIndex][0]}`);
    
    // Resetear el índice del usuario seleccionado
    usuarioSeleccionadoIndex = null;
    mostrarUsuarios(proyectoSeleccionadoIndex); // Recargar la lista de usuarios
}

function muestraArreglo() {
    console.log(proyectos);
}
