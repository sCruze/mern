module.exports = {
    PORT: process.env.PORT || 3001,
    jwtSecret: "secret my key",
    mongoUri: process.env.MONGO_URI_DEV
}