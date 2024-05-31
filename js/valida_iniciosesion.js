
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        if (!validateForm()) {
            console.log('El formulario no es válido. Por favor, corrige los errores.');
            event.preventDefault(); // Evita que el formulario se envíe si hay errores de validación
        } else {
            console.log('El formulario es válido. Enviar datos...');
        }
    });

    const validateForm = () => {
        let isValid = true;
        // Validar email
        isValid = validateEmailField('email', 'El correo electrónico no es válido') && isValid;
        // Validar contraseña
        isValid = validateField('password', 'La contraseña es obligatoria') && isValid;
        return isValid;
    };

    const validateField = (fieldId, errorMessage) => {
        const field = document.getElementById(fieldId);
        const value = field.value.trim();
        // Si el valor del campo está vacío
        if (value === '') {
            // Establece un mensaje de error
            setErrorFor(field, errorMessage);
            // Devuelve false indicando que la validación ha fallado
            return false;
        } else {
            // Si el valor del campo no está vacío, elimina cualquier mensaje de error anterior
            setSuccessFor(field);
            // Devuelve true indicando que la validación ha tenido éxito
            return true;
        }
    };

    // Función para validar el campo de correo electrónico
    const validateEmailField = (fieldId, errorMessage) => {
        const field = document.getElementById(fieldId);
        const email = field.value.trim();
        if (email === '') {
            setErrorFor(field, 'El correo electrónico es obligatorio');
            return false;
        } else if (!isEmail(email)) {
            setErrorFor(field, errorMessage);
            return false;
        } else {
            setSuccessFor(field);
            return true;
        }
    };

    // Función para establecer un mensaje de error en un campo
    const setErrorFor = (input, message) => {
        const formControl = input.closest('div');
        const errorText = formControl.querySelector('.error-text');
        formControl.classList.add('error');
        errorText.innerText = message;
        input.focus();
    };

    // Función para eliminar un mensaje de error de un campo
    const setSuccessFor = (input) => {
        const formControl = input.closest('div');
        formControl.classList.remove('error');
        const errorText = formControl.querySelector('.error-text');
        errorText.innerText = '';
    };

    // Función para validar si una cadena es una dirección de correo electrónico válida
    const isEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };
    // Agrega eventos para borrar las clases de error cuando se completa el input o se presiona Tab
    form.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => {
            const value = input.value.trim();
            if (value !== '') {
                setSuccessFor(input);
            }
        });
    });
    // Agrega eventos para borrar las clases de error cuando se selecciona una opción del select
    form.querySelectorAll('select').forEach(select => {
        select.addEventListener('change', () => {
            const value = select.value;
            // Si se selecciona una opción, elimina cualquier mensaje de error
            if (value !== '') {
                setSuccessFor(select);
            }
        });
    });


});


