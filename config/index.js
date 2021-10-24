const mongoose = require("mongoose");

const initMongoose = () => {
    const dbURI = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-shard-00-00.phmfi.mongodb.net:27017,cluster0-shard-00-01.phmfi.mongodb.net:27017,cluster0-shard-00-02.phmfi.mongodb.net:27017/nodeTask?ssl=true&replicaSet=atlas-5qzn4n-shard-0&authSource=admin&retryWrites=true&w=majority`;
    mongoose.connect(dbURI);
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Connected successfully");
    });
    
}
const swaggerDefinition = {
    info: {
      title: 'Node Task Swagger API',
      version: '1.0.0',
      description: 'Endpoints to test the Node Task',
    },
    host: `localhost:${process.env.PORT || 3000}`,
    basePath: '/',
    securityDefinitions: {
      bearerAuth: {
        type: 'apiKey',
        name: 'authorization',
        scheme: 'JWT',
        in: 'header',
      },
    },
};

module.exports = {
    swaggerDefinition,
    initMongoose
}