Connichiwa.onLoad(function() {


// Canvas an Displaygröße anpassen
var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
canvas.setAttribute("width",screen.width - 25);
canvas.setAttribute("height",screen.height);
var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;
canvas.addEventListener("touchstart", onTouchStart);

function onTouchStart(e) {
    var mouseX = e.changedTouches[0].pageX - this.offsetLeft;
    var mouseY = e.changedTouches[0].pageY - this.offsetTop;
    paint = true;
    addClick(e.changedTouches[0].pageX - this.offsetLeft, e.changedTouches[0].pageY -this.offsetTop);
    redraw();
  }
canvas.addEventListener("touchmove", onTouchMove);
function onTouchMove(e) {

    if(paint){
      addClick(e.changedTouches[0].pageX - this.offsetLeft, e.changedTouches[0].pageY - this.offsetTop, true);
      redraw();

    }
  }
/*
  $("#canvas").touchup(function(e){
    paint = false;
  });

  $("#canvas").touchleave(function(e){
    paint = false;
  });
*/


  function addClick (x,y, dragging) {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
  }

  function redraw(){
  context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

  context.strokeStyle = "#df4b26";
  context.lineJoin = "round";
  context.lineWidth = 5;

  for(var i=0; i < clickX.length; i++) {
    context.beginPath();
    if(clickDrag[i] && i){
      context.moveTo(clickX[i-1], clickY[i-1]);
     }else{
       context.moveTo(clickX[i]-1, clickY[i]);
     }
     context.lineTo(clickX[i], clickY[i]);
     context.closePath();
     context.stroke();
  }
}

});
