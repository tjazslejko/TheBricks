var ena=0;
document.addEventListener('keyup', event => {
  if (event.code === 'Enter'&&ena==0) {
    console.log('Enter pressed');
	ena=1;
	drawIt();
  }
})
var ogenj = new Image();
ogenj.src = "slike/ogenj.png";
var ogenj1 = new Image();
ogenj1.src = "slike/ogenj2.jpg";
var ogenj2 = new Image();
ogenj2.src = "slike/ogenj3.png";
function drawIt() { 
var x = 460;
var y = 800;
var dx = 2;
var dy = 4;
var WIDTH;
var HEIGHT;
var r=10;
var ctx;
var paddlex;
var paddleh;
var paddlew;
var rightDown = false;
var leftDown = false;
var canvasMinX;
var canvasMaxX;
var bricks;
var NROWS;
var NCOLS;
var BRICKWIDTH;
var BRICKHEIGHT;
var PADDING;
var tocke;


var stOgnja;
var tabOgnja=["a","b","c"];
var OgenjJe=false;
var OgenjJe2=false;

var stO;
var tabO=["a","b","c"];
var OJe=false;
var OJe2=false;

var sekunde;
var sekundeI;
var minuteI;
var intTimer;
var izpisTimer;

var start=true;
$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp);
function init() {
  ctx = $('#okvir')[0].getContext("2d");
  WIDTH = $("#okvir").width();
  HEIGHT = $("#okvir").height();
    tocke = 0;
$("#tocke").html(tocke);
	 sekunde = 0;
izpisTimer = "00:00";
  intTimer = setInterval(timer, 1000);

  return setInterval(draw, 10);

}

function zoga(x,y,r) {
  ctx.fillStyle="blue";
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
}

function rect(x,y,w,h) {
  ctx.fillStyle="blue";
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.closePath();
  ctx.fill();
}
function init_paddle() {
  paddlex = WIDTH / 2;
  paddleh = 10;
  paddlew = 75;
}
function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}
function onKeyDown(evt) {
  if (evt.keyCode == 68)
rightDown = true;
  else if (evt.keyCode == 65) leftDown = true;
}
function onKeyUp(evt) {
  if (evt.keyCode == 68)
rightDown = false;
  else if (evt.keyCode == 65) leftDown = false;
}
function init_mouse() {
canvasMinX = $("canvas").offset().left;
  canvasMaxX = canvasMinX + WIDTH;
  canvasMaxX= canvasMaxX-75;
}
function onMouseMove(evt) {
  if (evt.pageX > canvasMinX && evt.pageX < canvasMaxX) {
    paddlex = evt.pageX - canvasMinX;
  }
}
function initbricks() { 
  NROWS = 5;
  NCOLS = 5;
  BRICKWIDTH = (WIDTH/NCOLS) - 1;
  BRICKHEIGHT = 40;
  PADDING = 1;
  bricks = new Array(NROWS);
  for (i=0; i < NROWS; i++) {
    bricks[i] = new Array(NCOLS);
    for (j=0; j < NCOLS; j++) {
      bricks[i][j] = 1;
    }
  }
  
}
function timer(){
	if(start==true){
sekunde++;

sekundeI = ((sekundeI = (sekunde % 60)) > 9) ? sekundeI : "0"+sekundeI;
minuteI = ((minuteI = Math.floor(sekunde / 60)) > 9) ? minuteI : "0"+minuteI;
izpisTimer = minuteI + ":" + sekundeI;

$("#cas").html(izpisTimer);
}
else{
sekunde=0;
//izpisTimer = "00:00";
$("#cas").html(izpisTimer);
}
}


function nakljucno(){
  var i;
  stOgnja=Math.floor(Math.random() * 6) + 2;
  for(i=0;i<stOgnja;i++){
    tabOgnja[i]=Math.floor(Math.random() * 5) + 0;
  }
    stO=Math.floor(Math.random() * 8) + 2;
  for(i=0;i<stO;i++){
    tabO[i]=Math.floor(Math.random() * 5) + 0;
  }
}


