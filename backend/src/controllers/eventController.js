const Event = require('../models/Event');

const list = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 });
    res.json(events);
  } catch (e) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getOne = async (req, res) => {
  try {
    const ev = await Event.findById(req.params.id);
    if (!ev) return res.status(404).json({ message: 'Not found' });
    res.json(ev);
  } catch (e) {
    res.status(500).json({ message: 'Server error' });
  }
};

const create = async (req, res) => {
  try {
    const { title, description, date, location } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : undefined;
    const ev = await Event.create({ title, description, date, location, image });
    res.status(201).json(ev);
  } catch (e) {
    res.status(500).json({ message: 'Server error' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = { ...req.body };
    if (req.file) updates.image = `/uploads/${req.file.filename}`;
    const ev = await Event.findByIdAndUpdate(id, updates, { new: true });
    if (!ev) return res.status(404).json({ message: 'Not found' });
    res.json(ev);
  } catch (e) {
    res.status(500).json({ message: 'Server error' });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await Event.findByIdAndDelete(id);
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { list, getOne, create, update, remove };
