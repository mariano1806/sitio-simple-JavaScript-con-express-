let popupWindow = null;

function checkEnter() {
    const textInput = document.getElementById('textInput');
    const text = textInput.value;

    const bgColor = textInput.style.backgroundColor;
    const textColor = textInput.style.color;
    
    if (popupWindow && !popupWindow.closed) {
        popupWindow.close();
    }
    
    popupWindow = window.open("", "Popup", "width=300,height=200");
    
    popupWindow.document.write(`
        <html>
        <head><title>Texto con Colores</title></head>
        <body style="background-color:${bgColor}; color:${textColor}; text-align:center; font-size:20px;">
            <p>${text}</p>
        </body>
        </html>
    `);
}

let colorIndex = 0;
const colors = [
    { background: 'white', text: 'black' },
    { background: 'black', text: 'white' },
    { background: 'lightblue', text: 'red' }
];

function toggleColors() {
    colorIndex = (colorIndex + 1) % colors.length;
    const textBox = document.getElementById('textInput');
    textBox.style.backgroundColor = colors[colorIndex].background;
    textBox.style.color = colors[colorIndex].text;
}

