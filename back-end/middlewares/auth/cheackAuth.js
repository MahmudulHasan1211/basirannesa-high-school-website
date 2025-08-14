const jwt = require("jsonwebtoken");

function checkAuth(req, res, next) {
    const token = req.signedCookies[process.env.COOKIE_NAME];
  if (!token) {
    return res.status(401).json({ msg: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // You can use this later
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Invalid token" });
  }
}

module.exports=checkAuth