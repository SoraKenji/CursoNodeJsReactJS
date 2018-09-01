const { conectar } = require('./conexion');

const getAll = async () => {
    const conexion = await conectar();
    const query = `select * from pacientes`;
    const resultado = await conexion.query(query);
    conexion.release();
    return resultado.rows;
};

const getById = async (id) => {
    const conexion = await conectar();
    const query = `select * from pacientes where id=$1`;
    const resultado = await conexion.query(query, [id]);
    conexion.release();
    return resultado.rows[0];
};

const save = async (paciente) => {
    const conexion = await conectar();
    const query = `insert into pacientes (nombre, apellidos, edad)
    values ($1, $2, $3) returning *`;
    const values = [paciente.nombre, paciente.apellidos, paciente.edad];
    const resultado = await conexion.query(query, values);
    conexion.release();
    return resultado.rows[0];
};

exports.save = save;
exports.getById = getById;
exports.getAll = getAll;