
const { argv } = require('./config/yargs');

const { save, read:getValues } = require('./multiplicar/multiplicar');

switch(argv._[0]){
    case 'save':
        save(argv.base, argv.limite).then( res => console.log(res) ).catch( err => console.log(err));break;
    case 'read':
        getValues(argv.base, argv.limite);break;
    default:
        console.log('Unknow command');
}

