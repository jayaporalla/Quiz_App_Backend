const jwt = require("jsonwebtoken");

// Creating a middleware to verfiy the token
const authVerify = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Token missing or malformed" });
    }

    const token = authHeader.split(" ")[1]; // extract only the token

    try {
        const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user = { userId: decodedToken.id };
        next(); // allow to continue
    } catch (err) {
        console.error(`error from server ${JSON.stringify(err)}`);
        return res.status(401).json({ error: "Invalid or expired token" });
    }
}

module.exports = authVerify;