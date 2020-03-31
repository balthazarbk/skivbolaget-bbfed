require('dotenv').config();

const config = {
    databaseURL: process.env.DATABASE,
    secretKey: process.env.SECRET_KEY,
    sendgridkey: process.env.MAIL
};

module.exports = config;