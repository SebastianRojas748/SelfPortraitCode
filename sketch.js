
// selfportrait by Sebastian Rojas


// Global variables
var numColumns = 100;
var numRows =100;
var pictureWidth = windowWidth;
var pictureHeight = windowHeight;




function setup() {
  createCanvas(1000, 1000);
 }


function draw() {


  background(255,255,255);

  let xDist = width/(numColumns+0);
  let yDist = height/(numRows+0);

  for( let i = 0; i < numColumns; i++ ) {
  	for ( let j = 0; j <numRows; j++ ) { 
   drawPicture(xDist * (i+1), yDist * (j+1)); 
    }
  }
  ellipseMode(CENTER);
 noStroke();

 //blanket
 fill(255);
ellipse(width/2,height/2,350,500);
ellipse(width/2,height/2+200,500,200);
ellipse(width/2-165,height/2+100,100,200);


//blanket
fill(0);
triangle(width/2-40, height/2-10, width/2+40, height/2-10, width/2, height/2+60);

//head
fill(255);
strokeWeight(6);
stroke(6);
ellipse(width/2,height/2-100,180,200);

//eyebrow
arc(width/2+35, height/2-120, 40, 40, 11, 6);

//eyes
stroke(1);
strokeWeight(1);
arc(width/2+30, height/2-110, 35, 40, 190, 20);
arc(width/2-30, height/2-110, 35, 40, 190, 20);
circle(width/2-14,height/2-110, 10);
circle(width/2+46,height/2-110, 10);

//mouth
stroke(4);
strokeWeight(4);
arc(width/2, height/2-80, 70, 70, 1, 2);
noStroke();
fill(255,192,203);
ellipse(width/2+40,height/2-63,4,20);
ellipse(width/2+33,height/2-60,4,20);
ellipse(width/2+47,height/2-66,4,20);
ellipse(width/2-40,height/2-63,4,20);
ellipse(width/2-33,height/2-60,4,20);
ellipse(width/2-47,height/2-66,4,20);

//coffee
stroke(4);
strokeWeight(4);
fill(255);
rect(width/2-81,height/2+65,48,50);
ellipse(width/2-57,height/2+66,50,20);
fill(0);
ellipse(width/2-57,height/2+66,30,10);

//hand
fill(255);
rect(width/2-30,height/2+70,30,30);
arc(width/2-30, height/2+85, 30, 30, PI/2, 11);
line(width/2+40,height/2-10,width/2-140,height/2+285);
fill(255);
noStroke();
triangle(width/2, height/2+60, width/2-85, height/2+200, width/2+80, height/2+60);

//beanie
stroke(4);
strokeWeight(4);
ellipse(width/2,height/2-260,30,30);
ellipse(width/2,height/2-190,170,120);
ellipse(width/2,height/2-155,200,50);
ellipse(width/2,height/2-155,160,50);
ellipse(width/2,height/2-155,120,50);
ellipse(width/2,height/2-155,80,50);
ellipse(width/2,height/2-155,40,50);
}



function windowResized () {
	resizeCanvas(windowWidth, windowHeight);
}


function drawPicture (x,y) {
	fill (224, 139, 62);
	strokeWeight(2);
	stroke(0);
	circle (x,y,20);
}