const { Shape, Triangle, Circle, Square, Pentagon } = require('./shapes');

describe('Triangle', () => {
    describe('generateShape', () => {
        it('should take the color of the triangle and create svg code that generates a triangle of that color', () => {
            const shape = new Triangle();
            shape.generateShape('blue');
            expect(shape.generateShape('blue')).toEqual('<polygon opacity="1" fill="blue" points="20,200,150,0,280,200"/>');

        });
    });
});


describe('Square', () => {
    describe('generateText', () => {
        it('should produce text of specified color and place it within the shape', () => {
            const shape = new Square();
            shape.generateText('DBZ', 'black');
            expect(shape.generateText('DBZ', 'black')).toEqual('<text x="150" y="120" text-anchor="middle" fill="black" font-size="65">DBZ</text>');

        });
    });
});
