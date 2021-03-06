class Dustbin111 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dustbinWidth = 200;
        this.dustbinHeight = 100;

        this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, { isStatic: true });
        this.leftWallBody = Bodies.rectangle(this.x - this.dustbinWidth / 2, this.y - this.dustbinWidth / 2, this.wallThickness, this.dustbinHeight, { isStatic: true });

        Matter.Body.setAngle(this.leftWallBody, this.angle);

        this.rightWallBody = Bodies.rectangle(this.x + this.dustbinWidth / 2, this.y - this.dustbinWidth / 2, this.wallThickness, this.dustbinHeight, { isStatic: true });
        Matter.Body.setAngle(this.rightWallBody, -1 * this.angle);

        World.add(world, this.bottomBody);
        World.add(world, this.leftWallBody);
        World.add(world, this.rightWallBody);
    }
    display() {
        //var angle = this.body.angle;


        /*push();
        translate(positionLeft.x, positionLeft.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255)
        stroke(255)
        rotate(this.angle);
        rect(0, 0, this.wallThickness, this.dustbinHeight);
        pop();

        push();
        translate(positionRight.x, positionRight.y);
        rectMode(CENTER)
        stroke(255)
        angleMode(RADIANS)
        fill(255)
        rotate(-1*this.angle);
        rect(0, 0, this.wallThickness, this.dustbinHeight);
        pop();

        push();
        translate(positionBottom.x, positionBottom.y);
        rectMode(CENTER)
        stroke(255)
        angleMode(RADIANS)
        fill(255)
        rect(0, 0, this.dustbinHeight, this.wallThickness);
        pop();*/
    }
}