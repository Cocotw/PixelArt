var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var pale = document.getElementById('paleta');

var gri = document.getElementById('grilla-pixeles');

var pin = document.getElementById('indicador-de-color');






// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    pin.style = 'background-color :' + colorActual
  })
);

//color pincel
function addColor(color) {
  return function () {
    console.log(color)
    pin.style = 'background-color :' + color
  }
}

//color de paletas
function reColores(){
  for(var i = 0; i<nombreColores.length; i++){
    var div1 = document.createElement('div');
    div1.className = 'color-paleta';
    div1.style = 'background-color : '+nombreColores[i];
    div1.addEventListener('click', addColor(nombreColores[i]))
    pale.appendChild(div1);
    
  }
}
reColores();

//pintar grillas
function handleClickCreator(div){
  return function() {
    div.style.backgroundColor = pin.style.backgroundColor
    
  }
}

//grillas
function reGrilla(){
  for (var i = 0; i < 1749; i++){
    var div2 = document.createElement('div');
    gri.appendChild(div2);
    div2.addEventListener('click', handleClickCreator(div2));
  }
}
reGrilla();


//funcion de pintar
var seEstaPintando  = pin.style.backgroundColor;

$("#grilla-pixeles div").mousedown(function(){
  console.log('click div');
  seEstaPintando = true;
});

$("#grilla-pixeles div").mouseover(function(){
  console.log('entro al div');
  if(seEstaPintando){
    this.style.backgroundColor = pin.style.backgroundColor
  }
  
});

$("#grilla-pixeles div").mouseup(function(){
  console.log('dejo de clickear');
  seEstaPintando = false;
});




//boton guardar img
 $("#guardar").click(guardarPixelArt);


 //boton borrar todo
 $("#borrar").click (function () {
  var $pixelBorrado = $("#grilla-pixeles div").animate({"background-color": "#ffffff"},1000);
});

//superheroes
$("#batman").click (function () {
  cargarSuperheroe(batman);
});

$("#wonder").click (function () {
  cargarSuperheroe(wonder);
});

$("#flash").click (function () {
  cargarSuperheroe(flash);
});

$("#invisible").click (function () {
  cargarSuperheroe(invisible);
});









