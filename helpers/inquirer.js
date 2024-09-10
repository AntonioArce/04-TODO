const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: ['opt1','opt2','opt3']
    }
]

const inquirerMenu = async() => {
    //console.clear();
    console.log('================================================================='.green);
    console.log('              Seleccione una opcion'.green);
    console.log('=================================================================\n'.green);
    

    const opt = await prompt(preguntas);
    return opt;


}

module.exports = {
    inquirerMenu
}