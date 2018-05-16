var createList = function() {
    var hideMenu = document.getElementsByClassName("box-button")[0];
    hideMenu.style.display = "none";
    var showMenu = document.getElementsByClassName("box-form")[0];
    showMenu.style.display = "block";
};

var addTheList = document.getElementById("button-add");
addTheList.addEventListener("click", createList);


var safe = document.getElementById("guardar");
safe.addEventListener("click", function() {
    var userText = document.getElementById("input-list").value;
    document.getElementById("input-list").value = ""; // Se limpia el contenido del Input
    var newCard = document.getElementById("newContain");
    //Crear Nodo de texto
    var nodeText = document.createTextNode(userText);
    //Crear P para contener el nodo de texto
    var pText = document.createElement("p");
    // Se agrega el nodo de texto al p
    pText.appendChild(nodeText);
    newCard.appendChild(pText);
    // Se crea un boton para añadir la siguiente lista de tareas
    var buttonAdd = document.createElement("button");
    newCard.appendChild(buttonAdd);
    buttonAdd.type = "submit";
    // Texto del boton
    var buttonText = document.createTextNode("Añadir una tarjeta");
    buttonAdd.appendChild(buttonText);

    var hideForm = document.getElementById("hide");
    hideForm.style.display = "none";
    newCard.style.display = "block";
    


    
    buttonAdd.addEventListener("click", function() {
        var contentV2 = document.createElement("div");
        // Area para el Texto
        var contArea = document.createElement("textarea");
        // Boton para Añadir
        var addb = document.createElement("button");
        // Boton para cerrar
        var close = document.createElement("button");
        // Icono de tres puntos
        var dots = document.createElement("i");
        // Crear nodo texto para el Boton de Añadir
        var addText = document.createTextNode("Añadir");
        // Crear nodo texto para cerrar
        var closeText = document.createTextNode("X");
        // Se les asigna padre a las variables

        newCard.appendChild(contentV2);
        contentV2.appendChild(pText);
        contentV2.appendChild(contArea);
        contentV2.appendChild(addb);
        contentV2.appendChild(close);
        contentV2.appendChild(dots);
        addb.appendChild(addText);
        close.appendChild(closeText);
        contentV2.setAttribute("class","contentV2");
        
        buttonAdd.style.display = "none";


        
    });
    

});





