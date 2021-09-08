const database = require('../database');

module.exports =function(){

async function listdocen(){

    const docen = await database.query("SELECT mat.nombre, doc.nombre , estu.nombre FROM docentes doc, materias mat, estudiantes estu,docen_mater dm,mater_estu em, materias mat2 WHERE doc.id_docentes = dm.id_docentes AND estu.id_estudiantes = em.id_estudiantes  AND mat.id_materias = dm.id_materias AND mat2.id_materias = em.id_materias");
    return  docen

}


async function agregardocen(datos){
    const docen = await database.query("INSERT INTO docentes(nombre) VALUES(?)",datos);
    return  docen

}




async function asignarma_docen(datos){
    const docen = await database.query("UPDATE docen_mater SET id_materias = ? WHERE id_docentes = ?",datos);
    return  docen

}

async function asignarma_estu(datos){
    const docen = await database.query("UPDATE mater_estu SET id_materias = ? WHERE id_estudiantes = ?",datos);
    return  docen

}

return{
    listdocen,
    agregardocen,
    asignarma_docen,
    asignarma_estu
}


}