//@desc register a user
//@route POST user/sign-up
//@access Public
const registerUser = (req, res) => {
  res.send("register");
}
//@desc login a user
//@route POST user/login
//@access Public
const loginUser = (req, res) => {
    res.send("register");
}

//@desc register a user
//@route POST user/me
//@access Private
const getUser = (req, res) => {
    res.send("register");
}

//@desc get user favourites
//@route GET user/favourites
//@access Private
const getUserFavoriteTeams = (req, res) => {
    res.send("register");
}
//@desc delete from user favourites
//@route DELETE user/favourites
//@access Private
const addToFavorites = (req, res) => {
    res.send("register");
}
//@desc add to user favourites
//@route POST user/favourites
//@access Private
const removeFromFavorites = (req, res) => {
    res.send("register");
}

module.exports = {
    loginUser,
    getUser,
    registerUser,
    getUserFavoriteTeams,
    removeFromFavorites,
    addToFavorites,
};
