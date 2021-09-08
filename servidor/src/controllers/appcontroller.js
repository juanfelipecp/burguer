const modelo =require('../model/app');

exports.listarapp =async (req, res) => {
    const app = await modelo().listapp();
    res.json({ app })
};


exports.listarapps =async (req, res) => {
    const { id } = req.params;
    const app = await modelo().listapps([id]);
    res.json({ app })
};

exports.agregarapp =async (req, res) => {
    const { titulo,descripcion,link } = req.body;
    const datos = [titulo, descripcion,link];
    await modelo().agregarapp(datos);
    res.json({ msg: "app agregado" });
};

exports.eliminaapp =async (req, res) => {
    const { id } = req.params;
    await modelo().eliminarapp([id]);
    res.json({ msg: "app eliminado" });
};

exports.editarapp =async (req, res) => {
    const { id } = req.params;
    const { titulo,descripcion,link } = req.body;
    const datos = [titulo,descripcion,link, id];
    await modelo().editarapp(datos);
    res.json({ msg: "app modificado" });
};


