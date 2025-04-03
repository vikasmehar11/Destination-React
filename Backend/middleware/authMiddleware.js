const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers['authorization']?.split(' ')[1]; 
        if (!token) {
            return res.status(401).json({ message: 'Token not provided' });
        }

        const decoded = jwt.decode(token);
        if (!decoded) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        req.body.id = decoded.id; 
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;
