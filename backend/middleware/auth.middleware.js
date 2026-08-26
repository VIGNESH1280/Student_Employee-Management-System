import "dotenv/config";
import jwt from "jsonwebtoken";

const TOKEN_SECRET = process.env.TOKEN_SECRET;

// Generate Token
const generateToken = async (payload) => {
    return jwt.sign(payload, TOKEN_SECRET, {
        expiresIn: "1h",
    });
};

// Verify JWT
const auth = async (req, res, next) => {
    try {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(" ")[1];

            // Bearer token
            const decoded = jwt.verify(token, TOKEN_SECRET);

            req.user = decoded;

            next();
        } else {
            res.status(401).json({
                message: "You are unauthorized",
            });
        }
    } catch (err) {
        res.status(401).json({
            message: "You are unauthorized",
        });
    }
};

export { auth, generateToken };