var IMAGE_WIDTH = 1024;
var IMAGE_HEIGHT = 768;
var COLUMN_COUNT = 15;
var ROW_COUNT = 10;

var PIECE_WIDTH = Math.floor(IMAGE_WIDTH / COLUMN_COUNT);
var PIECE_HEIGHT = Math.floor(IMAGE_HEIGHT / ROW_COUNT);

var dragElement = null;
var cx, cy;

function load() {

    for (var row = 0; row < ROW_COUNT; row++) {
        for (var col = 0; col < COLUMN_COUNT; col++) {

            var x = col * PIECE_WIDTH;
            var y = row * PIECE_HEIGHT;

            var square = document.createElement("div");

            square.setAttribute("class", "square");
            square.setAttribute("id", "square_" + row + "_" + col);

            square.style.left = x.toString() + "px";
            square.style.top = y.toString() + "px";
            square.style.width = PIECE_WIDTH.toString() + "px";
            square.style.height = PIECE_HEIGHT.toString() + "px";
            square.style['background-position-x'] = (-x).toString() + "px";
            square.style['background-position-y'] = (-y).toString() + "px";

            document.body.appendChild(square);

            square.addEventListener('mousedown', function(evt) {
                dragElement = this;
                cx = evt.clientX - parseInt(this.style.left);
                cy = evt.clientY - parseInt(this.style.top);
            });
        }
    }

    document.body.addEventListener('mousemove', function(evt) {

        if (!dragElement)
            return;

        var x = evt.clientX - cx;
        var y = evt.clientY - cy;
        dragElement.style.left = x.toString() + 'px';
        dragElement.style.top = y.toString() + 'px';

    });

    document.body.addEventListener('mouseup', function () {

        dragElement = null;

    });

}





function shuffle() {

    for (var row = 0; row < ROW_COUNT; row++) {
        for (var col = 0; col < COLUMN_COUNT; col++) {

            var x = Math.min(window.innerWidth - PIECE_WIDTH,
                    Math.floor(Math.random() * window.innerWidth));
            var y = Math.min(window.innerHeight - PIECE_HEIGHT,
                    Math.floor(Math.random() * window.innerHeight));

            var square = document.getElementById('square_' + row + '_' + col);

            square.style.left = x.toString() + 'px';
            square.style.top = y.toString() + 'px';
        }
    }
}

document.addEventListener('DOMContentLoaded', load, false);
