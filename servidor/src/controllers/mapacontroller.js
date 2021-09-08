const modelo =require('../model/mapa');

exports.listarmapa =async (req, res) => {
    const mapa = await modelo().listmapa();
    res.json({ mapa })
};


exports.listarmapas =async (req, res) => {
    const { id } = req.params;
    const mapa = await modelo().listmapas([id]);
    res.json({ mapa })
};

exports.agregarmapa =async (req, res) => {
    const { cordenadas } = req.body;
    const datos = [cordenadas];
    await modelo().agregarmapa(datos);
    res.json({ msg: "mapa agregado" });
};

exports.eliminarmapa =async (req, res) => {
    const { id } = req.params;
    await modelo().eliminarmapa([id]);
    res.json({ msg: "mapa eliminado" });
};

exports.editarmapa =async (req, res) => {
    const { id } = req.params;
    const { cordenadas } = req.body;
    const datos = [cordenadas, id];
    await modelo().editarmapa(datos);
    res.json({ msg: "mapa modificado" });
};


