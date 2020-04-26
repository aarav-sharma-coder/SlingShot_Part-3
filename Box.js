var score = 0;

class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':10,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("Box");
      this.width = width;
      this.height = height;
      this.Visibility = 255;
      World.add(world, this.body);
    }
    display(){

      if(this.body.speed<3){
      var pos =this.body.position;
      var angle=this.body.angle;
     
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
      }
      else{
      push();
      this.Visibility = this.Visibility - 5;
      tint(255,this.Visibility);
  
      image(this.image,this.body.position.x,this.body.position.y,50,50);
       pop();
       World.remove(world,this.body);
  
      }
      if(this.Visibility === 0){
        score = score +25;
      }  
      fill("white");
      text("SCORE:"+score,150,20);
    }
  }



