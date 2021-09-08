const database = require('../database');

module.exports =function(){

async function listredes(){

    const redes = await database.query("SELECT * FROM redes");
    return  redes

}
async function listredess(id){
    const redes = await database.query("SELECT * FROM redes WHERE id_redes = ?",id);
    return  redes

}

async function agregarredes(datos){
    const redes = await database.query("INSERT INTO redes(nombre,ico,link) VALUES(?,?,?)",datos);
    return  redes

}

async function eliminarredes(id){
    const redes = await database.query("DELETE FROM redes WHERE id_redes = ?",id);
    return  redes

}

async function editarredes(datos){
    const redes = await database.query("UPDATE redes SET nombre = ?,  ico = ?, link = ? WHERE id_redes = ?",datos);
    return  redes

}

return{
    listredes,
    listredess,
    agregarredes,
    eliminarredes,
    editarredes
}


}