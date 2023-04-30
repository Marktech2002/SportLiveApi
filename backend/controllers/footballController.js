
//@desc get scores
//@route GET football/scores
//@access Public
const getFootballScores = (req , res) => {
     res.send("get footballscores")
}
//@desc get scores by Id
//@route GET  football/scores/:teamId
//@access Public
const scoresById = (req , res) => {
     res.send("get footballscores by id")
}

//@desc get schedules
//@route GET  football/schedules/
//@access Public
const getFootballSchedule = (req , res) => {
     res.send("get footballSchedules")
}

//@desc get schedules by id
//@route GET  football/schedules/:teamId
//@access Public
const schedulesById = (req , res) => {
     res.send("get footballschedules by id")
}

//@desc get standings 
//@route GET  football/standing
//@access Public

const getFootballStandings = (req , res) => {
     res.send("get football standings ")
}
//@desc get standings by id
//@route GET  football/standings/:teamId
//@access Public

const standingsById = (req , res) => {
     res.send("get football standings by id")
}

//@desc get team details by id
//@route GET  football/team/:teamId
//@access Public

const getFballTeamsDetailsById = (req , res) => {
     res.send("get football Teams details ")
}

//@desc get a player details
//@route GET  football/player/:playerId
//@access Public
const getPlayerDetails = (req , res) => {
     res.send("get player details")
}

module.exports = {
    getFootballScores ,
    scoresById ,
    getFootballSchedule ,
    schedulesById ,
    getFootballStandings ,
    standingsById ,
    getFballTeamsDetailsById ,
    getPlayerDetails ,
}