const express = require('express');
const router = express.Router();
const { loggerMiddleware } = require('../middleware');
const {
  getAllKaryawan,
  createKaryawan,
  deleteKaryawan,
  editKaryawan,
} = require('../controllers/karyawanController');

// Middleware
router.use(loggerMiddleware);

// Karyawan routes
router.get('/karyawan', getAllKaryawan);
router.post('/karyawan', createKaryawan);
router.delete('/karyawan/:id', deleteKaryawan);
router.put('/karyawan/:id', editKaryawan);

module.exports = router;