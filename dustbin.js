class Dustbin{
    constructor(x,y,w,h){

        var options={
        isStatic:true,
        }

        this.body = Bodies.rectangle(x, y, w, h , options );
        this.w=w;
        this.h=h;
        this.image=loadImage("dustbingreen.png")
        World.add(world,this.body)
    }
    display(){
        fill("brown")
        var pos=this.body.position;
        push()
        translate(pos.x, pos.y+10);
        imageMode(CENTER);
        image(this.image, 0,0,this.w, this.h)
        pop()
    }
}