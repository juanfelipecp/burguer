const modelo =require('../model/nosotros');

exports.listarnosotros =async (req, res) => {
    const nosotros = await modelo().listnosotros();
    res.json({ nosotros })
};


exports.listarnosotross =async (req, res) => {
    const { id } = req.params;
    const nosotros = await modelo().listnosotross([id]);
    res.json({ nosotros })
};

exports.agregarnosotros =async (req, res) => {
    const { titulo,texto } = req.body;
    const datos = [titulo, texto];
    await modelo().agregarnosotros(datos);
    res.json({ msg: "nosotros agregado" });
};

exports.eliminarnosotros =async (req, res) => {
    const { id } = req.params;
    await modelo().eliminarnosotros([id]);
    res.json({ msg: "nosotros eliminado" });
};

exports.editarnosotros =async (req, res) => {
    const { id } = req.params;
    const { titulo,texto } = req.body;
    const datos = [titulo,texto, id];
    await modelo().editarnosotros(datos);
    res.json({ msg: "nosotros modificado" });
};


