
const expressAsyncHandler = require('express-async-handler');
const request = require('request');
const { getGames, getGameById } = require("../service/basketBallSchedules")(request);
const { getTeams, getAteam } = require("../service/basketBallTeams")(request);
//@desc get scores
//@route GET basketball/scores
//@access Public
const getBasketballScores = (req, res) => {
    res.send("get Basketballscores")
}

//@desc get scores
//@route GET basketball/scores
//@access Public
const getAllTeams = async (req, res) => {
    getTeams((err, body) => {
        if (err) {
            res.status(400).json({
                msg: `${err.message}`,
                status: "Invalid"
            })
        }
        const response = JSON.parse(body.body);
        res.status(200).json(response);
    })
}

//@desc get team details by id
//@route GET basketball/team/:teamId
//@access Public
const getTeamById = async (req, res) => {
    const { teamId } = req.params;
    if (teamId > 30 || teamId < 1) {
        res.status(400).json({
            message: "Id doesn't exists",
            status: "Id > 30"
        })
    }
    if (!teamId) {
        res.status(400).json({
            message: "Input an Id",
            status: "Invalid Input"
        })
    }
    getAteam(teamId, (err, body) => {
        if (err) {
            res.status(400).json({
                msg: `${err.message}`,
                status: "Invalid"
            })
        }
        const response = JSON.parse(body.body);
        res.status(200).json(response);
    })
}

//@desc get scores by Id
//@route GET basketball/scores/:teamId
//@access Public
const scoresById = (req, res) => {
    res.status(400).send("get Basketballscores by id")
}

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
        }
        // console.log(response.data[0].id)
        return res.status(200).json(response);
    });
}

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

})

//@desc get standings 
//@route GET basketball/standing
//@access Public

const getBasketballStandings = (req, res) => {
    res.send("get Basketball standings ")
}
//@desc get standings by id
//@route GET basketball/standings/:teamId
//@access Public

const standingsById = (req, res) => {
    res.send("get Basketball standings by id")
}

//@desc get a player details
//@route GET basketball/player/:playerId
//@access Public
const getPlayerDetails = (req, res) => {
    res.send("get player details")
}

module.exports = {
    getBasketballScores,
    scoresById,
    getBasketballSchedule,
    schedulesById,
    getBasketballStandings,
    standingsById,
    getAllTeams,
    getTeamById,
    getPlayerDetails,
}