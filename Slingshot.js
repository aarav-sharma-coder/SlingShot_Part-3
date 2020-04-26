class SlingShot {
    constructor(bodyA,pointB) {
      var options = {
         bodyA: bodyA,
         pointB: pointB,
         stiffness: 0.2,
         length: 15
      }
      this.pointB = pointB;
      this.image = loadImage("sling3.png");
      this.sling = Constraint.create(options);
      World.add(world, this.sling);
    }
    attach(body) {
      this.sling.bodyA = body;
    }
    fly() {
        this.sling.bodyA = null;
    }
    display(){
      if(this.sling.bodyA) {
        push();
      var pointA = this.sling.bodyA.position;
      var pointB = this.pointB;
      strokeWeight(4);
      stroke("green");
      line(pointA.x,pointA.y,pointB.x,pointB.y);
      line(pointA.x,pointA.y,pointB.x, pointB.y+40);
      pop();
      }
      
    }
  }