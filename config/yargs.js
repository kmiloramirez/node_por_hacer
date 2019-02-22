const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente una tarea'
};

const argv = require('yargs')
    .command('crear', 'crear una tarea', { descripcion })
    .command('actualizar', 'Actualiza el estado de una tarea ', { descripcion, completado })
    .command('borrar', 'borra una tarea', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}