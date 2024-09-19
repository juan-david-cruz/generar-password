//crear variables
let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let mensaje = document.getElementById('mensaje');
const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

//funcion que genera la contraseña de longitud dada por el usuario
function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    if (numeroDigitado < 7) {
        alert("La cantidad de caracteres tiene que ser mayor a 6");
    }
    else {
        let password = '';
        for (let i = 0; i < numeroDigitado; i++) {
            let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
            password = password + caracterAleatorio;
        }
        contrasena.value = password;
        validar(password);
    }
}

//funcion que limpia los campos de la longitud de contraseña y la contraseña misma
function limpiar() {
    contrasena.value = '';
    cantidad.value = '';
}

//funcion que valida si la contraseña es segura
function validar(cadena) {
    let fuerza = 0;
    let consejos = "";

    // revisión de MAYUSCULA
    if (cadena.match(/[A-Z]/)) {
        fuerza = fuerza + 1;
    } else {
        consejos = "una mayúscula";
    }

    // revisión de minuscula
    if (cadena.match(/[a-z]/)) {
        fuerza = fuerza + 1;
    } else {
        if (consejos.length === 0) {
            consejos = "una minúscula";
        }
        else {
            consejos = consejos + ", una minúscula";
        }
    }

    // revisión de presencia de numeros
    if (cadena.match(/\d/)) {
        fuerza = fuerza + 1;
    } else {
        if (consejos.length === 0) {
            consejos = "un número";
        }
        else {
            consejos = consejos + ", un número";
        }
    }

    // revisión de presencia de caracteres especiales
    if (cadena.match(/[^a-zA-Z\d]/)) {
        fuerza = fuerza + 1;
    } else {
        if (consejos.length === 0) {
            consejos = "al menos un caracter especial";
        }
        else {
            consejos = consejos + " y al menos un caracter especial";
        }
    }

    // Return results
    if (fuerza === 4) {
        consejos = "Contraseña fuerte. ";
    }
    else {
        consejos = "Contraseña debil, hace falta agregar: " + consejos + ". Genere otra contraseña.";
    }

    mensaje.textContent = consejos;
}
