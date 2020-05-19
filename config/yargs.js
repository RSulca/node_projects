const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs').command('save', 'This number is tha value table', opts ).command('read', 'This number is tha value table', opts ).help().argv;

module.exports = {
    argv
}