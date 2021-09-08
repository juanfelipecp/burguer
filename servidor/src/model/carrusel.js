const database = require('../database');

module.exports =function(){

async function listcarrusel(){

    const carrusel = await database.query("SELECT * FROM carrusel");
    return  carrusel

}
async function listcarrusels(id){
    const carrusel = await database.query("SELECT * FROM carrusel WHERE id_carrusel = ?",id);
    return  carrusel

}

async function agregarcarrusel(datos){
    const carrusel = await database.query("INSERT INTO carrusel(img) VALUES(?)",datos);
    return  carrusel

}

async function eliminarcarrusel(id){
    const carrusel = await database.query("DELETE FROM carrusel WHERE id_carrusel = ?",id);
    return  carrusel

}

async function editarcarrusel(datos){
    const carrusel = await database.query("UPDATE carrusel SET img = ? WHERE id_carrusel = ?",datos);
    return  carrusel

}

return{
    listcarrusel,
    listcarrusels,
    agregarcarrusel,
    eliminarcarrusel,
    editarcarrusel
}


}