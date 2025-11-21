let system;
function setup() {
  createCanvas(720, 400,WEBGL);
  noStroke();
  system = new ParticleSystem(createVector(width/2, 50));
}

function draw() {
  background(0);

  let force = createVector(0, 0.05);
  system.addForce(force);

  system.setPosition(createVector(mouseX,mouseY));
  system.addParticle();
  system.run();

}
