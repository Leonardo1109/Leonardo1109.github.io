const proyectos = [
    ['Proyecto A', 'Usuario A', 'Usuario B'],
    ['Proyecto C', 'Usuario E', 'Usuario S']
];

function cargarProyectos() {
    const projectContainer = document.getElementById('project-container');

    // Limpiar el contenedor antes de agregar los proyectos
    projectContainer.innerHTML = '';

    // Recorrer el array de proyectos y crear un elemento HTML para cada uno
    proyectos.forEach((proyecto, index) => {
        const projectElement = document.createElement('div');
        projectElement.textContent = proyecto[0]; // Mostrar el nombre del proyecto
        projectElement.classList.add('project-item'); // Añadir clase para identificar los elementos

        // Agregar evento de clic al elemento del proyecto
        projectElement.addEventListener('click', () => mostrarImagen(proyecto[0])); // Pasar el nombre del proyecto

        projectContainer.appendChild(projectElement); // Añadir el elemento al contenedor
    });
}

// Función para mostrar la imagen del proyecto seleccionado en el div block-center
function mostrarImagen(nombreProyecto) {
    const blockCenter = document.querySelector('.block-center');

    // Limpiar el contenido del block-center
    blockCenter.innerHTML = '';

    // Crear un nuevo elemento de imagen
    const imgElement = document.createElement('img');
    imgElement.style.width = '200px'; // Ajustar el ancho según sea necesario
    imgElement.style.height = 'auto'; // Mantener la proporción

    // Usar un if para establecer la ruta de la imagen según el proyecto seleccionado
    if (nombreProyecto === 'Proyecto A') {
        imgElement.src = '../img/carpeta.png'; // Ruta de la imagen para Proyecto A
    } else if (nombreProyecto === 'Proyecto C') {
        imgElement.src = ''; // Ruta de la imagen para Proyecto B
    } else {
        imgElement.src = ''; // Ruta de imagen por defecto o vacía
    }

    // Agregar la imagen al block-center
    blockCenter.appendChild(imgElement);

    // Agregar encabezado (opcional)
    const header = document.createElement('h4');
    header.textContent = nombreProyecto; // Mostrar el nombre del proyecto en el encabezado
    header.style.textAlign = 'center';
    blockCenter.prepend(header); // Colocar el encabezado en la parte superior
}

// Llama a cargarProyectos al inicio para mostrar los proyectos existentes
cargarProyectos();
