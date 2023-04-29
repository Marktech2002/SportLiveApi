const express = require('express');
const router = express.Router();

//routes scores 
router.get('/scores', getFootballScores);
router.get('/scores/:teamId', getFootballById);

//routes schedule
router.get('/schedules' , getFootballSchedule);
router.get('/schedules/:teamId', getFootballScheduleById);

//routes Standings
router.get('/standings' , getFootballSchedule);
router.get('/standings/:teamId', getFootballScheduleById);

// routes team details 
router.get('/team/:teamId' , getFballTeamsDetailsById);

//router player details
router.get('/players/:playerId' , getPlayerDetails)

// user favourites 
router.get('/favourites' , userFavourite);
router.post('/favorites' , addToFavourite);
router.delete('/favourites/:id ' , removeFromFavourites)
