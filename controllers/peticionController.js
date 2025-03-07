const Peticion = require('../models/Peticion');

exports.createPeticion = async (req, res) => {
  try {
    const nuevaPeticion = await Peticion.create(req.body);
    res.status(201).json(nuevaPeticion);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear petición' });
  }
};

exports.getPeticiones = async (req, res) => {
  try {
    const { estado, servicio } = req.query;
    const where = {};
    if (estado) where.estado = estado;
    if (servicio) where.servicio = servicio;

    const peticiones = await Peticion.findAll({ where });
    res.json(peticiones);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener peticiones' });
  }
};

exports.updatePeticion = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Peticion.update(req.body, { where: { id } });
    if (updated) {
      const updatedPeticion = await Peticion.findOne({ where: { id } });
      res.json(updatedPeticion);
    } else {
      res.status(404).json({ message: 'Petición no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar petición' });
  }
};

exports.getPeticionPDF = async (req, res) => {
  const PDFDocument = require('pdfkit');
  const doc = new PDFDocument();
  const { id } = req.params;

  try {
    const peticion = await Peticion.findOne({ where: { id } });
    if (!peticion) {
      return res.status(404).json({ message: 'Petición no encontrada' });
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=peticion-${id}.pdf`);
    doc.pipe(res);

    doc.fontSize(16).text(`Petición ID: ${id}`, { align: 'center' });
    doc.text(`Servicio: ${peticion.servicio}`);
    doc.text(`Fecha: ${peticion.fecha}`);
    doc.text(`Estado: ${peticion.estado}`);
    if (peticion.cantidad_surtida) {
      doc.text(`Cantidad Surtida: ${peticion.cantidad_surtida}`);
    }

    doc.end();
  } catch (error) {
    res.status(500).json({ message: 'Error al generar PDF' });
  }
};