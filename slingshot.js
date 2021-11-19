class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1= loadImage("sprites/sling1.png")
        this.sling2= loadImage("sprites/sling2.png")
        this.sling3= loadImage("sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 175,70,30,150);
        image(this.sling2, 155,70,30,90);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(7);
            stroke(48,22,8)
            line(pointA.x-15, pointA.y, pointB.x-15, pointB.y+5);
            line(pointA.x+15, pointA.y, pointB.x+15, pointB.y+5);
            image(this.sling3, pointA.x-20, pointA.y-5, 10, 15);
        }
    }
    
}