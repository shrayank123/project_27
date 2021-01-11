class Rope
{
constructor(body1,body2,offsetX,offsetY)
{
    this.offsetX=offsetX
    this.offsetY=offsetY
    var options = {
        
        bodyA : body1,
        bodyB : body2,
        pointB:{x:this.offsetX, y:this.offsetY}
       }
       
      this.rope = Constraint.create(options);
      
      World.add(world,this.rope);
}
 display()
 {
  

    var pointA = this.rope.bodyA.position;
   var pointB = this.rope.bodyB.position;
    
   strokeWeight(2);
   
  
   var grip1X = pointA.x;
   var grip1Y = pointA.y;
  
   var grip2X = pointB.x + this.offsetX;
   var grip2Y = pointB.y + this.offsetY;

   
   line(grip1X, grip1Y, grip2X, grip2Y);
 }
}



