const User = require('../models/User');
const { generateCertificate } = require('../utils/certificate');

const generateForUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const doc = generateCertificate({ name: user.name });

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="certificate-${user._id}.pdf"`);
    doc.pipe(res);
    doc.end();
  } catch (e) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { generateForUser };
