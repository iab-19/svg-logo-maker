const fs = require('fs'); // Allow use of file system modules
const inquirer = require('inquirer'); // Allow use of inquirer
const shape = require('./lib/shapes'); // Import shapes.js file


// And array of questions for the user
const questions = ['1. Enter text for your logo(Max 3 characters)',
'2. What color do you want the text to be?(hex values supported)',
'3. What shape do you want your logo to be?',
'4. What color do you want your shape to be?(hex values supported)',
'1. Please enter 3 characters or less'
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
        // {
        //     type: 'input',
        //     message: questions[4],
        //     name: 'text',
        //     when: function(data.text.length > 3) {
        //         return text;
        //     };
        // },
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



function generateSVG(data) {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  ${generateShape(data.shape, data.shapeColor, data.text, data.textColor)}
</svg>

    `
}

// generates code depending on the shape chosen from the user
function generateShape(shape, shapeColor, text, textColor){
    let choice;
    switch (shape){
        // When circle is chosen, part of the svg file is generated that makes
        // a circle with
        case 'Circle':
            choice =`
    <circle cx = "150" cy = "100" r = "99" fill = "${shapeColor}" />
    <text x="150" y="125" text-anchor="middle" fill="${textColor}" font-size="70">${text}</text>`;
            break;
        case 'Triangle':
            choice =`
    <polygon id="triangle2" opacity="1" fill="${shapeColor}" points="20,200,150,0,280,200"/>
    <text x="150" y="180" text-anchor="middle" fill="${textColor}" font-size="65">${text}</text>`;
            break;
        case 'Square':
            choice =`
    <rect id="square" x="50" y="0" width="200" height="200" fill="${shapeColor}" />
    <text x="150" y="120" text-anchor="middle" fill="${textColor}" font-size="65">${text}</text>`;
            break;
        case 'Pentagon':
            choice =`
    <polygon opacity="1" fill="${shapeColor}" points="150,0,260,80,230,200,70,200,40,80"/>
    <text x="150" y="130" text-anchor="middle" fill="${textColor}" font-size="70">${text}</text>`;
            break;
        // case 'Hexagon':
        //     choice = ``;
        //     break;
        // case 'Heptagon':
        //     choice = ``;
        //     break;
        // case 'Octagon':
        //     choice = ``;
        //     break;
        default:
            choice = ``;
    }
    return choice;
}
