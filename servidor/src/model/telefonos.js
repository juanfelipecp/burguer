const database = require('../database');

module.exports =function(){

async function listtelefonos(){

    const telefonos = await database.query("SELECT * FROM telefonos");
    return  telefonos

}
async function listtelefonoss(id){
    const telefonos = await database.query("SELECT * FROM telefonos WHERE id_telefonos = ?",id);
    return  telefonos

}

async function agregartelefonos(datos){
    const telefonos = await database.query("INSERT INTO telefonos(lugar,telefono,telefono2,telefono3) VALUES(?,?,?,?)",datos);
    return  telefonos

}

async function eliminartelefonos(id){
    const telefonos = await database.query("DELETE FROM telefonos WHERE id_telefonos = ?",id);
    return  telefonos

}

async function editartelefonos(datos){
    const telefonos = await database.query("UPDATE telefonos SET lugar = ?,  telefono = ?, telefono2 = ?,telefono3=? WHERE id_telefonos = ?",datos);
    return  telefonos

}

return{
    listtelefonos,
    listtelefonoss,
    agregartelefonos,
    eliminartelefonos,
    editartelefonos
}


}