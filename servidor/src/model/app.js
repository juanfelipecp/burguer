const database = require('../database');

module.exports =function(){

async function listapp(){

    const app = await database.query("SELECT * FROM app");
    return  app

}
async function listapps(id){
    const app = await database.query("SELECT * FROM app WHERE id_app = ?",id);
    return  app

}

async function agregarapp(datos){
    const app = await database.query("INSERT INTO app(titulo,descripcion,link) VALUES(?,?,?)",datos);
    return  app

}

async function eliminarapp(id){
    const app = await database.query("DELETE FROM app WHERE id_app = ?",id);
    return  app

}

async function editarapp(datos){
    const app = await database.query("UPDATE app SET titulo = ?,  descripcion = ?, link = ? WHERE id_app = ?",datos);
    return  app
s
}

return{
    listapp,
    listapps,
    agregarapp,
    eliminarapp,
    editarapp
}


}