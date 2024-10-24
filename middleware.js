const {verifyToken,verifyRefreshToken, generateToken } =  require('./lib/jwt.js')

 const authMiddleware = (req, res, next) => {
  const { token, refreshToken } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized, no token found' });
  }
  
  // Verify the token given
  const verifiedToken = verifyToken(token);

  if (!verifiedToken) {
    // If the access token is invalid, check the refresh token
    const verifiedRefreshToken = verifyRefreshToken(refreshToken);

    if (!verifiedRefreshToken) {
      return res.status(401).json({ message: 'Unauthorized, refresh token invalid' });
    }
    if(!req.session.user) {
      return res.status(401).json({message: "Unauthorized: Session expired."})
    }
    
    
    // Generate a new access token using the verified refresh token
    const newToken = generateToken({
      userId: verifiedRefreshToken.userId,
      username: verifiedRefreshToken.username
    });
    
    
    res.cookie('token', newToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 15 * 60 * 1000 // 15 minutes
    });

    // Attach the newly generated access token to the request object
    req.user = verifiedRefreshToken;
  } else {
    req.user = verifiedToken;
  }

  next();
};

module.exports = {authMiddleware};
