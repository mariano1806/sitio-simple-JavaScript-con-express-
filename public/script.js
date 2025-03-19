// Variable global para almacenar la ventana emergente
let popupWindow = null;

// Detectar la tecla "Enter" y mostrar una alerta con el texto ingresado
function checkEnter() {
    const textInput = document.getElementById('textInput');
    const text = textInput.value;

    // Obtener los colores actuales de la caja de texto
    const bgColor = textInput.style.backgroundColor;
    const textColor = textInput.style.color;
    
    // Si ya existe una ventana emergente, la cerramos
    if (popupWindow && !popupWindow.closed) {
        popupWindow.close();
    }
    
    // Crear una nueva ventana emergente
    popupWindow = window.open("", "Popup", "width=300,height=200");
    
    // Escribir el contenido en la nueva ventana emergente con los colores
    popupWindow.document.write(`
        <html>
        <head><title>Texto con Colores</title></head>
        <body style="background-color:${bgColor}; color:${textColor}; text-align:center; font-size:20px;">
            <p>${text}</p>
        </body>
        </html>
    `);
}

// Lista de colores alternativos para la caja de texto
let colorIndex = 0;
const colors = [
    { background: 'white', text: 'black' },
    { background: 'black', text: 'white' },
    { background: 'lightblue', text: 'red' }
];

// Alternar colores al hacer clic en el botón
function toggleColors() {
    colorIndex = (colorIndex + 1) % colors.length;
    const textBox = document.getElementById('textInput');
    textBox.style.backgroundColor = colors[colorIndex].background;
    textBox.style.color = colors[colorIndex].text;
}
