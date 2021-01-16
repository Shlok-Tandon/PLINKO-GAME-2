class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4,
            isStatic : false
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        //this.image1 = loadImage("PARTICLE PLINKO.gif");
        //this.image2 = loadImage("PARTICLE2 PLINKO.gif");
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        //image(random(this.image1,this.image2),pos.x,pos.y,this.r,this.r);
        pop();
    }

};