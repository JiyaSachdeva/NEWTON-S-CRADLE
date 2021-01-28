class Chain {

    constructor (bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length : 10
        }
       this.pointB = pointB;
        this.rubber = Constraint.create(options);

World.add(world,this.rubber);

    }

display(){
var pointA = this.rubber.bodyA.position;
var pointB = this.pointB;;

push();
strokeWeight(5);
line (pointA.x,pointA.y,pointB.x,pointB.y);
pop();

}

}