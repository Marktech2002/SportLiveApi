
const expressAsyncHandler = require('express-async-handler');
const request = require('request');
const User = require("../model/userModel");
const { getGames, getGameById } = require("../service/basketBallSchedules")(request);
const { getTeams, getAteam } = require("../service/basketBallTeams")(request);
const { getPlayers ,getPlayerId } = require("../service/basketBallPlayers")(request);
const { getStats } = require('../service/basketBallStats')(request);

//@desc get a player details
//@route GET basketball/player/
//@access Public
const getPlayerDetails = async (req, res) => {
    getPlayers((err, body) => {
        if (err) {
            res.status(400).json({
                msg: `${err.message}`,
                status: "Invalid",
            });
        };
    const response = JSON.parse(body.body);
    res.status(200).json(response);
    });
};

//@desc get a player details
//@route GET basketball/player/:playerId
//@access Public
const getPlayerById = async (req, res) => {
    const { teamId } = req.params;
    if (!teamId) {
        res.status(400).json({
            msg: "Wahala wa oo"
        });
    };
    getPlayerId(teamId , (err , body) => {
        if (err) {
            res.status(400).json({
                msg: `${err.message}`,
                status: "Invalid"
            });
        };
        const response = JSON.parse(body.body);
        res.status(200).json(response);
    });
};

//@desc get scores 
//@route GET basketball/scores
//@access Public
const getAllTeams = async (req, res) => {
    getTeams((err, body) => {
        if (err) {
            res.status(400).json({
                msg: `${err.message}`,
                status: "Invalid"
            });
        };
        const response = JSON.parse(body.body);
        res.status(200).json(response);
    });
};

//@desc get team details by id
//@route GET basketball/team/:teamId
//@access Public
const getTeamById = async (req, res) => {
    const { teamId } = req.params;
    if (teamId > 30 || teamId < 1) {
        res.status(400).json({
            message: "Id doesn't exists",
            status: "Id > 30"
        });
    };
    if (!teamId) {
        res.status(400).json({
            message: "Input an Id",
            status: "Invalid Input"
        });
    };
    getAteam(teamId, (err, body) => {
        if (err) {
            res.status(400).json({
                msg: `${err.message}`,
                status: "Invalid"
            });
        };
        const response = JSON.parse(body.body);
        res.status(200).json(response);
    });
};


//@desc get schedules
//@route GET basketball/schedules/
//@access Public
const getBasketballSchedule = async (req, res) => {
    getGames((err, response) => {
        if (err) {
            console.log(err);
            return res.status(400).json({
                msg: `${err.message}`,
                status: "invalid",
            });
        };
        // console.log(response.data[0].id)
        return res.status(200).json(response);
    });
};

//@desc get schedules by id
//@route GET basketball/schedules/:teamId
//@access Public
const schedulesById = expressAsyncHandler(async (req, res) => {
    const { teamId } = req.params;
    if (!teamId) { res.status(400).json({ message: "Include gameId" }) };
    getGameById(teamId, (error, body) => {
        if (error) {
            return res.status(400).json({
                msg: `${error.message}`,
                status: "invalid",
            });
        };
        const response = JSON.parse(body.body);
        res.status(200).send(response);
    });

});

//@desc get standings 
//@route GET basketball/standing
//@access Public

const getStatistics =  async (req, res) => {
     getStats((err, response) => {
        if (err) {
            console.log(err);
            return res.status(400).json({
                msg: `${err.message}`,
                status: "invalid",
            });
        };
        // console.log(response.data[0].id)
        return res.status(200).json(response);
    });
}


module.exports = {
    getBasketballSchedule,
    schedulesById,
    getStatistics,
    getAllTeams,
    getTeamById,
    getPlayerDetails,
    getPlayerById
};


