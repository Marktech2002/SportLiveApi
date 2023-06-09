const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require('express-async-handler');
const User = require("../model/userModel");
const { default: mongoose } = require("mongoose");

//@desc register a user
//@route POST user/sign-up
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    // Missing credentials
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please enter all the fields');
    };
    //check if userexists 
    const userExits = await User.findOne({ email });
    if (userExits) {
        res.status(400)
        throw new Error("User already exists")
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id)
        });
    }
    else {
        res.status(400)
        throw new Error("Invalid Data")
    };
});

//@desc login a user
//@route POST user/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400)
        throw new Error("Invalid credentails")
    }
    const user = await User.findOne({ email });
    if (user && (bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id),
        })
    }
    else {
        res.status(400)
        throw new Error("Invalid credentails")
    }
});

//@desc register a user
//@route POST user/me
//@access Private
const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id);
    //test asynhandler guyy
    if (user) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
        })
    }
    else {
        res.status(400).json({ message: `${error.message}` })
    }
})


//@desc get user favourites
//@route GET user/favourites
//@access Private
const getUserFavoriteTeams = async (req, res) => {
    res.send("register");
}
//@desc delete from user favourites
//@route DELETE user/favourites
//@access Private
const addToFavorites = async (req, res) => {
    const { teamId, sport } = req.body;
    console.log(teamId, "teamId")
    if (!teamId || !sport) {
        res.status(400).json({
            msg: "Invalid Credentials",
            status: "Invalid",
        });
    }
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            res.status(400).json({
                msg: "User not found",
                status: "Invalid",
            })
        }
        if (sport?.toLowerCase() === "football") {
            if (!user.favoriteFootballTeams) {
                user.favoriteFootballTeams = {};
            }
            user.favoriteFootballTeams.push(String(teamId));
        }
        else if (sport?.toLowerCase() === "basketball") {
            if (!user.favoriteBasketballTeams) {
                user.favoriteBasketballTeams = [];
            }
            user.favoriteBasketballTeams.push(String(teamId));
        }
        else {
            res.status(400).json({ msg: "Invalid Sport", });
        }
        await user.save();
        res.status(200).json({
            user,
            msg: "Teams added succefully"
        })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}
//@desc add to user favourites
//@route POST user/favourites
//@access Private
const removeFromFavorites = async (req, res) => {
    const { id } = req.params;
    if(!id ) {
        res.status(400).json('No id')
    }
    const user = User.findById(req.user.id).select('-password') ;
    if (user) {
        
    }

    res.send("register");
}


//generate a token 
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
}
module.exports = {
    loginUser,
    getUser,
    registerUser,
    getUserFavoriteTeams,
    removeFromFavorites,
    addToFavorites,
};
