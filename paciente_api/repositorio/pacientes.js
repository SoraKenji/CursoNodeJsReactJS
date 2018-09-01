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

exports.getById = getById;
exports.getAll = getAll;