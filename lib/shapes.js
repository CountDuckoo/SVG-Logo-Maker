

class Shape {
    constructor(color="black"){
        this.color=color;
    }
}
Shape.prototype.render = function(){
    throw new Error('Child class must implement render() method.');
}
Shape.prototype.setColor = function(color){
    this.color=color;
}

class Triangle extends Shape{
    constructor(color="black"){
        super(color);
    }
}
Triangle.prototype.render = function(){
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
}

class Circle extends Shape{
    constructor(color="black"){
        super(color);
    }
}
Circle.prototype.render = function(){
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
}

class Square extends Shape{
    constructor(color="black"){
        super(color);
    }
}
Square.prototype.render = function(){
    return `<rect x="80" y="30" width="140" height="140" fill="${this.color}" />`;
}

module.exports={Shape, Triangle, Square, Circle};
