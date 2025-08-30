const jwt = require('jsonwebtoken');

const payload = {
  id: '1',
  email: 'admin@theagischool.com',
  role: 'admin'
};

const token = jwt.sign(
  payload,
  process.env.JWT_SECRET || 'your-secure-secret-here',
  { expiresIn: '1h' }
);

console.log('Generated JWT Token:\n', token);
