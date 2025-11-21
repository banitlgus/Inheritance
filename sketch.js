let magic;
function setup() {
  createCanvas(windowWidth, 400);
  noStroke();
  magic = new makeMagic(createVector(width/2, 50));
}

function draw() {
  background(0);

  let force = createVector(0, 0.05);
  magic.addForce(force);

  magic.setPosition(createVector(mouseX,mouseY));
  magic.spellMagic();
  magic.run();

}
