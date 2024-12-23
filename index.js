import { config } from "./app/config/config.js";
import express from "express";
import meteorsController from "./app/controllers/meteors.controller.js";
import roversController from "./app/controllers/rovers.controller.js";
import errorHandler from "./app/utils/errorHandler.js";
import nunjucks from "nunjucks";
const { PORT } = config;
const app = express();

nunjucks.configure("app/views", {
  autoescape: true,
  express: app,
});

app.use(express.static("public"));

app.use(meteorsController);
app.use(roversController);
app.use(errorHandler);

app.use((req, res) => {
  res.status(404).send("404, Page not found");
});

app.listen(PORT || 4000, () => {
  console.log("Server is running on port: " + PORT || 4000);
});
