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

const argv = require('yargs')
            .command('list', 'print on console', opts)
            .command('create', 'create a new table to file', opts)
            .help()
            .argv;


module.exports = {
    argv
}