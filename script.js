var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var button = document.getElementById('button');

onloadColor();
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

function getColor(element){
  return element.getAttribute('value');
}

function onloadColor(){
  window.addEventListener('load', (e) => {
    console.log('page is fully loaded');
    var pageLoadColor1 = getColor(color1);
    var pageLoadColor2 = getColor(color2);
    css.textContent = "linear-gradient(to right, " + pageLoadColor1 + ", " + pageLoadColor2 + ")";
  });
}

function setGradient(){
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

button.addEventListener('click', () => {
  body.style.background = "linear-gradient(to right, " + "#" + randomColor() + ", " + "#" + randomColor() + ")";
  css.textContent = body.style.background;
})

function randomColor(){
  return Math.floor(Math.random() * 16777216).toString(16);
}


