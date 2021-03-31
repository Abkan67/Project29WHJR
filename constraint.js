class spring {
    constructor(body1, point2) {
        this.bodyA = body1; this.pointB = point2;
        this.chain = Matter.Constraint.create({
            bodyA:body1,
            pointB: point2,
            stiffness: 1,
            length: 1
        })
        World.add(world, this.chain);
    }
    draw() {
        if(this.bodyA != null) {
            push();
            fill(255);
            line(this.bodyA.position.x, this.bodyA.position.y, this.pointB.x, this.pointB.y);
            pop();
        }
    }
    release() {
        this.chain.bodyA = null;
    }
}