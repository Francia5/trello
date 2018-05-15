var createList = function() {
    var hideMenu = document.getElementsByClassName("box-button")[0];
    hideMenu.style.display = "none";
    var showMenu = document.getElementsByClassName("box-form")[0];
    showMenu.style.display = "block";
};

var addTheList = document.getElementById("button-add");
addTheList.addEventListener("click", createList);


