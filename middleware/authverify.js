const jwt = require("jsonwebtoken");

// Creating a middleware to verify the token
const authVerify = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // If no Authorization header is present
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Token not provided" });
    }

    const token = authHeader.split(" ")[1];

    console.log("Received Token:", token);

    try {
        const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user = { userId: decodedToken.id };
        next();
    } catch (err) {
        console.error(`error from server ${JSON.stringify(err)}`);
        return res.status(403).json({ error: err.message });
    }
};

module.exports = authVerify;
