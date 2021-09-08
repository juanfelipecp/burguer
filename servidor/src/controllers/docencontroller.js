const modelo =require('../model/docen');

exports.listardocen =async (req, res) => {
    const docen = await modelo().listdocen();
    res.json({ docen })
};


exports.agregardocen =async (req, res) => {
    const { nombre } = req.body;
    const datos = [nombre];
    await modelo().agregardocen(datos);
    res.json({ msg: "docente agregado" });
};


exports.asignarma_docen =async (req, res) => {
    const { id } = req.params;
    const { id_materia } = req.body;
    const datos = [id_materia, id];
    await modelo().asignarma_docen(datos);
    res.json({ msg: "materia asignada" });
};

exports.asignarma_estu =async (req, res) => {
    const { id } = req.params;
    const { id_materia } = req.body;
    const datos = [id_materia, id];
    await modelo().asignarma_estu(datos);
    res.json({ msg: "materia asignada" });
};




