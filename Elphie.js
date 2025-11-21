class Green extends Magic {
    constructor(position) {
        super(position);
    }

    show() {
        let angle = map(this.position.x,0,width,0,TWO_PI*2);

        rectMode(CENTER);
        fill(random(0,100), random(100,255), random(0,100), this.lifespan);

        push()
        translate(this.position.x, this.position.y);
        rotate(angle);
        square(0,0,12);
        pop();
        
    }

    static addNoise() {
        let noiseScale = 0.009;

        for (let y = 0; y < height; y +=5) {
            for (let x = 0; x < width; x +=5) {
                let c = 25*noise(x*noiseScale, y*noiseScale, frameCount*noiseScale);
                fill(c*12, 7);
                rect(x, y, 10);

            }
        }
    }
}