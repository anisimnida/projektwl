const User = require('../models/User'); // Import model User

// Mendapatkan informasi pengguna berdasarkan username
exports.getUserByUsername = async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Memperbarui username pengguna
exports.updateUsername = async (req, res) => {
  const { username } = req.params;
  const { newUsername } = req.body;

  try {
    // Periksa apakah username baru telah digunakan oleh pengguna lain
    const existingUser = await User.findOne({ username: newUsername });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Perbarui username pengguna
    const user = await User.findOneAndUpdate(
      { username },
      { username: newUsername },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Menghapus pengguna berdasarkan username
exports.deleteUserByUsername = async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOneAndDelete({ username });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
