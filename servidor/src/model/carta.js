const database = require('../database');

module.exports =function(){

async function listcarta(){

    const carta = await database.query("SELECT * FROM carta");
    return  carta

}
async function listcartas(id){
    const carta = await database.query("SELECT * FROM carta WHERE id_carta = ?",id);
    return  carta

}

async function agregarcarta(datos){
    const carta = await database.query("INSERT INTO carta(titulo,img) VALUES(?,?)",datos);
    return  carta

}

async function eliminarcarta(id){
    const carta = await database.query("DELETE FROM carta WHERE id_carta = ?",id);
    return  carta

}

async function editarcarta(datos){
    const carta = await database.query("UPDATE carta SET titulo = ?,  img = ? WHERE id_carta = ?",datos);
    return  carta

}

return{
    listcarta,
    listcartas,
    agregarcarta,
    eliminarcarta,
    editarcarta
}


}