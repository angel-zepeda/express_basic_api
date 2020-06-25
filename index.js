"use strict";
const mongoose = require("mongoose");
const app = require("./app");
const port = 3000;

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/curso_mean", { useNewUrlParser: true })
  .then(() => {
    console.log("Se conectó exitosamente");

    app.listen(port, () => {
      console.log("Servidor corriendo en puerto: " + port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
