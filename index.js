const fs = require('fs'); // Allow use of file system modules
const inquirer = require('inquirer'); // Allow use of inquirer
const shape = require('./lib/shapes'); // Import shapes.js file


// And array of questions for the user
const questions = ['1. Enter text for your logo(Max 3 characters)',
'2. What color do you want the text to be?(hex values supported',
'3. What shape do you want your logo to be?',
'4. What color do you want your shape to be?(hex values supported)',
];

const shapeChoiches = ['Circle', 'Triangle', 'Square', 'Hexagon', 'Pentagon',
'Heptagon', 'Octagon'];

inquirer
    .prompt([
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
            choices: [shapeChoiches[0], shapeChoiches[1],shapeChoiches[2],shapeChoiches[3],
            shapeChoiches[4], shapeChoiches[5], shapeChoiches[6]]
        },
        {
            type: 'input',
            message: questions[3],
            name: 'shapeColor',
        },
    ])
    .then((data) => {
        let svg = generateSVG(data);
        fs.writeFile('./examples/logo.svg', svg, (err) =>
        err?
        console.log(err): console.log(`Generated logo.svg. Your options are ${data.shape}, ${data.shapeColor}, ${data.text}, ${data.textColor}`)
        )
    })



function generateSVG() {
    return `
    yo
    `
}
