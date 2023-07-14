import './style.css'

const color_PALETTE = {
  "#73EEDC" : "Turquesa",
  "#73C2BE" : "Azul Tifffany",
  "#90F1EF" : "Azul Hielo",
  "#E6ADEC" : "Ciruela Telaraña",
  "#C287E8" : "Lavanda Floral", 
  "#FFB140" : "Naranja Web",
};

const addOptionsToColorPicker = () => {
const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(color_PALETTE).forEach((color) => {
   const option = document.createElement("option");
   option.value = color;
   option.innerText = color_PALETTE[color];
   colorPickerSelect.append(option);
  })
  }
  
const addEventListenerToColorPicker = () => {
    const colorPickerSelect = document.querySelector("#color-picker");
    const colorName = document.querySelector("#color-name");
    colorPickerSelect.addEventListener("change", (event) => {
    const newColor = event.target.value;
    document.body.style.backgroundColor = newColor;
    //Le asignamos a nuestro h2 el valor de la clave que hay almacenada en newColor al igual que hemos hecho en la primera función
    colorName.innerText = color_PALETTE[newColor];
    });
    };
    addOptionsToColorPicker();
    addEventListenerToColorPicker(); 