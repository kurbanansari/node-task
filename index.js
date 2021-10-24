const express = require("express");
require('dotenv').config();
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
const routes = require("./routes/index.js");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
var cors = require("cors");
const { initMongoose, swaggerDefinition } = require("./config");

//init database connection
initMongoose();

//cors 
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//Routes
app.use("/", routes(router));

//swagger
const options = {
  swaggerDefinition,
  apis: ["./swagger/*.js"],
};
const swaggerSpec = swaggerJSDoc(options);
app.get("/swagger.json", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//end swagger

//server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running at port: ${process.env.PORT || 3000}`);
});
