const playerRequest = (request) => {
    //get all players details 
    const getPlayers = async (callback) => {
        const options = {
            method: 'GET',
            url: 'https://free-nba.p.rapidapi.com/players',
            qs: {
                page: '0',
                per_page: '25'
            },
            headers: {
                'X-RapidAPI-Key': `${process.env.X_RapidAPI_Key}`,
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            },
        };
        const mycallback = (error, body) => {
            return callback(error, body)
        };
        request(options, mycallback);
    }

    // get a specific player 
    const getPlayerId = async (id, mycallback) => {
        const options = {
            method: 'GET',
            url: 'https://free-nba.p.rapidapi.com/games',
            qs: {
                page: '0',
                per_page: '25'
            },
            headers: {
                'X-RapidAPI-Key': `${process.env.X_RapidAPI_Key}`,
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            },
        }
        const callback = (error, body) => {
            return mycallback(error, body);
        }
        request(options, callback)
    }

    return { getPlayers, getPlayerId };
}

module.exports = playerRequest;