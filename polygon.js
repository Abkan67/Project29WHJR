class Polygon {
    constructor(sides, xn,yn) {
      this.tomove ={x:xn, y: yn}
      this.body=Bodies.polygon(xn,yn,sides,50,{restitution:5, density:2, friction:0.2});
      World.add(world, this.body);
    }
    display() {
        if (this.tomove.x!=null||this.tomove.y!=null) {
            Matter.Body.setPosition(this.body, this.tomove)
        }
        push();
        imageMode(CENTER);
        translate(this.body.position.x, this.body.position.y);
        rotate(degrees(this.body.angle));
        image(polygon_img, 0,0,50,50)
        pop();
    }

}