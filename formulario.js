document.addEventListener("DOMContentLoaded", function() {
    function validar() {
        // Obtener los datos ingresados
        let nombre = document.getElementById("nombre");
        let nomb = nombre.value.trim();
        let apellido = document.getElementById("apellido");
        let surn = apellido.value.trim();
        let edad = document.getElementById("edad");
        let ed = edad.value.trim();
        let email = document.getElementById("email");
        let correo = email.value.trim();
        let comentario = document.getElementById("comentario");
        let comen = comentario.value.trim();
        let terms = document.getElementById("terms");
        let term = terms.checked;
        let patron = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // Validar los campos
        let valid = true;

        if (nomb.length < 3 || nomb.length > 16) {
            document.querySelector('#errorname').style.display = 'inline';
            nombre.focus();
            valid = false;
        } else {
            document.querySelector('#errorname').style.display = 'none';
        }

        if (surn.length < 3 || surn.length > 16) {
            document.querySelector('#errorsurn').style.display = 'inline';
            apellido.focus();
            valid = false;
        } else {
            document.querySelector('#errorsurn').style.display = 'none';
        }

        if (ed === "" || isNaN(ed) || ed < 18 || ed > 90) {
            document.querySelector('#errorage').style.display = 'inline';
            edad.focus();
            valid = false;
        } else {
            document.querySelector('#errorage').style.display = 'none';
        }

        if (!patron.test(correo)) {
            document.querySelector('#erroremail').style.display = 'inline';
            email.focus();
            valid = false;
        } else {
            document.querySelector('#erroremail').style.display = 'none';
        }

        if (comen.length > 250) {
            document.querySelector('#errorcom').style.display = 'inline';
            comentario.focus();
            valid = false;
        } else {
            document.querySelector('#errorcom').style.display = 'none';
        }

        if (!term) {
            document.querySelector('#errorcheck').style.display = 'inline';
            terms.focus();
            valid = false;
        } else {
            document.querySelector('#errorcheck').style.display = 'none';
        }

        if (valid) {
            // Mostrar los datos ingresados
            const datosIngresados = document.getElementById("datosIngresados");
            datosIngresados.style.display = "block";

            // Actualizar elementos con los datos
            document.getElementById("nombre-ingresado").textContent = nomb;
            document.getElementById("apellido-ingresado").textContent = surn;
            document.getElementById("edad-ingresado").textContent = ed;
            document.getElementById("email-ingresado").textContent = correo;
            document.getElementById("comen-ingresado").textContent = comen;
        }
        return false; // Para evitar que el formulario se envíe
    }

    document.getElementById("datos").onsubmit = validar;
});
