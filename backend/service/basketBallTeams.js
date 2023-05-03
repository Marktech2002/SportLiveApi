const teamsRequest = (request) => {
    // Get all Teams 
    const getTeams = async (mycallback) => {
        const options = {
            method: 'GET',
            url: 'https://free-nba.p.rapidapi.com/teams',
            qs: {
                page: '0',
            },
            headers: {
                'X-RapidAPI-Key': `${process.env.X_RapidAPI_Key}`,
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            },
        }
        const callback = (error, body) => {
            return mycallback(error, body)
        };
        request(options, callback)
    }
    
    // Get Teams By Id 
    const getAteam = async (id, mycallback) => {
        const options = {
            method: 'GET',
            url: `https://free-nba.p.rapidapi.com/teams/${id}`,
            qs: {
                page: '0',
            },
            headers: {
                'X-RapidAPI-Key': `${process.env.X_RapidAPI_Key}`,
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            },
        }
        const callback = (error, body) => {
            return mycallback(error, body)
        };
        request(options, callback)
    }
    return { getTeams, getAteam };
}

module.exports = teamsRequest;