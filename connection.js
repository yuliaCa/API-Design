const mongoose = require("mongoose");

let mongoDB = `mongodb+srv://yulia2021:Hello2021@cluster0.nc9q8.mongodb.net/API-Design?retryWrites=true&w=majority`

module.exports = mongoose.connect(mongoDB);