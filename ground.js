class Ground{
    constructor(x,y){

        var options={
        isStatic:true,
        }
        this.body = Bodies.rectangle(x, y, 1200, 10 , options );
        this.x=x;
        this.y=y;
        World.add(world,this.body)
    }
    display(){
        fill("yellow")
        rectMode(CENTER)
        
        rect(this.body.position.x,this.body.position.y,1200,10);
    }
}