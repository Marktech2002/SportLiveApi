const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const user = require("../model/userModel");

const protectUser = asyncHandler(async (req, res, next) => {
    //check for the token
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];  //get the token
            const decoded = await jwt.verify(token, process.env.JWT_SECRET);
            req.user = await user.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorized');
        }
    }
    // Missing token
    if (!token) {
        res.status(401)
        throw new Error('Not authorized , no token')

    };
})

module.exports = { protectUser } ;