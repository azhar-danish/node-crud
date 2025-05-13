const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017/";
const mongoURI = "mongodb+srv://azhardanish9:qT4YnBPiUmuhNLGz@cluster0.dxgeyby.mongodb.net/";
const database = process.env.DB_NAME;

const mongoConnect = () => {
    mongoose.connect(mongoURI+database);
    console.log('Db connected');
}

module.exports = mongoConnect;