const modelo =require('../model/carta');

exports.listarcarta =async (req, res) => {
    const carta = await modelo().listcarta();
    res.json({ carta })
};


exports.listarcartas =async (req, res) => {
    const { id } = req.params;
    const carta = await modelo().listcartas([id]);
    res.json({ carta })
};

exports.agregarcarta =async (req, res) => {
    const { titulo,img } = req.body;
    const datos = [titulo, img];
    await modelo().agregarcarta(datos);
    res.json({ msg: "carta agregado" });
};

exports.eliminarcarta =async (req, res) => {
    const { id } = req.params;
    await modelo().eliminarcarta([id]);
    res.json({ msg: "carta eliminado" });
};

exports.editarcarta =async (req, res) => {
    const { id } = req.params;
    const { titulo,img } = req.body;
    const datos = [titulo,img, id];
    await modelo().editarcarta(datos);
    res.json({ msg: "carta modificado" });
};


