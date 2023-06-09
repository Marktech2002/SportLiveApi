const mongoose = require('mongoose') ;
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL , {useNewUrlParser: true});
        console.log(`Connected to mongoDB : ${conn.connection.host}`.rainbow.underline);
    } catch (error) {
        console.log(error);
        process.exit(1) ;
    };
};
module.exports = connectDB ;