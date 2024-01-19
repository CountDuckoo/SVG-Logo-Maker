const {Shape, Triangle, Square, Circle} = require('./shapes');

describe('Shapes', () =>{
    describe('Shape', () =>{
        it('should return an error when render is called on shape directly', ()=>{
            const shape = new Shape();
            const shapeError = () => shape.render();
            const err = new Error('Child class must implement render() method.');
            expect(shapeError).toThrow(err);
        });
    });
    describe('Triangle', () =>{
        it('should return the proper svg string when a blue triangle is created', ()=>{
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
    describe('Square', () =>{
        it('should return the proper svg string when a green square is created', ()=>{
            const shape = new Square();
            shape.setColor("green");
            expect(shape.render()).toEqual('<rect x="80" y="30" width="140" height="140" fill="green" />');
        });
    });
    describe('Circle', () =>{
        it('should return the proper svg string when a #ffff0f circle is created', ()=>{
            const shape = new Circle();
            shape.setColor("#ffff0f");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="#ffff0f" />');
        });
    });
});