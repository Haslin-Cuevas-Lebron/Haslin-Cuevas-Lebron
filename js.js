// Selecciona el elemento de la pantalla de la calculadora
const pantalla = document.querySelector(".pantalla");

// Selecciona todos los botones de la calculadora
const botones = document.querySelectorAll(".btn");

// Itera sobre cada botón para agregar un evento de escucha
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        // Obtiene el texto del botón presionado
        const botonApretado = boton.textContent;

        // Si el botón tiene id "c", limpia la pantalla
        if (boton.id === "c") {
            pantalla.textContent = "0"; // Resetea la pantalla a "0"
            return; // Termina la ejecución de la función
        }

        // Si el botón tiene id "borrar", elimina el último carácter
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0"; // Si solo queda un carácter o hay un error, resetea a "0"
            } else {
                // Elimina el último carácter del texto en la pantalla
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return; // Termina la ejecución de la función
        }

        // Si el botón tiene id "igual", evalúa la expresión en la pantalla
        if (boton.id === "igual") {
            try {
                // Evalúa la expresión matemática en la pantalla
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                // Si ocurre un error, muestra "Error!" en la pantalla
                pantalla.textContent = "Error!";
            }
            return; // Termina la ejecución de la función
        }

        // Si la pantalla muestra "0" o "Error!", reemplaza el texto con el del botón
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            // De lo contrario, agrega el texto del botón al final del texto actual
            pantalla.textContent += botonApretado;
        }
    });
});