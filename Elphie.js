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
        let noiseLevel = 255;
        let noiseScale = 0.01;

        for (let y = 0; y < height; y +=2) {
            for (let x = 0; x < width; x +=2) {
                let nx = noiseScale * x;
                let ny = noiseScale * y;

                let c = noiseLevel * noise(nx,ny);

                push()
                stroke(c);
                point(x, y);
                pop();
            }
        }
    }
}