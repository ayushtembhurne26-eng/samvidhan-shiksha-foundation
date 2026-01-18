const User = require('../models/User');

const register = async (req, res) => {
  try {
    const { name, mobile, area, role } = req.body;
    if (!name || !mobile || !role) return res.status(400).json({ message: 'Missing fields' });

    const existing = await User.findOne({ mobile });
    if (existing) return res.status(409).json({ message: 'Mobile already registered' });

    const user = await User.create({ name, mobile, area, role });
    res.status(201).json(user);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Server error' });
  }
};

const listUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (e) {
    res.status(500).json({ message: 'Server error' });
  }
};

const approve = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, { approved: true }, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (e) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { register, listUsers, approve };
