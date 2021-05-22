// Mensaje de bienvenida
function Mostrar() {
    var miDiv = document.getElementById("bienvenido");
    alert(miDiv.style);
    if(miDiv.style.display === "none"){
        // Miuestro la etiqueta div
        miDiv.style.display = "block";
    }else{
        //Oculto la etiqueta div
        miDiv.style.display = "none"
    }
  }
  