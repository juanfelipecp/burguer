const database = require('../database');

module.exports =function(){

async function listnosotros(){

    const nosotros = await database.query("SELECT * FROM nosotros");
    return  nosotros

}
async function listnosotross(id){
    const nosotros = await database.query("SELECT * FROM nosotros WHERE id_nosotros = ?",id);
    return  nosotros

}

async function agregarnosotros(datos){
    const nosotros = await database.query("INSERT INTO nosotros(titulo,texto) VALUES(?,?)",datos);
    return  nosotros

}

async function eliminarnosotros(id){
    const nosotros = await database.query("DELETE FROM nosotros WHERE id_nosotros = ?",id);
    return  nosotros

}

async function editarnosotros(datos){
    const nosotros = await database.query("UPDATE nosotros SET titulo = ?,  texto = ? WHERE id_nosotros = ?",datos);
    return  nosotros

}

return{
    listnosotros,
    listnosotross,
    agregarnosotros,
    eliminarnosotros,
    editarnosotros
}


}