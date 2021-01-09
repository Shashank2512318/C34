class string{
    constructor(Body, point) {

        var options= {
 
            bodyA:Body,
            pointB:point,
            stiffness:1,
            length:100


        }
        this.rope= Constraint.create(options);
        World.add(myworld, this.rope);



    }



    display() {
        
        push();
        stroke("white");
        strokeWeight(4);
        line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, this.rope.pointB.x, this.rope.pointB.y)
        pop();



    }


}