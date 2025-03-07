const Insumo = require('../models/Insumo');
const { Op } = require('sequelize');

exports.getInsumos = async (req, res) => {
  try {
    const insumos = await Insumo.findAll();
    res.json(insumos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener insumos' });
  }
};

exports.updateInsumo = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Insumo.update(req.body, { where: { id } });
    if (updated) {
      const updatedInsumo = await Insumo.findOne({ where: { id } });
      res.json(updatedInsumo);
    } else {
      res.status(404).json({ message: 'Insumo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar insumo' });
  }
};

exports.getInsumosCaducidad = async (req, res) => {
  try {
    const hoy = new Date();
    const insumos = await Insumo.findAll({
      where: {
        caducidad: { [Op.gte]: hoy },
      },
    });

    const insumosConColor = insumos.map(insumo => {
      const caducidad = new Date(insumo.caducidad);
      const diffTime = caducidad - hoy;
      const diffMonths = diffTime / (1000 * 60 * 60 * 24 * 30);

      let color;
      if (diffMonths > 12) color = 'verde';
      else if (diffMonths > 8) color = 'amarillo';
      else if (diffMonths > 4) color = 'naranja';
      else color = 'rojo';

      return { ...insumo.dataValues, color };
    });

    res.json(insumosConColor);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener insumos por caducidad' });
  }
};