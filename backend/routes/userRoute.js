const express = require('express');
const router = express.Router();
const { loginUser, getUser, registerUser,getUserFavoriteTeams, removeFromFavorites, addToFavorites } = require("../controllers/userController") 
// user register , login and get user
router.post('/sign-up', registerUser);
router.post('/login', loginUser);
router.get('/me', getUser);

//user favourites 
router.get('/favourites', getUserFavoriteTeams);
router.post('/favourites', addToFavorites);
router.delete('/favorites/:id',removeFromFavorites);

module.exports = router ;