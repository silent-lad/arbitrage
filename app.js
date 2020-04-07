// import axios from "axios";

const axios = require("axios");

axios.get("https://www.bitstamp.net/api/ticker/").then((res) => {
  console.log(res.data);
});
// axios({
//   method: "get",
//   url: "https://www.freeforexapi.com/api/live?pairs=USDZAR",
//   mode: "no-cors",
//   withCredentials: true,
//   crossdomain: true,
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Content-Type": "application/json",
//   },
//   // credentials: "same-origin",
// }).then((res) => {
//   console.log(res);
// });
axios({
  method: "get",
  url: "https://api.mybitx.com/api/1/ticker?pair=XBTZAR",
  mode: "no-cors",
  withCredentials: true,
  crossdomain: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
  // credentials: "same-origin",
}).then((res) => {
  console.log(res.data);
});
