const modelo =require('../model/redes');

exports.listarredes =async (req, res) => {
    const redes = await modelo().listredes();
    res.json({ redes })
};


exports.listarredess =async (req, res) => {
    const { id } = req.params;
    const redes = await modelo().listredess([id]);
    res.json({ redes })
};

exports.agregarredes =async (req, res) => {
    const { nombre,ico,link } = req.body;
    const datos = [nombre, ico,link];
    await modelo().agregarredes(datos);
    res.json({ msg: "redes agregado" });
};

exports.eliminarredes =async (req, res) => {
    const { id } = req.params;
    await modelo().eliminarredes([id]);
    res.json({ msg: "redes eliminado" });
};

exports.editarredes =async (req, res) => {
    const { id } = req.params;
    const { nombre,ico,link } = req.body;
    const datos = [nombre,,link, id];
    await modelo().editarredes(datos);
    res.json({ msg: "redes modificado" });
};


