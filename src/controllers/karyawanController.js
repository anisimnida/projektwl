const KaryawanModel = require('../models/karyawanModel');

exports.getAllKaryawan = async (req, res) => {
  try {
    const karyawanList = await KaryawanModel.find();
    res.json(karyawanList);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving karyawan' });
  }
};

exports.createKaryawan = async (req, res) => {
  const { NIK, Nama, Email, Alamat } = req.body;

  try {
    const newKaryawan = new KaryawanModel({ NIK, Nama, Email, Alamat });
    const savedKaryawan = await newKaryawan.save();
    res.status(201).json(savedKaryawan);
  } catch (error) {
    res.status(500).json({ message: 'Error creating karyawan' });
  }
};

exports.deleteKaryawan = async (req, res) => {
  const { id } = req.params;

  try {
    await KaryawanModel.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting karyawan' });
  }
};

exports.editKaryawan = async (req, res) => {
  const { id } = req.params;
  const { NIK, Nama, Email, Alamat } = req.body;

  try {
    const updatedKaryawan = await KaryawanModel.findByIdAndUpdate(
      id,
      { NIK, Nama, Email, Alamat },
      { new: true }
    );
    res.json(updatedKaryawan);
  } catch (error) {
    res.status(500).json({ message: 'Error editing karyawan' });
  }
};