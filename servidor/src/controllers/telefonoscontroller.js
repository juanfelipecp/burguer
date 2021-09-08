const modelo =require('../model/telefonos');

exports.listartelefonos =async (req, res) => {
    const telefonos = await modelo().listtelefonos();
    res.json({ telefonos })
};


exports.listartelefonoss =async (req, res) => {
    const { id } = req.params;
    const telefonos = await modelo().listtelefonoss([id]);
    res.json({ telefonos })
};

exports.agregartelefonos =async (req, res) => {
    const {lugar,telefono,telefono2,telefono3 } = req.body;
    const datos = [lugar,telefono,telefono2,telefono3];
    await modelo().agregartelefonos(datos);
    res.json({ msg: "telefonos agregado" });
};

exports.eliminartelefonos =async (req, res) => {
    const { id } = req.params;
    await modelo().eliminartelefonos([id]);
    res.json({ msg: "telefonos eliminado" });
};

exports.editartelefonos =async (req, res) => {
    const { id } = req.params;
    const { lugar,telefono,telefono2,telefono3} = req.body;
    const datos = [lugar,telefono,telefono2,telefono3, id];
    await modelo().editartelefonos(datos);
    res.json({ msg: "telefonos modificado" });
};


