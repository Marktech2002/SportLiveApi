const express = require("express");
const router = express.Router();
const { getBasketballScores , scoresById , getBasketballSchedule ,schedulesById ,getBasketballStandings , standingsById ,getTeamsDetailsById ,getPlayerDetails } = require("../controllers/basketballController")

//routes scores 
router.get('/scores', getBasketballScores);
router.get('/scores/:teamId', scoresById);

//routes schedule
router.get('/schedules' , getBasketballSchedule);
router.get('/schedules/:teamId', schedulesById);

//routes Standings
router.get('/standings' , getBasketballStandings);
router.get('/standings/:teamId', standingsById);

// routes team details 
router.get('/team/:teamId' , getTeamsDetailsById);

//router player details
router.get('/player/:playerId' , getPlayerDetails)

module.exports = router ;
