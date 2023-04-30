const express = require('express');
const router = express.Router();
const { getFootballScores , scoresById , getFootballSchedule ,schedulesById ,getFootballStandings , standingsById ,getFballTeamsDetailsById ,getPlayerDetails } = require("../controllers/footballController")

//routes scores 
router.get('/scores', getFootballScores);
router.get('/scores/:teamId', scoresById);

//routes schedule
router.get('/schedules' , getFootballSchedule);
router.get('/schedules/:teamId', schedulesById);

//routes Standings
router.get('/standings' , getFootballStandings);
router.get('/standings/:teamId', standingsById);

// routes team details 
router.get('/team/:teamId' , getFballTeamsDetailsById);

//router player details
router.get('/player/:playerId' , getPlayerDetails)

module.exports = router ;