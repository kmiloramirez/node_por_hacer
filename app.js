const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors')

let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado()
        for (let tarea of listado) {
            console.log('=======POR HACER======'.green);
            console.log(tarea.descripcion);
            console.log('estado: ', tarea.completado);
            console.log('======================'.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        if (actualizado) {
            console.log(`se actualizo la tarea ${argv.descripcion}`);
        } else {
            console.log(`no se encontro la tarea ${argv.descripcion}`);
        }

        break;
    case 'borrar':

        let borrado = porHacer.borrar(argv.descripcion)
        if (borrado) {
            console.log(`se borro la tarea ${argv.descripcion}`);
        } else {
            console.log(`no se encontro la tarea ${argv.descripcion}`);
        }

        break;
    default:
        console.log('comando no es reconocido');
        break;
}