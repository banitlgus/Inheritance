let system;
function setup() {
  createCanvas(720, 400);
  system = new ParticleSystem(createVector(width/2, 50));
}

function draw() {
  background(220);

  let force = createVector(0, 0.05);
  system.addForce(force);

  system.setPosition(createVector(mouseX,mouseY));
  system.addParticle();
  system.run();
}
