const mongoose = require("mongoose");
const userScheme = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide your name"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please provide your  email"],
        validate: {
            validator: function (str) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(str);
            },
            message: props => `${props.value} is not a valid email`
        }
    },
    password: {
        type: String,
        trim : true ,
        required: [true, "Please provide your passowrd"],
    },
    favoriteFootballTeams: {
        type: [ String ],
        ref: 'FootballTeam',
        default: []
      },
      favoriteBasketballTeams: {
        type: [ String ],
        ref: 'BasketballTeam',
        default: []
      },
    date: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('User' , userScheme)