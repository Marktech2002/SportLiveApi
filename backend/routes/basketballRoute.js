const express = require("express");
const router = express.Router();
const { getAllTeams, getBasketballScores , scoresById , getBasketballSchedule ,schedulesById ,getBasketballStandings , standingsById ,getTeamById ,getPlayerDetails } = require("../controllers/basketballController")

//routes scores 
router.get('/scores', getBasketballScores);
router.get('/scores/:teamId', scoresById);

//routes schedule
router.get('/schedules' , getBasketballSchedule);
router.get('/schedule/:teamId', schedulesById);

//routes Standings
router.get('/standings' , getBasketballStandings);
router.get('/standings/:teamId', standingsById);

// routes team details 
router.get('/team/' , getAllTeams);
router.get('/team/:teamId' , getTeamById);


//router player details
router.get('/player/:playerId' , getPlayerDetails)

module.exports = router ;
