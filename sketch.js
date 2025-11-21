let magic;
let backgroundColor;
function setup() {
  createCanvas(windowWidth, 400);
  noStroke();
  magic = new makeMagic(createVector(width/2, 50));
}

function draw() {
  if (mouseIsPressed) {
    background(255,200,250);
    if (keyIsPressed) {
      background(0,255,0)
    }
  } else {
    background(255);
  }
  // background(0);

  let force = createVector(0, 0.05);
  magic.addForce(force);

  magic.setPosition(createVector(mouseX,mouseY));
  magic.spellMagic();
  magic.run();

}
