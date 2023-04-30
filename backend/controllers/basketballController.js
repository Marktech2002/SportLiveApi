
//@desc get scores
//@route GET basketball/scores
//@access Public
const getBasketballScores = (req , res) => {
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

const getBasketballSchedule = (req , res) => {
    res.send("get BasketballSchedules")
}

//@desc get schedules by id
//@route GET basketball/schedules/:teamId
//@access Public
const schedulesById = (req , res) => {
    res.send("get Basketballschedules by id")
}

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

const getTeamsDetailsById = (req , res) => {
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
   getTeamsDetailsById ,
   getPlayerDetails ,
}