const jwt = require('jsonwebtoken');

const SECRET_KEY= process.env.JWT_SECRET_KEY || 'your-secret-key';
const REFRESH_SECRET_KEY = process.env.JWT_REFRESH_SECRET_KEY || 'your-refresh-secret-key';

const generateToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '15m' });  // Access token valid for 15 minutes
};

const generateRefreshToken = (payload) => {
  return jwt.sign(payload, REFRESH_SECRET_KEY, { expiresIn: '7d' });  // Refresh token valid for 7 days
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return null;
  }
};

const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, REFRESH_SECRET_KEY);
  } catch (err) {
    return null;
  }
};

module.exports = {
  generateToken,
  generateRefreshToken,
  verifyToken,
  verifyRefreshToken
};
