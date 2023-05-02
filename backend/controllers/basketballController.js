
const expressAsyncHandler = require('express-async-handler');
const request = require('request');
const { getGames ,getGameById } = require("../service/basketBallSchedules")(request);
//@desc get scores
//@route GET basketball/scores
//@access Public
const getBasketballScores = (req , res) => {
    res.send("get Basketballscores")
}

//@desc get scores
//@route GET basketball/scores
//@access Public
const getAllTeams = (req , res) => {
    res.send("get Basketballscores")
}
//@desc get scores by Id
//@route GET basketball/scores/:teamId
//@access Public
const scoresById = (req , res) => {
    res.send("get Basketballscores by id")
}

//@desc get schedules
//@route GET basketball/schedules/
//@access Public

const getBasketballSchedule = async (req , res) => {
    getGames((err, response) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ message: 'Error fetching games' });
        }  
        // console.log(response.data[0].id)
        return res.status(200).json(response);
      }); 
}

//@desc get schedules by id
//@route GET basketball/schedules/:teamId
//@access Public
const schedulesById = expressAsyncHandler( async (req , res) => {
   try {
     const gameId = req.params.teamId;
     console.log(gameId)
     if(!gameId) {
      res.status(400)
      throw new Error("misisnf")
     }
    const game = await getGameById(gameId);
    res.status(400).json(game)
   } catch (error) {
    res.status(400).json({ error : error.message })
   }
}) 

//@desc get standings 
//@route GET basketball/standing
//@access Public

const getBasketballStandings = (req , res) => {
    res.send("get Basketball standings ")
}
//@desc get standings by id
//@route GET basketball/standings/:teamId
//@access Public

const standingsById = (req , res) => {
    res.send("get Basketball standings by id")
}

//@desc get team details by id
//@route GET basketball/team/:teamId
//@access Public

const getTeamById = (req , res) => {
    res.send("get Basketball Teams details ")
}

//@desc get a player details
//@route GET basketball/player/:playerId
//@access Public
const getPlayerDetails = (req , res) => {
    res.send("get player details")
}

module.exports = {
   getBasketballScores ,
   scoresById ,
   getBasketballSchedule ,
   schedulesById ,
   getBasketballStandings ,
   standingsById ,
   getAllTeams,
   getTeamById ,
   getPlayerDetails ,
}