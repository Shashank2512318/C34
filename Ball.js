class ball{
    constructor(x, y, r) {
    
        var ball_options= {
    
            restitution:0.5,
            friction:1
    
        }
    
        this.body= Bodies.circle(x, y, r, ball_options);
        World.add(myworld, this.body);
    
    
        this.w= r;
        this.h= r;
    
    }
    
    
    display() {
    
        push();
        ellipseMode(RADIUS);
        //translate(this.body.position.x, this.body.position.y)
        //rotate(this.body.angle);
        fill("blue");
        ellipse(this.body.position.x, this.body.position.y, this.w, this.h);
        pop();
    
    }
    
    }