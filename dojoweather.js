var dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado','Domingo'];
const d = new Date();
let day = d.getDay();
 var cardtitle = document.getElementsByClassName("weathercardtitle");
 var iterador = 0;
 var limitedias = 0;
 var mensajepopup;
 var tempo;

window.onload = function(){
    tempo = document.getElementsByClassName("temp_range");
    mensajepopup = document.getElementById("mensajepop");
    limitedias  = 6;
    iterador = 0;
    for (var i = day-1; i <= limitedias; i++){
      if (iterador == 0){
        cardtitle[iterador].innerText = "today";
      }
      else if (iterador == 1)
      {
        cardtitle[iterador].innerText = "tomorrow"; 
      }
      else{
        cardtitle[iterador].innerText = dias[i]; 
      }
      if (i == 6){i-=7; limitedias-(day+1)}
      iterador++;
    }

}

function mensajeciudad(elemento){
  alert("Loading weather report for " + elemento.innerText);
}

function cerrarpopmessage(){
  if (confirm("Desea cerrar esta alerta?"))
    {mensajepopup.style.display = "none";}
}

function cambiarlista(tipo){
  var cant1, cant2 = 0;
  var temps_max_cels = [21,24,22,24,20,21,24];
  var temps_min_cels = [17,20,19,19,14,18,18];


    var i = 0;
      if (tipo.options[tipo.selectedIndex].value == "celsius"){
        for(i=0;i<=6;i++){
          cant1 = parseInt(temps_min_cels[i]);
          cant2 = parseInt(temps_max_cels[i]);
          tempo[i].getElementsByTagName("p")[0].innerText = cant2.toString() + " C";
          tempo[i].getElementsByTagName("p")[1].innerText = cant1.toString() + " C";
          }
      }

      if (tipo.options[tipo.selectedIndex].value == "fahrenheit"){
        for(i=0;i<=6;i++){
          cant1 = parseFloat(celsius2farenheit(temps_min_cels[i])).toFixed(1);
          cant2 = parseFloat(celsius2farenheit(temps_max_cels[i])).toFixed(1);
          tempo[i].getElementsByTagName("p")[0].innerText = cant2.toString() + " F";
          tempo[i].getElementsByTagName("p")[1].innerText = cant1.toString() + " F";
        }
     }
}


function celsius2farenheit(temp){
  return (temp * 1.8) + 32;
}

function farenheit2celsius(temp){
  return (temp - 32) * 0.5556;
}