$(document).mousemove(onMouseMove);
function draw() {
  clear();
  zoga(x, y, 10);
  if (rightDown){
	if((paddlex+paddlew) < WIDTH){
		paddlex += 5;
	}else{
		paddlex = WIDTH-paddlew;
	}  
	  
  }  
  else if (leftDown){
	  if(paddlex>0){
		  paddlex -= 5;
	  }else{
		  paddlex=0;
	  }
  } 
  
  
  rect(paddlex, HEIGHT-paddleh, paddlew, paddleh);
  
  for (i=0; i < NROWS; i++) {
    for (j=0; j < NCOLS; j++) {
		if (bricks[i][j] == 1 && i==0) {
          for(var p=0;p<stOgnja;p++){
            if(j==tabOgnja[p]){
              ctx.drawImage(ogenj2, (j * (BRICKWIDTH + PADDING)) + PADDING, (i * (BRICKHEIGHT + PADDING)) + PADDING, BRICKWIDTH, BRICKHEIGHT);
              OgenjJe=true;
            }
          }
          if(OgenjJe==false){
            ctx.drawImage(ogenj, (j * (BRICKWIDTH + PADDING)) + PADDING, (i * (BRICKHEIGHT + PADDING)) + PADDING, BRICKWIDTH, BRICKHEIGHT);
          }
          OgenjJe=false;
      }
	  if (bricks[i][j] == 1 && i==1) {
          for(var p=0;p<stO;p++){
            if(j==tabO[p]){
              ctx.drawImage(ogenj1, (j * (BRICKWIDTH + PADDING)) + PADDING, (i * (BRICKHEIGHT + PADDING)) + PADDING, BRICKWIDTH, BRICKHEIGHT);
              OJe=true;
            }
          }
          if(OJe==false){
            ctx.drawImage(ogenj, (j * (BRICKWIDTH + PADDING)) + PADDING, (i * (BRICKHEIGHT + PADDING)) + PADDING, BRICKWIDTH, BRICKHEIGHT);
          }
          OJe=false;
      }
	  
	  
      if (bricks[i][j] == 1 && i==2) {
        ctx.drawImage(ogenj, (j * (BRICKWIDTH + PADDING)) + PADDING, (i * (BRICKHEIGHT + PADDING)) + PADDING, BRICKWIDTH, BRICKHEIGHT);
      }
	    if (bricks[i][j] == 1 && i==3) {
        ctx.drawImage(ogenj, (j * (BRICKWIDTH + PADDING)) + PADDING, (i * (BRICKHEIGHT + PADDING)) + PADDING, BRICKWIDTH, BRICKHEIGHT);
      }
	    if (bricks[i][j] == 1 && i==4) {
        ctx.drawImage(ogenj, (j * (BRICKWIDTH + PADDING)) + PADDING, (i * (BRICKHEIGHT + PADDING)) + PADDING, BRICKWIDTH, BRICKHEIGHT);
      }
    }
  }
		
    rowheight = BRICKHEIGHT + PADDING ; 
  colwidth = BRICKWIDTH + PADDING ;
  row = Math.floor(y/rowheight);
  col = Math.floor(x/colwidth);
  
if (y < NROWS * rowheight && row >= 0 && col >= 0 && bricks[row][col] == 1) {
dy = -dy; 
bricks[row][col] = 0;
if(row==0){
  for(var t=0;t<stOgnja;t++){
    if(col==tabOgnja[t]){
      tocke += 3;
      OgenjJe2=true;
    }
  }
  if(OgenjJe2==false)
  tocke += 1;
}
if(row==1){
  for(var t=0;t<stO;t++){
    if(col==tabO[t]){
      tocke += 2;
      OJe2=true;
    }
  }
  if(OJe2==false)
  tocke +=1;
}
if(row>=2){
  tocke += 1;
}
OgenjJe2=false;
OJe2=false;
$("#tocke").html(tocke);
}
 
  
  
  if (x + dx > WIDTH-r || x + dx < 0+r)
    dx = -dx;
  if (y + dy < 0+r)
    dy = -dy;
  else if (y + dy > HEIGHT -r) {
    if (x > paddlex && x < paddlex + paddlew){
	  start=false;
	  dx = 8 * ((x-(paddlex+paddlew/2))/paddlew);
      dy = -dy;
	  start=true;
	}
  else if (y + dy > HEIGHT -r)
      //clearInterval(intervalId);
		//swal('Konec igre').then(location.reload());
		location.reload();	
		
		
  }
  x += dx;
  y += dy;
}
init();
init_paddle();
init_mouse();
initbricks();
timer();
nakljucno();
}