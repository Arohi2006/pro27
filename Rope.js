class Rope{
    constructor(ground,bob,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var option = {
            bodyA:ground,
            bodyB:bob,
            pointB:{x:offsetX, y:offsetY},
            length:10,
            stiffness:0.04
        }
        this.body = Constraint.create(option);
        World.add(world,this.body);
    }

display(){

    var pointA = this.body.bodyA.position;
    var pointB = this.body.bodyB.position;
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
}

}