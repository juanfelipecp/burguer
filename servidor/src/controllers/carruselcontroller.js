const modelo =require('../model/carrusel');

exports.listarcarrusel =async (req, res) => {
    const carrusel = await modelo().listcarrusel();
    res.json({ carrusel })
};


exports.listarcarrusels =async (req, res) => {
    const { id } = req.params;
    const carrusel = await modelo().listcarrusels([id]);
    res.json({ carrusel })
};

exports.agregarcarrusel =async (req, res) => {
    const { img } = req.body;
    const datos = [img];
    await modelo().agregarcarrusel(datos);
    res.json({ msg: "carrusel agregado" });
};

exports.eliminarcarrusel =async (req, res) => {
    const { id } = req.params;
    await modelo().eliminarcarrusel([id]);
    res.json({ msg: "carrusel eliminado" });
};

exports.editarcarrusel =async (req, res) => {
    const { id } = req.params;
    const { img } = req.body;
    const datos = [img, id];
    await modelo().editarcarrusel(datos);
    res.json({ msg: "carrusel modificado" });
};


