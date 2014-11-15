window.onload = function() {
    for (var i = 0; i < 3; i++) {
        var square = document.createElement("div");
        square.setAttribute("class", "square");
        document.body.appendChild(square);
    }
}
