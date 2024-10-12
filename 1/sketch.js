let backgroundC = '#4d7ab0';
let moonX = 250;
let moonY = 300;
let moonR = 300;
let scale = 20;
let rgbB = 255;
let rgbA = 255;

function setup() {
  angleMode(DEGREES)
  createCanvas(windowWidth, windowHeight);
  color1 = [random(255),random(255),random(255)]
  color2 = [random(255),random(255),random(255)]
}

// Draw fish move with mouse 
function fish(x,y,scale,color1,color2,time){
  push()
  noStroke()
  translate(x,y)
  fill(color1)
  rotate(sin(time*5)*20)
  triangle(0,0,-scale, 0.7*scale, -scale, -0.7*scale)
  rotate(-sin(time*5)*20)

  quad(0, 0, 1.5*scale, 1.2*scale,3*scale,0, 1.5*scale, -1.2*scale)
  fill(color2)
  rotate(sin(time*5)*20)
  triangle(0,0,-time%scale,time%scale*0.7,-time%scale,-time%scale*0.7)
  rotate(-sin(time*5)*20)
  if((time%(3*scale))>1.5*scale){
    quad(0, 0, time%(3*scale),2*scale-(time%(3*scale))/1.5,3*scale,0, 1.5*scale, -1.2*scale)
  }
  else{
    quad(0, 0, time%(3*scale),(time%(3*scale))/1.5,3*scale,0, 1.5*scale, -1.2*scale)
  }
  fill(backgroundC)
  let fishEyeX = scale*2.2
  let fishEyeY = -scale*0.3
  ellipse(fishEyeX,fishEyeY,scale*0.3)
  pop()
}

// Create a function that represents water shaped like sine waves.
function waterWave(x,y,lenth,height){
  beginShape()
  for(let a =0; a<lenth*4; a++  ){
    vertex(x+a, y+height*sin(a))
  }
  endShape()

}



function draw() {
  let varialT = millis() / 100;

  
  background(backgroundC);  

  // Define some random parameters change when mouse hovers in 
  if (dist(mouseX, mouseY, moonX, moonY) <= moonR / 2) {
    moonX = random(100, width - 100);
    moonY = random(100, height - 100);
    moonR = max(moonR - 2, 10);
    color1 = [random(255),random(255),random(255)]
    color2 = [random(255),random(255),random(255)]
    scale++ 
    rgbB = max(rgbB-2,5)
    rgbA = max(rgbA-5,20)

  }
// Make the fish face the center of the moon.
  h = mouseY - moonY
  b = mouseX - moonX

  angle = atan2(h, b)+180
  noFill()

// Draw water waves with a color gradient
  for(let a = 0;a<height;a+=50){
    stroke(105-a/5, 255-a/2.5, 203+a/5,255-a/5)
    strokeWeight(2)
    waterWave((a+varialT*10)%(width)-width*1.5,a,width,10)

  }

  noStroke()
  
// Draw a moon that gradually becomes smaller and paler.
  fill(rgbB,rgbB,0,rgbA);
  ellipse(moonX, moonY, moonR);
  pop()
  translate(mouseX,mouseY)
  rotate(angle)
// Make the fish grow larger each time it reaches the moon. 
  fish(-2*scale,0,scale,color1,color2,varialT)
  pop()




}