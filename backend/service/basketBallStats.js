const statRequest = (request) => {
  // get all statistics 
  const getStats = async (callback) => {
    const options = {
        method: 'GET',
        url: 'https://free-nba.p.rapidapi.com/stats',
        qs: {
            page: '0',
            per_page: '25'
        },
        headers: {
            'X-RapidAPI-Key': `${process.env.X_RapidAPI_Key}`,
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
        },
    }
    const mycallback = (error , body)=> {
        return callback(error , body);
    }
    request(options , mycallback);
  };
  return { getStats };
};

module.exports = statRequest ;