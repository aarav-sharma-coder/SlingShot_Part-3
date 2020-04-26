class Rock {
    constructor(x,y,r) {
      var options ={
        'restitution':0.8,
        'friction':1.0,
        'density':random(1,4)
      }
      
   this.body = Bodies.circle(x,y,r,options);
        this.r = r; 
        World.add(world, this.body);
      }
      display(){
       
        var pos =this.body.position;
        ellipseMode(RADIUS);
        fill("yellow");
      ellipse(pos.x, pos.y, this.r);
      }
    };