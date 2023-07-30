class Shape {
    constructor(shape, fill, text, textFill) {
        this.shape = shape;
        this.fill = fill;
        this.text = text;
        this.textFill = textFill;
    }

    generateShape(shape, fill) {
        return ``;
    }

    generateText(text, textFill) {
        return ``;
    }
}


class Triangle extends Shape {
    constructor(fill, text, textFill) {
        super(fill, text, textFill);
    }

    // Generates a triangle with the specified color
    generateShape(fill) {
        return `<polygon opacity="1" fill="${fill}" points="20,200,150,0,280,200"/>`;
    }

    // Generates text with the specified color and puts it in the middle of the triangle
    generateText(text, textFill) {
        return `<text x="150" y="180" text-anchor="middle" fill="${textFill}" font-size="65">${text}</text>`;
    }
}

class Circle extends Shape {
    constructor(fill, text, textFill, radius) {
        super(fill, text, textFill);
        this.radius = radius;
    }

    // Generates a circle with the specified color
    generateShape(fill) {
        return `<circle cx = "150" cy = "100" r = "99" fill = "${fill}" />`;
    }

    // Generates text with the specified color and puts it in the middle of the circle
    generateText(text, textFill) {
        return `<text x="150" y="125" text-anchor="middle" fill="${textFill}" font-size="70">${text}</text>`;
    }
}

class Square extends Shape {
    constructor(fill, text, textFill) {
        super(fill, text, textFill);
    }

    // Generates a square with the specified color
    generateShape(fill) {
        return `<rect x="50" y="0" width="200" height="200" fill="${fill}" />`;
    }

    // Generates text with the specified color and puts it in the middle of the square
    generateText(text, textFill) {
        return `<text x="150" y="120" text-anchor="middle" fill="${textFill}" font-size="65">${text}</text>`;
    }
}


class Pentagon extends Shape {
    constructor(fill, text, textFill){
        super(fill, text, textFill);
    }
    // Generates a pentagon with the specified color
    generateShape(fill) {
        return `<polygon opacity="1" fill="${fill}" points="150,0,260,80,230,200,70,200,40,80"/>`;
    }

    // Generates text with the specified color and puts it in the middle of the pentagon
    generateText(text, textFill) {
        return `<text x="150" y="130" text-anchor="middle" fill="${textFill}" font-size="70">${text}</text>`;
    }
}


class Hexagon extends Shape {
    constructor(fill, text, textFill) {
        super(fill, text, textFill);
    }

    // Generates a hexagon with the specified color
    generateShape(fill) {
        return `<polygon opacity="1" fill="${fill}" points="75,10, 225,10, 280,100, 225,190, 75,190, 20, 100" />`;
    }

    // Generates text with the specified color and puts it in the middle of the hexagon
    generateText(text, textFill) {
        return `<text x="150" y="130" text-anchor="middle" fill="${textFill}" font-size="85">${text}</text>`;
    }
}

module.exports = {Shape, Triangle, Circle, Square, Pentagon, Hexagon};
