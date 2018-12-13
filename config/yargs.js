const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de tareas por hacer'
};
const completado = {
    alias: 'c',
    default: true
};


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra una tarea determinada', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}