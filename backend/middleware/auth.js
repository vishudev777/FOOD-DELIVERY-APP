import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        return res.json({
            success: false,
            message: "Not Authorized Login Failed, Try Again",
        });
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log("Error decoding token", error.message);
        res.json({ success: false, message: "Invalid token" });
    }
};

export default authMiddleware;
