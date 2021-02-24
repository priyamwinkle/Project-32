class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.08,
            length:1
        }
        this.bodyA=bodyA;
        this.pointB=pointB
        this.sling=Constraint.create(options);
        World.add(myWorld,this.sling);
    }
    attach(body){
        this.sling.bodyA=body;
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA=this.bodyA.position;
            var pointB=this.pointB;
            strokeWeight(2);
            line(pointA.x,pointA.y,pointB.x,pointB.y)

        }


    }
}