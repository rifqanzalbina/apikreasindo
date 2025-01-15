const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "kuncisi5bpaw");
    req.userData = { email: decodedToken.email, userid: decodedToken.userid };

    next();
  } catch (error) {
    res.status(401).json({ message: "Auth failed!" });
  }
};
