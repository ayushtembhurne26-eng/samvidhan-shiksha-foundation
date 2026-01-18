const jwt = require('jsonwebtoken');

const adminLogin = async (req, res) => {
  const { mobile, password } = req.body;
  if (!mobile || !password) return res.status(400).json({ message: 'Missing credentials' });

  if (
    mobile === (process.env.ADMIN_MOBILE || '9999999999') &&
    password === (process.env.ADMIN_PASSWORD || 'admin123')
  ) {
    const token = jwt.sign(
      { role: 'admin', mobile },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '7d' }
    );
    return res.json({ token });
  }
  return res.status(401).json({ message: 'Invalid credentials' });
};

module.exports = { adminLogin };
