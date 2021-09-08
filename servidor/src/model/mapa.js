const database = require('../database');

module.exports =function(){

async function listmapa(){

    const mapa = await database.query("SELECT * FROM mapa");
    return  mapa

}
async function listmapas(id){
    const mapa = await database.query("SELECT * FROM mapa WHERE id_mapa = ?",id);
    return  mapa

}

async function agregarmapa(datos){
    const mapa = await database.query("INSERT INTO mapa(cordenadas) VALUES(?)",datos);
    return  mapa

}

async function eliminarmapa(id){
    const mapa = await database.query("DELETE FROM mapa WHERE id_mapa = ?",id);
    return  mapa

}

async function editarmapa(datos){
    const mapa = await database.query("UPDATE mapa SET cordenadas = ? WHERE id_mapa = ?",datos);
    return  mapa

}

return{
    listmapa,
    listmapas,
    agregarmapa,
    eliminarmapa,
    editarmapa
}


}