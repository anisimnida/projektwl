const mongoose = require('mongoose');

const karyawanSchema = new mongoose.Schema({
  NIK: {
    type: String,
    required: true
  },

  Nama: {
    type: String,
    required: true
  },

  Email: {
    type: String,
    required: true
  },

  Alamat: {
    type: String,
    required: true
  }
});

const KaryawanModel = mongoose.model('Karyawan', karyawanSchema);

module.exports = KaryawanModel;