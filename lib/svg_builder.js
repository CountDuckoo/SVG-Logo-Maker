const {Shape, Triangle, Square, Circle} = require('./shapes');



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
const renderShape = (shape, color) => {
    switch(shape){
        case 'Triangle': 
            return new Triangle(color).render();
        case 'Square': 
            return new Square(color).render();
        case 'Circle': 
            return new Circle(color).render();
        default:
            console.error('Not a valid shape');
            return '';
    }
}

const renderText = (text, color, shape) => {
    const yOffset = (shape =='Triangle' ? '140' : '100');
    return `<text text-anchor="middle" dominant-baseline="middle" x="150" y="${yOffset}" font-weight="bolder" font-size="40px" fill="${color}">${text}</text>`
}

const buildSVG = (text, textColor, shape, shapeColor) => {
    const svgText = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${renderShape(shape, shapeColor)}

    ${renderText(text, textColor, shape)}
</svg>`
    return svgText;
}



module.exports = {buildSVG};