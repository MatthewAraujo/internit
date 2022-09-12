let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/piscina.png') {
      myImage.setAttribute ('src','images/sala.png');
    } 
    else if (mySrc === 'images/sala.png') {
      myImage.setAttribute ('src','images/sala2.png');
    } else{
        myImage.setAttribute ('src','images/piscina.png');
    }
}
var imgAtual = "images/quarto3.png";
var imgAnterior = "images/quarto2.png";
function q2(){
  document.getElementById("figura").src= imgAtual;
  let aux = imgAtual
    imgAtual = imgAnterior;
    imgAnterior = aux;
    if(imgAtual === "images/quarto2.png"){
      document.getElementById("figura").src= imgAtual;
    }
}
function q3(){
  document.getElementById("figura").src= imgAtual;
  let aux = imgAtual
    imgAtual = imgAnterior;
    imgAnterior = aux;
    if(imgAtual === "images/quarto3.png"){
      document.getElementById("figura").src= imgAtual;
    }
}


