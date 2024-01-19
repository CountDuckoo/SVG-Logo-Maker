//<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//
//<circle cx="150" cy="100" r=~"80" fill="{color}" />
//OR
//<rect x="80" y="30" width="140?" height="140" fill="{color}" /> 80*2+140=300, 30*2+140=200
//OR
//<polygon points="150, 18 244, 182 56, 182" fill="{color}" />
//THEN
//<text text-anchor="middle" dominant-baseline="middle" x="150" y="100" fill="{textColor}">{CHR}</text>
//</svg>

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