const express = require('express');
const router = express.Router();
const { loginUser, getUser, registerUser,getUserFavoriteTeams, removeFromFavorites, addToFavorites } = require("../controllers/userController");
const { protectUser } = require("../middlewares/authMiddleware");
// user register , login and get user
router.post('/sign-up', registerUser);
router.post('/login', loginUser);
router.get('/me', protectUser, getUser);

//user favourites 
router.get('/favourites', protectUser , getUserFavoriteTeams);
router.post('/favourites', protectUser, addToFavorites);
router.delete('/favorites/:id', protectUser , removeFromFavorites);

module.exports = router ;