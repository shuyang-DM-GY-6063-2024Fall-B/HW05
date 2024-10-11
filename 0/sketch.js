let backgroundC = 'white';
let moonX = 250;
let moonY = 300;
let moonR = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(backgroundC);

  if (dist(mouseX, mouseY, moonX, moonY) <= moonR / 2) {
    moonX = random(100, width - 100);
    moonY = random(100, height - 100);
    moonR = max(moonR - 2, 10);
  }


  fill('yellow');
  ellipse(moonX, moonY, moonR);
}



 

