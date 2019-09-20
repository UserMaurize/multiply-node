
const { argv } = require('./configs/yargs');
const colors = require('colors');
const { createFile, listTable } = require('./multiply/multiply');


let command = argv._[0];

switch(command) {
    case 'list':
        console.log(`listing table of the ${argv.base} with an limit of the ${argv.limit}`);
            listTable(argv.base,argv.limit);
        break;
    case 'create':
        console.log('creating a file...');
        createFile(argv.base, argv.limit)
            .then(file => console.log(`File created successfully: ${file}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log(`unknown command`);
}
// // let base = `a`;

// // console.log(process.argv);

// let argv2 = process.argv;
// // let param = argv[2];
// // let base = param.split('=')[1];

