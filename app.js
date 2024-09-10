const { inquirerMenu } = require('./helpers/inquirer');

require('colors');
//const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async () => {
    let opt = '';

    do{
        opt = await inquirerMenu();
        console.log({opt});
    }while( opt != '0');
}

main();

