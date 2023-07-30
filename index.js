const fs = require('fs'); // Allow use of file system modules
const inquirer = require('inquirer'); // Allow use of inquirer
const {Shape, Triangle, Circle, Square, Pentagon} = require('./lib/shapes'); // Import shapes.js file


// And array of questions for the user
const questions = ['1. Enter text for your logo(Max 3 characters)',
'2. What color do you want the text to be?(hex values supported)',
'3. What shape do you want your logo to be?',
'4. What color do you want your shape to be?(hex values supported)',
'1. Please enter 3 characters or less'
];

const shapeChoiches = ['Circle', 'Triangle', 'Square', 'Pentagon'];

const moreShapes = ['Hexagon', 'Heptagon', 'Octagon'];

inquirer
    .prompt([
        // Promt the user for a question from the 'questions' array and saves the answer
        // in the corresponding variable
        {
            type: 'input',
            message: questions[0],
            name: 'text',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'textColor',
        },
        {
            type: 'list',
            message: questions[2],
            name: 'shape',
            // Gives the user choices from the 'shapeChoices' array
            choices: [shapeChoiches[0], shapeChoiches[1],shapeChoiches[2],shapeChoiches[3],]
        },
        {
            type: 'input',
            message: questions[3],
            name: 'shapeColor',
        },
    ])
    // generates an svg file in the folder 'examples' with the filename of 'logo.svg' with the data
    // taken from the user input
    .then((data) => {
        let svg = generateSVG(data);
        fs.writeFile('./examples/logo.svg', svg, (err) =>
        err?
        console.log(err): console.log(`Generated logo.svg. Your options are ${data.shape}, ${data.shapeColor}, ${data.text}, ${data.textColor}`)
        )
    })


// A function that generates the svg file data
function generateSVG(data) {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
${generateFile(data.shape, data.shapeColor, data.text, data.textColor)}
</svg>

    `
}

// Depending on the shape chosen, this function will generate a shape
// with the specified color, text, and text color
function generateFile(shape, fill, text, textFill) {
    let choice;
    switch(shape){
        case 'Circle':
            const circleInstance = new Circle();
            choice =
    `${circleInstance.generateShape(fill)}
     ${circleInstance.generateText(text, textFill)}`;
            break;
        case 'Triangle':
            const triangleInstance = new Triangle();
            choice =
    `${triangleInstance.generateShape(fill)}
     ${triangleInstance.generateText(text, textFill)}`;
            break;
        case 'Square':
            const squareInstance = new Square();
            choice =
    `${squareInstance.generateShape(fill)}
     ${squareInstance.generateText(text, textFill)}`;
            break;
        case 'Pentagon':
            const pentagonInstance = new Pentagon();
            choice =
    `${pentagonInstance.generateShape(fill)}
     ${pentagonInstance.generateText(text, textFill)}`;
            break;
    }
    return choice;
}
