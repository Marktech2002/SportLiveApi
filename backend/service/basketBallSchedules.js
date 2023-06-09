
const scheduleRequest = (request) => {
    //get all game or schedules
    const getGames = async (callback) => {
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
        request(options, function (error, response, body) {
            if (error) {
                return callback(error, null);
            }
            const respons = JSON.parse(body);
            return callback(null, respons);;
        });
    }

    // get a game or schedules by id
    const getGameById = async (id, mycallback) => {
        const options = {
            method: 'GET',
            url: `https://free-nba.p.rapidapi.com/games/${id}`,
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
        };
        request(options, callback);
    };
    return { getGames, getGameById };
};

module.exports = scheduleRequest;
