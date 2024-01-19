const inquirer = require('inquirer');

const colorListObject = require('./lib/css_colors');

const colorList = Object.getOwnPropertyNames(colorListObject).map(color => color.toLowerCase());

const svgBuilder = require('./lib/svg_builder');

const fs = require('fs');

async function textPrompt(){
    const response = await inquirer.prompt({
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters to put as the text on the logo.',
    });
    const text = response.text.trim().toUpperCase();
    if(text.length>3){
        console.error("Input is too long, try again.");
        //calls the function again to do the prompt over, and returns whatever the nested function returns so it gets passed all the way up
        return textPrompt();
    }
    //returns the text to be used in the logo
    return text;
};

async function colorPrompt(){
    const response = await inquirer.prompt({
        type: 'input',
        name: 'color',
        message: 'What color should this element be? (Enter the name of a color, or the hexidecimal color code, consisting of \'#\' followed by 6 hexidecimal digits, 0-f)',
    });
    const color = response.color.trim().toLowerCase();
    //retry if it is an empty string
    if(color.length=0){
        console.error("Please enter a color.");
        return colorPrompt();
    }
    //check if it starts with #
    if(color[0]=='#'){
        //check if it is the proper length
        if(color.length!=7){
            console.error("When using Hexidecimal, make sure there are exactly 6 characters after the #.");
            return colorPrompt();
        }
        //check if the following 6 characters are digits or letters from a-f
        const regExpMatch = /[^0-9a-f]/;
        // match returns null if there are no matches, so in this case if there are no characters besides those 0-9 or a-f
        // the slice is to exclude the starting '#'
        if(color.slice(1).match(regExpMatch)==null){
            return color;
        }
        // there is at least one character that isn't valid
        console.error("When using Hexidecimal, make sure to only use digits, or letters from 'a' to 'f'");
        return colorPrompt();
    }

    //check against the list of color names used by HTML
    if(colorList.includes(color)){
        return color;
    } else {
        console.error("Not a recognized color name in HTML.");
        return colorPrompt();
    }
};

async function shapePrompt(){
    const response = await inquirer.prompt({
        type: 'list',
        name: 'shape',
        message: 'Select what shape the logo should be.',
        choices: ['Square', 'Circle', 'Triangle'],
    });
    return response.shape;
};


async function init(){
    const text = await textPrompt();
    const textColor = await colorPrompt();
    const shape = await shapePrompt();
    const shapeColor = await colorPrompt();
    console.log(`Logo text is ${text}.
Text Color is ${textColor}.
Logo Shape is ${shape}.
Logo Color is ${shapeColor}.`);
    const svgText = svgBuilder.buildSVG(text, textColor, shape, shapeColor);
    const fileLocation = 'logo.svg'
    fs.writeFile(fileLocation, svgText, (err) => err ? console.error(err) : console.log('Generated logo.svg'));
}

init();