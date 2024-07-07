document.addEventListener('DOMContentLoaded', cargarUsuario);

function cargarUsuario() {
    const email = obtenerEmailDesdeCookie('emailCookie');

    if (email) {
        fetch(`/javabackend/GestionUsuariosServlet?email=${encodeURIComponent(email)}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('No se pudo obtener el perfil del usuario');
            })
            .then(usuario => {
                const userDetails = document.querySelector('#userDetails');
                const fechaFormateada = new Date(usuario.fechaNacimiento).toISOString().split('T')[0];

                userDetails.innerHTML = `
                    <h1>Perfil del Usuario</h1>
                    <div class="user-details">
                        <p><strong>ID:</strong> ${usuario.id}</p>
                        <p><strong>Nombre:</strong> ${usuario.nombre}</p>
                        <p><strong>Apellido:</strong> ${usuario.apellido}</p>
                        <p><strong>Email:</strong> ${usuario.email}</p>
                        <p><strong>Fecha de Nacimiento:</strong> ${fechaFormateada}</p>
                        <p><strong>País:</strong> ${usuario.pais}</p>
                    </div>
                `;
            })
            .catch(error => {
                console.error('Error al cargar el perfil del usuario:', error.message);
                // Manejo de errores, por ejemplo, mostrar un mensaje al usuario o redirigir a otra página
            });
    } else {
        console.error('No se encontró la cookie de email');
    }
}

function obtenerEmailDesdeCookie(nombreCookie) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const parts = cookie.split('=');
        const nombre = parts[0].trim();
        if (nombre === nombreCookie) {
            return decodeURIComponent(parts[1]);
        }
    }
    return null;
}

/*
document.addEventListener('DOMContentLoaded', cargarUsuario);

function cargarUsuario() {
    // No necesitas obtener el token de la cookie en JavaScript ya que es `HttpOnly`
    fetch('/javabackend/GestionUsuariosServlet', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // Aquí puedes añadir otros encabezados si es necesario
        },
        credentials: 'include' // Envía cookies con la solicitud
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('No se pudo obtener el perfil del usuario');
    })
    .then(usuario => {
        const userDetails = document.querySelector('#userDetails');
        const fechaFormateada = new Date(usuario.fechaNacimiento).toISOString().split('T')[0];

        userDetails.innerHTML = `
            <h1>Perfil del Usuario</h1>
            <div class="user-details">
                <p><strong>ID:</strong> ${usuario.id}</p>
                <p><strong>Nombre:</strong> ${usuario.nombre}</p>
                <p><strong>Apellido:</strong> ${usuario.apellido}</p>
                <p><strong>Email:</strong> ${usuario.email}</p>
                <p><strong>Fecha de Nacimiento:</strong> ${fechaFormateada}</p>
                <p><strong>País:</strong> ${usuario.pais}</p>
            </div>
        `;
    })
    .catch(error => {
        console.error('Error al cargar el perfil del usuario:', error.message);
        // Manejo de errores, por ejemplo, mostrar un mensaje al usuario o redirigir a otra página
    });
}
*/