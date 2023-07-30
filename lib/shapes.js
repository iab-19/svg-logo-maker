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
    generateShape(fill) {
        return `<polygon opacity="1" fill="${fill}" points="20,200,150,0,280,200"/>`;
    }

    generateText(text, textFill) {
        return `<text x="150" y="180" text-anchor="middle" fill="${textFill}" font-size="65">${text}</text>`;
    }
}

class Circle extends Shape {
    constructor(fill, text, textFill, radius) {
        super(fill, text, textFill);
        this.radius = radius;
    }

    generateShape(fill) {
        return `<circle cx = "150" cy = "100" r = "99" fill = "${fill}" />`;
    }

    generateText(text, textFill) {
        return `<text x="150" y="125" text-anchor="middle" fill="${textFill}" font-size="70">${text}</text>`;
    }
}

class Square extends Shape {
    constructor(fill, text, textFill) {
        super(fill, text, textFill);
    }

    generateShape(fill) {
        return `<rect x="50" y="0" width="200" height="200" fill="${fill}" />`;
    }

    generateText(text, textFill) {
        return `<text x="150" y="120" text-anchor="middle" fill="${textFill}" font-size="65">${text}</text>`;
    }
}

class Pentagon extends Shape {
    constructor(fill, text, textFill){
        super(fill, text, textFill);
    }

    generateShape(fill) {
        return `<polygon opacity="1" fill="${fill}" points="150,0,260,80,230,200,70,200,40,80"/>`;
    }

    generateText(text, textFill) {
        return `<text x="150" y="130" text-anchor="middle" fill="${textFill}" font-size="70">${text}</text>`;
    }
}

module.exports = {Shape, Triangle, Circle, Square, Pentagon};
