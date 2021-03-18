const mongoose = require("mongoose");

module.exports = () => {
    const self = module.exports;
    return mongoose
        .connect(process.env.MONGO_URI, {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("DB Connected")) 
        .catch(err => {
            console.error(
                "Failed to connect to mongo on startup - retrying in 5 sec", err
            );
            setTimeout(self, 5000);
        });
};