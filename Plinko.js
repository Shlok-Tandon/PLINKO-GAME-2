class Plinko {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.r = 7;
        this.body = Bodies.circle(x, y, this.r, options);
        //this.image = loadImage("PLINKO IMAGE.png");
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(225,0,100);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
       // image(this.image,pos.x,pos.y,this.r,this.r)
        pop();
    }

};