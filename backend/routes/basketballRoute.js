const express = require("express");
const router = express.Router();
const {
    getAllTeams,
    getPlayerById,
    getBasketballSchedule,
    schedulesById,
    getStatistics,
    getTeamById,
    getPlayerDetails, } = require("../controllers/basketballController")


//routes schedule
router.get('/schedules', getBasketballSchedule);
router.get('/schedule/:teamId', schedulesById);

//routes Standings
router.get('/standings', getStatistics);

// routes team details 
router.get('/team/', getAllTeams);
router.get('/team/:teamId', getTeamById);


//router player details
router.get('/players/', getPlayerDetails);
router.get('/players/:teamId', getPlayerById);

module.exports = router;
