document.addEventListener('DOMContentLoaded', function() {

    let botonEncriptar = document.querySelector('.text__action__encriptar');
    let botonDesencriptar = document.querySelector('.text__action__desencriptar');
    let botonCopiar = document.querySelector('.result__after__button');

    function encriptarTexto() {
        console.log("Botón cliqueado, encriptando...");

        // Obtener texto del usuario al hacer clic en el botón
        let textoUsuario = document.querySelector('.text__user__input_box').value;

        // Validar el texto para asegurarse de que no contiene caracteres especiales
        const regex = /^[a-zA-Z\s]*$/;
        if (!regex.test(textoUsuario)) {
            alert("El texto contiene caracteres especiales no permitidos. Sólo se aceptan letras.");
            return; // Salir de la función si hay caracteres especiales
        }

        // Esconder imagen
        document.querySelector('.result__before').style.display = 'none';

        // Encriptar el texto
        let textoEncriptado = textoUsuario.replace(/e/g, "enter")
                                           .replace(/i/g, "imes")
                                           .replace(/a/g, "ai")
                                           .replace(/o/g, "ober")
                                           .replace(/u/g, "ufat");

        // Mostrar el texto encriptado
        document.querySelector('.result__after__text').value = textoEncriptado;
    }

    function desencriptarTexto() {
        console.log("Botón cliqueado, desencriptando...");

        let textoUsuario = document.querySelector('.text__user__input_box').value;

        const regex = /^[a-zA-Z\s]*$/;
        if (!regex.test(textoUsuario)) {
            alert("El texto contiene caracteres especiales no permitidos. Sólo se aceptan letras.");
            return; // Salir de la función si hay caracteres especiales
        }

        document.querySelector('.result__before').style.display = 'none';

        let textoDesencriptado = textoUsuario.replace(/enter/g, "e")
                                            .replace(/imes/g, "i")
                                            .replace(/ai/g, "a")
                                            .replace(/ober/g, "o")
                                            .replace(/ufat/g, "u");

        document.querySelector('.result__after__text').value = textoDesencriptado;

    }

    function copiar() {
        console.log("Boton cliqueado, copiando...")

        var copiarTexto = document.querySelector('.result__after__text');

        copiarTexto.select();
        copiarTexto.setSelectionRange(0,99999);

        navigator.clipboard.writeText(copiarTexto.value);
    }

    // Agregar un evento al botón para ejecutar la función al hacer clic
    botonEncriptar.addEventListener('click', encriptarTexto);
    botonDesencriptar.addEventListener('click', desencriptarTexto);
    botonCopiar.addEventListener('click',copiar)

});
