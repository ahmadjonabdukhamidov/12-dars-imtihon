import "../css/style.css";

import request from "./request.js";
import { createCountries } from "./changesUI";
import "./filter.js";
import "./mode.js";

const API = "https://countries-api-v7sn.onrender.com/countries?limit=250";

request(API)
  .then((data) => {
    createCountries(data);
  })
  .catch((err) => {
    alert(err.message);
  });
