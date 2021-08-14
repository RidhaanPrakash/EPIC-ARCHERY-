class ComputerBase {
    Constructor(xInput, yInput, widthInput, heightInput){
    var options = {
        isStatic : true 
    };
    this.body = Bodies.rectangle(xInput,yInput, widthInput, heightInput);
    this.width = widthInput;
    this.height = heightInput;
    this.x = xInput;
    this.y = yInput;

    this.image = loadImage("./assets/base2.png")
    
    World.add(userWorld, this.body)
};

    display() { 
        var pos  = this.body.poistion
        
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER)
        image(this.image, 0,0, this.width, this.height)

        pop();



    }
}

