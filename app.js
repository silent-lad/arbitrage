// import axios from "axios";

const axios = require("axios");
const logger = require("morgan");
const express = require("express");

const app = express();

app.use(logger("dev"));
app.use(express.static("public"));

app.get("/api", (req, res) => {
  axios
    .all([
      axios.get("https://www.bitstamp.net/api/ticker/"),
      axios.get("https://www.freeforexapi.com/api/live?pairs=USDZAR"),
      axios.get("https://api.mybitx.com/api/1/ticker?pair=XBTZAR"),
    ])
    .then((resArr) => {
      var response = [resArr[0].data, resArr[1].data, resArr[2].data];

      res.send(response);
    });
});

app.get("");

app.listen("8080");
