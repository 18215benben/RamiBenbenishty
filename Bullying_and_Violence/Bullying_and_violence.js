document.getElementById("Menu_Button").onclick = function() {
    var menu = document.getElementById("menu");
    var content = document.getElementById("Menu_Button");
    if (menu.style.visibility === "visible") {
        menu.style.visibility = "hidden";
        content.innerHTML = "Menu";
        content.style.left = "10px";
    } else {
        menu.style.visibility = "visible";
        content.innerHTML = "❌";
        content.style.left = "12%";
    }
}